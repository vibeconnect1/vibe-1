import React, { useEffect, useState } from 'react'
import { getSoftServices } from '../../api';
import { BiEdit, BiFilterAlt } from 'react-icons/bi';
import { IoAddCircleOutline } from 'react-icons/io5';
import Table from '../../components/table/Table';
import { Link } from 'react-router-dom';
import { BsEye } from 'react-icons/bs';
import Services from '../Services';
import Navbar from '../../components/Navbar';
import * as XLSX from "xlsx";

const ServicePage = () => {
    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [servicess, setServices]= useState([])
    const dateFormat = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString();
      };
    const column = [
        {
          name: "Action",
          cell: (row) => (
            <div className="flex items-center gap-4">
              <Link to={`/services/service-details/${row.id}`}>
                <BsEye size={15} />
              </Link>
              <Link to={`/services/edit-service/${row.id}`}>
                <BiEdit size={15} />
              </Link>
            </div>
          ),
        },
        { name: "ID", selector: (row) => row.id, sortable: true },
        {
          name: "Service Name",
          selector: (row) => row.name,
          sortable: true,
        },
        {
          name: "Building",
          selector: (row) => row.building_name,
          sortable: true,
        },
        {
          name: "Floor",
          selector: (row) => row.floor_name,
          sortable: true,
        },
        {
          name: "Unit",
          selector: (row) => row.unit_name,
          sortable: true,
        },
        // {
        //   name: "Service Code",
        //   selector: (row) => row.serviceCode,
        //   sortable: true,
        // },
        // { name: "Reference Number", selector: (row) => row.ref, sortable: true },
        // { name: "Category", selector: (row) => row.category, sortable: true },
        // {
        //   name: "Group",
        //   selector: (row) => row.group,
        //   sortable: true,
        // },
        // {
        //   name: "UOM",
        //   selector: (row) => row.UOM,
        //   sortable: true,
        // },
        // {
        //   name: "Site",
        //   selector: (row) => row.site,
        //   sortable: true,
        // },
    
        // {
        //   name: "Area",
        //   selector: (row) => row.area,
        //   sortable: true,
        // },
        // {
        //   name: "Status",
        //   selector: (row) => row.status,
        //   sortable: true,
        // },
    
        {
          name: "Created On",
          selector: (row) => dateFormat(row.created_at),
          sortable: true,
        },
      ];

      useEffect(() => {
        try {
          const fetchService = async () => {
            const serviceResponse = await getSoftServices();
            setFilteredData(serviceResponse.data);
            setServices(serviceResponse.data)
            console.log(serviceResponse);
          };
          fetchService();
        } catch (error) {
          console.log(error);
        }
      }, []);
      const handleSearch = (event) => {
        const searchValue = event.target.value;
        setSearchText(searchValue);
        if (searchValue.trim() === "") {
          setFilteredData(servicess);
        } else {
        const filteredResults = filteredData.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filteredResults);
      };
    }
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
  return (
 <section className="flex "> 
       <Navbar /> 
      <div className="p-4 overflow-hidden w-full my-2 flex mx-3 flex-col">
        
        <Services />
        <div className='my-2'>

        
            {/* {filter && (
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
                  <option value="">Select Building</option>
                  <option value="unit1">Building 1</option>
                  <option value="unit2">Building 2</option>
                  <option value="unit2">Building 3</option>
                </select>
                <button className="bg-black p-1 px-4 text-white rounded-md">
                  Apply
                </button>
              </div>
            )} */}
            </div>
            <div className="flex flex-wrap justify-between items-center my-5 ">
              <input
                type="text"
                placeholder="Search By Service name"
                className="border-2 p-2 w-96 border-gray-300 rounded-lg"
                value={searchText}
                onChange={handleSearch}
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
            <Table columns={column} data={filteredData} />
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
  )
}

export default ServicePage
