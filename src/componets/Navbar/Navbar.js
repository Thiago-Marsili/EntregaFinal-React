
import CartWidget from "../CartWidget/CartWidget";
import logo from "./Img/OIG.jpg";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"






function Navbar(){

    return (
        <div className="Navbar">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand Navbar">
                    <Link to="/" className="navbar-item" ><img alt="OIG" src={logo} width="60" height="88"/>
                        <Link to="/">
                            <span className="navbar-item-text">BuenasPelis</span>
                        </Link>
                    </Link>
                </div>
                <div className="navbar-menu Navbar">
                    <div className="navbar-end">
                        <CartWidget/>
                    </div>
                </div>
                <div className="Categories">
                    <NavLink to= {`/`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Inicio</NavLink>
                    <NavLink to= {`/category/comedia`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Comedia</NavLink>
                    <NavLink to= {`/category/simulacion`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Simulacion</NavLink>
                    <NavLink to= {`/category/accion`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Accion</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;