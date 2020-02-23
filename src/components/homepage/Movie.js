import React from 'react'

const Movie = (props) =>{

    return (
        <div className="movie-poster">
            {
                props.image === null ? <img src ={`http://via.placeholder.com/150/000000/FFFFFF`} alt="Movie Poster" />
                : <img src ={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Movie Poster"/>

               
            }

        </div>
    )

}

export default Movie