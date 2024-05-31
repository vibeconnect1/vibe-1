import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AMC = () => {
  const [searchText, setSearchText] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);

    if (searchValue.trim() === "") {
      setFilteredData(assets);
    } else {
      const filteredResults = assets.filter(
        (item) =>
          item.building_name
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.unit_name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredResults);
    }
  };
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center my-2 gap-2  ">
        <input
          type="text"
          placeholder="Search By Building name, Asset Name or Unit"
          className="border-2 p-2 md:w-96 border-gray-300 rounded-lg placeholder:text-sm"
          value={searchText}
          onChange={handleSearch}
        />
        <div className="md:flex grid grid-cols-2 sm:flex-row my-2 flex-col gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            // onClick={exportToExcel}
          >
            Export
          </button>
        </div>
      </div>

      {/* <DataTable
            selectableRows
            // columns={column.filter((col) => visibleColumns.includes(col.name))}
            columns={column}
            data={filteredData}
            customStyles={customStyle}
            responsive
            onSelectedRowsChange={handleRowSelected}
            fixedHeader
            // fixedHeaderScrollHeight="450px"
            pagination
            selectableRowsHighlight
            highlightOnHover
            // omitColumn={column} */}
      {/* /> */}
    </div>
  );
};

export default AMC;
