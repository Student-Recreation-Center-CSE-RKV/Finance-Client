import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
// import { ReactComponent as SrcLogo } from './src-logo.svg'; // Assuming you have a logo file for the team
import logo from '../assets/logo.png';
const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                textAlign: 'center',
                padding: '20px',
                width: '100%',
                marginTop: 'auto', // Ensures the footer stays at the bottom of the content
                boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography variant="body1" color="textSecondary">
                Made by
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h6" sx={{ marginRight: '10px' }}>
                    TEAM SRC
                </Typography>
                {/* Add your logo here */}
                {/* <IconButton>
                    <SrcLogo width="30px" height="30px" />
                </IconButton> */}
                <Box
                    component="img"
                    src={logo}
                    alt="RGUKT Logo"
                    sx={{
                        height: '50px',
                        marginRight: '20px',
                    }}
                />
            </Box>
        </Box>
    );
};

export default Footer;
