import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline } from "react-icons/io5";
import { ImEye } from "react-icons/im";
import { Link } from "react-router-dom";
import { getItemInLocalStorage } from "../../../utils/localStorage";
import Table from "../../../components/table/Table";
const EmployeeBroadcast = () => {
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState("");
  const [broadcast, setBroadcast] = useState([])

  useEffect(() => {
    const userType = getItemInLocalStorage("USERTYPE");
    setUser(userType);
    const fetchBroadCast = async()=>{
      const broadcastResp = await getBroadCast()
      setFilteredData(broadcastResp.data)
      console.log(broadcastResp)

    }
    fetchBroadCast()
  }, []);
  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

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
 

  const [filteredData, setFilteredData] = useState([]);
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
    const filteredResults = data.filter((item) =>
      item.facility.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  
  return (
    <div className="my-10">
      <div className="flex justify-between items-center sm:flex-row flex-col my-2">
        <input
          type="text"
          placeholder="Search by title"
          className="border-2 p-2 w-96 border-gray-300 rounded-lg"
          value={searchText}
          onChange={handleSearch}
        />
        {user === "pms_admin" && (
          <Link
            to={"/communication/broadcast/create-broadcast"}
            className="bg-black  rounded-lg flex font-semibold items-center gap-2 text-white p-2 my-5"
          >
            <IoAddCircleOutline size={20} />
            Add Broadcast/Notice
          </Link>
        )}
      </div>
      <Table
        columns={column}
        data={filteredData}
       
      />
    </div>
  );
};

export default EmployeeBroadcast