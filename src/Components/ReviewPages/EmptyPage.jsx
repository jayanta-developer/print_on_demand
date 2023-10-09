import React from "react";
import EmptyPageImage from "../../Assets/images/EmptyPage.jpg";


function EmptyPage(key) {
 
  return (
    <div key={key} className="demoPage page-cover-bottom" id={`Page-empty`}>
        <img src={EmptyPageImage} alt= {`empty-img`}/>
    </div>
  );
}

export default EmptyPage;
