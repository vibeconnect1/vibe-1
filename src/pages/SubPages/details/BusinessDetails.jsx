import React from "react";
import { BiEdit } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

const BusinessDetails = () => {
  const { id } = useParams();
  return (
    <div className="p-4 w-screen">
      <h1 className="text-center bg-black p-2 text-white rounded-md font-medium">
        Business Details
      </h1>
      <div className="m-5 flex justify-end">
        <Link  className="border-2 border-black rounded-md font-medium p-2 flex gap-2 items-center px-4">
          <BiEdit />
          Edit
        </Link>
      </div>
      <div className="grid grid-cols-3 m-5 border p-4 font-medium bg-gray-200 rounded-md gap-5">
        <p className="">Comapny Name: </p>
        <p>Contact Person Name: </p>
        <p>Mobile: </p>
        <p>Landline: </p>
        <p>Primary Email: </p>
        <p>Secondary Email: </p>
        <p>Website: </p>
        <p>Address: </p>
        <p>Category:</p>
        <p>Sub Category:</p>
        <p>Key Offering:</p>
        <p>Description:</p>
        <p>Profile:</p>
        <p>Attachments:</p>
      </div>
    </div>
  );
};

export default BusinessDetails;
