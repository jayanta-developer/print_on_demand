import React from 'react';
import { Box, Typography } from '@mui/material';

//Components
import NavBar from '../NavBar';
import Footer from '../Footer';
import AutoImageSlider from "../../Components/ImageSlider"

export default function Home() {
  return (
    <>
      <NavBar />
      <Box className="homeContainer">
        <Box className="imageSliderBox">
          <AutoImageSlider />
        </Box>

      </Box>
      <Footer />
    </>
  )
}
