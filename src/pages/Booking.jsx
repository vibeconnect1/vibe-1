import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";
import { ImEye } from "react-icons/im";
import { BiExport } from "react-icons/bi";
import ExportBookingModal from "../containers/modals/ExportBookingsModal";
import { Link } from "react-router-dom";
import SetupBookingFacility from "./SubPages/SetupBookingFacility";

const Booking = () => {
  const [searchText, setSearchText] = useState("");
  const [modal, showModal] = useState(false);
  const [page, setPage] = useState("booking");
  const column = [
    {
      name: "Action",
      cell: (row) => (
        <Link to={`/bookings/booking-details/${row.id}`}>{row.action}</Link>
      ),
      sortable: true,
    },
    { name: "ID", selector: (row) => row.id, sortable: true },
    {
      name: "Facility",
      selector: (row) => row.facility,
      sortable: true,
    },
    { name: "Booked By", selector: (row) => row.bookedBy, sortable: true },
    { name: "Booked On", selector: (row) => row.bookedOn, sortable: true },
    {
      name: "Facility Type",
      selector: (row) => row.facilityType,
      sortable: true,
    },
    {
      name: "Scheduled On",
      selector: (row) => row.scheduledOn,
      sortable: true,
    },
    {
      name: "Scheduled Time",
      selector: (row) => row.scheduledTime,
      sortable: true,
    },
    {
      name: "Booking Status",
      selector: (row) => row.bookingStatus,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      action: <ImEye />,
      facility: "fac1",
      bookedBy: "A",
      bookedOn: "booked date",
      facilityType: "bookable",
      scheduledOn: "date",
      scheduledTime: "time",
      bookingStatus: "confirmed",
    },
    {
      id: 2,
      action: <ImEye />,
      facility: "Test2",
      bookedBy: "B",
      bookedOn: "booked date",
      facilityType: "bookable",
      scheduledOn: "date",
      scheduledTime: "time",
      bookingStatus: "pending",
    },
  ];

  const [filteredData, setFilteredData] = useState(data);
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
    <section className="flex mr-5">
      <Navbar />
      <div className="p-4 w-full my-2 flex mx-5 flex-col">
        <div className="flex justify-center">
          <div className="flex flex-row gap-10 text-lg font-semibold p-2 rounded-full bg-gray-400">
            <h2
              className={`p-1 ${
                page === "booking" && "bg-white"
              } rounded-full px-2 cursor-pointer`}
              onClick={() => setPage("booking")}
            >
              Bookings
            </h2>
            <h2
              className={`p-1 ${
                page === "setup" && "bg-white"
              } rounded-full px-2 cursor-pointer`}
              onClick={() => setPage("setup")}
            >
              Setup Facility
            </h2>
          </div>
        </div>
        {page === "booking" && (
          <div>
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Search By Facility"
                className="border-2 p-2 w-96 border-gray-300 rounded-lg"
                value={searchText}
                onChange={handleSearch}
              />
              <div className="flex gap-4 justify-end w-full">
                <Link
                  to={"/bookings/new-facility-booking"}
                  className="bg-black w-20 rounded-lg flex font-semibold items-center gap-2 text-white p-2 my-5"
                >
                  <IoAddCircleOutline size={20} />
                  Book
                </Link>
                <button
                  onClick={() => showModal(true)}
                  className="bg-black rounded-lg flex font-semibold items-center gap-2 text-white p-2 my-5"
                >
                  <BiExport size={20} />
                  Export
                </button>
              </div>
            </div>
            <DataTable
              columns={column}
              data={filteredData}
              customStyles={customStyle}
              fixedHeader
          fixedHeaderScrollHeight="500px"
          pagination
          selectableRowsHighlight
          highlightOnHover
          omitColumn={column}
            />
            {modal && <ExportBookingModal onclose={() => showModal(false)} />}
          </div>
        )}
        {page === "setup" && (
          <div>
            <SetupBookingFacility />
          </div>
        )}
      </div>
    </section>
  );
};

export default Booking;
