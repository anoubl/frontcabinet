// AddFolder.js

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

const AddFolder = ({ open, onClose, user, onSubmit }) => {
  const [description, setDescription] = useState("");
  const handleForm = (event) => {
    event.preventDefault();
    console.log("form sumbited")
    onSubmit(description); // Pass the description to the parent component
  };

  return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
         La création d'un  dossier médical pour le patient{' '}
          {user ? user.prenom + ' ' + user.nom : null}
        </DialogTitle>
        <DialogContent>
          <>
            <TextField
              className='mt-2'
              id='outlined-multiline-static'
              label='Description'
              multiline
              rows={4}
              required
              variant='outlined'
              value={description}
              onChange={(event) => {setDescription(event.target.value);}}
            />
          
          </>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}  color='primary'>
            Annuler
          </Button>
          <Button onClick={handleForm} type='submit' color='primary'>
            Créer
          </Button>
        </DialogActions>
      </Dialog>
  
  );
};

export default AddFolder;
