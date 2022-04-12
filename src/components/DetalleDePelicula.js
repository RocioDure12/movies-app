import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiKey, baseUrlApi } from "../auxiliares/funcionesAuxiliares";
import "../styles/detallePelicula.scss";

const DetalleDePelicula = () => {
    const params = useParams()
    const [pelicula, setPelicula] = useState()

    useEffect(() => {
        fetch(`${baseUrlApi}/movie/${params.id}?api_key=${apiKey}&language=es-ES`)
            .then(res => res.json())
            .then(data => {
                setPelicula(data)
            })
    }, [params.id])

    return (

        <>
            {pelicula &&
                <div className="container-principal" key={pelicula.id}>
                    <img alt="pelicula" src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`} />
                    <div className="info-detalle">
                        <h2>{pelicula.title}</h2>
                        <p>{pelicula.overview}</p>
                        <h3>Generos : </h3>
                        {pelicula.genres.map((genres) => (
                           
                            <ul key={genres.id}>
                                <li>-{genres.name}</li>

                            </ul>

                        ))

                        }
                    </div>

                </div>
            }



        </>


    )
}

export default DetalleDePelicula;