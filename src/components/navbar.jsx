import CartWidjet from "./Cartwidjet";
import logo from './img/logo.png';
import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar p-2">
            <div><img style={{width:50}} src={logo} alt="" /></div>
           
            <div className="nav navbar-dark">
                <Link to={"/"} className="nav-link" style={{color: "white"}} href="">home</Link>
                <Link to={"/"} className="nav-link" style={{color: "white"}} href="">productos</Link>
                <Link to={"/Cart"} className="nav-link" style={{color: "white"}} href=""><CartWidjet/></Link>    
            </div>
        </nav>
    );
}

export default NavBar;

