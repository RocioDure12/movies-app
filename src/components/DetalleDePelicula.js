import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiKey, baseUrlApi } from "../auxiliares/funcionesAuxiliares";

const DetalleDePelicula = () => {
    const params = useParams()
    const [pelicula, setPelicula] = useState({})

    useEffect(() => {
        fetch(`${baseUrlApi}/movie/${params.id}?api_key=${apiKey}&language=es-ES`)
            .then(res => res.json())
            .then(data => {
                setPelicula(data)
            })
    }, [])

    return (

        <>
            <div className="card" key={pelicula.id}>
                <img src={`https://image.tmdb.org/t/p/w400/${pelicula.poster_path}`} />
                <h2>{pelicula.title}</h2>
                <p>{pelicula.overwiew}</p>
                <h4>Generos</h4>
               
            </div>

            

        </>


    )
}

export default DetalleDePelicula;