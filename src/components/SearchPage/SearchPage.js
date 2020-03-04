import React, {useContext} from 'react'
import { SearchContext } from '../contexts/SearchContext'
import SearchMovies from './SearchMovies'
import MovieList from './MovieList'
import './Searchpage.css'

function SearchPage(){
  const {moviesList} = useContext(SearchContext)

    return (
        <section className="search-page" >
           {
                  moviesList.length < 1 ? <SearchMovies /> : <MovieList />}
        </section>
    )
}

export default SearchPage