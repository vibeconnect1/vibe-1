import React, { useState } from 'react';
import AdminHRMS from './AdminHrms';
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";

const employees = [
    {
      initials: 'AB',
      name: 'Ajay Baniya',
      position: 'Digital Marketer',
      doj: '12-12-2022',
      department: 'Marketing',
      branch: 'Mumbai; Mumbai; Maharashtra',
      phone: '+91-9082340375',
      email: 'ajaybaniya@example.com'
    },
    {
      initials: 'AP',
      name: 'Aniket Parkar',
      position: 'Business & Operations',
      doj: '02-09-2019',
      department: 'Operations',
      branch: 'Mumbai; Mumbai; Maharashtra',
      phone: '+91-9082340376',
      email: 'aniketparkar@example.com'
    },
    {
      initials: 'AS',
      name: 'Asif Shaikh',
      position: 'Personal Driver',
      doj: '19-11-2022',
      department: 'Driver',
      branch: 'Mumbai; Mumbai; Maharashtra',
      phone: '+91-9082340377',
      email: 'shaikhasif22223@gmail.com'
    },
    {
      initials: 'DP',
      name: 'Dhiraj Poojary',
      position: 'Trainer',
      doj: '01-06-2023',
      department: 'Training',
      branch: 'Mumbai; Mumbai; Maharashtra',
      phone: '+91-9082340378',
      email: 'dhirajpoojary@example.com'
    },
  ];

const EmployeeDirectory = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
  return (
    <div className='flex ml-20'>
        <AdminHRMS/>
        <div className='w-full'>
        <header className="bg-orange-500 text-white w-full py-4 text-center">
        <h1 className="text-3xl font-bold">Employee Directory</h1>
        <p>Employee personal details are noted under this section.</p>
      </header>

    <div className="bg-gray-100 flex w-full p-4">


      <div className="bg-white w-full max-w-4xl mt-4 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search by Name / Code"
            className="border p-2 rounded w-1/3"
          />
          <div className='flex gap-3'>
            <button className="bg-gray-200 px-4 py-2 rounded mr-2">Actions</button>
 <Link
            to={"/admin/add-employee"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add Employee
          </Link> 
                  </div>
        </div>
        <div className="flex flex-col space-y-4">
          {employees.map((employee, index) => (
            <div key={index} className="flex bg-gray-50 p-4 rounded-lg shadow-sm items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                  {employee.initials}
                </div>
              </div>
              <div className="flex-grow">
                <div className="text-xl font-medium text-black">{employee.name}</div>
                <p className="text-gray-500">{employee.position}</p>
                <p className="text-gray-500">DOJ: {employee.doj}</p>
                <span className="bg-green-100 text-green-800 text-sm font-semibold mt-2 px-2.5 py-0.5 rounded">Active</span>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-200 px-3 py-1 rounded">Edit</button>
                <button className="bg-gray-200 px-3 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="w-1/3 mt-10 pl-4">
          {selectedEmployee ? (
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                {/* <h1>Employee Details</h1> */}
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                  {selectedEmployee.initials}
                </div>
                <div className="text-xl font-medium text-black mt-2">{selectedEmployee.name}</div>
                <p className="text-gray-500">{selectedEmployee.position}</p>
              </div>
              <div className="text-left">
                <p><strong>Department:</strong> {selectedEmployee.department}</p>
                <p><strong>Status:</strong></p>
                <p>Enrollment: Complete</p>
                <p>Employment: Active</p>
                <p><strong>Other Information:</strong></p>
                <p><strong>Branch Location:</strong> {selectedEmployee.branch}</p>
                <p><strong>Phone No:</strong> {selectedEmployee.phone}</p>
                <p><strong>Email Id:</strong> {selectedEmployee.email}</p>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-center">
                <h1>Employee Details</h1>
              <p>Select employee from the list to get employee details.</p>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                {/* <h1>Employee Details</h1> */}
              <div className="text-center mb-4">
                {/* <div className="w-16 h-16 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                 initial
                </div> */}
                <div className="text-xl font-medium text-black mt-2">Name</div>
                <p className="text-gray-500">position</p>
              </div>
              <div className="text-left">
                <p><strong>Department:</strong> department</p>
                <p><strong>Status:</strong></p>
                <p>Enrollment: Complete</p>
                <p>Employment: Active</p>
                <p><strong>Other Information:</strong></p>
                <p><strong>Branch Location:</strong> branch</p>
                <p><strong>Phone No:</strong> phone</p>
                <p><strong>Email Id:</strong> email</p>
              </div>
            </div>
            </div>
          )}
        </div>
    </div>

    {/* <div className="w-1/3 mt-10 pl-4">
          {selectedEmployee ? (
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                  {selectedEmployee.initials}
                </div>
                <div className="text-xl font-medium text-black mt-2">{selectedEmployee.name}</div>
                <p className="text-gray-500">{selectedEmployee.position}</p>
              </div>
              <div className="text-left">
                <p><strong>Department:</strong> {selectedEmployee.department}</p>
                <p><strong>Status:</strong></p>
                <p>Enrollment: Complete</p>
                <p>Employment: Active</p>
                <p><strong>Other Information:</strong></p>
                <p><strong>Branch Location:</strong> {selectedEmployee.branch}</p>
                <p><strong>Phone No:</strong> {selectedEmployee.phone}</p>
                <p><strong>Email Id:</strong> {selectedEmployee.email}</p>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-center">
              <p>Select employee from the list to get employee details.</p>
            </div>
          )}
        </div> */}
    </div> </div>
  );
};

export default EmployeeDirectory;