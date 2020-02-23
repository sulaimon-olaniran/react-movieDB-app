import React, { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import Movie from './Movie'

const MovieList = () => {
    const { moviesList } = useContext(SearchContext)

    return (

        <div className="img-gallary">
            {
                moviesList.map((movie, i) => {
                    return (
                        
                            <Movie key={i}
                                image={movie.poster_path}
                            />

                    )
                })
            }

        </div>
    )

}

export default MovieList