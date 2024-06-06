import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getAMC } from "../../api";
import Table from "../../components/table/Table";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

const AMC = () => {
  const [searchText, setSearchText] = useState("");
  const [amc, setAmc] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchAmc = async () => {
      const AMCResponse = await getAMC();
      setFilteredData(AMCResponse.data);
      setAmc(AMCResponse.data);
      console.log(AMCResponse)
    };
    fetchAmc();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);

    if (searchValue.trim() === "") {
      setFilteredData(amc);
    } else {
      const filteredResults = amc.filter((item) =>
        item.asset_name.toLowerCase().includes(searchValue.toLowerCase())||
      item.vendor_name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredResults);
    }
  };
  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Adjust the format as needed
  };

  const AMCColumn = [
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <div className="flex items-center gap-4">
    //       <Link to={`/assets/amc-details/${row.asset_id}`}>
    //         <BsEye size={15} />
    //       </Link>

    //     </div>
    //   ),
    // },
    { name: "Asset Name", selector: (row) => row.asset_name },
   
    { name: "Vendor", selector: (row) => row.vendor_name },

    { name: "Start Date", selector: (row) => row.start_date },
    { name: "End Date", selector: (row) => row.end_date },
    { name: "Frequency", selector: (row) => row.frequency },
    { name: "type", selector: (row) => row.type },
    { name: "First Service", selector: (row) => row.first_service },
    { name: "Status", selector: (row) => row.status },
    { name: "Created On", selector: (row) => dateFormat(row.created_at) },
  ];

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center my-2 gap-2  ">
        <input
          type="text"
          placeholder="Search ByAsset Name, Vendor Name"
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

      <Table columns={AMCColumn} data={filteredData} isPagination={true} />
    </div>
  );
};

export default AMC;
