import React from 'react';
import "./style.css"
import { Box, Typography } from '@mui/material';

import cardImage1 from "../../../Assets/images/Rectangle 7.png";
import cardImage2 from "../../../Assets/images/Rectangle 7 (1).png";
import cardImage3 from "../../../Assets/images/Rectangle 7 (2).png";


export default function Design() {
  const DesignCard = (img, text, subText) => {
    return (
      <Box className="designCard">
        <Box className="designCardCover">
          <img src={img} />
        </Box>
        <Box className="designCardTextBox">
          <Typography mb={3} className='designCardHeaderText'>{text}</Typography>
          <Typography className='designCardSubText'>{subText}</Typography>
        </Box>
      </Box>
    )
  }

  return (
    <>
      <Box className="designContainer">
        <Box className="designCardBox">
          {DesignCard(cardImage1, "Design the page layout that works for you!", "Design a daily or weekly planner page just for you, with pre-week planning, goal sheets, meal planning, habit tracking, and other customizable inserts!")}
          {DesignCard(cardImage2, "Beautiful and Durable Covers with Designer and Custom Options", "Your cover will be durable, classically gorgeous, and match seamlessly with your life.")}
          {DesignCard(cardImage3, "High quality, artisan paper for a better writing experience", "With a heavier weighted paper than most planners, your pages are beautiful, durable, and better for writing on.")}
        </Box>

        <Box className="planBox">
          <Typography className='planText'>See How it Works! Build Your Own Planner</Typography>
          <Box mt={5} className="planBtn">
            <Typography>Build My Planner</Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}
