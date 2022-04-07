import "../styles/ListaPeliculas.scss";
import { useState, useEffect } from "react";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";
import { Link } from "react-router-dom";
import Scrollbar from "./Scrollbar";

const ListaDePeliculas = ({ url, id }) => {

    const [peliculas, setPeliculas] = useState([])
    useEffect(() => {
        fetch(`${baseUrlApi}/movie/${url}?api_key=${apiKey}&languaje=es-ES`)
            .then(res => res.json())
            .then(data => setPeliculas(data.results))

    }, [])
    return (
        <h1>fsa</h1>

    )
}

export default ListaDePeliculas;