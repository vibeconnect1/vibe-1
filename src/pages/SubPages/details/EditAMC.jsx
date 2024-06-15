import React, { useEffect, useState } from 'react'
import { EditAMCDetails, getAMCDetails, getEditAMCDetails, getVendors, postAMC } from '../../../api';
import { useParams } from 'react-router-dom';
import FileInputBox from '../../../containers/Inputs/FileInputBox';
import toast from 'react-hot-toast';

const EditAssetAMC = () => {
  const [vendors, setVendors] = useState([]);
  const [update, setUpdate] = useState(false);
  const {id}= useParams()
  const [formData, setFormData] = useState({
    vendor_id: "",
    asset_id: id,
    start_date: "",
    end_date: "",
    frequency: "",
    terms: [],
  });


  useEffect(() => {
    const fetchVendors = async () => {
      const vendorResp = await getVendors();
      setVendors(vendorResp.data);
    };
    const fetchAMCDetails = async () => {
      const amcResponse = await getEditAMCDetails(id);
      setFormData(amcResponse.data)
      console.log(amcResponse);
    };
    fetchVendors();
    fetchAMCDetails();
    // console.log(amcDetails.asset_name);
  }, [update]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleEditAMC = async () => {
   
    try {
      const res = await EditAMCDetails(formData, id);
      console.log(res);
      setUpdate(true);
      toast.success("AMC Edited Successfully")
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="flex flex-col">
          <h2 className="border-b  text-xl border-black font-semibold">
            Edit AMC
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
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="half yearly">Half yearly</option>
                <option value="yearly">Yearly</option>
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
          <div className="flex justify-center my-5" >
            <button
              className="bg-black p-1 px-4 text-white rounded-md"
              onClick={handleEditAMC}
            >
              Submit
            </button>
          </div>
        </div>

      </div>
      </div>
      </section>
  )
}

export default EditAssetAMC
