import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useNavigate, NavLink } from "react-router-dom";
import { menus } from "../utils/menus";
import { PiFiles, PiSignOutBold } from "react-icons/pi";
import { getItemInLocalStorage } from "../utils/localStorage";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import {
  BsBroadcast,
  BsBuilding,
  BsFileRuled,
  BsMailboxFlag,
  BsPass,
  BsTicketPerforated,
} from "react-icons/bs";
import {
  MdFastfood,
  MdManageAccounts,
  MdOutlineDashboard,
  MdOutlinePolicy,
} from "react-icons/md";
import { HiMiniTicket, HiMiniUser } from "react-icons/hi2";
import { RiBillLine, RiSettings4Line, RiUserLocationFill } from "react-icons/ri";
import { LuParkingSquare, LuSettings2 } from "react-icons/lu";
import {
  IoBusinessOutline,
  IoCashOutline,
  IoDocumentTextOutline,
  IoFastFoodOutline,
  IoFitness,
} from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import {
  AiOutlineAudit,
  AiOutlineFieldTime,
  AiOutlineUser,
} from "react-icons/ai";
import { TiBusinessCard } from "react-icons/ti";
import {
  FaBirthdayCake,
  FaBriefcaseMedical,
  FaCalendarAlt,
  FaCalendarCheck,
  FaCar,
  FaDollarSign,
  FaFileInvoice,
  FaFileWord,
  FaRegFile,
  FaRegFileAlt,
  FaRegFilePowerpoint,
  FaTasks,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { useSelector } from "react-redux";
import { ImFileText2 } from "react-icons/im";
import { FcMoneyTransfer } from "react-icons/fc";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [feat, setFeat] = useState("")
  const navigate = useNavigate();
  const themeColor = useSelector((state) => state.theme.color);
  const fontSize = useSelector((state) => state.fontSize);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  useEffect(() => {
    const userType = getItemInLocalStorage("USERTYPE");
    setUser(userType);
    getAllowedFeatures()
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
    localStorage.removeItem("UserId");
    localStorage.removeItem("VIBETOKEN");
    localStorage.removeItem("VIBEUSERID");
    localStorage.removeItem("FEATURES");
    navigate("/login");
    window.location.reload();
  };
const siteId = getItemInLocalStorage("SITEID")
const features = getItemInLocalStorage("FEATURES")

const getAllowedFeatures = () => {
  const storedFeatures = getItemInLocalStorage("FEATURES");
  if (storedFeatures) {
    setFeat(storedFeatures.map(feature => feature.feature_name));
  }
};
console.log(feat)

  return (
    <section className="flex gap-6 sticky top-0 left-0 bottom-0 h-screen z-10">
      <div
        style={{
          background: themeColor,
        }}
        className={`p-[8px]  max-h-screen ${
          open ? "w-full md:w-60" : "w-20"
        } duration-500 text-gray-100 px-4 shadow-2xl overflow-y-auto h-screen custom-scrollbar left-0`}
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
          {/* admin */}
          {user === "pms_admin" && (
            <>
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? `text-black bg-white flex p-2  gap-3.5 rounded-md group items-center  font-medium ${fontSize}`
                      : ` group flex items-center  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${fontSize}`
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
               {siteId === 25 ? <NavLink
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
                  Service Desk
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Service Desk
                </h2>
              </NavLink>:<>
              
              <NavLink
                to={"/admin/project-management"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? `text-black bg-white flex p-2  gap-3.5 rounded-md group items-center  font-medium ${fontSize}`
                      : ` group flex items-center  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${fontSize}`
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
                to={"/Task-management"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(FaTasks , { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Task Management
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Task management
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/calendar"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
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
                  Calendar
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Calendar
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/hrms/dashboard"}
                // to={"/admin/hrms/employee-onboarding"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(FaUserFriends, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  HRMS
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  HRMS
                </h2>
              </NavLink>
              <NavLink
                to={"/assets/all-assets"}
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
                to={"/services/soft-service"}
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
                 Soft Services
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                 Soft Services
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/purchase"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(PiFiles, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Purchase
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Purchase
                </h2>
              </NavLink>
             
              
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
                  Service Desk
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Service Desk
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/service-pr"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(PiFiles, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Service PR/WO
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Service PR/WO
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
                to={"/admin/bill-pay"}
                className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                  : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                }`
               }
              >
              <div>{React.createElement(RiBillLine, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Bill Pay
                </h2>
                <h2
                  className={`${
                  open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Bill Pay
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/audit"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(AiOutlineAudit, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Audit
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Audit
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/passes"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(BsPass, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Passes
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Passes
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/permit"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(FaRegFileAlt, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Permit
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Permit
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/booking-request/hotel-request"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(FaCalendarAlt, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Booking & Request
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Booking & Request
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/field-sense-meeting"}
                className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                  : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                }`
               }
              >
              <div>{React.createElement(RiUserLocationFill, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Field Sense
                </h2>
                <h2
                  className={`${
                  open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Field Sense
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
                to={"/admin/fb"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(IoFastFoodOutline , { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  F&B
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  F&B
                </h2>
              </NavLink>
             

              <NavLink
                to={"/admin/incidents"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(FaFileInvoice, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Incidents
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Incidents
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
                  Contact Book
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Contact Book
                </h2>
              </NavLink>
              <NavLink
                to={"/admin/business-card"}
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
                 Space Bookings
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
                to={"/admin/advance-salary-request"}
                className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                  : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                }`
               }
              >
              <div>{React.createElement(FcMoneyTransfer, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Advance Salary 
                </h2>
                <h2
                  className={`${
                  open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Advance Salary 
                </h2>
              </NavLink>
             
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
                to={"/meetings"}
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
                to={"/admin/other-bills"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(ImFileText2, { size: "20" })}</div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Other Bills
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Other Bills
                </h2>
              </NavLink>
             
               <NavLink
                to={"/personal-finance"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(FaMoneyBillTrendUp, { size: "20" })}
                </div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Personal Financial
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Personal Financial
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
              </>}
              
           
             
             
             
              
            


              {/* <NavLink
                to={"/admin/documents"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(IoDocumentTextOutline, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Document Pro
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Document Pro
                </h2>
              </NavLink> */}
             
             {siteId === 25 && <NavLink
                to={"/setup/users-setup"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(AiOutlineUser, { size: "20" })}
                </div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Users
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Users
                </h2>
              </NavLink>}

             
            </>
          )}

          {/* user */}
          {user !== "pms_admin" && (
            <>
              {/* <NavLink
                to={"/employee/project-management"}
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
                to={"/Task-management"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(FaTasks , { size: "20" })}
                </div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Task Management
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Task management
                </h2>
              </NavLink> */}
               {siteId === 25 ? <NavLink
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
              :<>
              
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
                to={"/hrms-onboarding"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
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
                  HRMS
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  HRMS
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
                to={"/employee/employee-communication"}
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
                to={"/employee/bill-pay"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(RiBillLine, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Bill Pay
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Bill Pay
                </h2>
              </NavLink>
              <NavLink
                to={"/personal-finance"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>
                  {React.createElement(FaMoneyBillTrendUp , { size: "20" })}
                </div>

                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Personal Financial
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Personal Financial
                </h2>
              </NavLink>
              <NavLink
                to={"/employee/advance-salary"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(FcMoneyTransfer, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Advance Salary 
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Advance Salary 
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
                to={"/employee/field-sense-meeting"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(RiUserLocationFill, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Field Sence
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Field Sence
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
                to={"/employees/passes"}
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
                  Passes
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Passes
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
                to={"/meetings"}
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
                to={"/employee/booking-request/hotel-request"}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                      : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                  }`
                }
              >
                <div>{React.createElement(FaCalendarAlt, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Booking & Request
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  Booking & Request
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
              </>}

            </>
          )}
          {/* <NavLink
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
          </NavLink> */}

          {user === "pms_admin" && siteId !== 25   && (
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
          <div className="border border-white" />
          <div className=" ">
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
            <button
              onClick={handleLogout}
              className="font-semibold flex items-center rounded-md px-2 py-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out my-2 gap-4"
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
