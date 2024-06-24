import React, { useState } from "react";

import Table from "../../components/table/Table";

import ReportDetailsList from "./ReportDetailsList";

const ComplianceReports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      name: "view",
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
  const data1 = [
    {
      Name: "person 1",
      Location: "Mumbai",
      City: "Mumbai",
      State: "Maharashtra",
      Country: "India",
    },
  ]; const data2 = [
    {
      Name: "person 1",
      Location: "Mumbai",
      City: "Mumbai",
      State: "Maharashtra",
      Country: "India",
    },
  ]; const data3 = [
    {
      Name: "person 1",
      Location: "Mumbai",
      City: "Mumbai",
      State: "Maharashtra",
      Country: "India",
    },
  ]; const data4 = [
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
          />
           {/* <button
          className="mb-3 border-2 w-20 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
          onClick={() => setIsModalOpen(true)}
        >
          Generate
        </button> */}
        </div>

        <Table columns={columns} data={data} isPagination={true} />
        <Table columns={columns} data={data1} isPagination={true} />
        <Table columns={columns} data={data2} isPagination={true} />
        <Table columns={columns} data={data3} isPagination={true} />
        <Table columns={columns} data={data4} isPagination={true} />
      </div>

      {isModalOpen && (
       <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10">
       <div className="bg-white p-6 rounded-lg w-96 h-4/6 overflow-y-auto">
         <div className="flex justify-between items-center mb-4">
           <h2 className="text-2xl font-bold">Generate Salary Register</h2>
           <button
             onClick={closeModal}
             className="text-gray-600 hover:text-gray-800"
           >
             &times;
           </button>
         </div>
         <form>
           <div className="mb-4">
             <label className="block mb-2">
               Select Act *
               <select className="border border-gray-400 rounded-lg p-2 w-full">
                 <option value="Act 1">Act 1</option>
                 <option value="Act 2">Act 2</option>
                 <option value="Act 3">Act 3</option>
               </select>
             </label>
           </div>

           <div className="mb-4">
             <label className="block mb-2">
               Select Start Period *
               <input
                 type="month"
                 className="border border-gray-400 rounded-lg p-2 w-full"
               />
             </label>
           </div>

           <div className="mb-4">
             <label className="block mb-2">
               Select End Period *
               <input
                 type="month"
                 className="border border-gray-400 rounded-lg p-2 w-full"
               />
             </label>
           </div>

           <div className="mb-4">
             <label className="block mb-2">
               Select Work Location *
               <select className="border border-gray-400 rounded-lg p-2 w-full">
                 <option value="Location 1">Location 1</option>
                 <option value="Location 2">Location 2</option>
                 <option value="Location 3">Location 3</option>
               </select>
             </label>
           </div>

           <div className="mb-4">
             <label className="block mb-2">
               Group By
               <select className="border border-gray-400 rounded-lg p-2 w-full">
                 <option value="Employees">Employees</option>
               </select>
             </label>
           </div>

           <div className="mb-4">
             <label className="block mb-2">
               Which Employees Do You Want to Include in this Report?
             </label>
             <div className="flex items-center mb-2">
               <input
                 type="radio"
                 name="employeeSelection"
                 className="mr-2"
                 value="All Employees"
               />
               <label>All Employees</label>
             </div>
             <div className="flex items-center mb-2">
               <input
                 type="radio"
                 name="employeeSelection"
                 className="mr-2"
                 value="Some Employees"
               />
               <label>Some Employees</label>
             </div>
             <div className="flex items-center mb-2">
               <input
                 type="radio"
                 name="employeeSelection"
                 className="mr-2"
                 value="Specific Employees"
               />
               <label>Specific Employees</label>
             </div>
           </div>

           <div className="flex justify-end">
             <button
               type="button"
               onClick={closeModal}
               className="mr-4 px-4 py-2 bg-gray-300 rounded"
             >
               Cancel
             </button>
             <button
               type="submit"
               className="px-4 py-2 bg-blue-600 text-white rounded"
             >
               Generate
             </button>
           </div>
         </form>
       </div>
     </div>

      )}
    </section>
  );
};

export default ComplianceReports;