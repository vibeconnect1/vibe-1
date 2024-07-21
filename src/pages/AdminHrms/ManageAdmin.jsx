import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import Table from "../../components/table/Table";
import { GrHelpBook } from "react-icons/gr";

import { BiEdit } from "react-icons/bi";

import UserDetailsList from "./UserDetailsList";
import { FaTrash } from "react-icons/fa";


const ManageAdmin = () => {
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
      name: "Type Of Access",
      selector: (row) => row.access,
      sortable: true,
    },
    {
      name: "Actions",

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
      Name: "ABC",
      Email: "abc@gmail.com",
      access: "Restricted Access",
      State: "Maharashtra",

      Country:"India",

    },

  ];

  return (
   
    <section className="flex gap-1 ml-20">
   
     <UserDetailsList/>
      <div className=" w-2/3 flex m-3 flex-col overflow-hidden">
       
        <div className=" flex justify-end gap-2 my-5">
          <input
            type="text"
            placeholder="Search by name "
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
            
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
          <div className="bg-white p-4 rounded-lg w-96">
            
            <h1 className="text-2xl font-bold mb-4">Add Manage Administrator</h1>
            <div  className="mb-4">
            <label className="block text-gray-700">Name :</label>
            <input
              type="text"
              name="name"
             
              className="border border-gray-300 p-2 mt-2 rounded w-full"
            />
            <label className="block text-gray-700 mt-2">Email:</label>
            <input type="text"  
              className="border border-gray-300 p-2 mt-2 rounded w-full"/>
            <label className="block text-gray-700 mt-2">Type of access:</label>
            <select
              name="type"
             
              className="border border-gray-300 mt-2 p-2 rounded w-full"
            >
              <option value="text">Full Access</option>
              <option value="number">Restricted Access</option>
             
            </select>
            </div>
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
            
            <h1 className="text-2xl font-bold mb-4">Edit Manage Administrator</h1>
            <div  className="mb-4">
            <label className="block text-gray-700">Name :</label>
            <input
              type="text"
              name="name"
             
              className="border border-gray-300 p-2 mt-2 rounded w-full"
            />
            <label className="block text-gray-700 mt-2">Email:</label>
            <input type="text"  
              className="border border-gray-300 p-2 mt-2 rounded w-full"/>
            <label className="block text-gray-700 mt-2">Type of access:</label>
            <select
              name="type"
             
              className="border border-gray-300 mt-2 p-2 rounded w-full"
            >
              <option value="text">Full Access</option>
              <option value="number">Restricted Access</option>
             
            </select>
            </div>
            <div className="flex justify-center gap-2">
            <button
              className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => setShowModal1(false)}
            >
              Close
            </button>
            <button
              className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
             
            >
              Update
            </button></div>
            </div></div>
            )}
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      <div className='my-4 mx-2 w-fit'>
      <div className="flex flex-col mt-4 mr-2 shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
        <GrHelpBook size={20} />
          <h2>Help Center</h2></div>
    <div className=' '>
              {/* <p className="font-medium">Help Center</p> */}
              <ul style={listItemStyle} className="flex flex-col gap-2">
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    You can add administrators and manage admin access rights like IP restrictions, 2-factor authentication, etc             </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    You can also restrict access permission based on departments, locations, etc.                 </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
You can add and manage third party users and invite them to join login to the Vibe Connect HRMS software. For e.g., External auditor, external consultants, etc.                    </li>
                  </ul>
                </li>

                <li>
                  <p>
                    {/* <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a> */}
You can view/edit/delete admin permissions at any time.                  </p>
                </li>
              </ul>
            </div></div></div>
    </section>
  );
};

export default ManageAdmin;