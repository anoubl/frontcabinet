import React, { useEffect, useState } from 'react';
import Dashboard from '../Infermerie/Dashboard';
import axios from 'axios';
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DetailsModal from './DetailsModal'; // Import the DetailsModal component

function Patients() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        axios.get("https://localhost:7184/api/Users")
            .then((response) => setUsers(response.data))
            .catch((err) => console.log(err));
    }, []);

    const handleEdit = (userId) => {
        // Add logic for handling edit action
        console.log(`Edit user with id ${userId}`);
    };

    const handleDelete = (userId) => {
        // Add logic for handling delete action
        console.log(`Delete user with id ${userId}`);
    };

    const handleDetails = (userId) => {
        // Display details in the modal
        setSelectedUser(userId);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        // Close the modal
        setOpenModal(false);
    };

    return (
        <div>
            <Dashboard>
                <h1>Patients</h1>
                <TableContainer component={Paper}>
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
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.prenom}</TableCell>
                                    <TableCell>{user.nom}</TableCell>
                                    <TableCell>{user.telephone}</TableCell>
                                    <TableCell>
                                        <IconButton color="primary" onClick={() => handleEdit(user.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton color="secondary" onClick={() => handleDelete(user.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton color="default" onClick={() => {handleDetails(user.id)}}>
                                            <VisibilityIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Details Modal */}
                <DetailsModal user={selectedUser} open={openModal} onClose={handleCloseModal} />
            </Dashboard>
        </div>
    );
}

export default Patients;
