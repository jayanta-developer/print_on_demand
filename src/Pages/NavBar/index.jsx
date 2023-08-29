import React from 'react';
import { Box, Typography } from '@mui/material';
import "./style.css"

import NavHeaderImg from "../../Assets/images/Headerv2.png"



export default function NavBar() {
  return (
    <>
      <Box className="navBar">
        <Box className="navTopTextBox">
          <img className='navTopImg' src={NavHeaderImg} />
        </Box>

        <Box className="navItems">
          <Box className="navItem">
            <Typography>Home</Typography>
          </Box>
          <Box className="navItem">
            <Typography>Cover</Typography>
          </Box>
          <Box className="navItem">
            <Typography>Layout</Typography>
          </Box>
          <Box className="navItem">
            <Typography>Add-ins</Typography>
          </Box>
          <Box className="navItem">
            <Typography>Add-ins</Typography>
          </Box>
          <Box className="navItem">
            <Typography>Review</Typography>
          </Box>
          <Box className="navItem">
            <Typography>Gift Card</Typography>
          </Box>
          <Box className="navItem">
            <Typography>Cart</Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}
