import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import "./style.css"

import NavHeaderImg from "../../Assets/images/BYBnewtag(white).png"
import navScrollBtn from "../../Assets/images/scroll-svgrepo-com.svg"



export default function NavBar() {
  const [mobileNav, setMobileNav] = useState(false)
  return (
    <>
      <Box className="navBar">
        <Box className="navTopTextBox">
          <img className='navTopImg' src={NavHeaderImg} />
        </Box>
        <Box onClick={() => setMobileNav(!mobileNav)} className="downArrow">
          <img src={navScrollBtn} />
        </Box>

        <Box sx={{ height: mobileNav ? "auto" : "0px" }} className="navItems">
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
            <Typography>Dates</Typography>
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
