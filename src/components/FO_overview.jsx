import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
 
const FinanceOfficeOverview = () => {
    const services = [
        "Budget Planning and Management: Assisting departments in planning and managing their annual budgets effectively.",
        "Payroll Services: Ensuring timely and accurate compensation to all employees, including benefits and tax management.",
    ];

    return (
        <Box sx={{ width: '100%', margin: '0 auto', padding: '5px', border:'2px solid #034f84'}}>
            <Paper elevation={3} sx={{ padding: '9px', backgroundColor: '#f4f4f9' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#034f84' }}>
                    Finance Office Overview
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ color: '#4a4a4a' }}>
                    The Finance Office at our college offers comprehensive financial services to support students, faculty, and administrative staff. We focus on ensuring transparency, efficiency, and accuracy in all financial matters, helping the college community with a variety of financial needs.
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginTop: '5px', color: '#034f84' }}>
                    Services Offered:
                </Typography>

                <List>
                    {services.map((service, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={service}
                                primaryTypographyProps={{
                                    variant: 'body1',
                                    color: 'textPrimary',
                                    padding: '2px',
                                    margin:'0px',
                                }}
                            />
                        </ListItem>
                    ))}
                </List>

                <Typography variant="body2" sx={{ marginTop: '5px', color: '#4a4a4a' }}>
                    For more information or to request assistance, please contact the Finance Office at{' '}
                    <a href="mailto:finance@college.com" style={{ color: '#1e90ff', textDecoration: 'none' }}>
                        finance@college.com
                    </a>.
                </Typography>
            </Paper>
        </Box>
    );
};

export default FinanceOfficeOverview;
