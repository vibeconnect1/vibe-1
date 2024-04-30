import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Events from "./SubPages/Events";
import Broadcast from "./SubPages/Broadcast";


const Communication = () => {
  const [page, setPage] = useState("event");
  return (
    <section className="flex mr-5">
      <Navbar />
      <div className="p-4 w-full my-2 flex mx-5 flex-col">
        <div className="flex justify-center">
          <div className="flex flex-row gap-5 text-lg font-semibold p-2 rounded-full bg-gray-400">
            <h2
              className={`p-1 ${
                page === "event" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("event")}
            >
              Events
            </h2>
            <h2
              className={`p-1 ${
                page === "broadcast" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
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
