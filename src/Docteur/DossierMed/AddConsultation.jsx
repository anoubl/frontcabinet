// AddConsultation.js

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

const AddConsultation = ({ open, onClose, user, onSubmit }) => {
  const [description, setDescription] = useState("");
  const [Total , setTotal] =useState(0);
  const handleForm = (event) => {
    event.preventDefault();
    console.log("form sumbited")
    onSubmit(description,Total); // Pass the description to the parent component
  };

  return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
          Une nouvelle consultation pour le patient{' '}
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
            <TextField
             className='m-2'
             type="number"
             id='outlined-multiline-static'
             label='Total'
             value={Total}
             onChange={(event) => {setTotal(event.target.value);}}
            />
          </>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}  color='primary'>
            Annuler
          </Button>
          <Button onClick={handleForm} type='submit' color='primary'>
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
  
  );
};

export default AddConsultation;
