import React from "react";
import Navbar from "./Navbar";

const FoireAuxQuestions = () => {
  return (
    <>
    <Navbar>
    <div className="faq-section" data-aos="fade-up" data-aos-duration="1000">
      <div
        className="accordion container mt-5"
        id="accordionExample"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="faq-h1 mb-4">Questions fréquentes</h1>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h4>Comment arriver à notre clinique ?</h4>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Il existe de nombreux moyens de transport pour se rendre à notre clinique.
              </p>
              <p>
                Le moyen de transport le plus facile à proximité de la clinique est la station de métro Eroilor, située sur les lignes M1, M3, M5. Dans la région, il y a des arrêts de bus pour les lignes 336, 123, 226, 696, ainsi que des lignes de trolleybus 61 et 62.
              </p>
              <p>
                À titre indicatif, la clinique se trouve dans les petites rues derrière l'hôpital universitaire.
              </p>
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h4>Acceptez-vous les bons de référence ?</h4>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Bien sûr ! À l'exception de la feuille de route automobile, tous nos services peuvent être remboursés par la CASMB.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h4>Votre question ne figure pas ci-dessus ?</h4>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                N'hésitez pas à nous contacter par téléphone aux numéros suivants :
              </p>
              <p>0725 596 895</p>
              <p>0724 284 595</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Navbar>
    </>
  );
};

export default FoireAuxQuestions;
