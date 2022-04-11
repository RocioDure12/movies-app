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
    fetch(`${baseUrlApi}/movie/now_playing?api_key=${apiKey}&language=es-ES`)
      .then(res => res.json())
      .then(data => setPelicula(data.results))

  }, [])

  return (
    <div className="container-carousel">
      <Slider style={{}}
        arrows={true}
        slidesToShow={1}
        autoplay={false}
        autoplaySpeed={3000}
        infinite={true}
        dots={true}
      >
        {pelicula.map((pelicula) => (

          <div key={pelicula.id}  >

            <img src={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`} />

            <div className="info-pelicula">
              <p>{pelicula.overview}</p>
              <Link to={`/pelicula/${pelicula.id}`}><button>Ver Más</button></Link>
            </div>

          </div>

        ))

        }

      </Slider >
    </div>
  );
}



export default Carousel;