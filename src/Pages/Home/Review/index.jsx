import React, { useState } from 'react'
import { Typography, Box, Slider } from '@mui/material';
import { Link } from 'react-router-dom';
// import { Slider } from '@mui/material-next';
import "./style.css";


import coverPhoto from "../../../Assets/images/CoverPhoto.png"
import coverPhoto1 from "../../../Assets/images/CalenderCover1.png";
import coverPhoto2 from "../../../Assets/images/CalenderCover2.png";
import coverPhoto3 from "../../../Assets/images/DailySinglePage1 - Copy.png";
import coverPhoto4 from "../../../Assets/images/DailySinglePage2 - Copy.png";

// Components
import NavBar from '../../NavBar';
import Footer from '../../Footer';
import PriceBox from '../../../Components/PriceBox';


export default function Review() {
  const [isChecked, setIsChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checked state
  };

  const handelImages = () => {
    let image;
    switch (sliderValue) {
      default:
        image = coverPhoto1;
        break;
      case 0:
        image = coverPhoto;
        break;
      case 1:
        image = coverPhoto2;
        break;
      case 2:
        image = coverPhoto3;
        break;
      case 3:
        image = coverPhoto4;
        break;
    }
    return (
      <img src={image} />
    )
  }


  return (
    <>
      <NavBar />
      <Box className="ReviewContainer">
        <Box className="reviewSideMenu">
          <Box className="reviewHeaderCheck">
            <input
              onClick={handleCheckboxChange}
              checked={isChecked}
              type="checkbox" />
            <Typography mb={2} ml={2} className='reviewHeaderText'>BY CHECKING THIS BOX YOU APPROVE THAT YOUR ORDER WILL BE PRINTED AS IT IS SHOWN IN THE PREVIEW </Typography>
          </Box>
          <Typography ml={4.8} mb={2}>Please review all pages to ensure:</Typography>
          <Box ml={4.8}>
            <ul>
              <li>The start date and end date are accurate.</li>
              <li>Your events are imported correctly (day and time).</li>
              <li>You’re ready for your planner to be printed and shipped. Your order is immediately sent to print upon purchase, so we can’t modify or cancel it once it’s submitted. If you are experiencing issues with the preview, please email </li>
            </ul>
            <Link><Typography>support@becomingyourbest.com</Typography></Link>
          </Box>
        </Box>

        <Box className="reviewCover">
          <Box className="ChooseCover_Header">
            <Typography mr={1} className='ChooseCoverHeaderText'>Step 6:</Typography>
            <Typography className='ChooseCoverSubText'>Review</Typography>
          </Box>

          <Box className="ReviewCoverBox">
            {handelImages()}
          </Box>
          <Box className="slideBox">
            <Slider
              disabled={isChecked ? false : true}
              marks
              max={10}
              min={0}
              size="medium"
              valueLabelDisplay="auto"
              value={sliderValue}
              onChange={handleSliderChange}
            />
            <Typography>Showing Cover{sliderValue}</Typography>
          </Box>
        </Box>
        <PriceBox />
      </Box>
      <Footer />
    </>
  )
}
