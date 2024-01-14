import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PrescriptionTemplate.css'; // Importer un fichier CSS pour le style (créez ce fichier dans votre projet)

const PrescriptionTemplate = () => {
  const [patient,setPatient]=useState();
  const [consultation,setConsultations]=useState();
  const {patientId} =useParams();
  const {consultationId}=useParams();
  const handlePatient=()=>{
      axios.get(`https://anoubl-001-site1.atempurl.com/api/Users/${patientId}`)
  .then((response) => setPatient(response.data))
  .catch((error) => console.error(error));
  }

 const handleConsultation=()=>{
  axios.get(`https://anoubl-001-site1.atempurl.com/api/DossierDetails/${consultationId}`)
  .then((response) =>setConsultations(response.data))
  .catch((error) => console.error(error))
 }
 useEffect(()=>{
    handleConsultation();
    handlePatient();
 },[patientId,consultationId])
 console.log(consultation)
 
  const patientInfo = {
    name: patient ? patient.prenom +" "+patient.nom : "",
    telephone:patient ? patient.telephone : "",
    address:patient ? patient.adresse : "",
  };
  const medicationList = [
    { name: 'Médicament doliprane', dosage: 1, unit: 'comprimé' },
  ];

  const additionalInstructions = 'Prendre avec de la nourriture. Ne pas dépasser la dose recommandée.';

  // Générer une signature par défaut pour le médecin
  const defaultDoctorSignature = 'Dr. Ali';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="prescription-container">
      <h2 className="prescription-title">Ordonnance</h2>

      <div className="patient-info">
        <h3>Informations sur le patient</h3>
        <p><strong>Nom :</strong> {patientInfo.name}</p>
        <p><strong>Telephonne :</strong> {patientInfo.telephone}</p>
        <p><strong>Adresse :</strong> {patientInfo.address}</p>
      </div>

      <div className="medication-list">
        <h3>Médicaments</h3>
        <ul>
          {consultation ? consultation.description : null}
        </ul>
      </div>

      {additionalInstructions && (
        <div className="additional-instructions">
          <h3>Instructions supplémentaires</h3>
          <p>{additionalInstructions}</p>
        </div>
      )}

      <div className="footer">
        <p>Date : {new Date().toLocaleDateString()}</p>
        <p className="doctor-signature">Signature du médecin : {defaultDoctorSignature}</p>
      </div>
      <button className="print-button" onClick={handlePrint}>Imprimer</button>

    </div>
  );
};

export default PrescriptionTemplate;
