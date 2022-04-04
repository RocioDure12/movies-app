import { useEffect, useState } from "react";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";
import Card from "./Card";

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
            {peliculas.map(peliculas => <Card
                key={peliculas.id}
                id={peliculas.id}
                titulo={peliculas.title}
                image={peliculas.poster_path}
            />
            )
            }

        </>

    )
}

export default Populares;