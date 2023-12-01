import React from "react";

const Header = () => {
  return (
    <div
      className="header-container container-fluid"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="header-h1-btn-wrapper">
        <h1 className="header-h1">
          Bienvenue au Centre Médical AliCranta <br /> 
        </h1>
        <a href="#about" className="btn-get-started">
          En savoir plus
        </a>
      </div>
    </div>
  );
};

export default Header;
