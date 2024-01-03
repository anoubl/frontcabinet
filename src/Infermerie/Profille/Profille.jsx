import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Dashboard from '../Dashboard'

function Profille() {
    const [userData, setUserData] = useState([]);
    const userId = localStorage.getItem("userid");
    const handleProfile = () => {
        axios.get(`https://anoubl-001-site1.atempurl.com/api/Users/profille/${userId}`)
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
            <Dashboard>
                <div className='row m-2 d-flex'>
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                {userData.map((user) => (

                                    <>
                                        {user.rôle === 0 ? (
                                            <img src="./Images/infirmiere.jpg" alt="Profile" class="rounded-circle" />
                                        ) : (
                                            <img src="./Images/docteur.jpg" style={{width:"20rem"}} alt="Profile" class="rounded-circle" />
                                        )}
                                        <h2>{user.prenom + " " + user.nom}</h2>
                                        <h3>{user.specialite}</h3>
                                    </>
                                ))}
                                <div class="social-links mt-2">
                                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div >
                            <div className="card-body pt-3">

                                <div className="tab-content pt-2">

                                    <div className="tab-pane fade show active profile-overview" id="profile-overview">

                                        <h5 className="card-title">Profile Details</h5>
                                        <hr />


                                        {userData.map((user) => (
                                            <>
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
                                            </>
                                        ))}


                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </Dashboard>
        </>
    )
}

export default Profille;