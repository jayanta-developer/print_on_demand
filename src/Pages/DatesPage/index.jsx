import React from 'react';
import { Box } from '@mui/material';
import "./style.css";


//Components
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Dates() {
  return (
    <>
      <NavBar />
      <Box className="datesContainer">
        <Box className="datesSideMenu">
          <Box className="datesDropDownBox">
            <Box className="StartEndDrop datesDrop">

            </Box>

            <Box className="presetsDrop datesDrop"></Box>

            <Box className="updateDrop datesDrop"></Box>

          </Box>

        </Box>

        <Box className="datesCover"></Box>
      </Box>
      <Footer />
    </>
  )
}
