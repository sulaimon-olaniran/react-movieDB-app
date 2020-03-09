import React, {useContext} from 'react'
import './Burger.css'
import { SearchContext } from '../../contexts/SearchContext'

function BurgerButton (){
    const {handleBurger} = useContext(SearchContext)

   return(
       <button className="burger-button" onClick={handleBurger}>
           <div className="burger"/>
           <div className="burger"/>
           <div className="burger"/>
       </button>
   )
}

export default BurgerButton