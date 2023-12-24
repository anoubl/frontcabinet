// Patients.js
import React, { useEffect, useRef, useState } from 'react';
import Dashboard from '../Dashboard';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DetailsModal from './DetailsModal';
import DialogDeleteUser from './DialogDeleteUser'; // Import the DialogDeleteUser component
import DialogUpdate from './DialogUpdate';


function Patientdoc() {
  const [messageu,setMessageu]=useState("");
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [message, setMessage] = useState("");
  const filterusers=users.filter((user)=>user.rôle===2);
  const handleusers = () => {
    axios.get("https://anoubl-001-site1.atempurl.com/api/Users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleusers(); // Initial fetch of users
  }, []);
  const handleUpdate = (updatedUser) => {
    const id = updatedUser.id; // Assuming selectedUser is available
    axios.put(`https://anoubl-001-site1.atempurl.com/api/Users/${id}`, updatedUser)
      .then((response) => {
        if (response.status === 204) {
          handleusers();
          setMessageu("Les détails du patient ont été mis à jour avec succès");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setUpdateDialogOpen(true);
  };

  const handleCloseUpdateDialog = () => {
    setUpdateDialogOpen(false);
  };
  const handleDelete = (userId, userName) => {
    // Open the delete confirmation dialog
    setUserToDelete({ id: userId, name: userName });
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirmed = () => {
    const id = userToDelete.id;
    // Add logic for handling delete action
    axios.delete(`https://anoubl-001-site1.atempurl.com/api/Users/${id}`)
      .then((response) => {
        if (response.status === 200) {
          handleusers();
          setMessage("le patient supprimé avec succés");
        }
      })
      .catch((error) => console.error(error))
    // Close the delete confirmation dialog
    setDeleteDialogOpen(false);
  };

  const handleDetails = (user) => {
    // Display details in the modal
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    // Close the modal
    setOpenModal(false);
  };
  useEffect(() => {
    if (message) {
      toast.error(message);
      setMessage('');
    }
    else if(messageu)
    {
      toast.success(messageu);
      setMessageu('');
    }
  }, [message,messageu]);
  return (
    <div>

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
        <div className="mx-auto">
          <h4 className="text text-primary">Patients</h4>
        </div>        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Prenom</TableCell>
                <TableCell>Nom</TableCell>
                <TableCell>Telephone</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterusers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.prenom}</TableCell>
                  <TableCell>{user.nom}</TableCell>
                  <TableCell>{user.telephone}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEdit(user)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDelete(user.id, user.nom)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton color="default" onClick={() => { handleDetails(user) }}>
                      <VisibilityIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Delete Confirmation Dialog */}
        <DialogDeleteUser
          open={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
          onConfirm={handleDeleteConfirmed}
          userName={userToDelete ? userToDelete.name : ""}
        />

        {/* Details Modal */}
        <DetailsModal
          user={selectedUser}
          open={openModal}
          onClose={handleCloseModal}
        />
       <DialogUpdate
          open={updateDialogOpen}
          onClose={handleCloseUpdateDialog}
          onUpdate={handleUpdate}
          user={selectedUser}
        />
      </Dashboard>
    </div>
  );
}

export default Patientdoc;
