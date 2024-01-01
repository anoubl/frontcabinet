// PatientInfoDialog.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const PatientInfoDialog = ({ open, onClose, patient }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Patient Information</DialogTitle>
      <DialogContent>
        {patient && (
          <div>
            <Typography variant="body1">
              <strong>Patient Name:</strong> {patient.patientName}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {patient.patientemail}
            </Typography>
            <Typography variant="body1">
              <strong>Description:</strong> {patient.description}
            </Typography>
            <Typography variant="body1">
              <strong>Date de rendez-vous:</strong> {patient.daterendezvous.substring(0,10)}
            </Typography>
            {/* Add more patient information fields as needed */}
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PatientInfoDialog;
