import React from "react";

const PatrollingDetails = () => {
  return (
    <section>
      <div className="flex  justify-center bg-black m-4 p-2 rounded-md">
        <h2 className="text-xl font-semibold text-center text-white ">
          Patrolling Details
        </h2>
      </div>
      <div className="flex flex-col items-center mx-10">

        <div className=" flex justify-end w-full">

        </div>
        <div className="grid grid-cols-3 w-full gap-5 my-5">
        <p  className="text-xl font-medium">Building :</p>
        <p  className="text-xl font-medium">Wing :</p>
        <p  className="text-xl font-medium">Floor :</p>
        <p  className="text-xl font-medium">Room :</p>
          <p  className="text-xl font-medium">Start Time :</p>
          <p  className="text-xl font-medium">End Time :</p>

        </div>
      </div>
    </section>
  );
};

export default PatrollingDetails;