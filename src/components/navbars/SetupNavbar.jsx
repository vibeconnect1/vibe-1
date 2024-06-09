import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
const SetupNavbar = () => {
  const themeColor = useSelector((state)=> state.theme.color)
  return (
    <div className="flex mt-1">
    <div>
      {/* <ul className="p-4 bg-black rounded-xl mx-2 md:flex grid grid-cols-2 items-center text-white text-sm text-center justify-center overflow-x-auto  gap-2 "> */}
      <ul
      style={{background: themeColor}}
      className="p-4 rounded-xl mx-2 md:flex grid grid-cols-2 max-w-screen items-center text-white text-sm text-center justify-center flex-wrap gap-2 ">
        <Link to={"/setup/account/organisation"} className="hover:bg-white hover:text-black p-2 rounded-lg ">
          Account
        </Link>
    
        {/* <Link to={"/setup/User-role"} className="hover:bg-white hover:text-black  p-2 rounded-lg ">User Roles</Link> */}
        <Link to={"/setup/users-setup"} className="hover:bg-white hover:text-black  p-2 rounded-lg ">Users</Link>
        <Link className="hover:bg-white hover:text-black  p-2 rounded-lg ">FM User</Link>
        <Link className="hover:bg-white hover:text-black  p-2 rounded-lg ">Occupant User</Link>
        <Link className="hover:bg-white hover:text-black  p-2 rounded-lg ">Meter Types</Link>
        <Link to={"/setup/asset-group"}  className="hover:bg-white hover:text-black  p-2 rounded-lg ">Asset Group</Link>
        <Link className="hover:bg-white hover:text-black  p-2 rounded-lg ">Checklist Group</Link>
        <Link className="hover:bg-white hover:text-black  p-2 rounded-lg ">Ticket</Link>
        <Link to={"/business/setup-category"} className="hover:bg-white hover:text-black  p-2 rounded-lg ">Business Category</Link>
        <Link to={"/facility"} className="hover:bg-white hover:text-black  p-2 rounded-lg ">Facility</Link>
        <Link className="hover:bg-white hover:text-black  p-2 rounded-lg ">Invoice Approval</Link>
        <Link to={"/admin/parking-setup"} className="hover:bg-white hover:text-black  p-2 rounded-lg ">Parking</Link>
        <Link className="hover:bg-white hover:text-black  p-2 rounded-lg ">Email Rule</Link>
        <Link className="hover:bg-white hover:text-black  p-2 rounded-lg ">FM Groups</Link>
        <Link className="hover:bg-white hover:text-black  p-2 rounded-lg ">Master Checklist</Link>
        <Link className="hover:bg-white hover:text-black  p-2 rounded-lg ">SAC/HSN Setup</Link>
        <Link className="hover:bg-white hover:text-black  p-2 rounded-lg ">Addresses</Link>
        <Link className="hover:bg-white hover:text-black  p-2 rounded-lg ">Export</Link>
        <Link to={"/setup/insights/"} className="hover:bg-white hover:text-black  p-2 rounded-lg ">Insights</Link>
        <Link to={"/setup/permit-setup"} className="hover:bg-white hover:text-black  p-2 rounded-lg ">Permit</Link>
        <Link to={"/admin/setup-incidents"}className="hover:bg-white hover:text-black  p-2 rounded-lg ">Incidents Setup</Link>
      </ul>
    </div>
  </div>
  )
}

export default SetupNavbar
