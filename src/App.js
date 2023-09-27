import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Home from "./Pages/Home";
import Register from "./Pages/Home/SignUp";
import Cover from "./Pages/Cover";
import Layout from "./Pages/Layout";
import Dates from "./Pages/DatesPage";
import Review from "./Pages/Home/Review";
import Cart from "./Pages/Cart";
import ShippingInfo from "./Pages/ShippingInfo";
import MyAccount from "./Pages/MyAccount";
import AddIns from "./Pages/AddIns";
import Referral from "./Pages/Referral";
import ShareStory from "./Pages/ShareStory";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cover" element={<Cover />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/addIns" element={<AddIns />} />
        <Route path="/dates" element={<Dates />} />
        <Route path="/review" element={<Review />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shippingInfo" element={<ShippingInfo />} />
        <Route path="/account/my-account" element={<MyAccount />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/shareStory" element={<ShareStory />} />
      </Routes>
    </>
  );
}
