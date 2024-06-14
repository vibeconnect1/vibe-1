import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DataTable from "react-data-table-component";
import { ImEye } from "react-icons/im";
import { Link } from "react-router-dom";
import Modal from "../containers/modals/Modal";
import { getAttendance } from "../api";
import Table from "../components/table/Table";
const Attendance = () => {
  const [modal, setModal] = useState(false);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const attendanceResponse = await getAttendance();
        console.log(attendanceResponse.data);
        setAttendanceData(attendanceResponse.data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchAttendance();
  }, []);

  const dateFormat = (dateString)=>{
    const date = new Date(dateString)
    return date.toLocaleString()
  }
  const column = [
    // {
    //   name: "Actions",

    //   selector: (row) => row.action,
    // },

    { name: "Punch In", selector: (row) => dateFormat(row.punched_in_at), sortable: true },
    { name: "Punch Out", selector: (row) => dateFormat(row.punched_out_at), sortable: true },
  ];
 

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",

        fontSize: "14px",
      },
    },
  };
  document.title = `Attendance - Vibe Connect`;
  return (
    <section className="flex ">
      <Navbar />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        {/* <div className="flex  justify-start gap-4 my-5  ">
          <div className="shadow-xl rounded-full border-4 border-gray-400 w-52  px-6 flex flex-col items-center">
            <p className="font-semibold text-lg">Total Employees</p>
            <p className="text-center font-semibold text-lg ">{attendanceData.length}</p>
          </div>
          <div className="shadow-xl rounded-full border-4 border-green-400 w-52  px-6 flex flex-col items-center">
            <p className="font-semibold text-lg">Present</p>
            <p className="text-center font-semibold text-lg ">0</p>
          </div>
          <div className="shadow-xl rounded-full border-4 border-red-400 w-52  px-6 flex flex-col items-center">
            <p className="font-semibold text-lg">Absent</p>
            <p className="text-center font-semibold text-lg ">0</p>
          </div>

          <div className="shadow-xl rounded-full border-4 border-orange-400 w-52  px-6 flex flex-col items-center">
            <p className="font-semibold text-lg">On Leave</p>
            <p className="text-center font-semibold text-lg ">0</p>
          </div>
        </div> */}
        <div className=" flex mx-3 flex-col my-5 ">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <input
              type="text"
              placeholder="Search By Name"
              className="border-2 p-2 w-96 border-gray-300 rounded-lg"
            />
            <button
              className="bg-black w-20 rounded-lg text-white p-2 my-5"
              onClick={() => setModal(true)}
            >
              Export
            </button>
          </div>

         <Table  columns={column} data={attendanceData}/>
        </div>
      </div>
      {modal && <Modal onclose={() => setModal(false)} />}
    </section>
  );
};

export default Attendance;
