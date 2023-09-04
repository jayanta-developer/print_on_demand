import React, { useState, useRef } from 'react';
import { Typography, Box } from '@mui/material';
import "./style.css";

import DownArrow from "../../Assets/images/DownArrow.svg"

//Component 
import NavBar from '../NavBar';
import Footer from '../Footer';
import PriceBox from '../../Components/PriceBox';

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

        <Box className="layOutContainerBox">

          <Box sx={{ display: tab === "DailySinglePage" ? "flex" : "none" }} className="DailySinglePage">

            <Box className="sideCustomBox">

              <Box className="timeBox">
                <Box className="timeBoxItem">
                  <Box className="timeSBox"></Box>
                  <Typography>Hourly times</Typography>
                </Box>
                <Box className="timeBoxItem">
                  <Box className="timeSBox"></Box>
                  <Typography>No times</Typography>
                </Box>
                <Box className="timeBoxItem">
                  <Box className="timeSBox"></Box>
                  <Typography>Blocks for each day</Typography>
                </Box>
              </Box>

              <Box className="customOption">
                <Typography>Custom Options</Typography>
                <img className='downArrow' src={DownArrow} />
              </Box>

            </Box>




            <Box className="customPreviewBox"></Box>

          </Box>


        </Box>
        {<PriceBox />}
      </Box>
      <Footer />
    </>
  )
}
