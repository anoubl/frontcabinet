import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Faq from "./Components/Faq";
import About from "./Components/AboutUs"
import Careers from "./Components/Careers";
import Bookings from "./Components/Bookings";
import Articles from "./Components/Articles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import SignIn from "./Components/SignIn";
import Dashboard from "./Infermerie/Dashboard";
import Header from "./Components/Header";
import NosServices from "./Components/OurServices";
import NotreEquipe from "./Components/OurTeam";
import Patients from "./Patients/Patients";
import RendezVous from "./Infermerie/rendezvous/RendezVous";
import Dashboarddoc from "./Docteur/Dashboard";
import Patientdoc from "./Docteur/Patients/Patients";

import InfermierDoc from "./Docteur/Infermier/Infermier";
import Dosser from "./Patients/Dossier medical/Dosser";
import Profille from "./Infermerie/Profille/Profille";


function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/service" element={<NosServices />} />
          <Route path="/équipe" element={<NotreEquipe />} />
          <Route path="/Dashboard-inf" element={<Dashboard />} />
          <Route path="/manage-patient" element={<Patients />} />
          <Route path="/manage-patient-doc" element={<Patientdoc />} />
          <Route path="/manage-rendezvous" element={<RendezVous/>} />
          <Route path="/Dashboard-doc" element={<Dashboarddoc/>} />
          <Route path="/Manage-inf" element={<InfermierDoc/>} />
          <Route path="/Profille" element={<Profille/>} />
          <Route path="/Dossier-Med/:userid" element={<Dosser/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
