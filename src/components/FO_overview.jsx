import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

const FinanceOfficeOverview = () => {
    const services = [
        "Budget Planning and Management: Assisting departments in planning and managing their annual budgets effectively.",
        "Payroll Services: Ensuring timely and accurate compensation to all employees, including benefits and tax management.",
        "Payroll Services: Ensuring timely and accurate compensation to all employees, including benefits and tax management.",
    ];

    return (
        <Box sx={{width: '100%', margin: 0, padding: '5px' }}>
            <Paper elevation={3} sx={{ padding: '9px', backgroundColor: '#f4f4f9' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#034f84' , textAlign:'center'}}>
                    Finance Office Overview
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ color: '#4a4a4a',textAlign:'center' }}>
                    The Finance Office at our college offers comprehensive financial services to support students, faculty, and administrative staff. We focus on ensuring transparency, efficiency, and accuracy in all financial matters, helping the college community with a variety of financial needs.
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginTop: '1rem', color: '#034f84', textAlign: 'center' }}>
                    Services Offered
                </Typography>

                {/* Grid for displaying services in cards */}
                <Grid container spacing={3} sx={{ p: 3, }}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card 
                                sx={{  backgroundColor: 'white', 
                                        height: '100%' ,
                                    boxShadow: '0 4px 8px rgba(3, 79, 132, 0.5)', // Default shadow
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
                                        '&:hover': {
                                        transform: 'translateY(-10px)', // Move card up on hover
                                            boxShadow: '0 8px 16px rgba(3, 79, 132, 0.7)', // Increase shadow on hover
                                    },
                                    }}>
                                <CardContent>
                                    <Typography variant="body1" sx={{ color: 'black' }}>
                                        {service}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Box>
    );
};

export default FinanceOfficeOverview;
