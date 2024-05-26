import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useNavigate, NavLink } from "react-router-dom";
import { menus } from "../utils/menus";
import { PiSignOutBold } from "react-icons/pi";
import { getItemInLocalStorage } from "../utils/localStorage";
import { useSelector } from "react-redux";
import {
  BsBroadcast,
  BsBuilding,
  BsFileRuled,
  BsMailboxFlag,
  BsTicketPerforated,
} from "react-icons/bs";
import {
  MdFastfood,
  MdManageAccounts,
  MdOutlineDashboard,
  MdOutlinePolicy,
} from "react-icons/md";
import { HiMiniTicket, HiMiniUser } from "react-icons/hi2";
import { RiSettings4Line } from "react-icons/ri";
import { LuParkingSquare, LuSettings2 } from "react-icons/lu";
import { IoBusinessOutline, IoCashOutline, IoFitness } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineFieldTime, AiOutlineUser } from "react-icons/ai";
import { TiBusinessCard } from "react-icons/ti";
import { FaBirthdayCake, FaBriefcaseMedical, FaCar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const themeColor = useSelector((state) => state.theme.color);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); // Toggle sidebar visibility on mobile
  };

  const navigate = useNavigate();

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
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("Name");
    localStorage.removeItem("USERTYPE");
    localStorage.removeItem("user");
    localStorage.removeItem("UNITID");
    localStorage.removeItem("Building");
    localStorage.removeItem("categories");
    localStorage.removeItem("SITEID");
    localStorage.removeItem("STATUS");
    localStorage.removeItem("complaint");
    navigate("/login");
    window.location.reload();
  };

  return (
    <section className="flex gap-6 sticky top-0 left-0 bottom-0 h-screen z-10">
      <HiMenuAlt3
        size={26}
        className="cursor-pointer md:hidden fixed top-4 bg-black  rounded-r-full  z-20" // Fixed menu button for mobile
        onClick={toggleSidebar} // Toggle sidebar on click
      />
      <div
        className={`p-[8px] bg-[${themeColor}]
         ${
           themeColor === "red"
             ? "bg-red-500"
             : themeColor === "blue"
             ? "bg-blue-500"
             : themeColor === "green"
             ? "bg-green-500"
             : "bg-black"
         } max-h-screen ${
          open ? "w-full md:w-60" : "w-20"
        } duration-500 text-gray-100 px-4 rounded-r-2xl shadow-2xl overflow-y-auto h-screen custom-scrollbar left-0 ${
          showSidebar ? "block" : "hidden md:block" // Conditionally render sidebar based on showSidebar state and screen size
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`py-3 flex ${open ? "justify-end" : "justify-center"}`}>
          <HiMenuAlt3
            size={26}
            className="cursor-pointer " // Hide menu button on medium and larger screens
            onClick={toggleSidebar} // Toggle sidebar on click
          />
        </div>
        <div className="flex flex-col h-full gap-4 mb-5 relative">
          {/* admin */}
          {user === "pms_admin" && (
            <>
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
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
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Dashboard
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/project-management"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(MdManageAccounts, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Project Management
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Project management
                </h2>
              </NavLink>
              <NavLink
                to={"/assets"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(BsBuilding, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Asset
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Asset
                </h2>
              </NavLink>
              <NavLink
                to={"/services"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(LuSettings2, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Service
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Service
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/birthday"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(FaBirthdayCake, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Birthday
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Birthday
                </h2>
              </NavLink>
              {/* admin tickets */}
              <NavLink
                to={"/tickets"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(BsTicketPerforated, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Admin Tickets
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Admin Tickets
                </h2>
              </NavLink>

              <NavLink
                to={"/mail-room"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(BsMailboxFlag, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Mail Room
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Mail Room
                </h2>
              </NavLink>
              <NavLink
                to={"/business"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(IoBusinessOutline, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Business
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Business
                </h2>
              </NavLink>
              <NavLink
                to={"/materials"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(TbReportAnalytics, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Materials
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Materials
                </h2>
              </NavLink>
              <NavLink
                to={"/bookings"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(AiOutlineFieldTime, { size: "20" })}
                </div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Bookings
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Bookings
                </h2>
              </NavLink>
              <NavLink
                to={"/suppliers"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(AiOutlineUser, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Suppliers
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Suppliers
                </h2>
              </NavLink>
              <NavLink
                to={"/attendance"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(BsFileRuled, { size: "20" })}</div>

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
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Attendance
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/doctor-appointments"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(FaBriefcaseMedical, { size: "20" })}
                </div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Doctor Appointment
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Doctor Appointment
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/insurance"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(MdOutlinePolicy, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Insurance
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Insurance
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/meetings"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(IoIosPeople, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Meeting
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Meeting
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/fitness"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(IoFitness, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Fitness
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Fitness
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/transportation"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(FaCar, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Transportation
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Transportation
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/parking"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(LuParkingSquare, { size: "20" })}
                </div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Parking
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Parking
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/pantry"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(MdFastfood, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Pantry
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Pantry
                </h2>
              </NavLink>
            </>
          )}

          {/* user */}
          {user !== "pms_admin" && (
            <>
              <NavLink
                to={"/mytickets"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(HiMiniTicket, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  My Ticket
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  My Ticket
                </h2>
              </NavLink>
              <NavLink
                to={"/employee-attendance"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(BsFileRuled, { size: "20" })}</div>
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
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Attendance
                </h2>
              </NavLink>
              <NavLink
                to={"/employee/insurance"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(MdOutlinePolicy, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Insurance
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Insurance
                </h2>
              </NavLink>
              <NavLink
                to={"/employee/doc-appointment"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(FaBriefcaseMedical, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Doctor Appointment
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Doctor Appointment
                </h2>
              </NavLink>
              <NavLink
                to={"/employee/fitness"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(IoFitness, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Fitness
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Fitness
                </h2>
              </NavLink>
              <NavLink
                to={"/employee-salary"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(IoCashOutline, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Salary
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Salary
                </h2>
              </NavLink>
              <NavLink
                to={"/employees/transportation"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(FaCar, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Transportation
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Transportation
                </h2>
              </NavLink>
              <NavLink
                to={"/employees/booking"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(AiOutlineFieldTime, { size: "20" })}
                </div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Bookings
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Bookings
                </h2>
              </NavLink>
              <NavLink
                to={"/employee/birthday"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(FaBirthdayCake, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Birthday
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Birthday
                </h2>
              </NavLink>
              <NavLink
                to={"/employee/meetings"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(IoIosPeople, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Meeting
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Meeting
                </h2>
              </NavLink>

              <NavLink
                to={"/employees/parking"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(LuParkingSquare, { size: "20" })}
                </div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Parking
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Parking
                </h2>
              </NavLink>
              <NavLink
                to={"/employees/businesscard"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(TiBusinessCard, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Business Card
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Business Card
                </h2>
              </NavLink>
              <NavLink
                to={"/employees/pantry"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(MdFastfood, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Pantry
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Pantry
                </h2>
              </NavLink>
            </>
          )}
          <NavLink
            to={"/communication"}
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                  : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
              }`
            }
          >
            <div>{React.createElement(BsBroadcast, { size: "20" })}</div>
            <h2
              className={`whitespace-pre duration-300 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Communication
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Communication
            </h2>
          </NavLink>

          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                  : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
              }`
            }
          >
            <div>{React.createElement(HiMiniUser, { size: "20" })}</div>
            <h2
              className={`whitespace-pre duration-300 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Profile
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Profile
            </h2>
          </NavLink>
          {user === "pms_admin" && (
            <NavLink
              to={"/setup"}
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                    : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                }`
              }
            >
              <div>{React.createElement(RiSettings4Line, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Setup
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                Setup
              </h2>
            </NavLink>
          )}

          <div className="border-t mb-2 ">
            <button
              onClick={handleLogout}
              className="font-semibold flex items-center rounded-md px-4 py-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out my-2 gap-4"
            >
              <PiSignOutBold size={20} />
              {open && "Logout"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
