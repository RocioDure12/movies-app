import "../styles/Card.scss";
import { Link } from "react-router-dom";

const Card = ({ image, titulo, id }) => {
    return (
        <Link to={`/pelicula/${id}`}>
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/w200/${image}`} alt="pelicula" />
                <div>
                    <h4>{titulo}</h4>
                </div>
            </div>
        </Link>
    )
}

export default Card;