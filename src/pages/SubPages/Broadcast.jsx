import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline } from "react-icons/io5";
import { ImEye } from "react-icons/im";
import { Link } from "react-router-dom";

const Broadcast = () => {
  const [searchText, setSearchText] = useState("");
  const column = [
    {
      name: "Action",
      cell: (row) => (
        <Link to={`/communication/broadcast/broadcast-details/${row.id}`}>
          {row.action}
        </Link>
      ),
      sortable: true,
    },
    { name: "Title", selector: (row) => row.title, sortable: true },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },
    { name: "Created By", selector: (row) => row.CreatedBy, sortable: true },
    {
      name: "Created On",
      selector: (row) => row.CreatedOn,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Expired",
      selector: (row) => row.expired,
      sortable: true,
    },
    {
      name: "Expired On",
      selector: (row) => row.expiredOn,
      sortable: true,
    },
    {
      name: "Attachments",
      selector: (row) => row.attachments,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      action: <ImEye />,
      title: "test1",
      type: "type A",
      CreatedBy: "user 1",
      CreatedOn: "date",
      status: "published",
      expired: "no",
      expiredOn: "date",
      attachments: "file",
    },
    {
      id: 1,
      action: <ImEye />,
      title: "test1",
      type: "type A",
      CreatedBy: "user 1",
      CreatedOn: "date",
      status: "published",
      expired: "no",
      expiredOn: "date",
      attachments: "file",
    },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
    const filteredResults = data.filter((item) =>
      item.facility.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "14px",
      },
    },
  };
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By title"
          className="border-2 p-2 w-96 border-gray-300 rounded-lg"
          value={searchText}
          onChange={handleSearch}
        />

        <Link
          to={"/communication/broadcast/create-broadcast"}
          className="bg-black  rounded-lg flex font-semibold items-center gap-2 text-white p-2 my-5"
        >
          <IoAddCircleOutline size={20} />
          Add Broadcast/Notice
        </Link>
      </div>
      <DataTable
        columns={column}
        data={filteredData}
        customStyles={customStyle}
        fixedHeader
          fixedHeaderScrollHeight="500px"
          pagination
          selectableRowsHighlight
          highlightOnHover
         
      />
    </div>
  );
};

export default Broadcast;
