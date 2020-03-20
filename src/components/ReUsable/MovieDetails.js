import React, { useState, useEffect } from 'react'
import CastCrews from './CastCrews'
import alterImage from '../alterImage.jpg'
import { trackPromise } from 'react-promise-tracker'
import { DotLoader } from "react-spinners"
import { usePromiseTracker } from "react-promise-tracker"


function MovieDetails({ match }) {
    const [movie, setMovie] = useState([])
    const { promiseInProgress } = usePromiseTracker()
    useEffect(() => {
        trackPromise(
            fetchMovieDetail()
        )
        console.log(match)
        window.scrollTo(0, 0)
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
                <button>handle click</button>
                <div className="ratings">
                    <h3>{movie.title}<br /> <span>({movie.release_date})</span></h3>
                    <p>Rating : {movie.vote_average}</p>
                </div>
                <div className="details-img">
                    {
                        promiseInProgress ?

                            <DotLoader
                                size={150}
                                color={"lightgray"}

                            /> :

                            movie.poster_path === null ? <img src={alterImage} alt="Movie Poster" /> :
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" />}
                </div>
                <div className="overview">
                    <p>{movie.overview}</p>
                </div>
            </section>

            <h3>Movie's Casts</h3>

            <section className="cast-crew">
                <CastCrews identity={match.params.id} />
            </section>
        </div>
    )

}

export default MovieDetails