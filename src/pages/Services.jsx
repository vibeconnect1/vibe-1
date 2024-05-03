import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline, IoFilterOutline } from "react-icons/io5";
import { BsEye, BsFilterLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import * as XLSX from "xlsx";
import { serviceColumns } from "../utils/assetColumns";
import { BiEdit, BiFilter, BiFilterAlt } from "react-icons/bi";
// import jsPDF from "jspdf";
// import QRCode from "qrcode.react";

const Services = () => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState(false);
  const [omitColumn, setOmitColumn] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(serviceColumns);
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
      name: "Service Name",
      selector: (row) => row.serviceName,
      sortable: true,
    },
    {
      name: "Service Code",
      selector: (row) => row.serviceCode,
      sortable: true,
    },
    { name: "Reference Number", selector: (row) => row.ref, sortable: true },
    { name: "Category", selector: (row) => row.category, sortable: true },
    {
      name: "Group",
      selector: (row) => row.group,
      sortable: true,
    },
    {
      name: "UOM",
      selector: (row) => row.UOM,
      sortable: true,
    },
    {
      name: "Site",
      selector: (row) => row.site,
      sortable: true,
    },
    {
      name: "Floor",
      selector: (row) => row.floor,
      sortable: true,
    },
    {
      name: "Building",
      selector: (row) => row.building,
      sortable: true,
    },
    {
      name: "Area",
      selector: (row) => row.area,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Model Number",
      selector: (row) => row.model,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.createdOn,
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
        fontSize: "13px",
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
    <section className="flex max-w-6xl xl:max-w-7xl overflow-hidden">
      <Navbar />
      <div className="p-4 overflow-hidden w-full my-2 flex mx-3 flex-col">
        {omitColumn && (
          <div className="grid grid-cols-10  gap-x-12 gap-y-4 border-2 border-black p-2 rounded-md mb-5">
            {column.map((col) => (
              <label key={col.name} className="flex gap-2 w-full items-center ">
                <input
                  type="checkbox"
                  checked={visibleColumns.includes(col.name)}
                  onChange={() =>
                    setVisibleColumns((prev) =>
                      prev.includes(col.name)
                        ? prev.filter((item) => item !== col.name)
                        : [...prev, col.name]
                    )
                  }
                />
                <span className="ml-1 text-sm">{col.name}</span>
              </label>
            ))}
          </div>
        )}
        {filter && (
          <div className="flex items-center justify-center gap-2">
            <div>
              <label htmlFor="" className="font-medium">
                Service Name:{" "}
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Service Name"
                className="border p-1 placeholder:text-sm px-4 border-gray-500 rounded-md"
              />
            </div>

            <select className="border p-1 px-4 border-gray-500 rounded-md">
              <option value="">Select Area</option>
              <option value="unit1">Area 1</option>
              <option value="unit2">Area 2</option>
              <option value="unit2">Area 3</option>
            </select>

            <select className="border p-1 px-4 border-gray-500 rounded-md">
              <option value="">Select Building</option>
              <option value="unit1">Building 1</option>
              <option value="unit2">Building 2</option>
              <option value="unit2">Building 3</option>
            </select>
            <button className="bg-black p-1 px-4 text-white rounded-md">
              Apply
            </button>
          </div>
        )}
        <div className="flex flex-wrap justify-between items-center my-5 ">
          <input
            type="text"
            placeholder="Search By Service name"
            className="border-2 p-2 w-96 border-gray-300 rounded-lg"
            value={searchText}
            onChange={handleSearch}
          />
          <div className="flex flex-wrap gap-2">
            <button
              className="text-lg font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
              onClick={() => setOmitColumn(!omitColumn)}
            >
              <IoFilterOutline />
              Filter Columns
            </button>
            <button
              className="text-lg font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
              onClick={() => setFilter(!filter)}
            >
              <BiFilterAlt />
              Filter
            </button>

            <Link
              to={"/services/add-service"}
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
          selectableRows
          columns={column.filter((col) => visibleColumns.includes(col.name))}
          data={filteredData}
          customStyles={customStyle}
          responsive
          onSelectedRowsChange={handleRowSelected}
          fixedHeader
          fixedHeaderScrollHeight="500px"
          pagination
          selectableRowsHighlight
          highlightOnHover
          omitColumn={column}
        />
      </div>
    </section>
  );
};

export default Services;
