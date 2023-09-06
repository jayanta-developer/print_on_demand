import React, { useState } from 'react';
import { Typography, Box, Radio } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';
import "./style.css";

import TemplateImage from "../../../Assets/images/TemplateImage.png"
import CalenderCover1 from "../../../Assets/images/CalenderCover1.png"
import CalenderCover2 from "../../../Assets/images/CalenderCover2.png"
import InsideCoverBinder from "../../../Assets/images/insideCoverBinder.png"


export default function CalenderPage() {
  const [tab, setTab] = useState(true)
  const [fontBackRadio, setFontBackRadio] = useState("");
  const [templateCardRadio, setTemplateCardRadio] = useState("");
  const [pageCount, setPageCount] = useState(0)

  const handleFontBackRadioChange = (event) => {
    setFontBackRadio(event.target.value);
  };

  const handelCardRadio = (e) => {
    setTemplateCardRadio(e.target.value);
  }


  const handelCountDecrease = () => {
    if (pageCount >= 1) {
      setPageCount(pageCount - 1)
    }
  }
  const handelCountIncrease = () => {
    setPageCount(pageCount + 1)
  }



  const templateCard = (index) => {
    console.log(index);
    return (
      <Box className="templateCard">
        <Radio
          sx={{
            color: '#B8845F',
            '&.Mui-checked': {
              color: '#B8845F',
            },
          }}
          className='templateCardRadio'
          name={index}
          value={index}
          checked={templateCardRadio === index}
          onChange={handelCardRadio}
        />
        <Box className="templateCardImageBox">
          <img src={TemplateImage} />
        </Box>
        <Typography>Annual 1</Typography>
      </Box>
    )
  }

  return (
    <>
      <Box className="calenderContainer">
        <Box className="calenderSideMenu">
          <Typography className='CSideHeader'>Monthly and Annual Calendars</Typography>
          <Box className="yearAndMonthTab">
            <Box onClick={() => setTab(true)} className={tab ? "activeTab yearTab" : "yearTab"}>
              <Typography sx={{ color: tab ? "black" : "#9e9e9e" }}>Year-at-a-Glance </Typography>
            </Box>
            <Box onClick={() => setTab(false)} className={tab ? "monthlyTab" : "activeTab monthlyTab"}>
              <Typography sx={{ color: tab ? "#9e9e9e" : "black" }}>Monthly Calendars</Typography>
            </Box>
          </Box>
          <Box className="CalenderRadioBox">
            <Box className="CalRHeader">
              <Typography>Where would you like your year-at-a-glance calendar</Typography>
            </Box>
            <Box className="fontBackRadioBox">
              <Box className="setTimeInRadioBox">
                <label className='radioLabel' >
                  <Radio
                    sx={{
                      color: '#B8845F',
                      '&.Mui-checked': {
                        color: '#B8845F',
                      },
                    }}
                    name='font'
                    value='font'
                    checked={fontBackRadio === 'font'}
                    onChange={handleFontBackRadioChange}
                  />
                </label>
                <Typography>The front of my planner</Typography>
              </Box>
              <Box className="setTimeInRadioBox">
                <label className='radioLabel'>
                  <Radio
                    sx={{
                      color: '#B8845F',
                      '&.Mui-checked': {
                        color: '#B8845F',
                      },
                    }}
                    name="Back"
                    value="Back"
                    checked={fontBackRadio === 'Back'}
                    onChange={handleFontBackRadioChange}
                  />
                </label>
                <Typography>The back of my planner</Typography>
              </Box>
            </Box>

            <Box className="templateBox">
              <Typography className='templateHeader'>Choose your template</Typography>
              <Box className="templateCardBox">
                {templateCard("0")}
                {templateCard("1")}
                {templateCard("2")}
                {templateCard("3")}
              </Box>
            </Box>
            <Box className="pageQuantity">
              <Typography className='pageCountHeader'>How many of these pages would you like?</Typography>
              <Box className="pageCountBox">
                <Typography>Quantity</Typography>
                <HorizontalRuleIcon onClick={handelCountDecrease} className='pointer' />
                <h3>{pageCount}</h3>
                <AddIcon onClick={handelCountIncrease} className='pointer' />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="calenderCover">
          <Box className="ChooseCoverHeader">
            <Typography mr={1} className='ChooseCoverHeaderText step3Text'>Step 4:
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
