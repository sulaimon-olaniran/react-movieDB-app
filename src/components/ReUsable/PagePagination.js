import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './ReUsable.css'


function PagePagination({ pages, activePage }) {
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
                to={`/popular/${i}`}
                className={`page-links ${active}`}
                key={i}
            >
                {i}
            </NavLink>
        )
    }

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
            <div className="prev-buttons">
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

            <div className="next-buttons">
                <button onClick={nextPage}>&raquo;</button>
            </div>
        </div>
    )

}

export default PagePagination