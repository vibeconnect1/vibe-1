import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useNavigate, NavLink } from "react-router-dom";
import { menus } from "../utils/menus";
import { PiSignOutBold } from "react-icons/pi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('TOKEN');
    navigate("/login");
  };

  return (
    <section className="flex gap-6 sticky top-0 left-0 bottom-0">
      <div
        className={` p-[8px]  bg-[#0e0e0e] max-h-screen ${
          open ? "w-60" : "w-20"
        } duration-500 text-gray-100 px-4 rounded-r-2xl shadow-2xl overflow-y-auto custom-scrollbar`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`py-3 flex  ${open ? "justify-end" : "justify-center"} `}
        >
          <HiMenuAlt3
            size={26}
            className="cursor-pointer "
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className=" flex flex-col gap-4 mb-5 relative ">
          {menus?.map((menu, i) => (
            <NavLink
              to={menu?.link}
              key={i}
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                    : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                }`
              }
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 2}00ms`,
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
          ))}
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
