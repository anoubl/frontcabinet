import React, { useState, useEffect, Fragment } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import Dashboard from '../Dashboard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';

function RendezVous() {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [validateUser,setValidateUser]=useState("");
  const handlerendezvous = () => {
    axios
      .get('https://anoubl-001-site1.atempurl.com/api/RendezVous')
      .then((response) => {
        console.log(response.data);
        setAppointments(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // Call the handlerendezvous function when the component mounts
    handlerendezvous();
  }, []);
 

  const handleAddAppointment = () => {

  };

  const handleDeleteAppointment = (id) => {
       axios.delete(`https://anoubl-001-site1.atempurl.com/api/RendezVous/${id}`)
       .then((response)=>{
        handlerendezvous();
        toast.error("rendez vous supprimer avec succés merci");
       })
       .catch((error)=>console.log(error));

};
  const handleValidateAppointment = (email,id) => {
    axios.put(`https://anoubl-001-site1.atempurl.com/api/Users/validate/${email}`)
    .then((response)=>{
        if(response.status===200)
        {
           handleDeleteAppointment(id);
           toast.success("rendez vous effectuer avec succés merci !");
           //email 
           handlerendezvous();
        }
        else
        {
            toast.error("impossible de traiter ce rendez vous");
        }
    })
    .catch((error)=>console.log(error))
  };

  // Calculate the index of the last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item to display on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current page's items
  const currentItems = appointments.slice(indexOfFirstItem, indexOfLastItem);



  
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
      
       <button className='btn btn-primary'>Ajouter un rendez-vous</button>
        <TableContainer component={Paper} className='mt-2'>
          <Table responsive="sm" striped bordered hover>
            <TableHead>
              <TableRow>
                <TableCell>Patient Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.patientemail}</TableCell>
                  <TableCell>{appointment.daterendezvous}</TableCell>
                  <TableCell>
                    {!appointment.validated && (
                      <>
                        <IconButton onClick={() => handleValidateAppointment(appointment.patientemail,appointment.id)}>
                          <CheckIcon color="primary" />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteAppointment(appointment.id)}>
                          <DeleteIcon color="secondary" />
                        </IconButton>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        {/* Pagination */}
        <div className="d-flex mt-4 justify-content-center">
          <button
            className="btn btn-outline-primary"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span className="mx-2">{`Page ${currentPage}`}</span>
          <button
            className="btn btn-outline-primary"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastItem >= appointments.length}
          >
            Next Page
          </button>
        </div>
   
      </Dashboard>
     </>
    
  );
}

export default RendezVous;
