import React from "react";
import { useCallback } from 'react';
import HTMLFlipBook from "react-pageflip";
import "./style.css";
import EmptyPage from "../../Assets/images/EmptyPage.jpg";

function BookFlipper({ flipBookRef, pageImages, coverImages, onPageFlip }) {
  
  const handleFlip = useCallback((e) => {
     // console.log('Current page: ' + e.data);
      onPageFlip(e.data);
  }, []);

  return (
    <>
      <HTMLFlipBook ref={flipBookRef} width={396} height={510} showCover={true} onFlip={handleFlip}>
          <div key="00" className="demoPage page-cover-top"  data-density="hard" id={`Page-Top`}>
             <img src={coverImages[0]} alt= {`topcover-img`}/>
            <div className="page-title"><h2>BOOK TITLE</h2></div>
          </div>
          <div key="0" className="demoPage page-cover-top"  id={`Page-Top-Back`}>
             <img src={EmptyPage} alt= {`topcover-img`}/>
            <div className="page-title"><h2>Start</h2></div>
          </div>
          {pageImages?.map((el, index) => (
          <div key={index+1} className="demoPage" id={`Page-${index}`}>
            <img src={el} alt= {`img${index}`}/>
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
