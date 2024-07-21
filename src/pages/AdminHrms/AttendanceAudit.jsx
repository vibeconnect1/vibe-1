import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../components/table/Table";
import AdminHRMS from "./AdminHrms";
import FileInputBox from "../../containers/Inputs/FileInputBox";

const AttendanceAudit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attendanceCycle, setAttendanceCycle] = useState("June-2024");
  const [dateRange, setDateRange] = useState("01-06-2024 - 30-06-2024");
  const [dayStatus, setDayStatus] = useState("");
  const [totalHoursWorked, setTotalHoursWorked] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [lateEarlyMarkStatus, setLateEarlyMarkStatus] = useState("");
  const [shift, setShift] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [attendanceTemplate, setAttendanceTemplate] = useState("");
  const [employeeDepartment, setEmployeeDepartment] = useState("");
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);
  const [showImportModal, setshowImportModal] = useState(false);

  const columns = [
    { name: "Employee Name", selector: (row) => row.Location, sortable: true },
    { name: "Date", selector: (row) => row.Label, sortable: true },
    { name: "Hours Worked", selector: (row) => row.City, sortable: true },
    { name: "Check In", selector: (row) => row.State, sortable: true },
    { name: "Check Out", selector: (row) => row.Country, sortable: true },
    { name: "Shift Name", selector: (row) => row.Leave_Days, sortable: true },
    { name: "Shift Timing", selector: (row) => row.Comment, sortable: true },
    { name: "Status", selector: (row) => row.status, sortable: true },
    { name: "Late Mark", selector: (row) => row.late, sortable: true },
    { name: "Early Mark", selector: (row) => row.early, sortable: true },
  ];

  const data = [
    {
      Label: "2/2/2024",
      Location: "Mittu",
      City: "Mumbai",
      State: "Maharashtra",
      Country: "India",
      Leave_Days:"Night",
      Comment:"6PM - 2PM",
      status:"pending",
    },
  ];

  const handleFilterClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    console.log("Attendance Cycle:", attendanceCycle);
    console.log("Date Range:", dateRange);
    console.log("Day Status:", dayStatus);
    console.log("Total Hours Worked:", totalHoursWorked);
    console.log("Check In Time:", checkInTime);
    console.log("Check Out Time:", checkOutTime);
    console.log("Late and Early Mark Status:", lateEarlyMarkStatus);
    console.log("Shift:", shift);
    console.log("Work Location:", workLocation);
    console.log("Attendance Template:", attendanceTemplate);
    console.log("Employee Department:", employeeDepartment);
    setIsModalOpen(false);
  };

  return (
    <section className="flex ml-20">
      <AdminHRMS />
      <div className="w-full flex m-3 flex-col overflow-hidden">
        <div className="flex justify-end gap-2 my-5">
          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
          />
          <button
            onClick={handleFilterClick}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Filter
          </button>
          <button  onClick={() => setShowActionsDropdown(!showActionsDropdown)} className="px-4 py-2 bg-blue-600 text-white rounded-md">Actions</button>

        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      {showActionsDropdown && (
            <div className="absolute top-35 right-2 mt-20 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => setshowImportModal(!showImportModal)}
              >
                Import
              </button>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                // onClick={() => setshowRejectModal(!showRejectModal)}
              >
               Export
              </button>
             
            </div>
          )}
             {showImportModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            <h2 className="text-lg font-bold mb-4">Upload Attendance Audit Changes</h2>
           
            <div className="grid md:grid-cols-1 gap-5 mt-5">
              <div className="grid gap-2 items-center w-full">
              <p>Make necessary changes in the imported file and upload *</p>      
              <FileInputBox/>
                    {/* <textarea type="text" name="regularizationReason"  className="border border-gray-400 p-2 rounded-md"/> */}
              </div>
             
            </div>
            <p className="font-bold mt-2 ">Format For Upload:</p>
            <p>a) Select all the cells instructions when uploading check in times</p>
            <p>b) Right click and select the format cells button</p>
            <p>c) Choose the "Text" format</p>
            <p>d) Enter the check-in / check-out times in AM/PM format: E.g. 8:05 AM or 12:30 PM</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setshowImportModal(false)}
            >
              Close
            </button>
            <button
              className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setshowImportModal(false)}
            >
              Upload
            </button>
          </div>
        </div>
      )}
      {isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center overflow-y-auto justify-center bg-gray-500 bg-opacity-50">
         <div class=" h-2/3 bg-white p-8 w-96 rounded-lg shadow-lg overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Smart Filters</h2>

            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Step 1: Date Selection</h3>
              <div className="mb-2">
                <label className="block mb-1">Attendance Cycle</label>
                <input
                  type="month"
                  value="2024-07"
                  onChange={(e) => setAttendanceCycle(e.target.value)}
                  className="border border-gray-400 rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1">Date Range</label>
                <input
                  type="text"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="border border-gray-400 rounded-lg p-2 w-full"
                />
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Step 2: Attendance Filter</h3>
              <div className="mb-2">
                <label className="block mb-1">Day Status</label>
               <select  className="border border-gray-400 rounded-lg p-2 w-full" name="" id=""><option value="">Present</option>
               <option value="">Absent</option></select>
              </div>
              <div className="mb-2">
                <label className="block mb-1">Total Hours Worked</label>
                <select  className="border border-gray-400 rounded-lg p-2 w-full" name="" id=""><option value="">Greater than</option>
               <option value="">Less than</option>
               <option value="">Between</option></select>
              </div>
              <div className="mb-2">
                <label className="block mb-1">Check in Time</label>
                <select  className="border border-gray-400 rounded-lg p-2 w-full" name="" id=""><option value="">Greater than</option>
               <option value="">Less than</option>
               <option value="">Between</option></select>
              </div>
              <div className="mb-2">
                <label className="block mb-1">Check out Time</label>
                <select  className="border border-gray-400 rounded-lg p-2 w-full" name="" id=""><option value="">Greater than</option>
               <option value="">Less than</option>
               <option value="">Between</option></select>
              </div>
              <div className="mb-2">
                <label className="block mb-1">Late and Early Mark Status</label>
                <select  className="border border-gray-400 rounded-lg p-2 w-full" name="" id=""><option value="">Early Mark Applicable</option>
               <option value="">Late Mark Applicable</option>
               </select>
              </div>
              <div className="mb-2">
                <label className="block mb-1">Shift</label>
                <select  className="border border-gray-400 rounded-lg p-2 w-full" name="" id=""><option value="">6:00AM-7:00PM</option>
               <option value="">10:00AM-7:00PM</option>
               </select>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Step 3: Employee Filter</h3>
              <div className="mb-2">
                <label className="block mb-1">Work Location</label>
                <select  className="border border-gray-400 rounded-lg p-2 w-full" name="" id=""><option value="">Mumbai</option>
               <option value="">Pune</option>
               </select>
              </div>
              <div className="mb-2">
                <label className="block mb-1">Attendance Template</label>
                <select  className="border border-gray-400 rounded-lg p-2 w-full" name="" id=""><option value="">Attendance Policy</option>
               <option value="">Work from Home</option>
               </select>
              </div>
              <div className="mb-2">
                <label className="block mb-1">Employee Department</label>
                <select  className="border border-gray-400 rounded-lg p-2 w-full" name="" id=""><option value="">Content writer</option>
               <option value="">Frontend Developer</option>
               </select>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleModalClose}
                className="border-2 border-gray-400 rounded-lg p-2 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white rounded-lg p-2"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AttendanceAudit;
