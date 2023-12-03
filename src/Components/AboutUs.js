import React from "react";
import cabinet1Image from "../assets/img/cabinet1.webp"; // Importer l'image
import cabinet2Image from "../assets/img/cabinet2.webp"; // Importer l'image
import Navbar from "./Navbar";

const APropos = () => {
  return (
    <>
    <Navbar>
    <div
      className="container-fluid about-wrapper"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container about-section" id="about">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-12">
            <h2 className="about-h2 section-title">Qui sommes-nous</h2>
            <p className="about-p">
              Le concept moderne appliqué dans le traitement de chaque cas assure
              la récupération de la santé du patient et promeut un mode de vie
              sain.
            </p>
            <p className="about-p">
              Au centre médical ALI CRANTA, primordial dans la philosophie de
              notre clinique, est la récupération de la santé du patient et
              l'assurance de sa vitalité par la prévention et l'adoption d'un
              mode de vie sain et équilibré physiquement et émotionnellement.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-3 mt-xs-2">
            <img
              className="rounded cabinet-img"
              src={cabinet1Image}
              alt="Cabinet 1"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-3 mt-xs-2">
            <img
              className="rounded cabinet-img"
              src={cabinet2Image}
              alt="Cabinet 2"
            />
          </div>
        </div>
      </div>
    </div>
    </Navbar>
   
    </>
  );
};

export default APropos;
