import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Box } from "@mui/material";
import "./style.css";
import coverPhoto from "../../Assets/images/blank-background-d4be9adbbabef1c66d2b603dccd2cde2c536f687a37483187c86dea6b3557a55.jpg";
import coverBinderV2 from "../../Assets/images/cover binder v2.jpg";

function BookFlipper({ flipBookRef, images }) {
  const getImageIndex = (index) => {
    // console.log(images.length, index);
  };

  return (
    <>
      <Box className="reviewCover">
        <img className="coverPhoto" src={coverPhoto} />
        <img className="coverBinder" src={coverBinderV2} />

        <HTMLFlipBook ref={flipBookRef} width={400} height={600}>
          {images?.map((el, index) => (
            <div key={index} className="demoPage">
              {getImageIndex(index)}
              <img src={el} />
            </div>
          ))}
        </HTMLFlipBook>
      </Box>
    </>
  );
}

export default BookFlipper;
