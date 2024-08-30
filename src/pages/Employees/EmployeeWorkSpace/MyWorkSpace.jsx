import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import EmployeePortal from "../../../components/navbars/EmployeePortal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table from "../../../components/table/Table";

const MyWorkSpace = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const column = [
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <div className="flex items-center gap-4">
    //       <Link to={`/assets/asset-details/${row.id}`}>
    //         <BsEye size={15} />
    //       </Link>
    //       <Link to={`/assets/edit-asset/${row.id}`}>
    //         <BiEdit size={15} />
    //       </Link>
    //     </div>
    //   ),
    // },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
      //   width: "150px"
    },

    {
      name: "Check in",
      selector: (row) => row.check_in,
      sortable: true,
    },

    { name: "check out", selector: (row) => row.check_out, sortable: true },
    { name: "Working Hrs", selector: (row) => row.working_hrs, sortable: true },

    {
      name: "Deviation hrs",
      selector: (row) => row.deviation,
      sortable: true,
    },

    {
      name: "Late/Early Mark",
      selector: (row) => row.mark,
      sortable: true,
      cell: (row) => (
        <span
          style={{
            color:
              row.mark === "Late"
                ? "red"
                : row.mark === "Early"
                ? "orange"
                : row.mark === "On Time"
                ? "green"
                : "black",
          }}
        >
          {row.mark}
        </span>
      ),
    },

    {
      name: "Status",
      selector: (row) => <p className="text-green-400">{row.status}</p>,
      sortable: true,
    },
    {
      name: "Shift time",
      selector: (row) => row.shift_time,
      sortable: true,
      minWidth: "12rem",
    },
  ];

  const data = [
    {
      id: 1,
      date: "2024-08-28",
      check_in: "08:00 AM",
      check_out: "04:30 PM",
      working_hrs: "8.5 hrs",
      deviation: "0.5 hrs",
      mark: "On Time",
      status: "Present",
      shift_time: "08:00 AM - 05:00 PM",
    },
    {
      id: 2,
      date: "2024-08-27",
      check_in: "09:00 AM",
      check_out: "06:00 PM",
      working_hrs: "9 hrs",
      deviation: "1 hr",
      mark: "Late",
      status: "Present",
      shift_time: "08:00 AM - 05:00 PM",
    },
    {
      id: 3,
      date: "2024-08-26",
      check_in: "08:15 AM",
      check_out: "05:00 PM",
      working_hrs: "8.75 hrs",
      deviation: "0.25 hrs",
      mark: "Early",
      status: "Present",
      shift_time: "08:00 AM - 05:00 PM",
    },
    {
      id: 4,
      date: "2024-08-25",
      check_in: "08:00 AM",
      check_out: "05:15 PM",
      working_hrs: "9.25 hrs",
      deviation: "-0.25 hrs",
      mark: "On Time",
      status: "Present",
      shift_time: "08:00 AM - 05:00 PM",
    },
  ];
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.date);
    if (startDate && endDate) {
      return itemDate >= startDate && itemDate <= endDate;
    }
    return true;
  });
  const totalCount = filteredData.length;
  const presentCount = filteredData.filter(
    (item) => item.status === "Present"
  ).length;
  const absentCount = filteredData.filter(
    (item) => item.status === "Absent"
  ).length;
  return (
    <section className="flex">
      <Navbar />
      <div className="p-2 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        <EmployeePortal />
        <div className="my-2 z-20 flex justify-between items-end">
          <div className="flex gap-4 mt-2">
            <div className="bg-gray-200 p-4 rounded-lg w-40 text-center">
              <h3 className=" font-semibold">Total</h3>
              <p className="">{totalCount}</p>
            </div>
            <div className="bg-green-200 p-4 rounded-lg w-40 text-center">
              <h3 className=" font-semibold">Present</h3>
              <p className="">{presentCount}</p>
            </div>
            <div className="bg-red-200 p-4 rounded-lg w-40 text-center">
              <h3 className=" font-semibold">Absent</h3>
              <p className="">{absentCount}</p>
            </div>
          </div>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
            placeholderText="Search by Date range"
            className="p-2 border-gray-300 rounded-md w-64 outline-none border"
          />
        </div>
        <Table columns={column} data={filteredData} />
      </div>
    </section>
  );
};

export default MyWorkSpace;
