import React from 'react';
import { Box, Typography } from '@mui/material';
import "./style.css"

import cardImage1 from "../../../Assets/images/Rectangle 8.png"
import leftArrow from "../../../Assets/images/chevron-left.svg"
import rightArrow from "../../../Assets/images/chevron-right.svg"
import userImage1 from "../../../Assets/images/Picture.svg"


export default function Stories() {
  return (
    <>
      <Box className="storiesContainer">
        <Box className="storiesHeader">
          <Typography>Stories</Typography>
        </Box>
        <Box className="storiesBox">

          <Box className="storiesCard">
            <Box className="coverBox">
              <img src={cardImage1} />
            </Box>
            <Box className="storiesTextBox">
              <Box className="comaIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="68" viewBox="0 0 80 68" fill="none">
                  <g opacity="0.1" clip-path="url(#clip0_2983_4707)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.350845 57.3796C12.2805 51.4794 18.2452 44.5467 18.2452 36.5813C13.1605 35.9913 8.95581 33.9017 5.63116 30.3124C2.3065 26.723 0.644196 22.5684 0.644196 17.8482C0.644196 12.833 2.25761 8.6045 5.48448 5.16269C8.71136 1.72088 12.7693 0 17.6585 0C23.1344 0 27.8769 2.23714 31.886 6.7115C35.8952 11.1859 37.8997 16.6189 37.8997 23.0108C37.8997 42.1866 27.2414 57.1829 5.92451 68L0.350845 57.3796ZM42.4511 57.3796C54.4785 51.4794 60.4922 44.5467 60.4922 36.5813C55.3096 35.9913 51.0561 33.9017 47.7314 30.3124C44.4068 26.723 42.7445 22.5684 42.7445 17.8482C42.7445 12.833 44.3823 8.6045 47.6581 5.16269C50.9339 1.72088 55.0163 0 59.9055 0C65.3814 0 70.0994 2.23714 74.0596 6.7115C78.0199 11.1859 80 16.6189 80 23.0108C80 42.1866 69.3906 57.1829 48.1714 68L42.4511 57.3796Z" fill="#0B1E56" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2983_4707">
                      <rect width="80" height="68" fill="white" transform="matrix(-1 0 0 -1 80 68)" />
                    </clipPath>
                  </defs>
                </svg>
              </Box>


              <Box className="userBox">
                <Box mb={2} className="userInfoBox">
                  <Box mr={1.5} className="userImage">
                    <img src={userImage1} />
                  </Box>
                  <Box className="userTitle">
                    <Typography className='userName'>NATALIE YOUNG</Typography>
                    <Typography className='userLink'>@natalieyoungblog</Typography>
                  </Box>
                </Box>
                <Box className="userTextBox">
                  <Typography>My BYB planner organizes my entire life from meal planning, to social media posts, health and fitness goals, and homeschool lesson plans. And the best part? I was able to fully design it online myself, from the cover to every single page throughout.</Typography>
                </Box>
              </Box>



              <Box className="navigateBtnBox">
                <Box className="leftArrow pointer">
                  <img src={leftArrow} />
                </Box>
                <Box ml={1} className="rightArrow pointer">
                  <img src={rightArrow} />
                </Box>

              </Box>
            </Box>
          </Box>

        </Box>

      </Box>
    </>
  )
}
