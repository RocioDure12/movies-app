import "../styles/Card.scss";
import { Link } from "react-router-dom";

const Card = ({ image, titulo, id }) => {
  return (
    <Link to={`/pelicula/${id}`}>
      <div className="card">
        {/* si la pelicula no tiene imagen, esto se va a ver roto */}
        {/* un alt que dice "pelicula" no le sirve de nada al usuario lector de pantalla. mejor poner el titulo de la peli */}
        <img src={`https://image.tmdb.org/t/p/w200/${image}`} alt="pelicula" />
        <div>
          <h4>{titulo}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Card;
