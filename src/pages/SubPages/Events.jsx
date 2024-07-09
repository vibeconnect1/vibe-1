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
      const sortedEvents = eventsResponse.data.sort((a,b)=> {
        return new Date(b.created_at) - new Date(a.created_at)
      })
      console.log(eventsResponse);
      setEvents(sortedEvents);
      setFilteredData(sortedEvents);
    };
    fetchEvents();
  }, []);
  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
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
      selector: (row) => row.discription,
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
    const filteredResults = events.filter((item) =>
      item.event_name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredResults);
  };


  return (
    <div className=" ">
     
      <div className="flex justify-between gap-2 items-center my-2 sm:flex-row flex-col ">
        <input
          type="text"
          placeholder="Search By title"
          className="border-2 p-2 sm:w-96 border-gray-300 rounded-lg"
          value={searchText}
          onChange={handleSearch}
        />
        <div className="flex gap-2">
          
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
