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
            <div className="padding-top">
                <h2>Peliculas Populares</h2>
                <div className="container">

                    {peliculas.map(peliculas => <Card
                        key={peliculas.id}
                        id={peliculas.id}
                        titulo={peliculas.title}
                        image={peliculas.poster_path}
                    />
                    )
                    }
                </div>
            </div>
        </>

    )
}

export default Populares;