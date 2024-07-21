import React, { useState } from "react";
import { FaDownload } from 'react-icons/fa';
import { Link } from "react-router-dom";

import Table from "../../components/table/Table";

import ReportDetailsList from "./ReportDetailsList";
import { useSelector } from "react-redux";
import Select from 'react-select';

const ReportGeneration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const themeColor = useSelector((state) => state.theme.color);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };
  const employees = [{value:'Attendance format',label:'Attendance format'},{ value:'Attendance process',label:'Attendance process'}];
  const employeesname = [{value:'Mittu Panda',label:'Mittu Panda'},{ value:'Akhil Nayak',label:'Akhil Nayak'}];
  const statusopt = [{value:'Failed',label:'Failed'},{ value:'Completed',label:'Completed'}];

  const columns = [
   
    {
      name: "Report Name",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Period",
      selector: (row) => row.Label,
      sortable: true,
    },
    {
      name: "Generated At",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Generated By",
      selector: (row) => row.State,
      sortable: true,
    },
  
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Actions",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link 
      
          >
            <FaDownload size={15} />
          </Link>
        </div>
      ),
    },
   
  ];

  const data = [
    {
      Label: "July-2024",
      Location: "Holiday-report",
      City: "08-07-2024 - 13:08:11 IST",
      State: "Mittu Panda",

      status:"completed",

    },
    {
      Label: "July-2024",
      Location: "Attendance-process",
      City: "04-07-2024 - 10:49:20 IST",
      State: "Mittu Panda",

      status:"completed",

    },

  ];

  return (
    <section className="flex gap-3 ml-20">
     <ReportDetailsList/>
      <div className=" w-full flex m-3 flex-col overflow-hidden">
      
      <div className=" flex justify-between my-5">
        <p className="font-bold mb-4">Report Generation</p>

        <button
           onClick={() => setIsModalOpen(true)}
           style={{ background: themeColor }}
            className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Filter
          </button>
         
        </div>
        {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex z-10 justify-center items-center">
          <div className="bg-white p-5 rounded-md shadow-md w-2/3">
            {/* <h2 className="text-xl font-semibold mb-4">Add Department</h2> */}
            <div className="grid md:grid-cols-3 gap-5 mt-5">
           
            <div className="grid gap-2 items-center w-full ">
              <label htmlFor="headOfDepartment" className="block text-sm font-medium text-gray-700">
              Report Name
              </label>
              <Select
        id="categories"
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={employees}
        className="basic-multi-select w-full p-2 border border-gray-300 rounded"
        classNamePrefix="select"
      />
            </div>
            <div className="grid gap-2 items-center w-full ">
              <label htmlFor="headOfDepartment" className="block text-sm font-medium text-gray-700">
              Generated By
              </label>
              <Select
        id="categories"
        isMulti
        // value={selectedOptions}
        // onChange={handleChange}
        options={employeesname}
        className="basic-multi-select w-full p-2 border border-gray-300 rounded"
        classNamePrefix="select"
      />
            </div>
            <div className="grid gap-2 items-center w-full ">
              <label htmlFor="headOfDepartment" className="block text-sm font-medium text-gray-700">
              Generated At
              </label>
             <input type="date" className="mt-1 block w-full border border-gray-400 p-2 rounded-md"/>
            </div>
            <div className="grid gap-2 items-center w-full ">
              <label htmlFor="headOfDepartment" className="block text-sm font-medium text-gray-700">
              Status
              </label>
              <Select
        id="categories"
        isMulti
        // value={selectedOptions}
        // onChange={handleChange}
        options={statusopt}
        className="basic-multi-select w-full p-2 border border-gray-300 rounded"
        classNamePrefix="select"
      />
            </div>
           
           </div>
            <div className="mt-2 flex justify-end">
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
        <Table columns={columns} data={data} isPagination={true} />
      </div>
    </section>
  );
};

export default ReportGeneration;