import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Events from "./SubPages/Events";
import Broadcast from "./SubPages/Broadcast";
import Polls from "./SubPages/Polls";
import Notification from "./SubPages/Notification";

// import Forum from "./SubPages/Forum";

import Groups from "./SubPages/Groups";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Forum from "./SubPages/Forum";
import CommunicationDashboard from "./SubPages/CommunicationDashboard";


const Communication = () => {
  const themeColor = useSelector((state) => state.theme.color);
  
  const [page, setPage] = useState("dashboard");
  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex justify-center my-2">
          <div className="sm:flex grid grid-cols-2 sm:flex-row gap-5 font-medium p-2 sm:rounded-full rounded-md opacity-90 bg-gray-200 ">
          <h2
              className={`p-1 ${
                page === "dashboard" && "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
              onClick={() => setPage("dashboard")}
            >
              {/* dashboard */}
              Dashboard
            </h2>
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
            <h2
              className={`p-1 ${
                page === "polls" && "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
              onClick={() => setPage("polls")}
            >
              Polls
            </h2>
            <h2
              className={`p-1 ${
                page === "forum" && "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
              onClick={() => setPage("forum")}
            >
              Forum
            </h2>
            <h2
              className={`p-1 ${
                page ==="groups" && "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
              onClick={() => setPage("groups")}
            >
              Groups
            </h2>
          </div>
        </div>
        {/* <Link to={`/admin/communication-charbot`} className="fixed bottom-10 right-5 ">
          <BsFillChatRightTextFill size={36} color={themeColor}/>
        </Link> */}
        {/* <Link  className="fixed top-3 right-20 ">
          <Notification/>
        </Link> */}
        
        <Link to={`/admin/communication-charbot`}>
          <div  className="fixed bottom-10 right-5  z-20">
            <BsFillChatRightTextFill size={36} color={themeColor}/>
          </div>
        </Link>
        {page === "dashboard" && (
          <div>
           <CommunicationDashboard/>
          </div>
        )}
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
        {page === "polls" && (
          <div>
           <Polls/>
          </div>
        )}
        {page === "forum" && (
          <div>
           <Forum/>
          </div>
        )}
       {page === "groups" && (
          <div>
           <Groups/>
          </div>
        )}
      </div>
    </section>
  );
};

export default Communication;