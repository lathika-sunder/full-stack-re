import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import './CompletedTransactionsIndidviduals.css'

const CompletedTransactionsIndividuals = () => {
    const [pickupRequests, setPickupRequests] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:4040/api/v1/individuals/pickup-history', {
                    headers: {
                        Authorization: token,
                    },
                });
                setPickupRequests(response.data);
            } catch (error) {
                console.log('Error getting user pickup history', error);
            }
        };

        fetchHistory();
    }, []);

    return (
        <div className="transactions-individuals">
            <Typography variant="h4" gutterBottom>
                Completed Transactions
            </Typography>
            <Grid container spacing={2} className='container'>
                {pickupRequests.map((request, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {request.description}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Quantity: {request.quantity}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Tags: {request.tags.join(', ')}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Address: {request.address}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Requested At: {new Date(request.selectedDateTime).toLocaleString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CompletedTransactionsIndividuals;
