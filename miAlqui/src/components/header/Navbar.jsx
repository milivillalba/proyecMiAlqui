import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav nav-masthead justify-content-center float-md-end navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" class="navbar-brand logo tex-color enlace-nav">
          <h1>
            mi<span>Alqui</span>
          </h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul class="navbar-nav tex-color enlace-nav">
            <li className="nav-item menu-nav">
              <Link to="/" className="nav-link fw-bold py-1 px-0 active"
                  aria-current="page">
              
                  Inicio
               
              </Link>
            </li>
            <li className="nav-item menu-nav">
              <Link to="/public" className="nav-link fw-bold py-1 px-0 enlace-nav" >
                
                  Publica
                
              </Link>
            </li>
            <Link to="/Contact" className="nav-link fw-bold py-1 px-0 enlace-nav">
            
                Contact
             
            </Link>
            <li className="nav-item menu-nav">
              <Link to="/auth/register" className="nav-link fw-bold py-1 px-0 active enlace-nav"
                  aria-current="page">
                
                  Registrate
               
              </Link>
            </li>

            {/* <li className="nav-item menu-nav">
              <Link to="/auth/login" className="nav-link fw-bold py-1 px-0 active enlace-nav"
                  aria-current="page">
                
                  InicioSecciòn
               
              </Link>
            </li> */}
          </ul>
        </div>
        {/* <Link to="/">
          <a
            className="nav-link fw-bold py-1 px-0 active"
            aria-current="page"
            href=""
          >
            Inicia Seccion
          </a>
        </Link> */}
      </div>
    </nav>
  );
};
