import React, { useEffect, useState } from "react";
import { RiContrastDrop2Fill, RiExchangeFundsFill } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Offer = () => {
  const [sub, setSub] = useState("");

  const subscribeHandler = (e) => {
    e.preventDefault();
    toast.success("Thanks for Subscribing 😊");
    setSub("");
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-8 space-y-8">
      <ToastContainer />

      <div className="flex flex-wrap md:flex-nowrap justify-between w-full">
        <div className="flex flex-col justify-center items-center p-6 border rounded-lg w-full md:w-1/3 mb-4 md:mb-0 bg-white">
          <RiExchangeFundsFill className="text-5xl mb-2 text-[#4d4d4d]" />
          <p className="font-semibold text-[#4d4d4d]">Easy Exchange</p>
          <p className="text-center text-gray-600">
            We offer hassle-free exchange policy
          </p>
        </div>

        <div className="flex flex-col justify-center items-center p-6 border rounded-lg w-full md:w-1/3 mb-4 md:mb-0 bg-white">
          <TbTruckReturn className="text-5xl mb-2 text-[#4d4d4d]" />
          <p className="font-semibold text-[#4d4d4d]">7 Days Return Policy</p>
          <p className="text-center text-gray-600">
            We provide 7 days free return policy
          </p>
        </div>

        <div className="flex flex-col justify-center items-center p-6 border rounded-lg w-full md:w-1/3 bg-white">
          <RiCustomerService2Fill className="text-5xl mb-2 text-[#4d4d4d]" />
          <p className="font-semibold text-[#4d4d4d]">Best Customer Support</p>
          <p className="text-center text-gray-600">
            We offer the best customer support
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center p-5 border rounded-lg w-full bg-[#f9f9f9]">
        <h1 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-4">
          Subscribe & Get 30% Off
        </h1>
        <form
          onSubmit={subscribeHandler}
          className="flex flex-col md:flex-row justify-center w-full"
        >
          <input
            type="email"
            onChange={(e) => setSub(e.target.value)}
            value={sub}
            placeholder="Enter your email"
            className="outline-none p-2 rounded-l-lg border border-gray-300 w-full md:w-64 focus:ring-[#ffc0d0] transition duration-300"
            required
          />
          <button className="bg-[#ffc0d0] text-white p-2 rounded-r-lg mt-2 md:mt-0 md:-ml-px hover:bg-[#ff8c9e] transition duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Offer;
