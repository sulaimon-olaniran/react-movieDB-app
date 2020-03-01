import React, { createContext, useState } from 'react'
import axios from 'axios'


export const SearchContext = createContext()

const apiKey = "644c44d2acac97a0ba2dba1edacf5a00"


const SearchContextProvider = (props) => {
    const [searchField, setSearchField] = useState("")
    const [moviesList, setMoviesList] = useState([])
    const [pages, setPages] = useState(1)
    const [totalMovies, setTotalmovies] = useState(0)

    const handleChange = (e) => {
        setSearchField(e.target.value)
    }

    const backToSearch = (e) => {
        e.preventDefault()
        setMoviesList([])
        setTotalmovies(0)
        setPages(1)
    }

    const handleSubmission = (e) => {
        setPages(pages + 1) 
        e.preventDefault()
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchField}`)
        .then(res => {
            setMoviesList(res.data.results)
            setTotalmovies(res.data.total_results)
            console.log(res.data)
            console.log(res.data.total_results)
           
        })
        .catch(err => {
            console.log(err)
        })
    }

    const fetchMoreData = () => {
        setPages(pages + 1) 
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchField}&page=${pages}`)
            .then(res => {
                setMoviesList(moviesList.concat(res.data.results))
               
            })
            .catch(err => {
                console.log(err)
            }) 

    }



    return (
        <SearchContext.Provider value={{
            searchField, moviesList, totalMovies, handleSubmission: handleSubmission,
            handleChange: handleChange, fetchMoreData: fetchMoreData, backToSearch : backToSearch
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider
