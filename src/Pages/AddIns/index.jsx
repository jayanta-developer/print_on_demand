import React, { useState, useRef } from 'react';
import { Typography, Box, Radio } from '@mui/material';
import "./style.css";

//Component 
import NavBar from '../NavBar';
import Footer from '../Footer';
import PriceBox from '../../Components/PriceBox';

// pages
import Reflection from "./Reflection";
import Habits from "./Habits"
import FitnessAndFood from "./FitnessAndFood"
import Work from "./Work"
import Family from "./Family"
import VisionAndGoal from "./VisionAndGoals"
import Others from "./Others"


export default function Addins() {
  const [tab, setTab] = useState("Reflection");

  return (
    <>
      <NavBar />
      <Box className="layOutContainer">
        <Box className="coverNav">
          <Box className="CnavItem">
            <Typography className={tab === "Reflection" ? "navFont" : null} onClick={() => setTab("Reflection")}>Reflection</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "Habits" ? "navFont" : null} onClick={() => setTab("Habits")}>Habits</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "FitnessAndFood" ? "navFont" : null} onClick={() => setTab("FitnessAndFood")}>Fitness and Food</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "Work" ? "navFont" : null} onClick={() => setTab("Work")}>Work</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "Family" ? "navFont" : null} onClick={() => setTab("Family")}>Family</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "VisionAndGoal" ? "navFont" : null} onClick={() => setTab("VisionAndGoal")}>Vision and Goals</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "Others" ? "navFont" : null} onClick={() => setTab("Others")}>Other</Typography>
          </Box>
        </Box>
        {tab === "Reflection" ? <Reflection /> : null}
        {tab === "Habits" ? <Habits /> : null}
        {tab === "FitnessAndFood" ? <FitnessAndFood /> : null}
        {tab === "Work" ? <Work /> : null}
        {tab === "Family" ? <Family /> : null}
        {tab === "VisionAndGoal" ? <VisionAndGoal /> : null}
        {tab === "Others" ? <Others /> : null}
        <PriceBox Xval="380" Yval="250" />
      </Box>
      <Footer />
    </>
  )
}
