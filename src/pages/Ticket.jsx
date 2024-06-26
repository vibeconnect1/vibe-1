import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Navbar from "../components/Navbar";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import {
  getAdminComplaints,
  getAdminPerPageComplaints,
  getComplaints,
  getTicketDashboard,
} from "../api";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import moment from "moment";
import { getItemInLocalStorage } from "../utils/localStorage";
import * as XLSX from "xlsx";
import { useSelector } from "react-redux";
import Table from "../components/table/Table";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Ticket = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [ticketTypeCounts, setTicketTypeCounts] = useState({});
  const [ticketStatusCounts, setTicketStatusCounts] = useState({});
  const allTicketTypes = ["Complaint", "Request", "Suggestion"];
  const [complaints, setComplaints] = useState([]);
  const perPage = 10;
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalRows, setTotalRows] = useState(0);
  // const [totalPages, setTotalPages] = useState(1);
  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

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

  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Adjust the format as needed
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
      // maxWidth: "500px",
    },
    { name: "Status", selector: (row) => row.issue_status, sortable: true },
    { name: "Created By", selector: (row) => row.created_by, sortable: true },
    {
      name: "Created On",
      selector: (row) => dateFormat(row.created_at),
      sortable: true,
    },
    { name: "Priority", selector: (row) => row.priority, sortable: true },
    { name: "Assigned To", selector: (row) => row.assigned_to, sortable: true },
    { name: "Ticket Type", selector: (row) => row.issue_type, sortable: true },
    {
      name: "Total Time",
      selector: (row) => getTimeAgo(row.created_at),
      sortable: true,
    },
  ];

  //custom style
  const themeColor = useSelector((state) => state.theme.color);
  const customStyle = {
    headRow: {
      style: {
        background: themeColor,
        color: "white",
        fontSize: "10px",
      },
    },
    headCells: {
      style: {
        textTransform: "uppercase",
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
    const fetchData = async (page, perPage) => {
      try {
        const response = await getAdminPerPageComplaints(page, perPage);
        console.log("Resp", response);
        // getItemInLocalStorage("complaints", response);
        const complaints = response?.data?.complaints || []; // Handle undefined or empty complaints array
        setFilteredData(complaints);
        setComplaints(complaints);
        setTotalRows(complaints.length);
        // setCurrentPage(Math.ceil(complaints.length / perPage));
        // setTotalPages(complaints.length);
        setTotalRows(complaints.length);

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
    

    fetchData(currentPage, perPage);
  }, [currentPage]);
  const [ticketTypes, setTicketsTypes] = useState({});
  const [statusData, setStatusData] = useState({});
  useEffect(() => {
    const fetchTicketInfo = async () => {
      try {
        const ticketInfoResp = await getTicketDashboard();
        setTicketsTypes(ticketInfoResp.data.by_type);
        setStatusData(ticketInfoResp.data.by_status);
        console.log(ticketInfoResp);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTicketInfo();
  }, []);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    console.log(currentPage);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Ensure currentPage does not go below 1
  };
  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  const handlePerRowsChange = async (newPerPage, page) => {
    setCurrentPage(page);
  };

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
          item.priority.toLowerCase().includes(searchValue.toLowerCase()) ||
          (item.unit &&
            item.unit.toLowerCase().includes(searchValue.toLowerCase()))
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
    // const modifiedData = filteredData.map((item) => ({
    //   ...item,
    //   "Ticket Number": item.ticket_number,
    // }));
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileName = "helpdesk_data.xlsx";
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

  document.title = `Tickets - Vibe Connect`;
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 mb-10 flex-col overflow-hidden">
        <div className="sm:flex grid grid-cols-2 m-5 justify-start w-fit gap-5 sm:flex-row flex-col flex-shrink flex-wrap ">
          {/* <div className="flex gap-2 mt-2"> */}
          {Object.entries(statusData).map(([key, value]) => (
          <div
            key={key}
            className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink"
            style={{ border: `4px solid ${getRandomColor()}` }}
          >
            {key}{" "}
            <span className="font-medium text-base text-black">{value}</span>
          </div>
        ))}
          {Object.entries(ticketTypes).map(([key, value]) => (
          <div
            key={key}
            className="shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink"
            style={{ border: `4px solid ${getRandomColor()}` }}
          >
            {key}{" "}
            <span className="font-medium text-base text-black">{value}</span>
          </div>
        ))}
          {/* {Object.entries(ticketStatusCounts).map(([status, count]) => (
            
            <div
              key={status}
              className={`shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6 px-4 flex flex-col items-center flex-shrink ${
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
                  : status === "Work Completed"
                  ? "border-green-800"
                  : status === "Reopened"
                  ? "border-red-800"
                  : status === "Approval Pending"
                  ? "border-x-teal-300"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <p className="font-medium text-center">{status}</p>
              <p className="font-medium">{count}</p>
            </div>
          ))} */}
          {/* </div> */}

          {/* {allTicketTypes.map((type) => (
            <div
              key={type}
              className={`shadow-xl sm:rounded-full rounded-xl border-4 sm:w-48 sm:px-6  flex flex-col items-center flex-shrink ${
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
              <p className="font-medium text-center">{type} </p>
              {ticketTypeCounts[type] !== undefined
                ? ticketTypeCounts[type]
                : 0}
            </div>
          ))} */}
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
                id="completed"
                name="status"
                checked={selectedStatus === "completed"}
                onChange={() => handleStatusChange("completed")}
              />
              <label htmlFor="completed" className="text-sm">
                Completed
              </label>
            </div>
          </div>
          <Link
            to={"/tickets/create-ticket"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-300 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center w-44 gap-2 justify-center"
            // onClick={() => setShowCountry(!showCountry)}
          >
            <PiPlusCircle size={20} />
            Add
          </Link>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by Title, Ticket number, Category, Ticket type, Priority or Unit "
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
          <>
            {/* <Table
              columns={columns}
              data={filteredData}
              customStyles={customStyle}
              apiEndpoint={"http://13.215.74.38/pms/admin/complaints.json?per_page=15&token=775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6"}

            /> */}
            <DataTable
              responsive
              selectableRows
              columns={columns}
              data={filteredData}
              customStyles={customStyle}
              fixedHeader
              fixedHeaderScrollHeight="500px"
              selectableRowsHighlight
              highlightOnHover
              // pagination
              // paginationServer
              // paginationTotalRows={totalPages * 10} // Assuming 10 items per page
              // paginationPerPage={10}
              // paginationRowsPerPageOptions={[10, 20, 30]} // Optional: specify different page sizes
              // onChangePage={handlePageChange}
              // paginationServer
              // paginationPerPage={perPage}
              // paginationRowsPerPageOptions={[perPage]} // Only one option since we're assuming fixed perPage value
              // onChangePage={handlePageChange}
              // paginationTotalRows={totalRows}
            />

            {/* <Table
              columns={columns}
              apiEndpoint="http://13.215.74.38/pms/admin/complaints.json?token=775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6"
             
            /> */}
          </>
        )}
        {/* </div> */}

        <div className="flex justify-end m-2 gap-2 items-center">
          <button
            onClick={handlePrevious}
            className=" px-2   disabled:opacity-50 disabled:shadow-none shadow-custom-all-sides rounded-full"
            disabled={currentPage <= 1}
          >
            <MdKeyboardArrowLeft size={30} />
          </button>

          {/* <button
            onClick={handleNext}
            className=" px-2 rounded-full shadow-custom-all-sides "
          >
            <MdKeyboardArrowRight size={30} />
          </button> */}

          <button
            onClick={handleNext}
            className="px-2 rounded-full shadow-custom-all-sides  disabled:opacity-50 disabled:shadow-none"
            disabled={perPage > totalRows}
          >
            <MdKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

//
export default Ticket;
