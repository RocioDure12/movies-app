import "../styles/ListaPeliculas.scss";
import { useState, useEffect } from "react";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";
import { Link } from "react-router-dom";

const ListaDePeliculas = ({ url, id}) => {

    const [peliculas, setPeliculas] = useState([])
    useEffect(() => {
        fetch(`${baseUrlApi}/movie/${url}?api_key=${apiKey}&languaje=es-ES`)
            .then(res => res.json())
            .then(data => setPeliculas(data.results))

    }, [])
    return (
        <>

            <ul className="lista">
                {peliculas.map(pelicula => <li key={pelicula.id}><Link to={`/pelicula/${pelicula.id}`}>{pelicula.title}</Link></li>)}
            </ul>
        </>
    )
}

export default ListaDePeliculas;