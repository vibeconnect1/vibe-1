import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const SetupNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="md:hidden w-full flex justify-end p-2 fixed top-0 right-3 z-50">
        <button
          onClick={toggleMenu}
          className="p-2 bg-black text-white rounded-lg  focus:outline-none"
        >
          <IoMenu size={30} />
        </button>
      </div>
      <div
        className={`fixed md:static md:mx-2 top-0 left-0 w-full bg-black transition-transform duration-300 ease-in-out transform md:rounded-xl ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:static md:translate-y-0`}
      >
        <ul className="overflow-x-auto p-4 bg-black rounded-xl mx-2 md:flex grid grid-cols-2 max-w-screen items-center text-white text-sm md:text-center justify-center flex-wrap gap-2 mt-7 md:mt-0">
          <Link
            to={"/setup/account/organisation"}
            className="hover:bg-white hover:text-black p-2 rounded-lg"
          >
            Account
          </Link>
          <Link
            to={"/setup/User-role"}
            className="hover:bg-white hover:text-black p-2 rounded-lg"
          >
            User Roles
          </Link>
          <Link className="hover:bg-white hover:text-black p-2 rounded-lg">
            FM User
          </Link>
          <Link className="hover:bg-white hover:text-black p-2 rounded-lg">
            Occupant User
          </Link>
          <Link className="hover:bg-white hover:text-black p-2 rounded-lg">
            Meter Types
          </Link>
          <Link
            to={"/setup/asset-group"}
            className="hover:bg-white hover:text-black p-2 rounded-lg"
          >
            Asset Group
          </Link>
          <Link className="hover:bg-white hover:text-black p-2 rounded-lg">
            Checklist Group
          </Link>
          <Link className="hover:bg-white hover:text-black p-2 rounded-lg">
            Ticket
          </Link>
          <Link
            to={"/business/setup-category"}
            className="hover:bg-white hover:text-black p-2 rounded-lg"
          >
            Business Category
          </Link>
          <Link
            to={"/facility"}
            className="hover:bg-white hover:text-black p-2 rounded-lg"
          >
            Facility
          </Link>
          <Link className="hover:bg-white hover:text-black p-2 rounded-lg">
            Invoice Approval
          </Link>
          <Link
            to={"/admin/parking-setup"}
            className="hover:bg-white hover:text-black p-2 rounded-lg"
          >
            Parking
          </Link>
          <Link className="hover:bg-white hover:text-black p-2 rounded-lg">
            Email Rule
          </Link>
          <Link className="hover:bg-white hover:text-black p-2 rounded-lg">
            FM Groups
          </Link>
          <Link className="hover:bg-white hover:text-black p-2 rounded-lg">
            Master Checklist
          </Link>
          <Link className="hover:bg-white hover:text-black p-2 rounded-lg">
            SAC/HSN Setup
          </Link>
          <Link className="hover:bg-white hover:text-black p-2 rounded-lg">
            Addresses
          </Link>
          <Link className="hover:bg-white hover:text-black p-2 rounded-lg">
            Export
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SetupNavbar;
