import React, { useEffect, useState } from "react";
import { getServicesChecklist } from "../../api";
import Table from "../../components/table/Table";
import Services from "../Services";
import Navbar from "../../components/Navbar";
import { BiEdit, BiFilterAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

const ServiceChecklist = () => {
  const [searchChecklistText, setSearchChecklistCheck] = useState("");
  const [filteredChecklistData, setFilteredChecklistData] = useState([]);
  const [checklists, setChecklists] = useState([]);
  const [filter, setFilter] = useState(false);
  const checklistColumn = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          {/* <Link to={`/services/checklist-details/${row.id}`}>
                <BsEye size={15} />
              </Link> */}
          <Link to={`/services/edit-service-checklist/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Start Date",
      selector: (row) => row.start_date,
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => row.end_date,
      sortable: true,
    },
    {
      name: "Frequency",
      selector: (row) => row.frequency,
      sortable: true,
    },
    {
      name: "No. Of Questions",
      selector: (row) => row.questions.length,
      sortable: true,
    },
    {
      name: "Associations",
      selector: (row) => (
        <div>
          <Link
            to={`/services/associate-checklist/${row.id}`}
            className="px-4 bg-green-400 text-white rounded-full"
          >
            Associate
          </Link>
        </div>
      ),
      sortable: true,
    },
  ];
  useEffect(() => {
    try {
      const fetchServicesChecklist = async () => {
        const checklistResponse = await getServicesChecklist();
        setFilteredChecklistData(checklistResponse.data.checklists);
        setChecklists(checklistResponse.data.checklists);
        console.log(checklistResponse);
      };
      fetchServicesChecklist();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleChecklistSearch = (event) => {
    const searchValue = event.target.value;
    setSearchChecklistCheck(searchValue);
    if (searchValue.trim() === "") {
      setFilteredChecklistData(checklists);
    } else {
      const filteredResults = filteredChecklistData.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredChecklistData(filteredResults);
      console.log(filteredResults);
      console.log(filteredData);
    }
  };
  const exportToExcel = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileName = "service_data.xlsx";
    const ws = XLSX.utils.json_to_sheet(filteredChecklistData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    const url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };
  return (
    <section className="flex "> 
       <Navbar /> 
      <div className="p-4 overflow-hidden w-full my-2 flex mx-3 flex-col">
        
        <Services />
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
            placeholder="Search By name"
            className="border-2 p-2 w-96 border-gray-300 rounded-lg"
            value={searchChecklistText}
            onChange={handleChecklistSearch}
          />
          <div className="flex flex-wrap gap-2">
            {/* <button
      className="text-lg font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
      onClick={() => setOmitColumn(!omitColumn)}
    >
      <IoFilterOutline />
      Filter Columns
    </button> */}
            <button
              className="text-lg font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
              onClick={() => setFilter(!filter)}
            >
              <BiFilterAlt />
              Filter
            </button>

            <Link
              to={"/services/add-service-checklist"}
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
        <Table columns={checklistColumn} data={filteredChecklistData} />
        {/* <DataTable
  selectableRows
  columns={column.filter((col) => visibleColumns.includes(col.name))}
  data={filteredData}
  customStyles={customStyle}
  responsive
  onSelectedRowsChange={handleRowSelected}
  fixedHeader
  // fixedHeaderScrollHeight="500px"
  pagination
  selectableRowsHighlight
  highlightOnHover
  omitColumn={column}
/> */}
      </div>
    </section>
  );
};

export default ServiceChecklist;
