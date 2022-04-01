const DetalleDePelicula = ({image, titulo, parrafo, subtitulo, generos}) => {
    return (
        <>
        <img src={`https://image.tmdb.org/t/p/w400/${image}`}/>
        <h2>{titulo}</h2>
        <p>{parrafo}</p>
        <h4>{subtitulo}</h4>
        <p>{generos}</p>

        </>
    )
}

export default DetalleDePelicula;