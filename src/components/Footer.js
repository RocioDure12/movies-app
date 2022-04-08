import "../styles/footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard} from '@fortawesome/free-solid-svg-icons';

const Footer = () =>{
    return(
        <div className="contenedor">
            <span><FontAwesomeIcon icon={faClapperboard} /></span>
            <span>Movie App</span>
        </div>
    )
}

export default Footer;