import React from "react";
import { Typography, Box  } from '@mui/material';
//import "../../Pages/Cover/style.css";
import EmptyPageImage from "../../Assets/images/EmptyPage.jpg";

function FirstPage() {

  var FirstPageData = sessionStorage.getItem("FirstPage"); 
  console.log(FirstPageData);
  if (FirstPageData!== null) {
      FirstPageData = JSON.parse(FirstPageData);
  }else{
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const nextYear = currentYear+1;
    const diaryYear = currentYear+"-"+nextYear;
    FirstPageData = {};
    FirstPageData.Year = diaryYear;
    FirstPageData.Name = 'TOMMY SHALLENBERGER';
    FirstPageData.Email = 'tommy@gmail.com';
    FirstPageData.Phone = 'xxx-xxxxx';
    FirstPageData.Message = 'Quote or Personal Message';
  }


  return (
    <div key="02" className="DiartyPage firstpage"  id={`Page-first`}>
        <img src={EmptyPageImage} alt='' />
        <Box ml={0.5} className="st2InsidePage">
          <Box className="st2InsideCoverTextBox">
            <Typography mb={2} className='date'>{FirstPageData.Year}</Typography>
            <Typography mb={1} className='nameText'>{FirstPageData.Name.toUpperCase()}</Typography>
            <Typography mb={1} className='contactText'>{FirstPageData.Email}</Typography>
            <Typography mb={1} className='contactText'>{FirstPageData.Phone}</Typography>
            <Typography mb={1} className='messageText'>{FirstPageData.Message}</Typography>
          </Box>
        </Box>
    </div>
  );
}

export default FirstPage;
