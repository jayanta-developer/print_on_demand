import React from 'react'
import { Box, Typography } from '@mui/material';
import "./style.css"

import cardIcon1 from "../../../Assets/images/event.svg"
import cardIcon2 from "../../../Assets/images/trending_up.svg"
import cardIcon3 from "../../../Assets/images/emoji_events.svg"
import cardIcon4 from "../../../Assets/images/Group.svg"
import cardIcon5 from "../../../Assets/images/grade.svg"
import summeryCover from "../../../Assets/images/home_hero-background-2-0553526c902680165a963148e1d65aa6c3aa17b5fce77781fad94bd85309dc94 1.png"


export default function Customize() {
  const CustomizeCard = (img, text) => {
    return (
      <Box className="customizeCard">
        <Box mb={1.5} className="customizeCardIconBox">
          <img src={img} />
        </Box>
        <Box className="customizeCardText">
          <Typography>{text}</Typography>
        </Box>

      </Box>
    )
  }

  return (
    <>
      <Box className="customizeContainer">
        <Box mb={10} className="customizeHeader">
          <Typography>What can you customize?</Typography>
        </Box>
        <Box className="customizeCardBox">
          {CustomizeCard(cardIcon1, "Schedules and Calendars")}
          {CustomizeCard(cardIcon2, "Productivity Tools (Easily Pre-Week Plan)")}
          {CustomizeCard(cardIcon3, "Vision, Goals, Habits, and Ritual Trackers")}
          {CustomizeCard(cardIcon4, "Fitness, Health, Meal Planning, Reflection, and Gratitude Resources")}
          {CustomizeCard(cardIcon5, "And other add-ons (Book Lists, Traveling Plans, School/Sports Planner, Notes, etc.)")}
        </Box>
        <Box className="customizeSummeryBox">
          <Typography>… All designed by you, how you like them, just for you. This will<br /> be the last planner you ever need.</Typography>
        </Box>
      </Box>
    </>
  )
}
