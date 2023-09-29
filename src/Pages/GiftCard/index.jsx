import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material'
import "./style.css"


import coverBook1 from "../../Assets/images/GiftImageSlider/Mathilde Losquin - Copy.jpg"
import coverBook2 from "../../Assets/images/GiftImageSlider/Mathilde Losquin - Copyffff.jpg"
import coverBook3 from "../../Assets/images/GiftImageSlider/Mathilde Losquin - Copyg.jpg"
import coverBook4 from "../../Assets/images/GiftImageSlider/Mathilde Losquin - Copyre.jpg"
import coverBook5 from "../../Assets/images/GiftImageSlider/Mathilde Losquin.jpg"


import NavBar from '../NavBar'
import Footer from '../Footer'
import { ButtonPrimary } from "../../Components/Buttons"
import ImageViewer from "../../Components/ImageViewer"

export default function GiftCard() {
  const [giftCardPrice, setGiftCardPrice] = useState("25.00")

  const images = [coverBook1, coverBook2, coverBook3, coverBook4, coverBook5]



  return (
    <>
      <NavBar />
      <Box className="giftCardContainer">
        <Box className="giftCoverBox">
          <ImageViewer images={images} />
        </Box>
        <Box className="giftCardInfoBox">
          <Typography className='giftHeader'>Gift Card</Typography>
          <Typography className='giftPriceText'>${giftCardPrice}</Typography>
          <Typography className='giftSubHeader'>Choose amount:</Typography>
          <Box className="giftCardPriceBox">
            <Box onClick={() => setGiftCardPrice("25.00")} className={giftCardPrice === "25.00" ? "giftCardPriceItem giftCardPriceItemActive" : "giftCardPriceItem"}>
              <Typography className={giftCardPrice === "25.00" ? 'giftCardPriceText giftCardPriceTextActive' : "giftCardPriceText"}>$25</Typography>
            </Box>
            <Box onClick={() => setGiftCardPrice("50.00")} className={giftCardPrice === "50.00" ? "giftCardPriceItem giftCardPriceItemActive" : "giftCardPriceItem"}>
              <Typography className={giftCardPrice === "50.00" ? 'giftCardPriceText giftCardPriceTextActive' : "giftCardPriceText"}>$50</Typography>
            </Box>
            <Box onClick={() => setGiftCardPrice("75.00")} className={giftCardPrice === "75.00" ? "giftCardPriceItem giftCardPriceItemActive" : "giftCardPriceItem"}>
              <Typography className={giftCardPrice === "75.00" ? 'giftCardPriceText giftCardPriceTextActive' : "giftCardPriceText"}>$75</Typography>
            </Box>
            <Box onClick={() => setGiftCardPrice("100")} className={giftCardPrice === "100" ? "giftCardPriceItem giftCardPriceItemActive" : "giftCardPriceItem"}>
              <Typography className={giftCardPrice === "100" ? 'giftCardPriceText giftCardPriceTextActive' : "giftCardPriceText"}>$100</Typography>
            </Box>
            <Box onClick={() => setGiftCardPrice("125")} className={giftCardPrice === "125" ? "giftCardPriceItem giftCardPriceItemActive" : "giftCardPriceItem"}>
              <Typography className={giftCardPrice === "125" ? 'giftCardPriceText giftCardPriceTextActive' : "giftCardPriceText"}>$125</Typography>
            </Box>
          </Box>
          <TextField className='GiftInput' placeholder='Recipient’s Name' />
          <TextField className='GiftInput' placeholder='Recipient’s Email Address' />
          <TextField className='GiftInput' placeholder='Sender’s Name' />
          <TextField className='GiftInput' placeholder='Sender’s Email Address' />
          <textarea className='messageInput' placeholder='Gift Message' />
          <TextField className='GiftInput' placeholder='Delivery Date' />
          <ButtonPrimary buttonText="ADD TO CART" width="205px" />
        </Box>

      </Box>
      <Footer />
    </>
  )
}
