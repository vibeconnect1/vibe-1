import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MaterialPR from './MaterialPR';
import PO from './PO';
import Navbar from '../components/Navbar';

const Purchase = () => {
  const [page, setPage] = useState("pr");
  return (
    <section className="flex">
      <Navbar />
      <div className="p-2 w-full flex  overflow-hidden flex-col">
        <div className="flex justify-center w-full">
        <div className="sm:flex grid grid-cols-2 sm:flex-row gap-5 font-medium p-1 sm:rounded-full rounded-md bg-gray-200">
            <h2
              className={`p-1 ${
                page === "pr" &&
                "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
              onClick={() => setPage("pr")}
            >
              Material PR
            </h2>
            <h2
              className={`p-1 ${
                page === "po" &&
                "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer transition-all duration-300 ease-linear`}
              onClick={() => setPage("po")}
            >
              PO
            </h2>
          </div>
        </div>
        {page === "pr" && (
        <div className="transition-all duration-300 ease-linear">
            <MaterialPR/>
            </div>
        )} 
        {page === "po" && (
        <div className="transition-all duration-300 ease-linear">
            <PO/>
            </div>
        )} 
      </div>
    </section>
  );
};


export default Purchase
