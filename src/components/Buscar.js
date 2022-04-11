import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { baseUrlApi, apiKey } from "../auxiliares/funcionesAuxiliares";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "../styles/form.scss";

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
        <div style={{minHeight:"calc(100vh - 140px)"}}>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Pelicula</label>
                    <input type="text" onChange={handleChange} required></input>
                    <input type="submit" value="Buscar"></input>
                </form>
            </div>

            <div className="container">
                {peliculas.map(pelicula => <Card
                    key={pelicula.id}
                    id={pelicula.id}

                    titulo={pelicula.title}
                    image={pelicula.poster_path}

                />
                )
                }
            </div>
        </div>
    )
}

export default Buscar;