import React, { useState, useEffect } from 'react'
import EachCast from './EachCast'
import './ReUsable.css'


function CastCrews(props) {
    const [casts, setCasts] = useState([])
    const [castLength, setCastLength] = useState(0)
    const [x, setX] = useState(0)

    useEffect(() => {
        const fetchCastDetail = async () => {
            const castDetails = await fetch(`https://api.themoviedb.org/3/movie/${props.identity}/credits?api_key=644c44d2acac97a0ba2dba1edacf5a00`)
            const casts = await castDetails.json()
            console.log(casts.cast)
            setCastLength(casts.cast.length)
            setCasts(casts.cast)
        }
        fetchCastDetail()
    }, [props.identity])

    
    const goLeft = ()=>{
      setX(x + 100)
    }

    const goRiight = ()=>{
        setX(x - 100)
        console.log(x)
    }

    const right = x === 0 ? "deactivate" : ""
    const left = x === -100 * (castLength - 6 ) ? "deactivate" : ''

    return (
        <div className="cast-slider-con">
            <button onClick={goLeft} className={`slide-button ${right}`} id="left">&laquo;</button>
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
            <button onClick={goRiight} className={`slide-button ${left}`} id="right">&raquo;</button>
        </div>
    )

}


export default CastCrews