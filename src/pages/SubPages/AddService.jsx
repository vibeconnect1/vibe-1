import React from "react";

const AddService = () => {
  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Create Service
        </h2>
        <div className="mx-20 my-5 mb-10 border border-gray-400 p-5 px-10 rounded-lg shadow-xl">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold">
                Service Name:
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Service Name"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Select Site:
              </label>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Site</option>
                <option value="unit1">Site 1</option>
                <option value="unit2">Site 2</option>
                <option value="unit2">Site 3</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Select Room:
              </label>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Room</option>
                <option value="unit1">Room 1</option>
                <option value="unit2">Room 2</option>
                <option value="unit2">Room 3</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Select Floor:
              </label>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Floor</option>
                <option value="unit1">Floor 1</option>
                <option value="unit2">Floor 2</option>
                <option value="unit2">Floor 3</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold">
                Select Wing:
              </label>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Wing</option>
                <option value="unit1">Wing 1</option>
                <option value="unit2">Wing 2</option>
                <option value="unit2">Wing 3</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold">
                Select Building:
              </label>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Building</option>
                <option value="unit1">Building 1</option>
                <option value="unit2">Building 2</option>
                <option value="unit2">Building 3</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold">
                Select Area:
              </label>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Area</option>
                <option value="unit1">Area 1</option>
                <option value="unit2">Area 2</option>
                <option value="unit2">Area 3</option>
              </select>
            </div>
          </div>
          <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
            Attachments
          </h2>
          <input type="file" name="" id="" />
          <div className="flex gap-2 my-5 justify-end">
            <button className="bg-black text-white p-1 px-4 rounded-md font-medium">
              Save & Show Details
            </button>
            <button className=" border-black border-2 p-1 px-4 rounded-md font-medium">
              Save & Add PPM
            </button>
            <button className=" border-black border-2 p-1 px-4 rounded-md font-medium">
              Save & Create New Service
            </button>
            <button className="border-black border-2 p-1 px-4 rounded-md font-medium">
              Save & Add AMC
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
