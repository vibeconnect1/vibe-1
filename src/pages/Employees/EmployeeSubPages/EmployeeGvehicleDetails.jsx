import React from "react";

const EmployeeGVehiclesDetails = () => {
  return (
    <section>
      <div className="flex  justify-center bg-black m-4 p-2 rounded-md">
        <h2 className="text-xl font-semibold text-center text-white ">
          Task Details
        </h2>
      </div>
      <div className="flex flex-col items-center mx-10">

        <div className=" flex justify-end w-full">

        </div>
        <div className="grid grid-cols-3 w-full gap-5 my-5">

          <p  className="text-xl font-medium">Vehicle Number :</p>
          <p  className="text-xl font-medium">Category :</p>
          <p  className="text-xl font-medium">Staff Name:</p>
          <p  className="text-xl font-medium">In Date :</p>
          <p  className="text-xl font-medium">In Time :</p>
          <p  className="text-xl font-medium">Out Date :</p>
          <p  className="text-xl font-medium">Out Time :</p>

        </div>
      </div>
    </section>
  );
};

export default EmployeeGVehiclesDetails;