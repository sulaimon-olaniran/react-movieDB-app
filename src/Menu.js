import React, { useContext } from 'react'
import BurgerLinks from './components/Navbar/BurgerMenu/BurgerLinks';
import BackDrop from './components/Navbar/BurgerMenu/BackDrop';
import { SearchContext } from './components/contexts/SearchContext';

function Menu() {
    const { burgerLink } = useContext(SearchContext)
    return (

        <div>{
            burgerLink ?
                <BackDrop />
                :
                null
        }
            <BurgerLinks />
        </div>
    )

}

export default Menu