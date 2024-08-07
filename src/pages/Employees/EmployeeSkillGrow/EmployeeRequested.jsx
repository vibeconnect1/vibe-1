import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import { Link, NavLink } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import marketing from "/digitalMarketing.jpg";
import { CgWebsite } from "react-icons/cg";
function EmployeeRequested() {
  const themeColor = useSelector((state) => state.theme.color);
  const [requestAction, setRequestAction] = useState(null);
  const dropdownRefs = useRef([]);
  const handleRequestActionDropDown = (index) => {
    setRequestAction(requestAction === index ? null : index);
  };
  const handleClickOutside = (event) => {
    if (
      dropdownRefs.current.every((ref) => ref && !ref.contains(event.target))
    ) {
      setRequestAction(null);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const projectData = [
    {
      id: 1,
      img: marketing,
      projectIcon: (
        <div className="border-2 border-inherit rounded-md p-3 mr-3">
          <CgWebsite size={30} />
        </div>
      ),
      projectName: "Web Development",
      projectDesc:
        "Web application design is an important stage when building a web application...",
      profiles: [
        { id: 1, src: "/profile1.jpg", alt: "Profile 1" },
        { id: 2, src: "/profile2.jpg", alt: "Profile 2" },
        { id: 3, src: "/profile3.jpg", alt: "Profile 3" },
      ],
      budget: "20000",
      status: "Request",
      dueDate: "20-july-2024",
    },
    {
      id: 2,
      img: marketing,
      projectName: "Client Relationship Management",
      projectDesc:
        "Proposal for client relationship management initiative to improve customer satisfaction and retention",
      profiles: [
        { id: 1, src: "/profile1.jpg", alt: "Profile 1" },
        { id: 2, src: "/profile2.jpg", alt: "Profile 2" },
        { id: 3, src: "/profile3.jpg", alt: "Profile 3" },
      ],
      budget: "15000",
      status: "In Review",
      dueDate: "20-july-2024",
    },
    {
      id: 3,
      img: marketing,
      projectName: "Marketing Strategy",
      projectDesc:
        "Development of a new marketing strategy to increase brand awareness and sales...",
      profiles: [
        { id: 1, src: "/profile1.jpg", alt: "Profile 1" },
        { id: 2, src: "/profile2.jpg", alt: "Profile 2" },
        { id: 3, src: "/profile3.jpg", alt: "Profile 3" },
      ],
      budget: "25000",
      status: "In Review",
      dueDate: "20-july-2024",
    },
    {
      id: 4,
      img: marketing,
      projectName: "Marketing Strategy",
      projectDesc:
        "Development of a new marketing strategy to increase brand awareness and sales...",
      profiles: [
        { id: 1, src: "/profile1.jpg", alt: "Profile 1" },
        { id: 2, src: "/profile2.jpg", alt: "Profile 2" },
        { id: 3, src: "/profile3.jpg", alt: "Profile 3" },
        { id: 4, src: "/profile3.jpg", alt: "Profile 3" },
      ],
      budget: "25000",
      status: "Request",
      dueDate: "20-july-2024",
    },
  ];
  const getStatusColor = (status) => {
    switch (status) {
      case "Request":
        return "bg-blue-100 text-blue-600";
      case "In Review":
        return "bg-orange-100 text-orange-600";
    }
  };
  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex flex-col overflow-hidden">
        <div className="flex justify-center my-2 w-full">
          <div
            className="sm:flex flex-wrap grid grid-cols-2 sm:flex-row text-sm font-medium p-2 rounded-md text-white"
            style={{ background: themeColor }}
          >
            <NavLink
              to="/employee/certificate/course"
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Certificate
            </NavLink>
            <NavLink
              to="/employee/certificate/rr-certificate"
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              RR Certificate
            </NavLink>
            <NavLink
              to="/employee/certificate/course-request-approval"
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Course Request & Approval
            </NavLink>
            <NavLink
              to="/employee/certificate/project-request-approval"
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Project Request & Approval
            </NavLink>
            <NavLink
              to="/employee/certificate/project-tracking"
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Project Tracking
            </NavLink>
            <NavLink
              to="/employee/certificate/project-repository"
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Project Repository
            </NavLink>
            <NavLink
              to="/employee/certificate/knowledge-base"
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Knowledge Base
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center my-2 w-full">
          <div className="sm:flex grid grid-cols-2 sm:flex-row gap-5 font-medium p-2 sm:rounded-full rounded-md opacity-90 bg-gray-200">
            <NavLink
              to="/employee/certificate/project-request-approval/request"
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Request
            </NavLink>
            <NavLink
              to="/employee/certificate/project-request-approval/approved"
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Approved
            </NavLink>
            <NavLink
              to="/employee/certificate/project-request-approval/rejected"
              className={({ isActive }) =>
                `p-1 ${
                  isActive && "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear`
              }
            >
              Rejected
            </NavLink>
          </div>
        </div>
        <div>
          <div className="flex justify-end mx-10">
            <Link
              to={
                "/employee/certificate/project-request-approval/create-request"
              }
              className="border-2 border-gray-400 rounded-md px-4 p-2 flex gap-2"
            >
              <IoAddCircleOutline size={22} />
              Request Project
            </Link>
          </div>
          <div>
            <div className="border-2 border-gray-400 rounded-md mx-10 my-5">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5 my-5">
                {projectData.map((item) => (
                  <div
                    key={item.id}
                    className="shadow-custom-all-sides flex flex-col justify-between rounded-md"
                  >
                    <img src={item.img} className="h-32 rounded-md"></img>
                    <div className="flex justify-between mx-2">
                      <div className="flex px-3 pt-3">
                        <div>{item.projectIcon}</div>
                        <p className="text-xl text-gray-700 font-medium ">
                          {item.projectName}
                        </p>
                      </div>
                      <button
                        className="relative"
                        onClick={() => handleRequestActionDropDown(item.id)}
                        ref={(el) => (dropdownRefs.current[item.id] = el)}
                      >
                        <BsThreeDotsVertical />
                        {requestAction === item.id && (
                          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20 text-start">
                            <Link
                              to={`/employee/certificate/project-request-approval/edit-request/${item.id}`}
                              className="block px-4 py-1 text-gray-800 hover:bg-gray-100"
                            >
                              <div className="flex gap-2">
                                <BiEdit size={15} className="mt-1" />
                                Edit
                              </div>
                            </Link>
                            <Link
                              to={`/employee/certificate/project-request-approval/view-request/${item.id}`}
                              className="block px-4 py-1 text-gray-800 hover:bg-gray-100"
                            >
                              <div className="flex gap-2">
                                <BsEye className="mt-1" size={15} /> View
                              </div>
                            </Link>
                            <button
                              type="submit"
                              className="block px-4 py-1 text-gray-800 hover:bg-gray-100"
                            >
                              <div className="flex gap-2">
                                <RiDeleteBin6Line className="mt-1" size={15} />{" "}
                                Delete
                              </div>
                            </button>
                          </div>
                        )}
                      </button>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 px-5 py-3">
                        {item.projectDesc}
                      </p>
                    </div>
                    <div className="flex justify-between items-center px-5 relative mt-2 mb-5">
                      <div className="flex ">
                        {item.profiles.map((profile, index) => (
                          <img
                            key={profile.id}
                            src={profile.src}
                            alt={profile.alt}
                            className="w-9 h-9 rounded-full absolute top-0 ml-5"
                            style={{ left: `${index * 1.4}rem` }}
                          />
                        ))}
                      </div>
                      <p className={`p-1 px-2 rounded-md text-sm font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </p>
                    </div>
                    <div className="border-t border-gray-300">
                      <div class="grid grid-cols-2 divide-x divide-gray-300">
                        <div className="flex justify-center">
                          <div className="py-3">
                            <p className="text-gray-500 text-sm font-medium">
                              Due Date
                            </p>
                            <p className="text-gray-600 text-base font-medium">
                              {item.dueDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="py-3">
                            <p className="text-gray-500 text-sm font-medium">
                              Budget
                            </p>
                            <p className="text-gray-600 text-base font-medium">
                              {item.budget}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmployeeRequested;
