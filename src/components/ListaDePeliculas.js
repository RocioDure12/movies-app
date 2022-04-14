import "../styles/ListaPeliculas.scss";
import { useState, useEffect } from "react";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';



import { Scrollbars } from 'react-custom-scrollbars';

const ListaDePeliculas = ({ url, id, titulo }) => {

    const [peliculas, setPeliculas] = useState([])
    useEffect(() => {
        fetch(`${baseUrlApi}/movie/${url}?api_key=${apiKey}&languaje=es-ES`)
            .then(res => res.json())
            .then(data => setPeliculas(data.results))

    }, [url])
    return (
        <>
            <div className="lista">
                <Scrollbars style={{ boxShadow: "rgb(0 0 0 / 24%) 0px 3px 8px", width: 300, height: 300 }}>
                    <h2>{titulo}</h2>
                    {peliculas.map((pelicula) => <Link to={`/pelicula/${pelicula.id}`}
                        key={pelicula.id}>
                        <li >{pelicula.title}<FontAwesomeIcon icon={faCircleArrowRight} color="green" /></li></Link>)}
                </Scrollbars>
            </div>
        </>


    )
}


export default ListaDePeliculas;