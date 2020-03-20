import React, { useContext } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logoPage from './logoPage.png'
import BurgerButton from './BurgerMenu/BugerButton'
import { SearchContext } from '../contexts/SearchContext'
import { withRouter } from 'react-router-dom';

function NavBar() {
  const { closeBurger } = useContext(SearchContext)
  const linkStyle = {
    color: 'white'
  }

  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link  to="/" onClick={closeBurger}>
          <img src={logoPage} alt="Logo" className="logo-image"/>
        </Link>
      </div>
      <ul className="ul-nav">
        <NavLink  style={linkStyle}  to="/"  >
          <li>Home</li>
        </NavLink>
        <NavLink style={linkStyle}  to="/search">
          <li >Search</li>
        </NavLink>
        <NavLink style={linkStyle}  to={`/popular`} >
          <li>Popular</li>
        </NavLink>
        <NavLink style={linkStyle}  to="/upcoming" >
          <li>Upcoming</li>
        </NavLink>
      </ul>
      <div>
        <BurgerButton />
      </div>
    </nav>
  )
}

export default NavBar