import { useEffect, useState } from "react";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";
import Card from "./Card";
import Paginacion from "./Paginacion";

const Populares = () => {
    const [peliculas, setPeliculas] = useState([])
    const [cantidadPaginas, setCantidadPaginas] = useState()

    const obtenerPeliculas = (pagina) => {
        fetch(`${baseUrlApi}/movie/popular?api_key=${apiKey}&languaje=es-ES&page=${pagina}`)
            .then(res => res.json())
            .then(data => {
                setPeliculas(data.results)
                setCantidadPaginas(data.total_pages)
            })
    }

    useEffect(() => {
        obtenerPeliculas(1)

    }, [])

    return (

        <>
            <div>
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
                <Paginacion
                    onChange={obtenerPeliculas}
                    cantidad={cantidadPaginas}
                />
            </div>
        </>

    )
}

export default Populares;