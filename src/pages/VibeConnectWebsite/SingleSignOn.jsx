import React, { useState } from "react";
import { FaGoogle, FaGithub, FaFacebook, FaEnvelope, FaTimes } from "react-icons/fa";

const SingleSignOnModal = ({ showModal, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg w-80">
        <FaTimes onClick={onClose}/>
        <h2 className="text-lg font-semibold mb-3 text-center">Continue with</h2>
        <p className="text-sm text-center mb-5">All your apps for super fast productivity!</p>
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

export default SingleSignOnModal;
