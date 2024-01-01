// Patients.js
import React, { useEffect, useState } from 'react';
import Dashboard from '../Infermerie/Dashboard';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Patient.css'
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
import FolderIcon from '@mui/icons-material/Folder';
import { Link } from 'react-router-dom';
import Dosser from './Dossier medical/Dosser';

function Patients() {
  const [messageu, setMessageu] = useState("");
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [message, setMessage] = useState("");
  const filterusers = users.filter((user) => user.rôle === 2 && user.etat === 1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Change this according to your preference
  const [search, setSearch] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const handleusers = () => {

    axios.get("https://anoubl-001-site1.atempurl.com/api/Users")
      .then((response) => { setUsers(response.data); console.log(response.data) })
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
    setSelectedUserId(user.id);
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
    else if (messageu) {
      toast.success(messageu);
      setMessageu('');
    }
  }, [message, messageu]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filterusers.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleSearch = () => {
    if (search.length > 0) {
      setUsers(users.filter((item) => {
        return item.prenom.toLowerCase().includes(search.trimEnd()) || item.nom.toLowerCase().includes(search.trimEnd());
      }))
    }
    else {
      handleusers();
    }
  }
  const handleReset=()=>{
    setSearch('');
    handleusers();
  }
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
        <div className='row mb-2'>
          <div className='col-md-8'>
          <input
              type="text"
              className="form-control active-pink-2"
              placeholder="Trouver un patient..."
              aria-label="Search"
              onChange={(event) => setSearch(event.target.value)}
              value={search}
            />
          </div>
          <div className='col-md-4 d-flex '>
          <button onClick={handleSearch} className='btn btn-primary ' style={{ marginRight: '10px' }}>Search</button>
          <button onClick={handleReset} className='btn btn-danger'>Reset</button>
          </div>
        </div>
           
         
      
        <TableContainer  component={Paper}>
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
              {currentUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.prenom.toLowerCase()}</TableCell>
                  <TableCell>{user.nom.toLowerCase()}</TableCell>
                  <TableCell>{user.telephone}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEdit(user)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDelete(user.id, user.nom)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton color="success" onClick={() => { handleDetails(user) }}>
                      <VisibilityIcon />
                    </IconButton>
                    <Link to="/Dossier-med"> <IconButton color="warning" >
                     <FolderIcon/>
                    </IconButton></Link>
                   
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Pagination */}
        <div className="d-flex justify-content-center mt-2">
          <Pagination>
            {[...Array(Math.ceil(filterusers.length / itemsPerPage)).keys()].map((number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
        

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
        {openModal && (
        <DialogUpdate
          open={updateDialogOpen}
          onClose={handleCloseUpdateDialog}
          onUpdate={handleUpdate}
          user={selectedUser}
        />
      )}

      {selectedUserId && (
        <Dosser user={selectedUser} />
      )}
      </Dashboard>
    </div>
  );
}

export default Patients;
