import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./style.css"

import NavHeaderImg from "../../Assets/images/BYBnewtag(white).png"
import navScrollBtn from "../../Assets/images/scroll-svgrepo-com.svg"



export default function NavBar() {
  const navigate = useNavigate();
  const [mobileNav, setMobileNav] = useState(false)

  const location = useLocation();
  const url = location.pathname;
  console.log(url);



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
            <Typography className={url === "/" ? "navFont" : null} onClick={() => navigate("/")}>Home</Typography>
          </Box>
          <Box className="navItem">
            <Typography className={url === "/cover" ? "navFont" : null} onClick={() => navigate("/cover")}>Cover</Typography>
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
