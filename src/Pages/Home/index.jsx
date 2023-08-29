import React from 'react';
import { Box } from '@mui/material';
import "./style.css"

//Components
import NavBar from '../NavBar';
import Footer from '../Footer';
import AutoImageSlider from "../../Components/ImageSlider"
import GetStarted from './GetStarted';
import Stories from './Stories';
import Customize from './Customize';
import Design from "./Design"

export default function Home() {
  return (
    <>
      <NavBar />
      <Box className="homeContainer">
        <Box className="imageSliderBox">
          <AutoImageSlider />
        </Box>
        <GetStarted />
        <Stories />
        <Customize />
        <Design />
      </Box>
      <Footer />
    </>
  )
}
