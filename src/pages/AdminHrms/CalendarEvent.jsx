import React, { useState } from "react";

import { Link } from "react-router-dom";

import Table from "../../components/table/Table";

import { BiEdit } from "react-icons/bi";

import OrganisationSetting from "./OrganisationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";
import { PiPlusCircle } from "react-icons/pi";
import { FaTrash } from "react-icons/fa";

const CalendarEvent = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const columns = [
   
    {
      name: "Name Of Milestone",
      selector: (row) => row.Name,
      sortable: true,
    },
    // {
    //   name: "Leave Label",
    //   selector: (row) => row.Label,
    //   sortable: true,
    // },
    {
      name: "Who Can View It",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Action",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <button
          //   to={`/admin/edit-templates/${row.id}`}
          onClick={() => setShowModal1(true)}
          >
            <BiEdit size={15} />
          </button>
          <FaTrash size={15}/>
        </div>
      ),
    },
  ];

  const data = [
    {
      Name: "Birthday",
      Location: "Mumbai",
      City: "All",
      State: "Maharashtra",

      Country: "India",
    },
  ];
 
  return (
    <section className="flex ml-20">
      <OrganisationSetting />
      <div className=" w-full flex m-3 flex-col overflow-hidden">
       
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
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            
            <h1 className="text-2xl font-bold mb-4">Add Calendar Milestone and Events</h1>
            <div  className="mb-4">
            <label className="block text-gray-700">Name Of Milestone:</label>
            <input
              type="text"
              name="name"
             
              className="border border-gray-300 p-2 rounded w-full"
            />
            <label className="block text-gray-700 mt-2">Who can view it:</label>
            <select
              name="type"
             
              className="border border-gray-300 p-2 rounded w-full"
            >
              <option value="text">Mittu Panda</option>
              <option value="number">Ramesh Nayak</option>
             
            </select></div>
<div className="flex justify-center gap-2">
            <button
              className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
             
            >
              Submit
            </button></div>
            </div></div>
            )}
              {showModal1 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            
            <h1 className="text-2xl font-bold mb-4">Edit Calendar Milestone and Events</h1>
            <div  className="mb-4">
            <label className="block text-gray-700">Name Of Milestone:</label>
            <input
              type="text"
              name="name"
             
              className="border border-gray-300 p-2 rounded w-full"
            />
            <label className="block text-gray-700 mt-2">Who can view it:</label>
            <select
              name="type"
             
              className="border border-gray-300 p-2 rounded w-full"
            >
              <option value="text">Mittu Panda</option>
              <option value="number">Ramesh Nayak</option>
             
            </select></div>
<div className="flex justify-center gap-2">
<button
              className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
              
            >
              Update
            </button>
            <button
              className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => setShowModal1(false)}
            >
              Close
            </button>
          </div>
            </div></div>
            )}
      <HRMSHelpCenter help={"calendar"} />
    </section>
  );
};

export default CalendarEvent;
