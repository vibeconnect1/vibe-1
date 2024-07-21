import React, { useState } from "react";
import OrganisationSetting from "./OrganisationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";


const AddressInformation = () => {
  const [isEditing, setIsEditing] = useState(false);

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
    // <div className="mt-2">
    //   <OrganisationPage/>
    <div className="flex gap-2 justify-between ml-20">
      <OrganisationSetting />
      <div className=" p-6 bg-white rounded-lg shadow-md w-2/3">
       
       {/* <h1 className="text-2xl font-bold mb-6">Basic Information</h1> */}
       <div className='flex justify-between'>
     <h2 className="text-2xl font-bold mb-6">Address Information</h2>
     <button 
       onClick={() => setIsEditing(!isEditing)} 
       className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
     >
       {isEditing ? 'Save' : 'Edit'}
     </button></div>
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
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
                readOnly={!isEditing}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
                readOnly={!isEditing}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">State/Province</label>
              <input
                type="text"
                name="stateProvince"
                value="Maharashtra"
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Zip/Pin Code</label>
              <input
                type="text"
                name="zipCode"
                value="787896"
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value="India"
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
                readOnly={!isEditing}
              />
            </div>

           

           

           
          </div>
         
        </form>
      </div>
        <HRMSHelpCenter help={"basic"} />
    </div>
  );
};

export default AddressInformation;
