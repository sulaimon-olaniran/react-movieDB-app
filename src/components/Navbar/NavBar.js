import React, { useContext } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logoPage from './logoPage.png'
import BurgerButton from './BurgerMenu/BugerButton'
import { SearchContext } from '../contexts/SearchContext'

function NavBar() {
  const { closeBurger } = useContext(SearchContext)
  const linkStyle = {
    color: 'white'
  }

  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link  to="/" onClick={closeBurger} className="logo-link">
          <img src={logoPage} alt="Logo" className="logo-image"/>
        </Link>
      </div>
      <ul className="ul-nav">
        <NavLink  style={linkStyle} exact to="/" activeClassName="active-link" >
          <li>Home</li>
        </NavLink>
        <NavLink style={linkStyle}  to="/search" activeClassName="active-link">
          <li >Search</li>
        </NavLink>
        <NavLink style={linkStyle}  to={`/popular/${1}`}  activeClassName="active-link">
          <li>Popular</li>
        </NavLink>
        <NavLink style={linkStyle} to={`/upcoming/${1}`}  activeClassName="active-link">
          <li>Upcoming</li>
        </NavLink>
      </ul>
      <div className="test">
        <BurgerButton />
      </div>
    </nav>
  )
}

export default NavBar