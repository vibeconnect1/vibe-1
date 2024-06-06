import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Events from "./SubPages/Events";
import Broadcast from "./SubPages/Broadcast";


const Communication = () => {
  const [page, setPage] = useState("event");
  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex justify-center my-2">
          <div className="flex flex-row gap-5  font-semibold p-1 rounded-full bg-gray-200">
            <h2
              className={`p-1 ${
                page === "event" && "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
              onClick={() => setPage("event")}
            >
              Events
            </h2>
            <h2
              className={`p-1 ${
                page === "broadcast" && "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
              onClick={() => setPage("broadcast")}
            >
              Broadcast
            </h2>
           
          </div>
        </div>
        {page === "event" && (
          <div>
           <Events/>
          </div>
        )}
        {page === "broadcast" && (
          <div>
           <Broadcast/>
          </div>
        )}
       
      </div>
    </section>
  );
};

export default Communication;
