import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.scss";
import { useEffect, useState } from "react";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";

const Carousel = () => {

  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    fetch(`${baseUrlApi}/movie/now_playing?api_key=${apiKey}&languaje=es-ES`)
      .then(res => res.json())
      .then(data => setPeliculas(data.results))

  }, [])
  return (
    <div className="container-carousel">
      <Slider

        arrows={true}
        slidesToShow={1}
        autoplay={true}
        autoplaySpeed={4000}
      >
      <div>
        <img src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wM2M1MDE4ZDUxN2M1NDQzMTNhMjM3ODk1MmE4MDljNj9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.xBlycO3yocovqle_HvbXDNeC1Xi9Ccug07Ce2w3eZag"/>
      </div>
      <div>
        <img src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wM2M1MDE4ZDUxN2M1NDQzMTNhMjM3ODk1MmE4MDljNj9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.xBlycO3yocovqle_HvbXDNeC1Xi9Ccug07Ce2w3eZag"/>
      </div>
      <div>
        <img src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wM2M1MDE4ZDUxN2M1NDQzMTNhMjM3ODk1MmE4MDljNj9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.xBlycO3yocovqle_HvbXDNeC1Xi9Ccug07Ce2w3eZag"/>
      </div>


      </Slider>
    </div>
  )
}

export default Carousel;