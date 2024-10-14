import React, { useContext, useEffect, useState } from "react";
import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isUserPopupOpen, setUserPopupOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const { cartItems } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("myCookie");
    setLogin(!!token);
  }, []);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleUserPopupToggle = () => {
    setUserPopupOpen(!isUserPopupOpen);
  };

  const logouthandler = () => {
    Cookies.remove("myCookie");
    setLogin(false);
  };

  const loginhHandler = () => {
    navigate("/login");
    setLogin(true);
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between my-5 mx-5 shadow-md">
      {/* Mobile View */}
      <div className="flex items-center w-full md:hidden">
        <Link to="/">
          <h1 className="text-xl font-bold">
            VIBE<span className="text-[#ffc0d0]">z</span>
          </h1>
        </Link>
        <div className="ml-auto flex items-center">
          <CiMenuBurger
            onClick={handleMenuToggle}
            className="text-2xl cursor-pointer transition-transform duration-300 transform hover:scale-105"
          />
          <Link to="/products">
            <CiSearch className="mx-2 text-xl" />
          </Link>
          <FaUser
            className="mx-2 text-xl cursor-pointer"
            onClick={handleUserPopupToggle}
          />
          <Link to="/cart" className="relative flex items-center">
            <CiShoppingCart className="mx-2 text-xl" />
            {Object.keys(cartItems).length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ffc0d0] text-black text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-white z-20">
                {Object.keys(cartItems).length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex md:items-center md:justify-between w-full">
        <Link to="/">
          <h1 className="text-xl font-bold">
            VIBE<span className="text-[#ffc0d0]">z</span>
          </h1>
        </Link>
        <ul className="flex flex-row gap-5 flex-grow justify-center">
          <NavLink
            to="/"
            exact
            style={({ isActive }) => ({
              color: isActive ? "#ffc0d0" : "black",
            })}
            className="list-none my-3 cursor-pointer"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            style={({ isActive }) => ({
              color: isActive ? "#ffc0d0" : "black",
            })}
            className="list-none my-3 cursor-pointer"
          >
            Collection
          </NavLink>
          <NavLink
            to="/About"
            style={({ isActive }) => ({
              color: isActive ? "#ffc0d0" : "black",
            })}
            className="list-none my-3 cursor-pointer"
          >
            About
          </NavLink>
          <NavLink
            to="/contactus"
            style={({ isActive }) => ({
              color: isActive ? "#ffc0d0" : "black",
            })}
            className="list-none my-3 cursor-pointer"
          >
            Contact
          </NavLink>
        </ul>
        <div className="flex items-center">
          <Link to="/products">
            <CiSearch className="mx-2 text-xl cursor-pointer transition-transform duration-300 transform hover:scale-105" />
          </Link>
          <FaUser
            className="mx-2 text-xl cursor-pointer transition-transform duration-300 transform hover:scale-105"
            onClick={handleUserPopupToggle}
          />
          <Link to="/cart" className="relative flex items-center">
            <CiShoppingCart className="mx-2 text-xl cursor-pointer transition-transform duration-300 transform hover:scale-105" />
            {Object.keys(cartItems).length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ffc0d0] text-black text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-white z-20">
                {Object.keys(cartItems).length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* User Popup */}
      {isUserPopupOpen && (
        <div className="absolute right-5 top-16 bg-white shadow-lg rounded-md p-3 z-50">
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/myorders">My Orders</Link>
            </li>
            <li>
              <button onClick={() => setLogin(!login)}>
                {login ? (
                  <button onClick={logouthandler}>Logout</button>
                ) : (
                  <button
                    onClick={() => {
                      loginhHandler();
                    }}
                  >
                    LogIn
                  </button>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-4 md:hidden">
          <RxCross1
            onClick={handleMenuToggle}
            className="text-2xl cursor-pointer transition-transform duration-300 transform hover:scale-105 absolute top-4 right-4"
          />
          <ul className="flex flex-col items-center gap-5">
            <NavLink
              to="/"
              exact
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "green" : "black",
              })}
              className="list-none my-3 cursor-pointer"
              onClick={handleMenuToggle}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "green" : "black",
              })}
              className="list-none my-3 cursor-pointer"
              onClick={handleMenuToggle}
            >
              Collection
            </NavLink>
            <NavLink
              to="/About"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "green" : "black",
              })}
              className="list-none my-3 cursor-pointer"
              onClick={handleMenuToggle}
            >
              About
            </NavLink>
            <NavLink
              to="/contactus"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "green" : "black",
              })}
              className="list-none my-3 cursor-pointer"
              onClick={handleMenuToggle}
            >
              Contact
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
