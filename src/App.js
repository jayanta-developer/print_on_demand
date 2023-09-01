import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Home from "./Pages/Home";
import Register from "./Pages/Home/SignUp";
import Cover from "./Pages/Cover";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cover" element={<Cover />} />
      </Routes>
    </>
  );
}
