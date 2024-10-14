// Sections.jsx
import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const feeStructure = [
    {
        year: "First Year",
        tuitionFee: "INR 40,000",
        hostelFee: "INR 15,000",
        miscellaneous: "INR 5,000",
    },
    {
        year: "Second Year",
        tuitionFee: "INR 40,000",
        hostelFee: "INR 15,000",
        miscellaneous: "INR 5,000",
    },
    {
        year: "Third Year",
        tuitionFee: "INR 40,000",
        hostelFee: "INR 15,000",
        miscellaneous: "INR 5,000",
    },
    {
        year: "Fourth Year",
        tuitionFee: "INR 40,000",
        hostelFee: "INR 15,000",
        miscellaneous: "INR 5,000",
    },
];

const Sections = () => {
    return (
        <Box sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#003366' }}>
                College Fee Structure
            </Typography>
            <Grid container spacing={3}>
                {feeStructure.map((fee, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#003366' }}>
                                {fee.year}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Tuition Fee:</strong> {fee.tuitionFee}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Hostel Fee:</strong> {fee.hostelFee}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Miscellaneous:</strong> {fee.miscellaneous}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Sections;
