import { useEffect, useState } from "react";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";

const UltimosLanzamientos = () => {

    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        fetch(`${baseUrlApi}/movie/now_playing?api_key=${apiKey}&languaje=es-ES`)
            .then(res => res.json())
            .then(data => setPeliculas(data.results))

    }, [])

    return (
        <>
        <h1>ultimos Lanzamientos</h1>
        {peliculas.map(pelicula => <p key={pelicula.id}>{pelicula.title}</p>)}
        </>
    )
}

export default UltimosLanzamientos;