import React from "react";

const AddParking = () => {
  return (
    <section className="w-screen">
      <div className="flex flex-col mb-10">
        <div className="flex justify-center bg-black mx-5 my-2  p-2 rounded-md">
          <h2 className="text-xl font-semibold text-center text-white ">
            Book Parking
          </h2>
        </div>
        <div className="md:border border-gray-400 rounded-md md:mx-20 p-4">
          <div className="flex md:grid  grid-cols-4 justify-between gap-4 md:flex-row flex-col">
            <div className="flex flex-col">
              {/* <div className="grid grid-cols-2 items-center"> */}
              <p className="font-semibold">Select Tower :</p>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Tower</option>
                <option value="user1">Tower 1</option>
                <option value="User2">Tower 2</option>
              </select>
            </div>
            {/* <div className="grid grid-cols-2 items-center "> */}
            <div className="flex flex-col">
              <p className="font-semibold ">Select Floor :</p>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Floor</option>
                <option value="user1">Floor 1</option>
                <option value="User2">Floor 2</option>
              </select>
            </div>
            {/* <div className="grid grid-cols-2 items-center "> */}
            <div className="flex flex-col">
              <p className="font-semibold ">Select Parking Slot :</p>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Parking Slot</option>
                <option value="all">All</option>
                <option value="EV">EV</option>
                <option value="visitor">Visitor</option>
              </select>
            </div>
            <div className="flex justify-center mt-5">
              <button className="p-1 px-4 border-2 border-black rounded-md font-semibold hover:bg-black hover:text-white transition-all duration-300">
                Submit
              </button>
            </div>
          </div>

          <div className="my-5">
            <div className="flex md:grid grid-cols-3 flex-col gap-4 justify-between my-2 md:gap-2">
            <div className="flex flex-col">
                <p className="font-semibold ">Employee Name :</p>
                <select className="border p-1 px-4 border-gray-500 rounded-md">
                  <option value="">Select Employee</option>
                  <option value="all">Employee A</option>
                  <option value="EV">Employee B</option>
                  <option value="visitor">Employee C</option>
                </select>
              </div>
              <div>

              <div className="grid grid-cols-2 items-center ">
                <p className="font-semibold ">Free Slot :</p>
                <p>10</p>
              </div>
              <div className="grid grid-cols-2 items-center ">
                <p className="font-semibold ">Paid Slot :</p>
                <p>10</p>
              </div>
              </div>
              <div className="grid grid-cols-2 items-center ">
                <p className="font-semibold ">Available Slot :</p>
                <p>10</p>
              </div>
              {/* <div className="grid grid-cols-2 items-center">
                <p className="font-semibold">From :</p>
                <input
                  type="time"
                  name=""
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <p className="font-semibold">To :</p>
                <input
                  type="time"
                  name=""
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div> */}
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold">Vehicle Type :</label>
                <select className="border p-1 px-4 border-gray-500 rounded-md">
                  <option value="">Select Vehicle Type</option>
                  <option value="4 wheeler">4 Wheeler</option>
                  <option value="2 wheeler">2 Wheeler</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="p-1 px-4 bg-black text-white hover:bg-white hover:text-black rounded-md border-2 border-black font-medium transition-all duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddParking;
