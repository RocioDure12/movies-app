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
        <div>
                <h2>Últimos Lanzamientos</h2>
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

            export default UltimosLanzamientos;