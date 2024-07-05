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
  const themeColor = useSelector((state) => state.theme.color);
  const [isModalOpen, setIsModalAddProjectOpen] = useState(false);
  const defaultImage = { index: 0, src: "" };
  let selectedImageSrc = defaultImage.src;
  let selectedImageIndex = defaultImage.index;
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const Get_Background = async () => {
    try {
      const user_id = getItemInLocalStorage("VIBEUSERID");
      console.log(user_id);
      const data = await getVibeBackground(user_id);

      if (data.success) {
        console.log("sucess");

        console.log(data.data);
        selectedImageSrc = API_URL + data.data.image;

        selectedImageIndex = data.data.index;

        console.log("Received response:", data);

        setSelectedImage(selectedImageSrc);
        setSelectedIndex(selectedImageIndex);
        console.log("Received selectedImageSrc:", selectedImageSrc);
        console.log("Received selectedImageIndex:", selectedImageIndex);
        console.log(selectedImage);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    Get_Background();
  }, []);

  const openProjectModal = () => {
    setIsModalAddProjectOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalAddProjectOpen(false);
    setIsSecondInputVisible(false);
    setIsTemplateModalOpen(false);
  };
  return (
    <section
      className="flex"
      style={{
        background: `url(${selectedImage})no-repeat center center / cover`,
      }}
    >
      <Navbar />
      <div className="w-full flex mx-3 flex-col p-2 mb-10 ">
        <div className=" overflow-x-auto">
        <Boards />
        </div>

        {/* <section className="my-2">
          <div>
           
            <div className="flex justify-end">
              <div
                onClick={openProjectModal}
                className="flex cursor-pointer bg-white shadow-custom-all-sides bg-opacity-55 rounded-md p-1 px-4 text-gray-800 items-center gap-2"
              >
                <i className="fas fa-plus"></i>
                <p className="font-medium">Add Project</p>{" "}
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </section>
  );
};

export default ProjectManagement;
