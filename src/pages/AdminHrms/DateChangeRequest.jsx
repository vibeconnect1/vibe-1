import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";

import Table from "../../components/table/Table";

import { BiEdit } from "react-icons/bi";

import EmployeeDetailsList from "./EmployeeDetailsList";
import { useSelector } from "react-redux";
import RequestEmployeeInfoModal from "./RequestEmployeeInfoModal";
import { FaChevronDown } from "react-icons/fa";

const DataChangeRequest = () => {
  const [page, setPage] = useState("Pending");

  const [isOpen, setIsOpen] = useState(false);
  const themeColor = useSelector((state) => state.theme.color);
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const columns = [
    {
      name: "view",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link
          //   to={`/admin/edit-templates/${row.id}`}
          >
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Employee Name	",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Request Type",
      selector: (row) => row.Label,
      sortable: true,
    },
    {
      name: "Submitted Date",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Requested By",
      selector: (row) => row.State,
      sortable: true,
    },

    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const data = [
    {
      Label: "Data change",
      Location: "Mittu Panda",
      City: "2/2/2024",
      State: "Ramesh Nayak",
      status: "pending",
      // Country:"India",
    },
  ];
  const data1 = [
    {
      Label: "Data change",
      Location: "Mittu Panda",
      City: "2/2/2024",
      State: "Ramesh Nayak",
      status: "completed",
      // Country:"India",
    },
  ];

  return (
    <section className="flex ml-20">
      {/* <OrganisationSetting/> */}
      <EmployeeDetailsList />

      <div className=" w-full flex m-3 flex-col overflow-hidden">
        <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full mb-2">
          <h2
            className={`p-1 ${
              page === "Pending" &&
              `bg-white font-medium text-blue-500 shadow-custom-all-sides`
            } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
            onClick={() => setPage("Pending")}
          >
            Pending Reports
          </h2>
          <h2
            className={`p-1 ${
              page === "Completed" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("Completed")}
          >
            Completed Reports
          </h2>
        </div>
        {page === "Pending" && (
          <div>
            <div className="flex justify-end mb-2 gap-2">
              <input
                type="text"
                placeholder="Search by Employee name "
                className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
              />
              <button
                onClick={() => setIsModalOpen(true)}
                style={{ background: themeColor }}
                className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
              >
                Filter
              </button>
              <div className="relative inline-block text-left">
                <button
                  onClick={toggleDropdown}
                  className="inline-flex justify-center w-full gap-2 items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Actions
                  <FaChevronDown />
                </button>
              </div>
            </div>
            <Table columns={columns} data={data} isPagination={true} />
          </div>
        )}
        {page === "Completed" && (
          <div>
            <div className="flex justify-end mb-2 gap-2">
              <input
                type="text"
                placeholder="Search by Employee name "
                className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
              />
              <button
                onClick={() => setIsModalOpen(true)}
                style={{ background: themeColor }}
                className="bg-black text-white hover:bg-gray-700 font-semibold px-4 rounded"
              >
                Filter
              </button>
              <div className="relative inline-block text-left">
                <button
                  onClick={toggleDropdown}
                  className="inline-flex justify-center gap-2 w-full items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Actions
                  <FaChevronDown />
                </button>
              </div>
            </div>
            <Table columns={columns} data={data1} isPagination={true} />
          </div>
        )}
        {isOpen && (
          <div className="absolute right-2 top-[6.5rem] border z-20 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <button onClick={() => setShowModal(true)}>
                  Request Employee Information
                </button>
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {/* Upload Statutory Settings */}
                <button>Bulk Approve</button>
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {/* Upload Documents */}
                <button>Bulk Reject</button>
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {/* Bulk Update Employee Data */}
                <button>Bulk Delete</button>
              </a>
            </div>
          </div>
        )}

        <div className=" flex justify-end gap-2 my-5 mr-4">
          {/* <button onClick={() => setShowModal(true)} className="p-2 bg-green-500 text-white rounded">Request Employee Info</button> */}
          <RequestEmployeeInfoModal
            showModal={showModal}
            setShowModal={setShowModal}
          />
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
              <div className="bg-white p-5 rounded-md shadow-md w-1/3">
                {/* <h2 className="text-xl font-semibold mb-4">Add Department</h2> */}
                <div className="mb-4">
                  <label
                    htmlFor="departmentName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Request Status
                  </label>
                  <select
                    type="text"
                    id="departmentName"
                    className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                    placeholder="Enter Department Name"
                  >
                    <option value="">Pending Approval</option>
                    <option value="">Pending Submission</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="headOfDepartment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Creation(From)
                  </label>
                  <input
                    type="date"
                    id="headOfDepartment"
                    // value={headOfDepartment}
                    // onChange={(e) => setHeadOfDepartment(e.target.value)}
                    className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                  ></input>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="headOfDepartment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Creation(To)
                  </label>
                  <input
                    type="date"
                    id="headOfDepartment"
                    className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                  ></input>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="headOfDepartment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Employee Department
                  </label>
                  <select
                    id="headOfDepartment"
                    // value={headOfDepartment}
                    // onChange={(e) => setHeadOfDepartment(e.target.value)}
                    className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                  >
                    <option value="">HR</option>
                    <option value="">Driver</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="headOfDepartment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Branch Location
                  </label>
                  <select
                    id="headOfDepartment"
                    // value={headOfDepartment}
                    // onChange={(e) => setHeadOfDepartment(e.target.value)}
                    className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                  >
                    <option value="">Mumbai</option>
                    <option value="">Delhi</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="headOfDepartment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Employee Status
                  </label>
                  <select
                    id="headOfDepartment"
                    // value={headOfDepartment}
                    // onChange={(e) => setHeadOfDepartment(e.target.value)}
                    className="mt-1 block w-full border border-gray-400 p-2 rounded-md"
                  >
                    <option value="">Incomplete</option>
                    <option value="">Active</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-300 text-gray-700 p-2 rounded-md mr-2"
                  >
                    Clear
                  </button>
                  <button
                    // onClick={handleAddDepartment}
                    className="bg-blue-500 text-white p-2 rounded-md"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <Table columns={columns} data={data} isPagination={true} /> */}
      </div>
    </section>
  );
};

export default DataChangeRequest;
