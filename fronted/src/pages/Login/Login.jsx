import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

import "./Login.css";

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLogin, setIsLogin] = useState("signin");
  const [userLoginData, setUserLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigation = useNavigate();

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const inputHandler = (e) => {
    setUserLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const CreateHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://vibez-backend.onrender.com/user/${isLogin}`,
        userLoginData
      );
      if (response.data.success) {
        toast.success(`Successfully ${isLogin}`);
        Cookies.set("myCookie", response.data.token);
        setTimeout(() => {
          navigation("/");
        }, 2000);
      } else {
        toast.error(response.data.message || "An error occurred");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <ToastContainer />
      <div className="form-container sign-up">
        <form onSubmit={CreateHandler}>
          <h1>Create Account</h1>
          <span>Register with E-mail</span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={userLoginData.name}
            onChange={inputHandler}
          />
          <input
            type="email"
            name="email"
            value={userLoginData.email}
            placeholder="Enter E-mail"
            onChange={inputHandler}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={userLoginData.password}
            onChange={inputHandler}
          />
          <button type="submit" onClick={() => setIsLogin("signin")}>
            Sign Up
          </button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={CreateHandler}>
          <h1>LogIn</h1>
          <span>Login With Email & Password</span>
          <input
            type="email"
            placeholder="Enter E-mail"
            name="email"
            value={userLoginData.email}
            onChange={inputHandler}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={userLoginData.password}
            onChange={inputHandler}
          />
          <a href="#">Forget Password?</a>
          <button type="submit" onClick={() => setIsLogin("login")}>
            Login In
          </button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>
              Welcome To <br />
              Vibez
            </h1>
            <p>Sign in With ID & Password</p>
            <button id="login" onClick={handleLoginClick}>
              LogIn
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <p>
              Welcome to Vibez! Discover a world of trendy finds and seamless
              shopping, tailored just for you. Enjoy every moment of your
              shopping journey with us!
            </p>
            <p>Create Account</p>
            <button
              // className="hidden"
              id="register"
              onClick={handleRegisterClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
