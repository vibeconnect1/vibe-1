import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DataTable from "react-data-table-component";
import { ImEye } from "react-icons/im";
import { Link } from "react-router-dom";
import Modal from "../containers/modals/Modal";
const Attendance = () => {
  const [modal, setModal] = useState(false);
  const column = [
    {
      name: "Actions",

      selector: (row) => row.action,
    },

    { name: "Name", selector: (row) => row.title, sortable: true },
    { name: "Department", selector: (row) => row.department, sortable: true },
  ];
  const data = [
    {
      id: 1,
      title: "Test1",
      department: "Finance",
      action: <ImEye />,
    },
    {
      id: 2,
      title: "Test2",
      department: "IT",
      action: <ImEye />,
    },
    {
      id: 3,
      title: "Test3",
      department: "Sales",
      action: <ImEye />,
    },
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

  return (
    <section className="flex gap-5 mr-5">
      <Navbar />
      <div className="flex w-full mx-5 my-10 flex-col">
        <div className="flex  justify-center my-5 gap-20 ">
          <div className="shadow-xl rounded-full border-4 border-gray-400 w-52  px-6 flex flex-col items-center">
            <p className="font-semibold text-lg">Total Employees</p>
            <p className="text-center font-semibold text-lg ">0</p>
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
        </div>
        <div className="w-full flex mx-3 flex-col">
          <div className="flex justify-between items-center">
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
          <div>
            <DataTable
              columns={column}
              data={data}
              customStyles={customStyle}
              responsive
              selectableRows
              fixedHeader
              fixedHeaderScrollHeight="500px"
              pagination
              selectableRowsHighlight
              highlightOnHover
              omitColumn={column}
            />
          </div>
        </div>
      </div>
      {modal && <Modal onclose={() => setModal(false)} />}
    </section>
  );
};

export default Attendance;
