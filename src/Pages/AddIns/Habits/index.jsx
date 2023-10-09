import React, { useState } from 'react';
import { Typography, Box, Radio } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';
import "./style.css";

import TemplateImage from "../../../Assets/images/TemplateBook.png"
import CalenderCover1 from "../../../Assets/images/CalenderCover1.png"
import CalenderCover2 from "../../../Assets/images/CalenderCover2.png"
import InsideCoverBinder from "../../../Assets/images/insideCoverBinder.png"


export default function HabitsPage() {
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
      </Box>
    )
  }

  return (
    <>
      <Box className="calenderContainer">
        <Box className="calenderSideMenu">
          <Typography mt={4} className='CSideHeader'>Habits</Typography>

 
          <Box mt={4} className="CalenderRadioBox">
            <Box className="CalRHeader">
              <Typography>Where would you like this add-on?</Typography>
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
                    name='front'
                    value='front'
                    checked={fontBackRadio === 'front'}
                    onChange={handleFontBackRadioChange}
                  />
                </label>
                <Typography>In the front of the planner</Typography>
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
                <Typography>In the back of the planner</Typography>
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
                    name="week"
                    value="week"
                    checked={fontBackRadio === 'week'}
                    onChange={handleFontBackRadioChange}
                  />
                </label>
                <Typography>In-between each week</Typography>
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
                    name="month"
                    value="month"
                    checked={fontBackRadio === 'month'}
                    onChange={handleFontBackRadioChange}
                  />
                </label>
                <Typography>In-between each month</Typography>
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
                    name="quarter"
                    value="quarter"
                    checked={fontBackRadio === 'quarter'}
                    onChange={handleFontBackRadioChange}
                  />
                </label>
                <Typography>At the end of the quarter</Typography>
              </Box>
            </Box>

            <Box className="templateBox">
              <Typography className='templateHeader'>Choose your template</Typography>
              <Box className="templateCardBox">
                {templateCard("0")}
                {templateCard("1")}
                {templateCard("2")}
                {templateCard("3")}
                {templateCard("4")}
                {templateCard("5")}
              </Box>
            </Box>
            <Box className="pageQuantity">
                
            </Box>
          </Box>
        </Box>

        <Box className="calenderCover">
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
