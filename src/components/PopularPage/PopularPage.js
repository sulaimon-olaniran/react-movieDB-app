import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from '../homepage/Movie'
import Pagination from "react-js-pagination"
import './PopularPage.css'



function PopularPage() {
    const [movies, setMovies] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [allMovies, setAllmovies] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=644c44d2acac97a0ba2dba1edacf5a00&page=${activePage}`)
            .then(res => {
                console.log(res.data.results)
                setMovies(res.data.results)
                setAllmovies(res.data.total_results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    

    const getMorePages = (pageNumber) =>{
        setActivePage(pageNumber)
    }

    return (
        <div className="popular-container">
           
            <div className="img-gallary">

                {
                    movies.map((movie, i) => {
                        return (
                            <Movie key={movie.id}
                                image={movie.poster_path}
                                title={movie.title}
                                id={movie.id}
                            />
                        )
                    })
                }
            </div>}
            <Pagination
                activePage={activePage}
                itemsCountPerPage={20}
                totalItemsCount={allMovies}
                pageRangeDisplayed={5}
                onChange={getMorePages}
               activeLinkClass="active-link"
                
            />

        </div>
    )
}

export default PopularPage