import React from 'react'
import { Link } from 'react-router-dom'
import alterImage from '../alterImage.jpg'
import './ReUsable.css'

const Movie = (props) => {
    
    return (
        <Link className="movie-poster" to={`/${props.page}/id/${props.id}`}>

            {
                props.image === null ? <img src={alterImage} alt="Movie Poster" />
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
