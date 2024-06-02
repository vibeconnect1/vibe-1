import { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
//import Navbar from "../../../components/Navbar";
import DataTable from "react-data-table-component";
import { BsEye } from "react-icons/bs";
import { useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Table from "../../components/table/Table";
const InwardsTable = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const themeColor = useSelector((state) => state.theme.color);
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/inwards-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },

    {
      name: "Type",
      selector: (row) => row.Type,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.Category,
      sortable: true,
    },
    {
      name: "Person Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Profile Image",
      selector: (row) => row.Profile_Image,
      sortable: true,
    },
    {
      name: "Pass No.",
      selector: (row) => row.Pass_No,
      sortable: true,
    },

    {
      name: "Mode of Transport",
      selector: (row) => row.Transport,
      sortable: true,
    },
    {
      name: "LR No.",
      selector: (row) => row.LR_No,
      sortable: true,
    },

    {
      name: "Trip ID",
      selector: (row) => row.trip_id,
      sortable: true,
    },
    {
      name: "Gate Entry",
      selector: (row) => row.Gate_Entry,
      sortable: true,
    },

    {
      name: "Item Details",
      selector: (row) => row.Item_Details,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
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
      Type: "abc",
      Category: "abc",
      name: "asd",
      Profile_Image: "kl",
      Pass_No: "789",
      Transport: "Road",
      LR_No: "456",
      trip_id: "45",
      Gate_Entry: "56",
      Item_Details: "56",
      status: "Upcoming",
    },
    {
      id: 2,
      Type: "abc",
      Category: "abc",
      name: "asd",
      Profile_Image: "kl",
      Pass_No: "789",
      Transport: "Road",
      LR_No: "456",
      trip_id: "45",
      Gate_Entry: "56",
      Item_Details: "56",

      status: "Upcoming",
    },
    {
      id: 3,
      Type: "abc",
      Category: "abc",
      name: "asd",
      Profile_Image: "kl",
      Pass_No: "789",
      Transport: "Road",
      LR_No: "456",
      trip_id: "45",
      Gate_Entry: "56",
      Item_Details: "56",

      status: "Upcoming",
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
                  selectedStatus === "upcoming" || selectedStatus === "upcoming"
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
            <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              Filter
            </button>
          </span>
        </div>
        <Table
          columns={columns}
          data={data}
          customStyles={customStyle}
          isPagination={true}
        />
      </div>
    </section>
  );
};

export default InwardsTable;
