import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome To <span className="text-[#ffc0d0]">VIBEz</span>
        </h1>

        <p className="mt-4 text-base md:text-lg">
          Fashion is part of the daily air and it does not quite help that it{" "}
          <br className="hidden md:block" />
          changes all the time. Clothes have always been a marker of the era and
          <br className="hidden md:block" />
          we are in a revolution. Your fashion makes you been seen and heard{" "}
          <br className="hidden md:block" />
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="bg-black text-white p-2 border rounded-lg mt-6 hover:bg-[#706c61] hover:text-black">
          <Link to="/products">Shop now</Link>
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="Fashion"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
