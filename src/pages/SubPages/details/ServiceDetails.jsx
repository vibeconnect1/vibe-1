import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSoftServicesDetails } from "../../../api";

const ServiceDetails = () => {
  const themeColor = useSelector((state) => state.theme.color);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchServiceDetails = async () => {
      const ServiceDetailsResponse = await getSoftServicesDetails(id);
      setDetails(ServiceDetailsResponse.data);
      console.log(ServiceDetailsResponse)
    };
    fetchServiceDetails();
  }, []);
  const FormatedDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };
  return (
    <section>
      <div className="m-2">
        <h2
          style={{ background: themeColor }}
          className="text-center text-xl font-bold p-2  rounded-full text-white"
        >
          Service Details
        </h2>
        <div className="my-2 mb-10 border-2 p-2 px-5 rounded-md border-gray-400 mx-20">
          <div className="flex justify-end">
            <Link to={`/services/edit-service/${id}`} className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black transition-all duration-300 hover:text-white">
              <BiEditAlt />
              Edit Details
            </Link>
          </div>
          <div className="flex justify-center m-5">
            <h1 className="p-2 border-2 border-black px-28 text-xl rounded-md font-semibold">
              {details.name}
            </h1>
          </div>
          <div className="my-2 flex justify-end"></div>
          <div className="p-5 grid grid-cols-3 gap-5 bg-gray-200 rounded-md font-medium">
            <div className="grid grid-cols-2">
              <p>Building :</p>
              <p className="text-sm">{details.building_name}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Floor :</p>
              <p className="text-sm">{details.floor_name}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Room :</p>
              <p className="text-sm">{details.unit_name}</p>
            </div>

            {/* <p>Wing:</p>
            <p>Area:</p> */}
            {/* <p>Created By:</p> */}
            <div className="grid grid-cols-2">
              <p>Created On :</p>
              <p className="text-sm">{FormatedDate(details.created_at)}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Updated On :</p>
              <p className="text-sm">{FormatedDate(details.updated_at)}</p>
            </div>
          </div>
          {/* <h1 className="border-b border-black font-semibold my-5">Attachments</h1> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
