import React, { useState } from "react";
import { FaGoogle, FaGithub, FaFacebook, FaEnvelope, FaTimes } from "react-icons/fa";

const CreateAccountModal = ({  onClose }) => {
  

  return (
    <div className="fixed inset-0  bg-opacity-50 flex justify-center bg-black z-50 items-center">
      <div className="bg-black p-5 rounded-lg shadow-lg w-80">
        <FaTimes onClick={onClose} className="text-white"/>
        <h2 className="text-lg font-semibold mb-3 text-white text-center">Continue with</h2>
        <p className="text-sm text-center text-white mb-5">All your apps for super fast productivity!</p>
        <div className="flex justify-around mb-4">
          <button className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full hover:bg-red-600">
            <FaEnvelope />
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            <FaGoogle />
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-900">
            <FaGithub />
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            <FaFacebook />
          </button>
        </div>
        {/* <button
          onClick={onClose}
          className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Sign in with Single On
        </button> */}
      </div>
    </div>
  );
};

export default CreateAccountModal;