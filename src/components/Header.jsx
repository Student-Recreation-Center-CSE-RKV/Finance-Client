
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        // <AppBar position="static" sx={{ backgroundColor: '#003366', width: '100%', maxWidth: '710px' }}>
        <AppBar position="static" sx={{
            width: '100%', maxWidth: '710px', backgroundColor: 'transparent', boxShadow: 'none',
        }}>
            <Toolbar>
                <Box
                    component="img"
                    src={logo}
                    alt="RGUKT Logo"
                    sx={{
                        height: '50px',
                        height: '50px',
                        marginRight: '20px',
                    }}
                />
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 'bold',
                        color: 'white',
                        // color:'black',
                    }}
                >
                    Rajiv Gandhi University of Knowledge Technologies, RKValley
                    
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
