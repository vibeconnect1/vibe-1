import React from 'react'
import { Link } from "react-router-dom";

import Table from "../../components/table/Table";
import { BiEdit } from "react-icons/bi";
import TaxDetailsList from './TaxDetailsList';

const OtherIncomeInfo = () => {
    const columns = [
        // {
        //   name: "view",
    
        //   cell: (row) => (
        //     <div className="flex items-center gap-4">
        //       <Link 
           
        //       >
        //         <BiEdit size={15} />
        //       </Link>
        //     </div>
        //   ),
        // },
        {
            name: "Other Income Type",
            selector: (row) => row.Section,
            sortable: true,
          },
        // {
        //   name: "Exemption For",
        //   selector: (row) => row.Name,
        //   sortable: true,
        // },
        // {
        //     name: "Additional Information",
        //     selector: (row) => row.Name,
        //     sortable: true,
        //   },
        {
          name: "Declared Amount",
          selector: (row) => row.Label,
          sortable: true,
        },
        // {
        //   name: "Promisory Amount",
        //   selector: (row) => row.City,
        //   sortable: true,
        // },
        {
          name: "Verified Amount",
          selector: (row) => row.State,
          sortable: true,
        },
        {
            name: "Disallowed Amount",
            selector: (row) => row.Country,
            sortable: true,
          },
        {
            name: "Remarks",
            selector: (row) => row.Leave_Days,
            sortable: true,
          },
        //   {
        //     name: "Comment",
        //     selector: (row) => row.Comment,
        //     sortable: true,
        //   },
        // {
        //   name: "Status",
        //   selector: (row) => row.status,
        //   sortable: true,
        // },
        // {
        //   name: "Action",
        //   selector: (row) =>
        //     row.status !== "Expired" && (
        //       <button className="text-red-500">Cancel</button>
        //     ),
        //   sortable: true,
        // },
      ];
      const columns1 = [
        // {
        //   name: "view",
    
        //   cell: (row) => (
        //     <div className="flex items-center gap-4">
        //       <Link 
           
        //       >
        //         <BiEdit size={15} />
        //       </Link>
        //     </div>
        //   ),
        // },
        {
            name: " Income Type",
            selector: (row) => row.Section,
            sortable: true,
          },
        {
          name: "Declared",
          selector: (row) => row.Name,
          sortable: true,
        },
        {
            name: "Verified",
            selector: (row) => row.Name,
            sortable: true,
          },
        // {
        //   name: "Declared Amount",
        //   selector: (row) => row.Label,
        //   sortable: true,
        // },
        // {
        //   name: "Promisory Amount",
        //   selector: (row) => row.City,
        //   sortable: true,
        // },
        // {
        //   name: "Verified Amount",
        //   selector: (row) => row.State,
        //   sortable: true,
        // },
        // {
        //     name: "Disallowed Amount",
        //     selector: (row) => row.Country,
        //     sortable: true,
        //   },
        // {
        //     name: "Remarks",
        //     selector: (row) => row.Leave_Days,
        //     sortable: true,
        //   },
        //   {
        //     name: "Comment",
        //     selector: (row) => row.Comment,
        //     sortable: true,
        //   },
        // {
        //   name: "Status",
        //   selector: (row) => row.status,
        //   sortable: true,
        // },
        // {
        //   name: "Action",
        //   selector: (row) =>
        //     row.status !== "Expired" && (
        //       <button className="text-red-500">Cancel</button>
        //     ),
        //   sortable: true,
        // },
      ];
      const data1 = [
        {
            Section:"How much Taxable Gross Salary you were paid in your previous job?",
            Name:"0",
        },
    ]
      const data = [
        {
            Section:"15",
          Name: "LTA - Rail Travel	",
          // Location: "Mumbai",
          // City: "Mumbai",
          // State: "Maharashtra",
    
           Country:"0.0",
    
        },
    
      ];
  return (
    <div className='flex ml-20'>
        <TaxDetailsList/>
        <div className=" w-full flex m-3 flex-col overflow-hidden">
        
        <div className=" flex justify-between my-5">
          <input
            type="text"
            placeholder="Search Employee "
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
           
          />
         
        </div>
        <Table columns={columns} data={data} isPagination={true} />
        <p className='mt-2 mb-2'>Employee's Previous Income Details</p>
        <Table columns={columns1} data={data1} isPagination={true} />
      </div>
    </div>
  )
}

export default OtherIncomeInfo