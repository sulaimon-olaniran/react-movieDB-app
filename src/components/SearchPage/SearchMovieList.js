import React, { useEffect, useState } from 'react'
import './Searchpage.css'
import InfiniteScroll from "react-infinite-scroll-component"
import Movie from '../ReUsable/Movie'
import MovieNotFound from './MovieNotFound'
import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'
import { usePromiseTracker } from "react-promise-tracker"
import { DotLoader, BeatLoader } from "react-spinners"
import CustomScroll from 'react-custom-scroll'
import './customScroll.css'


const SearchMovieList = ({ match }) => {
    const { promiseInProgress } = usePromiseTracker()
    const apiKey = "644c44d2acac97a0ba2dba1edacf5a00"
    const [moviesList, setMoviesList] = useState([])
    const [pages, setPages] = useState(2)
    const [totalMovies, setTotalmovies] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        trackPromise(
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${match.params.movie}`)
                .then(res => {
                    setMoviesList(res.data.results)
                    setTotalmovies(res.data.total_results)
                    setLoading(true)
                })
                .catch(err => {
                    console.log(err)
                }))
    }, [])

    const fetchMoreData = () => {
        setPages(pages + 1)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${match.params.movie}&page=${pages}`)
            .then(res => {
                setMoviesList(moviesList.concat(res.data.results))
            })
    }

    return (
        <CustomScroll>
        <div className="listed-movies">
         
            <InfiniteScroll
                dataLength={moviesList.length}
                next={fetchMoreData}
                hasMore={totalMovies > moviesList.length ? true : false}
                loader={<div className="loader"><BeatLoader color={"lightgray"} size={30} /> </div>}
            >

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
                                        page={"search"}
                                    />
                                )
                            })
                        }
                        
                    </div>
    
                    }

            </InfiniteScroll>
            
        </div>
        </CustomScroll>
    )
}

export default SearchMovieList