import React, { useState } from "react";

import { Link } from "react-router-dom";

import Table from "../../components/table/Table";
import AdminHRMS from "./AdminHrms";
import { BiEdit } from "react-icons/bi";


const LoanApplication = () => {
  const columns = [
    {
      name: "Actions",

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
      name: "Employee",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Loan Number",
      selector: (row) => row.Label,
      sortable: true,
    },
    {
      name: "Loan Category",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Loan Amount",
      selector: (row) => row.State,
      sortable: true,
    },
    {
        name: "Loan Status",
        selector: (row) => row.Country,
        sortable: true,
      },
    // {
    //     name: "Leave Days",
    //     selector: (row) => row.Leave_Days,
    //     sortable: true,
    //   },
    //   {
    //     name: "Comment",
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
  ];

  const data = [
    {
      Name: "June-2024",
      Location: "June-2024	",
      City: "0",
      State: "",
      Label:"0",
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
    <section className="flex ml-20">
     {/* <OrganisationSetting/> */}
     {/* <PayslipDetailsList/> */}
     <AdminHRMS/>
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
        <div className=" flex justify-between my-5">
          <input
            type="text"
            placeholder="Search by name "
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
            //   value={searchText}
            //   onChange={handleSearch}
          />
          {/* <Link
            to={"/templates/leave-templates"}
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

export default LoanApplication;