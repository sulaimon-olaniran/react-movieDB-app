import React, { useContext, useEffect } from 'react'
import '../components.css'
import { SearchContext } from '../contexts/SearchContext'
import { usePromiseTracker } from "react-promise-tracker"
import { DotLoader } from "react-spinners"


const SearchMovies = () => {
  const { handleSubmission, handleChange } = useContext(SearchContext)
  const { promiseInProgress } = usePromiseTracker()

  return (
    <div className="search-div">
      {promiseInProgress ?

        <DotLoader
          size={150}
          color={"lightgray"}

        />
        :
        <section className="form-section">
          <form >
            <input type="text" placeholder="Search For Movie...."
              onChange={handleChange}
            />
            <button onClick={handleSubmission} >Search</button>

          </form>
        </section>
      }
    </div>
  )
}

export default SearchMovies