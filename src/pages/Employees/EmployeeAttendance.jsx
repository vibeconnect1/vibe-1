import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

const EmployeeAttendance = () => {
  const today = new Date();
  const year = today.getFullYear();
  const currentMonth = String(today.getMonth() + 1).padStart(2, "0");
  const formattedDate = `${year}-${currentMonth}`;
  const [month, setMonth] = useState(formattedDate);

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

const columns =[
    {
        name: "Action",
        cell: (row) => (
          <div className="flex items-center gap-4">
            <Link to={`/employee-attendance/details/${row.id}`}>
              <BsEye size={15} />
            </Link>
          </div>
        ),
      },
      {
        name: "Date",
        selector: (row) => row.date,
        sortable: true,
      },
        { name: "Attendance", selector: (row) => row.attendance, sortable: true },
        { name: "Leave", selector: (row) => row.leave, sortable: true },
        { name: "Punch In Time", selector: (row) => row.punch_in, sortable: true },
        { name: "Punch Out Time", selector: (row) => row.punch_out, sortable: true },
        { name: "Delay Time", selector: (row) => row.delay_Time, sortable: true },
    ]
    const filteredData = [
{
    id: 1,
    date: "1 may", 
    attendance: "Present",
    leave: "NA",
    punch_in:"10:10 AM",
    punch_out: "6:00 PM",
    delay_Time: "10 min"
},
{
    id: 2,
    date: "2 may", 
    attendance: "Absent",
    leave: "NA",
    punch_in:"10:15 AM",
    punch_out: "6:00 PM",
    delay_Time: "15 min"
},
{
    id: 3,
    date: "3 may", 
    attendance: "Absent",
    leave: "NA",
    punch_in:"10:20 AM",
    punch_out: "6:00 PM",
    delay_Time: "20 min"
}
    ] 

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
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <div className="sm:flex grid grid-cols-2 m-5 justify-start w-fit gap-5 sm:flex-row flex-col flex-shrink flex-wrap ">
          <div
            className={`shadow-xl sm:rounded-full rounded-xl border-4 border-green-400 sm:w-52 sm:px-6  px-4  flex flex-col items-center flex-shrink `}
          >
            <p className="font-medium">Present</p>
            <p>0</p>
          </div>
          <div
            className={`shadow-xl sm:rounded-full rounded-xl border-4 border-red-400 sm:w-52 sm:px-6  px-4  flex flex-col items-center flex-shrink  `}
          >
            <p className="font-medium">Absent</p>
            <p>0</p>
          </div>
          <div
            className={`shadow-xl sm:rounded-full rounded-xl border-4 border-yellow-400 sm:w-52 sm:px-6  px-4  flex flex-col items-center flex-shrink  `}
          >
            <p className="font-medium">Sick Leave</p>
            <p>0</p>
          </div>
          <div
            className={`shadow-xl sm:rounded-full rounded-xl border-4 border-orange-400 sm:w-52 sm:px-6  px-4  flex flex-col items-center flex-shrink `}
          >
            <p className="font-medium">Total Off</p>
            <p>0</p>
          </div>
          <div
            className={`shadow-xl sm:rounded-full rounded-xl border-4 border-orange-400 sm:w-52 sm:px-6  px-4  flex flex-col items-center flex-shrink `}
          >
            <p className="font-medium">Total Delays</p>
            <p>0</p>
          </div>
          {/* <div
            className={`shadow-xl rounded-full border-4 border-green-400 w-52 px-6 p-2 flex flex-col items-center flex-shrink `}
          >
            <p className="font-medium">Total At</p>
            <p>0</p>
          </div> */}
        </div>
        <div className="flex md:flex-row flex-col justify-between my-2">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by Date"
              className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
              //   value={searchText}
              //   onChange={handleSearch}
            />
          </div>
          <div className="flex justify-start">
            <input
              type="month"
              value={month}
              onChange={handleChange}
              className="border border-gray-500  px-2 rounded-md"
            />
          </div>
        </div>
        <DataTable
          responsive
         
          columns={columns}
          data={filteredData}
          customStyles={customStyle}
          pagination
          fixedHeader
          // fixedHeaderScrollHeight="450px"
          selectableRowsHighlight
          highlightOnHover
        />
      </div>
    </section>
  );
};

export default EmployeeAttendance;
