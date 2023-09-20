import React from "react";
import { Box, Typography } from "@mui/material";
import "./style.css";

//component
import NavBar from "../NavBar";
import Footer from "../Footer";



export default function MyAccount() {
  return (
    <>
      <NavBar />
      <Box className="myAccountContainer">

        <Box className="myAccountHeader">
          <Typography className="myAccountHeaderText">
            Hello, Jhon.email
          </Typography>
          <Box className="myAccountHeaderNavigation">
            <Typography mr={1}>HOME / </Typography>
            <Typography mr={1}>ACCOUNT / </Typography>
            <Typography mr={1}>MY ACCOUNT </Typography>
          </Box>
        </Box>

        <Box className="myAccountInfoBox">
          <Box className="myAccountSideMenu">

            <Box className="myAccountSideMenuItem">
              <Typography className="myAccountSideMenuItemText">MY ACCOUNT</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography className="myAccountSideMenuItemText">MY DESIGNS</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography className="myAccountSideMenuItemText">ORDERS</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography className="myAccountSideMenuItemText">MY INFORMATION (NAME, ADDRESS, PHONE, EMAIL, PASSWORD)</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography className="myAccountSideMenuItemText">EMAIL PREFERENCES</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography className="myAccountSideMenuItemText">REFERRAL FRIEND</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography className="myAccountSideMenuItemText">BECOME AN AFFILIATE</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography className="myAccountSideMenuItemText">SHARE YOUR STORY</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography className="myAccountSideMenuItemText">LOGOUT</Typography>
            </Box>

          </Box>

          <Box className="myAccountDetailsBox">

            {/* my account info  */}
            <Box className="myAccountTab">
              <Box className="myAccountTabItem">
                <Typography className="myAccountTabHeader">Recent Projects</Typography>
              </Box>
              <Box className="myAccountTabItem myAccountTabSubSpacing">
                <Typography className="myAccountTabSubHeader ">PROJECT</Typography>
                <Typography className="myAccountTabSubHeader ">PROJECT NAME</Typography>
                <Typography className="myAccountTabSubHeader ">DETAILS</Typography>
              </Box>
              <Box className="myAccountTabItem myAccountTabSubYSpacing2">
                <Typography className="myAccountTabHeader">Recent Orders</Typography>
                <Typography className="myAccountTabLinkText">VIEW AL</Typography>
                <Typography className="myAccountTabLinkText">OPEN TICKET</Typography>

              </Box>

              <Box className="myAccountTabItem myAccountTabSubSpacing2">
                <Typography className="myAccountTabSubHeader">ORDER NUMBER</Typography>
                <Typography className="myAccountTabSubHeader">DATE</Typography>
                <Typography className="myAccountTabSubHeader">SHIP TO</Typography>
                <Typography className="myAccountTabSubHeader">ORDER TOTAl</Typography>
                <Typography className="myAccountTabSubHeader">STATUS</Typography>
                <Typography className="myAccountTabSubHeader">ACTION</Typography>
              </Box>
              <Box className="myAccountTabItem">
                <Typography className="myAccountTabHeader">Account Information</Typography>
              </Box>

              <Box className="myAccountTabItem2">
                <Typography className="myAccountTabSubHeaderEmail">CONTACT INFORMATION</Typography>
                <Typography className="myAccountTabSubHeaderEmail">Jhon.becomingbest@gmail.com</Typography>
                <Typography className="myAccountTabSubHeaderEmail">Jhon.becomingbest@gmail.com</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <Typography mr={11} className="myAccountTabLinkText">EDIT</Typography>
                  <Typography className="myAccountTabLinkText">CHANGE PASSWORD TICKET</Typography>
                </Box>

              </Box>

              <Box className="myAccountTabItem myAccountTabSubYSpacing2">
                <Typography className="myAccountTabHeader">Address Book</Typography>
                <Typography className="myAccountTabLinkText">MANAGE ADDRESS</Typography>


              </Box>

              <Box className="myAccountTabItem">
                <Typography className="myAccountTabHeader">0</Typography>

              </Box>



            </Box>


          </Box>

        </Box>





      </Box>
      <Footer />
    </>
  );
}
