import React, { useState } from 'react'
import {Link} from 'react-router-dom'



function PagePagination({nextPage, activePage, pages, page}) {
    const pageLinks = []

    for (let i = 1; i <= pages ; i++){
       // let active = activePage === i ? "active" : ""
        pageLinks.push(<li className={'page-links'} key={i}>{i}</li>)
    }

    return (
        <div>
           <ul>
               <Link to={`/popular/${5}`}>
               {pageLinks}
               </Link>
           </ul>
        </div>
    )

}

export default PagePagination