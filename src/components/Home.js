import ListaDePeliculas from "./ListaDePeliculas";
import Carousel from "./Carousel";


const Home = () => {

    return (
        <>
            <Carousel />
            <div className="contenedor-listas">
                <ListaDePeliculas
                    titulo="Peliculas populares"
                    url="popular"
                />

                <ListaDePeliculas
                    titulo="Peliculas Mejor Punteadas"
                    url="top_rated"

                />
            </div>

        </>
    )
}

export default Home;