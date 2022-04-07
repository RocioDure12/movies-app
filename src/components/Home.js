import ListaDePeliculas from "./ListaDePeliculas";


const Home = () => {

    return (
        <>
        
            <h1>Home</h1>
            <ListaDePeliculas
                titulo="Peliculas populares"
                url="popular"
            />

            <ListaDePeliculas
                titulo="Peliculas Mejor Punteadas"
                url="top_rated"

            />

        </>
    )
}

export default Home;