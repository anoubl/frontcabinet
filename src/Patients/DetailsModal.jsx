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
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="bg-primary text-white">Patient Details</DialogTitle>
      <DialogContent>
        {user ? (
          <div>
            <div className="row">
              <div className="col-md-6">
                <DetailRow label="Prénom" value={user.prenom} />
                <DetailRow label="Nom" value={user.nom} />
                <DetailRow label="Téléphone" value={user.telephone} />
              </div>
              <div className="col-md-6">
                <DetailRow label="Date de naissance" value={user.dateNaissance} />
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
        <Button onClick={onClose} className="btn btn-success">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const DetailRow = ({ label, value }) => {
  return (
    <div className="mb-2">
      <strong>{label}: </strong>
      {value}
    </div>
  );
};

export default DetailsModal;
