import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.scss";
import { useEffect, useState } from "react";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [pelicula, setPelicula] = useState([]);
  useEffect(() => {
    fetch(`${baseUrlApi}/movie/now_playing?api_key=${apiKey}&language=es-ES`)
      .then((res) => res.json())
      .then((data) => setPelicula(data.results));
  }, []);

  return (
    <div className="container-carousel">
      <Slider
        style={{}}
        arrows={false}
        slidesToShow={1}
        autoplay={true}
        autoplaySpeed={3000}
        infinite={true}
      >
        {pelicula.map((pelicula) => (
          <div key={pelicula.id}>
            {/* un alt que dice "imagen-pelicula" no le sirve de nada al usuario lector de pantalla. mejor poner el titulo de la peli 
recorda no poner guiones en los alt: debe ser un texto legible, no es codigo*/}
            <img
              alt="imagen-pelicula"
              src={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`}
            />

            <div className="info-pelicula">
              <p>{pelicula.overview}</p>
              <Link to={`/pelicula/${pelicula.id}`}>
                <button>Ver más...</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
