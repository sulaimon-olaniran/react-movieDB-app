import React, { useState, useEffect } from 'react'
import EachCast from './EachCast'


function CastCrews(props) {
    const [casts, setCasts] = useState([])
    const [x, setX] = useState(0)

    useEffect(() => {
        fetchCastDetail()
    }, [])

    const fetchCastDetail = async () => {
        const castDetails = await fetch(`https://api.themoviedb.org/3/movie/${props.identity}/credits?api_key=644c44d2acac97a0ba2dba1edacf5a00`)
        const casts = await castDetails.json()
        console.log(casts.cast)
        setCasts(casts.cast)
    }
    const goLeft = ()=>{
       setX(x + 100)
    }

    const goRiight = ()=>{
        setX(x-100)
    }

    return (
        <div className="cast-slider-con">
            {
                casts.map((cast, index) => {
                    return (
                        <div key={index} className="cast-slider"
                        style={{transform : `translateX(${x}%)`}}
                        >
                            <EachCast
                                image={cast.profile_path}
                                name={cast.name}
                                character={cast.character}
                            />
                        </div>
                    )
                })
            }
           {/* <button className="slide-button" id="go-left" onClick={goLeft} >Go Left</button>
            <button className="slide-button" id="go-right" onClick={goRiight}>Go Right</button>*/}
        </div>
    )

}


export default CastCrews