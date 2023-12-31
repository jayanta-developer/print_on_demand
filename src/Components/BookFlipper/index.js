import React from "react";
import { useCallback } from 'react';
import HTMLFlipBook from "react-pageflip";
import "./style.css";

import FrontCover from "../../Components/ReviewPages/FrontCover"
import BackCover from "../../Components/ReviewPages/BackCover"
import EmptyPage from "../../Components/ReviewPages/EmptyPage"
import FirstPage from "../../Components/ReviewPages/FirstPage"
//import FirstDailySinglePage from "../../Components/ReviewPages/DailySinglePage"

function BookFlipper({ flipBookRef, pageImages, coverImages, onPageFlip }) {
  
  const handleFlip = useCallback((e) => {
     // console.log('Current page: ' + e.data);
      onPageFlip(e.data);
  }, []);

  return (
    <>
      <HTMLFlipBook ref={flipBookRef} width={396} height={510} showCover={true} onFlip={handleFlip}>
          <FrontCover coverImages={coverImages} />
          {pageImages?.map((el, index) => (
          <div key={index+1} data-key={index+1} className="demoPage" id={`Page-${index+1}`}>
            <img src={el} alt= {`img${index+1}`}/>
          </div>
          ))}
         <div  key={`${pageImages.length+1}`} className="demoPage page-cover-bottom"  id={`Page-Bottom-Back`}>
            <img src={EmptyPage} alt= {`bottomcover-img`}/>
            <div className="page-title"><h2>THE END</h2></div>
        </div>
        <div  key="01" className="demoPage page-cover-bottom" data-density="hard"  id={`Page-Bottom`} sx={`display: none;`}>
            <img src={coverImages[1]} alt= {`bottomcover-img`}/>
        </div>
      </HTMLFlipBook>
    </>
  );
}

export default BookFlipper;
