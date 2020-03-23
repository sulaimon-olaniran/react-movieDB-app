import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './ReUsable.css'


function PagePagination({ pages, activePage, page }) {
    const pageLinks = []
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(9)

    useEffect(() => {
        let n = activePage / 10
        let number = Math.floor(n)
        let ender = (number * 10) + 9
        let starter = ender - 10

        if (number !== 0) {
            setStart(starter)
            setEnd(ender)
        }


    }, [])

    

    for (let i = 1; i <= pages; i++) {
        let active = activePage === i ? "active" : ""
        pageLinks.push(
            <NavLink
                to={`/${page}/${i}`}
                className={`page-links ${active}`}
                key={i}
            >
                {i}
            </NavLink>
        )
    }
     const buttonClass = pages <= 9 ? "null-div" : "button-div" 

    const nextPage = () => {
        if (end + 1 < pages) {
            setStart(start + 9)
            setEnd(end + 10)
        }
    }

    const prevPage = () => {
        if (end > 9) {
            setStart(start - 9)
            setEnd(end - 10)
        }
    }


    return (
        <div className="pagination-con">
            <div className={buttonClass}>
                <button onClick={prevPage}>&laquo;</button>
            </div>
            <div className="pagination-links">
                {
                    pageLinks.slice(start, end).map((page, index) => (
                        <div key={index} className="each-page" >
                            {page}
                        </div>

                    ))
                }
            </div>

            <div className={buttonClass}>
                <button onClick={nextPage}>&raquo;</button>
            </div>
        </div>
    )

}

export default PagePagination