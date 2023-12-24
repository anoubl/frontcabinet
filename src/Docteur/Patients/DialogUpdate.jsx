import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from '@mui/material';

const DialogUpdate = ({ open, onClose, onUpdate, user }) => {
    console.log(user)
    const [updatedUser, setUpdatedUser] = useState({
        prenom: user ? user.prenom : '',
        nom: user ? user.nom : '',
        telephone: user ? user.telephone : '',
        adresse: user ? user.adresse : '',  // Assumed property name, change it as needed
        dateNaissance: user ? user.dateNaissance : '',  // Assumed property name, change it as needed
        // Add other fields as needed
    });

    useEffect(() => {
        setUpdatedUser({
            id: user ? user.id : '',
            prenom: user ? user.prenom : '',
            nom: user ? user.nom : '',
            telephone: user ? user.telephone : '',
            adresse: user ? user.adresse : '',
            dateNaissance: user ? user.dateNaissance : '',
            email: user ? user.email : '',

            // Add other fields as needed
        });
    }, [user]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleUpdate = () => {
        console.log({ updatedUser });
        onUpdate(updatedUser);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Update User Details</DialogTitle>
            <DialogContent>
                <TextField
                    label="Prénom"
                    name="prenom"
                    value={updatedUser.prenom}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Nom"
                    name="nom"
                    value={updatedUser.nom}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Téléphone"
                    name="telephone"
                    value={updatedUser.telephone}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Adresse"
                    name="adresse"
                    value={updatedUser.adresse}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="DateNaissance"
                    name="dateNaissance"
                    value={updatedUser.dateNaissance}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="email"
                    name="email"
                    value={updatedUser.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                {/* Add other fields as needed */}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleUpdate} color="primary">
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogUpdate;
