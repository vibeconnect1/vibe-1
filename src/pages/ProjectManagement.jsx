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
import {
  API_URL,
  getOutsideUsers,
  getProjectUsers,
  getVibeBackground,
  postNewProjectBoard,
} from "../api";
import CustomBoardCreate from "./SubPages/Projectmanagement/BoardCreation";

const ProjectManagement = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;
  const themeColor = useSelector((state) => state.theme.color);
  const [isModalOpen, setIsModalAddProjectOpen] = useState(false);
  const defaultImage = { index: 0, src: "" };
  let selectedImageSrc = defaultImage.src;
  let selectedImageIndex = defaultImage.index;
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [emailsOutsider, setEmailsOutsider] = useState([]);
  const [isSecondInputVisible, setIsSecondInputVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionOutsider, setSelectedOptionOutsider] = useState("");
  const [board_id_for_Temp, setboard_id_for_Temp] = useState("");
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  var count = 0;
  const user_id = getItemInLocalStorage("VIBEUSERID");
  useEffect(() => {
    GetUsersData();
    GetUsersDataOutsider();

    if (count === 0) {
      // GetBoards();
    }
  }, [count]);
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
    console.log("open");
  };

  const closeProjectModal = () => {
    setIsModalAddProjectOpen(false);
    setIsSecondInputVisible(false);
    setIsTemplateModalOpen(false);
  };

  const [boardName, setBoardName] = useState("");
  const [emails, setEmails] = useState([]);
  const [dueDate, setDueDate] = useState(todayDate);
  var handleChangeSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(emails);
  };
  const handleFirstInputClick = () => {
    setIsSecondInputVisible(true);
  };
  var handleChangeSelectOutsider = (selectedOptionOutsider) => {
    setSelectedOptionOutsider(selectedOptionOutsider);
    console.log(emailsOutsider);
  };

  const GetUsersData = async () => {
    const org_id = localStorage.getItem("VIBEORGID");
    try {
      const jsonData = await getProjectUsers(user_id, org_id);

      if (jsonData.success) {
        const users = jsonData.data;
        const AssignEmails = users.map((user) => ({
          value: user.user_id,
          label: user.email,
        }));

        setEmails(AssignEmails);
        console.log("-----heyyyy");
        console.log(emails);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const GetUsersDataOutsider = async () => {
    try {
      const jsonData = await getOutsideUsers(user_id);

      if (jsonData.success) {
        const users = jsonData.data;
        const AssignEmailsOutsider = users.map((user) => ({
          value: user.id,
          label: user.email,
        }));

        setEmailsOutsider(AssignEmailsOutsider);
        console.log("-----heyyyy");
        console.log(emailsOutsider);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const createBoard = async () => {
    if (boardName === "") {
      toast.error("Please Enter Board Name.");
      return;
    }

    var idString = "";
    if (selectedOption !== "") {
      const idList = selectedOption.map((email) => parseInt(email.value));
      idString = idList.join(",");
    }

    var idStringOutsider = "";
    if (selectedOptionOutsider !== "") {
      const idList = selectedOptionOutsider.map((email) =>
        parseInt(email.value)
      );
      idStringOutsider = idList.join(",");
    }

    const formData = new FormData();
    formData.append("board_name", boardName);
    formData.append("assign_to", idString);
    formData.append("created_by", user_id);
    formData.append("due_date", dueDate);
    formData.append("access_to", idStringOutsider);
    formData.append("user_id", user_id);
    try {
      const boardResp = await postNewProjectBoard(formData);
      if (boardResp.success) {
        console.log("success");
        setboard_id_for_Temp(response.data.id);
        console.log(response.data.id);

        setIsTemplateModalOpen(true);
      } else {
        console.log("unsuccess");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
    console.log(e.target.value);
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
        {/* <div className=" overflow-x-auto">
        <Boards />
        </div> */}

        <section className="my-2">
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
            {isModalOpen && (
              <CustomBoardCreate
                closeProjectModal={closeProjectModal}
                boardName={boardName}
                setBoardName={setBoardName}
                handleChangeSelect={handleChangeSelect}
                emails={emails}
                handleChangeSelectOutsider={handleChangeSelectOutsider}
                emailsOutsider={emailsOutsider}
                dueDate={dueDate}
                setDueDate={setDueDate}
                handleFirstInputClick={handleFirstInputClick}
                createBoard={createBoard}
                isSecondInputVisible={isSecondInputVisible}
                handleDueDateChange={handleDueDateChange}
                todayDate={todayDate}
              />
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProjectManagement;
