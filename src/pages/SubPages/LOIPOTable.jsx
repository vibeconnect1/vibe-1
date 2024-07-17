import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
//import Navbar from "../../../components/Navbar";
import DataTable from "react-data-table-component";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import Table from "../../components/table/Table";

const LOIPOTable = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const themeColor = useSelector((state) => state.theme.color);

  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/loi-po-detail/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/admin/edit-Loi-po/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "LOI No.",
      selector: (row) => row.loino,
      sortable: true,
    },

    {
      name: "Active/Inactive",
      selector: (row) => row.active,
      sortable: true,
    },

    {
      name: "Created By",
      selector: (row) => row.create,
      sortable: true,
    },

    {
      name: "Created On",
      selector: (row) => row.createon,
      sortable: true,
    },
    {
      name: "LOI Amount",
      selector: (row) => row.total,
      sortable: true,
    },

    {
      name: "Cancellation",
      selector: (row) =>
        row.status === "Upcoming" && (
          <button className="text-red-400 font-medium">Cancel</button>
        ),
      sortable: true,
    },
    {
      name: "Approval",
      selector: (row) =>
        row.status === "Upcoming" && (
          <div className="flex justify-center gap-2">
            <button className="text-green-400 font-medium hover:bg-green-400 hover:text-white transition-all duration-200 p-1 rounded-full">
              <TiTick size={20} />
            </button>
            <button className="text-red-400 font-medium hover:bg-red-400 hover:text-white transition-all duration-200 p-1 rounded-full">
              <IoClose size={20} />
            </button>
          </div>
        ),
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
      loino: "789",
      active: "active",
      create: "MP",
      createon: "24/10/2024",
      total: "Rs789",
    },
    {
      id: 2,
      loino: "789",
      active: "active",
      create: "MP",
      createon: "24/10/2024",
      total: "Rs789",
    },
    {
      id: 3,
      loino: "789",
      active: "active",
      create: "MP",
      createon: "24/10/2024",
      total: "Rs789",
    },
  ];

  return (
    <section className="flex">
      <div className=" w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex md:flex-row flex-col gap-5 justify-between my-2">
          <input
            type="text"
            placeholder="Search  "
            className="border border-gray-400 w-96 placeholder:text-xs rounded-lg p-2"
            //   value={searchText}
            //   onChange={handleSearch}
          />
          <div className="flex items-center gap-2">
            <Link
            style={{background: themeColor}}
              to={"/admin/add-loi"}
              className=" font-semibold text-white  transition-all  p-2 px-4 rounded-md  cursor-pointer text-center flex items-center gap-2 justify-center"
            >
              <PiPlusCircle size={20} />
              Add
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style={{background: themeColor}}
              // onClick={exportToExcel}
            >
              Export
            </button>
          </div>
        </div>
        <Table
          responsive
          //   selectableRows
          columns={columns}
          data={data}
          isPagination={true}
        />
      </div>
    </section>
  );
};

export default LOIPOTable;
