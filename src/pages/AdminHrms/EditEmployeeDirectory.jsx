import React, { useState, useRef } from "react";
import AdminHRMS from './AdminHrms';
import image from "/profile.png";
import EmployeeSections from "./EmployeeSections";


const EditEmployeeDirectory = () => {
    const inputRef = useRef(null);
    const [imageFile, setImageFile] = useState(null);
    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        setImageFile(event.target.files[0]);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className='flex'>
            <AdminHRMS />

            <div className="container  p-4 ">

                <h1 className="text-3xl font-bold mb-4">Employee Directory</h1>


                <div className="bg-white  shadow-md rounded p-4">
                    <div className="flex gap-20">
                        <div onClick={handleImageClick} className="cursor-pointer w-64  my-4">
                            {imageFile ? (
                                <img
                                    src={URL.createObjectURL(imageFile)}
                                    alt="Uploaded"
                                    className="border-4 border-gray-300 rounded-full w-40 h-40 object-cover"
                                />
                            ) : (
                                <img
                                    src={image}
                                    alt="Default"
                                    className="border-4 border-gray-300 rounded-full w-40 h-40 object-cover"
                                />
                            )}
                            <input
                                type="file"
                                ref={inputRef}
                                onChange={handleImageChange}
                                style={{ display: "none" }}
                            />
                        </div>
                        <div className="w-full">
                            <div className="flex justify-end gap-2">
                            <select name="" id="" className="border p-2 border-black rounded-md">
                                <option value="">Search Employee</option></select>

                                <div className="relative inline-block text-left">
                                <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        Actions
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707 1.707L6.414 9.586a1 1 0 01-1.414 0L.293 5.707A1 1 0 011.707 4.293L6 8.586 9.293 5.293A1 1 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      </button></div> </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              <button >Hold</button>
              
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              {/* Upload Statutory Settings */}
              <button >Deactivate</button>
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              {/* Upload Documents */}
              <button >Delete Employee</button>
            </a>
            </div>
            </div>
                )}
     
                            <h1 className="text-2xl font-bold mb-4">Ajay Baniya | BPC13</h1>
                            <div className="grid grid-cols-3 gap-4 p-4">
  <div className="flex  justify-between">
    <p><strong>Joined On:</strong></p>
    <p>12-12-2022</p>
  </div>
 
  <div className="flex  justify-between">
    <p><strong>Mobile No:</strong></p>
    <p>+91-9004753837</p>
  </div>
  <div className="flex justify-between">
    <p><strong>Department:</strong></p>
    <p>Marketing</p>
  </div>
 
  <div className="flex  justify-between">
    <p><strong>Branch Location:</strong></p>
    <p>Mumbai, Maharashtra</p>
  </div>
  <div className="flex justify-between">
    <p><strong>Email:</strong></p>
    <p>ajaybaniya0001@gmail.com</p>
  </div>
  <div className="flex justify-between">
    <p><strong>Position:</strong></p>
    <p>Digital Marketer</p>
  </div>
</div>





                        </div>

                    </div>


                </div>
               
                {/* <EmployeeSections/> */}
                


            </div>
        </div>
    );
}

export default EditEmployeeDirectory;