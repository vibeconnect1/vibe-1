import React, { useState } from "react";
import TicketCategorySetup from "./TicketCategorySetup";
import { useSelector } from "react-redux";
import Table from "../../../components/table/Table";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ColorPicker } from "antd";

const TicketSetupPage = () => {
    const [page, setPage] = useState("Category Type");
    const themeColor = useSelector((state) => state.theme.color);
    const [color, setColor] = useState('#ffffff');
  const [showPicker, setShowPicker] = useState(false);

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };
    const columns1 = [
      {
        name: "Action",
        cell: (row) => (
          <div className="flex items-center gap-4">

            <Link to={`/admin/edit-rvehicles/${row.id}`}>
              <BiEdit size={15} />
            </Link>
          </div>
        ),
      },
      {
        name: "Sr.No",
        selector: (row) => row.No,
        sortable: true,
      },
      {
        name: "Complaint Mode",
        selector: (row) => row.Complaint_Mode,
        sortable: true,
      },
    ]
    const columns2 = [
      {
        name: "Action",
        cell: (row) => (
          <div className="flex items-center gap-4">

            <Link to={`/admin/edit-rvehicles/${row.id}`}>
              <BiEdit size={15} />
            </Link>
          </div>
        ),
      },
      {
        name: "Sr.No",
        selector: (row) => row.No,
        sortable: true,
      },
      {
        name: "Rule",
        selector: (row) => row.Complaint_Mode,
        sortable: true,
      },
    ]
    const columns = [
      {
        name: "Action",
        cell: (row) => (
          <div className="flex items-center gap-4">

            <Link to={`/admin/edit-rvehicles/${row.id}`}>
              <BiEdit size={15} />
            </Link>
          </div>
        ),
      },
      {
        name: "Order",
        selector: (row) => row.Order,
        sortable: true,
      },
      {
        name: "Status",
        selector: (row) => row.Status,
        sortable: true,
      },
      {
        name: "Fixed State",
        selector: (row) => row.Fixed,
        sortable: true,
      },
      {
        name: "Color",
        selector: (row) => row.Color,
        sortable: true,
      },
      {
        name: "Email",
        selector: (row) => row.Email,
        sortable: true,
      },
    ]
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
        Order:"9",
        Status:"Pending",
        Fixed:"io",
        Color:"blue",
        Email:"kl",
      }
    ]
    const data1 = [
      {
        id: 1,
        No:"1",
        Complaint_Mode:"Phone",
      }
    ]
  return (
    <div className=" w-full my-2 flex  overflow-hidden flex-col">
    <div className="flex w-full">
      <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full">
        <h2
          className={`p-1 ${
            page === "Category Type" &&
            `bg-white font-medium text-blue-500 shadow-custom-all-sides`
          } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
          onClick={() => setPage("Category Type")}
        >
           Category Type
        </h2>
        <h2
          className={`p-1 ${
            page === "Status" &&
            "bg-white font-medium text-blue-500 shadow-custom-all-sides"
          } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
          onClick={() => setPage("Status")}
        >
          Status
        </h2>
        <h2
          className={`p-1 ${
            page === "Operational Days" &&
            "bg-white font-medium text-blue-500 shadow-custom-all-sides"
          } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
          onClick={() => setPage("Operational Days")}
        >
          Operational Days
        </h2>
        <h2
          className={`p-1 ${
            page === "Complaint Mode" &&
            "bg-white font-medium text-blue-500 shadow-custom-all-sides"
          } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
          onClick={() => setPage("Complaint Mode")}
        >
          Complaint Mode
        </h2>
        <h2
          className={`p-1 ${
            page === "Aging Rule" &&
            "bg-white font-medium text-blue-500 shadow-custom-all-sides"
          } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
          onClick={() => setPage("Aging Rule")}
        >
          Aging Rule
        </h2>


      </div>
    </div>
    <div>
    {page === "Category Type" && <div><TicketCategorySetup/></div>}
    {page === "Status" && <div> 
      <div className="flex mt-4 mb-3 gap-5">
        <input type="text" placeholder="Enter status"               className="border p-2 rounded-md border-black"
        />
        <select name="" id=""         className="border p-2 rounded-md border-black w-48"
        ></select>
        <input type="text" placeholder="Enter Color"               className="border p-2 rounded-md border-black"
        />
        <ColorPicker/>
        <input type="number" placeholder="Enter order"               className="border p-2 rounded-md border-black"
        />
        <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              Add
            </button>
      </div>
      <Table
          responsive
          //   selectableRows
          columns={columns}
          data={data}
          isPagination={true}
        /></div>}
        {page === "Operational Days" && 
        <div class="overflow-x-auto">
        <table class="table-auto">
          <thead>
            <tr>
            <th class="px-4 py-2"></th>
              <th class="px-4 py-2">Operational Days</th>
              <th class="px-4 py-2">Start Time</th>
              <th class="px-4 py-2">End Time</th>
              {/* <th class="px-4 py-2">Break Start Time</th>
              <th class="px-4 py-2">Break End Time</th>
              <th class="px-4 py-2">Booking Allowed</th>
              <th class="px-4 py-2">Order Allowed</th>
              <th class="px-4 py-2">Last Booking & Order Time</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
            <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2">Monday</td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
      
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td> */}
            </tr>
            <tr>
            <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2">Tuesday</td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td> */}
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td> */}
            </tr>
            <tr>
            <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2">Wednesday</td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td> */}
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td> */}
            </tr>
            <tr>
            <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2">Thursday</td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td> */}
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td> */}
            </tr>
            <tr>
            <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2">Friday</td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td> */}
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td> */}
            </tr>
            <tr>
            <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
            <td class="border px-4 py-2">Saturday</td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td> */}
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
            */}
            </tr>
            <tr>
            <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
            <td class="border px-4 py-2">Sunday</td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td> */}
              {/* <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="checkbox"/></td>
              <td class="border px-4 py-2 text-center"><input type="time" className="border border-gray-400 p-2 rounded-md"/></td>
            */}
            </tr>
          </tbody>
        </table>
      </div>
        }
        {page === "Complaint Mode" && 
        <div className="mt-5">
          <div className="flex gap-5 mb-5">
            <input type="text" placeholder="Enter complaint mode"  className="border p-2 rounded-md border-black"/>
            <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              Add
            </button>
          </div>
           <Table
          responsive
          //   selectableRows
          columns={columns1}
          data={data1}
          isPagination={true}
        />
        </div>
        }
         {page === "Aging Rule" && 
         <div className="mt-7">
          <div className="flex gap-6 mb-5">
          <select name="" id=""         className="border p-2 rounded-md border-black w-48"
        ></select>
         <select name="" id=""         className="border p-2 rounded-md border-black w-48"
        ></select>
         <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              Add
            </button>
          </div>
           <Table
          responsive
          //   selectableRows
          columns={columns2}
          data={data1}
          isPagination={true}
        />
         </div>
         }
      {/* {page === "Permit Activity" &&  <PermitActivityTable/>}
      {page === "Permit Sub Activity" &&  <PermitSubActivityTable/>}
      {page === "Permit Hazard Category" &&  <PermitHazardCategoryTable/>}
      {page === "Permit Risk" &&  <PermitRiskTable/>} */}
    </div>
  </div>
  )
}

export default TicketSetupPage