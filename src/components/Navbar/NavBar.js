import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
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
        <Link style={linkStyle} to="/" onClick={closeBurger}>
          <img src={logoPage} alt="Logo" />
        </Link>
      </div>
      <ul className="ul-nav">
        <Link style={linkStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={linkStyle} to="/search">
          <li >Search</li>
        </Link>
        <Link style={linkStyle} to={`/popular`} >
          <li>Popular</li>
        </Link>
        <Link style={linkStyle} to="/upcoming" >
          <li>Upcoming</li>
        </Link>
      </ul>
      <div>
        <BurgerButton />
      </div>
    </nav>
  )
}

export default NavBar