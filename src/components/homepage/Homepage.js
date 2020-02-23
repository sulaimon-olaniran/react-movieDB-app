import React, {useContext} from 'react'
import '../components.css'
import SearchMovies from './SearchMovies'
//import SearchContextProvider from '../contexts/SearchContext'
import { SearchContext } from '../contexts/SearchContext'
import MovieList from './MovieList'


function Homepage() {
    const { moviesList} = useContext(SearchContext)

    return (
         
        <section className="home-page" >
              {
                  moviesList.length < 1 ? <SearchMovies /> : <MovieList />}
        </section>
    )

}

export default Homepage