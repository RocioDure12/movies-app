import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import Populares from "./components/Populares";
import Buscar from "./components/Buscar";
import DetalleDePelicula from "./components/DetalleDePelicula";
import "./styles/reset.scss";
import Footer from "./components/Footer";


const App = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/lanzamientos" element={<UltimosLanzamientos />}></Route>
        <Route path="/populares" element={<Populares />}></Route>
        <Route path="/buscar" element={<Buscar />}></Route>
        <Route path="/pelicula/:id" element={<DetalleDePelicula />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App;
