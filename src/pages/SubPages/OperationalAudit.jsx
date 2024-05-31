import React, { useState } from "react";
import ScheduledAudit from "./AuditSubPages/ScheduledAudit";
import ConductedAudit from "./AuditSubPages/ConductedAudit";
import AuditChecklist from "./AuditSubPages/AuditChecklist";

const OperationalAudit = () => {
  const [page, setPage] = useState("scheduled");
 
  return (
    <div className=" w-full my-2 flex  overflow-hidden flex-col">
      <div className="flex justify-center w-full">
        <div className="sm:flex grid grid-cols-2 sm:flex-row gap-5 font-medium p-1 sm:rounded-full rounded-md bg-gray-100">
          <h2
            className={`p-1 ${
              page === "scheduled" &&
              "bg-white text-blue-500 shadow-custom-all-sides"
            } rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
            onClick={() => setPage("scheduled")}
          >
            Scheduled
          </h2>
          <h2
            className={`p-1 ${
              page === "conducted" &&
              "bg-white text-blue-500 shadow-custom-all-sides"
            } rounded-full px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("conducted")}
          >
            Conducted
          </h2>
          <h2
            className={`p-1 ${
              page === "checklists" &&
              "bg-white text-blue-500 shadow-custom-all-sides"
            } rounded-full px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("checklists")}
          >
            Checklists
          </h2>
        </div>
      </div>
      <div>
        {page === "scheduled" && <ScheduledAudit/> }
        {page === "conducted" && <ConductedAudit/> }
        {page === "checklists" && <AuditChecklist/> }
      </div>
    </div>
  );
};

export default OperationalAudit;
