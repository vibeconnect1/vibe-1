import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSoftServicesDetails } from "../../../api";
import { FaQrcode } from "react-icons/fa";
import AssetQrCode from "./assetSubDetails/AssetQrCode";

const ServiceDetails = () => {
  const themeColor = useSelector((state) => state.theme.color);
  const [details, setDetails] = useState([]);
  const [qrCode, setQrCode] = useState(false);
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
  const domainPrefix = "https://admin.vibecopilot.ai";
  console.log(details.qr_code_image_url)
 
  return (
    <section>
      <div className="m-2">
        <h2
          style={{ background: themeColor }}
          className="text-center text-xl font-bold p-2 rounded-full text-white"
        >
          Service Details
        </h2>
        <div className="my-2 mb-10 md:border-2 p-2 px-5 rounded-md border-gray-400 md:mx-20">
          <div className="flex gap-2 justify-end">
          <button
                className="flex gap-2 items-center justify-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white transition-all duration-500"
                onClick={() => setQrCode(true)}
              >
                <FaQrcode /> QR Code
              </button>
            <Link to={`/services/edit-service/${id}`} className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black transition-all duration-300 hover:text-white">
              <BiEditAlt />
              Edit Details
            </Link>
          </div>
          <div className="flex justify-center m-5">
            <h1 className="p-2 border-2 border-black md:px-28 text-xl rounded-md font-semibold">
              {details.name}
            </h1>
          </div>
          <div className="my-2 flex justify-end"></div>
          <div className="p-5 grid md:grid-cols-3 gap-5 bg-gray-100 rounded-md font-medium">
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
          <h1 className="border-b border-black font-semibold my-5">Attachments</h1>
          <div className="flex  gap-4 flex-wrap my-4 items-center  text-center">
                  {details.attachments &&
                  details.attachments.length > 0
                    ? details.attachments.map((doc, index) => (
                        <div key={doc.id} className="">
                          {isImage(domainPrefix + doc.document) ? (
                            <img
                              src={domainPrefix + doc.document}
                              alt={`Attachment ${index + 1}`}
                              className="w-40 h-28 object-cover rounded-md"
                              onClick={() =>
                                window.open(doc.document, "_blank")
                              }
                            />
                          ) : (
                            <a
                              href={domainPrefix + doc.document}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="attachment-link hover:text-blue-400 transition-all duration-300  text-center flex flex-col items-center  "
                            >
                              <FaRegFileAlt size={50} />
                              {getFileName(doc.document)}
                            </a>
                          )}
                        </div>
                      ))
                    : (<p className="text-center w-full">No Attachments</p>)}
                </div>
          {qrCode && <AssetQrCode assetName={details.name} onClose={() => setQrCode(false)} QR={domainPrefix + details.qr_code_image_url
} />}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
