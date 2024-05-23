import React from "react";

const EmployeeBookParking = () => {
  return (
    <section className="w-screen">
      <div className="flex flex-col mb-10">
        <div className="flex justify-center bg-black mx-5 my-2  p-2 rounded-md">
          <h2 className="text-xl font-semibold text-center text-white ">
            Book Parking
          </h2>
        </div>
        <div className="md:border border-gray-400 rounded-md md:mx-20 p-4">
          <div className="flex justify-between gap-4 md:gap-0 md:flex-row flex-col">
            <div className="grid grid-cols-2 items-center ">
              <label htmlFor="" className="font-bold">
                Select Date :
              </label>
              <input
                type="date"
                name=""
                id=""
                className="border p-[2px] px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <p className="font-bold">Select Tower :</p>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Choose Tower</option>
                <option value="user1">Tower 1</option>
                <option value="User2">Tower 2</option>
              </select>
            </div>
            <div className="grid grid-cols-2 items-center ">
              <p className="font-bold">Select Floor :</p>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Choose Floor</option>
                <option value="user1">Floor 1</option>
                <option value="User2">Floor 2</option>
              </select>
            </div>
          </div>

          <div className="my-5">
            <h2 className="border-b text-xl border-black font-semibold">
              Select Slot
            </h2>
            <div className="flex md:flex-row flex-col gap-4 justify-between my-2 md:gap-2">
              <div className="grid grid-cols-2 items-center">
                <p className="font-bold">From :</p>
                <input
                  type="time"
                  name=""
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <p className="font-bold">To :</p>
                <input
                  type="time"
                  name=""
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label className="font-bold">Vehicle Type :</label>
                <select className="border p-1 px-4 border-gray-500 rounded-md">
                  <option value="">Select Vehicle Type</option>
                  <option value="4 wheeler">4 Wheeler</option>
                  <option value="2 wheeler">2 Wheeler</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="p-2 px-4 bg-black text-white hover:bg-white hover:text-black rounded-md border-2 border-black font-medium transition-all duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeBookParking;
