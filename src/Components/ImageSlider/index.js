import React, { useState, useEffect } from "react";
import "./style.css";

import image1 from "../../Assets/images/Photo gallery/5cf9342f11e20544285b72aa.jpg";
import image2 from "../../Assets/images/Photo gallery/630fdb1c2600001f00b57c07.jpeg";
import image3 from "../../Assets/images/Photo gallery/IN_notebooks_001.jpg";
import image4 from "../../Assets/images/Photo gallery/The-best-digital-notebooks.jpg";
import image5 from "../../Assets/images/Photo gallery/The-best-digital-notebooks.jpg";
import image6 from "../../Assets/images/Photo gallery/notebooks-sheets-lined-checkered-and-drawing_csp77476592.jpg";
import image7 from "../../Assets/images/Photo gallery/photo-1654481414716-2f4ab5fe0fbe.jpeg";

const Images = [image3, image2, image1, image5, image6, image7];

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Images.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {Images.map((el, index) => (
          <div className="slide" key={index}>
            <img style={{ width: "100%", height: "100%" }} src={el} />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {Images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
