import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://resize.prod.docfr.doc-media.fr/rcrop/480,280,center-middle/ext/eac4ff34/content/2022/7/4/maladie-pulmonaire-a4e5d124b257237f.jpeg"
            alt="Logo"
            className="header-logo"
            width="50px"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                À propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services-wrapper">
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link to="/careers">Carrières</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#our-team">
                Équipe
              </a>
            </li>
          
            <li className="nav-item">
              <Link to="/articles">Articles</Link>
            </li>
            <li className="nav-item">
            <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link to="/bookings">
                <button className="btn btn-primary appointment-button">
                  PRENDRE UN RENDEZ-VOUS CHEZ NOUS
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/SignIn">
                <button className="btn btn-primary appointment-button">
                 Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
