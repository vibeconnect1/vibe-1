import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline, IoFilterOutline } from "react-icons/io5";
import { BsEye, BsFilterLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import * as XLSX from "xlsx";
import { columnsData } from "../utils/assetColumns";
import { BiEdit, BiFilter, BiFilterAlt } from "react-icons/bi";
import { getFloors, getSiteAsset, getUnits } from "../api";
import { getItemInLocalStorage } from "../utils/localStorage";
// import jsPDF from "jspdf";
// import QRCode from "qrcode.react";

const Asset = () => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState(false);
  // const [omitColumn, setOmitColumn] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(columnsData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [floors, setFloors] = useState([]);
  const [unitName, setUnitName] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");

  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Adjust the format as needed
  };
  const column = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/assets/asset-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/asset-edit/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },

    {
      name: "Building",
      selector: (row) => row.building_name,
      sortable: true,
    },

    { name: "Floor", selector: (row) => row.floor_name, sortable: true },
    { name: "Unit", selector: (row) => row.unit_name, sortable: true },

    {
      name: "Asset Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Serial Number",
      selector: (row) => row.serial_number,
      sortable: true,
    },

    {
      name: "Model Number",
      selector: (row) => row.model_number,
      sortable: true,
    },
    {
      name: "Purchase Date",
      selector: (row) => row.purchased_on,
      sortable: true,
    },

    {
      name: "Purchase Cost",
      selector: (row) => row.purchase_cost,
      sortable: true,
    },
    {
      name: "Warranty Expiry",
      selector: (row) => row.warranty_expiry,
      sortable: true,
    },
    {
      name: "Critical",
      selector: (row) => (row.critical ? "Yes" : "No"),
      sortable: true,
    },
    {
      name: "Breakdown",
      selector: (row) => (row.breakdown ? "Yes" : "No"),
      sortable: true,
    },
    {
      name: "Capacity",
      selector: (row) => row.capacity,
      sortable: true,
    },

    // {
    //   name: "Created On",
    //   selector: (row) => dateFormat(row.created_at),
    //   sortable: true,
    // },
    // {
    //   name: "Updated On",
    //   selector: (row) => dateFormat(row.updated_at),
    //   sortable: true,
    // },
    // {
    //   name: "Warranty",
    //   selector: (row) => row.warranty_start,
    //   sortable: true,
    // },

    {
      name: "Installation Date",
      selector: (row) => row.installation,
      sortable: true,
    },
    // {
    //   name: "AMC",
    //   selector: (row) => row.AMC,
    //   sortable: true,
    // },
    // {
    //   name: "PPM",
    //   selector: (row) => row.ppm,
    //   sortable: true,
    // },
    {
      name: "Meter Configured",
      selector: (row) => (row.is_meter ? "Yes" : "No"),
      sortable: true,
    },
    // {
    //   name: "Meter Type",
    //   selector: (row) => row.meterType,
    //   sortable: true,
    // },
    // {
    //   name: "Submeter",
    //   selector: (row) => row.subMeter,
    //   sortable: true,
    // },
    // {
    //   name: "Supplier",
    //   selector: (row) => row.supplier,
    //   sortable: true,
    // },
  ];

  const [filteredData, setFilteredData] = useState([]);
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
    const filteredResults = filteredData.filter(
      (item) =>
        item.building_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredResults);
    console.log(filteredResults);
  };

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "10px",
      },
    },
    headCells: {
      style: {
        textTransform: "upperCase",
      },
    },
    cells: {
      style: {
        fontWeight: "bold",
        fontSize: "10px",
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSiteAsset();
        setFilteredData(response.data.site_assets);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const exportToExcel = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileName = "asset_data.xlsx";
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

  const buildings = getItemInLocalStorage("Building");
  // const buildingChange = async (e) => {
  //   async function fetchFloor(buildingId) {
  //     try {
  //       const build = await getFloors(buildingId);
  //       // console.log("units n", build.data);
  //       setFloor(build.data.map((item) => ({ name: item.name, id: item.id })));
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }

  //   async function getUnit(floorId) {
  //     try {
  //       const unit = await getUnits(floorId);
  //       setUnitName(
  //         unit.data.map((item) => ({ name: item.name, id: item.id }))
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   if (e.target.type === "select-one" && e.target.name === "building_name") {
  //     const BuildID = Number(e.target.value);
  //     await fetchFloor(BuildID);

  //     setFormData({
  //       ...formData,
  //       building_name: BuildID,
  //     });
  //   } else if (
  //     e.target.type === "select-one" &&
  //     e.target.name === "floor_name"
  //   ) {
  //     const UnitID = Number(e.target.value);
  //     await getUnit(UnitID);
  //     setFormData({
  //       ...formData,
  //       floor_name: UnitID,
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   }
  // };

  const handleFilterApply = () => {
    let filteredResults = [...filteredData];

    if (selectedBuilding) {
      filteredResults = filteredResults.filter(
        (item) => item.building_name === selectedBuilding
      );
    }

    if (selectedFloor) {
      filteredResults = filteredResults.filter(
        (item) => item.floor_name === selectedFloor
      );
    }

    if (selectedUnit) {
      filteredResults = filteredResults.filter(
        (item) => item.unit_name === selectedUnit
      );
    }

    setFilteredData(filteredResults);
  };

  const handleBuildingChange = async (e) => {
    const buildingId = e.target.value;
    setSelectedBuilding(buildingId);
    const response = await getFloors(buildingId);
    setFloors(response.data.map((item) => ({ name: item.name, id: item.id })));
  };

  const handleFloorChange = async (e) => {
    const floorId = e.target.value;
    setSelectedFloor(floorId);
    const response = await getUnits(floorId);
    setUnitName(response.data.map((item) => ({ name: item.name, id: item.id })));
  };

  const handleUnitChange = (e) => {
    const unitId = e.target.value;
    setSelectedUnit(unitId);
  };
console.log(unitName)
  return (
    <section className="flex">
      <Navbar />
      <div className="p-4 w-full my-2 flex mx-3 overflow-hidden flex-col">
        {/* {omitColumn && (
          <div className="grid grid-cols-10  gap-x-12 gap-y-4 border-2 border-black p-2 rounded-md mb-5">
            {column.map((col) => (
              <label key={col.name} className="flex items-center ">
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
        )} */}
        {filter && (
          <div className="flex items-center justify-center gap-2">
            <select
              name="building_name"
              id="building_name"
              onChange={handleBuildingChange}
              className="border p-1 px-4 max-w-44 w-44 border-gray-500 rounded-md"
            >
              <option value="">Select Building</option>
              {buildings?.map((building) => (
                <option key={building.id} value={building.id}>
                  {building.name}
                </option>
              ))}
            </select>

            <select
              onChange={handleFloorChange}
              name="floor_name"
              className="border p-1 px-4 max-w-44 w-44 border-gray-500 rounded-md"
            >
              <option value="">Select Floor</option>
              {floors?.map((floor) => (
                <option value={floor.id} key={floor.id}>
                  {floor.name}
                </option>
              ))}
            </select>
            <select
              onChange={handleUnitChange}
              name="unit_name"
              className="border p-1 px-4 max-w-44 w-44 border-gray-500 rounded-md"
            >
              <option value="">Select Unit</option>
              {unitName?.map((unit) => (
                <option value={unit.id} key={unit.id}>
                  {unit.name}
                </option>
              ))}
            </select>
            <button className="bg-black p-1 px-4 text-white rounded-md" onClick={handleFilterApply}>
              Apply
            </button>
          </div>
        )}
        <div className="flex md:flex-row flex-col justify-between items-center my-2  ">
          <input
            type="text"
            placeholder="Search By Building name or Asset Name"
            className="border-2 p-2 md:w-96 border-gray-300 rounded-lg"
            value={searchText}
            onChange={handleSearch}
          />
          <div className="md:flex grid grid-cols-2 sm:flex-row my-2 flex-col gap-2">
            {/* <button
              className="md:text-lg text-sm font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
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
              to={"/assets/add-asset"}
              className="bg-black  rounded-lg flex justify-center font-semibold  items-center gap-2 text-white p-2 "
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
          // omitColumn={column}
        />
      </div>
    </section>
  );
};

export default Asset;
