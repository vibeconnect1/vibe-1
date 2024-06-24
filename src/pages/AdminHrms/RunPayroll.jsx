import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import AdminHRMS from './AdminHrms';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RunPayroll = () => {
  const data = {
    labels: ['Apr 24', 'May 24', 'Jun 24', 'Jul 24', 'Aug 24', 'Sep 24', 'Oct 24'],
    datasets: [
      {
        label: 'Total CTC',
        data: [4, 4.3, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Total Allowances',
        data: [3, 3.2, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Total Employer Contributions & Other Benefits',
        data: [2, 2.1, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'Total Net Salary',
        data: [3.5, 3.6, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  const options = {
    
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'CTC Payout',
      },
    },
  };

  return (
    <div className='flex gap-3 ml-20'>
        <AdminHRMS/>

    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
        <header className="flex items-center justify-between pb-4 border-b">
          <h1 className="text-2xl font-semibold">Payroll Summary</h1>
          <span className="text-xl text-gray-600">VibeCopilot AI</span>
        </header>
        <div className="mt-4">
          <div className="flex space-x-4">
            <Card status="Completed" month="May-2024" amount="Rs. 4,34,881.0" />
            <Card status="Current" month="Jun-2024" amount="Rs. 0.0" />
            <Card status="Upcoming" month="Jul-2024" amount="--" />
            <Card status="Upcoming" month="Aug-2024" amount="--" />
            <Card status="Upcoming" month="Sep-2024" amount="--" />
            <Card status="Upcoming" month="Oct-2024" amount="--" />
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">CTC Payout</h2>
            <div className="bg-white rounded-lg p-4">
              <Bar data={data} options={options} />
            </div>
          </div>

        </div>
      </div>
    </div><Summary /></div>
  );
};

const Card = ({ status, month, amount }) => (
  <div className="flex-1 bg-gray-100 rounded-lg p-4 text-center">
    <p className="text-lg font-medium">{status}</p>
    <p className="text-sm text-gray-600">{month}</p>
    <p className="text-xl font-semibold">{amount}</p>
  </div>
);

const Summary = () => (
  <div className="mt-6 bg-gray-100 p-4 rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Summary</h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="font-medium">June-2024</p>
        <p>Status:</p>
        <p className="text-red-500">Incomplete</p>
      </div>
      <div>
        <p>Last Run On:</p>
        <p className="text-gray-500">--</p>
        <p>Last Run By:</p>
        <p className="text-gray-500">--</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div>
        <p className="font-medium">Processed Employees</p>
        <p className="text-2xl">0</p>
      </div>
      <div>
        <p className="font-medium">FnF Employees</p>
        <p className="text-2xl">0</p>
      </div>
      <div>
        <p className="font-medium">Pending Employees</p>
        <p className="text-2xl">21</p>
      </div>
      <div>
        <p className="font-medium">Hold Employees</p>
        <p className="text-2xl">0</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div>
        <p className="font-medium">Total Gross</p>
        <p className="text-2xl">0.0</p>
      </div>
      <div>
        <p className="font-medium">Total Employer PF</p>
        <p className="text-2xl">0.0</p>
      </div>
      <div>
        <p className="font-medium">Total Employer ESIC</p>
        <p className="text-2xl">0.0</p>
      </div>
      <div>
        <p className="font-medium">Total Employer LWF</p>
        <p className="text-2xl">0.0</p>
      </div>
      <div>
        <p className="font-medium">Total Other Benefits</p>
        <p className="text-2xl">0.0</p>
      </div>
      <div>
        <p className="font-medium">Total CTC</p>
        <p className="text-2xl">0.0</p>
      </div>
    </div>
  </div>
);

export default RunPayroll