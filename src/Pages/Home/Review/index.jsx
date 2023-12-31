import React, { useState, useEffect, useRef } from 'react'
import { Typography, Box, Slider } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { Slider } from '@mui/material-next';
import "./style.css";

import rightArrow from "../../../Assets/images/rightArrow.png"
import leftArrow from "../../../Assets/images/leftArrow.png"

// Flipper images
import coverPhoto from "../../../Assets/images/Pages/CoverPhoto1.png";
import coverPhoto1 from "../../../Assets/images/CalenderCover1.png";
import coverPhoto2 from "../../../Assets/images/CalenderCover2.png";
import coverPhoto3 from "../../../Assets/images/DailySinglePage1 - Copy.png";
import coverPhoto4 from "../../../Assets/images/DailySinglePage2 - Copy.png";
import coverPhoto5 from "../../../Assets/images/Pages/10-160621063452-thumbnail.jpg";
import coverPhoto6 from "../../../Assets/images/Pages/2ed4a71e1fee3d7805cccdba970e9806--commodore-amiga-a-pen.jpg";
import coverPhoto7 from "../../../Assets/images/Pages/2ed4a71e1fee3d7805cccdba970e9806.jpg";
import coverPhoto8 from "../../../Assets/images/Pages/The Strange Visitor by Shreeya 1 - edited.webp";
import coverPhoto9 from "../../../Assets/images/Pages/highschool-essay.gif";
import coverPhoto10 from "../../../Assets/images/Pages/largepreview.png";
import coverPhoto11 from "../../../Assets/images/Pages/p01725105109-160701033539-thumbnail.jpg";
import coverPhoto12 from "../../../Assets/images/Pages/CoverPhoto2.png";
import coverPhoto13 from "../../../Assets/images/Pages/largepreview - Copy.png";




// Components
import NavBar from '../../NavBar';
import Footer from '../../Footer';
import PriceBox from '../../../Components/PriceBox';
import BookFlipper from "../../../Components/PageFlip"
import { ButtonPrimary } from "../../../Components/Buttons"


export default function Review() {
  const flipBookRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [fullView, setFullView] = useState(false);
  const [prevState, setPrevState] = useState(0)


  let currentPage; const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    detectStateChange(newValue)
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  const goToPreviousPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
    setSliderValue((prevValue) => prevValue - 1);
  };

  const goToNextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
    setSliderValue((prevValue) => prevValue + 1);
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


  let Xval;
  let Yval;
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 1000px)').matches) {
        Xval = '480'
        Yval = '280'
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        Xval = '480'
        Yval = '280'
      } else {
        Xval = '480'
        Yval = '280'
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [Xval, Yval]);

  //Flipper images
  const images = [
    coverPhoto13,
    coverPhoto,
    coverPhoto10,
    coverPhoto9,
    coverPhoto8,
    coverPhoto7,
    coverPhoto6,
    coverPhoto5,
    coverPhoto4,
    coverPhoto3,
    coverPhoto2,
    coverPhoto1,
    coverPhoto11,
    coverPhoto2,
    coverPhoto12
  ]

  function detectStateChange(newState) {
    if (newState > prevState) {
      console.log('increased' + prevState + ' to ' + newState);
      goToNextPage()
    } else if (newState < prevState) {
      console.log('decreased' + prevState + ' to ' + newState);
      goToPreviousPage()
    } else {
      console.log('same ' + newState);
    }
    setPrevState(newState)
  }


  return (
    <>
      <NavBar />
      <Box className="ReviewContainer">
        <Box className={fullView ? "reviewSideMenu" : "reviewSideMenu reviewSideMenuActive"}>
          <Box className="reviewHeaderCheck">
            <input
              style={{ display: fullView ? "none" : "block" }}
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
          {fullView ?
            <Box onClick={() => setFullView(false)} className="sideButton">
              <img src={rightArrow} />
            </Box> :
            <Box onClick={() => setFullView(true)} className="sideButton">
              <img src={leftArrow} />
            </Box>
          }

          <Box className="ChooseCover_Header">
            <Typography mr={1} className='ChooseCoverHeaderText'>Step 6:</Typography>
            <Typography className='ChooseCoverSubText'>Review</Typography>
          </Box>

          <Box className="ReviewCoverBox">
            <BookFlipper
              flipBookRef={flipBookRef}
              goToPreviousPage={goToPreviousPage}
              goToNextPage={goToNextPage}
              images={images}
            />
          </Box>
          <Box className="slideBox">
            <KeyboardArrowLeftIcon className='pageArrow' onClick={goToPreviousPage} />
            <Slider
              disabled={isChecked ? false : true}
              marks
              max={images?.length / 2 - 0.5}
              min={0}
              size="medium"
              valueLabelDisplay="auto"
              value={sliderValue}
              onChange={handleSliderChange}
            />
            <KeyboardArrowRightIcon className='pageArrow' onClick={goToNextPage} />
            {/* <Typography>Showing Cover{sliderValue}</Typography> */}
          </Box>
        </Box>
        <PriceBox buttonText="Add to cart" Xval='480' Yval='280' />
        {/* <PriceBox buttonText="Add to cart" Xval={Xval} Yval={Yval} /> */}
      </Box>
      <Footer />
    </>
  )
}
