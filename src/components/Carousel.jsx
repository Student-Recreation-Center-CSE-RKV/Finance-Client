import React from "react";
import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import slideImage1 from "../assets/slide1.jpg";
import slideImage2 from "../assets/slide2.png";
import slideImage3 from "../assets/slide3.png";
import slideImage4 from "../assets/slide4.webp";
import "../index.css";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      sx={{
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.8)",
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
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.8)",
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
    width: "100%",
    height: "334px",
    objectFit: "cover",
  };

  return (
    <Box
      sx={{
        position: "relative",
        margin: 0,
        padding: 0,
        width: "100%",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
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
    </Box>
  );
};

export default Carousel;
