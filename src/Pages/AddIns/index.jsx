import React, { useState, useRef } from 'react';
import { Typography, Box, Radio } from '@mui/material';
import "./style.css";

//Component 
import NavBar from '../NavBar';
import Footer from '../Footer';
import PriceBox from '../../Components/PriceBox';

// pages
import Reflection from "./Reflection";
import VisionAndGoal from "./VisionAndGoals"


export default function Layout() {
  const [tab, setTab] = useState("Calendar");

  return (
    <>
      <NavBar />
      <Box className="layOutContainer">
        <Box className="coverNav">
          <Box className="CnavItem">
            <Typography className={tab === "Calendar" ? "navFont" : null} onClick={() => setTab("Calendar")}>Calendar</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "VisionAndGoal" ? "navFont" : null} onClick={() => setTab("VisionAndGoal")}>Vision and Goals</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "Habits" ? "navFont" : null} onClick={() => setTab("Habits")}>Habits</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "FitnessandFood" ? "navFont" : null} onClick={() => setTab("FitnessandFood")}>Fitness and Food</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "Projects" ? "navFont" : null} onClick={() => setTab("Projects")}>Projects</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "Family" ? "navFont" : null} onClick={() => setTab("Family")}>Family</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "Reflection" ? "navFont" : null} onClick={() => setTab("Reflection")}>Reflection</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "Other" ? "navFont" : null} onClick={() => setTab("Other")}>Other</Typography>
          </Box>
        </Box>
        {tab === "Reflection" ? <Reflection /> : null}
        {tab === "VisionAndGoal" ? <VisionAndGoal /> : null}
        <PriceBox Xval="380" Yval="250" />
      </Box>
      <Footer />
    </>
  )
}
