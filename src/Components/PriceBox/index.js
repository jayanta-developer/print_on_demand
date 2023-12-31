import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import rightArrow from "../../Assets/images/arrow_forward.svg";

export default function PriceBox({ setTab, buttonText, Xval, Yval }) {
  const [x, setX] = useState(window.innerWidth - Xval);
  const [y, setY] = useState(window.innerHeight - Yval);

  function handleMouseDown(e) {
    const offsetX = e.clientX - x;
    const offsetY = e.clientY - y;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    function handleMouseMove(e) {
      setX(e.clientX - offsetX);
      setY(e.clientY - offsetY);
    }

    function handleMouseUp() {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
  }

  return (
    <>
      <Box
        sx={{ left: x, top: y }}
        onMouseDown={handleMouseDown}
        className="priceHoverBox draggable-popup"
      >
        <Box className="priceInfo">
          <Box className="priceInfo1">
            <Box className="priceInfo1Sub">
              <Typography className="priceInfoText">Page Count</Typography>
              <Typography className="priceInfoBlackText">60/242</Typography>
            </Box>
            <Box className="priceInfo1Sub">
              <Typography className="priceInfoText">Max End Date</Typography>
              <Typography className="priceInfoBlackText">31 Dec 23</Typography>
            </Box>
          </Box>

          <Box className="priceInfo2">
            <Typography className="priceInfoText">Price</Typography>
            <Typography className="priceInfo2PriceText">$70.00</Typography>
          </Box>
        </Box>
        <Box className="price_nextBtn pointer">
          <Typography mr={0.5}>{buttonText || "Next"}</Typography>
          <img src={rightArrow} />
        </Box>
      </Box>
    </>
  );
}
