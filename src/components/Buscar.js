import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";
import { useNavigate } from "react-router-dom";

const Buscar = () => {
    const navigate = useNavigate();
    const [valorInput, setValorInput] = useState("")
    const [peliculas, setPeliculas] = useState([])
    const [searchParams] = useSearchParams({
        query: ""
    })

    useEffect(() => {
        if (searchParams.get('query')) {
            fetch(`${baseUrlApi}/search/movie?api_key=${apiKey}&query=${searchParams.get('query')}&language=en-ES`)
                .then(res => res.json())
                .then(data => {
                    if (data.results) {
                        setPeliculas(data.results)
                    }
                })
        }

    }, [searchParams])

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/buscar?query=${valorInput}`)

    }

    const handleChange = (e) => {
        setValorInput(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Buscar</label>
                <input type="text" onChange={handleChange} required></input>
                <input type="submit" value="Submit"></input>
            </form>
            {peliculas.map(pelicula => <h1 key={pelicula.id}>{pelicula.title}</h1>)}
        </>
    )
}

export default Buscar;