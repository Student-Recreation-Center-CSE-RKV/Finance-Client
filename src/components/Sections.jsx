// Sections.jsx
import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import Accordion2 from "./Accordion2.jsx";
import Accordion3 from "./Accordion3.jsx"
const feeStructure = [
    {
        year: "PUC",
        component: <Accordion2 />,
    },
    {
        year: "Engineering",
        component: <Accordion3 />,
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
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#003366', textAlign: 'center' }}>
                                {fee.year}
                            </Typography>
                            {fee.component}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Sections;
