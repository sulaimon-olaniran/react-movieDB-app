import React, { useContext } from 'react'
import '../components.css'
import { SearchContext } from '../contexts/SearchContext'


const SearchMovies = () => {
    const {handleSubmission, handleChange} = useContext(SearchContext)

  return (
    <div className="search-div">
      <section className="form-section">
        <form >
          <input type="text" placeholder="Search For Movie...."
            onChange={handleChange}
          />
          <button onClick={handleSubmission} >Search</button>
          
        </form>
      </section>
    </div>
  )
}

export default SearchMovies