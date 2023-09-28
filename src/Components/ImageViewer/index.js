import React, { useState } from "react";
import "./style.css";

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

        <button className="prev-button" onClick={handlePrevClick}>
          Left
        </button>
        <button className="next-button" onClick={handleNextClick}>
          Right
        </button>
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
