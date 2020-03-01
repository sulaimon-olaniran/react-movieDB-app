import React from 'react'


function EachCast(props) {
    return (
        <div className="cast-detail">
            <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="img slides" />
            <div className="character">
                <p id="name">{props.name}</p>
                <p id="character">{props.character}</p>
            </div>
        </div>
    )
}

export default EachCast