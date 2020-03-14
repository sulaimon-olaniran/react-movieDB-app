import React, {useEffect} from 'react'
import axios from 'axios'
import Movie from '../homepage/Movie'
import './PopularPage.css'
import PagePagination from './PagePagination'



function PagesOfPopular({match}) {


    useEffect(() => {
       console.log(match)
    }, [])

    return (
        <div>
            <h1 color={"white"}>Hello world</h1>
        </div>
    )
}


export default PagesOfPopular