import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NewCollections from "../../components/NewCollections/NewCollections";
import Trendy from "../../components/Trendy/Trendy";
import Offer from "../../components/Offer/Offer";
import Login from "../Login/Login";
import { StoreContext } from "../../context/StoreContext";
import "./Home.css";

const Home = () => {
  const { token } = useContext(StoreContext);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (!token) {
      timer = setInterval(() => {
        setLoginPopupOpen(true);
      }, 6000);
    }
    return () => clearInterval(timer);
  }, [token]);

  return (
    <div>
      <Header />
      <NewCollections />
      <Trendy />
      <Offer />
      {isLoginPopupOpen && (
        <div className="login-popup">
          <div className="popup-content">
            <h2>Please Log In or Sign Up</h2>
            <button onClick={() => setLoginPopupOpen(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
