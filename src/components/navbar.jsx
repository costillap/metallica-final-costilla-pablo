import CartWidjet from "./cartwidjet";
import logo from './img/logo.png';
import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar p-2">
            <div><img style={{width:50}} src={logo} alt="" /></div>
           
            <div className="nav navbar-dark">
                <a className="nav-link" style={{color: "white"}} href="">home</a>
                <a className="nav-link" style={{color: "white"}} href="">productos</a>
                <a className="nav-link" style={{color: "white"}} href=""><CartWidjet></CartWidjet></a>    
            </div>
        </nav>
    );
}

export default NavBar;

