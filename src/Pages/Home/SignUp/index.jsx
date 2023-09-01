import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField } from '@mui/material';
import "./style.css"

import NavHeaderImg from "../../../Assets/images/BYBnewtag blue (3)-no-bottom.png"
import GoogleIcon from "../../../Assets/images/GoogleIcon.svg";
import whiteCross from "../../../Assets/images/whiteCross.svg"
import EmailIcon from "../../../Assets/images/EmailIcon.svg"
import PasswordVisible from "../../../Assets/images/passwordIcon.svg"


export default function SignUp() {
  const navigate = useNavigate();
  const [loginBox, setLoginBox] = useState(true)
  const [signUpBox, setSignUpBox] = useState(false)
  const [passwordV, setPasswordV] = useState(false)


  return (
    <>
      <Box className="signUpContainer">
        <Box className="backDrop"></Box>

        {/* LoginPopUp */}
        <Box sx={{ display: loginBox ? "flex" : "none" }} className="loginBox">
          <img onClick={() => navigate('/')} className='lonIn_crossButton' src={whiteCross} />

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

          <Box mb={1} className="emailInputBox">
            <TextField className='emailInput' placeholder='Email' />
            <img className='emailIcon' src={EmailIcon} />
          </Box>

          <Box className="passwordInputBox">
            <TextField className='passwordInput' type='password' placeholder='password' />
            <img className='passwordIcon' src={PasswordVisible} />

          </Box>


          <Box className="singInButton pointer">
            <Typography>SIGN IN</Typography>
          </Box>


          <Box className="createAndResetTab">
            <Box onClick={() => {
              setLoginBox(false)
              setSignUpBox(true)
            }} className="CandPtab CandPRightBorder pointer">
              <Typography>Create Account</Typography>
            </Box>

            <Box className="CandPtab pointer">
              <Typography>Reset Password</Typography>
            </Box>

          </Box>

        </Box>


        {/* SignUpPopUp */}

        <Box sx={{ display: signUpBox ? "flex" : "none" }} className="SignUpBox">
          <img onClick={() => navigate('/')} className='lonIn_crossButton' src={whiteCross} />

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
            <img className='emailIcon' src={EmailIcon} />
          </Box>

          <Box className="passwordInputBox">
            <TextField className='passwordInput' type={passwordV ? "text" : "password"} placeholder='password' />
            <img onClick={() => setPasswordV(!passwordV)} className='passwordIcon' src={PasswordVisible} />
          </Box>
          <Box className="passwordInputBox">
            <TextField className='passwordInput' type='password' placeholder='Confirm Password' />
            <img className='passwordIcon' src={PasswordVisible} />
          </Box>


          <Box className="singInButton pointer">
            <Typography>CREATE ACCOUNT</Typography>
          </Box>


          <Box className="createAndResetTab">
            <Typography mr={1} className='SignUpBText1'>Already have an account?</Typography>
            <Typography onClick={() => {
              setSignUpBox(false)
              setLoginBox(true)
            }} className='SignUpBText2 pointer'>Sign in</Typography>

          </Box>

        </Box>


      </Box>
    </>
  )
}
