import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import Table from "../../components/table/Table";
import AdminHRMS from "./AdminHrms";
import { BiEdit } from "react-icons/bi";

const RosterShift = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const [shiftName, setShiftName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [fullDayHours, setFullDayHours] = useState({ hours: 0, minutes: 0 });
  const [halfDayHours, setHalfDayHours] = useState({ hours: 0, minutes: 0 });
  const [isBreakShift, setIsBreakShift] = useState(false);
  const [breakStartTime, setBreakStartTime] = useState('');
  const [breakEndTime, setBreakEndTime] = useState('');

  const columns = [
    {
      name: "view",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link onClick={handleModalToggle1}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Shift Name",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Starts From",
      selector: (row) => row.Label,
      sortable: true,
    },
    {
      name: "Ends At",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => row.State,
      sortable: true,
    },
    {
      name: "Updated At",
      selector: (row) => row.Country,
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

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalToggle1 = () => {
    setIsModalOpen1(!isModalOpen1);
  };

  const handleAddShift = () => {
    // Logic to handle adding the shift
    console.log({
      shiftName,
      startTime,
      endTime,
      fullDayHours,
      halfDayHours,
      isBreakShift,
      breakStartTime,
      breakEndTime,
    });

    // Close the modal after adding the shift
    setIsModalOpen(false);
    setIsModalOpen1(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsModalOpen1(false);
  };

  return (
    <section className="flex ml-20">
      <AdminHRMS />
      <div className="w-full flex m-3 flex-col overflow-hidden">
        <div className="flex justify-between my-5">
          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
          />
          <button
            onClick={handleModalToggle}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add Shift
          </button>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>

      {(isModalOpen || isModalOpen1) && (
        <div className="z-10 fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">{isModalOpen ? 'Add New Shift' : 'Edit Shift'}</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Please Assign a Shift Name *</label>
              <input
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter Shift Name"
                value={shiftName}
                onChange={(e) => setShiftName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">What are the Shift Timings? *</label>
              <div className="flex gap-2">
                <div>
                  <label>From:</label>
                  <input
                    type="time"
                    className="border p-2 w-full rounded"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
                <div>
                  <label>Till:</label>
                  <input
                    type="time"
                    className="border p-2 w-full rounded"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">What are minimum hours for Full Day</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  className="border p-2 w-full rounded"
                  placeholder="Hours"
                  value={fullDayHours.hours}
                  onChange={(e) => setFullDayHours({ ...fullDayHours, hours: e.target.value })}
                />
                <input
                  type="number"
                  className="border p-2 w-full rounded"
                  placeholder="Minutes"
                  value={fullDayHours.minutes}
                  onChange={(e) => setFullDayHours({ ...fullDayHours, minutes: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">What are minimum hours for Half Day</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  className="border p-2 w-full rounded"
                  placeholder="Hours"
                  value={halfDayHours.hours}
                  onChange={(e) => setHalfDayHours({ ...halfDayHours, hours: e.target.value })}
                />
                <input
                  type="number"
                  className="border p-2 w-full rounded"
                  placeholder="Minutes"
                  value={halfDayHours.minutes}
                  onChange={(e) => setHalfDayHours({ ...halfDayHours, minutes: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Is Break shift Applicable in this shift?</label>
              <div className="flex gap-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="breakShift"
                    className="mr-2"
                    checked={isBreakShift}
                    onChange={() => setIsBreakShift(true)}
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="breakShift"
                    className="mr-2"
                    checked={!isBreakShift}
                    onChange={() => setIsBreakShift(false)}
                  />
                  No
                </label>
              </div>
            </div>
            {isBreakShift && (
              <div className="mb-4">
                {/* <label className="block text-gray-700">Break Timings</label> */}
                <div className="flex gap-2">
                  <div>
                    <label>Break From:</label>
                    <input
                      type="time"
                      className="border p-2 w-full rounded"
                      value={breakStartTime}
                      onChange={(e) => setBreakStartTime(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Break Till:</label>
                    <input
                      type="time"
                      className="border p-2 w-full rounded"
                      value={breakEndTime}
                      onChange={(e) => setBreakEndTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-end space-x-4">
              <button className="bg-gray-300 p-2 rounded" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="bg-blue-400 p-2 rounded" onClick={handleAddShift}>
                {isModalOpen ? 'Add Shift' : 'Update Shift'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RosterShift;