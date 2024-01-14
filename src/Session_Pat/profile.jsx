import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PrimarySearchAppBar from './Dashboard-Pat';
import { Link } from 'react-router-dom';

function Prof() {
  const [userData, setUserData] = useState([]);
  const userId = localStorage.getItem("userid");

  const handleProfile = () => {
    axios.get(`https://anoubl-001-site1.atempurl.com/api/Users/${userId}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }

  useEffect(() => {
    if (userId) {
      handleProfile();
    }
  }, [userId]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      <PrimarySearchAppBar>
        <div className='row m-2 d-flex'>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                {userData.map((user) => (
                  <React.Fragment key={user.id}>
                    {user.rôle === 2 ? (
                      <img src="./Images/infirmiere.jpg" alt="Profile" className="rounded-circle" />
                    ) : (
                      <img src="./Images/docteur.jpg" style={{ width: "20rem" }} alt="Profile" className="rounded-circle" />
                    )}
                    <h2>{user.prenom + " " + user.nom}</h2>
                    <h3>{user.specialite}</h3>
                  </React.Fragment>
                ))}
                <div className="social-links mt-2">
                  <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div>
              <div className="card-body pt-3">
                <div className="tab-content pt-2">
                  <div className="tab-pane fade show active profile-overview" id="profile-overview">
                    <h5 className="card-title">Profile Details</h5>
                    <hr />
                    {userData.map((user) => (
                      <React.Fragment key={user.id}>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Université</div>
                          <div className="col-lg-9 col-md-8">{user.universite}</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Expériences</div>
                          <div className="col-lg-9 col-md-8">{user.experience} ans</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Job</div>
                          <div className="col-lg-9 col-md-8">{user.specialite}</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Country</div>
                          <div className="col-lg-9 col-md-8">Maroc</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Address</div>
                          <div className="col-lg-9 col-md-8">{user.adresse}</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Phone</div>
                          <div className="col-lg-9 col-md-8">+212{user.telephone}</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Email</div>
                          <div className="col-lg-9 col-md-8">{user.email}</div>
                        </div>
                        <div className="row d-flex">
                          <div className="col-lg-3 col-md-4 label">Nombre d'heures de travail</div>
                          <div className="col-lg-9 col-md-8">{user.heures}H</div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PrimarySearchAppBar>
    </>)}
    export default Prof;
