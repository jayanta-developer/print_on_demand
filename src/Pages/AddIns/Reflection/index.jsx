import React, { useState } from 'react';
import "./style.css"
import { Box, Typography } from '@mui/material';

//images
import CalenderCover1 from "../../../Assets/images/CalenderCover1.png"
import CalenderCover2 from "../../../Assets/images/CalenderCover2.png"
import InsideCoverBinder from "../../../Assets/images/insideCoverBinder.png"
import coverBook from "../../../Assets/images/coverBook.png"


export default function Reflection() {
  const [tab, setTab] = useState(true)

  return (
    <>
      <Box className="reflectionContainer">
        <Box className="reflectionSideMenu">
          <Typography className='reflHeader'>What are reflection pages?</Typography>
          <Typography className='reflSubHeader'>*So if your current planner ends in June of 2024, then this would add monthly calendars for July 2024 to January 2024, or July 2024 to July 2025 at the end of your planner.
          </Typography>

          <Typography className='reflTabHeader'>
            Would you like to include monthly or weekly reflection pages?
          </Typography>

          <Box className="yearAndMonthTab">
            <Box onClick={() => setTab(true)} className={tab ? "activeTab yearTab" : "yearTab"}>
              <Typography sx={{ color: tab ? "black" : "#9e9e9e" }}>Weekly</Typography>
            </Box>
            <Box onClick={() => setTab(false)} className={tab ? "monthlyTab" : "activeTab monthlyTab"}>
              <Typography sx={{ color: tab ? "#9e9e9e" : "black" }}>Monthly</Typography>
            </Box>
          </Box>
          <Typography className='reflTemplateHeader'>Choose your template </Typography>
          <Box className="reflTemplateBox">
            <Box className="templateItem">
              <img src={coverBook} />
            </Box>
            <Box className="templateItem">
              <img src={coverBook} />
            </Box>
            <Box className="templateItem">
              <img src={coverBook} />
            </Box>
            <Box className="templateItem">
              <img src={coverBook} />
            </Box>


          </Box>

        </Box>



        <Box className="reflectionCover">
          <Box className="ChooseCoverHeader">
            <Typography mr={1} className='ChooseCoverHeaderText step3Text'>Step 5:
              <span className='ChooseCoverSubText step3SpanText'>Select add-ins</span>
            </Typography>
          </Box>

          <Box mt={3} className="step4Container">
            <Box className="st4CoverBox">
              <Box mr={1} className="st4page">
                <img src={CalenderCover1} />
              </Box>
              <Box ml={1} className="st4page">
                <img className='insideCover_binder' src={InsideCoverBinder} />
                <img src={CalenderCover2} />
              </Box>
            </Box>
          </Box>
        </Box>

      </Box>
    </>
  )
}
