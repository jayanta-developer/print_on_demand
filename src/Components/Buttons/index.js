import React from "react";
import "./style.css";
import { Box } from "@mui/material";

export const ButtonPrimary = ({ buttonText, width, textSize, handelClick }) => {
  return (
    <Box
      onClick={handelClick}
      sx={{ width: width || "100%" }}
      className="button"
    >
      <p style={{ fontSize: textSize }}>{buttonText}</p>
    </Box>
  );
};

export const ButtonSecondary = ({
  buttonText,
  width,
  textSize,
  handelClick,
}) => {
  return (
    <Box
      onClick={handelClick}
      sx={{ width: width || "100%" }}
      className="button SecondaryBtn"
    >
      <p style={{ fontSize: textSize }}>{buttonText}</p>
    </Box>
  );
};
