import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/table/Table";
import { ImEye } from "react-icons/im";
import { useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { PiPlusCircle } from "react-icons/pi";

import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
//import Modal from "../containers/modals/Modal";
const MaterialPR = () => {
  const themeColor = useSelector((state) => state.theme.color);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const column = [
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/materialpr-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/admin/edit-materialpr/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },

    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "PR No.", selector: (row) => row.pr, sortable: true },
    { name: "Ref No.", selector: (row) => row.ref, sortable: true },
    { name: "Supplier Name", selector: (row) => row.type, sortable: true },
    { name: "Created By", selector: (row) => row.for, sortable: true },

    { name: "Created On", selector: (row) => row.createby, sortable: true },
    { name: "Last Approved By", selector: (row) => row.desg, sortable: true },
    { name: "Approved Status", selector: (row) => row.status, sortable: true },
    { name: "PR Amount", selector: (row) => row.location, sortable: true },
    { name: "Active/Inactive", selector: (row) => row.active, sortable: true },
  ];
  const data = [
    {
      id: 1,
      pr: "789",
      ref: "45",
      type: "Classic Enterprises",
      for: "test123",
      createby: "MP",
      desg: "ajd",
      status: "Draft",
      location: "Mumbai",
      active: <input type="checkbox" />,
    },
  ];

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: themeColor,
        color: "white",

        fontSize: "14px",
      },
    },
  };
  document.title = `Permit - Vibe Connect`;
  return (
    <section className="flex ">
      {/* <Navbar /> */}
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        {/* <Purchase/> */}
        <div className="my-2">
          <div className=" flex my-3 flex-col">
            <div className="flex justify-between gap-2">
              <input
                type="text"
                placeholder="Search By Name"
                className="border-2 p-2 w-96 border-gray-300 rounded-lg"
              />
              <Link
                to={"/admin/add-material-pr"}
                style={{background: themeColor}}
                className="border-2 font-semibold  hover:text-white transition-all  p-2 rounded-md  cursor-pointer text-center flex items-center gap-2 justify-center"
                // style={{ height: '1cm' }}
              >
                <PiPlusCircle size={20} />
                Add
              </Link>
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                  <div className="bg-white p-5 rounded-md z-50 w-full max-w-md mx-auto">
                    <h2 className="text-xl font-bold mb-4">PR Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-semibold flex items-center">
                          Reference Number
                        </label>
                        <input
                          type="text"
                          className="border p-2 rounded-md w-full"
                          placeholder="Enter Reference Number"
                        />
                      </div>
                      <div>
                        <label className="font-semibold flex items-center">
                          PR Number
                        </label>
                        <input
                          type="text"
                          className="border p-2 rounded-md w-full"
                          placeholder="Enter PR Number"
                        />
                      </div>
                      <div>
                        <label className="font-semibold flex items-center">
                          Supplier Name
                        </label>
                        <input
                          type="text"
                          className="border p-2 rounded-md w-full"
                          placeholder="Enter Supplier Name"
                        />
                      </div>
                      <div>
                        <label className="font-semibold flex items-center">
                          Approval Status
                        </label>

                        <select className="border p-2 rounded-md w-full">
                          <option value="">Select Status</option>
                          <option value="approved">Approved</option>
                          <option value="pending">Pending</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button
                        onClick={closeModal}
                        className="bg-red-500 text-white p-2 rounded-md mr-2"
                      >
                        Close
                      </button>
                      <button className="bg-blue-500 text-white p-2 rounded-md">
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Table
            columns={column}
            data={data}
            //   customStyles={customStyle}
            responsive
            fixedHeader
            fixedHeaderScrollHeight="500px"
            pagination
            selectableRowsHighlight
            highlightOnHover
            omitColumn={column}
          />
        </div>
      </div>
    </section>
  );
};

export default MaterialPR;
