import { useEffect, useState } from "react";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";

const Populares = () => {
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        fetch(`${baseUrlApi}/movie/popular?api_key=${apiKey}&languaje=es-ES`)
            .then(res => res.json())
            .then(data => setPeliculas(data.results))

    }, [])

    return (

        <>
            <h1>Peliculas Populares</h1>
            {peliculas.map(pelicula => <p key={pelicula.id}>{pelicula.title}</p>)}
        </>

    )
}

export default Populares;