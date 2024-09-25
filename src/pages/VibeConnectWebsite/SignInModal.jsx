import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignInModal = ({ onSignUpClick, onForgotPasswordClick, onLoginOTPClick,onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black text-white w-96 p-6 rounded-lg">
        <button onClick={onClose} className="text-2xl font-bold mb-2 ">
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">Welcome to Vibe Connect</h2>
        
        <div className="space-y-3">
          {/* <button className="flex items-center justify-center bg-white text-black font-bold py-2 px-4 rounded-md w-full">
            <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google" className="mr-2" />
            Sign in with Google
          </button> */}

          {/* <button className="flex items-center justify-center bg-white text-black font-bold py-2 px-4 rounded-md w-full">
            <img src="https://img.icons8.com/ios-filled/20/000000/mac-os.png" alt="Apple" className="mr-2" />
            Sign in with Apple
          </button> */}

          {/* <div className="text-center text-gray-400">or</div> */}
            <label htmlFor="" className="font-bold ">Enter email</label>
          <input
            type="text"
            placeholder="eg.abc@gmail.com"
            className="bg-gray-800 text-white p-3 rounded-md w-full mb-4"
          />
            <div className="mt-2 relative">
      <label htmlFor="password" className="font-bold">Enter password</label>
      <input
        id="password"
        type={showPassword ? 'text' : 'password'}
        className="bg-gray-800 text-white p-3 rounded-md w-full mt-2"
      />
      <div 
        className="absolute inset-y-0 right-0 flex items-center pr-3 mt-10 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <FaEye className="h-5 w-5 text-gray-400" />
        ) : (
          <FaEyeSlash className="h-5 w-5 text-gray-400" />
        )}
      </div>
    </div>
      <div className="flex flex-col gap-1">
<div className="flex justify-between">
          <button
            onClick={onForgotPasswordClick}
            className="text-blue-500   mt-2 "
          >
            Forgot password?
          </button>
          <button
            onClick={onLoginOTPClick}
            className="  mt-2"
          >
           Login with OTP
          </button>
          </div>
          <button className="bg-blue-500 font-bold py-2 px-4 rounded-md w-full">
            Login
          </button>
          </div>    
        </div>
        
        <div className="text-center text-gray-400 mt-6">
          Don't have an account? <span onClick={onSignUpClick} className="text-blue-500 cursor-pointer">Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
