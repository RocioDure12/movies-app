import "../styles/ListaPeliculas.scss";
import { useState, useEffect } from "react";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";

const ListaDePeliculas = ({ titulo, url }) => {
    
    const [peliculas, setPeliculas] = useState([])
    useEffect(() => {
        fetch(`${baseUrlApi}/movie/${url}?api_key=${apiKey}&languaje=es-ES`)
            .then(res => res.json())
            .then(data => setPeliculas(data.results))

    }, [])
    return (
        <>

            <ul className="lista">
                <h2>{titulo}</h2>
                {peliculas.map(pelicula => <li key={pelicula.id}>{pelicula.title}</li>)}
            </ul>
        </>
    )
}

export default ListaDePeliculas;