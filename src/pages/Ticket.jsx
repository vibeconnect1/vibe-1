import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Navbar from "../components/Navbar";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { getAdminComplaints, getComplaints } from "../api";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import moment from "moment";
import { getItemInLocalStorage } from "../utils/localStorage";
import * as XLSX from "xlsx";
const Ticket = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [ticketTypeCounts, setTicketTypeCounts] = useState({});
  const [ticketStatusCounts, setTicketStatusCounts] = useState({});
  const allTicketTypes = ["Complaint", "Request", "Suggestion"];
  const [complaints, setComplaints] = useState([]);

  const getTimeAgo = (timestamp) => {
    const createdTime = moment(timestamp);
    const now = moment();
    const diff = now.diff(createdTime, "minutes");
    if (diff < 60) {
      return `${diff} minutes ago`;
    } else if (diff < 1440) {
      return `${Math.floor(diff / 60)} hours ago`;
    } else {
      return `${Math.floor(diff / 1440)} days ago`;
    }
  };

  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/tickets/details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/edit/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Ticket Number",
      selector: (row) => row.ticket_number,
      sortable: true,
    },
    {
      name: "Building Name",
      selector: (row) => row.building_name,
      sortable: true,
    },
    { name: "Floor Name", selector: (row) => row.floor_name, sortable: true },
    { name: "Unit Name", selector: (row) => row.unit, sortable: true },
    {
      name: "Customer Name",
      selector: (row) => row.created_by,
      sortable: true,
    },
    { name: "Category", selector: (row) => row.category_type, sortable: true },
    {
      name: "Sub Category",
      selector: (row) => row.sub_category,
      sortable: true,
    },
    { name: "Title", selector: (row) => row.heading, sortable: true },
    {
      name: "Description",
      selector: (row) => row.text,
      sortable: true,
      maxWidth: "500px",
    },
    { name: "Status", selector: (row) => row.issue_status, sortable: true },
    { name: "Created By", selector: (row) => row.created_by, sortable: true },
    { name: "Created On", selector: (row) => row.created_at, sortable: true },
    { name: "Prioity", selector: (row) => row.priority, sortable: true },
    { name: "Assigned To", selector: (row) => row.assigned_to, sortable: true },
    { name: "Ticket Type", selector: (row) => row.issue_type, sortable: true },
    {
      name: "Total Time",
      selector: (row) => getTimeAgo(row.created_at),
      sortable: true,
    },
  ];

  //custom style
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
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAdminComplaints();
        console.log("Resp", response);
        getItemInLocalStorage("complaints", response);
        const complaints = response?.data?.complaints || []; // Handle undefined or empty complaints array
        setFilteredData(complaints);
        setComplaints(complaints);

        const statusCounts = complaints.reduce((acc, curr) => {
          acc[curr.issue_status] = (acc[curr.issue_status] || 0) + 1;
          return acc;
        }, {});
        setTicketStatusCounts(statusCounts);

        const typeCounts = complaints.reduce((acc, curr) => {
          acc[curr.issue_type] = (acc[curr.issue_type] || 0) + 1;
          return acc;
        }, {});
        setTicketTypeCounts(typeCounts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getComplaints();
  //       const complaints = response.data.complaints;
  //       setFilteredData(complaints);

  //       const statusCounts = complaints.reduce((acc, curr) => {
  //         acc[curr.issue_status] = (acc[curr.issue_status] || 0) + 1;
  //         return acc;
  //       }, {});
  //       setTicketStatusCounts(statusCounts);
  //       const typeCounts = complaints.reduce((acc, curr) => {
  //         acc[curr.issue_type] = (acc[curr.issue_type] || 0) + 1;
  //         return acc;
  //       }, {});
  //       setTicketTypeCounts(typeCounts);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const handleSearch = (e) => {
  //   const searchValue = e.target.value;
  //   setSearchText(searchValue);
  //   const filteredResults = filteredData.filter(
  //     (item) =>
  //       item.ticket_number.toLowerCase().includes(searchValue.toLowerCase()) ||
  //       item.category_type.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   setFilteredData(filteredResults);
  // };

  // const handleStatusChange = (status) => {
  //   setSelectedStatus(status);
  // };

  // const handleSearch = (e) => {
  //   const searchValue = e.target.value;
  //   setSearchText(searchValue);
  //   const filteredResults = filteredData.filter(
  //     (item) =>
  //       (selectedStatus === "all" ||
  //         item.issue_status.toLowerCase() === selectedStatus) &&
  //       (item.ticket_number.toLowerCase().includes(searchValue.toLowerCase()) ||
  //         item.category_type.toLowerCase().includes(searchValue.toLowerCase()))
  //   );
  //   setFilteredData(filteredResults);
  // };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);

    if (searchValue.trim() === "") {
      // If search input is empty, reset to show all data
      setFilteredData(complaints);
    } else {
      // Filter the data based on search input and selected status
      const filteredResults = complaints.filter(
        (item) =>
          ((selectedStatus === "all" ||
            item.issue_status.toLowerCase() === selectedStatus.toLowerCase()) &&
            (item.ticket_number
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
              item.category_type
                .toLowerCase()
                .includes(searchValue.toLowerCase()))) ||
          item.issue_type.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.heading.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.priority.toLowerCase().includes(searchValue.toLowerCase())
        // ||
        // item.assigned_to.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredResults);
    }
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);

    if (status === "all") {
      setFilteredData(complaints);
    } else {
      const filteredResults = complaints.filter(
        (item) => item.issue_status.toLowerCase() === status.toLowerCase()
      );

      setFilteredData(filteredResults);
    }
  };

  // export data
  const exportToExcel = () => {
    const modifiedData = filteredData.map((item) => ({
      ...item,
      "Ticket Number": item.ticket_number,
    }));
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileName = "helpdesk_data.xlsx";
    const ws = XLSX.utils.json_to_sheet(modifiedData);
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
    // <section className="container max-w-min overflow-hidden mr-5 flex md:justify-between md:items-start">
    <section className="flex">
      {/* <section className="flex max-w-min overflow-x-auto mr-5 "> */}
     
      <Navbar />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex m-5 justify-start w-fit gap-5 sm:flex-row flex-col flex-shrink flex-wrap ">
          {/* <div className="flex gap-2 mt-2"> */}
          {Object.entries(ticketStatusCounts).map(([status, count]) => (
            <div
              key={status}
              className={`shadow-xl rounded-full border-4 w-52 px-6 p-2 flex flex-col items-center flex-shrink ${
                status === "Pending"
                  ? "border-red-400"
                  : status === "Closed"
                  ? "border-red-400"
                  : status === "Complete"
                  ? "border-indigo-400"
                  : status === "Approved"
                  ? "border-yellow-400"
                  : status === "Completed"
                  ? "border-green-400"
                  : status === "Work In Progress"
                  ? "border-pink-400"
                  : status === "On Hold"
                  ? "border-purple-400"
                  : status === "Re Open"
                  ? "border-green-800"
                  : status === "Received"
                  ? "border-red-800"
                  : status === "Approval Pending"
                  ? "border-x-teal-300"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <p className="font-medium">{status}</p>
              <p>{count}</p>
            </div>
          ))}
          {/* </div> */}

          {allTicketTypes.map((type) => (
            <div
              key={type}
              className={`shadow-xl rounded-full border-4 w-52 px-6 p-2 flex flex-col items-center flex-shrink ${
                ticketTypeCounts[type] !== undefined
                  ? type === "Complaint"
                    ? "border-blue-400"
                    : type === "Request"
                    ? "border-orange-400"
                    : type === "Suggestion"
                    ? " border-yellow-400"
                    : ""
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <p className="font-medium">{type} </p>
              {ticketTypeCounts[type] !== undefined
                ? ticketTypeCounts[type]
                : 0}
            </div>
          ))}
        </div>

        <div className="flex sm:flex-row flex-col gap-10 my-5">
          <div className="sm:flex grid grid-cols-2 items-center justify-center  gap-4 border border-gray-300 rounded-md px-3 p-2 w-auto">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="all"
                name="status"
                checked={selectedStatus === "all"}
                onChange={() => handleStatusChange("all")}
              />
              <label htmlFor="all" className="text-sm">
                All
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="open"
                name="status"
                checked={selectedStatus === "open"}
                onChange={() => handleStatusChange("open")}
              />
              <label htmlFor="open" className="text-sm">
                Open
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="closed"
                name="status"
                checked={selectedStatus === "closed"}
                onChange={() => handleStatusChange("closed")}
              />
              <label htmlFor="closed" className="text-sm">
                Closed
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="pending"
                name="status"
                checked={selectedStatus === "pending"}
                onChange={() => handleStatusChange("pending")}
              />
              <label htmlFor="pending" className="text-sm">
                Pending
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="complete"
                name="status"
                checked={selectedStatus === "complete"}
                onChange={() => handleStatusChange("complete")}
              />
              <label htmlFor="complete" className="text-sm">
                Complete
              </label>
            </div>
          </div>
          <Link
            to={"/tickets/create-ticket"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center w-44 gap-2 justify-center"
            // onClick={() => setShowCountry(!showCountry)}
          >
            <PiPlusCircle size={20} />
            Add
          </Link>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by Title, Ticket number, Category, Ticket type or Priority "
              className="border border-gray-400 w-96 placeholder:text-xs rounded-lg p-2"
              value={searchText}
              onChange={handleSearch}
            />
            {/* <button
                className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center w-24 gap-2 justify-center"
                onClick={handleSearch}
              >
                Search
              </button> */}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={exportToExcel}
          >
            Export
          </button>
        </div>

        {complaints.length === 0 ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="flex flex-col gap-4 justify-center items-center">
            <DataTable
              responsive
              selectableRows
              columns={columns}
              data={filteredData}
              customStyles={customStyle}
              pagination
              fixedHeader
              fixedHeaderScrollHeight="420px"
              selectableRowsHighlight
              highlightOnHover
            />
          </div>
        )}
        {/* </div> */}
      </div>
    </section>
  );
};

//
export default Ticket;
