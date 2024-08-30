import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import Table from "../../components/table/Table";

import { BiEdit } from "react-icons/bi";
import { GrHelpBook } from "react-icons/gr";

import UserDetailsList from "./UserDetailsList";
import { FaTrash } from "react-icons/fa";

const ThirdParty = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  const columns = [
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    // {
    //   name: "Leave Label",
    //   selector: (row) => row.Label,
    //   sortable: true,
    // },
    {
      name: "Email",
      selector: (row) => row.Email,
      sortable: true,
    },
    {
      name: "Employee Code",
      selector: (row) => row.code,
      sortable: true,
    },
    {
      name: "Action",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowModal1(true)}
            //   to={`/admin/edit-templates/${row.id}`}
          >
            <BiEdit size={15} />
          </button>
          <FaTrash size={15} />
        </div>
      ),
    },
  ];

  const data = [
    {
      Name: "person 1",
      Email: "ABC@gmail.com",
      code: "100",
      State: "Maharashtra",

      Country: "India",
    },
  ];

  const [aadhar, setAadhar] = useState("");

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (value.length > 12) {
      value = value.slice(0, 12); // Limit to 12 digits
    }
    let formattedValue = value
      .match(/.{1,4}/g)
      ?.join("-")
      .slice(0, 14) || ""; // Group digits into 4s and join with hyphens
    setAadhar(formattedValue);
  };
  return (
    <section className="flex gap-1 ml-20">
      {/* <OrganisationSetting/>
     <UserDetailsList/> */}
      <UserDetailsList />
      <div className=" w-2/3 flex m-3 flex-col overflow-hidden">
        <div className=" flex justify-end gap-2 my-5">
          <input
            type="text"
            placeholder="Search by name "
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
            //   value={searchText}
            //   onChange={handleSearch}
          />
          <button
            onClick={() => setShowModal(true)}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add
          </button>
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg max-h-[90%]">
              <h1 className="text-2xl font-bold mb-4">Add Third Party Users</h1>
              {/* <div className=""> */}
                <div className="flex gap-2 items-end">
                  <div className="flex flex-col gap-2">
                    <label>Aadhar Number</label>
                    <input
        type="text"
        id="aadharInput"
        value={aadhar}
        onChange={handleInputChange}
        maxLength={14}
        className="border border-gray-300 p-2 w-60 rounded"
        placeholder="xxxx-xxxx-xxxx"
      />
                  </div>
                  <div>
                  <button className="bg-green-500 p-2 px-3 rounded text-white">Verify</button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700">Full Name :</label>
                    <input
                      type="text"
                      name="name"
                      className="border border-gray-300 p-2 mt-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Email :</label>
                    <input
                      type="email"
                      name="name"
                      className="border border-gray-300 p-2 mt-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Mobile No. :</label>
                    <input
                      type="text"
                      name="name"
                      className="border border-gray-300 p-2 mt-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Mobile No. :</label>
                    <input
                      type="text"
                      name="name"
                      className="border border-gray-300 p-2 mt-2 rounded w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700">Mobile No. :</label>
                  <input
                    type="text"
                    name="name"
                    className="border border-gray-300 p-2 mt-2 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Mobile No. :</label>
                  <input
                    type="text"
                    name="name"
                    className="border border-gray-300 p-2 mt-2 rounded w-full"
                  />
                </div>
                <div className="flex ">
                  <button
                    className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              {/* </div> */}
            </div>
          </div>
        )}
        {showModal1 && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg w-96">
              <h1 className="text-2xl font-bold mb-4">
                Edit Third Party Users
              </h1>
              <div className="mb-4">
                <label className="block text-gray-700">Name :</label>
                <input
                  type="text"
                  name="name"
                  className="border border-gray-300 p-2 mt-2 rounded w-full"
                />
                <label className="block text-gray-700 mt-2">Email:</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 mt-2 rounded w-full"
                />
                <label className="block text-gray-700 mt-2">
                  Employee Code:
                </label>
                <select
                  name="type"
                  className="border border-gray-300 mt-2 p-2 rounded w-full"
                >
                  <option value="text">101</option>
                  <option value="number">102</option>
                </select>
              </div>
              <button
                className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={() => setShowModal1(false)}
              >
                Close
              </button>
              <button
                className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={() => setShowModal1(false)}
              >
                Update
              </button>
            </div>
          </div>
        )}
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      <div className="my-4 mx-2 w-fit">
        <div className="flex flex-col mt-4 mr-1 shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
          <div className="flex  gap-4 font-medium">
            <GrHelpBook size={20} />
            <h2>Help Center</h2>
          </div>
          <div className=" ">
            {/* <p className="font-medium">Help Center</p> */}
            <ul style={listItemStyle} className="flex flex-col gap-2">
              <li>
                <ul style={listItemStyle}>
                  <li>
                    You can add administrators and manage admin access rights
                    like IP restrictions, 2-factor authentication, etc{" "}
                  </li>
                </ul>
              </li>
              <li>
                <ul style={listItemStyle}>
                  <li>
                    You can also restrict access permission based on
                    departments, locations, etc.{" "}
                  </li>
                </ul>
              </li>
              <li>
                <ul style={listItemStyle}>
                  <li>
                    You can add and manage third party users and invite them to
                    join login to the Vibe Connect HRMS software. For e.g.,
                    External auditor, external consultants, etc.{" "}
                  </li>
                </ul>
              </li>

              <li>
                <p>
                  {/* <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a> */}
                  You can view/edit/delete admin permissions at any time.{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdParty;
