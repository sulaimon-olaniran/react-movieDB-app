import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logoPage from './logoPage.png'
import BurgerButton from './BurgerMenu/BugerButton'

function NavBar() {
  const linkStyle = {
    color: 'white'
  }

  return (
    <nav>
      <div className="logo">
        <img src={logoPage} alt="Logo" />
      </div>
      <ul className="ul-nav">
        <Link style={linkStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={linkStyle} to="/search">
          <li >Search</li>
        </Link>
        <Link style={linkStyle} to="/popular" >
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