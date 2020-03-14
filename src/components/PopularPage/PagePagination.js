import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './PopularPage.css'



function PagePagination({nextPage, activePage, pages, page}) {
    const pageLinks = []

    for (let i = 1; i <= pages ; i++){
       // let active = activePage === i ? "active" : ""
        pageLinks.push(<Link className={'page-links'} key={i} to={`/popular/${i}`}>{i}</Link>)
    }

    return (
        <div>
           <ul className={"pageination-links"}>
               {pageLinks}
           </ul>
        </div>
    )

}

export default PagePagination