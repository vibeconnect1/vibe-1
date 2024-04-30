import React from "react";

const FacilityBooking = () => {
  return (
    <section className="w-screen">
      <div className="flex flex-col">
        <div className="flex  justify-center bg-black m-4 p-2 rounded-md">
          <h2 className="text-xl font-semibold text-center text-white ">
            Book Facility
          </h2>
        </div>
        <div className="border-2 mx-20 p-4">
          <div className="flex justify-center my-5">
            <div className="flex gap-10">
              <div className="flex gap-2">
                <input type="radio" name="user" id="fm" />
                <label htmlFor="fm">FM User</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="user" id="occupant" />
                <label htmlFor="occupant">Occupant User</label>
              </div>
            </div>
          </div>
          <div className="mx-5 flex justify-around">
            <div className="flex flex-col gap-2">
              <p className="font-bold">Select User :</p>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Choose User</option>
                <option value="user1">User 1</option>
                <option value="User2">User 2</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Select Facility :</p>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Choose Facility</option>
                <option value="user1">Facility 1</option>
                <option value="User2">Facility 2</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityBooking;
