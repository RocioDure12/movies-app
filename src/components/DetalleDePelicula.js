import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiKey, baseUrlApi } from "../auxiliares/funcionesAuxiliares";

const DetalleDePelicula = () => {
    const params = useParams()
    const [pelicula, setPelicula] = useState()

    useEffect(() => {
        fetch(`${baseUrlApi}/movie/${params.id}?api_key=${apiKey}&language=es-ES`)
            .then(res => res.json())
            .then(data => {
                setPelicula(data)
            })
    }, [])

    return (

        <>
            {pelicula &&
                <div className="container" key={pelicula.id}>
                    <img alt="pelicula" src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} />
                    <h2>{pelicula.title}</h2>
                    <p>{pelicula.overview}</p>
                    <h4>Generos</h4>

                </div>
            }



        </>


    )
}

export default DetalleDePelicula;