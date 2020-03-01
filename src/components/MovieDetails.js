import React, { useState, useEffect } from 'react'
import CastCrews from './CastCrews'


function MovieDetails({ match }) {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetchMovieDetail()
    }, [])

    const fetchMovieDetail = async () => {
        const movieDetail = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=644c44d2acac97a0ba2dba1edacf5a00`)
        const movie = await movieDetail.json()
        console.log(movie)
        setMovie(movie)
    }
    return (
        <div className="movie-details">
            <section className="details-section">
                <div className="ratings">
                    <h3>{movie.title}<br/> <span>({movie.release_date})</span></h3>
                    <p>Rating : {movie.vote_average}</p>
                </div>
                <div className="details-img">
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Movie Poster" />
                </div>
                <div className="overview">
                 <p>{movie.overview}</p>
                </div>
            </section>

            <section className="cast-crew">
                <CastCrews identity={match.params.id}/>
            </section>
        </div>
    )

}

export default MovieDetails