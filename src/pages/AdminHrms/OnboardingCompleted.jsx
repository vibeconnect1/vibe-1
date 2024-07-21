import React, { useState } from "react";

import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";

const OnBoardingCompleted = () => {
  const columns = [
   
    {
      name: "Employee Name",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Joining Date",
      selector: (row) => row.Label,
      sortable: true,
    },
    {
      name: "Onboarding Status",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Onboarding Checklist",
      selector: (row) => row.State,
      sortable: true,
    },
    {
        name: "Portal Activation",
        selector: (row) => row.Country,
        sortable: true,
      },
    {
        name: "Pending Letters Awaiting Signatures	",
        selector: (row) => row.Leave_Days,
        sortable: true,
      },
   
  ];

  const data = [
    {
      Name: "person 1",
      Location: "Mittu Panda",
      City: "Approved",
      State: "abc",
      Label:"5/5/2024",
      Country:"yes",

    },

  ];

  return (
    <section className="flex">
    
      <div className=" w-full flex m-3 flex-col overflow-hidden">
       
        <div className=" flex justify-between my-5">
          <input
            type="text"
            placeholder="Search by name "
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
            //   value={searchText}
            //   onChange={handleSearch}
          />
          <div className='flex justify-end'>
      <Link
            to={"/admin/add-employee"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add Employee
          </Link> 
      </div>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
    </section>
  );
};

export default OnBoardingCompleted