import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Bookings = () => {
  // Obtenir la date d'aujourd'hui au format yyyy-mm-dd
  const today = new Date().toISOString().split("T")[0];
  const [users, setusers] = useState([]);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    axios.get("https://localhost:7184/api/Users")
      .then((response) => {
        setusers(response.data);
      })
      .catch((error) => console.log(error))
  }, []);
  const filteredDoctors = users.filter((dctr) => dctr.rôle === 1);
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleForm = (e) => {
    e.preventDefault();

    // Effectuez votre logique de validation ici si nécessaire
     console.log(formData)
    //Envoi de la requête POST
    axios.post("https://localhost:7184/api/Users", {
      prenom:formData.prenom,
      nom:formData.nom,
      telephone:formData.telephone,
      email:formData.email,
      adresse:formData.adresse
   })
      .then((response) => {
        console.log("Requête réussie", response);
       //Ajoutez ici le code pour gérer la réponse réussie
      })
      .catch((error) => {
        console.error("Erreur lors de la requête", error);
       // Ajoutez ici le code pour gérer les erreurs de requête
      });
    axios.post("https://localhost:7184/api/RendezVous",{
      DocteurId:formData.dctrid,
      
    });
  };
  return (
    <>
      <Navbar>


        <div
          className="bookings-section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="section-title">Formulaire de rendez-vous en ligne</h2>
          <p className="bookings-about">
            Vous pouvez consulter les horaires de travail de chaque médecin ci-dessous avant de prendre rendez-vous.
          </p>
          <table className="table text-center container">
            <thead>
              <tr>
                <th scope="col">1</th>
                <th scope="col">Dr. Ali Benani</th>
                <th scope="col">
                  Mardi, Jeudi et Vendredi de 14h00 à 21h00
                </th>
                <th scope="col">Mercredi de 08h00 à 15h00</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">2</th>
                <td>Dr. Salma Benani</td>
                <td>Lundi, Mardi, Jeudi et Vendredi de 09h30 à 14h00</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th scope="row">3</th>
                <td>Dr. Drugă Oana-Eufrosina</td>
                <td>
                  Lundi - 14h00-20h00 | Mardi - 08h00-16h30 | Mercredi - 14h00-20h00
                </td>
                <td>Jeudi - 08h00-16h30 | Vendredi et Samedi - 08h00-11h00</td>
              </tr>
            </tbody>
          </table>
          <h2 className="section-title">Nous ne sommes qu'à un clic de distance.</h2>
          <div className="container">
            <form
              onSubmit={handleForm} 
              method="POST"
              className="row g-3"
            >
              <div className="col-md-6">
                <label htmlFor="inputFirstName" className="form-label">
                  Nom :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  name="nom" // Ajout de l'attribut name
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputLastName" className="form-label">
                  Prénom :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  name="prenom" // Ajout de l'attribut name
                  onChange={handleFormChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail" className="form-label">
                  Adresse e-mail :
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  name="email" // Ajout de l'attribut name
                  onChange={handleFormChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPhone" className="form-label">
                  Numéro de téléphone :
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputPhone"
                  name="telephone" // Ajout de l'attribut name
                  onChange={handleFormChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputDoctor" className="form-label">
                  Rendez-vous avec :
                </label>
                <select id="inputDoctor" onChange={handleFormChange} className="form-select" name="dctrid">
                  {filteredDoctors.map((dctr) => (
                    <option key={dctr.id} value={dctr.id}>
                      {dctr.prenom + " " + dctr.nom}
                    </option>
                  ))}
                </select>

              </div>
              <div className="col-md-6">
                <label htmlFor="inputAdresse" className="form-label">
                  Adresse :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  name="adresse"
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputDescription" className="form-label">
                  Description des symptômes :
                </label>
                <textarea
                  onChange={handleFormChange}
                  id="inputDescription"
                  className="form-control"
                  name="Description du probleme:" // Ajout de l'attribut name
                  placeholder="Je souhaite prendre rendez-vous pour un examen pneumologique."
                ></textarea>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputDate" className="form-label">
                  Date du rendez-vous :
                </label>
                <input
                  onChange={handleFormChange}
                  type="date"
                  className="form-control"
                  id="inputDate"
                  name="Date:" // Ajout de l'attribut name
                  min={today} // Définir la date minimale à aujourd'hui
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputTime" className="form-label">
                  Plage horaire :
                </label>
                <input
                  onChange={handleFormChange}
                  type="time"
                  className="form-control"
                  id="inputTime"
                  name="Heure:" // Ajout de l'attribut name
                 
                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Demander un rendez-vous
                </button>
              </div>
              <div className="col-12">
                <p className="message-us">
                  <a href="https://formsubmit.co/el/wasita">
                    Besoin d'aide ? Envoyez-nous un message.
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Navbar>
    </>

  );
};

export default Bookings;
