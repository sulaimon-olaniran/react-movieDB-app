import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SlideImage from './SlideImg'

function ImgSlider(){
   useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=644c44d2acac97a0ba2dba1edacf5a00`)
    .then(res => {
        setImages(res.data.results)
        console.log(res.data.results)
    })
    .catch(err => {
        console.log(err)
    })
   }, [])
   const [images, setImages] = useState([])
   const [x, setX] = useState(0)

   useEffect(() => {
    const interval = setInterval(() => {
      x === -100 * (images.length - 1) ? setX(0) :  setX(x - 100);
    }, 2000);
    return () => clearInterval(interval);
  }, [x]);

  return(
      <div className="slider-container">
        {
            images.map((image, index) =>{
                return(
                    <div key={index} className="img-slider"
                     style={{transform : `translateX(${x}%)`}}
                    >
                        <SlideImage source={image.poster_path}/>
                    </div>
                )
            })
        }
      </div>
  )

}

export default ImgSlider