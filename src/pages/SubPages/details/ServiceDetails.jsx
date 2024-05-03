import React from "react";
import { BiEditAlt } from "react-icons/bi";

const ServiceDetails = () => {
  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Service Details
        </h2>
        <div className="my-2 mb-10 border-2 p-2 px-5 rounded-md border-gray-400 mx-20">
          <div className="flex justify-center m-5">
            <h1 className="p-2 border-2 border-black px-28 text-xl rounded-md font-semibold">
              Service 1
            </h1>
          </div>
          <div className="my-2 flex justify-end">
          <button className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white">
                <BiEditAlt />
                Edit Details
              </button>
          </div>
          <div className="p-5 grid grid-cols-4 gap-5 bg-gray-300 rounded-md font-semibold">
            <p>Site:</p>
            <p>Room:</p>
            <p>Floor:</p>
            <p>Building:</p>
            <p>Wing:</p>
            <p>Area:</p>
            <p>Created By:</p>
            <p>Created On:</p>
          </div>
          <h1 className="border-b border-black font-semibold my-5">Attachments</h1>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
