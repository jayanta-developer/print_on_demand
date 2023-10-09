import React from "react";
import BackCoverPhoto from "../../Assets/images/Pages/BackCoverPhoto.png";
import EmptyPage from "../../Assets/images/EmptyPage.jpg";

function BackCover({key}) {
console.log("backkey=>", key);
  var BackImage = BackCoverPhoto;
  var coverData = sessionStorage.getItem("Cover"); 
  console.log(coverData)
  if(coverData!==null){
    if(coverData.CoverType==="predesign"){
      BackImage = coverData.CoverImage;
    }
    if(coverData.CoverType==="custom"){
      BackImage = coverData.BackImage;
    }  
  }

  return (
    <>
      <div  key={`13`} className="demoPage page-cover-bottom"  id={`Page-Bottom-Back`}>
          <img src={EmptyPage} alt= {`bottomcover-img`}/>
          <div className="page-title"><h2>THE END</h2></div>
      </div>
      <div  key="01" className="demoPage page-cover-bottom" data-density="hard"  id={`Page-Bottom`} sx={`display: none;`}>
          <img src={BackImage} alt= {`bottomcover-img`}/>
      </div>
      {/*<div key={`13`}  data-key={`${key+1}`} className="demoPage page-cover-bottom"  id={`Page-13`}>
          <img src={EmptyPage} alt= {`topcover-img`}/>
          <div className="page-title"><h2>The End</h2></div>
      </div>
      <div key="B1" className="demoPage page-cover-bottom"  data-density="hard" id={`Page-Back`}>
          <img src={BackImage} alt= {`backcover-img`}/>
      </div>*/}
    </>
  );
}

export default BackCover;
