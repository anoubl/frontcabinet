import React from "react";
import Navbar from "./Navbar";

const Carrières = () => {
  return (
    <>
   <Navbar>

    <div className="carreers-wrapper">
      <div className="header">
        <h1 className="mt-3 mb-4 section-title">Notre clinique s'agrandit</h1>
      </div>
      <div className="careers-section">
        <p>
          Notre clinique est en période d'expansion, et pour maintenir nos normes élevées de qualité de services, nous sommes à la recherche de médecins talentueux et dévoués.
        </p>

        <p>
          Notre offre comprend un package salarial compétitif, des avantages et des opportunités de développement professionnel dans un environnement de travail collaboratif et soutenant. Nous sommes engagés à fournir les meilleurs services médicaux possibles à nos patients, et pour cela, nous avons besoin d'une équipe médicale dédiée et talentueuse.
        </p>

        <p>
          Si vous êtes médecin spécialiste en pneumologie ou dans une autre spécialité médicale et que vous souhaitez vous joindre à notre équipe, nous attendons avec impatience votre CV à l'adresse e-mail
          <span className="careers-email"> pneumotherapy@yahoo.com</span>
        </p>
      </div>
    </div>
        
   </Navbar>
    </>
  );
};

export default Carrières;
