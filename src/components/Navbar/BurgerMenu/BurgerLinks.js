import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
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
                    <NavLink style={linkStyle} exact to="/" onClick={closeBurger} activeClassName='is-active' >
                        <li>Home</li>
                    </NavLink>
                    <NavLink style={linkStyle} to="/search" onClick={closeBurger} activeClassName='is-active' >
                        <li >Search</li>
                    </NavLink>
                    <NavLink style={linkStyle} to={`/popular/${1}`} onClick={closeBurger} activeClassName='is-active' >
                        <li>Popular</li>
                    </NavLink>
                    <NavLink style={linkStyle} to="/upcoming" onClick={closeBurger} activeClassName='is-active'  >
                        <li>Upcoming</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )

}

export default BurgerLinks