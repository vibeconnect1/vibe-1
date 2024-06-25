import React, { useState } from "react";
import OrganisationSetting from "./OrganisationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";

const BasicInformation = () => {
  const [formData, setFormData] = useState({
    companyName: "Vibecopilot",
    contactNumber: "9920012533",
    retirementAge: 58,
    minEmployeeAge: 1,
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
        <h1 className="text-2xl font-bold mb-6">Basic Information</h1>
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
                className="mt-1 p-2 w-full border rounded-md"
                disabled
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
                className="mt-1 p-2 w-full border rounded-md"
                disabled
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
                className="mt-1 p-2 w-full border rounded-md"
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
                className="mt-1 p-2 w-full border rounded-md"
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
                className="mt-1 p-2 w-full border rounded-md"
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
                className="mt-1 p-2 w-full border rounded-md"
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
                className="mt-1 p-2 w-full border rounded-md"
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
                className="mt-1 p-2 w-full border rounded-md"
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
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
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

export default BasicInformation;
