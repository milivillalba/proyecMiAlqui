import React from "react";
import { Link } from "react-router-dom";

export const NavbarAdmin = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark ">
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample08"
            aria-controls="navbarsExample08"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample08"
        >
            <h3>Mis Alojamientos</h3>
            <ul className="navbar-nav">
            
            <li className="nav-item active">
                
                <Link to="/" className="nav-link" href="#">
                Inicio 
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                Link
                </a>
            </li>
            <li className="nav-item">
                <Link to="/registerAlqui" className="nav-link disabled" href="#">
                Publicar
                </Link>
            </li>
            <li className="nav-item dropdown">
                <a
                className="nav-link dropdown-toggle"
                href="http://example.com"
                id="dropdown08"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >
                Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown08">
                <a className="dropdown-item" href="#">
                    Action
                </a>
                <a className="dropdown-item" href="#">
                    Another action
                </a>
                <a className="dropdown-item" href="#">
                    Something else here
                </a>
                </div>
            </li>
            </ul>
        </div>
        </nav>

    )
}