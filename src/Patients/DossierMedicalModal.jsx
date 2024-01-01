import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

const DialogDossMed = ({ user }) => {
  const [open, setOpen] = useState(false);

  const dialogTitleStyle = {
    backgroundColor: '#2196F3',
    color: '#fff',
  };

  const closeButtonStyle = {
    color: '#fff',
    backgroundColor: '#4CAF50',
  };

  const detailRowStyle = {
    marginBottom: '2px',
  };

  const detailRowLabelStyle = {
    fontWeight: 'bold',
  };

  const medicalDossierStyle = {
    margin: '40px',
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>View Medical Dossier</Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={dialogTitleStyle}>Medical Dossier</DialogTitle>
        <DialogContent>
          {user ? (
            <div style={medicalDossierStyle}>
              <div style={detailRowStyle}>
                <span style={detailRowLabelStyle}>Patient Name: </span>
                {user.nom}
              </div>
              <div style={detailRowStyle}>
                <span style={detailRowLabelStyle}>Age: </span>
                {user.dateNaissance}
              </div>
              <div style={detailRowStyle}>
                <span style={detailRowLabelStyle}>Gender: </span>
                {user.prenom}
              </div>
              {/* Add more medical details here */}
            </div>
          ) : (
            <Typography variant="body1">Loading...</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={closeButtonStyle}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogDossMed;