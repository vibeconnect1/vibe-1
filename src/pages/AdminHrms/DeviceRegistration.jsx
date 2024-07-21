import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import Table from "../../components/table/Table";
import AdminHRMS from "./AdminHrms";
import { BiEdit } from "react-icons/bi";

const DeviceRegistration = () => {
  const [page, setPage] = useState("Pending");
  const [showModal, setShowModal] = useState(false);
  const columns = [
    {
      name: "view",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link 
       
          >
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Employee Name",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Device Ids",
      selector: (row) => row.Label,
      sortable: true,
    },
   
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
   
  ];
  const columns2 = [
   
    {
      name: "Apply Date",
      selector: (row) => row.apply,
      sortable: true,
    },
    {
      name: "Effective From",
      selector: (row) => row.from,
      sortable: true,
    },
   
    {
      name: "Effective To",
      selector: (row) => row.to,
      sortable: true,
    },
    {
      name: "Device Ids",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Device Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "Comment",
      selector: (row) => row.Comment,
      sortable: true,
    },

   
  ];
  const data3 = [
    {
      apply:"2/2/2024",
      to:"5/3/2024",
      from:"2/3/2024",
      id:"45",
      name:"vivo 1919",
      Status: "Approved",
      Comment: "Not Available",
     

    },

];
  const columns1 = [
    {
      name: "view",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <button 
       onClick={() => setShowModal(true)}
          >
            <BsEye size={15} />
          </button>
        </div>
      ),
    },
    {
      name: "Employee Name",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Device Ids",
      selector: (row) => row.Label,
      sortable: true,
    },
   
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
   
  ];
  const data1 = [
    {
      Name: "person 1",
      Location: "Mittu",
      Label: "101",
      status: "Approved",

      Country:"India",

    },

  ];
  const data = [
    {
      Name: "person 1",
      Location: "Mittu",
      Label: "101",
      status: "pending",

      Country:"India",

    },
  ]
    const data2 = [
      {
        Name: "person 1",
        Location: "Mittu",
       
  
      },

  ];


  return (
    <section className="flex ml-20">
     {/* <OrganisationSetting/> */}
     <AdminHRMS/>
      <div className=" w-full flex m-3 flex-col overflow-hidden">
      <div className=" flex mb-5 gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full">

<h2
  className={`p-1 ${
    page === "Pending" &&
    `bg-white font-medium text-blue-500 shadow-custom-all-sides`
  } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
  onClick={() => setPage("Pending")}
>
  Pending 
</h2>
<h2
  className={`p-1 ${
    page === "Completed" &&
    "bg-white font-medium text-blue-500 shadow-custom-all-sides"
  } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
  onClick={() => setPage("Completed")}
>
  Completed 
</h2>
<h2
  className={`p-1 ${
    page === "No Device Attached" &&
    "bg-white font-medium text-blue-500 shadow-custom-all-sides"
  } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
  onClick={() => setPage("No Device Attached")}
>
  No Device Attached 
</h2>


</div>
      {page === "Pending" && (
      <div>
      <Table columns={columns} data={data} isPagination={true} />
      </div>
      )}
      {page === "Completed" && (<div><Table columns={columns1} data={data1} isPagination={true} /> </div>
    )}
     {page === "No Device Attached" && (<div><Table columns={columns} data={data2} isPagination={true} /> </div>
    )}
     
        
         {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-2/3">
            <h2 className="text-lg font-bold mb-4">History of Employee Device Registration Requests</h2>
            <Table columns={columns2} data={data3} isPagination={true} />
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            {/* <button
              className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Confirm
            </button> */}
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default DeviceRegistration;