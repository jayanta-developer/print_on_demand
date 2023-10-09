import React, { useState, useEffect, useRef } from 'react'
import { Typography, Box, Slider } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { Slider } from '@mui/material-next';
import "./style.css";

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import rightArrow from "../../Assets/images/rightArrow.png"
import leftArrow from "../../Assets/images/leftArrow.png"

// Flipper images
import TopCoverPhoto from "../../Assets/images/Pages/TopCoverPhoto.png";
import BottomCoverPhoto from "../../Assets/images/Pages/BackCoverPhoto.png";
import coverPhoto0 from "../../Assets/images/EmptyPage.jpg";
import coverPhoto1 from "../../Assets/images/CalenderCover1.png";
import coverPhoto2 from "../../Assets/images/CalenderCover2.png";
import coverPhoto3 from "../../Assets/images/DailySinglePage1 - Copy.png";
import coverPhoto4 from "../../Assets/images/DailySinglePage2 - Copy.png";
import coverPhoto5 from "../../Assets/images/Pages/10-160621063452-thumbnail.jpg";
import coverPhoto6 from "../../Assets/images/Pages/2ed4a71e1fee3d7805cccdba970e9806--commodore-amiga-a-pen.jpg";
import coverPhoto7 from "../../Assets/images/Pages/2ed4a71e1fee3d7805cccdba970e9806.jpg";
import coverPhoto8 from "../../Assets/images/Pages/The Strange Visitor by Shreeya 1 - edited.webp";
import coverPhoto9 from "../../Assets/images/Pages/highschool-essay.gif";
import coverPhoto10 from "../../Assets/images/Pages/largepreview.png";
import coverPhoto11 from "../../Assets/images/Pages/p01725105109-160701033539-thumbnail.jpg";
import coverPhoto12 from "../../Assets/images/EmptyPage.jpg";


import InsideCoverBinder from "../../Assets/images/insideCoverBinder.png";




// Components
import NavBar from '../NavBar';
import Footer from '../Footer';
import PriceBox from '../../Components/PriceBox';
import BookFlipper from "../../Components/BookFlipper"
import BookFlipper2 from "../../Components/BookFlipper/index"
import { ButtonPrimary } from "../../Components/Buttons"


export default function Review() {
  // const [Xval, setXval] = useState('');
  // const [Yval, setYval] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [fullView, setFullView] = useState(false);
  const [prevState, setPrevState] = useState(0)

  // console.log(sliderValue);


  let currentPage; 
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    detectStateChange(newValue)
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checked state
  };

  const flipBookRef = useRef(null);

  const goToPreviousPage = () => {
    console.log(flipBookRef.current);
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
    setSliderValue((prevValue) => prevValue - 1);
  };

  const goToNextPage = () => {
    console.log(flipBookRef.current);
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
    setSliderValue((prevValue) => prevValue + 1);
  };

  const handleSliderPosition = (data) =>{
    setSliderValue(parseInt(data));
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
  const pageCovers = [
    TopCoverPhoto,
    BottomCoverPhoto
  ]
  const pageImages = [
    coverPhoto0,
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
    coverPhoto0,
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


  const captureAndDownloadPdf = async() =>{
    const pdf = new jsPDF();
    const pages = document.querySelectorAll('.demoPage'); // Change the selector as needed
console.log(pages.length);
    for (let i = 0; i < pages.length; i++) {console.log(i);
      const page = pages[i];
      const canvas = await html2canvas(page);
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

      if (i < pages.length - 1) {
        pdf.addPage();
      }
    }

    pdf.save('multi-page-document.pdf');
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
 
          <Box mt={3} className="ReviewCoverBox">

         
            {sliderValue>0 && sliderValue<(pageImages?.length-2) && <img className='Review_insideCover_binder' src={InsideCoverBinder} alt=''/>}
            <BookFlipper
              flipBookRef={flipBookRef}
              pageImages={pageImages}
              coverImages={pageCovers}
              onPageFlip={handleSliderPosition}
            />
          </Box>
          <Box className="slideBox">
            <KeyboardArrowLeftIcon className='pageArrow' onClick={goToPreviousPage} />
            <Slider
              //disabled={isChecked ? false : true}
              marks
              max={pageImages?.length / 2 - 0.5}
              min={0}
              size="medium"
              valueLabelDisplay="auto"
              value={sliderValue}
              onChange={handleSliderChange}
            />
            <KeyboardArrowRightIcon className='pageArrow' onClick={goToNextPage} />
             {/*<Typography>Showing Cover{sliderValue}</Typography> */}
          </Box>
          <button onClick={captureAndDownloadPdf}>Download PDF</button>

          
        </Box>
        <PriceBox buttonText="Add to cart" Xval='480' Yval='280' />
        {/* <PriceBox buttonText="Add to cart" Xval={Xval} Yval={Yval} /> */}
      </Box>
      <Footer />
    </>
  )
}
