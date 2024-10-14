import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../assets/contactUs.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactus = () => {
  const subscribeHandler = (e) => {
    e.preventDefault();
    toast.success("Thanks for Subscribing 😊");
  };

  return (
    <div>
      <ToastContainer />

      <div className="flex flex-col items-center m-4 p-4">
        <div className="flex flex-wrap justify-center items-start md:items-center">
          <img
            src={ContactUs}
            alt="Contact Us"
            className="w-full md:w-3/5 rounded-lg shadow-lg"
          />
          <div className="flex flex-col items-center md:items-start md:ml-8 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold text-center md:text-left mb-4">
              Contact Us
            </h1>
            <hr className="border-t-2 border-[#ffc0d0] w-3/4 mb-6" />

            <div className="flex flex-col md:flex-row md:space-x-16 text-center md:text-left">
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-semibold">Visit Us</h2>
                <p>2952 Westheimer RD.</p>
                <p>Santa, Sanfranco</p>
                <p>89790</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Contact</h2>
                <p>
                  VIBE<span className="text-[#ffc0d0] font-semibold">z</span>
                  @email.com
                </p>
                <p>+000-000-000</p>
              </div>
            </div>

            <form className="mt-8 w-full md:w-auto" onSubmit={subscribeHandler}>
              <div className="flex items-center justify-center md:justify-start">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="outline-none p-2 rounded-l-xl border border-gray-300 w-full md:w-64"
                  required
                />
                <button className="bg-[#ffc0d0] text-white p-2 rounded-r-xl hover:bg-[#ff8c9e] transition duration-300">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
