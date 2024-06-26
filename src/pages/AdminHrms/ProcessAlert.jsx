import React, { useState } from "react";
import Table from "../../components/table/Table";

const ProcessAlert = () => {
  const [page, setPage] = useState("OverDue");
  const [subPage, setSubPage] = useState("attendance");
  return (
    <div className=" w-full my-2 flex  overflow-hidden flex-col">
      <div className="flex w-full">
        <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full">
          <h2
            className={`p-1 ${
              page === "OverDue" &&
              `bg-white font-medium text-blue-500 shadow-custom-all-sides`
            } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
            onClick={() => setPage("OverDue")}
          >
            Overdue
          </h2>
          <h2
            className={`p-1 ${
              page === "Upcoming" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("Upcoming")}
          >
            Upcoming
          </h2>
         
        </div>
      </div>
        <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full">
          <h2
            className={`p-1 ${
              subPage === "attendance" &&
              `bg-white font-medium text-blue-500 shadow-custom-all-sides`
            } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
            onClick={() => setSubPage("attendance")}
          >
            Attendance
          </h2>
          <h2
            className={`p-1 ${
              subPage === "payroll" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setSubPage("payroll")}
          >
            Payroll
          </h2>
          <h2
            className={`p-1 ${
              subPage === "leave" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setSubPage("leave")}
          >
            Leave
          </h2>
         
        </div>
      <div>
        {subPage === "attendance" && (
        <div><Table/></div>
        )}
        {subPage === "payroll" && (
        <div><Table/></div>
        )}
        {subPage === "leave" && (
        <div><Table/></div>
        )}
      
      </div>
    </div>
  );
};

export default ProcessAlert;