import CartWidjet from "./cartwidjet";
import logo from './img/logo.png';
const NavBar = () => {
    return (
        <nav className="navbar p-2">
           <div className="p-1">
                <img style={{width:50}} src={logo} alt="" />
           </div>
           <div className="nav">
                <span className="nav-link fs-4 p-2" >
                    <a className="nav-link text-light" href="">INCIO</a>
                </span>
                <span className="nav-link fs-4 p-2" >
                    <a className="nav-link text-light" href="">PRODUCTOS</a>
                </span>
                <span className="nav-link fs-4 pt-2 mt-1 text-light" >
                   <CartWidjet/> 
                </span>
           </div>
        </nav>
    );
}

export default NavBar;

