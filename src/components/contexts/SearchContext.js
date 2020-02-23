import React, { createContext, useState } from 'react'
import axios from 'axios'


export const SearchContext = createContext()

const apiKey = "644c44d2acac97a0ba2dba1edacf5a00"

const SearchContextProvider = (props) => {
    const [searchField, setSearchField] = useState("")
    const [moviesList, setMoviesList] = useState([])

    const handleChange = (e) => {
        setSearchField(e.target.value)
    }

    const handleSubmission = (e) => {
        e.preventDefault()
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchField}`)
            .then(res => {

                setMoviesList(res.data.results)
                console.log(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <SearchContext.Provider value={{ searchField, moviesList, handleSubmission: handleSubmission, handleChange: handleChange }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider
