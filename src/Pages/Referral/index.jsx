import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import "./style.css"

import ReferCover from "../../Assets/images/refferCover.png";

//component
import NavBar from '../NavBar';
import Footer from '../Footer';
import { ButtonPrimary } from "../../Components/Buttons"

export default function Referral() {
  return (
    <>
      <NavBar />
      <Box className="referralContainer">
        <Box className="referralCoverBox">

          <Box className="referInfoBox">
            <Typography className='referHeaderText'>SHARE THE JOY</Typography>
            <Typography className='referMainHeaderText'>Refer a Friend, Receive $20.</Typography>
            <Typography className='referSunHeaderText'>Your friends enjoy $20 off their first purchase,and you’ll receive $20 once they check out!</Typography>
            <Typography className='referPText'>Enter your email to start sharing with friends:</Typography>

            <TextField className="referEmailField" placeholder='EMAIL ADDRESS'></TextField>
            <Box className="referCheckBox">
              <input type="checkbox" />
              <Typography ml={2}>Sign up for Artifact Uprising emails</Typography>
            </Box>
            <ButtonPrimary buttonText="SHARE THE JOY" width="233px" />

            <Box className="referBottomBox">
              <Typography className='referLastText'>Terms</Typography>
              <Typography className='referLastText'>friendbuy</Typography>
            </Box>


          </Box>

        </Box>


      </Box>
      <Footer />

    </>
  )
}
