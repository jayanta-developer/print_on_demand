import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import "./style.css"

import NavHeaderImg from "../../../Assets/images/BYBnewtag blue (3)-no-bottom.png"
import GoogleIcon from "../../../Assets/images/GoogleIcon.svg";
import whiteCross from "../../../Assets/images/whiteCross.svg"


export default function SignUp() {
  return (
    <>
      <Box className="signUpContainer">

        <Box className="loginBox">
          <img className='lonIn_crossButton' src={whiteCross} />

          <Box className="companyBanner">
            <img src={NavHeaderImg} />
          </Box>

          <Box className="googleSignUp pointer">
            <img className='googleIcon' src={GoogleIcon} />
            <Typography ml={1.5}>CONTINUE WITH GOOGLE</Typography>
          </Box>

          <Box className="divider">
            <hr />
            <Typography>OR</Typography>
          </Box>

          <Box className="emailInputBox">
            <TextField className='emailInput' placeholder='Email' />
          </Box>

          <Box className="passwordInputBox">
            <TextField className='passwordInput' type='password' placeholder='password' />
          </Box>


          <Box className="singInButton pointer">
            <Typography>SIGN IN</Typography>
          </Box>


          <Box className="createAndResetTab">
            <Box className="CandPtab CandPRightBorder pointer">
              <Typography>Create Account</Typography>
            </Box>

            <Box className="CandPtab pointer">
              <Typography>Reset Password</Typography>
            </Box>

          </Box>

        </Box>

      </Box>
    </>
  )
}
