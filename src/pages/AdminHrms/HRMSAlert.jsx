import React, { useState } from "react";
import AdminHRMS from "./AdminHrms.jsx";
import AlertTasks from "./AlertTasks.jsx";
import PendingRequest from "./PendingRequest.jsx";
import ProcessAlert from "./ProcessAlert.jsx";
import SetupIssues from "./SetupIssues.jsx";

import LeaveSetting from "./LeaveSetting.jsx";



const HRMSAlert = () => {
  const [page, setPage] = useState("Pending Requests");
  return (
    <div className="visitors-page">
      <section className="flex">
       <AdminHRMS/>
        <div className=" w-full ml-20 flex mx-3 flex-col overflow-hidden">
          <div className="flex md:justify-center  my-2">
            <div className="md:flex md:flex-row flex-col gap-5 text-lg font-semibold p-1 md:rounded-full md:w-auto w-full rounded-sm bg-gray-400">
              <h2
                className={`p-1 ${
                  page === "Pending Requests" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("Pending Requests")}
              >
                Pending Requests
              </h2>
              <h2
                className={`p-1 ${
                  page === "Setup Issues" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("Setup Issues")}
              >
               Setup Issues
              </h2>
              <h2
                className={`p-1 ${
                  page === "Process Alerts" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("Process Alerts")}
              >
                Process Alerts
              </h2>
              <h2
                className={`p-1 ${
                  page === "Tasks" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("Tasks")}
              >
                Tasks
              </h2>

            </div>
          </div>
          {page === "Pending Requests" && (
            <div>
              <PendingRequest/>
            </div>
          )}
          {page === "Setup Issues" && (
            <div>
              <SetupIssues/>
              {/* <LeaveSetting/> */}
            </div>
          )}
          {page === "Process Alerts" && (
            <div>
              <ProcessAlert/>
            </div>
          )}
          {page === "Tasks" && (
            <div>
              <AlertTasks/>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default HRMSAlert;