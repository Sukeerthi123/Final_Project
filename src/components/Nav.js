import logo from '../image/Lemon.png';
import "./Nav.css";
import {Link} from "react-router-dom"
export default function Nav(){
    return(
        <nav className="nav">
            <Link to="#">
            <img src={logo} width={200} height={70}/>
            </Link>
            <ul>
                <li><Link to="/">Home      </Link></li>
                <li><Link to="#">About     </Link></li>
                <li><Link to="/Menu">Menu      </Link></li>
                <li><Link to="/BookFrontPage">Resevation</Link></li>
                <li><Link to="/Order">Order     </Link></li>
                <li><Link to="/Login">Login     </Link></li>
            </ul>
        </nav>
    );
}