import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline, IoFilterOutline } from "react-icons/io5";
import { BsEye, BsFilterLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import * as XLSX from "xlsx";

import { BiEdit, BiFilter, BiFilterAlt } from "react-icons/bi";
// import jsPDF from "jspdf";
// import QRCode from "qrcode.react";

const Suppliers = () => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState(false);
  const [omitColumn, setOmitColumn] = useState(false);

  const [selectedRows, setSelectedRows] = useState([]);
  const column = [
    {
      name: "Action",
      // cell: (row) => <Link to={""}>{row.action}</Link>,
      selector: (row) => row.action,

      sortable: true,
    },
    { name: "ID", selector: (row) => row.id, sortable: true },
    {
      name: "Company Name",
      selector: (row) => row.serviceName,
      sortable: true,
    },
    {
      name: "GSTIN Number",
      selector: (row) => row.serviceCode,
      sortable: true,
    },
    { name: "PAN Number", selector: (row) => row.ref, sortable: true },
    { name: "Supplier Type", selector: (row) => row.category, sortable: true },
    {
      name: "PO Outstandings",
      selector: (row) => row.group,
      sortable: true,
    },
    {
      name: "WO Outstandings",
      selector: (row) => row.UOM,
      sortable: true,
    },
    {
      name: "Ratings",
      selector: (row) => row.site,
      sortable: true,
    },
    {
      name: "Signed On Contract",
      selector: (row) => row.floor,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.building,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      // action: <BsEye />,
      action: (
        <div className="flex items-center gap-7">
          <Link to={`/services/service-details`}>
            <BsEye />
          </Link>
        </div>
      ),
      serviceName: "service 1fsdddddddddddddddd",
      serviceCode: "code 1",
      ref: "code 1",
      category: "Building A",
      group: "assetCode",
      UOM: "uom",
      site: "site 1",
      floor: "Floor 1",
      building: "Building A",
      area: "Area 1",
      status: "Status 1",
      modelNumber: "model 1",
      createdOn: "today",
    },
    {
      id: 2,
      // action: <BsEye />,
      action: (
        <div className="flex items-center gap-7">
          <Link to={`/services/service-details`}>
            <BsEye />
          </Link>
        </div>
      ),
      serviceName: "main",
      serviceCode: "code 1",
      ref: "code 1",
      category: "Building A",
      group: "assetCode",
      UOM: "uom",
      site: "site 1",
      floor: "Floor 1",
      building: "Building A",
      area: "Area 1",
      status: "Status 1",
      modelNumber: "model 1",
      createdOn: "today",
    },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
    const filteredResults = data.filter((item) =>
      item.serviceName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const customStyle = {
    headCells: {
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "12px",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        fontSize: "11px",
      },
    },
  };

  const exportToExcel = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileName = "service_data.xlsx";
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    const url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

  const handleRowSelected = (state) => {
    setSelectedRows(state.selectedRows);
  };

  return (
    <section className="flex max-w-6xl xl:max-w-7xl ">
      <Navbar />
      <div className="p-4 w-full my-2 flex mx-5 flex-col">
        <div className="flex flex-wrap justify-between items-center my-5 ">
          <input
            type="text"
            placeholder="Search By Company name"
            className="border-2 p-2 w-96 border-gray-300 rounded-lg"
            value={searchText}
            onChange={handleSearch}
          />
          <div className="flex flex-wrap gap-2">
            
            <Link
              to={"/suppliers/add-supplier"}
              className="bg-black  rounded-lg flex font-semibold  items-center gap-2 text-white p-2 "
            >
              <IoAddCircleOutline size={20} />
              Add
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={exportToExcel}
            >
              Export
            </button>
            {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDownloadQRCode}
            disabled={selectedRows.length === 0}
          >
            Download QR Code
          </button> */}
          </div>
        </div>
        <DataTable
          
          columns={column}
          data={filteredData}
          customStyles={customStyle}
          responsive
          onSelectedRowsChange={handleRowSelected}
          fixedHeader
          fixedHeaderScrollHeight="500px"
          pagination
          selectableRowsHighlight
          highlightOnHover
          
        />
      </div>
    </section>
  );
};

export default Suppliers;
