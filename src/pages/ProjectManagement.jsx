import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { useSelector } from "react-redux";
import Boards from "../components/Boards";
import bridge from "/bridge.jpg";
import { getItemInLocalStorage } from "../utils/localStorage";
import { API_URL, getVibeBackground } from "../api";

const ProjectManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const themeColor = useSelector((state) => state.theme.color);
//   const backgroundImage = useSelector((state) => state.background.background);
// console.log(backgroundImage)
const defaultImage = { index: 0, src: "" };
  let selectedImageSrc = defaultImage.src;
  let selectedImageIndex = defaultImage.index;
const [selectedImage, setSelectedImage] = useState(defaultImage);
const [selectedIndex, setSelectedIndex] = useState(null);
const Get_Background = async () => {
  try {
    // const params = {
    //   user_id: user_id,
    // };
    const user_id = getItemInLocalStorage("VIBEUSERID");
    console.log(user_id);
    const data = await getVibeBackground(user_id);

    if (data.success) {
      console.log("sucess");

      console.log(data.data);
      selectedImageSrc = API_URL + data.data.image;

      
      selectedImageIndex = data.data.index;

      // Now, you can use selectedImageSrc and selectedImageIndex as needed
      console.log("Received response:", data);

      // For example, update state or perform any other actions
      setSelectedImage(selectedImageSrc);
      setSelectedIndex(selectedImageIndex);
      console.log("Received selectedImageSrc:", selectedImageSrc);
      console.log("Received selectedImageIndex:", selectedImageIndex);
      console.log(selectedImage);
      // dispatch(setBackground(selectedImageSrc));
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
useEffect(() => {
  // Call the function to get the background image when the component mounts
  Get_Background();
}, []);

  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/employee/project-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/employee/edit-project/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Project Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Project Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.start,
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => row.end,
      sortable: true,
    },
    {
      name: "Assigned Team",
      selector: (row) => row.team,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "",
      selector: (row) => (
        <button className="text-red-400 font-medium">Delete</button>
      ),
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Project Name",
      start: "25/05/2024",
      end: "25/06/2024",
      team: "Team 1",
      status: "In Progress",
    },
  ];

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: themeColor,
        color: "white",

        fontSize: "10px",
      },
    },
    headCells: {
      style: {
        textTransform: "upperCase",
      },
    },
  };

  return (
    <section
      className="flex"
      // style={{
      //   background: `url(${bridge})`,
      //   // backgroundSize: "100% 100% ",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
      style={{
        background: `url(${selectedImage})no-repeat center center / cover`,
      }}
    >
      <Navbar />
      <div className="w-full flex mx-3 flex-col p-2 mb-10 ">
        {/* <div className="flex sm:flex-row flex-col gap-10 my-5">
          <div className="sm:flex grid grid-cols-2 items-center justify-center  gap-4 border border-gray-300 rounded-md px-3 p-2 w-auto">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="all"
                name="status"
                checked={selectedStatus === "all"}
                onChange={() => handleStatusChange("all")}
              />
              <label htmlFor="all" className="text-sm">
                All
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="open"
                name="status"
                checked={selectedStatus === "open"}
                onChange={() => handleStatusChange("open")}
              />
              <label htmlFor="open" className="text-sm">
                Open
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="closed"
                name="status"
                checked={selectedStatus === "closed"}
                onChange={() => handleStatusChange("closed")}
              />
              <label htmlFor="closed" className="text-sm">
                Closed
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="pending"
                name="status"
                checked={selectedStatus === "pending"}
                onChange={() => handleStatusChange("pending")}
              />
              <label htmlFor="pending" className="text-sm">
                Pending
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="completed"
                name="status"
                checked={selectedStatus === "completed"}
                onChange={() => handleStatusChange("completed")}
              />
              <label htmlFor="completed" className="text-sm">
                Completed
              </label>
            </div>
          </div>
          <Link
            to={"/admin/project-management/create-project"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-300 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
            // onClick={() => setShowCountry(!showCountry)}
          >
            <PiPlusCircle size={20} />
            Add
          </Link>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by Title"
              className="border border-gray-400 w-96 placeholder:text-xs rounded-lg p-2"
              //   value={searchText}
              //   onChange={handleSearch}
            />
            
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            // onClick={exportToExcel}
          >
            Export
          </button>
        </div> */}
        <div className=" overflow-x-auto">
        <Boards />

        </div>
        
      </div>
    </section>
  );
};

export default ProjectManagement;
