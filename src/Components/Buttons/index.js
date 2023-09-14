import React from "react";
import "./style.css";
import { Box } from "@mui/material";

export default function ButtonPrimary({
  buttonText,
  width,
  textSize,
  handelClick,
}) {
  return (
    <Box
      onClick={handelClick}
      sx={{ width: width || "100%" }}
      className="button"
    >
      <p style={{ fontSize: textSize || "18px" }}>{buttonText}</p>
    </Box>
  );
}
