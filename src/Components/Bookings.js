import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr);
setDefaultLocale('fr');
const Bookings = () => {
  // Obtenir la date d'aujourd'hui au format yyyy-mm-dd
  const today = new Date().toISOString().split("T")[0];
  const [users, setusers] = useState([]);
  const [formData, setFormData] = useState({});
  const [rendez, setRendez] = useState("");
  const [rendezsuc, setRendezSuc] = useState("");
  const [timeSlots, setTimeslot] = useState();
  const time = [
    "09:00AM - 10:00AM",
    "10:00AM - 11:00AM",
    "11:00AM - 12:00PM",
    "12:00PM - 01:00PM",
    "01:00PM - 02:00PM",
    "02:00PM - 03:00PM",
    "03:00PM - 04:00PM",
    "04:00PM - 05:00PM",
    "05:00PM - 06:00PM",
    "06:00PM - 07:00PM",
    "07:00PM - 08:00PM"]
  //date
  const [selectedDate, setSelectedDate] = useState(null);
  const [dctrName,setDctrName] =useState("")
  const todayd = new Date();
  const tomorrow = new Date(todayd);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [heures, setHeures] = useState([])
  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday (0) and Saturday (6)
  };
  const formatDate = (date) => {

    const day = date.getDate();
    const month = date.getMonth() + 1; // Les mois commencent à partir de zéro, donc on ajoute 1
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${year}-${formattedMonth}-${formattedDay}`;
  };
  useEffect(() => {
    let dateRendez;
    if (selectedDate === null) {
      dateRendez = new Date();
    }
    else {
      dateRendez = formatDate(selectedDate);
    }
    axios.get(`https://anoubl-001-site1.atempurl.com/Heures/${dateRendez}/${dctrName}`)
      .then((response) => {
        const apiResponse = response.data;
        setTimeslot(time.map(slot => ({
          value: slot.trim(),
          available: !apiResponse.includes(slot.trim())
        })));
        console.log(timeSlots)
      })
      .catch((error) => console.log(error));
  }, [selectedDate,dctrName])
  useEffect(() => {
    axios.get("https://anoubl-001-site1.atempurl.com/api/Users")
      .then((response) => {
        setusers(response.data);
        console.log(response.data)
      })
      .catch((error) => console.log(error))
  }, []);
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [plage, setPlage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    // Effectuez votre logique de validation ici si nécessaire
    //Envoi de la requête POST
    const dateRendez = formatDate(selectedDate);

    axios.post("https://anoubl-001-site1.atempurl.com/api/Users", {
      prenom: formData.prenom,
      nom: formData.nom,
      telephone: formData.telephone,
      email: formData.email,
      adresse: formData.adresse,
      DateNaissance: formData.Datenai,
      rôle: 2
    })
      .then((response) => {
        if (response.status !== 400) {
          console.log("Requête réussie", response);
          axios.post("https://anoubl-001-site1.atempurl.com/api/RendezVous", {
            Patientemail: formData.email,
            DateRendezVous: dateRendez,
            Description: formData.Description,
            Plage: plage,
            dctrId : dctrName
          }).then((response) => {
            if (response.status === 201) {
              setRendezSuc("rendez vous créer avec succés.")
            }
          })
            .catch((error) => console.error(error));
        }
        else {
          console.log("impossible de créer le rendez vous");
        }

      })
      .catch((error) => {
        setRendez("votre adresse e-mail est déjà utilisée");
        console.error("Erreur lors de la requête", error);
        // Ajoutez ici le code pour gérer les erreurs de requête
      });

  };
  useEffect(() => {
    if (rendez) {
      toast.error(rendez);
      setRendez("");
    }
    else if (rendezsuc) {
      toast.success(rendezsuc);
    }
  }, [rendez, rendezsuc])

  return (
    <>
      <Navbar>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          className="bookings-section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="section-title">Formulaire de rendez-vous en ligne</h2>
          <table className="table text-center container">
            <thead>
              <tr>
                <th>Docteur Name</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="col">Dr. Ali Benani</td>
                <td>Spirométrie</td>
              </tr>
              <tr>
                <td>Dr. Salma Benani</td>
                <td>Consultation apnée</td>
              </tr>
            </tbody>
            <tbody>

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
                  required
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
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail" className="form-label">
                  Adresse e-mail :
                </label>
                <input
                  required
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
                <label htmlFor="inputAdresse" className="form-label">
                  Adresse :
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  name="adresse"
                  onChange={handleFormChange}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="inputDescription" className="form-label">
                  Description des symptômes :
                </label>
                <textarea
                  required
                  onChange={handleFormChange}
                  id="inputDescription"
                  className="form-control"
                  name="Description" // Ajout de l'attribut name
                  placeholder="Je souhaite prendre rendez-vous pour un examen pneumologique."
                >

                </textarea>
              </div>
              <div className="col-md-6 d-flex">
                <label htmlFor="inputDate" className="form-label">
                  Le nom du docteur :
                </label>
                <select onChange={(e) => setDctrName(e.target.value)} className="form-control mytime">
                  <option value=""> Votre Docteur :</option>
                  {users.filter((U) => U.rôle ===1).map((U) => (
                   <option value={U.id}> {U.prenom + " " +U.nom}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 d-flex">
                <label htmlFor="inputDate" className="form-label">
                  Date de naissance :
                </label>
                <input
                  required
                  onChange={handleFormChange}
                  type="date"
                  className="form-control"
                  id="inputDate"
                  name="Datenai" // Ajout de l'attribut name
                // Définir la date minimale à aujourd'hui
                />
              </div>
              <div className="col-md-6 d-flex">
                <label htmlFor="inputDate" className="form-label">
                  Date du rendez-vous :
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={tomorrow}
                  locale="fr"
                  name="Date"
                  dateFormat="yyyy-MM-dd"
                />
              </div>
              {selectedDate ? (
                <div className="col-md-6">
                  <label className="labels">Select time slot</label>
                  <select onChange={(event) => setPlage(event.target.value)}
                    className="form-control mytime" name="aptime" id="aptime" >
                    <option value="">--Select Time Slot--</option>
                    {timeSlots ? timeSlots.filter((H) => H.available === true).map((time) => (
                      <option value={time.value}>{time.value}</option>
                    )) : null}

                  </select>
                  <span id="smsg"></span>
                </div>
              ) : null}


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

