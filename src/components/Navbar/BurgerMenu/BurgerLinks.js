import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Burger.css'
import { SearchContext } from '../../contexts/SearchContext'


function BurgerLinks() {
    const { burgerLink, closeBurger } = useContext(SearchContext)
    const linkStyle = {
        color: 'white'
    }

    let burgerClass = "link-drawer"

    if (burgerLink === true) {
        burgerClass = "link-drawer open"
    }
    return (
        <nav className={burgerClass}>
            <button onClick={closeBurger}>Close</button>
            <ul className="burger-ul">
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

export default BurgerLinks