// DialogDeleteUser.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const DialogDeleteUser = ({ open, onClose, onConfirm, userName }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirmer la suppression</DialogTitle>
      <DialogContent>
        Êtes-vous sûr de vouloir supprimer le patient "{userName}" ?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Annuler
        </Button>
        <Button onClick={onConfirm} color="secondary">
          Supprimer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogDeleteUser;
