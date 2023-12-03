import React from "react";
import tbcLogo from "../assets/logos/tbc-logo.jpeg";
import Navbar from "./Navbar";

const Articles = () => {
  return (
    <>
    <Navbar>

   
     <div
      className="articles-section"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="article-img container d-flex align-items-center justify-content-center">
        <img src={tbcLogo} alt="" className="img-fluid rounded text-center" />
      </div>
      <h1 className="section-title mt-2 mb-2">Tuberculose (TBC)</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="custom-section">
              <h2 className="custom-heading">Comment la détecter</h2>
              <ol className="custom-list">
                <li>Examen bactériologique direct et culture</li>
                <li>Radiographie pulmonaire</li>
                <li>Analyses courantes : numération globulaire avec formule leucocytaire, VS (vitesse de sédimentation)</li>
                <li>Certaines habitudes alimentaires excessives entraînant la malnutrition et la baisse de l'immunité</li>
                <li>Autres maladies chroniques telles que le diabète, etc.</li>
              </ol>
            </div>
          </div>
          <div className="col">
            <div className="custom-section">
              <h2 className="custom-heading">Facteurs adjacents</h2>
              <ol className="custom-list">
                <li>Antécédents familiaux</li>
                <li>Alcoolisme chronique</li>
                <li>Tabagisme intensif</li>
                <li>Certaines habitudes alimentaires excessives entraînant la malnutrition et la baisse de l'immunité</li>
                <li>Autres maladies chroniques telles que le diabète, etc.</li>
              </ol>
            </div>
          </div>
          <div className="col">
            <div className="custom-section">
              <h2 className="custom-heading">
                Symptomatologie et début de la maladie
              </h2>
              <ol className="custom-list">
                <li>
                  <p className="custom-paragraph">Toux sèche et irritante</p>
                </li>
                <li>
                  <p className="custom-paragraph">Légère fièvre</p>
                </li>
                <li>
                  <p className="custom-paragraph">Manque d'appétit</p>
                </li>
                <li>
                  <p className="custom-paragraph">Perte de poids</p>
                </li>
                <li>
                  <p className="custom-paragraph">Transpiration abondante</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Navbar>
    </>
   
  );
};

export default Articles;
