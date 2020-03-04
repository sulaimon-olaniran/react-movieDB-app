import React, { useState, useEffect } from 'react';
import axios from 'axios'


function DataFetch() {
    const [datas, setData] = useState()

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/19940/credits?api_key=644c44d2acac97a0ba2dba1edacf5a00')
            .then(res => {
                //console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleClick = () => {
        console.log(datas.cast[1].character)
    }
    return (
        <div>
            <h1>{}</h1>
            <button onClick={handleClick} >click me</button>
        </div>
    )
}
 

export default DataFetch