import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import drali from "../assets/img/drali.webp";
import branzei from "../assets/img/branzei.webp";
import drdruga from "../assets/img/drdruga.jpeg";
import popescu from "../assets/img/popescu.webp";

const MembreEquipe = ({ imageSrc, nom, description }) => (
  <div className="dr-member" id="dr-member">
    <img className="img-fluid rounded dr-pic" src={imageSrc} alt="Notre docteur" />
    <div className="dr-description">
      <p className="dr-name">{nom}</p>
      <div className="dr-paragraphs">
        {description.map((paragraphe, index) => (
          <p key={index} className="dr-paragraph">
            {paragraphe}
          </p>
        ))}
      </div>
    </div>
  </div>
);

const NotreEquipe = () => {
  return (
    <div
      className="our-team our-team-wrapper container-fluid"
      id="our-team"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="our-team-h2 section-title"
      >
        Notre Équipe
      </h2>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        className="custom-carousel"
      >
        <MembreEquipe
          imageSrc={drali}
          nom="Dr. Ali Cranta"
          description={[
            "MÉDECIN FONDATEUR DE LA CLINIQUE",
            "MÉDECIN PNEUMOLOGUE SPÉCIALISTE",
            "COMPÉTENCE EN EXPLORATIONS FONCTIONNELLES RESPIRATOIRES",
            "COMPÉTENCE EN BRONCHOSCOPIE",
          ]}
        />
        <MembreEquipe
          imageSrc={branzei}
          nom="Dr. Fatima Benani"
          description={[
            "MÉDECIN PNEUMOLOGUE SPÉCIALISTE",
            "COMPÉTENCE EN EXPLORATIONS FONCTIONNELLES RESPIRATOIRES",
            "COMPÉTENCE EN BRONCHOSCOPIE",
          ]}
        />
        <MembreEquipe
          imageSrc={drdruga}
          className="druga"
          nom="Dr. Salma Benani"
          description={["MÉDECIN SPÉCIALIST", "GÉRIATRIE et GÉRONTOLOGIE"]}
        />
        <MembreEquipe
          imageSrc={popescu}
          nom="Mustapha Tissi"
          description={[
            "CONSEILLÈRE EN THÉRAPIE THETA HEALING",
            "Découvrez-en plus sur la thérapie Theta en suivant le lien -",
            <a
              href="https://vindecareprinterapiatheta.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Theta Healing
            </a>,
          ]}
        />
      </Carousel>
    </div>
  );
};

export default NotreEquipe;
