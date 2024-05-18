import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImEarth } from "react-icons/im";
import { getItemInLocalStorage } from "../../utils/localStorage";
import toast from "react-hot-toast";
import profile from "/profile.png";
import QR from "/QR.png";

const EmployeeBusinessCard = () => {
  const user = getItemInLocalStorage("user");
  const [isQRVisible, setIsQRVisible] = useState(false);
  const Email = user.email;
  const handleEmailCopy = () => {
    navigator.clipboard
      .writeText(Email)
      .then(() => {
        toast.success("Email id Copied");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const Phone = "9930337983";
  const handlePhoneCopy = () => {
    navigator.clipboard
      .writeText(Phone)
      .then(() => {
        toast.success("Phone Number Copied");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const web = "www.google.com";
  const handleWebCopy = () => {
    navigator.clipboard
      .writeText(web)
      .then(() => {
        toast.success("Website Link Copied");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const toggleQRVisibility = () => {
    setIsQRVisible(!isQRVisible);
  };
  return (
    <section className="flex">
      <Navbar />
      <div className=" w-full flex flex-col mx-3 overflow-hidden">
        <div className="grid md:grid-cols-12 my-2 gap-5 w-full">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Email to share business card"
            className="p-2 border border-gray-500 rounded-md sm:col-span-4"
          />
          <button className="bg-black p-2 rounded-md border-2 border-black text-white hover:bg-white hover:text-black transition-all duration-500 sm:col-span-2">
            Share
          </button>
        </div>
        <div className="relative flex  md:border-2 border-gray-500 w-full  md:px-4 py-10  rounded-md">
          <div className="bg-white  rounded-full z-10 h-20 w-20 absolute left-[7.6rem]  md:left-[8.5rem] top-2 shadow-custom-all-sides">
            <img src={profile} alt="" />
          </div>
          <div
            className="bg-custom-gradient relative shadow-custom-all-sides h-48 w-80 rounded-md cursor-pointer"
            onClick={toggleQRVisibility}
          >
            <div className="flex flex-col justify-center my-2">
              <p className="text-center font-bold text-white mt-10 text-lg">
                {user.firstname} {user.lastname}
              </p>
              <p className="text-center font-medium text-white ">Profession</p>
            </div>
            <div>
              <p className="text-center text-xs text-white">
                testing description of card
              </p>
            </div>
            <div className="mt-5 flex justify-center gap-1 md:gap-2 ">
              <button
                className="bg-white p-2 flex justify-center items-center gap-2 rounded-l-md font-medium"
                onClick={handlePhoneCopy}
              >
                <FaPhoneAlt /> Phone
              </button>
              <button
                className="bg-white p-2 flex justify-center items-center gap-2  font-medium"
                onClick={handleEmailCopy}
              >
                <MdEmail size={20} /> Email
              </button>
              <button
                className="bg-white p-2 flex justify-center items-center gap-2  font-medium rounded-r-md"
                onClick={handleWebCopy}
              >
                <ImEarth /> Website
              </button>
            </div>
          </div>
          {/* for now */}
          <div
              className={` w-20 h-20  absolute left-[-5rem]  transform -translate-y-1/2 transition-all duration-500 ${
                isQRVisible
                  ? "md:translate-x-[28rem] opacity-100 "
                  : "md:translate-x-[-100%] opacity-0  "
              }`}
            >
                <div className="bg-black p-4 w-fit my-10 rounded-md shadow-custom-all-sides">

              <img src={QR} alt="QR Code" className="h-40 min-w-40" />
                </div>
            </div>

          {/* <div
            className={`w-20 h-20 absolute transform transition-all duration-500 ${
              isQRVisible
                ? "md:left-[28rem] md:translate-x-0 left-1/2 top-[15rem] md:opacity-100 opacity-0"
                : "md:left-[-5rem] md:translate-x-[-100%] left-1/2 top-[-5rem] md:opacity-0 opacity-100"
            }`}
          >
            <div className="bg-black p-4 w-fit my-10 rounded-md shadow-custom-all-sides">
              <img src={QR} alt="QR Code" className="h-40 min-w-40" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default EmployeeBusinessCard;
