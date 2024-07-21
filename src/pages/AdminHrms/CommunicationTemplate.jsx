import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillAlert } from 'react-icons/ai';
import Table from "../../components/table/Table";
import { GrHelpBook } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import { BiAlarm } from 'react-icons/bi';
import WorkflowDetailsList from "./WorkFlowDetailsList";
import { FaTrash } from "react-icons/fa";
import { PiPlusCircle } from "react-icons/pi";
import { IoIosAdd } from 'react-icons/io';
const CommunicationTemplate = () => {
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
   

    {
      name: "Action",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link 
          to={`/admin/edit-communication-templates/${row.id}`}
          >
            <BiEdit size={15} />
          </Link>
          {/* <IoIosAdd size={15}/>
<BiAlarm/> */}
<AiFillAlert size={15}/>
          <FaTrash size={15}/>
        </div>
      ),
    },
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

  return (
    <section className="flex ml-20">
     <WorkflowDetailsList/>
      <div className=" w-2/3 flex m-3 flex-col overflow-hidden">
        
        <div className=" flex justify-end gap-2 my-5">
          <input
            type="text"
            placeholder="Search by name "
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
           
          />
           <Link 
                       className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"

          to={`/admin/add-communication-templates`}
          >
            <PiPlusCircle size={20}/>
            Add
          </Link>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      <div className="my-4 mx-2 w-fit">
      <div className="flex flex-col shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
        <GrHelpBook size={20} />
        <h2>Help Center</h2>
        </div>
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

export default CommunicationTemplate;