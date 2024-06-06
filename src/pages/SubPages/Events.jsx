import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline } from "react-icons/io5";
import { ImEye } from "react-icons/im";
import { Link } from "react-router-dom";
import { getItemInLocalStorage } from "../../utils/localStorage";
import { getEvents } from "../../api";
import { BsEye } from "react-icons/bs";
import Table from "../../components/table/Table";
import { useSelector } from "react-redux";

const Events = () => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState(false);
  const [user, setUser] = useState("");
  const [events, setEvents] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const themeColor = useSelector((state)=> state.theme.color)

  useEffect(() => {
    const userType = getItemInLocalStorage("USERTYPE");
    setUser(userType);
    const fetchEvents = async () => {
      const eventsResponse = await getEvents();
      console.log(eventsResponse);
      setEvents(eventsResponse.data);
      setFilteredData(eventsResponse.data);
    };
    fetchEvents();
  }, []);
  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const column = [
    {
      name: "Action",
      cell: (row) => (
        <Link to={`/communication/event/event-details/${row.id}`}>
          <BsEye size={15} />
        </Link>
      ),
      sortable: true,
    },
    { name: "Title", selector: (row) => row.event_name, sortable: true },
    { name: "Venue", selector: (row) => row.venue, sortable: true },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    { name: "Created By", selector: (row) => row.created_by, sortable: true },
    {
      name: "Start Date",
      selector: (row) => dateFormat(row.start_date_time),
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => dateFormat(row.end_date_time),
      sortable: true,
    },
    {
      name: "Event Type",
      selector: (row) => row.scheduledOn,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.scheduledTime,
      sortable: true,
    },
    {
      name: "Expired",
      selector: (row) => row.bookingStatus,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => dateFormat(row.created_at),
      sortable: true,
    },
  ];

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
    const filteredResults = data.filter((item) =>
      item.facility.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "14px",
      },
    },
  };
  return (
    <div className=" ">
      {filter && (
        <div className="flex items-center justify-center gap-2">
          <select className="border p-1 px-4 border-gray-500 rounded-md">
            <option value="">Select Unit</option>
            <option value="unit1">Unit 1</option>
            <option value="unit2">Unit 2</option>
          </select>

          <div className="flex gap-4 items-center  ">
            <div className="flex gap-2 items-center">
              <label htmlFor="">From:</label>
              <input
                type="date"
                name=""
                id=""
                className="border border-black rounded-md px-4"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="">To:</label>
              <input
                type="date"
                name=""
                id=""
                className="border border-black rounded-md px-4"
              />
            </div>
          </div>
          <select className="border p-1 px-4 border-gray-500 rounded-md">
            <option value="">Select Status</option>
            <option value="unit1">Published</option>
            <option value="unit2">Disabled</option>
            <option value="unit2">Rejected</option>
          </select>
          <button className="bg-black p-2 text-white rounded-md">Apply</button>
        </div>
      )}
      <div className="flex justify-between gap-2 items-center my-2 sm:flex-row flex-col ">
        <input
          type="text"
          placeholder="Search By title"
          className="border-2 p-2 sm:w-96 border-gray-300 rounded-lg"
          value={searchText}
          onChange={handleSearch}
        />
        <div className="flex gap-2">
          <button
            className="text-lg font-semibold border-2 border-black px-4 p-1 rounded-md"
            onClick={() => setFilter(!filter)}
          >
            Filter
          </button>
          {user === "pms_admin" && (
            <Link
            style={{background: themeColor}}
              to={"/communication/create-event"}
              className="  rounded-md flex font-semibold  items-center gap-2 text-white p-2 "
            >
              <IoAddCircleOutline size={20} />
              Add
            </Link>
          )}
        </div>
      </div>
      <Table columns={column} data={filteredData} isPagination={true} />
    </div>
  );
};

export default Events;
