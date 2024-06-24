import React, { useState } from "react";

const ProcessAlert = () => {
  const [page, setPage] = useState("OverDue");
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
            OverDue
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
          <h2
            className={`p-1 ${
              page === "Archived" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("Archived")}
          >
           Archived
          </h2>
          {/* <h2
            className={`p-1 ${
              page === "Permit Hazard Category" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("Permit Hazard Category")}
          >
            Permit Hazard Category
          </h2>
          <h2
            className={`p-1 ${
              page === "Permit Risk" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("Permit Risk")}
          >
            Permit Risk
          </h2>
          <h2
            className={`p-1 ${
              page === "Permit Safety Equipment" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("Permit Safety Equipment")}
          >
            Permit Safety Equipment
          </h2> */}
        </div>
      </div>
      <div>
        {page === "Permit Type" && (
          <div>
            {/* <PermitTypeTable /> */}
          </div>
        )}
        {page === "Permit Activity" && <p>g</p>}
        {page === "Permit Sub Activity" && <p>g</p>}
        {page === "Permit Hazard Category" && <p>g</p>}
        {page === "Permit Risk" && <p>g</p>}
      </div>
    </div>
  );
};

export default ProcessAlert;