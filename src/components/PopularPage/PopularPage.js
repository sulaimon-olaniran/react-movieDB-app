import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from '../ReUsable/Movie'
import Pagination from "react-js-pagination"
import './PopularPage.css'
import { trackPromise, usePromiseTracker } from 'react-promise-tracker'
import { DotLoader } from "react-spinners"
import PagePagination from '../ReUsable/PagePagination'


function PopularPage( {match}) {
    const { promiseInProgress } = usePromiseTracker()
    const [movies, setMovies] = useState([])
    const [activePage, setActivePage] = useState(match.params.page)
    const [allMovies, setAllmovies] = useState(0)
    const [scrollPosition, setSrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(()=>{
        console.log(scrollPosition)
    }, [scrollPosition])

    useEffect(() => {
        window.scrollTo(0, 2972)
        trackPromise(
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=644c44d2acac97a0ba2dba1edacf5a00&page=${match.params.page}`)
                .then(res => {
                    console.log(res.data.results)
                    setMovies(res.data.results)
                    setAllmovies(res.data.total_results)
                   
                })
                .catch(err => {
                    console.log(err)
                }))
    }, [match.params.page])

    
     const numOfPages = Math.floor(allMovies/20)

    return (
       <div className="popular-container">

             { promiseInProgress ?
                    <div className="img-gallary">
                        <DotLoader
                            size={150}
                            color={"lightgray"}
                        />
                  </div>
              :
                    <div className="img-gallary">

                        {
                            movies.map((movie, i) => {
                                return (
                                    <Movie key={movie.id}
                                        image={movie.poster_path}
                                        title={movie.title}
                                        id={movie.id}
                                        page={"popular"}
                                    />
                                )
                            })
                        }
                    </div>}
              <div>
              <PagePagination
                pages = {numOfPages}
                activePage = {activePage}
              />
             </div>

          

        </div>
    )
}

export default PopularPage
