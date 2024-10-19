import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import slideImage1 from '../assets/slide1.jpg';
import slideImage2 from '../assets/slide2.png';
import slideImage3 from '../assets/slide3.png';
import slideImage4 from '../assets/slide4.webp';
import '../index.css';

// Notification Data
const notifications = [
    {
        id: 1,
        title: "System Update",
        message: "A new system update is available. Please update your device.",
    },
    {
        id: 2,
        title: "New Message",
        message: "You have received a new message from John.",
    },
    {
        id: 3,
        title: "Reminder",
        message: "Don't forget the team meeting at 3 PM today.",
    },
];

// Custom Arrows (without text)
const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <IconButton
            sx={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                },
            }}
            onClick={onClick}
        >
            &lt;
        </IconButton>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <IconButton
            sx={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                },
            }}
            onClick={onClick}
        >
            &gt;
        </IconButton>
    );
};

// Carousel Component
const Carousel = () => {
    const [visibleNotifications, setVisibleNotifications] = useState(notifications);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        fade: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const slideStyle = {
        width: '100%',
        height: '334px',
        objectFit: 'cover',
    };

    const notificationStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        zIndex: 10,
        width: '300px',
        backgroundColor: '#f0f8ff',
        borderRadius: '8px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };


    const closeNotification = (id) => {
        setVisibleNotifications(visibleNotifications.filter((notification) => notification.id !== id));
    };

    return (
        <Box sx={{ position: 'relative', margin: 0, padding: 0, width: '100%', overflow: 'hidden', backgroundColor: 'black' }}>
            <Slider {...settings}>
                <Box>
                    <img src={slideImage1} alt="Slide 1" style={slideStyle} />
                </Box>
                <Box>
                    <img src={slideImage2} alt="Slide 2" style={slideStyle} />
                </Box>
                <Box>
                    <img src={slideImage3} alt="Slide 3" style={slideStyle} />
                </Box>
                <Box>
                    <img src={slideImage4} alt="Slide 4" style={slideStyle} />
                </Box>
            </Slider>
            {visibleNotifications.map((notification) => (
                <Paper key={notification.id} elevation={4} sx={notificationStyle}>
                    <Typography variant="h6" sx={{ color: '#1e90ff', fontWeight: 'bold' }}>
                        {notification.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333', marginBottom: '10px' }}>
                        {notification.message}
                    </Typography>
                    <IconButton
                        aria-label="close"
                        size="small"
                        onClick={() => closeNotification(notification.id)}
                        sx={{ alignSelf: 'flex-end', marginTop: '-15px' }}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Paper>
            ))}
        </Box>
    );
};

export default Carousel;
