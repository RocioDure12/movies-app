import "../styles/Card.scss";

const Card = ({ image, titulo }) => {
    return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w200/${image}`} alt="pelicula" />
            <div className="container">
                <h4>{titulo}</h4>
            </div>
        </div>
    )
}

export default Card;