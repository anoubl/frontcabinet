import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Dashboard from '../../Docteur/Dashboard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'
import { Icon } from '@iconify/react';

import PrescriptionTemplate from '../../Ordonance/PrescriptionTemplate';
import AddConsultation from './AddConsultation';
import { toast, ToastContainer } from 'react-toastify';
function DossierMed() {
  const [dossierInfo, setDossierInfo] = useState({});
  const [consultations, setConsultations] = useState([]);
  const { userid } = useParams();
  const [showAddConsultation, setShowAddConsultation] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [patient,setPatient]=useState();

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleDossiers = () => {
    axios.get(`https://anoubl-001-site1.atempurl.com/api/Dossiers/${userid}`)
      .then((response) => {
        console.log(response)
         setPatient(response.data[0].patientInfo)
        setConsultations(response.data[0].consultations)
        setDossierInfo(response.data[0].dossierInformation);
      })
      .catch((error) => console.log(error));
  };
const dossierId=dossierInfo.dossierId;
  useEffect(() => {
    handleDossiers();
  }, [userid]);
  const handleConsultationSubmit = (description,Total) => {
    // Add your logic for form submission or API call here
    console.log(`Adding consultation for user  with description: ${description}`);
    axios.post("https://anoubl-001-site1.atempurl.com/api/DossierDetails",{
      description:description,
      dossierId:dossierId,
      Total:Total
    }).then((response) => {
      console.log(response)
      if(response.status===201)
      {
        toast.success("la consultation a été ajouter avec succés")
        handleDossiers();
      }
    })
    .catch((error) => console.log(error));
    handleCloseDialog();
  };
  return (
    <>
      <Dashboard>
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
        {/* Dossier medical info */}
        <div className='row'>
        <div className='col-md-6'>
        <div className="card  " >
          <div className="card-body ">
            <h5 className="card-title">Dossier d'informations sur le patient  <p className='text text-primary'>{patient ? patient.prenom + " " + patient.nom : null}</p> </h5>
            <p className="card-text">Date Creation: {dossierInfo.dateCreation  ? dossierInfo.dateCreation.substring(0, 10) : null}</p>
            <p className="card-text">Patient ID: {dossierInfo.patientId}</p>
            <p className="card-text">Groupe sanguin: {dossierInfo.patDescription}</p>
          </div>
        
        </div>
        </div>
        <div className='col-md-6 '>
        <button className='btn btn-primary' onClick={handleOpenDialog}>Ajouter une consultation</button>
        </div>
       
       
        {consultations.length >0 ? 
        (
        <table className="table m-2">
          <thead>
            <tr>
              <th scope="col">Consultation ID</th>
              <th scope="col">ordonnance</th>
              <th>Total </th>
            </tr>
          </thead>
          <tbody>
           { consultations.map((consultation) => (
              <tr key={consultation.id}>
                <td>
                  <div className="card-body">
                    <h5 className="card-title"> {consultation.id}</h5>
                  </div>
                </td>
                <td>
                  <Link to={`/Prescription-Doc/${consultation.id}/${userid}`}> <Icon icon="fa-solid:file-medical" color="#869" width="50" vFlip={true} /></Link>
                </td> 
                <td>
                  {consultation.total}DH
                  </td> 
              </tr>
          ))}
          </tbody>
        </table>
     ): (<p className='text mt-4 text-danger text-center'>No data Found</p>)}
 </div>

{/* Utilisez le composant AddConsultation en le rendant conditionnellement visible */}
<AddConsultation open={isDialogOpen} onClose={handleCloseDialog} user={patient} onSubmit={handleConsultationSubmit} />

      </Dashboard>
    </>
  );
}

export default DossierMed;
