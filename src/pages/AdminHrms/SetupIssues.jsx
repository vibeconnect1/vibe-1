import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImFileText2 } from "react-icons/im"; // Import the necessary icons
import AdminHRMS from "./AdminHrms";

const SetupIssues = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* <AdminHRMS /> */}
      <div className="w-60 h-full bg-white shadow-lg p-4 mt-9">
        <ul className="space-y-4">
          <li className="font-bold text-lg">Details List</li>
          <li>
            <NavLink
              to="/general-settings"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                }`
              }
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                General Settings
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                General Settings
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leave-categories"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                }`
              }
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Leave Categories
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Leave Categories
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/templates"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                }`
              }
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Templates
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Templates
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/templates-assignments"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                }`
              }
            >
              <div>
                {React.createElement(ImFileText2, { size: "20" })}
              </div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Template Assignments
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Template Assignments
              </h2>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SetupIssues;