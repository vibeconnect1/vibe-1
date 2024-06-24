import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";

import Table from "../../components/table/Table";
import AdminHRMS from "./AdminHrms";

const PendingRequest = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const columns = [
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={openModal} className="text-blue-500 hover:text-blue-700 focus:outline-none">
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
    {
      name: "Employee Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.Category,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.Start_Date,
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => row.End_Date,
      sortable: true,
    },
    {
      name: "Leave Days",
      selector: (row) => row.Leave_Days,
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
      Name: "person 1",
      Category: "hj",
      End_Date: "23/10/2024",
      Leave_Days: "abc",
      status: "Upcoming",
    },
  ];

  return (
    <section className="flex">
      <div className="w-full flex m-3 flex-col overflow-hidden">
        <div className="flex justify-between my-5">
          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
          />
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal panel */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {/* Modal content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="">
                  <div className="mt-3  sm:mt-0 sm:ml-4 ">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-headline">
                      Edit Leave
                    </h3>
                    <div className="mb-4">
                      <label htmlFor="leaveCategory" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Leave Category *
                      </label>
                      <select
                        id="leaveCategory"
                        name="leaveCategory"
                        className=" w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="lwp">LWP</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">Pending Applications: 1 Applications / 0.5 Days</p>
                      <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Date Range for this Leave
                      </label>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          id="dateRange"
                          name="dateRange"
                          className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm flex-1"
                          value="21-06-2024 - 21-06-2024"

                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">Are There Any Half Days?</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <input
                            id="halfDayYes"
                            name="halfDay"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label htmlFor="halfDayYes" className="ml-1 block text-sm font-medium text-gray-700">
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="halfDayNo"
                            name="halfDay"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label htmlFor="halfDayNo" className="ml-1 block text-sm font-medium text-gray-700">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="halfDaySelect" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Half Days
                      </label>
                      <input
                        type="text"
                        id="halfDaySelect"
                        name="halfDaySelect"
                        className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value="21-06-2024"
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                        Reason for Leave
                      </label>
                      <textarea
                        id="reason"
                        name="reason"
                        rows="3"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Enter your reason for leave"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal footer */}
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PendingRequest;