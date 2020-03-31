import React, { useEffect, useState } from 'react'
import './Searchpage.css'
import Movie from '../ReUsable/Movie'
import MovieNotFound from './MovieNotFound'
import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'
import { usePromiseTracker } from "react-promise-tracker"
import { DotLoader } from "react-spinners"
import PagePagination from '../ReUsable/PagePagination'

const SearchMovieList = ({ match }) => {
    const { promiseInProgress } = usePromiseTracker()
    const apiKey = "644c44d2acac97a0ba2dba1edacf5a00"
    const [moviesList, setMoviesList] = useState([])
    const [totalMovies, setTotalmovies] = useState(0)
    const [loading, setLoading] = useState(false)
    const activePage = match.params.page

    useEffect(() => {
        trackPromise(
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${match.params.movie}&page=${match.params.page}`)
                .then(res => {
                    setMoviesList(res.data.results)
                    setTotalmovies(res.data.total_results)
                    setLoading(true)
                })
                .catch(err => {
                    console.log(err)
                }))
    }, [match.params.page, match.params.movie])
   
    const numOfPages = Math.floor(totalMovies / 20)


    return (
        <div className="listed-movies">

                { promiseInProgress ?
                    <div className="img-gallary">
                        <DotLoader
                            size={150}
                            color={"lightgray"}
                        />
                    </div>
                    : loading && totalMovies === 0 ?
                    <div className="img-gallary"> <MovieNotFound/></div>
                    :
                   
                    <div className="img-gallary">
                        
                        {
                            moviesList.map((movie) => {
                                return (
                                    <Movie key={movie.id}
                                        image={movie.poster_path}
                                        title={movie.title}
                                        id={movie.id}
                                        page={`search/${match.params.movie}/${match.params.page}`}
                                    />
                                )
                            })
                        }
                        
                    </div>
    
                    }
             <PagePagination
               page = {`search/${match.params.movie}`}
               activePage = {activePage}
               pages = {numOfPages}
             />
          
        </div>
    )
}

export default SearchMovieList