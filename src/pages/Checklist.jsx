import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getChecklist } from "../api";
import Table from "../components/table/Table";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const Checklist = () => {
  const [checklists, setChecklists] = useState([]);

  useEffect(() => {
    const fetchChecklist = async () => {
      const checklist = await getChecklist();
      setChecklists(checklist.data.checklists);
    };
    fetchChecklist();
    console.log(checklists);
  }, []);

  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },

    {
      name: "frequency",
      selector: (row) => row.frequency,
      sortable: true,
    },
    { name: "Start Date", selector: (row) => row.start_date, sortable: true },
    { name: "End Date", selector: (row) => row.end_date, sortable: true },
    {
      name: "No. of Questions",
      selector: (row) => row.questions.length,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/assets/edit-asset/${row.id}`}>
            <BiEdit size={15} />
          </Link>
          <button className="text-red-400">
            <MdDeleteForever size={25} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center my-2 gap-2  ">
        <input
          type="text"
          placeholder="Search By name"
          className="border-2 p-2 md:w-96 border-gray-300 rounded-lg placeholder:text-sm"
          //   value={searchText}
          //   onChange={handleSearch}
        />
        <div className="md:flex grid grid-cols-2 sm:flex-row my-2 flex-col gap-2">
          <Link
            to={"/admin/add-inventory"}
            className="bg-black  text-sm rounded-lg flex justify-center font-semibold items-center gap-2 text-white py-2 px-4 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 "
          >
            <IoAddCircleOutline size={20} />
            Add
          </Link>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            // onClick={exportToExcel}
          >
            Export
          </button>
          {/* <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleDownloadQRCode}
    disabled={selectedRows.length === 0}
  >
    Download QR Code
  </button> */}
        </div>
      </div>
      <Table columns={columns} data={checklists} isPagination={true} />
    </div>
  );
};

export default Checklist;
