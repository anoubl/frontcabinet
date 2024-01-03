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
import InfoIcon from '@mui/icons-material/Info';
import Dashboard from '../Dashboard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PatientInfoDialog from './DialogueInfoPatient';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import { sendEmails } from '../../Email/Email';
function RendezVous() {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedAppointment, setEditedAppointment] = useState({
    id: null,
    daterendezvous: null,
    plage: "",
  });
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
  const handleDeleteAppointment = (id) => {
    axios.delete(`https://anoubl-001-site1.atempurl.com/api/RendezVous/${id}`)
      .then((response) => {
        handlerendezvous();
        toast.error("rendez vous supprimer avec succés merci");
      })
      .catch((error) => console.log(error));

  };
  const handleValidateAppointment = (email, name, date,heure) => {
    axios.put(`https://anoubl-001-site1.atempurl.com/api/Users/validate/${email}`)
      .then((response) => {
        if (response.status === 200) {
          axios.put(`https://anoubl-001-site1.atempurl.com/api/RendezVous/validate/${email}`)
            .then((response) => {
              if (response.status === 200) {
                sendEmails(email,name,date.substring(0,10),heure);
                handlerendezvous();
                toast.success("rendez vous effectuer avec succés merci !");
              }
              else {
                console.info("il y a un erreur.")
              }
            })
            .catch((error) => console.error(error))

        }
        else {
          toast.error("impossible de traiter ce rendez vous");
        }
      })
      .catch((error) => console.log(error))
  };

  // Calculate the index of the last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item to display on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current page's items
  const currentItems = appointments.slice(indexOfFirstItem, indexOfLastItem);

  const handleEditAppointment = (appointment) => {
    setEditedAppointment({
      id: appointment.id,
      daterendezvous: appointment.daterendezvous.substring(0, 10),
      plage: appointment.plage,
      description: appointment.description,
      etat: appointment.etat,
      id: appointment.id,
      patientemail: appointment.patientemail
    });

    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
  };

  const handleSaveEditedAppointment = () => {
    const id = editedAppointment.id;
    axios.put(`https://anoubl-001-site1.atempurl.com/api/RendezVous/${id}`, {
      daterendezvous: editedAppointment.daterendezvous,
      description: editedAppointment.description,
      etat: editedAppointment.etat,
      id: editedAppointment.id,
      patientemail: editedAppointment.patientemail,
      plage: editedAppointment.plage,
    }).then((response) => {
      if (response.status === 204) {
        console.log(response)
        toast.success("le patient a été modifier avec succés")
        handlerendezvous();
      }
    })
      .catch((error) => console.error(error))
    setEditDialogOpen(false);

  };
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Other code...

  const handleOpenInfoDialog = (patient) => {
    setSelectedPatient(patient);
    setInfoDialogOpen(true);
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

        <p className='d-flex mt-4 justify-content-center text-warning'>La liste des rendez-vous (en cours)</p>
        <TableContainer component={Paper} className='mt-2'>
          <Table responsive="sm" striped bordered hover>
            <TableHead>
              <TableRow>
                <TableCell>Patient Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Heure</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.filter((rendez) => rendez.etat === 0).map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.patientName}</TableCell>
                  <TableCell>{appointment.description}</TableCell>
                  <TableCell>{appointment.plage}</TableCell>

                  <TableCell>{new Date(appointment.daterendezvous).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</TableCell>

                  <TableCell>
                    {!appointment.validated && (
                      <>
                        <IconButton onClick={() => handleValidateAppointment(appointment.patientemail, appointment.patientName, appointment.daterendezvous,appointment.plage)}>
                          <CheckIcon color="primary" />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteAppointment(appointment.id)}>
                          <DeleteIcon color="secondary" />
                        </IconButton>
                        <IconButton onClick={() => {
                          handleEditAppointment(appointment);
                        }}>
                          <EditIcon color="primary" />
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
            onClick={() => setCurrentPage(prevPage => prevPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span className="mx-2">{`Page ${currentPage}`}</span>
          <button
            className="btn btn-outline-primary"
            onClick={() => setCurrentPage(prevPage => prevPage + 1)}
            disabled={indexOfLastItem >= appointments.length}
          >
            Next Page
          </button>
        </div>

        <p className='text-center mt-2  text-success'>La liste des rendez-vous</p>
        {/*  deuxieme table  */}
        <TableContainer component={Paper} className='mt-4'>
          <Table responsive="sm" striped bordered hover>
            <TableHead>
              <TableRow>
                <TableCell>Patient Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Heure</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.filter((rendez) => rendez.etat === 1).map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.patientName}</TableCell>
                  <TableCell>{appointment.description}</TableCell>
                  <TableCell>{appointment.plage}</TableCell>

                  <TableCell>{new Date(appointment.daterendezvous).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</TableCell>

                  <TableCell>
                    {!appointment.validated && (
                      <>
                        <IconButton onClick={() => handleOpenInfoDialog(appointment)}>
                          <InfoIcon color="success" />
                        </IconButton>
                        <IconButton onClick={() => handleOpenInfoDialog(appointment)}>
                          <DriveFileMoveIcon color="warning" />
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

        {/* dialogue de validation */}
        <Dialog open={editDialogOpen} onClose={handleCloseEditDialog}>
          <DialogTitle >Edit Rendez-Vous</DialogTitle>
          <DialogContent className='mt-2' >
            <form>
              <TextField
                className='mt-2'
                label="Date"
                type="date"
                fullWidth
                value={editedAppointment.daterendezvous}
                onChange={(e) =>
                  setEditedAppointment({ ...editedAppointment, daterendezvous: e.target.value })
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Plage"
                type="time"
                fullWidth
                value={editedAppointment.plage}
                onChange={(e) => setEditedAppointment({ ...editedAppointment, plage: e.target.value })}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEditDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveEditedAppointment} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <PatientInfoDialog
          open={infoDialogOpen}
          onClose={() => setInfoDialogOpen(false)}
          patient={selectedPatient}
        />
      </Dashboard>
    </>

  );
}

export default RendezVous;
