import React from 'react'
import '../components.css'
import ImgSlider from './ImgSlider'



function Homepage() {

    return (
        <div>
            <section className="home" >
                <ImgSlider />
            </section>
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>

    )

}

export default Homepage