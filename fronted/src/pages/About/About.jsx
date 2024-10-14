import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Offer from "../../components/Offer/Offer";
import AboutUs from "../../assets/AboutUs.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center m-4">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-500">
          <img
            src={AboutUs}
            alt="About Us"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 md:p-10">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
              About
            </h1>
            <hr className="border-t-2 border-[#ffc0d0] mb-6" />
            <p className="text-gray-700 leading-relaxed text-justify text-lg">
              Welcome to VIBE
              <span className="text-[#ffc0d0] font-semibold">z</span>! We are
              passionate about providing you with the best online shopping
              experience. Founded in 1995, our mission is to bring you a diverse
              selection of high-quality products at competitive prices, all
              while ensuring exceptional customer service.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify text-lg mt-4">
              <span className="font-semibold">Our Story:</span> Our journey
              began when{" "}
              <span className="font-semibold">
                we noticed a lack of affordable and quality products in the
                market, and decided to create a platform that offers just that.
              </span>{" "}
              Over the years, we have grown from a small startup to a trusted
              online store, thanks to our commitment to quality, value, and
              customer satisfaction.
            </p>
          </div>
        </div>
      </div>
      <Offer />
    </div>
  );
};

export default About;
