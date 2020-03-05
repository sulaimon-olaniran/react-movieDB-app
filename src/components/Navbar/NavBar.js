import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import pageLog from './pageLog.ico'
import logoPage from './logoPage.png'

function NavBar () {
  const linkStyle = {
    color : 'white' 
  }
   
    return (
        <nav>
        <div className="logo">
       <img src={logoPage} alt="Logo" />
       </div>
       <ul>
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
       </nav>
    )
}

export default NavBar