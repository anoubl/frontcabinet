import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Dashboarddoc from '../Docteur/Dashboard';

function List() {
  const userId = localStorage.getItem("userid");
  const [appointments, setAppointments] = useState([]);

  const handleRendezVous = () => {
    axios.get(`https://anoubl-001-site1.atempurl.com/RendezVousParDocteur/${userId}`)
      .then((response) => setAppointments(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    handleRendezVous();
  }, [userId]);

  return (
    <>
      <Dashboarddoc>
        <h2>Appointment List</h2>
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
            {appointments.map((appointment, index) => (
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
      </Dashboarddoc>
    </>
  );
}

export default List;
