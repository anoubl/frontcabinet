import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Utilisez un délai avant d'envoyer la requête (par exemple, 500 ms après la dernière frappe)
    const timer = setTimeout(() => {
      if (search.trim() !== '') {
        setLoading(true);
        axios.post(`https://anoubl-001-site1.atempurl.com/Search/${search}`)
          .then((response) => {
            if(response.data.length>0)
            {
                setPatients(response.data)
            }
          })
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
      }
    }, 500);

    return () => clearTimeout(timer); // Nettoie le timer à chaque changement de recherche
  }, [search]);

  return (
    <div className='m-5'>
      <div className="md-form active-pink active-pink-2 ">
        <input
          className="form-control"
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {patients.length > 0 ? (
        patients.map((patient) => (
          <div key={patient.id}>
            <p>{patient.prenom}</p>
          </div>
        ))
      ) : (
        <p>No patients available.</p>
      )}
    </div>
  );
}

export default SearchBar;
