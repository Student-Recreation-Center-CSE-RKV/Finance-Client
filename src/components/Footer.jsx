import React from 'react';
import { Box, Typography } from '@mui/material';
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
                marginBottom: 'auto', // Ensures the footer stays at the bottom of the content
            }}
        >
            <Typography variant="body2" sx={{ color: 'white' , marginBottom:'10px'}}>
                For more information or to request assistance, please contact the Finance Office at{' '}
                <a href="mailto:finance@college.com" style={{ color: '#1e90ff', textDecoration: 'none' }}>
                    finance@college.com
                </a>.
            </Typography>
            
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Typography variant="body1" color="textSecondary" sx={{marginBottom:'0px'}}>
                    Made by
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" sx={{marginTop:'0px'}}>
                    <Typography variant="h6" sx={{ marginRight: '5px' }}>
                        TEAM SRC
                    </Typography>
                    <Box
                        component="img"
                        src={src_logo}
                        alt="SRC Logo"
                        sx={{
                            height: '50px',
                            marginRight: '0px',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
