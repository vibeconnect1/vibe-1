import React, { useState } from "react";
import CreateAccountModal from "./CreateAccountModal"; // Import the new modal component

const SignUpModal = ({ onSignInClick, onClose }) => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  return (
    <>
      {showCreateAccount ? (
        <CreateAccountModal onClose={() => setShowCreateAccount(false)} />
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black text-white w-96 p-6 rounded-lg">
            <button onClick={onClose} className="text-2xl font-bold mb-2">
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">
              Join Vibe Connect today
            </h2>

            <div className="space-y-4">
            
              {/* <button className="flex items-center justify-center bg-white text-black font-bold py-2 px-4 rounded-md w-full">
                <img
                  src="https://img.icons8.com/color/20/000000/google-logo.png"
                  alt="Google"
                  className="mr-2"
                />
                Sign up with Google
              </button>

              <button className="flex items-center justify-center bg-white text-black font-bold py-2 px-4 rounded-md w-full">
                <img
                  src="https://img.icons8.com/ios-filled/20/000000/mac-os.png"
                  alt="Apple"
                  className="mr-2"
                />
                Sign up with Apple
              </button> */}

              {/* <div className="text-center text-gray-400">or</div> */}

              {/* <button
                className="bg-gray-800 text-white font-bold py-2 px-4 rounded-md w-full"
                onClick={() => setShowCreateAccount(true)}
              >
                Create account
              </button> */}
              <div className="flex flex-col gap-3">
              <label htmlFor="" className="font-bold ">Enter email</label>
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-gray-800 text-white p-3 rounded-md w-full mb-4"
          />
          </div>
            </div>
            <button className="bg-blue-500 font-bold py-2 px-4 rounded-md w-full">
            Continue
          </button>
          <div className="space-y-4">
          <div className="text-center text-white mt-2">Or</div>
          <button className="flex items-center justify-center bg-white text-black font-bold py-2 px-4 rounded-md w-full" onClick={() => setShowCreateAccount(true)}>
                {/* <img
                  src="https://img.icons8.com/color/20/000000/google-logo.png"
                  alt="Google"
                  className="mr-2"
                /> */}
                Sign in with Single Sign On
              </button>
              </div>
            {/* <div className="text-center text-gray-400 mt-6 text-sm">
              By signing up, you agree to the{" "}
              <span className="text-blue-500 cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-500 cursor-pointer">
                Privacy Policy
              </span>
              , including{" "}
              <span className="text-blue-500 cursor-pointer">Cookie Use</span>.
            </div> */}

            <div className="text-center text-gray-400 mt-4">
              Have an account already?{" "}
              <span
                onClick={onSignInClick}
                className="text-blue-500 cursor-pointer"
              >
                Log in
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpModal;
