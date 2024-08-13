import { useEffect, useState } from "react";
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
import { getGoods } from "../../api";
const InwardsTable = ({goodIn}) => {
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
        <div className="flex md:flex-row flex-col gap-5 justify-between my-2">
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
        </div>
        <Table
          columns={columns}
          data={data}
          // customStyles={customStyle}
          isPagination={true}
        />
      </div>
    </section>
  );
};

export default InwardsTable;
