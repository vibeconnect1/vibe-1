import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import Table from "../../components/table/Table";
import AdminHRMS from "./AdminHrms";
import { BiEdit } from "react-icons/bi";
import LeaveSetting from "./LeaveSetting";
import OrganisationSetting from "./OrganisationSetting";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import OrganizationTree from "./OrganisationTree";
const OrganisationView2 = () => {
  const columns = [
    {
      name: "view",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link 
        //   to={`/admin/edit-templates/${row.id}`}
          >
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: " Name",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Head Of Department",
      selector: (row) => row.Label,
      sortable: true,
    },
    // {
    //   name: "Letter Template",
    //   selector: (row) => row.City,
    //   sortable: true,
    // },
    // {
    //   name: "Created By",
    //   selector: (row) => row.State,
    //   sortable: true,
    // },
    // {
    //     name: "Status",
    //     selector: (row) => row.Country,
    //     sortable: true,
    //   },
    // {
    //     name: "Signed By Company",
    //     selector: (row) => row.Leave_Days,
    //     sortable: true,
    //   },
    //   {
    //     name: "Signed By Employee	",
    //     selector: (row) => row.Comment,
    //     sortable: true,
    //   },
    // {
    //   name: "Status",
    //   selector: (row) => row.status,
    //   sortable: true,
    // },
    // {
    //   name: "Action",
    //   selector: (row) =>
    //     row.status !== "Expired" && (
    //       <button className="text-red-500">Cancel</button>
    //     ),
    //   sortable: true,
    // },
    // {
    //     name: "Approval",
    //     selector: (row) => (row.status === "Upcoming" && 
    //     <div className="flex justify-center gap-2">
    //         <button className="text-green-400 font-medium hover:bg-green-400 hover:text-white transition-all duration-200 p-1 rounded-full"><TiTick size={20} /></button>
    //         <button className="text-red-400 font-medium hover:bg-red-400 hover:text-white transition-all duration-200 p-1 rounded-full"><IoClose size={20}  /></button>
    //     </div>
    //   ),
    //     sortable: true,
    //   },
  ];

  const data = [
    {
      Name: "person 1",
      Location: "HR",
      City: "Mumbai",
      State: "Maharashtra",

      Country:"India",

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
    <section className="flex">
     {/* <OrganisationSetting/> */}
     {/* <AdminHRMS/> */}
     <OrganizationTree/>
      <div className=" w-full flex m-3 flex-col overflow-hidden">
        {/* <div className="flex  justify-start gap-4 my-5  ">
          <div className="shadow-xl rounded-full border-4 border-gray-400 w-52  px-6 flex flex-col items-center">
            <p className="font-semibold ">Total Alloted Slots</p>
            <p className="text-center font-semibold ">0</p>
          </div>
          <div className="shadow-xl rounded-full border-4 border-green-400 w-52  px-6 flex flex-col items-center">
            <p className="font-semibold">Four Wheelers</p>
            <p className="text-center font-semibold  ">0</p>
          </div>
          <div className="shadow-xl rounded-full border-4 border-red-400 w-52  px-6 flex flex-col items-center">
            <p className="font-semibold">2 Wheelers</p>
            <p className="text-center font-semibold ">0</p>
          </div>
          <div className="shadow-xl rounded-full border-4 border-orange-400 w-52  px-6 flex flex-col items-center">
            <p className="font-semibold">Vacant Slot</p>
            <p className="text-center font-semibold ">0</p>
          </div>
        </div> */}
         <p className="mb-5 mt-2 font-semibold">

Assign Head of Department</p>
        <div className=" flex justify-between my-5">
          <input
            type="text"
            placeholder="Search by name "
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
            //   value={searchText}
            //   onChange={handleSearch}
          />
          {/* <Link
            to={"/admin/generation-letter"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add
          </Link> */}
        </div>
       
        <Table columns={columns} data={data} isPagination={true} />
      </div>
    </section>
  );
};

export default OrganisationView2;