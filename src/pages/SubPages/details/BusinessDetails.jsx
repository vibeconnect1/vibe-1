import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getContactBookDetails } from "../../../api";

const BusinessDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const themeColor = useSelector((state) => state.theme.color);
  useEffect(() => {
    const fetchContactBookDetails = async () => {
      try {
        const detailsRes = await getContactBookDetails(id);
        setDetails(detailsRes.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContactBookDetails();
  }, []);
  return (
    <div className="p-4 w-screen">
      <h1
        style={{ background: themeColor }}
        className="text-center bg-black p-2 text-white rounded-md font-medium"
      >
        Contact Details
      </h1>
      <div className="m-5 flex justify-end">
        <Link className="border-2 border-black rounded-md font-medium p-1 flex gap-2 items-center px-4" to={`/business/edit-contact/${id}`}>
          <BiEdit />
          Edit
        </Link>
      </div>
      <div className="grid m-5 p-4  bg-gray-100 rounded-md gap-5">
        <div className="grid lg:grid-cols-3   bg-gray-100 rounded-md gap-5">
          <div className="grid grid-cols-2 gap-2">
            <p className="font-medium">Comapny Name : </p>
            <p className="">{details.company_name}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="font-medium">Contact Person Name : </p>
            <p className="">{details.contact_person_name}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="font-medium">Mobile : </p>
            <p className="">{details.mobile}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="font-medium">Landline : </p>
            <p className="">{details.landline_no}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="font-medium">Primary Email : </p>
            <p className="">{details.primary_email}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="font-medium">Secondary Email : </p>
            <p className="">{details.secondary_email}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="font-medium">Website : </p>
            <p className="">{details.website}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="font-medium">Category : </p>
            <p className=""></p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="font-medium">Sub Category : </p>
            <p className=""></p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="font-medium">Key Offering : </p>
            <p className="">{details.key_offering}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-medium">Address : </p>
          <p className="bg-gray-200 p-1 rounded-md">dfdskj</p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium">Description : </p>
          <p className="bg-gray-200 p-1 rounded-md">dfdskj</p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium">Profile : </p>
          <p className="bg-gray-200 p-1 rounded-md">dfdskj</p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium">Attachments : </p>
          <p className="bg-gray-200 p-1 rounded-md">No Attachments</p>
        </div>
       
      </div>
    </div>
  );
};

export default BusinessDetails;
