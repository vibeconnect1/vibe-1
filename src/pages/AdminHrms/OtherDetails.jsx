import React, { useState } from "react";

import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";

import Table from "../../components/table/Table";

import { BiEdit } from "react-icons/bi";

import OrganisationSetting from "./OrganisationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";
import { FaTrash } from "react-icons/fa";

const OtherDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const [selectedOption, setSelectedOption] = useState('existing');
  const addField = () => {
    setFields([...fields, { name: '', type: 'text', mandatory: false }]);
  };
  const columns = [
   
    {
      name: "Field",
      selector: (row) => row.Field,
      sortable: true,
    },
    {
      name: "Requirement",
      selector: (row) => row.Requirement,
      sortable: true,
    },
    {
      name: "Access",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Sensitive Data",
      selector: (row) => row.Sensitive_Data,
      sortable: true,
    },
    {
      name: "Actions",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <button 
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
        Field: "Employee Code",
        Requirement: "Mandatory",
      City: "No",
      State: "No",

      Sensitive_Data:"India",

    },

  ];
  const columns1 = [
    {
      name: "view",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link 
        
          >
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Field",
      selector: (row) => row.Field,
      sortable: true,
    },
    {
      name: "Requirement",
      selector: (row) => row.Requirement,
      sortable: true,
    },
    {
      name: "Access",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Sensitive Data",
      selector: (row) => row.Sensitive_Data,
      sortable: true,
    },

  ];

  const data1 = [
    {
        Field: "Skill Level",
        Requirement: "Mandatory",
      City: "No",
      State: "No",

      Sensitive_Data:"India",

    },

  ];

  return (
    <section className="flex ml-20">
     <OrganisationSetting/>
      <div className=" w-full flex m-3 flex-col overflow-hidden">
       
        <div className=" flex justify-between my-5">
        <p className="font-bold mb-2">Other Information</p>

          <button
             onClick={() => setShowModal(true)}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add Fields
          </button>
           {/* <p className="font-bold mb-2">Other Information</p> */}
        </div>
        {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            {/* <h2 className="text-lg font-bold mb-4">Edit Regularization Request</h2> */}
            <h1 className="text-2xl font-bold mb-4">Add Employee Fields</h1>
            <div className="mb-4">
             
        <label className="inline-flex items-center">
        <p className="mr-4">For</p>&nbsp;
          <input
            type="radio"
            className="form-radio"
            name="option"
            value="existing"
            checked={selectedOption === 'existing'}
            onChange={() => setSelectedOption('existing')}
          />
          <span className="ml-2">Existing Table</span>
        </label>
        <label className="inline-flex items-center ml-4">
          <input
            type="radio"
            className="form-radio"
            name="option"
            value="new"
            checked={selectedOption === 'new'}
            onChange={() => setSelectedOption('new')}
          />
          <span className="ml-2">New Table</span>
        </label>
      </div>

      {selectedOption === 'existing' ? (
        <select className="border border-gray-300 p-2 rounded w-full">
          <option value="">Select Existing Table</option>
          <option value="option1">Basic Information</option>
          <option value="option2">Family Information</option>
          <option value="option3">Address Information</option>
        </select>
      ) : (
        <input
          type="text"
        className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter New Table name"
        />
      )}
          <div  className="mb-4">
            <label className="block text-gray-700">Field Name:</label>
            <input
              type="text"
              name="name"
             
              className="border border-gray-300 p-2 rounded w-full"
            />
            <label className="block text-gray-700 mt-2">Requirement:</label>
            <select
              name="type"
             
              className="border border-gray-300 p-2 rounded w-full"
            >
              <option value="text">Optional</option>
              <option value="number">Mandatory</option>
             
            </select>
            <label className="block text-gray-700 mt-2">Access:</label>
            <select
              name="type"
             
              className="border border-gray-300 p-2 rounded w-full"
            >
              <option value="text">Manage</option>
              <option value="number">All</option>
             
            </select>
            <label className="block text-gray-700 mt-2">Sensitive data:</label>
            <div className="flex gap-4">
              <div className="flex gap-2">
           <input type="radio" />
           <label htmlFor="">Yes</label></div>
           <div className="flex gap-2">
           <input type="radio" />
           <label htmlFor="">No</label></div></div>
            <div className="flex items-center mt-2">
           
            </div>
          </div>
       
        <button
          type="button"
          onClick={addField}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Field
        </button>
       
      
            <button
              className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
           
          </div>
        </div>
      )}
         {showModal1 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            {/* <h2 className="text-lg font-bold mb-4">Edit Regularization Request</h2> */}
            <h1 className="text-2xl font-bold mb-4">Edit Employee Fields</h1>
            <div className="mb-4">
             
        <label className="inline-flex items-center">
        <p className="mr-4">For</p>&nbsp;
          <input
            type="radio"
            className="form-radio"
            name="option"
            value="existing"
            checked={selectedOption === 'existing'}
            onChange={() => setSelectedOption('existing')}
          />
          <span className="ml-2">Existing Table</span>
        </label>
        <label className="inline-flex items-center ml-4">
          <input
            type="radio"
            className="form-radio"
            name="option"
            value="new"
            checked={selectedOption === 'new'}
            onChange={() => setSelectedOption('new')}
          />
          <span className="ml-2">New Table</span>
        </label>
      </div>

      {selectedOption === 'existing' ? (
        <select className="border border-gray-300 p-2 rounded w-full">
          <option value="">Select Existing Table</option>
          <option value="option1">Basic Information</option>
          <option value="option2">Family Information</option>
          <option value="option3">Address Information</option>
        </select>
      ) : (
        <input
          type="text"
        className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter New Table name"
        />
      )}
          <div  className="mb-4">
            <label className="block text-gray-700">Field Name:</label>
            <input
              type="text"
              name="name"
             
              className="border border-gray-300 p-2 rounded w-full"
            />
            <label className="block text-gray-700 mt-2">Requirement:</label>
            <select
              name="type"
             
              className="border border-gray-300 p-2 rounded w-full"
            >
              <option value="text">Optional</option>
              <option value="number">Mandatory</option>
             
            </select>
            <label className="block text-gray-700 mt-2">Access:</label>
            <select
              name="type"
             
              className="border border-gray-300 p-2 rounded w-full"
            >
              <option value="text">Manage</option>
              <option value="number">All</option>
             
            </select>
            <label className="block text-gray-700 mt-2">Sensitive data:</label>
            <div className="flex gap-4">
              <div className="flex gap-2">
           <input type="radio" />
           <label htmlFor="">Yes</label></div>
           <div className="flex gap-2">
           <input type="radio" />
           <label htmlFor="">No</label></div></div>
            <div className="flex items-center mt-2">
           
            </div>
          </div>
       
        <button
          type="button"
          onClick={addField}
          className="bg-blue-500 text-white px-4 py-2 rounded"
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
        </div>
      )}
        <Table columns={columns} data={data} isPagination={true} />
        {/* <p className="font-bold mt-2 mb-2">Job Information</p>
        <Table columns={columns1} data={data1} isPagination={true} /> */}
      </div>
      <HRMSHelpCenter help={"personal"} showModal={() => setShowModal(true)}/>
    </section>
  );
};

export default OtherDetails;