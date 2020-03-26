import React, { useState, useEffect } from 'react'
import EachCast from './EachCast'
import './ReUsable.css'


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
      setX(x + 500)
    }

    const goRiight = ()=>{
        setX(x - 500)
        console.log(x)
    }
    const lenghts = Math.round((casts.length - 1)/5.5)

    const right = x === 0? "deactivate" : ""
    const left = x === -500 * (lenghts) ? "deactivate" : ''

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