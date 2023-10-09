import React, { useState } from 'react';
import "./style.css"
import { Box, Typography, Radio } from '@mui/material';

//images
import CalenderCover1 from "../../../Assets/images/CalenderCover1.png"
import CalenderCover2 from "../../../Assets/images/CalenderCover2.png"
import InsideCoverBinder from "../../../Assets/images/insideCoverBinder.png"
import coverBook from "../../../Assets/images/coverBook.png"

import { ButtonPrimary, ButtonSecondary } from "../../../Components/Buttons"

export default function VisionAndGoalPage() {
  const [weekRadio, setWeekRadio] = useState("")

  const handleWeekRadioChange = (event) => {
    setWeekRadio(event.target.value);
  };

  return (
    <>
      <Box className="calenderContainer">
        <Box className="calenderSideMenu">
          <Typography mt={4}  className='CSideHeader'>Vision And Goal</Typography>


          <Box mb={2} className="calenderRadioBox">
            <Box className="weekBoxHeader"><Typography className='BoxHeaderText'>  Where would you like this add-on?</Typography></Box>
            <Box className="weekRadioBox">
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
                  checked={weekRadio === 'front'}
                  onChange={handleWeekRadioChange}
                />
              </label>
              <Typography>In the front of the planner</Typography>
            </Box>
            <Box className="weekRadioBox">
              <label className='radioLabel' >
                <Radio
                  sx={{
                    color: '#B8845F',
                    '&.Mui-checked': {
                      color: '#B8845F',
                    },
                  }}
                  name='back'
                  value='back'
                  checked={weekRadio === 'back'}
                  onChange={handleWeekRadioChange}
                />
              </label>
              <Typography>In the back of the planner</Typography>
            </Box>
            <Box className="weekRadioBox">
              <label className='radioLabel' >
                <Radio
                  sx={{
                    color: '#B8845F',
                    '&.Mui-checked': {
                      color: '#B8845F',
                    },
                  }}
                  name='week'
                  value='week'
                  checked={weekRadio === 'week'}
                  onChange={handleWeekRadioChange}
                />
              </label>
              <Typography>In-between each week</Typography>
            </Box>
            <Box className="weekRadioBox">
              <label className='radioLabel' >
                <Radio
                  sx={{
                    color: '#B8845F',
                    '&.Mui-checked': {
                      color: '#B8845F',
                    },
                  }}
                  name='month'
                  value='month'
                  checked={weekRadio === 'month'}
                  onChange={handleWeekRadioChange}
                />
              </label>
              <Typography>In-between each month</Typography>
            </Box>
            <Box className="weekRadioBox">
              <label className='radioLabel' >
                <Radio
                  sx={{
                    color: '#B8845F',
                    '&.Mui-checked': {
                      color: '#B8845F',
                    },
                  }}
                  name='quarter'
                  value='quarter'
                  checked={weekRadio === 'quarter'}
                  onChange={handleWeekRadioChange}
                />
              </label>
              <Typography>At the end of the quarter</Typography>
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
          <Box className="calenderBtnBox">
            <ButtonPrimary buttonText="ADD" width="94px" />
            <ButtonSecondary buttonText="REMOVE" width="133px" />
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
