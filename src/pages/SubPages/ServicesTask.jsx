import React, { useEffect, useState } from 'react'
import { getServicesRoutineList } from '../../api';
import Table from '../../components/table/Table';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import Services from '../Services';
import Navbar from '../../components/Navbar';
import * as XLSX from "xlsx";
import { BsEye } from 'react-icons/bs';
const ServicesTask = () => {
    const [routines, setRoutines]= useState([])
    const [filter, setFilter] = useState(false);
    const [searchRoutineText, setSearchRoutineCheck] = useState("")
    const [filteredRoutineData, setFilteredRoutineData] = useState([]);
    const routineColumn = [
        {
          name: "Action",
          cell: (row) => (
            <div className="flex items-center gap-4">
              <Link to={`/service/checklist/${row.soft_service_id}/${row.id}`}>
                <BsEye size={15} />
              </Link>
              {/* <Link to={`/services/edit-routine/${row.id}`}>
                <BiEdit size={15} />
              </Link> */}
            </div>
          ),
        },
        {
          name: "Service Name",
          selector: (row) => row.soft_service_name,
          sortable: true,
        },
        {
          name: "Checklist Name",
          selector: (row) => row.checklist_name,
          sortable: true,
        },
        
        {
          name: "Start Time",
          selector: (row) => row.start_time,
          sortable: true,
        },
        {
          name: "End Time",
          selector: (row) => row.end_time,
          sortable: true,
        },
        {
          name: "Status",
          selector: (row) => row.status,
          sortable: true,
        },
        {
          name: "Assigned To",
          selector: (row) => row.assigned_to_name,
          sortable: true,
        },  
        
      ];

      useEffect(() => {
        try {
          const fetchServiceRoutine = async () => {
            const ServiceRoutineResponse = await getServicesRoutineList();
            const filteredServiceTask = ServiceRoutineResponse.data.activities.filter(asset => asset.soft_service_name);
            console.log(filteredServiceTask)
            setFilteredRoutineData(filteredServiceTask);
            setRoutines(filteredServiceTask)
          };
          fetchServiceRoutine();
        } catch (error) {
          console.log(error);
        }
      }, []);
      const handleRoutineSearch = (event) => {
        const searchValue = event.target.value;
        setSearchRoutineCheck(searchValue);
        if (searchValue.trim() === "") {
          setFilteredRoutineData(routines);
        } else {
        const filteredResults = filteredRoutineData.filter((item) =>
         {item.soft_service_name && item.soft_service_name.toLowerCase().includes(searchValue.toLowerCase())}
        );
        setFilteredRoutineData(filteredResults);
        console.log(filteredResults)
        
      }
      };
    
      const exportToExcel = () => {
        const fileType =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        const fileName = "service Task Data.xlsx";
        const ws = XLSX.utils.json_to_sheet(filteredRoutineData);
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
          className="border-2 p-2 w-96 border-gray-300 rounded-lg "
          value={searchRoutineText}
          onChange={handleRoutineSearch}
        />
        <div className="flex flex-wrap gap-2">
          {/* <button
      className="text-lg font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
      onClick={() => setOmitColumn(!omitColumn)}
    >
      <IoFilterOutline />
      Filter Columns
    </button> */}
          {/* <button
            className="text-lg font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
            onClick={() => setFilter(!filter)}
          >
            <BiFilterAlt />
            Filter
          </button> */}

          {/* <Link
            to={"/services/add-service-ppm"}
            className="bg-black  rounded-lg flex font-semibold  items-center gap-2 text-white p-2 "
          >
            <IoAddCircleOutline size={20} />
            Add
          </Link> */}
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
      <Table columns={routineColumn} data={filteredRoutineData} />
    
      
    </div>
  </section>
  )
}

export default ServicesTask
