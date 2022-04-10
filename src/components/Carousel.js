import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.scss";
import { useEffect, useState } from "react";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";
import { Link } from "react-router-dom";


const Carousel = () => {

  const [pelicula, setPelicula] = useState([])
  useEffect(() => {
    fetch(`${baseUrlApi}/movie/now_playing?api_key=${apiKey}&languaje=es-ES`)
      .then(res => res.json())
      .then(data => setPelicula(data.results))

  }, [])

  return (
    <div className="container-carousel">
      <Slider style={{}}
        arrows={true}
        slidesToShow={1}
        autoplay={true}
        autoplaySpeed={3000}
        infinite={true}
        dots={true}
      >
        {pelicula.map((pelicula) => (
          
            <div key={pelicula.id}>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} />
              </div>

              <div>
                <Link to={`/pelicula/${pelicula.id}`}><button>Ver Más</button></Link>
              </div>

              <div>
                <p>{pelicula.overview}</p>
              </div>
            </div>
    
        ))

        }

      </Slider >
    </div>
  );
}



export default Carousel;