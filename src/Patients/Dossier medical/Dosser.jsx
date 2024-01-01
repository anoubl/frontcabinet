import React from 'react';

const DossierMedicale = ({ user }) => {
  const containerStyles = {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  const titleStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  };

  const thStyles = {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f1f1f1',
    fontWeight: 'bold',
  };

  const tdStyles = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  const evenRowStyles = {
    backgroundColor: '#f9f9f9',
  };

  return (
    <div style={containerStyles}>
      <h1 style={titleStyles}>Dossier Médical de {user && user.nom} {user && user.prenom}</h1>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>Date</th>
            <th style={thStyles}>Category</th>
            <th style={thStyles}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style={evenRowStyles}>
            <td style={tdStyles}>2023-12-31</td>
            <td style={tdStyles}>Checkup</td>
            <td style={tdStyles}>Regular health checkup</td>
          </tr>
          {/* Add more table rows dynamically */}
        </tbody>
      </table>
    </div>
  );
};

export default DossierMedicale;