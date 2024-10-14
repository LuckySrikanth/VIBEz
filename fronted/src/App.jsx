import React from "react";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import { Route, Routes } from "react-router-dom";
import Contactus from "./pages/Contactus/Contactus";
import ProductCart from "./pages/ProductCart/ProductCart";
import ProductCodeId from "./components/ProductCodeId/ProductCodeId";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/Placeorder";
import Footer from "./components/Footer/Footer";
import MyOrders from "./pages/MyOrders/MyOrders";
import Verify from "./pages/Verify/Verify";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductCart />} />
        <Route path="/productCodeId/:id" element={<ProductCodeId />} />
        <Route path="/About" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
