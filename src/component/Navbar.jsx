/* eslint-disable jsx-a11y/alt-text */
import logoNapos from "../assets/img/napos.jpg";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand bg-dark">
                <div className="container">
                    <ul className="nav">
                        <img src={logoNapos} style={{ height: "40px" }}></img>
                        <li>
                            <Link to="/" className="nav-link"> Beranda </Link>
                        </li>
                        <li>
                            <Link to="/manajemen-keuangan" className="nav-link">Manajemen Keuangan </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;