import React, { useState } from "react";

function BackCover() {
  
  const [backImage, setBackImage] = React.useState(0);

  React.useEffect(() => {
    var coverData = sessionStorage.getItem("Cover"); 
    console.log(coverData)
    if(coverData!==null){
      if(coverData.CoverType==="predesign"){
          setBackImage(coverData.CoverImage);
      }
      if(coverData.CoverType==="custom"){
        setBackImage(coverData.FrontImage);
      }   
    }
  }, []);

  return (
    <div key="02" className="demoPage page-cover-bottom"  data-density="hard" id={`Page-Back`}>
        <img src={backImage} alt= {`backcover-img`}/>
        <div className="page-content"><h2>The End</h2></div>
    </div>
  );
}

export default BackCover;
