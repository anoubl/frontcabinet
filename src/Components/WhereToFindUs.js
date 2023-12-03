import findus from "../assets/img/findus.avif";
import React from "react";
import Navbar from "./Navbar";

const OùNousTrouver = () => {
  return (
    <>
    <Navbar>
    <div
      className="container-fluid findus-wrapper"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="find-us-section container">
        <h2 className="findus-h2">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-12">
              <h2 className="section-title">Où nous trouver</h2>
              <img
                className="img-fluid rounded findus-img mb-4"
                src={findus}
                alt="personne naviguant sur Google Maps"
              />
            </div>
            <div className="col-md-6">
              <div className="findus-card">
                <p className="findus-p">
                  En plus du centre situé à l'adresse{" "}
                  <span className="findus-span">
                  Leonte Anastasievici Nr. 11, Rabat

                  </span>{" "}
                  vous pouvez également bénéficier de nos services dans deux autres
                  emplacements.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="findus-card right-card">
                <p className="findus-p">
                  L'un d'entre eux peut être trouvé à l'adresse Rabat,{" "}
                  <span className="findus-span">
                  Rue Mohammed V, Quartier Hassan, Rabat
                  </span>
                  , et l'autre à l'adresse{" "}
                  <span className="findus-span">
                  Avenue Al Fida, Quartier Agdal, Rabat
                </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </h2>
      </div>
    </div>
    </Navbar>
    </>
   
  );
};

export default OùNousTrouver;
