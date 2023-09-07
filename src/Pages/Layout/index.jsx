import React, { useState, useRef } from 'react';
import { Typography, Box, Radio } from '@mui/material';
import "./Daily Single Page/style.css"


//Component 
import NavBar from '../NavBar';
import Footer from '../Footer';
import PriceBox from '../../Components/PriceBox';
// pages
import DailySinglePage from "./Daily Single Page";
import Calender from "./Calendars";

export default function Layout() {
  const [tab, setTab] = useState("DailySinglePage");

  return (
    <>
      <NavBar />
      <Box className="layOutContainer">
        <Box className="coverNav">
          <Box className="CnavItem">
            <Typography className={tab === "WeeklyView" ? "navFont" : null} onClick={() => setTab("WeeklyView")}>Weekly View</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "DailySinglePage" ? "navFont" : null} onClick={() => setTab("DailySinglePage")}>Daily Single Page</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "DailyTwoPage" ? "navFont" : null} onClick={() => setTab("DailyTwoPage")}>Daily - Two Page</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "Calendars" ? "navFont" : null} onClick={() => setTab("Calendars")}>Calendars</Typography>
          </Box>
        </Box>
        {tab === "Calendars" ? <Calender /> : null}
        {tab === "DailySinglePage" ? <DailySinglePage /> : null}
        <PriceBox />
      </Box>
      <Footer />
    </>
  )
}
