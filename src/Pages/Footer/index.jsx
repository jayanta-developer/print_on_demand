import React from 'react'
import { Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./style.css"

import CompanyBanner from "../../Assets/images/BYBnewtag(white).png"
import PinterestIcon from "../../Assets/images/Pinterest.svg"
import InstagramIcon from "../../Assets/images/Instagram.svg"
import LinkedInIcon from "../../Assets/images/LinkedIn.svg"
import FacebookIcon from "../../Assets/images/Facebook.svg"

import sendArrowIcon from "../../Assets/images/sendArrowIcon.svg"

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <Box className="Footer">
        <Box className="footerMainBox">
          <Box className="footerItemBox">
            <Box className="footerItemSubBox companyLogoBox">
              <img className='companyBanner' src={CompanyBanner} />
            </Box>
            <Box className="footerItemSubBox FooterCompanyIconBox">
              <Box className="FooterCompanyIcon">
                <img src={PinterestIcon} />
              </Box>
              <Box className="FooterCompanyIcon">
                <img src={InstagramIcon} />
              </Box>
              <Box className="FooterCompanyIcon">
                <img src={LinkedInIcon} />
              </Box>
              <Box className="FooterCompanyIcon">
                <img src={FacebookIcon} />
              </Box>
            </Box>
          </Box>

          <Box className="footerItemBox">
            <Box className="footerItemSubBox">
              <Typography>About us</Typography>
            </Box>
            <Box className="footerItemSubBox">
              <Typography>FAQ</Typography>
            </Box>
            <Box className="footerItemSubBox">
              <Typography>Contact us</Typography>
            </Box>
          </Box>


          <Box className="footerItemBox">
            <Box className="footerItemSubBox">
              <Typography onClick={() => navigate("/shippingInfo")}>Shipping / Returns</Typography>
            </Box>
            <Box className="footerItemSubBox">
              <Typography>Privacy policy</Typography>
            </Box>
            <Box className="footerItemSubBox">
              <Typography>Terms of service</Typography>
            </Box>
          </Box>


          <Box className="footerItemBox">
            <Box className="footerItemSubBox">
              <Typography className='poppinsBold'>Subscribe</Typography>
            </Box>
            <Box className="footerItemSubBox">
              <input className="footerMailInput" placeholder='Your email address' />
              <img className='sendArrowIcon' src={sendArrowIcon} />
            </Box>
            <Box className="footerItemSubBox footerCheckBox">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_2991_5483)">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17.99 9L16.58 7.58L9.99 14.17L7.41 11.6L5.99 13.01L9.99 17L17.99 9Z" fill="#E4E5E1" />
                </g>
                <defs>
                  <clipPath id="clip0_2991_5483">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Typography>Receive a 12-part series on get the most out<br /> of any planner.</Typography>
            </Box>
            <Box className="footerItemSubBox footerCheckBox">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_2991_5483)">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17.99 9L16.58 7.58L9.99 14.17L7.41 11.6L5.99 13.01L9.99 17L17.99 9Z" fill="#E4E5E1" />
                </g>
                <defs>
                  <clipPath id="clip0_2991_5483">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Typography>Subscribe to our weekly productivity, well- <br />being, and leadership newsletter</Typography>
            </Box>
          </Box>





        </Box>

        <Box className="footerBottomBox">
          <Typography>Copyright 2023, Becoming Your Best Global Leadership</Typography>
        </Box>

      </Box>
    </>
  )
}
