import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const PatientDetailsDialog = ({ open, onClose, patient }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{`Details for ${patient.prenom}`}</DialogTitle>
      <DialogContent>
        {/* Render patient details here */}
        <p>Name: {patient.prenom}</p>
        <p>Other details: {patient.otherDetails}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PatientDetailsDialog;
