import React, { useState } from 'react';
import "./style.css"
import { Box, Typography } from '@mui/material';

//images
import CalenderCover1 from "../../../Assets/images/CalenderCover1.png"
import CalenderCover2 from "../../../Assets/images/CalenderCover2.png"
import InsideCoverBinder from "../../../Assets/images/insideCoverBinder.png"
import coverBook from "../../../Assets/images/coverBook.png"


export default function ReflectionPage() {
  const [tab, setTab] = useState(true)
  const [counts, setCounts] = useState([0]);
  const [active, setActive] = useState(false)


  const incrementCount = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const decrementCount = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) {
      newCounts[index]--;
      setCounts(newCounts);
    }
  };

  const addCounter = () => {
    setCounts([...counts, 0]);
  };


  return (
    <>
      <Box className="calenderContainer">
        <Box className="calenderSideMenu">
          <Typography mt={4} className='CSideHeader'>What are reflection pages?</Typography>

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
              <Box className="temCardTopBox">
                <Box className="week_Box">
                  <svg style={{ display: active ? "block" : "none" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 10L12.5 14.5L17 10M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" stroke="#BC9448" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  <Typography sx={{ display: active ? "block" : "none" }} ml={2}>Weekly</Typography>
                </Box>
                {
                  active ?
                    <svg onClick={() => setActive(!active)} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C4.93281 0 0 4.93281 0 11C0 17.0672 4.93281 22 11 22C17.0672 22 22 17.0672 22 11C22 4.93281 17.0672 0 11 0Z" fill="#BC9448" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3193 7.29189C16.5857 7.5583 16.5857 7.99658 16.3193 8.26299L9.87402 14.7083C9.74082 14.8415 9.56465 14.9103 9.38848 14.9103C9.2123 14.9103 9.03613 14.8415 8.90293 14.7083L5.68027 11.4856C5.41387 11.2192 5.41387 10.781 5.68027 10.5146C5.94668 10.2481 6.38496 10.2481 6.65137 10.5146L9.38848 13.2517L15.3482 7.29189C15.6146 7.02119 16.0529 7.02119 16.3193 7.29189Z" fill="white" />
                    </svg> :
                    <svg onClick={() => setActive(!active)} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="10" stroke="#BC9448" stroke-width="2" />
                      <path d="M6 10H16V12H6V10Z" fill="#BC9448" />
                      <path d="M10 16V6H12V16H10Z" fill="#BC9448" />
                    </svg>
                }

              </Box>
              <img src={coverBook} />
              <Typography className='temCardBottomText'>Year At A Glance 1</Typography>
              <Box sx={{ display: active ? "flex" : "none" }} className="temCardBtnBox">
                <svg onClick={() => decrementCount(0)} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10" stroke="#BC9448" stroke-width="2" />
                  <rect x="6" y="10" width="10" height="2" fill="#BC9448" />
                </svg>
                <Typography className='temCountText'>{counts}</Typography>
                <svg onClick={() => incrementCount(0)} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10" stroke="#BC9448" stroke-width="2" />
                  <path d="M6 10H16V12H6V10Z" fill="#BC9448" />
                  <path d="M10 16V6H12V16H10Z" fill="#BC9448" />
                </svg>
              </Box>
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
            <Typography mr={1} className='ChooseCoverHeaderText step3Text'>Step 5:</Typography>
            <Typography className='ChooseCoverSubText step3SpanText'>Select add-ins</Typography>
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
