import React, { useEffect, useState } from "react";
import Detail from "../../../../containers/Detail";
import { useSelector } from "react-redux";
import { getVendors } from "../../../../api";
import FileInputBox from "../../../../containers/Inputs/FileInputBox";

const AMCDetails = () => {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    const fetchVendors = async () => {
      const vendorResp = await getVendors();
      setVendors(vendorResp.data);
    };
    fetchVendors();
    console.log(vendors);
  }, []);

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
              <p>Vendor :</p>
              <p className="text-sm font-normal "></p>
            </div>
            <div className="grid grid-cols-2">
              <p>Start Date : </p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>End Date : </p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Frequency : </p>
              <p className="text-sm font-normal"></p>
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
                name=""
                id=""
                className="border p-1 px-4 border-gray-500 rounded-md"
              >
                <option value="">Select Vendor</option>
                {vendors.map((vendor) => {
                  <option value={vendor.id} key={vendor.id}>
                    {vendor.company_name}
                  </option>;
                })}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Start Date :</label>
              <input
                type="date"
                name=""
                id=""
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">End Date :</label>
              <input
                type="date"
                name=""
                id=""
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Frequency :
              </label>
              <select
                name=""
                id=""
                className="border p-1 px-4 border-gray-500 rounded-md"
              >
                <option value="">Select Frequency</option>
                <option value="">One Time</option>
                <option value="">Hourly</option>
                <option value="">Daily</option>
                <option value="">Weekely</option>
                <option value="">Monthly</option>
                <option value="">Quarterly</option>
                <option value="">Half yearly</option>
                <option value="">Yearly</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="border-b  text-xl border-black font-semibold my-2">
              Upload AMC Terms
            </h2>
            <FileInputBox
            // handleChange={(event) => handleFileChange(event, "others")}
            />
          </div>
          <div className="flex justify-center my-5">
            <button className="bg-black p-1 px-4 text-white rounded-md">Submit</button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default AMCDetails;
