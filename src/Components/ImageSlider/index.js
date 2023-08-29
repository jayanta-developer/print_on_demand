import React, { useState, useEffect } from "react";
import "./style.css";

import image1 from "../../Assets/images/Photo gallery/5cf9342f11e20544285b72aa.jpg";
import image2 from "../../Assets/images/Photo gallery/630fdb1c2600001f00b57c07.jpeg";
import image3 from "../../Assets/images/Photo gallery/IN_notebooks_001.jpg";
import image4 from "../../Assets/images/Photo gallery/The-best-digital-notebooks.jpg";
import image5 from "../../Assets/images/Photo gallery/The-best-digital-notebooks.jpg";
import image6 from "../../Assets/images/Photo gallery/notebooks-sheets-lined-checkered-and-drawing_csp77476592.jpg";
import image7 from "../../Assets/images/Photo gallery/photo-1654481414716-2f4ab5fe0fbe.jpeg";

const images = [image1, image2, image3, image4, image5, image6, image7];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
