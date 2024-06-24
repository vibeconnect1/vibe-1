import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Purchase = () => {
    const [page, setPage]= useState("material")
  return (
    <section>
      {/* <section className="flex "> */}
      {/* <Navbar /> */}
      {/* <div className="p-4 overflow-hidden w-full my-2 flex mx-3 flex-col">
        */}
        <div className="flex justify-center w-full"> 
      <div className="sm:flex grid grid-cols-2 text-sm md:text-base sm:flex-row gap-5 font-medium p-2 sm:rounded-full rounded-md opacity-90 bg-gray-200 ">
        <NavLink
          to={"/services/soft-service"}
          className={({ isActive }) =>
            `  md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
              isActive && "bg-white text-blue-500 shadow-custom-all-sides"
            }`
          }
        >
          Service
        </NavLink>
        <NavLink
          to={"/services/checklist"}
          className={({ isActive }) =>
            ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
              isActive && "bg-white text-blue-500 shadow-custom-all-sides"
            }`
          }
        >
          Checklist
        </NavLink>
        <NavLink
          to={"/services/tasks"}
          className={({ isActive }) =>
            ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
              isActive && "bg-white text-blue-500 shadow-custom-all-sides"
            }`
          }
        >
          Task
        </NavLink>
       
      </div>
      </div>
    </section>
  )
}

export default Purchase
