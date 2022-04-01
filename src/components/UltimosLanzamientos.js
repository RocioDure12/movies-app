import { useEffect, useState } from "react";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";
import Card from "./Card";

const UltimosLanzamientos = () => {

    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        fetch(`${baseUrlApi}/movie/now_playing?api_key=${apiKey}&languaje=es-ES`)
            .then(res => res.json())
            .then(data => setPeliculas(data.results))

    }, [])

    return (
        <>
            <h1>Últimos Lanzamientos</h1>
            {peliculas.map(peliculas => <Card
                key={peliculas.id}
                titulo={peliculas.title}
                image={peliculas.poster_path}
            />
            )
            }
        </>
    )
}

export default UltimosLanzamientos;