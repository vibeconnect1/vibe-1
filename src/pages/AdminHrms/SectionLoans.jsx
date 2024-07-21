import React, { useState, useRef } from "react";
import EmployeeSections from './EmployeeSections'
import EditEmployeeDirectory from "./EditEmployeeDirectory";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import Collapsible from "react-collapsible";
import CustomTrigger from "../../containers/CustomTrigger";
const SectionLoans = () => {
    const [isOpen, setIsOpen] = useState(false);
  const column = [
    // {
    //   name: "view",

    //   cell: (row) => (
    //     <div className="flex items-center gap-4">
    //       <Link to={`/admin/grn-detail/${row.id}`}>
    //         <BsEye size={15} />
    //       </Link>
    //     </div>
    //   ),
    // },

    { name: "Type Of Transaction", selector: (row) => row.year, sortable: true },
    { name: "Label", selector: (row) => row.td, sortable: true },
    { name: "Number Of Payment Periods", selector: (row) => row.od, sortable: true },
  
    { name: "Balances", selector: (row) => row.rd, sortable: true },
    { name: "Dates", selector: (row) => row.tp, sortable: true },
    // { name: "Actions", selector: (row) => row.ti, sortable: true },
    
  ];
  

  const data = [
    {
      year:"loan",
      td:"0",
      od:"0",
      rd:"0",
     tp:"0",
     ti:"0"
    }
  ]

 
  return (
    <div className='flex flex-col ml-20'>
        <EditEmployeeDirectory/>
       
        <div className='flex'>
            <div className=''>
                <EmployeeSections/>
            </div>
            
            {/* <div className=" w-full mt-10 p-5 border border-gray-300 shadow-lg rounded-md">
              <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-6">Tax  Information</h2>
            <button className="bg-black text-white mb-2 hover:bg-gray-700 font-semibold py-2 px-4 rounded">
              <div className="flex gap-2">
              <FaDownload/>
              Form 12B</div></button>
            </div>
            <Table columns={column} data={data} isPagination={true} />
    </div> */}
    <div className="w-full">
    <h2 className="text-2xl font-bold mb-6">Loans & Advances</h2>
     <Table columns={column} data={data} isPagination={true} /></div>
        </div>
    </div>
  )
}

export default SectionLoans