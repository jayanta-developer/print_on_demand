import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import "./style.css";

//images
import productCover from "../../Assets/images/coverBook.png"

//component
import NavBar from '../NavBar';
import Footer from '../Footer';
import { ButtonPrimary } from "../../Components/Buttons"

export default function Cart() {
  const [pageCount, setPageCount] = useState(1)

  const handelCountDecrease = () => {
    if (pageCount >= 1) {
      setPageCount(pageCount - 1)
    }
  }
  const handelCountIncrease = () => {
    setPageCount(pageCount + 1)
  }
  return (
    <>
      <NavBar />
      <Box className="cartContainer">
        <Box className="cartBox">
          <Box className="cartTopLogo">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="34" viewBox="0 0 36 34" fill="none">
              <path d="M35.8463 10.2952C35.7241 10.1549 35.5453 10.0741 35.3572 10.0741H32.7858V4.40742C32.7858 4.05971 32.4979 3.77778 32.1429 3.77778H25.2731L23.5327 2.07328C23.2816 1.82749 22.8744 1.82749 22.6237 2.07328L21.8572 2.82405V0.629641C21.8572 0.281937 21.5693 0 21.2143 0H18C17.645 0 17.3571 0.281937 17.3571 0.629641V7.23147L16.2598 8.30626C16.0087 8.55218 16.0087 8.95078 16.2598 9.19676L17.1556 10.0741H12.8571C12.5021 10.0741 12.2143 10.3561 12.2143 10.7038C12.2143 11.0515 12.5021 11.3334 12.8571 11.3334H34.6033L32.2375 25.8149H11.3972L5.75494 8.62215C5.66944 8.36177 5.42208 8.18519 5.14287 8.18519H0.642868C0.28786 8.18519 0 8.46713 0 8.81484C0 9.16254 0.28786 9.44448 0.642868 9.44448H4.67424L10.3165 26.6372C10.402 26.8976 10.6493 27.0741 10.9285 27.0741H32.7857C33.1015 27.0741 33.3706 26.8494 33.4205 26.5439L35.9919 10.8032C36.0216 10.6212 35.9685 10.4355 35.8463 10.2952ZM18.6429 1.25928H20.5715V4.08333L18.6429 5.97226V1.25928ZM27.1827 10.0741H18.9738L17.6235 8.75155L23.0782 3.409L28.5331 8.75155L27.1827 10.0741ZM31.5 10.0741H29.0009L29.8968 9.19676C30.0173 9.07866 30.0851 8.91855 30.0851 8.75155C30.0851 8.58455 30.0173 8.42444 29.8968 8.30633L26.5588 5.03713H31.5V10.0741Z" fill="#B8845F" />
              <path d="M13.5 15.7408C13.145 15.7408 12.8571 16.0227 12.8571 16.3704V20.8225C12.8571 21.1702 13.145 21.4521 13.5 21.4521C13.855 21.4521 14.1429 21.1702 14.1429 20.8225V16.3704C14.1429 16.0227 13.855 15.7408 13.5 15.7408Z" fill="black" />
              <path d="M16.7143 15.7408C16.3593 15.7408 16.0714 16.0227 16.0714 16.3704V20.8225C16.0714 21.1702 16.3593 21.4521 16.7143 21.4521C17.0693 21.4521 17.3571 21.1702 17.3571 20.8225V16.3704C17.3571 16.0227 17.0693 15.7408 16.7143 15.7408Z" fill="black" />
              <path d="M19.9286 15.7408C19.5735 15.7408 19.2857 16.0227 19.2857 16.3704V20.8225C19.2857 21.1702 19.5735 21.4521 19.9286 21.4521C20.2836 21.4521 20.5714 21.1702 20.5714 20.8225V16.3704C20.5714 16.0227 20.2836 15.7408 19.9286 15.7408Z" fill="black" />
              <path d="M23.1428 15.7408C22.7878 15.7408 22.5 16.0227 22.5 16.3704V20.8225C22.5 21.1702 22.7878 21.4521 23.1428 21.4521C23.4978 21.4521 23.7857 21.1702 23.7857 20.8225V16.3704C23.7857 16.0227 23.4979 15.7408 23.1428 15.7408Z" fill="black" />
              <path d="M26.3572 15.7408C26.0022 15.7408 25.7143 16.0227 25.7143 16.3704V20.8225C25.7143 21.1702 26.0022 21.4521 26.3572 21.4521C26.7122 21.4521 27 21.1702 27 20.8225V16.3704C27 16.0227 26.7122 15.7408 26.3572 15.7408Z" fill="black" />
              <path d="M29.5715 15.7408C29.2165 15.7408 28.9286 16.0227 28.9286 16.3704V20.8225C28.9286 21.1702 29.2165 21.4521 29.5715 21.4521C29.9265 21.4521 30.2143 21.1702 30.2143 20.8225V16.3704C30.2143 16.0227 29.9265 15.7408 29.5715 15.7408Z" fill="black" />
              <path d="M15.4286 27.7037C13.6561 27.7037 12.2143 29.116 12.2143 30.8519C12.2143 32.5877 13.6562 34 15.4286 34C17.2009 34 18.6428 32.5877 18.6428 30.8519C18.6429 29.116 17.201 27.7037 15.4286 27.7037ZM15.4286 32.7408C14.3651 32.7408 13.5 31.8934 13.5 30.8519C13.5 29.8103 14.3651 28.9629 15.4286 28.9629C16.492 28.9629 17.3572 29.8103 17.3572 30.8519C17.3572 31.8934 16.492 32.7408 15.4286 32.7408Z" fill="black" />
              <path d="M29.5714 27.7037C27.799 27.7037 26.3572 29.116 26.3572 30.8519C26.3572 32.5877 27.7991 34 29.5714 34C31.3438 34 32.7857 32.5877 32.7857 30.8519C32.7857 29.116 31.3438 27.7037 29.5714 27.7037ZM29.5714 32.7408C28.508 32.7408 27.6428 31.8934 27.6428 30.8519C27.6428 29.8103 28.508 28.9629 29.5714 28.9629C30.6349 28.9629 31.5 29.8103 31.5 30.8519C31.5 31.8934 30.6349 32.7408 29.5714 32.7408Z" fill="black" />
            </svg>
          </Box>

          <Typography className='cartHeader'>Cart</Typography>
          <Typography className='cartHeaderSubtotal'>SUBTOTAL</Typography>
          <Typography className='cartSubHeader'>Below are the items currently in your cart. If necessary, shipping and taxes will be added once you begin the checkout process.</Typography>
          <Box className="cartItemBox">
            <Box className="cartProductItem">

              <Box className="cartProductImg">
                <img src={productCover} />
                <Typography>Planner</Typography>
              </Box>
              <Box className="cartProductCountBtn">
                <svg onClick={handelCountDecrease} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10" stroke="#BC9448" stroke-width="2" />
                  <rect x="6" y="10" width="10" height="2" fill="#BC9448" />
                </svg>
                <Typography>{pageCount}</Typography>
                <svg onClick={handelCountIncrease} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10" stroke="#BC9448" stroke-width="2" />
                  <path d="M6 10H16V12H6V10Z" fill="#BC9448" />
                  <path d="M10 16V6H12V16H10Z" fill="#BC9448" />
                </svg>

              </Box>

              <Box className="cartProductPrice">
                <Typography>$6.50</Typography>
              </Box>

              <Box className="cartProductTotalPrice cartProductPrice">
                <Typography>${6.50 * pageCount}</Typography>

              </Box>
              <Box className="cartProductDropBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 10L12.5 14.5L17 10M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" stroke="#BC9448" stroke-width="2" stroke-linecap="round" />
                </svg>
              </Box>
            </Box>
            <Box className="cartProductItem">
              <Box className="cartProductImg">
                <img src={productCover} />
                <Typography>Planner</Typography>
              </Box>
              <Box className="cartProductCountBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10" stroke="#BC9448" stroke-width="2" />
                  <rect x="6" y="10" width="10" height="2" fill="#BC9448" />
                </svg>
                <Typography>1</Typography>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10" stroke="#BC9448" stroke-width="2" />
                  <path d="M6 10H16V12H6V10Z" fill="#BC9448" />
                  <path d="M10 16V6H12V16H10Z" fill="#BC9448" />
                </svg>
              </Box>
              <Box className="cartProductPrice">
                <Typography>$6.50</Typography>
              </Box>
              <Box className="cartProductTotalPrice cartProductPrice">
                <Typography>$6.5</Typography>
              </Box>
              <Box className="cartProductDropBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 10L12.5 14.5L17 10M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" stroke="#BC9448" stroke-width="2" stroke-linecap="round" />
                </svg>
              </Box>

            </Box>

          </Box>
          <Box className="cartCheckBox">
            <input type="checkbox" />
            <Typography ml={1}>I have reviewed all the items in my cart and understand that my custom items will be printed as show in the preview.</Typography>
          </Box>
          <ButtonPrimary buttonText="CHECKOUT" />


        </Box>
      </Box>
      <Footer />
    </>
  )
}
