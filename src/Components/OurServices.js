import React from "react";
import consult from "../assets/img/consult.jpeg";
import fisa from "../assets/img/fisa-auto.jpeg";
import pulsoximetrie from "../assets/img/pulsoximetrie.jpeg";
import apnee from "../assets/img/apnee.webp";
import spirometrie from "../assets/img/spirometrie.jpeg";
import masaj from "../assets/img/masaj.jpeg";
import Navbar from "./Navbar";

const NosServices = () => {
  return (
    <>
    <Navbar>
    <div
      className="container-fluid services-wrapper"
      id="services-wrapper"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className="container our-services"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2
          className="our-services-h2 section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Nos Services
        </h2>
        <div
          className="row text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="service-title">Consultation médicale pneumologique</p>
            <img
              className="img-fluid rounded services-img"
              src={consult}
              alt="Consultation médicale"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="service-title">Fiche auto et consultation psychologique</p>
            <img
              className="img-fluid rounded services-img"
              src={fisa}
              alt="Examen médical pour le permis de conduire"
            />
          </div>
        </div>
        <div
          className="row text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="service-title">Pulsoximétrie</p>
            <img
              className="img-fluid rounded services-img"
              src={pulsoximetrie}
              alt="Consultation médicale"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="service-title">Consultation apnée</p>
            <img
              className="img-fluid rounded services-img"
              src={apnee}
              alt="Examen médical pour le permis de conduire"
            />
          </div>
        </div>
        <div
          className="row text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="service-title">Spirométrie</p>
            <img
              className="img-fluid rounded services-img"
              src={spirometrie}
              alt="Consultation médicale"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="service-title">Thérapies complémentaires</p>
            <img
              className="img-fluid rounded services-img"
              src={masaj}
              alt="Examen médical pour le permis de conduire"
            />
          </div>
        </div>
      </div>
    </div>
    </Navbar>
    </>
  );
};

export default NosServices;
