import React, { useState } from "react";

const ForgotPasswordModal = ({ onClose }) => {
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleContinue = () => {
    // Logic for sending OTP goes here
    setIsOtpSent(true); // Show OTP input field and verify button
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black text-white w-96 p-6 rounded-lg">
        <button onClick={onClose} className="text-2xl font-bold mb-2">
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold">Enter Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            className="bg-gray-800 text-white p-3 rounded-md w-full mb-4"
          />
        </div>

        {isOtpSent && (
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="otp" className="font-bold">Enter OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              className="bg-gray-800 text-white p-3 rounded-md w-full mb-4"
            />
            <button className="bg-gray-600 font-bold py-2 px-4 rounded-md w-full">
              Verify
            </button>
          </div>
        )}

        {!isOtpSent && (
          <button
            onClick={handleContinue}
            className="bg-gray-600 font-bold py-2 px-4 rounded-md w-full mt-4"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
