import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";
import SwapHorizontalCircleOutlinedIcon from '@mui/icons-material/SwapHorizontalCircleOutlined';


//component
import NavBar from "../NavBar";
import Footer from "../Footer";



export default function MyAccount() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("MY-ACCOUNT")
  const [sideMenu, setSideMenu] = useState(false)
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
          <Box sx={{ width: sideMenu ? "150px" : "0px" }} className="myAccountSideMenu">

            <Box className="myAccountSideMenuItem">
              <Typography onClick={() => {
                setActiveTab("MY-ACCOUNT")
              }} className={activeTab === "MY-ACCOUNT" ? "myAccountSideMenuItemText activeTabText" : "myAccountSideMenuItemText"}>MY ACCOUNT</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography onClick={() => {
                setActiveTab("MY-DESIGNS")

              }} className={activeTab === "MY-DESIGNS" ? "myAccountSideMenuItemText activeTabText" : "myAccountSideMenuItemText"}>MY DESIGNS</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography onClick={() => {
                setActiveTab("ORDERS")
              }}
                className={activeTab === "ORDERS" ? "myAccountSideMenuItemText activeTabText" : "myAccountSideMenuItemText"}>ORDERS</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography onClick={() => {
                setActiveTab("MY-INFORMATION")
              }} className={activeTab === "MY-INFORMATION" ? "myAccountSideMenuItemText activeTabText" : "myAccountSideMenuItemText"}>MY INFORMATION (NAME, ADDRESS, PHONE, EMAIL, PASSWORD)</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography onClick={() => {
                setActiveTab("EMAIL-PREFERENCES")
              }} className={activeTab === "EMAIL-PREFERENCES" ? "myAccountSideMenuItemText activeTabText" : "myAccountSideMenuItemText"}>EMAIL PREFERENCES</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography onClick={() => {
                setActiveTab("REFERRAL-FRIEND")
                navigate("/referral")
              }} className={activeTab === "REFERRAL-FRIEND" ? "myAccountSideMenuItemText activeTabText" : "myAccountSideMenuItemText"}>REFERRAL FRIEND</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography
                onClick={() => {
                  setActiveTab("BECOME-AN-AFFILIATE")
                }}
                className={activeTab === "BECOME-AN-AFFILIATE" ? "myAccountSideMenuItemText activeTabText" : "myAccountSideMenuItemText"}>BECOME AN AFFILIATE</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography
                onClick={() => {
                  setActiveTab("SHARE-YOUR-STORY")
                  navigate("/shareStory")
                }}
                className={activeTab === "SHARE-YOUR-STORY" ? "myAccountSideMenuItemText activeTabText" : "myAccountSideMenuItemText"}>SHARE YOUR STORY</Typography>
            </Box>
            <Box className="myAccountSideMenuItem">
              <Typography
                onClick={() => {
                  setActiveTab("LOGOUT")
                }}
                className={activeTab === "LOGOUT" ? "myAccountSideMenuItemText activeTabText" : "myAccountSideMenuItemText"}>LOGOUT</Typography>
            </Box>

          </Box>

          <Box className="myAccountDetailsBox">

            {/* my account info  */}
            <Box className="myAccountTab">
              <SwapHorizontalCircleOutlinedIcon onClick={() => setSideMenu(!sideMenu)} className="sideMenuIcon" />
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





      </Box >
      <Footer />
    </>
  );
}
