import CartWidjet from "./cartwidjet";
import logo from './metallica.png';
const NavBar = () => {
    return (
        <nav className="navbar p-2">
           <div>
                <img style={{width:50}} src={logo} alt="" />
           </div>
           <div className="nav">
                <span className="nav-link fs-4 p-2" >
                    <a className="nav-link text-black" href="">inicio</a>
                </span>
                <span className="nav-link fs-4 p-2" >
                    <a className="nav-link text-black" href="">productos</a>
                </span>
                <span className="nav-link fs-4 p-2" >
                   <a href=""><CartWidjet/></a> 
                </span>
           </div>
        </nav>
    );
}

export default NavBar;

