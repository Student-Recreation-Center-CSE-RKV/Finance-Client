import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
// import { ReactComponent as SrcLogo } from './src-logo.svg'; // Assuming you have a logo file for the team
import src_logo from '../assets/src_logo.png';
const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#034f84',
                textAlign: 'center',
                padding: '20px',
                width: '100%',
                height: '140px',
                marginTop: 'auto', 
                marginBottom:'auto',// Ensures the footer stays at the bottom of the content
                // boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography variant="body2" sx={{ color: 'white' }}>
                For more information or to request assistance, please contact the Finance Office at{' '}
                <a href="mailto:finance@college.com" style={{ color: '#1e90ff', textDecoration: 'none' }}>
                    finance@college.com
                </a>.
            </Typography>
            <Typography variant="body1" color="textSecondary">
                Made by
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h6" sx={{ marginRight: '0px' }}>
                    TEAM SRC
                </Typography>
                <Box
                    component="img"
                    src={src_logo}
                    alt="SRC Logo"
                    sx={{
                        height: '50px',
                        marginRight: '5px',
                    }}
                />
            </Box>
        </Box>
    );
};

export default Footer;
