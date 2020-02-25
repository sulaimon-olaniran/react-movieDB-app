import React, { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import InfiniteScroll from "react-infinite-scroll-component";
import Movie from './Movie'

const MovieList = () => {
    const { moviesList, fetchMoreData, totalMovies,backToSearch } = useContext(SearchContext)

    return (
        <InfiniteScroll
            dataLength={moviesList.length}
            next={fetchMoreData}
            hasMore={totalMovies > moviesList.length}
            loader={<div className="loader"><p>Loading...</p></div>}

        >
            <div className="back-btn">
                <button onClick={backToSearch}>Back to Search</button>
                
            </div>
            <div className="img-gallary">
                {
                    moviesList.map((movie, i) => {
                        return (

                            <Movie key={i}
                                image={movie.poster_path}
                                title={movie.title}
                            />
                        )
                    })
                }
            </div>
        </InfiniteScroll>

    )

}

export default MovieList