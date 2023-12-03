import React from "react";
import Navbar from "./Navbar";

const Bookings = () => {
  // Obtenir la date d'aujourd'hui au format yyyy-mm-dd
  const today = new Date().toISOString().split("T")[0];

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
            <th scope="col">Dr. Ali Cranta</th>
            <th scope="col">
              Mardi, Jeudi et Vendredi de 14h00 à 21h00
            </th>
            <th scope="col">Mercredi de 08h00 à 15h00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">2</th>
            <td>Dr. Brânzei Speranța Maria</td>
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
          action="https://formspree.io/f/xoqoovla"
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
              name="Prenom:" // Ajout de l'attribut name
              defaultValue="Popa"
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
              name="Nom:" // Ajout de l'attribut name
              defaultValue="Andrei"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              Adresse e-mail :
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="Adresse e-mail:" // Ajout de l'attribut name
              defaultValue="abc@xyz.com"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">
              Numéro de téléphone :
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputPhone"
              name="Numero de telephone:" // Ajout de l'attribut name
              defaultValue="+40712545676"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDoctor" className="form-label">
              Rendez-vous avec :
            </label>
            <select
              id="inputDoctor"
              className="form-select"
              name="Rendez-vous avec:"
            >
              {/* Ajout de l'attribut name */}
              <option defaultValue>Dr. Ali Cranta</option>
              <option>Dr. Brânzei Speranta Maria</option>
              <option>Dr. Drugă Oana-Eufrosina</option>
              <option>Popescu Cornelia</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="inputDescription" className="form-label">
              Description des symptômes :
            </label>
            <textarea
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
              type="time"
              className="form-control"
              id="inputTime"
              name="Heure:" // Ajout de l'attribut name
              onChange={(e) => {
                const selectedTime = e.target.value;
                if (selectedTime < "08:00" || selectedTime > "20:00") {
                  e.target.value = "08:00";
                }
              }}
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
