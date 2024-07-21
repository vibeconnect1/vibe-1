import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import AdminHRMS from './AdminHrms';

import SeparationTable from './SeparationTable';
import SeparationDashboard from "./SeparationDashboard";
import SeparationCompleted from "./SeparationCompleted";

const SeparationApplication = () => {
  const [page, setPage] = useState("Pending");

  const data = {
    labels: ['Jan24', 'Feb24', 'Mar24', 'Apr24', 'May24', 'Jun24'],
    datasets: [
      {
        label: 'Employee Count',
        data: [1, 0, 1, 2, 2, 4],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='flex ml-20'>
        <AdminHRMS/>
    <div className="flex flex-col w-full p-6 bg-white rounded-lg shadow-lg">

      {/* <div className="mb-4">
        <h2 className="text-xl font-semibold">Separation Applications</h2>
      </div> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold mb-2">Total Separation Requests</h3>
          <Bar data={data} options={options} />
        </div>
        <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-2">Separated Employees Count</h3>
          <ul>
            <li className="text-yellow-400">Invitation Sent (0)</li>
            <li className="text-yellow-500">Pending Approval (0)</li>
            <li className="text-purple-400">Not Invited (0)</li>
            <li className="text-red-400">Rejected (0)</li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-2">Top Resignation Reasons over last 6 months</h3>
          <div className="flex items-center">
           <div className="relative w-32 h-32 mr-4">
  <svg viewBox="0 0 72 72" className="circular-chart green">
    <path
      className="circle-bg"
      d="M36 4.169
        a 31.831 31.831 0 0 1 0 63.662
        a 31.831 31.831 0 0 1 0 -63.662"
      fill="none"
      stroke="#efefef"
      strokeWidth="4"
    />
    <path
      className="circle"
      strokeDasharray="85, 100"
      d="M36 4.169
        a 31.831 31.831 0 0 1 0 63.662
        a 31.831 31.831 0 0 1 0 -63.662"
      fill="none"
      stroke="#4caf50"
      strokeWidth="4"
    />
    <text x="36" y="40.7" className="percentage" textAnchor="middle">
      85%
    </text>
  </svg>
</div>

            <div>
              <p>Activated (30)</p>
              <p>Not Activated (5)</p>
            </div>
          </div>
        </div>
      </div> */}
      <SeparationDashboard/>
    {/* <OnBoardingTable/> */}
    <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full">

  <h2
    className={`p-1 ${
      page === "Pending" &&
      `bg-white font-medium text-blue-500 shadow-custom-all-sides`
    } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
    onClick={() => setPage("Pending")}
  >
    Pending Request
  </h2>
  <h2
    className={`p-1 ${
      page === "Completed" &&
      "bg-white font-medium text-blue-500 shadow-custom-all-sides"
    } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
    onClick={() => setPage("Completed")}
  >
    Completed Request
  </h2>


</div>
{page === "Pending" && (
  <div>
    <SeparationTable/>
  </div>
)}
{page === "Completed" && <SeparationCompleted/>}
    
    </div></div>
  );
};

export default SeparationApplication