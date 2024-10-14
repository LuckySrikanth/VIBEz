import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <div className="flex flex-col sm:grid grid-cols-1 sm:grid-cols-[3fr_2fr_2fr] gap-5 my-10 mt-8">
        <div className="w-full mb-6 sm:mb-0 sm:text-left text-center">
          <h1 className="text-2xl font-bold">
            VIBE<span className="text-[#ffc0d0]">z</span>
          </h1>
          <p className="mt-4 text-gray-400 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-full mb-6 sm:mb-0 sm:text-left text-center">
          <h1 className="text-xl font-semibold mb-4">COMPANY</h1>
          <ul className="space-y-2">
            <li className="hover:text-[#ffc0d0] transition-colors duration-300 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#ffc0d0] transition-colors duration-300 cursor-pointer">
              <Link to="/products">Collections</Link>
            </li>
            <li className="hover:text-[#ffc0d0] transition-colors duration-300 cursor-pointer">
              <Link to="/About">About Us</Link>
            </li>
            <li className="hover:text-[#ffc0d0] transition-colors duration-300 cursor-pointer">
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* Contact Information */}
        <div className="w-full sm:text-left text-center">
          <h1 className="text-xl font-semibold mb-4">GET IN TOUCH</h1>
          <p className="text-gray-400">
            <span className="hover:text-[#ffc0d0] transition-colors duration-300 cursor-pointer text-sm">
              +000-000-000
            </span>
          </p>
          <p className="text-gray-400">
            <a
              href="mailto:example@gmail.com"
              className="hover:text-[#ffc0d0] transition-colors duration-300"
            >
              example@gmail.com
            </a>
          </p>
        </div>
      </div>
      <hr className="my-8 border-gray-700" />
      <p className="text-center text-sm text-gray-500">
        COPYRIGHT 2024 © SRIKANTHBANOTH - ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default Footer;
