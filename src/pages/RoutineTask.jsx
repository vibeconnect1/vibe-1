import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../components/table/Table";
import { BsEye } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { API_URL, getRoutineTask, getVibeBackground } from "../api";
import toast from "react-hot-toast";
import { getItemInLocalStorage } from "../utils/localStorage";
import Navbar from "../components/Navbar";
import AssetNav from "../components/navbars/AssetNav";

const RoutineTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchRoutineTask = async () => {
      const taskResponse = await getRoutineTask();
      const filteredServiceTask = taskResponse.data.activities.filter(asset => asset.asset_name);
      console.log(filteredServiceTask)
      setTasks(filteredServiceTask);
    };
    fetchRoutineTask();
    console.log(tasks);
  }, []);
  const RoutineColumns = [
    {
      name: "View",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/assets/routine-task-details/${row.asset_id}/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    { name: "Asset Name", selector: (row) => row.asset_name, sortable: true },
    {
      name: "Checklist",
      selector: (row) => row.checklist_name,
      sortable: true,
    },
    { name: "Start Time", selector: (row) => row.start_time, sortable: true },
    { name: "End Time", selector: (row) => row.end_time, sortable: true },
    
    { name: "Status", selector: (row) => row.status, sortable: true },
    { name: "Assigned To", selector: (row) => row.assigned_to_name, sortable: true },

    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <div className="flex items-center gap-4">
    //       <Link to={`/assets/edit-asset/${row.id}`}>
    //         <BiEdit size={15} />
    //       </Link>
    //       <button className="text-red-400">
    //         <MdDeleteForever size={25} />
    //       </button>
    //     </div>
    //   ),
    // },
  ];

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

  return (
    <section
      className="flex"
      style={{
        background: `url(${selectedImage})no-repeat center center / cover`,
      }}
    >
      <Navbar />
      <div className="p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        <AssetNav />
      <div className="flex md:flex-row flex-col justify-between items-center my-2 gap-2  ">
        <input
          type="text"
          placeholder="Search By name"
          className="border-2 p-2 md:w-96 border-gray-300 rounded-lg placeholder:text-sm"
          //   value={searchText}
          //   onChange={handleSearch}
        />
        <div className="md:flex grid grid-cols-2 sm:flex-row my-2 flex-col gap-2">
          {/* <Link
            to={"/admin/add-checklist"}
            className="bg-black  text-sm rounded-lg flex justify-center font-semibold items-center gap-2 text-white py-2 px-4 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 "
          >
            <IoAddCircleOutline size={20} />
            Add
          </Link>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            // onClick={exportToExcel}
          >
            Export
          </button> */}
          {/* <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleDownloadQRCode}
    disabled={selectedRows.length === 0}
  >
    Download QR Code
  </button> */}
        </div>
      </div>
      <Table columns={RoutineColumns} data={tasks} isPagination={true} />
    </div>
    </section>
  );
};

export default RoutineTask;
