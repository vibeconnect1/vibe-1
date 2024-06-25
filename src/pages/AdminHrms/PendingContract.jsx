import React from "react";
import AdminHRMS from "./AdminHrms";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const PendingContract = () => {
  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Contract Start Date",
      selector: (row) => row.start_date,
      sortable: true,
    },
    {
      name: "Contract End Date",
      selector: (row) => row.end_date,
      sortable: true,
    },
    {
      name: "Contract Approval",
      selector: (row) => row.approval,
      sortable: true,
    },
    {
      name: "Contract Agreement",
      selector: (row) => row.approval,
      sortable: true,
    },
    {
      name: "Remark",
      selector: (row) => row.remark,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          <div className="flex items-center gap-4 bg-green-300 p-1 rounded-full ">
            <Link to={``} className="text-white">
              <TiTick size={20} />
            </Link>
          </div>
          <div className="flex items-center gap-4 bg-red-400 p-1 rounded-full ">
            <Link to={``} className="text-white">
              <IoClose size={20} />
            </Link>
          </div>
        </div>
      ),
    },
  ];
  const data = [
    {
      name: "Mittu",
      start_date: "01/06/2024",
      end_date: "31/07/2024",
      approval: "NA",
      remark: "test",
    },
  ];

  return (
    <div className="flex ml-20">
      <AdminHRMS />
      <div className=" w-full flex mx-3 my-5 flex-col overflow-hidden">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default PendingContract;
