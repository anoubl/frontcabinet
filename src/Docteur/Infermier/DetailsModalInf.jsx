import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

const DetailsModal = ({ user, open, onClose }) => {
  const dialogTitleStyle = {
    backgroundColor: '#2196F3',
    color: '#fff',
  };

  const closeButtonStyle = {
    color: '#fff',
    backgroundColor: '#4CAF50',
  };

  const detailRowLabelStyle = {
    fontWeight: 'bold',
  };

  const patientDetailsStyle = {
    margin: '40px',
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={dialogTitleStyle}>Patient Details</DialogTitle>
      <DialogContent>
        {user ? (
          <div style={patientDetailsStyle}>
            <div className="row">
              <div className="col-md-6">
                <DetailRow label="Prénom" value={user.prenom} />
                <DetailRow label="Nom" value={user.nom} />
                <DetailRow label="Téléphone" value={user.telephone} />
              </div>
              <div className="col-md-6">
                <DetailRow label="Date de naissance" value={user.dateNaissance.substring(0,10)} />
                <DetailRow label="Adresse" value={user.adresse} />
                <DetailRow label="Email" value={user.email} />
              </div>
            </div>

            {/* Add more details if necessary */}
          </div>
        ) : (
          <Typography variant="body1">Loading...</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={closeButtonStyle}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const DetailRow = ({ label, value }) => {
  const detailRowStyle = {
    marginBottom: '2px',
  };

  const detailRowLabelStyle = {
    fontWeight: 'bold',
  };

  return (
    <div style={detailRowStyle}>
      <span style={detailRowLabelStyle}>{label}: </span>
      {value}
    </div>
  );
};

export default DetailsModal;
