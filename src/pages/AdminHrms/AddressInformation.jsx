import React, { useState } from "react";
import OrganisationSetting from "./OrganisationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";

const AddressInformation = () => {
  const [formData, setFormData] = useState({
    companyName: "Bodyprocoach Pvt Ltd",
    contactNumber: "9920012533",
    retirementAge: 58,
    minEmployeeAge: 1,
    inactiveAccessDays: 0,
    lastWorkingDateBeforeResignation: "Yes",
    probationPeriod: 90,
    unauthorizedAbsenceRate: 7,
    overwriteEmail: "Yes",
    addressLine1: "244/1952 Motilalnagar no.1, New Link Road",
    addressLine2: "Near Vibgyor school, Goregaon West",
    country: "",
    stateProvince: "",
    city: "Mumbai",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-between ml-20">
      <OrganisationSetting />
      <div className=" p-2 bg-white rounded-lg shadow-md w-full ">
        <h1 className="text-2xl font-bold mt-2 mb-6">Address Information</h1>
        <form onSubmit={handleSubmit}>
          {/* Existing Company Information Fields */}

          <div className="grid grid-cols-2 gap-5 ">
            {/* Address Information Fields */}
            <div className="mb-4 ">
              <label className="block text-gray-700">Address Line 1</label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">State/Province</label>
              <input
                type="text"
                name="stateProvince"
                value={formData.stateProvince}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Zip/Pin Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
        <HRMSHelpCenter help={"basic"} />
    </div>
  );
};

export default AddressInformation;
