import React from 'react';
import { useSelector } from 'react-redux';

const AddRVehicles = () => {
  const themeColor = useSelector((state)=> state.theme.color)
  return (
    <div className="flex justify-center items-center  w-full p-4">
      <form className="border border-gray-300 rounded-lg p-4 w-full mx-4">
        <h2 style={{background: themeColor}} className="text-center md:text-xl font-bold p-2 bg-black rounded-full text-white">
          Add Vehicles
        </h2>

        <div className="grid md:grid-cols-3 gap-5 my-2">
          <div className="flex flex-col">
            <label htmlFor="slotNumber" className="font-semibold">
              Slot Number
            </label>
            <input
              type="text"
              id="slotNumber"
              name="slotNumber"
              placeholder="Enter Slot Number"
              className="border p-2 rounded-md border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="vehicleCategory" className="font-semibold">
              Vehicle Category
            </label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>Select Vehicle Category</option>
              <option>2 Wheeler</option>
              <option>4 Wheeler</option>
              
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="vehicleType" className="font-semibold">
              Vehicle Type
            </label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>Select Vehicle Type</option>
              <option>SUV</option>
              <option>Sedan</option>
              <option>Hatchback </option>
              <option>Bike</option>
              <option>Truck</option>
             
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="stickerNumber" className="font-semibold">
              Sticker Number
            </label>
            <input
              type="text"
              id="stickerNumber"
              name="stickerNumber"
              placeholder="Enter Sticker Number"
              className="border p-2 rounded-md border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="registrationNumber" className="font-semibold">
              Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              placeholder="Enter Registration Number"
              className="border p-2 rounded-md border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="insuranceNumber" className="font-semibold">
              Insurance Number
            </label>
            <input
              type="text"
              id="insuranceNumber"
              name="insuranceNumber"
              placeholder="Enter Insurance Number"
              className="border p-2 rounded-md border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="insuranceValidTill" className="font-semibold">
              Insurance Valid Till
            </label>
            <input
              type="date"
              id="insuranceValidTill"
              name="insuranceValidTill"
              className="border p-2 rounded-md border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="font-semibold">
              Category
            </label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>Select Category</option>
              <option>Owned</option>
              <option>Staff</option>
              <option>Leased</option>
              <option>warehouse</option>
              <option>workshop</option>
              
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="vehicleNumber" className="font-semibold">
              Vehicle Number
            </label>
            <input
              type="text"
              id="vehicleNumber"
              name="vehicleNumber"
              placeholder="Enter Vehicle Number"
              className="border p-2 rounded-md border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="unit" className="font-semibold">
              Unit
            </label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>Select Unit</option>
              {/* Add options here */}
            </select>
          </div>
        </div>

        <div className="flex gap-5 justify-center items-center my-4">
          <button
            type="submit"
            className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-semibold py-2 px-4 rounded transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRVehicles;