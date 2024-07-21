import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/table/Table";
import { BiEdit } from "react-icons/bi";
import { PiPlusCircle } from "react-icons/pi"; // Ensure you have this import
import OrganisationSetting from "./OrganisationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";
import { GrHelpBook } from "react-icons/gr";
import { useSelector } from "react-redux";

const Department = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const [departmentName, setDepartmentName] = useState("");
  const [headOfDepartment, setHeadOfDepartment] = useState("");
  const themeColor = useSelector((state) => state.theme.color);

  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  const columns = [
    {
      name: "Name",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Head Of Department",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Action",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <button 
       onClick={() => setIsModalOpen1(true)}
          >
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      Name: "person 1",
      Location: "HR",
      City: "John Doe",
      State: "Maharashtra",
      Country: "India",
    },
  ];

  const employees = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"]; // Example employee list

  const handleAddDepartment = () => {
    // Handle adding department logic here
    console.log("Department Name:", departmentName);
    console.log("Head of Department:", headOfDepartment);
    setIsModalOpen(false); // Close the modal after adding department
  };

  return (
    <section className="flex ml-20">
      <OrganisationSetting />
      <div className="w-full flex m-3 flex-col overflow-hidden">
        <div className="flex justify-end gap-2 my-5">
          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add Department
          </button>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      <div className="my-4 mx-2 w-fit">
      <div className="flex flex-col shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
        <GrHelpBook size={20} />
        <h2>Help Center</h2>
        </div>
     
      <div>
              <p className="font-medium"> Department Settings Guidelines</p>
              <ul style={listItemStyle} className="flex flex-col gap-2">
                <li>
                  <ul style={listItemStyle}>
                    <li>
                      You can create departments such as a Sales, Marketing, HR,
                      Finance, Operations, etc. By adding departments, you will
                      be able to map the employees under specific departments
                      from the employee profile{" "}--{">"}{" "}employment{" "}---{">"}{" "}Job
                      Information{" "}---{">"}{" "}Position. This can further be mapped to head
                      of departments for direct reporting and workflow
                      approvals.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                      An analytic view is displayed on the dashboard that gives
                      information on the no. Of employees mapped under specific
                      departments. Departments can also be used in filters
                      across modules.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>How do I create departments?</li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                      Click on{" "}
                     
                      <button  onClick={() => setIsModalOpen(true)} className="  text-white py-1 px-4 rounded-lg"
              style={{ background: themeColor }}>
                        Add Department</button>
                      ---{">"} Enter department name and select the head of the
                      department from the employee list.
                    </li>
                  </ul>
                </li>

                <li>
                  You can edit and disable the departments. But you cannot
                  delete the departments that contains mapped employees.
                </li>
              </ul>
            </div></div></div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
          <div className="bg-white p-5 rounded-md shadow-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">Add Department</h2>
            <div className="mb-4">
              <label htmlFor="departmentName" className="block text-sm font-medium text-gray-700">
                Department Name
              </label>
              <input
                type="text"
                id="departmentName"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
                className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                placeholder="Enter Department Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="headOfDepartment" className="block text-sm font-medium text-gray-700">
                Head of Department
              </label>
              <select
                id="headOfDepartment"
                value={headOfDepartment}
                onChange={(e) => setHeadOfDepartment(e.target.value)}
                className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
              >
                <option value="" disabled>Select Head of Department</option>
                {employees.map((employee, index) => (
                  <option key={index} value={employee}>{employee}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-700 p-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddDepartment}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
        {isModalOpen1 && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
          <div className="bg-white p-5 rounded-md shadow-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Department</h2>
            <div className="mb-4">
              <label htmlFor="departmentName" className="block text-sm font-medium text-gray-700">
                Department Name
              </label>
              <input
                type="text"
                id="departmentName"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
                className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                placeholder="Enter Department Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="headOfDepartment" className="block text-sm font-medium text-gray-700">
                Head of Department
              </label>
              <select
                id="headOfDepartment"
                value={headOfDepartment}
                onChange={(e) => setHeadOfDepartment(e.target.value)}
                className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
              >
                <option value="" disabled>Select Head of Department</option>
                {employees.map((employee, index) => (
                  <option key={index} value={employee}>{employee}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen1(false)}
                className="bg-gray-300 text-gray-700 p-2 rounded-md mr-2"
              >
                Close
              </button>
              <button
                onClick={handleAddDepartment}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Department;
