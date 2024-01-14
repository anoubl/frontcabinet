import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from '@mui/material';

const AddConsultation = ({ open, onClose, user }) => {


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>une nouvelle consultation pour le patient {user ? user.prenom + " " + user.nom : null}</DialogTitle>
            <DialogContent>
            <TextField
            className='mt-2'
            id="outlined-multiline-static"
            label="Description" // Adding a label for better accessibility
            multiline
            rows={4}
            required  // Adding the required attribute
            variant="outlined"
        />
                {/* Add other fields as needed */}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Annuler
                </Button>
                <Button color="primary">
                    Ajouter
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddConsultation;
