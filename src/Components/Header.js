import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    
  <Navbar>
    <div
      className="header-container container-fluid"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="header-h1-btn-wrapper mx-auto">
        <h1 className="header-h1">
          Bienvenue au Centre Médical <br /> 
        </h1>
      
        <Link className="btn btn-primary" to="about">En savoir plus</Link>
      </div>
    </div>
    </Navbar>
    </>
  );
};

export default Header;
