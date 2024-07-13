import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
//import Navbar from "../../../components/Navbar";
import DataTable from "react-data-table-component";
import { BsEye } from "react-icons/bs";
import { useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Table from "../../components/table/Table";
import Navbar from "../../components/Navbar";
import Passes from "../Passes";

const Patrolling = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const themeColor = useSelector((state) => state.theme.color);
  const [modalVisible, setModalVisible] = useState(false);
  const [interval, setInterval] = useState("hrs");
  const hours = Array.from({ length: 24 }, (_, i) => (i < 10 ? `0${i}` : `${i}`));
  const [selectedHours, setSelectedHours] = useState([]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/patrolling-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/admin/edit-patrolling/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Location",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Scheduled Time",
      selector: (row) => row.Scheduled_Time,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.Created_On,
      sortable: true,
    },

    {
      name: "Start Date",
      selector: (row) => row.Start_Date,
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => row.End_Date,
      sortable: true,
    },

    {
      name: "Active/Inactive",
      selector: (row) => row.ActiveInactive,
      sortable: true,
    },

    {
      name: "Qr Code",
      selector: (row) => row.Qr_Code,
      sortable: true,
    },

    // {
    //   name: "Cancellation",
    //   selector: (row) =>
    //     row.status === "Upcoming" && (
    //       <button className="text-red-400 font-medium">Cancel</button>
    //     ),
    //   sortable: true,
    // },
    // {
    //   name: "Approval",
    //   selector: (row) =>
    //     row.status === "Upcoming" && (
    //       <div className="flex justify-center gap-2">
    //         <button className="text-green-400 font-medium hover:bg-green-400 hover:text-white transition-all duration-200 p-1 rounded-full">
    //           <TiTick size={20} />
    //         </button>
    //         <button className="text-red-400 font-medium hover:bg-red-400 hover:text-white transition-all duration-200 p-1 rounded-full">
    //           <IoClose size={20} />
    //         </button>
    //       </div>
    //     ),
    //   sortable: true,
    // },
  ];

  //custom style
  const customStyle = {
    headRow: {
      style: {
        backgroundColor: themeColor,
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
  const data = [
    {
      id: 1,
      Location: "Mumbai",
      Scheduled_Time: "9:10AM",
      Created_On: "30/5/2024",
      Start_Date: "30/5/2024",
      End_Date: "30/5/2024",
      ActiveInactive: "Active",
      Qr_Code: "45",
    },
    {
      id: 2,
      Location: "Mumbai",
      Scheduled_Time: "9:10AM",
      Created_On: "30/5/2024",
      Start_Date: "30/5/2024",
      End_Date: "30/5/2024",
      ActiveInactive: "Active",
      Qr_Code: "45",
    },
    {
      id: 3,
      Location: "Mumbai",
      Scheduled_Time: "9:10AM",
      Created_On: "30/5/2024",
      Start_Date: "30/5/2024",
      End_Date: "30/5/2024",
      ActiveInactive: "Active",
      Qr_Code: "45",
    },
  ];
  const toggleHourSelection = (hour) => {
    setSelectedHours((prevSelectedHours) =>
      prevSelectedHours.includes(hour)
        ? prevSelectedHours.filter((h) => h !== hour)
        : [...prevSelectedHours, hour]
    );
  };

  return (
    <section className="flex">
      <Navbar />
      <div className=" w-full flex mx-3 flex-col overflow-hidden">
        <Passes />
        <div className="flex md:flex-row flex-col gap-5 justify-between mt-10 my-2">
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
                id="upcoming"
                name="status"
                // checked={selectedStatus === "open"}
                checked={
                  selectedStatus === "upcoming" || selectedStatus === "upcoming"
                }
                // onChange={() => handleStatusChange("open")}
              />
              <label htmlFor="open" className="text-sm">
                upcoming
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

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="cancelled"
                name="status"
                checked={selectedStatus === "cancelled"}
                //   onChange={() => handleStatusChange("cancelled")}
              />
              <label htmlFor="completed" className="text-sm">
                Cancelled
              </label>
            </div>
          </div>
          <span className="flex gap-4">
            <div
              onClick={openModal}
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              <PiPlusCircle size={20} />
              Add
            </div>

            {modalVisible && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={closeModal}
              >
                <div
                  className="bg-white  overflow-auto max-h-[80%]  md:w-auto w-96  flex flex-col rounded-md gap-5 hide-scrollbar"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-center items-center my-5 w-full ">
                    <div className="border border-gray-300 rounded-lg p-4 w-full mx-4">
                      <h2
                        style={{ background: themeColor }}
                        className="text-center md:text-xl font-medium p-1 bg-black rounded-full text-white"
                      >
                        Add Patrolling
                      </h2>

                      <div className="grid grid-cols-1 gap-2 my-3">
                        <div className="grid grid-cols-3 gap-5">
                          <div className="flex flex-col">
                            <label htmlFor="building" className="font-semibold">
                              Building :
                            </label>
                            <select
                              name="building"
                              placeholder="Enter Building Name"
                              className="border p-1 rounded-md border-black"
                            >
                              <option value="">Select Building</option>
                              <option value="">East Building</option>
                              <option value="">West Building</option>
                            </select>
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="wing" className="font-semibold">
                              Wing :
                            </label>
                            <select
                              name="wing"
                              placeholder="Enter Wing"
                              className="border p-1 rounded-md border-black"
                            >
                              <option value="">Select Wing</option>
                              <option value="">Wing A</option>
                              <option value="">Wing B</option>
                            </select>
                          </div>
                          {/* <div className="grid grid-cols-2 gap-5"> */}
                          <div className="flex flex-col">
                            <label htmlFor="floor" className="font-medium">
                              Floor :
                            </label>
                            <select
                              name="floor"
                              className="border p-1 rounded-md border-black"
                            >
                              <option value="">Select Floor</option>
                              <option value="">Floor 1</option>
                              <option value="">Floor 2</option>
                              <option value="">Floor 3</option>
                              <option value="">Floor 4</option>
                              <option value="">Floor 5</option>
                            </select>
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="room" className="font-medium">
                              Room :
                            </label>
                            <select
                              name="room"
                              className="border p-1 rounded-md border-black"
                            >
                              <option value="">Select Room</option>
                              <option value="">Room 101</option>
                              <option value="">Room 102</option>
                              <option value="">Room 103</option>
                              <option value="">Room 104</option>
                              <option value="">Room 104</option>
                            </select>
                          </div>
                          {/* </div> */}
                        </div>
                        <h2 className="font-medium border-b border-black">
                          Frequency
                        </h2>
                        <div className="grid grid-cols-2 gap-5">
                          <div className="flex flex-col">
                            <label htmlFor="startTime" className="font-medium">
                              Start Date :
                            </label>
                            <input
                              type="date"
                              name="startTime"
                              className="border p-1 rounded-md border-black"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="endTime" className="font-medium">
                              End Date :
                            </label>
                            <input
                              type="date"
                              name="endTime"
                              className="border p-1 rounded-md border-black"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="startTime" className="font-medium">
                              Start Time :
                            </label>
                            <input
                              type="time"
                              name="startTime"
                              className="border p-1 rounded-md border-black"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="endTime" className="font-medium">
                              End Time :
                            </label>
                            <input
                              type="time"
                              name="endTime"
                              className="border p-1 rounded-md border-black"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 my-2">
                        <p
                          onClick={() => setInterval("hrs")}
                          className={`font-medium cursor-pointer transition-all duration-300 ${
                            interval === "hrs" &&
                            "bg-black text-white shadow-custom-all-sides rounded-full p-1 px-2"
                          }`}
                        >
                          Time Interval(hrs)
                        </p>
                        <p
                          onClick={() => setInterval("specific")}
                          className={`font-medium cursor-pointer transition-all duration-300 ${
                            interval === "specific" &&
                            "bg-black text-white shadow-custom-all-sides rounded-full p-1 px-2"
                          }`}
                        >
                          Specific Time
                        </p>
                      </div>
                      {interval === "hrs" && (
                        <div>
                          <input
                            type="text"
                            name="endTime"
                            className="border p-1 rounded-md border-black my-1"
                            placeholder="Enter Interval Hour(s) "
                          />
                        </div>
                      )}
                      {interval === "specific" && (
                       <div className="grid grid-cols-6 gap-2 bg-gray-100 p-4 rounded">
                       {hours.map((hour) => (
                         <p
                           key={hour}
                           className={`p-2 rounded cursor-pointer ${
                            selectedHours.includes(hour) ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black'
                          }`}
                           onClick={() => toggleHourSelection(hour)}
                         >
                           {hour}
                         </p>
                       ))}
                     </div>
                      )}
                      <div className="flex gap-5 justify-center items-center mt-4">
                        <button
                          
                          className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-semibold py-1 px-4 rounded transition-all duration-300"
                        >
                          Submit
                        </button>
                        <button
                          type="submit"
                          onClick={closeModal}
                          className=" bg-red-400 font-semibold text-white py-1 px-4 rounded transition-all duration-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              Import
            </button>
            <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              Filter
            </button>
            <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              History
            </button>
            <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              All
            </button>
            <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              In
            </button>
            <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              Out
            </button> */}
          </span>
        </div>
        <Table columns={columns} data={data} />
      </div>
    </section>
  );
};

export default Patrolling;
