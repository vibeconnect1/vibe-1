import React, { useEffect, useState } from "react";
import ModalWrapper from "../../../containers/modals/ModalWrapper";
import { BiEdit, BiSolidEdit } from "react-icons/bi";
import { getSiteDetails } from "../../../api";
import { id } from "date-fns/locale";
import { AiOutlineClose } from "react-icons/ai";

const EditSite = ({ onclose, id }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    siteName: "",
    region: "",
    features: [],
  });
  useEffect(() => {
    const fetchSiteDetails = async () => {
      try {
        const siteDetailsResp = await getSiteDetails(id);
        console.log(siteDetailsResp.data);
        setFormData({
          ...formData,
          siteName: siteDetailsResp.data.name,
          region: siteDetailsResp.data.region,
          features: siteDetailsResp.data.feature,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchSiteDetails();
  }, [id]);
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-20">
      <div className="bg-white overflow-auto max-h-[70%]  md:w-auto w-96 p-4 px-8 flex flex-col rounded-md gap-5">
        <button className="place-self-end" onClick={onclose}>
          <AiOutlineClose size={20} />
        </button>
        <div className="flex flex-col justify-center text-base w-full">
          <h2 className="flex gap-4 items-center justify-center font-medium text-lg mb-2 border-b-2 border-black">
            <BiSolidEdit />
            Edit Site
          </h2>
          <div className="grid grid-cols-2 gap-5 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-base font-medium">
                Company Name :
              </label>
              <select className="border border-black p-1 px-2 rounded-md font-normal">
                <option>Vibe</option>
                <option>Digielves</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-base font-medium">
                Site Name :{" "}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border border-black p-1 px-2 rounded-md font-normal"
                value={formData.siteName}
              />
            </div>
          </div>

          {/* <div className="flex justify-end">
          <button className="bg-black p-1 px-4 py-2 border-2 rounded-md text-white font-medium border-black ">
            Add Role
          </button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default EditSite;
