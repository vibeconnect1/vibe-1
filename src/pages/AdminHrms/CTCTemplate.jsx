import React, { useState } from "react";

import Table from "../../components/table/Table";
import AdminHRMS from "./AdminHrms";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";

// import OrganisationSetting from "./OrganisationSetting";

const CTCTemplate = () => {
  const columns = [
    {
      name: "view",

      cell: (row) => (
        <div className="flex items-center gap-4">
          {/* <Link 
          to={`/admin/edit-templates/${row.id}`}
          >
            <BiEdit size={15} />
          </Link> */}
        </div>
      ),
    },
    {
      name: "Template Name",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "No Of Employees Covered",
      selector: (row) => row.Label,
      sortable: true,
    },
    {
      name: "Head Of Department",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Fixed Allowances",
      selector: (row) => row.State,
      sortable: true,
    },
    {
        name: "Other Allowances	",
        selector: (row) => row.Country,
        sortable: true,
      },
    {
        name: "Fixed Deductions",
        selector: (row) => row.Leave_Days,
        sortable: true,
      },
  
  ];

  const data = [
    {
      // Name: "person 1",
      Location: "Template",
      // City: "Mumbai",
      // State: "Maharashtra",

      // Country:"India",

    },

  ];

  return (
    <section className="flex ml-20">
    
     <AdminHRMS/>
      <div className=" w-full flex m-3 flex-col overflow-hidden">
  
        <div className=" flex gap-2 justify-end my-5">
          <input
            type="text"
            placeholder="Search by name "
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
            //   value={searchText}
            //   onChange={handleSearch}
          />
          <Link
            to={"/admin/hrms/ctc/ctc-template/General-Settings"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            CTC Template
          </Link>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
    </section>
  );
};

export default CTCTemplate;