import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Carousel from '../components/Carousel';
import Header from "../components/Header";
import Sections from "../components/Sections";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { styled, Box } from '@mui/material';
import { CssBaseline } from '@mui/material';

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#f0f4f8', // Light background color
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));
export default function Home() {




  return (
    <div>
      <CssBaseline />
      {/* <Header /> */}
      <Navbar />
      <Carousel />
      <Sections />
      <Footer />
    </div>
  );
}
