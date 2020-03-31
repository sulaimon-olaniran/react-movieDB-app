import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

const SearchContextProvider = (props) => {
    const [searchField, setSearchField] = useState("")
    const [burgerLink, setBurgerLink] = useState(false)

    const handleChange = (e) => {
        setSearchField(e.target.value)
    }

    const handleBurger = () => {
        setBurgerLink(!burgerLink)
    }
    const closeBurger = () => {
        setBurgerLink(false)
        localStorage.removeItem('identity')
    }



    return (
        <SearchContext.Provider value={{
            searchField, handleBurger: handleBurger, handleChange: handleChange, burgerLink,
            closeBurger: closeBurger
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider
