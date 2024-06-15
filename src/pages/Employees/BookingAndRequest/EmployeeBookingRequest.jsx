import React from 'react';
import { NavLink, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from '../../../components/Navbar';


const EmployeeBookingRequest = () => {
  return (
    <div className="visitors-page">
      <section className="flex">
        <Navbar />
        <div className="w-full flex mx-3 flex-col overflow-hidden">
          <div className="flex justify-center w-full my-2">
            <div className="sm:flex grid grid-cols-2 sm:flex-row gap-5 font-medium p-2 sm:rounded-full rounded-md opacity-90 bg-gray-200">
              <CustomNavLink to="/employee/booking-request/hotel-request">Hotel Request</CustomNavLink>
              <CustomNavLink to="/employee/booking-request/flight-ticket-request">Flight Ticket Request</CustomNavLink>
              <CustomNavLink to="/employee/booking-request/cab-bus-request">Cab/Bus Request</CustomNavLink>
              <CustomNavLink to="/employee/booking-request/transportation-request">Transportation Request</CustomNavLink>
              <CustomNavLink to="/employee/booking-request/traveling-allowance-request">Add Traveling Allowance Request</CustomNavLink>
            </div>
          </div>

        
        </div>
      </section>
    </div>
  );
};

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `p-1 rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
          isActive ? 'bg-white text-blue-500 shadow-custom-all-sides' : 'hover:bg-gray-800'
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default EmployeeBookingRequest;
