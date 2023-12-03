import React from "react";
import person1 from "../assets/img/person1.png"; // Importer l'image
import person2 from "../assets/img/person2.webp"; // Importer l'image
import person3 from "../assets/img/person3.png"; // Importer l'image
import Footer from "./Footer";
import Navbar from "./Navbar";

const Temoignages = () => {
  return (
    <>
    <Navbar>
    <div
      className="section-testimonials container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2
        className="section-title testimonials-title"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Témoignages
      </h2>
      <div
        className="row testimonials-row"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="card">
            <div className="wrapper">
              <img src={person1} alt="" className="card-img img-fluid" />
              <p className="person-name">Moise Gina</p>
            </div>
            <p className="testimonial-p">
              Avant d'être médecin, Mme Ali Cranta est une personne ! Une personne merveilleuse, empathique et un spécialiste parfait !
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="card">
            <div className="wrapper">
              <img src={person2} alt="" className="card-img img-fluid" />
              <p className="person-name">Liliana Vrăjitoru</p>
            </div>
            <p className="testimonial-p">
              Mille mercis pour le professionnalisme ! Personnellement, chaque fois que j'aurai besoin, c'est ici que je viendrai. Je recommande vivement !
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="card">
            <div className="wrapper">
              <img src={person3} alt="" className="card-img img-fluid" />
              <p className="person-name">Alexandra Țugui</p>
            </div>
            <p className="testimonial-p">
              Mme le Dr Cranta Ali est une médecin extraordinaire, proche du patient, empathique, accessible et répond toujours au téléphone.
            </p>
          </div>
        </div>
      </div>
    
    </div>
    </Navbar>
    </>
   
  );
};

export default Temoignages;
