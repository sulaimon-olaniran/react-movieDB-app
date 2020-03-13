import React from 'react'
import axios from 'axios'
import Movie from '../homepage/Movie'
import './PopularPage.css'
import PagePagination from './PagePagination'


function PagesOfPopular() {


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=644c44d2acac97a0ba2dba1edacf5a00`)
            .then(res => {
                console.log(res.data)
                setMovies(res.data.results)
                setAllmovies(res.data.total_results)
            })
            .catch(err => {
                console.log(err)
            })
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>

        </div>
    )
}


export default PagesOfPopular