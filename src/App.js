import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import Populares from "./components/Populares";
import Buscar from "./components/Buscar";


const App = () => {
  return (

    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/lanzamientos" element={<UltimosLanzamientos/>}></Route>
          <Route path="/populares" element={<Populares/>}></Route>
          <Route path="/buscar" element={<Buscar/>}></Route>
        </Routes>
    </BrowserRouter>

  )
}

export default App;
