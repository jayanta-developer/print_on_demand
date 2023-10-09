import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Box } from "@mui/material";
import "./style.css";
import coverPhoto from "../../Assets/images/blank-background-d4be9adbbabef1c66d2b603dccd2cde2c536f687a37483187c86dea6b3557a55.jpg";
import coverBinderV2 from "../../Assets/images/cover_binder_v2-removebg-preview.png";

function BookFlipper({ flipBookRef, images }) {
  const [currentPage, setCurrentPage] = useState(0);
  const getImageIndex = (index) => {
    // console.log(images.length, index);
  };

  const handlePageFlip = (e) => {
    // Update the current page number when the user flips to a new page
    setCurrentPage(e.data);
  };
  console.log(currentPage);
  return (
    <>
      <Box className="reviewCover">
        <img className="coverPhoto" src={coverPhoto} />
        <img
          style={{
            display: currentPage === 0 || currentPage === 14 ? "none" : "block",
          }}
          className="coverBinder"
          src={coverBinderV2}
        />

        <HTMLFlipBook
          ref={flipBookRef}
          width={400}
          height={600}
          onFlip={handlePageFlip}
        >
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
