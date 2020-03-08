import React, {useContext} from 'react'
import './Burger.css'
import { SearchContext } from '../../contexts/SearchContext'

function BackDrop(){
    const {closeBurger} = useContext(SearchContext)
   return(
       <div className="back-drop" onClick={closeBurger}/>
   )

}

export default BackDrop