import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { Icon } from '@iconify/react';
import Dashboard from './Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FolderPatient() {
  const [dossierInfo, setDossierInfo] = useState({});
  const [consultations, setConsultations] = useState([]);
  const [patient, setPatient] = useState();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const userid = localStorage.getItem("userid");

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleDossiers = () => {
    axios.get(`https://anoubl-001-site1.atempurl.com/api/Dossiers/${userid}`)
      .then((response) => {
        const data = response.data[0];
        setPatient(data.patientInfo);
        setConsultations(data.consultations);
        setDossierInfo(data.dossierInformation);
      })
      .catch((error) => {
        console.error("Error fetching dossier information:", error);
        toast.error("Erreur lors du chargement des informations du dossier.");
      });
  };

  const dossierId = dossierInfo.dossierId;

  useEffect(() => {
    handleDossiers();
  }, [userid]);



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

        <div className='row m-4 mx-auto '>
          <div className='col-md-6'>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Dossier d'informations sur le patient <p className='text text-primary'>{patient ? `${patient.prenom} ${patient.nom}` : null}</p></h5>
                <p className="card-text">Date de création: {dossierInfo.dateCreation ? dossierInfo.dateCreation.substring(0, 10) : null}</p>
                <p className="card-text">Patient ID: {dossierInfo.patientId}</p>
                <p className="card-text">Groupe sanguin: {dossierInfo.patDescription}</p>
              </div>
            </div>
          </div>

          <div className='col-md-6 '>
            {consultations.length > 0 ? (
              <table className="table m-2">
                <thead>
                  <tr>
                    <th scope="col">Consultation ID</th>
                    <th scope="col">Ordonnance</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {consultations.map((consultation) => (
                    <tr key={consultation.id}>
                      <td>
                        <div className="card-body">
                          <h5 className="card-title"> {consultation.id}</h5>
                        </div>
                      </td>
                      <td>
                        <Link to={`/Prescription-Doc/${consultation.id}/${userid}`}>
                          <Icon icon="fa-solid:file-medical" color="#869" width="50" vFlip={true} />
                        </Link>
                      </td>
                      <td>
                        {consultation.total}DH
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className='text mt-4 text-danger text-center'>Aucune donnée trouvée</p>
            )}
          </div>
        </div>
      </Dashboard>
    </>
  );
}

export default FolderPatient;
