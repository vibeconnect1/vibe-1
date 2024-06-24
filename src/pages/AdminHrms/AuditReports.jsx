import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import Table from "../../components/table/Table";

import ReportDetailsList from "./ReportDetailsList";

const AuditReports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button             className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
 onClick={openModal}>Generate</button>
        </div>
      ),
    },
    {
      name: "Sr. No",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Report Name",
      selector: (row) => row.Label,
      sortable: true,
    },
  ];

  const data = [
    {
      Name: "person 1",
      Location: "Mumbai",
      City: "Mumbai",
      State: "Maharashtra",
      Country: "India",
    },
  ];

  const openModal = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  return (
    <section className="flex gap-3 ml-20">
      <ReportDetailsList />
      <div className="w-full flex m-3 flex-col overflow-hidden">
        <div className="flex justify-between my-5">
          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
            // value={searchText}
            // onChange={handleSearch}
          />
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Generate UAN and ESIC IP Missing List</h2>
            <form>
              <div className="form-group mb-4">
                <label htmlFor="employeeStatus" className="block text-sm font-medium text-gray-700">
                  Select Employee Status *
                </label>
                <select
                  id="employeeStatus"
                  name="employeeStatus"
                  className="border border-gray-400 rounded-lg p-2 mt-1 block w-full"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AuditReports;