import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline } from "react-icons/io5";
import { ImEye } from "react-icons/im";
import { Link } from "react-router-dom";
import { getItemInLocalStorage } from "../../utils/localStorage";
import { getBroadCast } from "../../api";
import Table from "../../components/table/Table";
import { useSelector } from "react-redux";
import { BsEye } from "react-icons/bs";

const Broadcast = () => {
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [broadcast, setBroadcast] = useState([]);
  const themeColor = useSelector((state) => state.theme.color);
  useEffect(() => {
    const userType = getItemInLocalStorage("USERTYPE");
    setUser(userType);
    const fetchBroadCast = async () => {
      const broadcastResp = await getBroadCast();
      setFilteredData(broadcastResp.data);
      setBroadcast(broadcastResp.data);
      console.log(broadcastResp);
    };
    fetchBroadCast();
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
          <BsEye size={15} />
        </Link>
      ),
      sortable: true,
    },
    { name: "Title", selector: (row) => row.notice_title, sortable: true },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Notice Description",
      selector: (row) => row.notice_discription,
      sortable: true,
    },
    { name: "Created By", selector: (row) => row.CreatedBy, sortable: true },
    {
      name: "Expiry Date",
      selector: (row) => dateFormat(row.expiry_date),
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => dateFormat(row.created_at),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
    const filteredResults = broadcast.filter((item) =>
      item.notice_title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <div className="">
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
            style={{ background: themeColor }}
            className="  rounded-md flex font-semibold items-center gap-2 text-white p-2"
          >
            <IoAddCircleOutline size={20} />
            Add Broadcast/Notice
          </Link>
        )}
      </div>
      <Table columns={column} data={filteredData} />
    </div>
  );
};

export default Broadcast;
