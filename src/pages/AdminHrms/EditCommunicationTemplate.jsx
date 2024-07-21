import React, { useState } from "react";
import { Link } from "react-router-dom";

import Table from "../../components/table/Table";
import { GrHelpBook } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";

import WorkflowDetailsList from "./WorkFlowDetailsList";

const EditCommunicationTemplate = () => {
  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  const columns = [
    {
      name: "view",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link 
          to={`/admin/edit-communication-templates/${row.id}`}
          >
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Modes",
      selector: (row) => row.Label,
      sortable: true,
    },
    {
      name: "Last Updated",
      selector: (row) => row.City,
      sortable: true,
    },
   
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    // {
    //   name: "Action",
    //   selector: (row) =>
    //     row.status !== "Expired" && (
    //       <button className="text-red-500">Cancel</button>
    //     ),
    //   sortable: true,
    // },
  ];

  const data = [
    {
      Name: "Happy Birthday Email",
      Label: "Email",
      City: "25/08/2023",
      State: "Maharashtra",

      status:"Active",

    },

  ];
//   const customStyle = {
//     headRow: {
//       style: {
//         backgroundColor: "black",
//         color: "white",

//         fontSize: "10px",
//       },
//     },
//     headCells: {
//       style: {
//         textTransform: "upperCase",
//       },
//     },
//   };
  return (
    <section className="flex ml-20">
     <WorkflowDetailsList/>
      <div className=" w-2/3 flex m-3 flex-col overflow-hidden">
        
      <h1 className="font-bold mb-4">Edit Communication Template</h1>
        <div className="grid md:grid-cols-1 gap-5">
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="mobileNumber" className="font-semibold">
              Template Name::
              </label>
              <input
                type="number"
                id="mobileNumber"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Happy Birthday Email"
              />
            </div>
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="mobileNumber" className="font-semibold">
              Medium of Communication:
              </label>
              <select
                type="number"
                id="mobileNumber"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Happy Birthday Email"
              />
            </div>
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="mobileNumber" className="font-semibold">
              Subject Line:
              </label>
              <select
                type="number"
                id="mobileNumber"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Happy Birthday "
              />
            </div>
            <div className="grid gap-2 items-center w-full">
            <button
            type="submit"
            className="bg-black w-48 text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Dynamic Fields
          </button></div>
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="mobileNumber" className="font-semibold">
             From:
              </label>
              <select
                type="number"
                id="mobileNumber"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Happy Birthday Email"
              />
            </div>
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="mobileNumber" className="font-semibold">
             To:
              </label>
              <select
                type="number"
                id="mobileNumber"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Happy Birthday Email"
              />
            </div>
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="mobileNumber" className="font-semibold">
             CC:
              </label>
              <select
                type="number"
                id="mobileNumber"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Happy Birthday Email"
              />
            </div>
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="mobileNumber" className="font-semibold">
             BCC:
              </label>
              <select
                type="number"
                id="mobileNumber"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Happy Birthday Email"
              />
            </div>
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="mobileNumber" className="font-semibold">
             Content:
              </label>
              <textarea
                type="number"
                id="mobileNumber"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Happy Birthday Email"
              />
            </div>
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="mobileNumber" className="font-semibold">
             Add Image:
              </label>
              <input
                type="file"
                id="mobileNumber"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Happy Birthday Email"
              />
            </div>
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="mobileNumber" className="font-semibold">
              Add Attachment::
              </label>
              <input
                type="file"
                id="mobileNumber"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Happy Birthday Email"
              />
            </div>
      </div>
      <div className="flex gap-5 justify-center items-center my-4">
          <button
            type="submit"
            className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Save
          </button>
        </div></div>
        <div className='my-4 mx-2 w-fit'>
      <div className="flex flex-col mt-4 mr-2 shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
        <GrHelpBook size={20} />
          <h2>Help Center</h2></div>
    <div className=' '>
             
              <ul style={listItemStyle} className="flex flex-col gap-2">
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    Communication triggers can be used to send occasional emails automatically on employee-specific events like Birthdays, anniversaries, etc. and date-specific events like festivals, holidays, annual meet-up notice, etc.            </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    The workflow will consist of a step-by-step process that involves creating email templates, mapping custom 'from' email ID, creating a workflow as to when the email will trigger and to which recipients.                </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    You can configure from "email ID" (@companydomain.com) to send the email communications. For e.g., your HR email or your admin email.             </li>
                  </ul>
                </li>

                <li>
                  <p>
                  
You can create custom communication templates along with custom content, insert image of your choice and add dynamic fields. This template will further be mapped to the Workflow Trigger to send emails to recipients automatically on the date of the event.                </p>
                </li>
              </ul>
            </div></div></div>
    </section>
  );
};

export default EditCommunicationTemplate;