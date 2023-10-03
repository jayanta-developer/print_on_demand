import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./style.css";

function BookFlipper({ flipBookRef, images }) {
  return (
    <>
      <HTMLFlipBook ref={flipBookRef} width={300} height={500}>
        {images?.map((el, index) => (
          <div key={index} className="demoPage">
            <img src={el} alt="Page 1" />
          </div>
        ))}
      </HTMLFlipBook>
    </>
  );
}

export default BookFlipper;
