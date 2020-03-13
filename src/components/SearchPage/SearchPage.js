import React, { useContext, useEffect } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import SearchMovies from './SearchMovies'
import MovieList from './MovieList'
import './Searchpage.css'


function SearchPage() {
  const { loaded, totalMovies } = useContext(SearchContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="search-page" >
      {
        totalMovies === 0 & loaded === false ? <SearchMovies /> : <MovieList />}
    </section>
  )
}

export default SearchPage