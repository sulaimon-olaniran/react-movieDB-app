import React from 'react'
import './components.css'
import {Link} from 'react-router-dom'
import pageLog from './pageLog.ico'

function NavBar () {
  const linkStyle = {
    color : 'white' 
  }
   
    return (
        <nav>
        <div className="logo">
       <img src={pageLog} alt="Logo" />
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
         <Link style={linkStyle} to="/about">
         <li>About</li>
         </Link>
       </ul>
       </nav>
    )
}

export default NavBar