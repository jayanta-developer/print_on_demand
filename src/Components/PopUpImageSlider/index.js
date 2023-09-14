import React, { useState } from "react";
import "./style.css"; // Import your CSS for styling

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-slider">
      <div className="image-slider-main">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="main-image"
        />
        <button className="prev-button" onClick={goToPreviousImage}>
          &lt;
        </button>
        <button className="next-button" onClick={goToNextImage}>
          &gt;
        </button>
      </div>
      <div className="thumbnail-row">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`thumbnail ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
