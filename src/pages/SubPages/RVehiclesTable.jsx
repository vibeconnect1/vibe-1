import React, { useEffect, useState } from "react";
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
import qr from "/QR.png"
import { getRegisteredVehicle } from "../../api";
const RVehiclesTable = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const themeColor = useSelector((state) => state.theme.color);
  const [registeredVehicles, setRegisteredVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
 
  useEffect(() => {
    const fetchRegisteredVehicle = async () => {
      try {
        const historyResp = await getRegisteredVehicle();
        const sortedVisitor = historyResp.data.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        setRegisteredVehicles(sortedVisitor);
        setFilteredVehicles(sortedVisitor);
        console.log(sortedVisitor);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRegisteredVehicle();
  }, []);
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/rvehicles-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/admin/edit-rvehicles/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Vehicle Number",
      selector: (row) => row.vehicle_number,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Parking Slot",
      selector: (row) => row.Parking_Slot,
      sortable: true,
    },
    {
      name: "Vehicle Category",
      selector: (row) => row.vehicle_category,
      sortable: true,
    },

    {
      name: "Vehicle Type",
      selector: (row) => row.vehicle_type,
      sortable: true,
    },

    {
      name: "Sticker Number",
      selector: (row) => row.sticker_number,
      sortable: true,
    },
    // {
    //   name: "Category",
    //   selector: (row) => row.Category,
    //   sortable: true,
    // },
    {
      name: "Registration Number",
      selector: (row) => row.registration_number,
      sortable: true,
    },
    {
      name: "Insurance Number",
      selector: (row) => row.insurance_number,
      sortable: true,
    },
    {
      name: "Active/Inactive",
      selector: (row) => row.ActiveInactive,
      sortable: true,
    },
    // {
    //   name: "Insurance Number",
    //   selector: (row) => row.Insurance_Number,
    //   sortable: true,
    // },

    // {
    //   name: "Insurance Valid Till",
    //   selector: (row) => row.Insurance_Valid_Till,
    //   sortable: true,
    // },
    // {
    //   name: "Staff Name",
    //   selector: (row) => row.Staff_Name,
    //   sortable: true,
    // },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Qr Code",
      selector: (row) => <img src={qr} alt="" width={40} />,
      sortable: true,
    },

    // {
    //   name: "Cancellation",
    //   selector: (row) =>
    //     row.status === "Upcoming" && (
    //       <button className="text-red-400 font-medium">Cancel</button>
    //     ),
    //   sortable: true,
    // },
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
      Vehicle_Number: "MH02BC1215",
      Parking_Slot: "P1",
      Vehicle_Category: "EV",
      Vehicle_Type: "$ Wheeler",
      Sticker_Number: "78",
      // Category: "uio",
      Registration_Number: "456",
      ActiveInactive: "Active",
      // Insurance_Number: "45",
      // Insurance_Valid_Till: "23/05/2024",
      // Staff_Name: "abc",
      status: "Upcoming",
      // Qr_Code: "45",
    },
    {
      id: 2,
      Vehicle_Number: "MH02BC1215",
      Parking_Slot: "P2",
      Vehicle_Category: "EV",
      Vehicle_Type: "$ Wheeler",
      Sticker_Number: "78",
      // Category: "uio",
      Registration_Number: "456",
      ActiveInactive: "Active",
      // Insurance_Number: "45",
      // Insurance_Valid_Till: "23/05/2024",
      // Staff_Name: "abc",
      status: "Upcoming",
      // Qr_Code: "45",
    },
    {
      id: 3,
      Vehicle_Number: "MH02BC1215",
      Parking_Slot: "P3",
      Vehicle_Category: "EV",
      Vehicle_Type: "$ Wheeler",
      Sticker_Number: "78",
      // Category: "uio",
      Registration_Number: "456",
      ActiveInactive: "Active",
      // Insurance_Number: "45",
      // Insurance_Valid_Till: "23/05/2024",
      // Staff_Name: "abc",
      status: "Upcoming",
      // Qr_Code: "45",
    },
   
  ];

  return (
    <section className="flex">
      <div className=" w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex md:flex-row flex-col gap-5 justify-between  my-2">
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
            <Link
              to={"/admin/add-rvehicles"}
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              <PiPlusCircle size={20} />
              Add
            </Link>
          
          </span>
        </div>
        <Table
          responsive
          //   selectableRows
          columns={columns}
          data={registeredVehicles}
          isPagination={true}
        />
      </div>
    </section>
  );
};

export default RVehiclesTable;
