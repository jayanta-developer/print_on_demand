import React from 'react';
import { Box, Typography } from '@mui/material';
import "./style.css"

import CardImage1 from "../../../Assets/images/CardImage1.png"
import CardImage2 from "../../../Assets/images/CardImage2.png"
import CardImage3 from "../../../Assets/images/cardImage3.png"


export default function GetStarted() {

  const CoverCard = (img, text) => {
    return (
      <Box className="coverCard">
        <Box className="coverCardImageBox">
          <img src={img} />
        </Box>
        <Box className="coverCardFooterText">
          <Typography>{text}</Typography>
        </Box>
      </Box>
    )
  }

  return (
    <>
      <Box className="getStartedContainer">
        <Box className="getStartedHeader">
          <Typography>Three Ways to Get Started</Typography>
        </Box>
        <Box className="coverCardBox">
          {CoverCard(CardImage1, "Choose Your Cover")}
          {CoverCard(CardImage2, "5-Question")}
          {CoverCard(CardImage3, "Choose & Customize Your Layout")}
        </Box>

      </Box>
    </>
  )
}
