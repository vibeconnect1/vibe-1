import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useNavigate, NavLink } from "react-router-dom";
import { menus } from "../utils/menus";
import { PiSignOutBold } from "react-icons/pi";
import { getItemInLocalStorage } from "../utils/localStorage";
import { BsTicketPerforated } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { HiMiniTicket, HiMiniUser } from "react-icons/hi2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
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
    <section className="flex gap-6 sticky top-0 left-0 bottom-0 h-screen">
      <div
        className={`p-[8px] bg-[#0e0e0e] max-h-screen ${
          open ? "w-full md:w-60" : "w-20"
        } duration-500 text-gray-100 px-4 rounded-r-2xl shadow-2xl overflow-y-auto h-screen custom-scrollbar left-0`}
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
            </>
          )}
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
            </>
          )}
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
          {/* <NavLink
            to={"/assets"}
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
              Asset
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Asset
            </h2>
          </NavLink> */}

          {/* {menus?.map((menu, i) => (
            <NavLink
              to={menu?.link}
              key={i}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                    : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                }`
              }
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${(i + 2) * 100}ms`, // Corrected transition delay
                }}
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </NavLink>
          ))} */}

          {/* {user === "pms_admin" && (
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
              <div>{React.createElement( BsTicketPerforated, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Admin
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                Admin
              </h2>
            </NavLink>
          )} */}
          <div className="border-t mb-2 ">
            <button
              onClick={handleLogout}
              className="font-semibold flex items-center rounded-md px-4 py-2 hover:bg-white hover:text-black my-2 gap-4"
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
