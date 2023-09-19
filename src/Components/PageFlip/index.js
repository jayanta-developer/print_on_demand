import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./style.css";

import coverPhoto from "../../Assets/images/CoverPhoto.png";
import coverPhoto1 from "../../Assets/images/CalenderCover1.png";
import coverPhoto2 from "../../Assets/images/CalenderCover2.png";
import coverPhoto3 from "../../Assets/images/DailySinglePage1 - Copy.png";
import coverPhoto4 from "../../Assets/images/DailySinglePage2 - Copy.png";
import coverPhoto5 from "../../Assets/images/Pages/10-160621063452-thumbnail.jpg";
import coverPhoto6 from "../../Assets/images/Pages/2ed4a71e1fee3d7805cccdba970e9806--commodore-amiga-a-pen.jpg";
import coverPhoto7 from "../../Assets/images/Pages/2ed4a71e1fee3d7805cccdba970e9806.jpg";
import coverPhoto8 from "../../Assets/images/Pages/The Strange Visitor by Shreeya 1 - edited.webp";
import coverPhoto9 from "../../Assets/images/Pages/highschool-essay.gif";
import coverPhoto10 from "../../Assets/images/Pages/largepreview.png";
import coverPhoto11 from "../../Assets/images/Pages/p01725105109-160701033539-thumbnail.jpg";

function BookFlipper(props) {
  return (
    <HTMLFlipBook width={300} height={500}>
      <div className="demoPage">
        <img src={coverPhoto11} alt="Page 1" />
      </div>
      <div className="demoPage">
        <img src={coverPhoto10} alt="Page 2" />
      </div>
      <div className="demoPage">
        <img src={coverPhoto9} alt="Page 3" />
      </div>
      <div className="demoPage">
        <img src={coverPhoto8} alt="Page 4" />
      </div>
      <div className="demoPage">
        <img src={coverPhoto7} alt="Page 4" />
      </div>
      <div className="demoPage">
        <img src={coverPhoto6} alt="Page 4" />
      </div>
      <div className="demoPage">
        <img src={coverPhoto5} alt="Page 4" />
      </div>
      <div className="demoPage">
        <img src={coverPhoto4} alt="Page 4" />
      </div>
      <div className="demoPage">
        <img src={coverPhoto3} alt="Page 4" />
      </div>
      <div className="demoPage">
        <img src={coverPhoto2} alt="Page 4" />
      </div>
      <div className="demoPage">
        <img src={coverPhoto1} alt="Page 4" />
      </div>
    </HTMLFlipBook>
  );
}

export default BookFlipper;
