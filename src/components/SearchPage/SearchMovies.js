import React, { useContext, useEffect } from 'react'
import './Searchpage.css'
import { SearchContext } from '../contexts/SearchContext'
import { Link } from 'react-router-dom'


const SearchMovies = () => {
  const { handleChange, searchField } = useContext(SearchContext)
 
  return (
    <div className="search-page">
    <div className="search-div">
      <section className="form-section">
        <form >
          <input type="text" placeholder="Search For Movie...."
            onChange={handleChange}
          />
          <Link to={`/search/${searchField}`}>
            <button  className="form-button">Search</button>
          </Link>
        </form>
      </section>
    </div>
    </div>
  )
}

export default SearchMovies