import React, { useEffect, useState } from "react";
import Detail from "../../../../containers/Detail";
import { useSelector } from "react-redux";
import { getAMCDetails, getVendors, postAMC } from "../../../../api";
import FileInputBox from "../../../../containers/Inputs/FileInputBox";
import { useParams } from "react-router-dom";

const AMCDetails = () => {
  const {id}= useParams()
  const [vendors, setVendors] = useState([]);
  const [amcDetails,setAmcDetails ] = useState([])
  const [formData, setFormData] = useState({
    vendor_id: "",
    asset_id: id,
    start_date: "",
    end_date: "",
    frequency: "",
    terms: [],
  });
// console.log(formData)

  // vendor_id, :asset_id, :start_date, :end_date, :frequency},
  // terms: [multipart-files]}

  useEffect(() => {
    const fetchVendors = async () => {
      const vendorResp = await getVendors();
      setVendors(vendorResp.data);
      
     
    };
    const fetchAMCDetails = async () => {
      const amcResponse = await getAMCDetails();
      setAmcDetails(amcResponse.data)
      console.log(amcResponse)
     
    };
    fetchVendors();
    fetchAMCDetails()
    console.log(amcDetails.asset_name)
  }, []);

  const handlePostAMC = async () => {
    try {
      const res = await postAMC(formData);
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (files, fieldName) => {
    // Changed to receive 'files' directly
    setFormData({
      ...formData,
      [fieldName]: files,
    });
    console.log(fieldName);
  };

  return (
    <section>
      <div className="m-2">
        <div className="border-2 flex flex-col my-5 p-4 gap-4 rounded-md border-gray-400">
          <h2 className="border-b  text-xl border-black font-semibold">
            AMC Details
          </h2>
          {/* <div className=" flex sm:flex-row flex-col gap-5 justify-between "> */}
          <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
            <div className="grid grid-cols-2 items-center">
              <p>Asset :</p>
              <p className="text-sm font-normal ">{amcDetails.asset_name}</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Vendor :</p>
              <p className="text-sm font-normal ">{amcDetails.vendor_name}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Start Date : </p>
              <p className="text-sm font-normal">{amcDetails.start_date}</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>End Date :</p>
              <p className="text-sm font-normal">{amcDetails.end_date}</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Frequency : </p>
              <p className="text-sm font-normal">{amcDetails.frequency}</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Created On : </p>
              <p className="text-sm font-normal">{amcDetails.created_at}</p>
            </div>
          </div>
          <h2 className="border-b  text-xl border-black font-semibold">
            AMC Terms Attachments
          </h2>
          <p>No Attachments</p>
        </div>
        <div className="flex flex-col">
          <h2 className="border-b  text-xl border-black font-semibold">
            Add AMC
          </h2>
          <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col">
              <label htmlFor="">Vendor :</label>
              <select
                name="vendor_id"
                id=""
                value={formData.vendor_id}
                onChange={handleChange}
                className="border p-1 px-4 border-gray-500 rounded-md"
              >
                <option value="">Select Vendor</option>
                {vendors.map((vendor) => (
                      <option value={vendor.id} key={vendor.id}>
                        {vendor.company_name}
                      </option>
                    ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Start Date :</label>
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                id=""
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">End Date :</label>
              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                id=""
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Frequency :
              </label>
              <select
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                id=""
                className="border p-1 px-4 border-gray-500 rounded-md"
              >
                <option value="">Select Frequency</option>
                <option value="one Time">One Time</option>
                <option value="Hourly">Hourly</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Half yearly">Half yearly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="border-b  text-xl border-black font-semibold my-2">
              Upload AMC Terms
            </h2>
            <FileInputBox
            handleChange={(event) => handleFileChange(event, "terms")}
            />
          </div>
          <div className="flex justify-center my-5">
            <button className="bg-black p-1 px-4 text-white rounded-md" onClick={handlePostAMC}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default AMCDetails;
