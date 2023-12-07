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
      <DialogTitle style={{ backgroundColor: '#2196F3', color: '#fff' }}>
        Patient Details
      </DialogTitle>
      <DialogContent>
        {user ? (
          <div>
            <DetailRow label="Prénom" value={user.prenom} />
            <DetailRow label="Nom" value={user.nom} />
            <DetailRow label="Téléphone" value={user.telephone} />
            <DetailRow
              label="Date de naissance"
              value={user.dateNaissance}
            />
            <DetailRow label="Adresse" value={user.adresse} />
            <DetailRow label="Email" value={user.email} />

            {/* Ajouter plus de détails si nécessaire */}
          </div>
        ) : (
          <Typography variant="body1">Loading...</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          style={{ color: '#fff', backgroundColor: '#4CAF50' }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const DetailRow = ({ label, value }) => (
  <div style={{ marginBottom: 8 }}>
    <Typography variant="body1">
      <strong>{label}:</strong> {value}
    </Typography>
  </div>
);

export default DetailsModal;
