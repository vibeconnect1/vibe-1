import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import Table from "../../components/table/Table";

import { BiEdit } from "react-icons/bi";

import OrganisationSetting from "./OrganisationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";
import { FaTrash } from "react-icons/fa";

const BankAccount = () => {
  const [showModal, setShowModal] = useState(false);

  const columns = [
   
    {
      name: "Bank Name",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Account Holder Name",
      selector: (row) => row.Label,
      sortable: true,
    },
    {
      name: "Account Number	",
      selector: (row) => row.num,
      sortable: true,
    },
    {
        name: "IFSC Code",
        selector: (row) => row.City,
        sortable: true,
      },
      {
        name: "Actions",
  
        cell: (row) => (
          <div className="flex items-center gap-4">
            <button 
          onClick={() => setShowModal(true)}
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
      Label: "Vibe Connect",
      Location: "SBI",
      City: "SBI56473890",
      num: "56423155897",

      Country:"India",

    },

  ];

  return (
    <section className="flex ml-20">
     <OrganisationSetting/>
      <div className=" w-full flex m-3 flex-col overflow-hidden">
       
        <div className=" flex justify-end gap-2 my-5">
          <input
            type="text"
            placeholder="Search by name "
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
            //   value={searchText}
            //   onChange={handleSearch}
          />
          <Link
            to={"/admin/add-bank-account"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add
          </Link>
        </div>
        {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            
            <h1 className="text-2xl font-bold mb-4">Edit Bank Account</h1>
            <div  className="grid md:grid-cols-1 gap-5">
            <div className="grid gap-2 items-center w-full">
            <label  className="font-semibold">
              Account Holder Name:
            </label>
            <input
              type="text"
             
              name="branchName"
              className="border border-gray-400 p-2 rounded-md"
              placeholder="Enter  Name"
            
            />
          </div>
          <div className="grid gap-2 items-center w-full">
            <label  className="font-semibold">
              Bank Name:
            </label>
            <input
              type="text"
             
              name="branchName"
              className="border border-gray-400 p-2 rounded-md"
              placeholder="Enter  Name"
            
            />
          </div>
          <div className="grid gap-2 items-center w-full">
            <label  className="font-semibold">
             Account Number:
            </label>
            <input
              type="text"
             
              name="branchName"
              className="border border-gray-400 p-2 rounded-md"
              placeholder="Enter  Name"
            
            />
          </div>
          <div className="grid gap-2 items-center w-full">
            <label  className="font-semibold">
            IFSC Code:
            </label>
            <input
              type="text"
             
              name="branchName"
              className="border border-gray-400 p-2 rounded-md"
              placeholder="Enter  Name"
            
            />
          </div>
          </div>

<div className="flex justify-center gap-2">
<button
              className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => setShowModal(false)}
            >
              Update
            </button>
            <button
              className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
           </div>
            </div></div>
            )}
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      <HRMSHelpCenter help={"bank"} />
    </section>
  );
};

export default BankAccount;