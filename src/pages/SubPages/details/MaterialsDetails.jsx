import React from "react";

const MaterialDetails = () => {
  return (
    <section>
      <div className="flex  justify-center bg-black m-4 p-2 rounded-md">
        <h2 className="text-xl font-semibold text-center text-white ">
          Material Details
        </h2>
      </div>
      <div className="flex flex-col items-center mx-10">

        <div className=" flex justify-end w-full">

        </div>
        <div className="grid grid-cols-3 w-full gap-5 my-5">
        <p  className="text-xl font-medium">Person Name :</p>
        <p  className="text-xl font-medium">No of items :</p>
        <p  className="text-xl font-medium">Vehicle number :</p>
        <p  className="text-xl font-medium">Description  :</p>
        <p  className="text-xl font-medium">Add Attachment  :</p>

        </div>
      </div>
    </section>
  );
};

export default MaterialDetails;