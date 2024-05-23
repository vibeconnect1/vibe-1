import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";

const AddBirthdayModal = ({ onclose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold text-center text-xl">Create Birthday</h1>
        <div className="flex gap-2 justify-center items-center">
          {selectedImage && (
            <div className="mt-4">
              <img src={selectedImage} alt="Selected" className="max-w-40" />
            </div>
          )}
          <input type="file" onChange={handleImageChange} />
        </div>
        <form action="" className="grid grid-cols-2 px-5 gap-x-5 gap-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm font-bold">
              First Name :
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter First Name"
              className="border rounded-md border-gray-500 p-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm font-bold">
              Last Name :
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Last Name"
              className="border rounded-md border-gray-500 p-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm font-bold">
              Date of Birth :
            </label>
            <input
              type="date"
              name=""
              id=""
              className="border rounded-md border-gray-500 p-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm font-bold">
              Contact No :
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Contact Number"
              className="border rounded-md border-gray-500 p-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <label htmlFor="" className="text-sm font-bold">
              Email :
            </label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Agreement Start Date"
              className="border rounded-md border-gray-500 p-1 px-2"
            />
          </div>
        </form>
        <button className="bg-black p-2 px-4 text-white rounded-md my-5">
          Create
        </button>
      </div>
    </ModalWrapper>
  );
};

export default AddBirthdayModal;
