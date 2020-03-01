import React, {useContext} from 'react'
import { SearchContext } from '../contexts/SearchContext'
import SearchMovies from '../homepage/SearchMovies'
import MovieList from '../homepage/MovieList'
import '../components.css'

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