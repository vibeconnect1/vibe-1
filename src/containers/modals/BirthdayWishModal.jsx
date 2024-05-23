import React from "react";
import ModalWrapper from "./ModalWrapper";

const BirthdayWishModal = ({ onclose, email }) => {
  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold text-center text-xl">Birthday Message</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="" className="text-sm font-bold">To :</label>
           <p className="font-medium">{email}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm font-bold">Birthday Message :</label>
           <textarea name="" id="" cols="80" rows="5" className="border rounded-md border-gray-500 p-1 px-2"></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-black p-2 px-4 text-white rounded-md my-5 hover:bg-white hover:text-black border-2 border-black transition-all duration-300">Send</button>
          </div>
          </div>
      </div>
    </ModalWrapper>
  );
};

export default BirthdayWishModal;
