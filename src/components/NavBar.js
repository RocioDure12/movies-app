import "../styles/NavBar.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/lanzamientos">Últimos lanzamientos</Link></li>
                <li><Link to="/populares">Populares</Link></li>
                <li><Link to="/buscar">Buscar</Link></li>
            </ul>

        </nav>
    )


}
export default NavBar;