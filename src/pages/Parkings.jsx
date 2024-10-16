import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BsEye } from "react-icons/bs";
import Table from "../components/table/Table";

const Parkings = () => {
  const [filteredData, setFilteredData] = useState([]);
  const columns = [
    {
      name: "view",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/parking-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Booked by",
      selector: (row) => row.booked_by,
      sortable: true,
    },
    {
      name: "Parking Level",
      selector: (row) => row.level,
      sortable: true,
    },
    {
      name: "From",
      selector: (row) => row.from,
      sortable: true,
    },
    {
      name: "To",
      selector: (row) => row.to,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) =>
        row.status !== "Expired" && (
          <button className="text-red-500">Cancel</button>
        ),
      sortable: true,
    },
  ];

  const data = [
    {
      booked_by: "person 1",
      level: 1,
      from: "09:30 AM",
      to: "11:30 AM",
      status: "Upcoming",
    },
    {
      booked_by: "person 2",
      level: 2,
      from: "09:30 AM",
      to: "11:30 AM",
      status: "Expired",
    },
  ];
  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
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
  return (
    <section className="flex">
      <Navbar />
      <div className=" w-full flex m-3 flex-col overflow-hidden">
        <div className="flex  justify-start gap-4 my-2  ">
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
        </div>
        <div className=" flex justify-between my-5">
          <input
            type="text"
            placeholder="Search by level "
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
            //   value={searchText}
            //   onChange={handleSearch}
          />
          <Link
            to={"/admin/book-parking"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Book
          </Link>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
    </section>
  );
};

export default Parkings;
