import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../components/table/Table";
import { BsEye } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { getRoutineTask } from "../api";
import toast from "react-hot-toast";

const RoutineTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchRoutineTask = async () => {
      const taskResponse = await getRoutineTask();
      console.log(taskResponse)
      setTasks(taskResponse.data.activities);
    };
    fetchRoutineTask();
    console.log(tasks);
  }, []);
  const RoutineColumns = [
    {
      name: "View",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/assets/asset-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    { name: "Asset Name", selector: (row) => row.asset_name, sortable: true },
    {
      name: "Checklist",
      selector: (row) => row.checklist_name,
      sortable: true,
    },
    { name: "Start Time", selector: (row) => row.start_time, sortable: true },
    { name: "End Time", selector: (row) => row.end_time, sortable: true },
    { name: "Type", selector: (row) => row.type, sortable: true },
    { name: "Status", selector: (row) => row.status, sortable: true },
    { name: "Assigned To", selector: (row) => row.assigned_to, sortable: true },

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
            to={"/admin/add-checklist"}
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
      <Table columns={RoutineColumns} data={tasks} isPagination={true} />
    </div>
  );
};

export default RoutineTask;
