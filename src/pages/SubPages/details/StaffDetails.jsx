import React from "react";

const StaffDetails = () => {
  return (
    <section>
      <div className="flex  justify-center bg-black m-4 p-2 rounded-md">
        <h2 className="text-xl font-semibold text-center text-white ">
          Staff Details
        </h2>
      </div>
      <div className="flex flex-col items-center mx-10">

        <div className=" flex justify-end w-full">

        </div>
        <div className="grid grid-cols-3 w-full gap-5 my-5">
        <p  className="text-xl font-medium">First Name :</p>
        <p  className="text-xl font-medium">Last Name :</p>
        <p  className="text-xl font-medium">Email :</p>
        <p  className="text-xl font-medium">Password :</p>
          <p  className="text-xl font-medium">Mobile :</p>
          <p  className="text-xl font-medium">Unit :</p>
          <p  className="text-xl font-medium">Department:</p>
          <p  className="text-xl font-medium">Work Type :</p>
          <p  className="text-xl font-medium">Staff ID :</p>
          <p  className="text-xl font-medium">Vendor Name :</p>
          <p  className="text-xl font-medium">Valid From :</p>
          <p  className="text-xl font-medium">Valid Till :</p>
          <p  className="text-xl font-medium">Status :</p>
        </div>
      </div>
    </section>
  );
};

export default StaffDetails;