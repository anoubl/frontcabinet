import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Dashboarddoc from './Dashboard';

function AccueilDoc() {
  const userId = localStorage.getItem("userid");
  const [appointments, setAppointments] = useState([]);

  const handleRendezVous = () => {
    axios.get(`https://anoubl-001-site1.atempurl.com/RendezVousParDocteur/${userId}`)
      .then((response) => {setAppointments(response.data);console.log(response)})
      .catch((error) => console.log(error));
  }
  const formatDate = (date) => {

    const day = date.getDate();
    const month = date.getMonth() + 1; // Les mois commencent à partir de zéro, donc on ajoute 1
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${year}-${formattedMonth}-${formattedDay}`;
  };

  const date = new Date();
  console.log(formatDate(date))
  useEffect(() => {
    handleRendezVous();
  }, [userId]);
  return (
    <div>
      <Dashboarddoc>
       <div className='container'> 
       <h5 className='text text-center text-primary'>Bonjour {localStorage.getItem("fullName")}</h5>
<h2>Liste des rendez-vous pour aujourd'hui</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Time</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {appointments.filter((X)=> X.daterendezvous.substring(0,10) === formatDate(date)).map((appointment, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{appointment.patientName}</td>
                <td>{appointment.daterendezvous.substring(0,10)}</td>
                <td>{appointment.plage}</td>
                {/* Add more columns as needed */}
              </tr>
            ))}
          </tbody>
        </Table>
       </div>
      </Dashboarddoc>
    </div>
  )
}

export default AccueilDoc;