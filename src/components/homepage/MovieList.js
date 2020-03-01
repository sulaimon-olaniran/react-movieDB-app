import React, { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import InfiniteScroll from "react-infinite-scroll-component";
import Movie from './Movie'

const MovieList = () => {
    const { moviesList, fetchMoreData, backToSearch, totalMovies } = useContext(SearchContext)

    return (
        <div className="listed-movies">
            <InfiniteScroll
                dataLength={moviesList.length}
                next={fetchMoreData}
                hasMore={
                    totalMovies > moviesList.length ? true : false
                }
                loader={<div className="loader"><p>Loading...</p></div>}

            >
                <div className="back-btn">
                    <button onClick={backToSearch}>Back to Search</button>
                </div>



                <div className="img-gallary">

                    {
                        moviesList.map((movie, i) => {
                            return (
                                <Movie key={movie.id}
                                    image={movie.poster_path}
                                    title={movie.title}
                                    id={movie.id}
                                />
                            )
                        })
                    }
                </div>

            </InfiniteScroll>
        </div>

    )

}

export default MovieList