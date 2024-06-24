import React, { useState } from "react";
import dayjs from "dayjs";
import ToggleSwitch from "../../Buttons/ToggleSwitch";
import AdminHRMS from "./AdminHrms";

// Example data
const employees = [
  { name: "Aniket Parkar", code: "AP" },
  { name: "Prathamesh Palav", code: "PP" },
  { name: "Sami Saudagar", code: "SS" },
  { name: "Ajay Baniya", code: "AB" },
  { name: "Sujal Bhavkar", code: "SB" },
  { name: "Ritik Solanki", code: "RS" },
  { name: "Dhiraj Pogaiy", code: "DP" },
  { name: "Prathamesh Raut", code: "PR" },
  { name: "Praveen Nair", code: "PN" },
  { name: "Mahek Nair", code: "MN" },
];

const rosterData = [
  {
    schedule: [
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
    ],
  },
  {
    schedule: [
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
    ],
  },
  {
    schedule: [
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
    ],
  },
  {
    schedule: [
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
      "09:00 AM - 06:00 PM",
    ],
  },
  // Add more employee schedules here
];

const Roster = () => {
  const [startDate, setStartDate] = useState(dayjs("2024-06-23"));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextWeek = () => {
    setStartDate(startDate.add(1, "week"));
  };

  const handlePrevWeek = () => {
    setStartDate(startDate.subtract(1, "week"));
  };

  const renderDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(startDate.add(i, "day"));
    }
    return dates;
  };

  const dates = renderDates();

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex">
      <AdminHRMS />
      <div className="ml-20 fixed bg-gray-100 p-6">
        {/* Header */}
        <header className="bg-orange-200 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-medium">Roster Record</h1>
          <div className="flex items-center space-x-4">
            {/* <input type="month" className="border p-1 w-64 px-4 border-gray-500 rounded-md" name="" id="">June 2024</input> */}
            <input
              className="border p-1 w-64 px-4 border-gray-500 rounded-md"
              type="month"
            />
            <button className="bg-orange-400 p-2 rounded">
              Upload Records
            </button>
            <button
              className="bg-blue-400 p-2 rounded"
              onClick={handleModalToggle}
            >
              Filter
            </button>
            <label htmlFor="">Multiselect</label>
            <ToggleSwitch />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex gap-1 mt-6">
          {/* Employee List */}
          <div className="bg-white p-4 rounded shadow-md mr-2">
            <input
              type="text"
              placeholder="Search Employee Name/Code"
              className="p-2 border mb-4 rounded"
            />
            <ul>
              {employees.map((employee, index) => (
                <li key={index} className="p-2 flex items-center border-b">
                  <span className="bg-gray-200 p-2 rounded-full mr-2">
                    {employee.code}
                  </span>
                  {employee.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Roster Records */}
          <div className="w-3/4 bg-white p-4 rounded shadow-md">
            <div className="flex justify-between mb-4">
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={handlePrevWeek}
              >
                Previous Week
              </button>
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={handleNextWeek}
              >
                Next Week
              </button>
            </div>
            <div className="flex gap-2">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    {/* <th className="px-4 py-2">Employee</th> */}
                    {dates.map((date) => (
                      <th key={date} className="px-4 font-medium text-sm py-2">
                        {date.format("ddd DD MMM")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rosterData.map((employee, index) => (
                    <tr key={index}>
                      {/* <td className="border px-4 py-2">{employee.name}</td> */}
                      {employee.schedule.map((time, idx) => (
                        <td
                          key={idx}
                          className={`border font-semibold text-center border-black text-sm ${
                            time === "09:00 AM - 06:00 PM" ? "bg-green-200" : ""
                          }`}
                        >
                          &nbsp;{time}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Selected Employee Details */}
          <div className="bg-white p-4 rounded shadow-md max-w-60">
            <h2 className="text-lg font-bold mb-4">
              Selected Employee Details
            </h2>
            <p className="text-sm">
              Please select a specific record to update or delete it. To edit
              multiple records, turn on multi select.
            </p>
            <button className="mt-4 bg-orange-400 p-2 rounded">
              Learn More
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
              <h2 className="text-xl font-bold mb-4">Filter Options</h2>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Attendance Template
                </label>
                <input type="text" className="border p-2 w-full rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Branch Location</label>
                <input type="text" className="border p-2 w-full rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Employee Department
                </label>
                <input type="text" className="border p-2 w-full rounded" />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  className="bg-gray-300 p-2 rounded"
                  onClick={handleModalToggle}
                >
                  Cancel
                </button>
                <button className="bg-blue-400 p-2 rounded">Apply</button>
              </div>
            </div>
          </div>
        )}
      </div>{" "}
    </div>
  );
};

export default Roster;
