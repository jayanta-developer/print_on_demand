import React from "react";
import TopCoverPhoto from "../../Assets/images/Pages/TopCoverPhoto.png";
import EmptyPage from "../../Assets/images/EmptyPage.jpg";

function FrontCover(coverImages) {
  
  var FrontImage = TopCoverPhoto;
  var coverData = sessionStorage.getItem("Cover"); 
  console.log(coverData)
  if(coverData!==null){
    if(coverData.CoverType==="predesign"){
      FrontImage = coverData.CoverImage;
    }
    if(coverData.CoverType==="custom"){
      FrontImage = coverData.FrontImage;
    }  
  }

  return (
    <>
      <div key="00" className="demoPage page-cover-top"  data-density="hard" id={`Page-Top`}>
          <img src={coverImages[0]} alt= {`topcover-img`}/>
        <div className="page-title"><h2>BOOK TITLE 2</h2></div>
      </div>
      <div key="0" className="demoPage page-cover-top"  id={`Page-Top-Back`}>
          <img src={EmptyPage} alt= {`topcover-img`}/>
        <div className="page-title"><h2>Start</h2></div>
      </div>
      {/*<div key="0" className="demoPage page-cover-top" data-key="0"  data-density="hard" id={`Page-Top`}>
          <img src={FrontImage} alt= {`topcover-img`}/>
          <div className="page-title"><h2>BOOK TITLE</h2></div>
      </div>
      <div key="1" className="demoPage page-cover-top" data-key="1"  id={`Page-0`}>
          <img src={EmptyPage} alt= {`topcover-img`}/>
          <div className="page-title"><h2>Start</h2></div>
      </div>*/}
    </>
  );
}

export default FrontCover;
