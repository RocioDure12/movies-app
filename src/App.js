import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"


const App=()=>{
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}></Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App;
