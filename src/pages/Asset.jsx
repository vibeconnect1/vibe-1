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
import AMC from "./SubPages/AMC";
import Meter from "./Meter";
import { useSelector } from "react-redux";
import Inventory from "./Inventory";
import Checklist from "./Checklist";
import RoutineTask from "./RoutineTask";

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
  const [page, setPage] = useState("assets");
  const [assets, setAssets] = useState([]);
  const themeColor = useSelector((state) => state.theme.color);

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
          <Link to={`/assets/edit-asset/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },

    {
      name: "Site",
      selector: (row) => row.Site_name,
      sortable: true,
    },
    {
      name: "Building",
      selector: (row) => row.building_name,
      sortable: true,
    },
    {
      name: "Area",
      selector: (row) => row.area_name,
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
      name: "OEM Name",
      selector: (row) => row.oem_name,
      sortable: true,
    },
    // {
    //   name: "Asset Code",
    //   selector: (row) => row.code,
    //   sortable: true,
    // },
    // {
    //   name: "Asset Number",
    //   selector: (row) => row.code,
    //   sortable: true,
    // },

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
      name: "Asset Type",
      selector: (row) => row.asset_type,
      sortable: true,
    },
    {
      name: "Client Name",
      selector: (row) => row.client_name,
      sortable: true,
    },
    {
      name: "Group",
      selector: (row) => row.group,
      sortable: true,
    },
    {
      name: "Sub Group",
      selector: (row) => row.sub_group,
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
      name: "Status",
      selector: (row) =>
        row.breakdown ? (
          <p className="bg-red-400 p-1 px-2 rounded-full text-white">
            Breakdown
          </p>
        ) : (
          <p className="bg-green-400 p-1 px-2 rounded-full text-white">
            In Use
          </p>
        ),
      sortable: true,
    },
    {
      name: "Capacity",
      selector: (row) => row.capacity,
      sortable: true,
    },

    {
      name: "Created On",
      selector: (row) => dateFormat(row.created_at),
      sortable: true,
    },
    {
      name: "Updated On",
      selector: (row) => dateFormat(row.updated_at),
      sortable: true,
    },
    {
      name: "Warranty",
      selector: (row) => row.warranty,
      sortable: true,
    },
    {
      name: "Warranty Start",
      selector: (row) => row.warranty_start,
      sortable: true,
    },

    {
      name: "Installation Date",
      selector: (row) => row.installation,
      sortable: true,
    },
    {
      name: "AMC",
      selector: (row) => row.amc,
      sortable: true,
    },
    {
      name: "PPM",
      selector: (row) => row.ppm,
      sortable: true,
    },
    {
      name: "Meter Configured",
      selector: (row) => (row.is_meter ? "Yes" : "No"),
      sortable: true,
    },
    {
      name: "Meter Category",
      selector: (row) => row.meter_category,
      sortable: true,
    },
    {
      name: "Meter Type",
      selector: (row) => row.meter_type,
      sortable: true,
    },
    {
      name: "Submeter",
      selector: (row) => row.sub_meter,
      sortable: true,
    },
    {
      name: "Supplier",
      selector: (row) => row.supplier,
      sortable: true,
    },
  ];

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
          (item.oem_name &&
            item.oem_name.toLowerCase().includes(searchValue.toLowerCase()))||
            (item.unit_name &&
              item.unit_name.toLowerCase().includes(searchValue.toLowerCase()))
      );
      setFilteredData(filteredResults);
    }
  };

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: themeColor,
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
        setAssets(response.data.site_assets);
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
        (item) => item.building_id === parseInt(selectedBuilding, 10)
      );
    }

    if (selectedFloor) {
      filteredResults = filteredResults.filter(
        (item) => item.floor_id === parseInt(selectedFloor, 10)
      );
    }

    if (selectedUnit) {
      filteredResults = filteredResults.filter(
        (item) => item.unit_id === parseInt(selectedUnit, 10)
      );
    }

    setFilteredData(filteredResults);
    console.log("Filtered Results:", filteredResults);
  };

  const handleBuildingChange = async (e) => {
    const buildingId = e.target.value;
    setSelectedBuilding(buildingId);
    const response = await getFloors(buildingId);
    setFloors(response.data.map((item) => ({ name: item.name, id: item.id })));
    setSelectedFloor(""); // Reset floor and unit when building changes
    setUnitName([]);
    setSelectedUnit("");
  };

  const handleFloorChange = async (e) => {
    const floorId = e.target.value;
    setSelectedFloor(floorId);
    const response = await getUnits(floorId);
    setUnitName(
      response.data.map((item) => ({ name: item.name, id: item.id }))
    );
    setSelectedUnit(""); // Reset unit when floor changes
  };

  const handleUnitChange = (e) => {
    const unitId = e.target.value;
    setSelectedUnit(unitId);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e.target.result;
      parse(contents, {
        header: true,
        complete: (result) => {
          setAssets(result.data); // Update assets state with parsed data
          setFilteredData(result.data); // Update filtered data state with parsed data
        },
      });
    };

    reader.readAsText(file);
  };

  return (
    <section className="flex">
      <Navbar />
      <div className="p-4 w-full my-2 flex mx-3 overflow-hidden flex-col">
        <div className="flex justify-center w-full">
          <div className="sm:flex grid grid-cols-2 sm:flex-row gap-5 font-medium p-2 sm:rounded-full rounded-md bg-gray-400">
            <h2
              className={`p-1 ${
                page === "assets" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer text-center `}
              onClick={() => setPage("assets")}
            >
              Assets
            </h2>
            <h2
              className={`p-1 ${
                page === "AMC" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("AMC")}
            >
              AMC
            </h2>
            <h2
              className={`p-1 ${
                page === "meter" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("meter")}
            >
              Meter
            </h2>
            <h2
              className={`p-1 ${
                page === "checklist" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("checklist")}
            >
              Checklist
            </h2>
            <h2
              className={`p-1 ${
                page === "routine" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("routine")}
            >
              Routine Task
            </h2>
            <h2
              className={`p-1 ${
                page === "PPM" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("PPM")}
            >
              PPM Activity
            </h2>
            <h2
              className={`p-1 ${
                page === "inventory" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("inventory")}
            >
              Stock Items
            </h2>
          </div>
        </div>
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
        {filter && page === "assets" && (
          <div className="flex flex-col md:flex-row mt-1 items-center justify-center gap-2">
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
            <button
              className="bg-black p-1 px-4 text-white rounded-md"
              onClick={handleFilterApply}
            >
              Apply
            </button>
          </div>
        )}
        {page === "assets" && (
          <>
            <div className="flex md:flex-row flex-col justify-between items-center my-2 gap-2  ">
              <input
                type="text"
                placeholder="Search By Building, Asset, Unit or OEM Name"
                className="border-2 p-2 md:w-96 border-gray-300 rounded-lg placeholder:text-sm"
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
                  className=" font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
                  onClick={() => setFilter(!filter)}
                >
                  <BiFilterAlt />
                  Filter
                </button>

                <Link
                  to={"/assets/add-asset"}
                  className="bg-black  text-sm rounded-lg flex justify-center font-semibold items-center gap-2 text-white py-2 px-4 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 "
                >
                  <IoAddCircleOutline size={20} />
                  Add
                </Link>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {/* <input type="file"  className="opacity-0 w-fit" onChange={handleFileChange} /> */}
                  Import
                </button>
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
          </>
        )}
        {page === "AMC" && <AMC />}
        {page === "meter" && <Meter />}
        {page === "checklist" && <Checklist />}
        {page === "inventory" && <Inventory />}
        {page === "routine" && <RoutineTask />}
      </div>
    </section>
  );
};

export default Asset;
