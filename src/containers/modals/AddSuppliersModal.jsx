import React from "react";
import ModalWrapper from "./ModalWrapper";
import { IoAddCircle } from "react-icons/io5";

const AddSuppliers = ({ onclose} ) => {
  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col justify-center">
        <h2 className="flex gap-4 items-center justify-center font-bold text-lg">
          <IoAddCircle size={20} />
          Add Supplier
        </h2>
        <div>
          <div>
            <h2 className="font-medium border-b-2 border-black">
              Company Info
            </h2>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2 my-2">
              <input
                type="text"
                name=""
                placeholder="Company Name"
                id=""
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Primary Email"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Primary Phone"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Secondary Phone"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="GST"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="PAN"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
              <select
                className="border p-1 px-4 border-gray-500 rounded-md"
                // value={formData.vendor}
                // onChange={handleChange}
                name="vendor"
              >
                <option value="">Select Supplier Type</option>
                <option value="vendor 1">PPM</option>
                <option value="unit2">Manufacturer</option>
                <option value="unit2">AMC</option>
              </select>
            </div>
            <h2 className="font-medium border-b-2 border-black">Address</h2>
            <div className="grid sm:grid-cols-3 grid-cols-2 gap-2 my-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Address line 1"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Address line 2"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="City"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="State"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Country"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Pincode"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-black p-1 px-4 border-2 rounded-md text-white font-medium border-black hover:bg-white hover:text-black transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddSuppliers;
