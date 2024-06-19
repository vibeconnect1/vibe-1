import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Table from "../../components/table/Table";
import HRMS from "./HRMS";
import { BiEdit } from "react-icons/bi";

const AdvanceClaimModal = ({ isOpen, onClose, onSubmit }) => {
  const [advanceAmount, setAdvanceAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [repaymentTerms, setRepaymentTerms] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ advanceAmount, purpose, repaymentTerms });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Add Advance Claim</h2>
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Employee ID</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              value={advanceAmount}
              onChange={(e) => setAdvanceAmount(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Employee Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              value={advanceAmount}
              onChange={(e) => setAdvanceAmount(e.target.value)}
              required
            /></div>
         
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Advance date</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              value={advanceAmount}
              onChange={(e) => setAdvanceAmount(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Advance time</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              value={advanceAmount}
              onChange={(e) => setAdvanceAmount(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Advance Amount</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              value={advanceAmount}
              onChange={(e) => setAdvanceAmount(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Purpose</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              required
            />
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Repayment Terms</label>
            <textarea
              type="text"
              className="w-full border p-2 rounded-md"
              value={repaymentTerms}
              onChange={(e) => setRepaymentTerms(e.target.value)}
              required
            />
          </div> 
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="border-2 font-semibold hover:bg-gray-200 duration-150 transition-all border-black p-1 px-4 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-1 px-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AdminHRMSAdvanceClaim = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Data:", formData);
    // Add logic to handle form submission, e.g., API call to save the data
  };

  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/hrms-advance-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link onClick={handleAddClick}>
            <BiEdit size={15} />
          </Link>

        </div>
      ),
    },
    {
        name: "Employee ID",
        selector: (row) => row.ID,
        sortable: true,
      },
    {
      name: "Employee Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Advance Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Advance Time",
      selector: (row) => row.time,
      sortable: true,
    },
    {
      name: "Advance Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Purpose",
      selector: (row) => row.purpose,
      sortable: true,
    },
    {
      name: "Repayment Terms",
      selector: (row) => row.terms,
      sortable: true,
    },
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

  const data = [
    {
      id: 1,
      ID:90,
      name: "Mittu",
      amount: "10000",
      date: "03/02/2004",
      time: "3:00pm",
      purpose: "emergency",
      terms: "abc",
    },
    {
      id: 2,
      ID:90,
      name: "Mittu",
      amount: "10000",
      date: "03/02/2004",
      purpose: "emergency",
      terms: "abc",
      time: "3:00pm",
    },
    {
      id: 3,
      ID:90,
      name: "Mittu",
      amount: "10000",
      date: "03/02/2004",
      purpose: "emergency",
      terms: "abc",
      time: "3:00pm",
    },
  ];

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  return (
    <section className="flex">
      <HRMS />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex md:flex-row flex-col gap-5 justify-between mt-10 my-2">
          <div className="sm:flex grid grid-cols-2 items-center justify-center gap-4 border border-gray-300 rounded-md px-3 p-2 w-auto">
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
                checked={selectedStatus === "upcoming"}
                onChange={() => handleStatusChange("upcoming")}
              />
              <label htmlFor="upcoming" className="text-sm">
                Upcoming
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
              />
              <label htmlFor="completed" className="text-sm">
                Cancelled
              </label>
            </div>
          </div>

          <span className="flex gap-4">
            <input
              type="text"
              placeholder="Search"
              className="border-2 p-2 w-96 border-gray-300 rounded-lg"
            />
            <button
              onClick={handleAddClick}
              className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
            >
              <PiPlusCircle size={20} />
              Add
            </button>
            <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              Filter
            </button>
          </span>
        </div>
        <Table columns={columns} data={data} />
      </div>
      <AdvanceClaimModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
      />
    </section>
  );
};

export default AdminHRMSAdvanceClaim;
