import React, { useState } from "react";

import EmployeeAddVisitor from "./EmployeeAddVisitor";
import EmployeeDeliverySupportStaff from "./EmployeeSubPages/EmployeeDeliverySupportStaff";
import EmployeeCab from "./EmployeeCab";
import Navbar from "../../components/Navbar";

const EmployeeVisitors = () => {
  const [page, setPage] = useState("visitor");
  return (
    <div className="visitors-page">
      <section className="flex">
        <Navbar />
        <div className=" w-full flex mx-3 flex-col overflow-hidden">
          <div className="flex md:justify-center  my-2">
            <div className="md:flex md:flex-row flex-col gap-5 text-lg font-semibold p-1 md:rounded-full md:w-auto w-full rounded-sm bg-gray-400">
              <h2
                className={`p-1 ${
                  page === "visitor" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("visitor")}
              >
                Visitor
              </h2>
              <h2
                className={`p-1 ${
                  page === "Delivery & Support Staff" &&
                  "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("Delivery & Support Staff")}
              >
                Delivery & Support Staff
              </h2>
              <h2
                className={`p-1 ${
                  page === "cab" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("cab")}
              >
                Cab
              </h2>
            </div>
          </div>
          {page === "visitor" && (
            <div>
              <EmployeeAddVisitor />
            </div>
          )}
          {page === "Delivery & Support Staff" && (
            <div>
              <EmployeeDeliverySupportStaff />
            </div>
          )}
          {page === "cab" && (
            <div>
              <EmployeeCab />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EmployeeVisitors;
