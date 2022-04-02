import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiKey, baseUrlApi } from "../auxiliares/funcionesAuxiliares";

const DetalleDePelicula = ({ image, titulo, parrafo, generos }) => {
    const params = useParams()
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        fetch(`${baseUrlApi}/movie/${params.id}?api_key${apiKey}&language=es-ES`)
            .then(res => res.json())
            .then(data => {
                setPeliculas(data.results)
                console.log(data.results)
            })
    }, [])


    return (
        <>
  
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/w400/${image}`} />
                <h2 titulo={peliculas.title}></h2>
                <p parrafo={peliculas.overwiew}></p>
                <h4>Generos</h4>
                <p generos={peliculas.genres}></p>
            </div>

        </>
    )
}

export default DetalleDePelicula;