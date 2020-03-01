import React from 'react'
import './components.css'
import {Link} from 'react-router-dom'

function NavBar () {
  const linkStyle = {
    color : 'white' 
  }
   
    return (
        <nav>
       <h1>Logo</h1>
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