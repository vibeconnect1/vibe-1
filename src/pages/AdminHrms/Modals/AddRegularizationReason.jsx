import React, { useEffect, useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Select from "react-select";
import { getMyHRMSEmployees, getMyOrganizationLocations, getMyOrgDepartments } from "../../../api";
import { getItemInLocalStorage } from "../../../utils/localStorage";
const AddRegularizationReason = ({ handleModalClose }) => {
  const [frequencyRestriction, setFrequencyRestriction] = useState(false);
  const handleFrequencyChange = (e) => {
    setFrequencyRestriction(e.target.checked);
  };

  const [appliesTo, setAppliesTo] = useState("All Employees");
  const [employees, setEmployees] = useState([]);
  const [locations, setLocations] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedUserOption, setSelectedUserOption] = useState([]);
  // const handleUserChangeSelect = (selectedOption) => {
  //   setSelectedUserOption(selectedOption);
  // };
  const [dropdowns, setDropdowns] = useState([
    { id: 1, select1: "", select2: "", selectedEmployees: [], daysInput: "" },
  ]);

  useEffect(() => {
    const fetchAllEmployees = async () => {
      try {
        const res = await getMyHRMSEmployees(hrmsOrgId);

        const employeesList = res.map((emp) => ({
          value: emp.id,
          label: `${emp.first_name} ${emp.last_name}`,
        }));

        setEmployees(employeesList);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchLocation = async () => {
      try {
        const res = await getMyOrganizationLocations(hrmsOrgId);
        const locationList = res.map((location) => ({
          value: location.id,
          label: `${location.location}, ${location.city}, ${location.state}`,
        }));
        setLocations(locationList);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDepartments = async () => {
      try {
        const res = await getMyOrgDepartments(hrmsOrgId);
        const departmentList = res.map((department) => ({
          value: department.id,
          label: department.name,
        }));
        setDepartments(departmentList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllEmployees();
    fetchLocation();
    fetchDepartments();
  }, []);
  const hrmsOrgId = getItemInLocalStorage("HRMSORGID");

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  

  const employmentTypeOptions = [
    { value: "full_time", label: "Full Time" },
    { value: "part_time", label: "Part Time" },
    { value: "contract", label: "Contract" },
    { value: "intern", label: "Intern" },
    { value: "consultant", label: "Consultant" },
  ];

  const handleAddDropdown = () => {
    setDropdowns([
      ...dropdowns,
      {
        id: dropdowns.length + 1,
        select1: "",
        select2: "",
        selectedEmployees: [],
        daysInput: "",
      },
    ]);
  };
  const handleDaysInputChange = (e, id) => {
    const updatedDropdowns = dropdowns.map((dropdown) => {
      if (dropdown.id === id) {
        return { ...dropdown, daysInput: e.target.value };
      }
      return dropdown;
    });
    setDropdowns(updatedDropdowns);
  };

  // Handle delete dropdown
  const handleDeleteDropdown = (id) => {
    setDropdowns(dropdowns.filter((dropdown) => dropdown.id !== id)); // Delete specific dropdown
  };
  const handleSelect1Change = (e, id) => {
    const updatedDropdowns = dropdowns.map((dropdown) => {
      if (dropdown.id === id) {
        return { ...dropdown, select1: e.target.value, selectedEmployees: [] }; // Reset third dropdown on select1 change
      }
      return dropdown;
    });
    setDropdowns(updatedDropdowns);
  };

  // Handle second dropdown (select2)
  const handleSelect2Change = (e, id) => {
    const updatedDropdowns = dropdowns.map((dropdown) => {
      if (dropdown.id === id) {
        return { ...dropdown, select2: e.target.value };
      }
      return dropdown;
    });
    setDropdowns(updatedDropdowns);
  };

  // Handle third dropdown (react-select)
  const handleUserChangeSelect = (selectedOption, id) => {
    const updatedDropdowns = dropdowns.map((dropdown) => {
      if (dropdown.id === id) {
        return { ...dropdown, selectedEmployees: selectedOption };
      }
      return dropdown;
    });
    setDropdowns(updatedDropdowns);
  };

  // Get options for third dropdown based on first dropdown selection
  const getThirdDropdownOptions = (select1Value) => {
    switch (select1Value) {
      case "Branch Location":
        return locations;
      case "Department":
        return departments;
      case "Gender":
        return genderOptions;
      // case "Days Completed in Company":
      //   return daysInCompanyOptions;
      case "Employment Type":
        return employmentTypeOptions;
      default:
        return [];
    }
  };
  return (
    <div className="fixed inset-0 z-10 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-2/4">
        <h2 className="text-lg font-bold mb-4">Add Regularization Reason</h2>
        <div className="max-h-96 overflow-y-auto p-1">
          <label className="block mb-2 font-medium">
            Label <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="border border-gray-400 w-full rounded-lg p-2 mt-1"
            placeholder="Label"
          />
          <label className="block mb-2 font-medium">
            Frequency Restriction <span className="text-red-500">*</span>
            <input
              type="checkbox"
              className="ml-2"
              onChange={handleFrequencyChange}
            />
          </label>
          {frequencyRestriction && (
            <div className="mb-2 flex gap-5 items-center">
              <label className="block w-32">
                An Employee Can Apply Maximum
              </label>
              <input
                type="number"
                className="border border-gray-400 rounded-md p-2 mt-1 w-40"
              />
              <label className="block mt-2">To</label>
              <select className="border border-gray-400 rounded-md p-2 mt-1 w-48">
                <option value={"Calendar Month"}>Week</option>
                <option value={"Calendar Month"}>Calendar Month</option>
                <option value="Attendance Cycle">Attendance Cycle</option>
              </select>
            </div>
          )}
          <label className="block my-2 font-medium ">
            Within how many days can the employee apply for regularization from
            the date of occurrence?
            <input
              type="number"
              className="border border-gray-400 w-full rounded-lg p-2 mt-1"
            />
          </label>
          <div className="my-2">
            <label className="block text-sm font-medium text-gray-700">
              Applies To <span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={appliesTo}
              onChange={(e) => setAppliesTo(e.target.value)}
              required
            >
              <option value="">Select Applies To</option>
              <option value="All Employees">All Employees</option>
              <option value="Some Employees">Some Employees</option>
              <option value="Specific Employees">Specific Employees</option>
            </select>
            {appliesTo === "Specific Employees" && (
              <div className="my-2">
                <Select
                  isMulti
                  menuPlacement="top"
                  closeMenuOnSelect={false}
                  options={employees}
                  noOptionsMessage={() => "No Employee Available"}
                  onChange={handleUserChangeSelect}
                  placeholder="Select Employees"
                />
              </div>
            )}

            {appliesTo === "Some Employees" && (
              <div className="my-2">
                {dropdowns.map((dropdown, index) => (
                  <div
                    key={dropdown.id}
                    className="mb-4 grid grid-cols-3 gap-2 border-t py-1"
                  >
                    <select
                      className="border p-2 w-full rounded-md col-span-2"
                      value={dropdown.select1}
                      onChange={(e) => handleSelect1Change(e, dropdown.id)}
                    >
                      <option value="">Select</option>
                      <option value="Branch Location">Branch Location</option>
                      <option value="Department">Department</option>
                      <option value="Gender">Gender</option>
                      <option value="Days Completed in Company">
                        Days Completed in Company
                      </option>
                      <option value="Employment Type">Employment Type</option>
                    </select>

                    <select
                      className="border p-2 w-full rounded-md"
                      value={dropdown.select2}
                      onChange={(e) => handleSelect2Change(e, dropdown.id)}
                    >
                      <option value="is">is</option>
                      <option value="is not">is not</option>
                    </select>
                    {dropdown.select1 === "Days Completed in Company" ? (
                      <input
                        type="number"
                        placeholder="Days greater than"
                        className="border p-2 w-full col-span-2 rounded-md"
                        value={dropdown.daysInput}
                        onChange={(e) => handleDaysInputChange(e, dropdown.id)}
                      />
                    ) : (
                      <div className="col-span-2">
                        <Select
                          isMulti
                          closeMenuOnSelect={false}
                          menuPlacement="top"
                          options={getThirdDropdownOptions(dropdown.select1)}
                          noOptionsMessage={() => "No Options Available"}
                          onChange={(selectedOption) =>
                            handleUserChangeSelect(selectedOption, dropdown.id)
                          }
                          placeholder={`Select based on ${
                            dropdown.select1 || "selection"
                          }`}
                          className="w-full"
                          value={dropdown.selectedEmployees}
                        />
                      </div>
                    )}
                    <div className="flex justify-end">
                      <button
                        className="bg-red-500 text-white p-1 px-3 rounded-md"
                        onClick={() => handleDeleteDropdown(dropdown.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  className="bg-green-500 text-white p-2 rounded-md mt-2"
                  onClick={handleAddDropdown}
                >
                  Add Employee Sector Rule
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-2 border-t p-1">
          <button
            onClick={handleModalClose}
            className="border-2 font-semibold hover:bg-gray-700 flex items-center gap-2 hover:text-white duration-150 transition-all border-gray-700 p-1 rounded-full px-4 text-gray-700 cursor-pointer mr-2"
          >
            <MdClose /> Cancel
          </button>
          <button className="border-2 font-semibold hover:bg-blue-700 flex items-center gap-2 hover:text-white duration-150 transition-all border-blue-700 p-1 rounded-full px-4 text-blue-700 cursor-pointer">
            <FaCheck /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRegularizationReason;
