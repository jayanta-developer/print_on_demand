import React from "react";
import "./style.css";
import { Box } from "@mui/material";

export default function ButtonPrimary({ buttonText, width }) {
  return (
    <Box sx={{ width: width || "100%" }} className="button">
      <p>{buttonText}</p>
    </Box>
  );
}
