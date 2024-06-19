import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getInventory } from "../api";
import Table from "../components/table/Table";
import { BiEdit } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

const Inventory = () => {
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    const fetchInventory = async () => {
      const invResp = await getInventory();
      setStocks(invResp.data);
      console.log(invResp);
    };
    fetchInventory();
  }, []);

  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Description", selector: (row) => row.description, sortable: true },
    {
      name: "Available Quantity",
      selector: (row) => row.available_quantity,
      sortable: true,
    },
    { name: "Rate", selector: (row) => row.rate, sortable: true },
    { name: "Group", selector: (row) => row.group, sortable: true },
    { name: "Sub Group", selector: (row) => row.sub_group, sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/edit-stock/${row.id}`}>
            <BiEdit size={15} />
          </Link>
          {/* <button className="text-red-400">
            <MdDeleteForever size={25} />
          </button> */}
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center my-2 gap-2  ">
        <input
          type="text"
          placeholder="Search By Stock name"
          className="border-2 p-2 md:w-96 border-gray-300 rounded-lg placeholder:text-sm"
          //   value={searchText}
          //   onChange={handleSearch}
        />
        <div className="md:flex grid grid-cols-2 sm:flex-row my-2 flex-col gap-2">
          <Link
            to={"/admin/add-stock"}
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
      <Table columns={columns} data={stocks} />
    </div>
  );
};

export default Inventory;
