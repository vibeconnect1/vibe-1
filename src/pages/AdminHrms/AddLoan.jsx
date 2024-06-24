import React, { useState } from "react";
import AdminHRMS from "./AdminHrms";

const AddLoan = () => {
  const [formData, setFormData] = useState({
    categoryLabel: "",
    labelName: "",
    termOfLoan: "",
    modeOfDisbursement: "Off Line",
    variableAllowance: "",
    modeOfEMIRecovery: "Salary",
    loanPrefix: "",
    loanStartNumber: "",
    loanSuffix: "",
    interestRate: "",
    interestCalculation: "Simple Interest(only on Principal)",
    interestCalculationStart: "From Loan Grant Date",
    perqsApplicable: "No",
    maxAmount: "",
    employeeRestrictions: "Yes",
    applicableEmployees: "All Employees",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex gap-10 ml-20">
      <AdminHRMS />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full ">
          <p className="font-semibold">Add New Loan or Advance</p>
          <form className=" grid grid-cols-3 items-center gap-4">
            <div>
              <label className="block text-gray-700">Category Label *</label>
              <input
                type="text"
                name="categoryLabel"
                value={formData.categoryLabel}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Label Name</label>
              <input
                type="text"
                name="labelName"
                value={formData.labelName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Term of Loan in months *
              </label>
              <input
                type="number"
                name="termOfLoan"
                value={formData.termOfLoan}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Mode of Loan Disbursement
              </label>
              <select
                name="modeOfDisbursement"
                value={formData.modeOfDisbursement}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="Off Line">Off Line</option>
                {/* Add more options if needed */}
              </select>
            </div>

            {formData.modeOfDisbursement === "With Salary" && (
              <div>
                <label className="block text-gray-700">
                  Variable Allowance this category is linked to *
                </label>
                <select
                  name="variableAllowance"
                  value={formData.variableAllowance}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                >
                  <option value="">Select Allowance</option>
                  {/* Add options here */}
                </select>
              </div>
            )}

            <div>
              <label className="block text-gray-700">
                Mode of EMI Recovery
              </label>
              <select
                name="modeOfEMIRecovery"
                value={formData.modeOfEMIRecovery}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="Salary">Salary</option>
                {/* Add more options if needed */}
              </select>
            </div>

            <div>
              <label className="block text-gray-700">
                Loan Number Series Format *
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="loanPrefix"
                  placeholder="Prefix Text"
                  value={formData.loanPrefix}
                  onChange={handleChange}
                  className="w-1/3 px-4 py-2 border rounded-md"
                />
                <input
                  type="number"
                  name="loanStartNumber"
                  placeholder="Series Starting Number"
                  value={formData.loanStartNumber}
                  onChange={handleChange}
                  className="w-1/3 px-4 py-2 border rounded-md"
                />
                <input
                  type="text"
                  name="loanSuffix"
                  placeholder="Suffix Text"
                  value={formData.loanSuffix}
                  onChange={handleChange}
                  className="w-1/3 px-4 py-2 border rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700">
                Default Annual Interest Rate *
              </label>
              <input
                type="number"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">
                How is the interest calculated?
              </label>
              <select
                name="interestCalculation"
                value={formData.interestCalculation}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="Simple Interest(only on Principal)">
                  Simple Interest(only on Principal)
                </option>
                {/* Add more options if needed */}
              </select>
            </div>

            <div>
              <label className="block text-gray-700">
                When does the interest calculation begin?
              </label>
              <select
                name="interestCalculationStart"
                value={formData.interestCalculationStart}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="From Loan Grant Date">
                  From Loan Grant Date
                </option>
                {/* Add more options if needed */}
              </select>
            </div>

           
            <div>
              <label className="block text-gray-700">
                Which employees is this category applicable to?
              </label>
              <select
                name="applicableEmployees"
                value={formData.applicableEmployees}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="All Employees">All Employees</option>
                <option value="Some Employees">Some Employees</option>
                <option value="Specific Employees">Specific Employees</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">
                What is the maximum amount that employee can apply?
              </label>
              <input
                type="number"
                name="maxAmount"
                value={formData.maxAmount}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Can employees apply for this category?
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="employeeRestrictions"
                    value="Yes"
                    checked={formData.employeeRestrictions === "Yes"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="employeeRestrictions"
                    value="No"
                    checked={formData.employeeRestrictions === "No"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="block text-gray-700">
                Is this category applicable for perquisites?
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="perqsApplicable"
                    value="Yes"
                    checked={formData.perqsApplicable === "Yes"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="perqsApplicable"
                    value="No"
                    checked={formData.perqsApplicable === "No"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

           
          </form>
          </div>
          <div className="flex my-2 flex-end">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default AddLoan;
