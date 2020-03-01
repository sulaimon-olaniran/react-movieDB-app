import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {

    return (
         <Link className="movie-poster" to={`/search/${props.id}`}>
        
            {
                props.image === null ? <img src={`https://via.placeholder.com/150/000000/FFFFFF`} alt="Movie Poster" />
                    : <img src={`https://image.tmdb.org/t/p/w342${props.image}`} alt="Movie Poster" />}
            <div className="movie-title">

                <p>
                    {props.title}
                </p>
            </div>

        
        </Link>

    )

}

export default Movie
