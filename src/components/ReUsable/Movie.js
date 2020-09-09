import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import alterImage from '../alterImage.jpg'
import './ReUsable.css'

const Movie = (props) => {
    const elementId = `h${props.id}`

    const saveId = () => {
        localStorage.setItem('identity', (elementId));
    }

    useEffect(() => {
        const getData = localStorage.getItem('identity');
        if (getData !== null ) {
            document.getElementById(getData).scrollIntoView(true)
        }
        else {
            window.scrollTo(0, 0)
        }

    }, [])

    return (

        <Link className="movie-poster" to={`/${props.page}/id/${props.id}`} onClick={saveId}>

            {
                props.image === null ? <img src={alterImage} alt="Movie Poster" />
                    : <img src={`https://image.tmdb.org/t/p/w342${props.image}`} alt="Movie Poster" id={`h${props.id}`} />}

            <div className="movie-title">

                <p>
                    {props.title}
                </p>
            </div>


        </Link>

    )

}

export default Movie
