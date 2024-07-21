import React, { useState } from "react";
import OrganisationSetting from "./OrganisationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";


const BasicInformation = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "Vibecopilot",
    contactNumber: "9920012533",
    retirementAge: 58,
    minEmployeeAge: 18,
    inactiveAccessDays: 0,
    lastWorkingDateBeforeResignation: "Yes",
    probationPeriod: 90,
    unauthorizedAbsenceRate: 7,
    overwriteEmail: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
   
    <div className="flex ml-20 justify-between">
      <OrganisationSetting />

      <div className=" p-6 bg-white rounded-lg shadow-md">
       
        {/* <h1 className="text-2xl font-bold mb-6">Basic Information</h1> */}
        <div className='flex justify-between'>
      <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
      <button 
        onClick={() => setIsEditing(!isEditing)} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button></div>
        <form>
          <div className="grid grid-cols-2 gap-2">
            <div className="mb-4">
              <label className="block text-gray-700">
                Registered Name of your Company
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
                readOnly={!isEditing}
                
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Company Contact Number
              </label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing}
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Company's Retirement Age
              </label>
              <input
                type="number"
                name="retirementAge"
                value={formData.retirementAge}
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Minimum Age for a Person to be an Employee
              </label>
              <input
                type="number"
                name="minEmployeeAge"
                value={formData.minEmployeeAge}
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
                readOnly={!isEditing}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Inactive Employees Access Days from Last Working Date
              </label>
              <input
                type="number"
                name="inactiveAccessDays"
                value={formData.inactiveAccessDays}
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Last Working Date can be before Resignation Date?
              </label>
              <select
                name="lastWorkingDateBeforeResignation"
                value={formData.lastWorkingDateBeforeResignation}
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Default Probation Period (in days)
              </label>
              <input
                type="number"
                name="probationPeriod"
                value={formData.probationPeriod}
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Unauthorised Absence Rate
              </label>
              <input
                type="number"
                name="unauthorizedAbsenceRate"
                value={formData.unauthorizedAbsenceRate}
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
                readOnly={!isEditing}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Do you want to overwrite old email ID if the same ID is used?
              </label>
              <select
                name="overwriteEmail"
                value={formData.overwriteEmail}
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
                readOnly={!isEditing}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
         
        </form>
        <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg">
          <h2 className="text-xl font-semibold mb-4">VibeCopilot</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between">
              <span className="font-medium">Location At:</span>
              <span>Mumbai; Maharashtra</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">No.Of Employees::</span>
              <span>20</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Authorised Signatory::</span>
              <span>ABC</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">No. of Admins::</span>
              <span>3</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">No. Of Payrolls Run::</span>
              <span>12</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Part Of Vibe Connect Since::</span>
              <span>23/20/2023</span>
            </div>
            {/* <div className="flex justify-between">
              <span className="font-medium">Actual Check Out:</span>
              <span>08:21 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Requested Check In:</span>
              <span>04:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Requested Check Out:</span>
              <span>08:21 PM</span>
            </div> */}
          </div>
          {/* <div className="mt-4">
            <span className="font-medium">Comments and History</span>
          </div> */}
          </div>
      </div>
      <HRMSHelpCenter help={"basic"} />
    </div>
  );
};

export default BasicInformation;
