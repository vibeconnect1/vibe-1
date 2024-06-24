import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";
import { FaBuilding } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { getItemInLocalStorage } from "../../utils/localStorage";
import { MdOutlineDashboard, MdExpandMore, MdExpandLess } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { useSelector } from "react-redux";
import { PiSignOutBold } from "react-icons/pi";
import {  RiFileListLine } from "react-icons/ri";
import { FaRegCalendarTimes } from 'react-icons/fa';
import { FaMoneyBillAlt } from 'react-icons/fa';

import {
  
  IoPeopleOutline,
  IoCashOutline,
 
} from "react-icons/io5";
// import { PiSignOutBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCog,FaRegCalendarAlt } from "react-icons/fa";
import {
 
  FaFileInvoice,
  FaFileWord,
  FaRegFile,
  
  FaRegFilePowerpoint,
 
} from "react-icons/fa";
import { ImFileText2 } from "react-icons/im";
import { RiSettings3Line } from "react-icons/ri";
const AdminHRMS = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [isOrgOpen, setIsOrgOpen] = useState(false);
  const [isEmpOpen, setIsEmpOpen] = useState(false);
  const [isAttOpen, setIsAttOpen] = useState(false);
  const [isLeaveOpen, setIsLeaveOpen] = useState(false);
  const [ispayOpen, setIspayOpen] = useState(false);
  const navigate = useNavigate();
  const themeColor = useSelector((state) => state.theme.color);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  useEffect(() => {
    const userType = getItemInLocalStorage("USERTYPE");
    setUser(userType);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };
  const toggleOrgMenu = () => {
    setIsOrgOpen(!isOrgOpen);
  };
  const toggleEmpMenu = () => {
    setIsEmpOpen(!isEmpOpen);
  };
  const toggleAttMenu = () => {
    setIsAttOpen(!isAttOpen);
  };
  const toggleLeaveMenu = () => {
    setIsLeaveOpen(!isLeaveOpen);
  };
  const togglepayMenu = () => {
    setIspayOpen(!ispayOpen);
  };
  
  return (
    <section className="flex gap-6 fixed top-0 left-0 bottom-0 h-screen z-30">
      <div
        style={{
          background: themeColor,
        }}
        className={`p-[8px]  max-h-screen ${
          open ? "w-full md:w-72" : "w-20"
        } duration-500 text-gray-100 px-4 shadow-2xl overflow-y-auto h-screen custom-scrollbar left-0 z-30`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`py-3 flex ${open ? "justify-end" : "justify-center"}`}>
          <HiMenuAlt3
            size={26}
            className="cursor-pointer "
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col h-full gap-4 mb-5 relative">
          
            <>
              <NavLink
                to="/admin/hrms/dashboard"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                  }`
                }
              >
                <div>
                  {React.createElement(MdOutlineDashboard, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Dashboard
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Dashboard
                </h2>
              </NavLink>
              <NavLink
                to="/admin/hrms/alerts"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                  }`
                }
              >
                <div>
                  {React.createElement(FaRegFile, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Alerts
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Alerts
                </h2>
              </NavLink>
              <div>
                <div
                  onClick={toggleOrgMenu}
                  className="cursor-pointer flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>
                    {React.createElement(FaBuilding, { size: "20" })}
                  </div>
                  <h2
                    className={`whitespace-pre duration-300 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden transition-all duration-300"
                    }`}
                  >
                    Organization
                  </h2>
                  <div className="ml-auto">
                    {isOrgOpen
                      ? React.createElement(MdExpandLess, { size: "20" })
                      : React.createElement(MdExpandMore, { size: "20" })}
                  </div>
                </div>
                {isOrgOpen && (
                  <div className="ml-4">
                    <NavLink
                      to="/admin/company-profile/basic-information"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoSettingsOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-100 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Organization Setting
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-100 group-hover:w-fit`}
                      >
                        Organization Setting
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/admin/manage-admin"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>{React.createElement(FaUserCog, { size: "20" })}</div>
                      <h2
                        className={`whitespace-pre duration-200 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        User Setting
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}
                      >
                        User Setting
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/admin/hrms/document-letter"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
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
                        Document + Letter
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Document + Letter
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/admin/onboarding-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(RiSettings3Line, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        HR Workflow Setting
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        HR Workflow Setting
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/admin/hrms/investment-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoCashOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Investment Setting
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Investment Setting
                      </h2>
                    </NavLink>
                  </div>
                )}
              </div>
              {/* <NavLink
                to="/hrms/dashboard"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                  }`
                }
              >
                <div>
                  {React.createElement(FaUser, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Employees
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Employees
                </h2>
              </NavLink> */}
                <div>
                <div
                  onClick={toggleEmpMenu}
                  className="cursor-pointer flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>
                    {React.createElement(IoPeopleOutline, { size: "20" })}
                  </div>
                  <h2
                    className={`whitespace-pre duration-300 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Employees
                  </h2>
                  <div className="ml-auto">
                    {isEmpOpen
                      ? React.createElement(MdExpandLess, { size: "20" })
                      : React.createElement(MdExpandMore, { size: "20" })}
                  </div>
                </div>
                {isEmpOpen && (
                  <div className="ml-4">
                    <NavLink
                      to="/hrms/employee-directory"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
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
                        Employee Directory
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Employee Directory
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/organization-tree-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(RiSettings3Line, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Organization Tree Setting
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Organization Tree Setting
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/employee-transaction"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoCashOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Employee Transaction
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Employee Transaction
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/investment"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoCashOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Investment
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Investment
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/onboarding"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(FaUserCog, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Onboarding
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Onboarding
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/pending-contract-renewal"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(RiFileListLine, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Pending Contract Renewal
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Pending Contract Renewal
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/separation-request"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(RiFileListLine, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Separation Request
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Separation Request
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/generated-letter"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
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
                        Generated Letter
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Generated Letter
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/calendar"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(FaRegCalendarAlt, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Calendar
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Calendar
                      </h2>
                    </NavLink>
                  </div>
                )}
              </div>
              {/* <NavLink
                to="/hrms/attendance"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                  }`
                }
              >
                <div>
                  {React.createElement(FaCalendarCheck, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Attendance
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Attendance
                </h2>
              </NavLink> */}

               <div>
                <div
                  onClick={toggleAttMenu}
                  className="cursor-pointer flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>
                    {React.createElement(HiCheck, { size: "20" })}
                  </div>
                  <h2
                    className={`whitespace-pre duration-300 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Attendance
                  </h2>
                  <div className="ml-auto">
                    {isAttOpen
                      ? React.createElement(MdExpandLess, { size: "20" })
                      : React.createElement(MdExpandMore, { size: "20" })}
                  </div>
                </div>
                {isAttOpen && (
                  <div className="ml-4">
                    <NavLink
                      to="/hrms/organization-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoSettingsOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Attendance Records
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Attendance Records
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/organization-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoSettingsOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                       Regularization Requests
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Regularization Requests
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/user-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>{React.createElement(FaUserCog, { size: "20" })}</div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Attendance Audit
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                       Attendance Audit
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/document-letter"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
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
                       Attendance Process
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Attendance Process
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/hr-workflow-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(RiSettings3Line, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                       Setting
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                       Setting
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/investment-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoCashOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Device Registration Request
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Device Registration Request
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/investment-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoCashOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Attendance Validation
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Attendance Validation
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/investment-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoCashOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Attendance Log
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Attendance Log
                      </h2>
                    </NavLink>
                  </div>
                )}
              </div>



              {/* <NavLink
                to="/hrms/attendance"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                  }`
                }
              >
                <div>
                  {React.createElement(FaFileWord, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Leave
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Leave
                </h2>
              </NavLink> */}

                       <div>
                <div
                  onClick={toggleLeaveMenu}
                  className="cursor-pointer flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>
                    {React.createElement(FaRegCalendarTimes, { size: "20" })}
                  </div>
                  <h2
                    className={`whitespace-pre duration-300 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Leave
                  </h2>
                  <div className="ml-auto">
                    {isLeaveOpen
                      ? React.createElement(MdExpandLess, { size: "20" })
                      : React.createElement(MdExpandMore, { size: "20" })}
                  </div>
                </div>
                {isLeaveOpen && (
                  <div className="ml-4">
                    <NavLink
                      to="/admin/hrms/leave-application"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoSettingsOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Leave Application
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Leave Application
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/admin/hrms/leave-balance"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoSettingsOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                      Leave Balance
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                         Leave Balance
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/admin/hrms/rollover"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>{React.createElement(FaUserCog, { size: "20" })}</div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Rollover
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                       Rollover
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/general-settings"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
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
                       Setting
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Setting
                      </h2>
                    </NavLink>
                    
                   
                   
                  </div>
                )}
              </div>




              {/* <NavLink
                to="/hrms/attendance"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                  }`
                }
              >
                <div>
                  {React.createElement(FaRegFilePowerpoint, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Payroll
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Payroll
                </h2>
              </NavLink> */}

             <div>
                <div
                  onClick={togglepayMenu}
                  className="cursor-pointer flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>
                    {React.createElement(FaMoneyBillAlt, { size: "20" })}
                  </div>
                  <h2
                    className={`whitespace-pre duration-300 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Payroll
                  </h2>
                  <div className="ml-auto">
                    {ispayOpen
                      ? React.createElement(MdExpandLess, { size: "20" })
                      : React.createElement(MdExpandMore, { size: "20" })}
                  </div>
                </div>
                {ispayOpen && (
                  <div className="ml-4">
                    <NavLink
                      to="/hrms/organization-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoSettingsOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Run Payroll
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Run Payroll
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/organization-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>
                        {React.createElement(IoSettingsOutline, { size: "20" })}
                      </div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                      Payslip & Form 16s
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Payslip & Form 16s
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/user-setting"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                            : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                        }`
                      }
                    >
                      <div>{React.createElement(FaUserCog, { size: "20" })}</div>
                      <h2
                        className={`whitespace-pre duration-300 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        Loan Application
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                      Loan Application
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/document-letter"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
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
                       Payroll Setting
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        Payroll Setting
                      </h2>
                    </NavLink>
                    <NavLink
                      to="/hrms/document-letter"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
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
                       CTC Template
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                      >
                        CTC Template
                      </h2>
                    </NavLink>
                    
                   
                   
                  </div>
                )}
              </div>




              <NavLink
                to="/hrms/attendance"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black bg-white flex p-2 gap-3.5 rounded-md group items-center text-sm font-medium"
                      : "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                  }`
                }
              >
                <div>
                  {React.createElement(FaFileInvoice, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Reports
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Reports
                </h2>
              </NavLink>
             
              
              
            </>
         
        </div>
        
      </div>
    </section>
  );
};

export default AdminHRMS;