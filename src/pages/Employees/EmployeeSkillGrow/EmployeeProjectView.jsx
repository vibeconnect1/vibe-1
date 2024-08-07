import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import EmployeeProjectOverview from "./EmployeeProjectOverview";
import EmployeeProjectTask from "./EmployeeProjectTask";
import EmployeeBudget from "./EmployeeBudget";
import EmployeeFiles from "./EmployeeFiles";
import profile1 from "/profile1.jpg";
import profile2 from "/profile2.jpg";
import profile3 from "/profile3.jpg";
import profile4 from "/profile4.jpg";
import EmployeeTeam from "./EmployeeTeam";
import EmployeeProjectSummary from "./EmployeeProjectSummary";
function EmployeeProjectView() {
  const [projectDetails, setProjectDetails] = useState("Overview");
  const handleToggle = (section) => {
    setProjectDetails(projectDetails === section ? null : section);
  };

  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex flex-col overflow-hidden">
        <div className="flex justify-between mx-5 mt-5">
          <div>
            <h2 className="text-2xl font-semibold">Vibe Project Details</h2>
          </div>
          <div className="relative flex items-center pr-32">
            <img
              src={profile1}
              className="h-12 w-12 rounded-full border-4 border-white"
              alt="Profile 1"
            />
            <img
              src={profile2}
              className="h-12 w-12 rounded-full absolute left-6 border-4 border-white"
              alt="Profile 2"
            />
            <img
              src={profile3}
              className="h-12 w-12 rounded-full absolute left-12 border-4 border-white"
              alt="Profile 3"
            />
            <img
              src={profile4}
              className="h-12 w-12 rounded-full absolute left-16 border-4 border-white"
              alt="Profile 4"
            />
            <div
              className="h-12 w-12 rounded-full absolute left-20 border-2 flex items-center justify-center bg-gray-100 border-white"
              alt="Profile 4"
            >
              5+
            </div>
            <div
              className="h-10 w-10 rounded-full absolute left-32 border-2 flex items-center justify-center bg-white border-gray-300 border-dashed"
              alt="Profile 4"
            >
              +
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 mt-3 mx-5 rounded-md">
          <div
            className={`p-3 text-slate-800 cursor-pointer ${
              projectDetails === "Overview"
                ? "text-violet-700 border-b border-violet-700"
                : ""
            }`}
            onClick={() => handleToggle("Overview")}
          >
            Overview
          </div>
          <div
            className={` p-3 text-center cursor-pointer ${
              projectDetails === "task"
                ? "text-violet-700 border-b border-violet-700"
                : ""
            }`}
            onClick={() => handleToggle("task")}
          >
            Task
          </div>
          <div
            className={` p-3 text-center cursor-pointer  ${
              projectDetails === "budget"
                ? "text-violet-700 border-b border-violet-700"
                : ""
            }`}
            onClick={() => handleToggle("budget")}
          >
            Budget
          </div>
          <div
            className={` p-3 text-center cursor-pointer ${
              projectDetails === "files"
                ? "text-violet-700 border-b border-violet-700"
                : ""
            }`}
            onClick={() => handleToggle("files")}
          >
            Files
          </div>
          <div
            className={` p-3 text-center cursor-pointer ${
              projectDetails === "team"
                ? "text-violet-700 border-b border-violet-700"
                : ""
            }`}
            onClick={() => handleToggle("team")}
          >
            Team
          </div>
          <div
            className={` p-3 text-center cursor-pointer ${
              projectDetails === "summary"
                ? "text-violet-700 border-b border-violet-700"
                : ""
            }`}
            onClick={() => handleToggle("summary")}
          >
            Summary
          </div>
        </div>
        <div className="border-t border-gray-300 mb-5 mx-5"></div>
        {projectDetails === "Overview" && (
          <div>
            <EmployeeProjectOverview />
          </div>
        )}
        {projectDetails === "task" && (
          <div>
            <EmployeeProjectTask />
          </div>
        )}
        {projectDetails === "budget" && (
          <div>
            <EmployeeBudget />
          </div>
        )}
        {projectDetails === "files" && (
          <div>
            <EmployeeFiles />
          </div>
        )}
        {projectDetails === "team" && (
          <div>
            <EmployeeTeam />
          </div>
        )}
        {projectDetails === "summary" && (
          <div>
            <EmployeeProjectSummary />
          </div>
        )}
      </div>
    </section>
  );
}

export default EmployeeProjectView