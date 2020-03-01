import React from 'react'

function SlideImage(props){

    return(
        <div className="slide-img" >
        <img src={`https://image.tmdb.org/t/p/w500${props.source}`} alt="img slides"/>
        </div>
    )
}

export default SlideImage