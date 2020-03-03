import React from 'react'
import alterImage from './alterImage.jpg'


function EachCast(props) {
    return (
        <div className="cast-detail">
        { props.image === null ? <img src={alterImage} alt="Movie Poster" /> :
        <img src={`https://image.tmdb.org/t/p/w342${props.image}`} alt="img slides" />}
            <div className="character">
                <p id="name">{props.name}</p>
                <p id="character">{props.character}</p>
            </div>
        </div>
    )
}

export default EachCast