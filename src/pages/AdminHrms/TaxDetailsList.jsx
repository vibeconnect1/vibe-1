import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImFileText2 } from "react-icons/im"; // Import the necessary icons
import AdminHRMS from "./AdminHrms";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TaxDetailsList = () => {
  const [open, setOpen] = useState(true);
  const themeColor = useSelector((state) => state.theme.color);

  return (
    <div className="flex">
      <AdminHRMS />
      <div className="w-64 h-full bg-white shadow-custom-all-sides ml-2 rounded-md p-4 mt-9">
        <div className="mb-2">
          <Link
            to={"/hrms/employee-directory-Personal"}
            style={{ background: themeColor }}
            className="bg-black mr-1 h-10 mt-1  w-24 text-white py-1 px-4 rounded-md"
          >
            Back to Profile
          </Link>
        </div>
        <ul className="space-y-4">
          <li className="font-bold text-lg">Sections</li>
          <li>
            <NavLink
              to="/admin/tax-edit/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-400 rounded-md"
                }`
              }
            >
              <div>{React.createElement(ImFileText2, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                80C Deductions
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                80C Deductions
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Other-Exemptions"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-400 rounded-md"
                }`
              }
            >
              <div>{React.createElement(ImFileText2, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Other Exemptions/Deductions
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Other Exemptions/Deductions
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Rent-Information"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-400 rounded-md"
                }`
              }
            >
              <div>{React.createElement(ImFileText2, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Rent Information
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Rent Information
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Prequisites Information"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-400 rounded-md"
                }`
              }
            >
              <div>{React.createElement(ImFileText2, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Prequisites Information
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Prequisites Information
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Other-Income-Info"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-400 rounded-md"
                }`
              }
            >
              <div>{React.createElement(ImFileText2, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Other Income Info
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Other Income Info
              </h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Housing-Loan-Info"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white bg-blue-500 flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                    : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-blue-400 rounded-md"
                }`
              }
            >
              <div>{React.createElement(ImFileText2, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Housing Loan Info
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Housing Loan Info
              </h2>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaxDetailsList;
