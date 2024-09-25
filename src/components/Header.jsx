import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Import the logo from the assets folder
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#003366', // Dark blue color
            }}
        >
            <Toolbar>
                {/* Logo */}
                <Box
                    component="img"
                    src={logo}
                    alt="RGUKT Logo"
                    sx={{
                        height: '50px', // Adjust the height of the logo
                        marginRight: '20px',
                    }}
                />

                {/* University Name */}
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 'bold',
                    }}
                >
                    Rajiv Gandhi University of Knowledge Technologies
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
