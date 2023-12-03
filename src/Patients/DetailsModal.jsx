import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@mui/material';
import axios from 'axios';

const DetailsModal = ({ userId, open, onClose }) => {
    console.log(userId)
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        // Make a request to your API to get additional details based on the user ID
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`https://localhost:7184/api/Users/${userId}`);
                setUserDetails(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (userId) {
            fetchUserDetails();
        }
    }, [userId]);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>User Details</DialogTitle>
            <DialogContent>
                {userDetails ? (
                    <div>
                        <p><strong>Prenom:</strong> {userDetails.prenom}</p>
                        <p><strong>Nom:</strong> {userDetails.nom}</p>
                        <p><strong>Telephone:</strong> {userDetails.telephone}</p>
                        {/* Add more details as needed */}
                    </div>
                ) : (
                    <p>Loading...</p>
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

export default DetailsModal;
