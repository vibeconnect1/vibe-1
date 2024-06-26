import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";

import Table from "../../components/table/Table";
import { useSelector } from "react-redux";
import { BsEye } from "react-icons/bs";

const EmployeeStaff = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const themeColor = useSelector((state) => state.theme.color);

  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/employee/staffdetails/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },

    {
        name: "Edit",
        selector: (row) => row.edit,
        sortable: true,
      },
      {
        name: "ID",
        selector: (row) => row.Id,
        sortable: true,
      },
      {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
      },
      {
        name: "Unit",
        selector: (row) => row.unit,
        sortable: true,
      },
      {
        name: "Department",
        selector: (row) => row.department,
        sortable: true,
      },

      {
        name: "Email",
        selector: (row) => row.email,
        sortable: true,
      },
      {
        name: "Mobile",
        selector: (row) => row.mobile,
        sortable: true,
      },

      {
        name: "Staff Id",
        selector: (row) => row.Staff_Id,
        sortable: true,
      },
      {
        name: "Work Type",
        selector: (row) => row.work_type,
        sortable: true,
      },

      {
        name: "Vendor name",
        selector: (row) => row.v_name,
        sortable: true,
      },
      {
        name: "Status",
        selector: (row) => row.status,
        sortable: true,
      },

    {
      name: "Cancellation",
      selector: (row) => (row.status === "Upcoming" && <button className="text-red-400 font-medium">Cancel</button>),
      sortable: true,
    },
  ];

  //custom style
  const customStyle = {
    headRow: {
      style: {
        backgroundColor: themeColor,
        color: "white",

        fontSize: "10px",
      },
    },
    headCells: {
      style: {
        textTransform: "upperCase",
      },
    },
  };
  const data = [
    {
        id: 1,
       edit:"ab",
       Id:"55",
       name:"Mi",
       unit:"9",
       department:"tech",
       email:"man",
       mobile:"456",
       Staff_Id:"89",
       work_type:"jkl",
       v_name:"jk",
       status:"Upcoming"
    },
    {
        id: 2,

        edit:"ab",
        Id:"55",
        name:"Mi",
        unit:"9",
        department:"tech",
        email:"man",
        mobile:"456",
        Staff_Id:"89",
        work_type:"jkl",
        v_name:"jk",
        status:"Upcoming"
    },
    {
        id: 3,

       edit:"ab",
       Id:"55",
       name:"Mi",
       unit:"9",
       department:"tech",
       email:"man",
       mobile:"456",
       Staff_Id:"89",
       work_type:"jkl",
       v_name:"jk",
       status:"Upcoming"
    },



  ];

  return (
    <section className="flex">

      <div className=" w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex md:flex-row flex-col gap-5 justify-between mt-10 my-2">
          <div className="sm:flex grid grid-cols-2 items-center justify-center  gap-4 border border-gray-300 rounded-md px-3 p-2 w-auto">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="all"
                name="status"
                checked={selectedStatus === "all"}
                onChange={() => handleStatusChange("all")}
              />
              <label htmlFor="all" className="text-sm">
                All
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="upcoming"
                name="status"
                // checked={selectedStatus === "open"}
                checked={
                  selectedStatus === "upcoming" ||
                  selectedStatus === "upcoming"
                }
                // onChange={() => handleStatusChange("open")}
              />
              <label htmlFor="open" className="text-sm">
                upcoming
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="completed"
                name="status"
                checked={selectedStatus === "completed"}
                onChange={() => handleStatusChange("completed")}
              />
              <label htmlFor="completed" className="text-sm">
                Completed
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="cancelled"
                name="status"
                checked={selectedStatus === "cancelled"}
                //   onChange={() => handleStatusChange("cancelled")}
              />
              <label htmlFor="completed" className="text-sm">
                Cancelled
              </label>
            </div>
          </div>
          <span className="flex gap-4">
            <Link
                to={"/employee/addstaff"}
                className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                style={{ height: '1cm' }}
            >
                <PiPlusCircle size={20} />
                Add
            </Link>
            <button className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center" style={{ height: '1cm' }}>
                Import
            </button>
            <button className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center" style={{ height: '1cm' }}>
                Filter
            </button>
            <button className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center" style={{ height: '1cm' }}>
                History
            </button>
            <button className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center" style={{ height: '1cm' }}>
                All
            </button>
            <button className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center" style={{ height: '1cm' }}>
                In
            </button>
            <button className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center" style={{ height: '1cm' }}>
                Out
            </button>
        </span>
        </div>
        <Table
          responsive
          //   selectableRows
          columns={columns}
          data={data}
          customStyles={customStyle}
          pagination
          fixedHeader
          // fixedHeaderScrollHeight="450px"
          selectableRowsHighlight
          highlightOnHover
        />
      </div>
    </section>
  );
};

export default EmployeeStaff