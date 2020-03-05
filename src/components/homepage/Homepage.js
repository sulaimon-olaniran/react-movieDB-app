import React, {useEffect} from 'react'
import '../components.css'
import './Homepage.css'
import ImgSlider from './ImgSlider'



function Homepage() {
    useEffect(()=>{
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <section className="home" >
                <ImgSlider />
            </section>
        </div>

    )

}

export default Homepage