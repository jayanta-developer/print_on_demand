import React, { useState } from "react";
import "./style.css";
import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageViewer = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="image-viewer">
      <div className="image-box">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <Box className="button_Box">
          <ArrowBackIosIcon
            className="imageSlide_btn"
            onClick={handlePrevClick}
          />

          <ArrowForwardIosIcon
            className="imageSlide_btn"
            onClick={handleNextClick}
          />
        </Box>
      </div>
      <div className="thumbnail-box">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${
              currentImageIndex === index ? "highlighted" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
