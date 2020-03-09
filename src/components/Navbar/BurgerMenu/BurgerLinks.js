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
            <div className="close-burger-div">
                <button onClick={closeBurger}>X</button>
            </div>
            <div>
                <ul className="burger-ul">
                    <Link style={linkStyle} to="/" onClick={closeBurger}>
                        <li>Home</li>
                    </Link>
                    <Link style={linkStyle} to="/search" onClick={closeBurger}>
                        <li >Search</li>
                    </Link>
                    <Link style={linkStyle} to="/popular" onClick={closeBurger}>
                        <li>Popular</li>
                    </Link>
                    <Link style={linkStyle} to="/upcoming" onClick={closeBurger} >
                        <li>Upcoming</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )

}

export default BurgerLinks