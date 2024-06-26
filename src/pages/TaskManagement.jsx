import React, { useEffect, useRef, useState } from "react";
import { getItemInLocalStorage } from "../utils/localStorage";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import profile from "/wave.png";
import {
  FaArrowLeft,
  FaCheck,
  FaComment,
  FaComments,
  FaDownload,
  FaFileAlt,
  FaFileExcel,
  FaFileImage,
  FaFilePdf,
  FaFilePowerpoint,
  FaFileWord,
  FaFilter,
  FaLaptop,
  FaLongArrowAltRight,
  FaPaperPlane,
  FaPaperclip,
  FaPencilAlt,
  FaPlus,
  FaRegCalendarAlt,
  FaTrashAlt,
  FaUserCog,
} from "react-icons/fa";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  API_URL,
  deleteVibeTask,
  getVibeActionAndChat,
  getVibeBackground,
  getVibeComments,
  getVibeMedia,
  getVibeMyBoardTask,
  getVibeStatus,
  getVibeSubTaskChecklist,
  getVibeTaskAttachment,
  getVibeTaskChecklist,
  getVibeTaskUserAssign,
  getVibeUsers,
  postVibeTaskChat,
  updateTaskStatus,
  updateVibeAssignedUser,
  updateVibeUserTask,
} from "../api";
import RemainingTime from "../components/RemainingTime";
import { BiPlus, BiSolidCalendarEdit } from "react-icons/bi";
import LinearProgressBar from "../components/LinearProgessBar";
import toast from "react-hot-toast";
import DeleteTaskModal from "../containers/modals/DeleteTaskModal";
import bridge from "/bridge.jpg";
import TaskSelf from "../containers/modals/SelfTask";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import {
  FormattedDateToShowProperly,
  SendDueDateFormat,
} from "../utils/dateUtils";
import { IoSend } from "react-icons/io5";
import useWebSocketServiceForTasks from "../components/WebSocketManagement/WebSocketServiceForTask";
import vibeAuth from "../api/vibeAuth";
// import TaskSelf from "./SubPages/TaskSelf";

// import LinearProgress from "@material-ui/core/LinearProgress";

const TaskManagement = () => {
  const user_id = getItemInLocalStorage("VIBEUSERID");
  // const defaultImage = { index: 0, src: profile };
  // let selectedImageSrc = defaultImage.src;
  // let selectedImageIndex = defaultImage.index;
  // const [selectedImage, setSelectedImage] = useState(defaultImage);
  const [activeView, setActiveView] = useState("Kanban");
  const themeColor = useSelector((state) => state.theme.color);
  const [taskFilter, setTaskFilter] = useState([]);
  const [activeTaskAssign, setActiveTaskAssign] = useState("");
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [taskList, settaskList] = useState([]);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [idFromURL, setIdFromURL] = useState(null);
  const [showStatus, setshowStatus] = useState(true);
  const [taskStatus, setTaskStatus] = useState("");
  const [isModalOpenDeleteTask, setIsModalOpenDeleteTask] = useState(false);
  const [dueDate, setDueDate] = useState(null);
  const [newStatus, setNewStatus] = useState({
    value: taskStatus,
    label: taskStatus,
  });
  const [updateEffect, setUpdateEffect] = useState(false);

  const [createdFirstName, setCreatedFirstName] = useState("");
  const [createdSecondName, setCreatedSecondName] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [createdBy_id, setcreatedBy_id] = useState("");
  const [usersAssignAlready, setUsersAssignAlready] = useState([]);
  const [showStatusChecklist1, setShowStatusChecklist1] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [isTaskAssignedTo, setIsTaskAssignedTo] = useState(false);
  const [id, setID] = useState("");
  const [items, setItems] = useState([]);
  const [itemtaskTopicText, setItemTaskTopicText] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [modalTaskSelfIsOpen, setTaskSelfModalIsOpen] = useState(false);
  const [subTaskItems, setSubTaskItems] = useState([]);
  const [shouldDisplayIcon, setshouldDisplayIcon] = useState(false);
  const [subItemTaskTopicText, setSubItemTaskTopicText] = useState([]);
  const [TaskIdForTaskCheckList, setTaskIdForTaskCheckList] = useState("");
  const [chatsData, setChatsData] = useState([]);
  const [sectionName, setSectionName] = useState("");
  const [files, setFiles] = useState([]);
  const [taskTopicText, setTaskTopicText] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignedDate, setAssignedDate] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [taskMoreStatus, settaskMoreStatus] = useState([]);
  const [taskMoreStatusId, settaskMoreStatusId] = useState([]);
  const [taskMoreStatusList, settaskMoreStatusList] = useState([]);
  const [taskMoreStatusIdList, settaskMoreStatusIdList] = useState([]);
  const [taskid, setTaskID] = useState("");
  const [taskidForSocket, settaskidForSocket] = useState("");
  const [commentsData, setCommentsData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpennn, setIsModalOpennn] = useState(false);
  const [showStatusList, setshowStatusList] = useState(true);
  const [checklistid, setCheckListId] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [addComent, setAddComent] = useState("");
  const [showCommentsFinal, setShowCommentsFinal] = useState(false);
  const [showChatsFinal, setShowChatsFinal] = useState(false);
  const [isModalChatOpen, setIsModalChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isChatVisible, setChatVisible] = useState(false);
  const inputRef = useRef();
  const inputRefItem = useRef();
  const chatContainerRef = useRef(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const { sendMessage, disconnect, setOnMessageHandler, isWebSocketOpen } =
    useWebSocketServiceForTasks(taskidForSocket);
  const openLightbox = (image) => {
    setLightboxImage(image);
  };
  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const handleIconClickDesc = () => {
    setIsEditingDesc(true);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  // socket manage
  useEffect(() => {
    // Connect on component mount
    // or when taskId changes, depending on your requirements
    setOnMessageHandler((data) => {
      // Handle incoming messages here
      console.log("Received message in MyBoard:", data);

      // Set initial data
      if (data.data) {
        setChatsData(data.data);
      }

      const newData = Array.isArray(data.data) ? data.data : [data];

      // Update state using a callback to avoid issues with asynchronous state updates
      setChatsData((prevNotifications) => {
        const newArray = Array.isArray(prevNotifications)
          ? prevNotifications
          : [];
        return [...newArray, ...newData];
      });
    });

    // Disconnect on component unmount or when taskId changes
    return () => {
      disconnect();
    };
  }, [taskidForSocket]);

  const defaultImage = { index: 0, src: profile };
  let selectedImageSrc = defaultImage.src;
  let selectedImageIndex = defaultImage.index;
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // const send_background = async () => {
  //   console.log("Sending bg:", selectedImageSrc);

  //   const formData = new FormData();
  //   const response = await fetch(selectedImageSrc);
  //   const blob = await response.blob();
  //   console.log(response);
  //   formData.append("user_id", user_id);
  //   formData.append("image", selectedImageSrc);
  //   formData.append("index", selectedImageIndex);

  //   try {
  //     const res = await postDataToAPI(Add_Background, formData);

  //     if (res.success) {
  //       console.log("success");

  //       selectedImageSrc = API_URL + res.data.image;
  //       console.log(selectedImageSrc);
  //       selectedImageIndex = res.data.index;

  //       // Now, you can use selectedImageSrc and selectedImageIndex as needed
  //       console.log("Received response:", res);

  //       // For example, update state or perform any other actions
  //       setSelectedImage(selectedImageSrc);
  //       setSelectedIndex(selectedImageIndex);
  //       console.log("Received selectedImageSrc:", selectedImageSrc);
  //       console.log("Received selectedImageIndex:", selectedImageIndex);
  //     }
  //   } catch (error) {
  //     // toast.error('Please Check Your Internet , Try again! ',{position: "top-center",autoClose: 2000})
  //   } finally {
  //   }
  // };

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
        console.log();
        selectedImageIndex = data.data.index;

        // Now, you can use selectedImageSrc and selectedImageIndex as needed
        console.log("Received response:", data);

        // For example, update state or perform any other actions
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
    // Scroll to the bottom when chatsData or messages change
    Get_Background();
    scrollToBottom();
  }, [chatsData, messages, isChatVisible]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };
  const [usersAssignBoard, setUsersAssignBoard] = useState([]);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setID(searchParams.get("id"));
    const task_id = searchParams.get("t_id");

    if (searchParams.get("id")) {
      setIdFromURL(searchParams.get("id"));
      // GetBoardData(searchParams.get('id'));

      if (task_id) {
        setTaskIdFromURL(task_id);
      }
    }
  }, [location.search]);

  const filteredTasks = (taskList) => {
    if (taskFilter.length === 0) {
      return taskList;
    }

    const isFilterCreatedByMe = taskFilter.includes("Created by me");
    const isFilterAssignedtome = taskFilter.includes("Assigned to me");
    const filteredTasks = taskList.map((section) => {
      return {
        ...section,
        tasks: section.tasks.filter((task) => {
          const createdByUserId = task.created_by?.id;

          if (isFilterCreatedByMe && isFilterAssignedtome) {
            // Both checkboxes selected, show all tasks
            return true;
          } else if (isFilterCreatedByMe && createdByUserId) {
            // Only "Created by me" selected
            return createdByUserId.toString() === user_id.toString();
          } else if (isFilterAssignedtome && createdByUserId) {
            // Only "Assigned to me" selected
            return createdByUserId.toString() !== user_id.toString();
          }

          return false;
        }),
      };
    });

    console.log("Filtered sections:", filteredTasks.length);
    console.log(
      "Filtered tasks:",
      filteredTasks.reduce((total, section) => total + section.tasks.length, 0)
    );
    console.log(user_id.toString());

    return filteredTasks;
  };
  const filteredTaskData = filteredTasks(taskList);
  useEffect(() => {
    // Apply filtering
    const filtered = filteredTaskData.map((section) => ({
      ...section,
      tasks: section.tasks.filter((task) => {
        // Check if any of the task titles match the search query
        return task.title.toLowerCase().includes(searchQuery.toLowerCase());
      }),
    }));
    // Set filtered data
    setFilteredItems(filtered);
  }, [searchQuery, filteredTaskData, updateEffect]);
  // const ttask = filteredItems.tasks
  // console.log(ttask)
  const toggleDropdown = () => {
    setFilterIsOpen(!filterIsOpen);
  };

  const handleViewChange = async (view) => {
    setActiveView(view);
    console.log(`Clicked and active view: ${view}`);
    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("board_view", view);
    formData.append("board_name", "myboard");

    try {
      const res = await postDataToAPI(UpdateSalesView, formData);

      if (res.success) {
        console.log("Success");
      }
    } catch (error) {
    } finally {
    }
  };

  const handleCheckboxChange = (value) => {
    setActiveTaskAssign(value);
    console.log(value);
    console.log(taskFilter);
    if (taskFilter.includes(value)) {
      console.log(taskFilter);
      setTaskFilter(taskFilter.filter((task) => task !== value));
    } else {
      setTaskFilter([...taskFilter, value]);
    }
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const onDragEndTask = (result) => {
    // Log the result of the drag event
    console.log(result);

    // Check if there is no result or no destination for the drag
    if (!result || !result.destination) {
      // No active drag or no destination, do nothing
      return;
    }

    // Destructure relevant data from the result
    const { source, destination, draggableId, type } = result;

    if (source.droppableId === destination.droppableId) {
      return;
    }

    // Update the task status based on draggable and destination IDs
    UpdatetaskStatus(
      draggableId.split("_")[1],
      result.destination.droppableId.split("_")[1]
    );
    console.log(draggableId.split("_")[1]);
    console.log(source.droppableId);
    console.log(destination.droppableId);
    setUpdateEffect(true);

    // Check if the dragged item is a column
    if (type === "COLUMN") {
      // Find the source index of the dragged column
      const sourceIndex = taskList.findIndex(
        (e) => e.id.toString() === draggableId
      );

      // Get the moved section and create a new data array
      const movedSection = taskList[sourceIndex];
      const newData = [...taskList];

      // Remove the section from the old index and insert at the new index
      newData.splice(sourceIndex, 1);
      newData.splice(destination.index, 0, movedSection);

      // Set the updated task list data
      settaskList(newData);
    } else {
      // Find the source and destination section indices
      const sourceSectionIndex = taskList.findIndex(
        (e) => e.id.toString() === source.droppableId
      );
      const destinationSectionIndex = taskList.findIndex(
        (e) => e.id.toString() === destination.droppableId
      );

      // Get the source and destination sections
      const sourceSection = taskList[sourceSectionIndex];
      const destinationSection = taskList[destinationSectionIndex];

      // Get source and destination tasks
      const sourceTasks = sourceSection.tasks;
      const destinationTasks = destinationSection.tasks;

      // Find the moved task within the source tasks
      const movedTask = sourceTasks.find(
        (task) => task.id.toString() === draggableId
      );

      // Check if the task is moved within the same section
      if (source.droppableId === destination.droppableId) {
        // Create a copy of reordered tasks
        const reorderedTasks = Array.from(sourceTasks);

        // Remove the task from the source index and insert at destination index
        reorderedTasks.splice(source.index, 1);
        reorderedTasks.splice(destination.index, 0, movedTask);

        // Update the section with the reordered tasks
        const updatedSection = { ...sourceSection, tasks: reorderedTasks };
        const newData = [...taskList];
        newData.splice(sourceSectionIndex, 1, updatedSection);

        // Set the updated task list data
        settaskList(newData);
      } else {
        // Remove the task from the source tasks and insert into destination tasks
        sourceTasks.splice(source.index, 1);
        destinationTasks.splice(destination.index, 0, movedTask);

        // Update the source and destination sections with updated task lists
        const updatedSourceSection = { ...sourceSection, tasks: sourceTasks };
        const updatedDestinationSection = {
          ...destinationSection,
          tasks: destinationTasks,
        };
        setUpdateEffect(true);
        // Create a new data array and update source and destination sections
        const newData = [...taskList];
        newData.splice(sourceSectionIndex, 1, updatedSourceSection);
        newData.splice(destinationSectionIndex, 1, updatedDestinationSection);

        // Set the updated task list data
        settaskList(newData);
      }
    }
  };
  const UpdatetaskStatus = async (taskid, checklistid, fromwhere) => {
    if (!newStatus.value) {
      newStatus.value = taskStatus;
    }
    const formData = new FormData();
    // formData.append('user_id', user_id);
    formData.append("task_id", taskid);
    formData.append("user_id", user_id);

    if (fromwhere == "details") {
      formData.append("status", newStatus.value);
    } else {
      formData.append("status", checklistid);
    }
    console.log(newStatus.value);

    try {
      const response = await updateTaskStatus(formData);
      console.log(response);
      setUpdateEffect(true);
      if (response.success) {
        console.log("Success");
        console.log(taskStatus);
        console.log(newStatus);
        // closeModall();
        // window.location.reload();
        // ;
        // setNewStatus({ value: '', label: '' });

        if (response.status !== 123) {
          closeModall();
          settaskMoreStatus(newStatus.label);
          settaskMoreStatusId(newStatus.value);
          GetBoardData();
        }

        if (response.status === 123) {
          // alert(response.message)
          toast.error(`${response.message}`, {
            position: "top-center",
            autoClose: 2000,
          });
          return;
        }
        if (response.status === 124) {
          // alert(response.message)
          toast.error(`${response.message}`, {
            position: "top-center",
            autoClose: 2000,
          });
          return;
        }
      } else {
        console.log("unable to update");
      }
    } catch (error) {}
  };

  const GetBoardData = async (id) => {
    setIsLoading(true);
    try {
      //   const params = {
      //     user_id: localStorage.getItem("VIBEUSERID"),
      //   };

      const response = await getVibeMyBoardTask(user_id);
      console.log(response);

      if (response.success) {
        console.log("success");
        settaskList(response.data);
        console.log(response.data);
        const updatedView = response.board_view;
        console.log(updatedView);
        setActiveView(updatedView ? updatedView : "Kanban");
        console.log(taskList);

        // const progress = taskList.tasks[0].progress_percentage; // Assuming API returns data in the format specified in your example
        setProgressPercentage(response.data.tasks?.progress_percentage);
        console.log("--------------");
        console.log(progressPercentage);
        setIsLoading(false);

        // setProjectList(response.data.data.Boards);
      } else {
        console.log("Something went wrong");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    GetBoardData();
  }, [updateEffect, modalTaskSelfIsOpen]);

  const openTaskSelf = () => {
    // localStorage.setItem('board', board_id);
    closeTaskSelf();
    setTaskSelfModalIsOpen(true);
    console.log(modalTaskSelfIsOpen);
  };

  const closeTaskSelf = () => {
    setTaskSelfModalIsOpen(false);
  };

  const openEmployeeTaskOthers = () => {
    closeTaskOthers();
    setTaskSelfModalIsOpen(true);
  };

  const ShowFormatedDueDateOnDateField = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const [taskDeleteID, setTaskDeleteID] = useState("");

  function openModalDeleteTask(taskId, event) {
    event.stopPropagation();
    console.log(taskId);
    setTaskDeleteID(taskId);
    setIsModalOpenDeleteTask(true);
    setIsModalChatOpen(false);
    console.log(isModalOpenDeleteTask);
  }

  const handleDeleteTask = async () => {
    settaskList((prevTaskList) => {
      console.log(prevTaskList);

      const updatedTaskList = JSON.parse(JSON.stringify(prevTaskList));

      const boardIndex = updatedTaskList.findIndex((board) =>
        board.tasks.some((task) => task.id === taskDeleteID)
      );

      if (boardIndex !== -1) {
        const taskIndex = updatedTaskList[boardIndex].tasks.findIndex(
          (task) => task.id === taskDeleteID
        );

        if (taskIndex !== -1) {
          updatedTaskList[boardIndex].tasks.splice(taskIndex, 1);
        }
      }

      return updatedTaskList;
    });

    const taskIdToDelete = taskDeleteID.split("_")[1];
    const deleteTaskResp = await deleteVibeTask(user_id, taskIdToDelete);
    console.log(deleteTaskResp);
    toast.success("Task Deleted Successfully");
    setIsModalOpenDeleteTask(false);

    // .then((res) => {
    //   if (res.success) {
    //     // window.location.reload();
    //     toast.info("Task has been moved to Trash", {
    //       position: "top-center",
    //       autoClose: 2000,
    //     });
    //     console.log("Task deleted successfully");
    //     closeModalDeleteTask();
    //   } else {
    //     if (res.success === false)
    //       toast.info("Task has been Failed to delete task", {
    //         position: "top-center",
    //         autoClose: 2000,
    //       });
    //     window.location.reload();
    //     console.error("Failed to delete task.");
    //   }
    // })
    // .catch((error) => {
    //   console.error("An error occurred:", error);
    // });
  };

  const fetchOrg_assignAlready = async (id, taskid) => {
    const user_id = localStorage.getItem("VIBEUSERID");

    const params = {
      user_id: user_id,
      task_id: taskid,
    };
    try {
      const jsonData = await getVibeTaskUserAssign(user_id, taskid);
      if (jsonData.success) {
        console.log("GetTaskUsersAssign");
        console.log(jsonData.data);
        const usersData = jsonData.data;

        setUsersAssignAlready(usersData);
        setShowStatusChecklist1(jsonData.data.email);
        console.log("api assigned");
        console.log(setShowStatusChecklist1);

        const selectedEmails = usersData.map((user) => ({
          value: user.id,
          label: user.email,
        }));

        console.log(selectedEmails);
        setSelectedEmail(selectedEmails);

        const selectedEmailsisTaskAssignedTo = usersData.map((user) => ({
          email: user.id,
        }));
        const isTaskAssignedTo = selectedEmailsisTaskAssignedTo.some(
          (user) => user.email === parseInt(user_id, 10)
        );

        console.log(selectedEmailsisTaskAssignedTo);
        console.log(isTaskAssignedTo);
        setIsTaskAssignedTo(isTaskAssignedTo);
      } else {
        console.log("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const Get_Task_Attachment = async (task_id) => {
    //alert(user_id);
    try {
      // const params = {
      //   task_id: task_id,
      //   user_id: localStorage.getItem("user_id"),
      // };

      const data = await getVibeTaskAttachment(user_id, task_id);

      if (data.success) {
        // alert("attachments success")
        console.log("attachments sucess");

        console.log(data.data);
        setFiles(data.data);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const Get_Checklist_Task = async (task_id) => {
    try {
      // const params = {
      //   task_id: task_id,
      //   user_id: user_id,
      // };

      const data = await getVibeTaskChecklist(user_id, task_id);

      if (data.success) {
        console.log("checklist task success");
        console.log(data.data);
        // const taskTopics = data.data.tasks;
        const taskTopics = data.data;
        setItems(taskTopics);

        const extractedNames = data.data.map((item) => item.name);

        setItemTaskTopicText(extractedNames);
        console.log(extractedNames);

        const extractedChecklist = data.data.map((item) => item.completed);

        setIsCompleted(extractedChecklist);
        console.log(extractedChecklist);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const Get_SubChecklist_Task = async (task_id) => {
    try {
      // const params = {
      //   task_id: task_id,
      //   user_id: user_id,
      // };

      const data = await getVibeSubTaskChecklist(user_id, task_id);

      if (data.success) {
        console.log("checklist task success");
        console.log(data.data);
        console.log(data.data.subtasks);
        // const taskTopics = data.data.tasks;
        const subTaskTopics = data.data.subtasks;
        setSubTaskItems(subTaskTopics);
        console.log(subTaskTopics);

        // Check for due_date in subtasks and subtaskchild_set
        const hasNullDueDate = subTaskTopics.some((task) => {
          if (!task.due_date) return true;
          return task.subtaskchild_set.some((subtask) => !subtask.due_date);
        });
        setshouldDisplayIcon(hasNullDueDate);

        // setShouldDisplaySpan(hasNullDueDate);

        // const extractedNamesTask = data.data.checklist.map(checklistItem => (
        //   checklistItem.checklist_tasks.map(task => ({
        //     id: task.id,
        //     taskTopic: task.task_topic,
        //   }))
        // ));

        // console.log(extractedNamesTask);

        //   // Create an object to map subtask topics to their respective IDs
        // const subtaskTopicMapping = {};
        // extractedNamesTask.forEach(checklistItem => {
        //   checklistItem.forEach(task => {
        //     subtaskTopicMapping[task.id] = task.taskTopic;
        //   });
        // });

        // console.log(subtaskTopicMapping);

        // Now set the subtask topics based on their respective IDs
        const subItemTaskTopics = data.data.subtasks.map(
          (checklistItem) => checklistItem.task_topic
        );
        console.log(subItemTaskTopics);
        // const extractedNames = data.data.map(item => item.name);
        setSubItemTaskTopicText(subItemTaskTopics);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const Get_Chat_nd_Activities = async (Task_id) => {
    try {
      // const params = {
      //   task_id: Task_id,
      //   user_id: user_id,
      // };

      const data = await getVibeActionAndChat(user_id, Task_id);

      if (data.success) {
        console.log(data);
        setChatsData(data.data);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const downloadFile = async (imagePath) => {
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      const fileName = imagePath.split("/").pop();
      link.download = fileName;
      link.click();
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  const [message, setMessage] = useState("");

  const send_msg = async (message) => {
    console.log("Sending message:", message);
    if (message === "") {
      return;
    }
    const formData = new FormData();
    formData.append("task_id", taskid);
    formData.append("sender_id", user_id);
    formData.append("message", message);

    try {
      const res = await postVibeTaskChat(formData);
      console.log(res);
      if (res.success) {
        setMessage("");
        console.log("success sending chat");
        // setChatsData(res.data.chats)
      }
    } catch (error) {
      // toast.error('Please Check Your Internet , Try again! ',{position: "top-center",autoClose: 2000})
      console.log("chat error", error);
    }
  };
  const fileInputRef = useRef(null);

  const handleFileChangeForChatFile = (e) => {
    const file = e.target.files[0];

    send_msg(file);
    // Handle the file logic here
  };
  const renderMessageContent = (message, file_size) => {
    if (message.startsWith("employee/chat_files/")) {
      console.log(message);
      // If the message is a file path
      const fileExtension = message.split(".").pop().toLowerCase();

      if (["jpg", "jpeg", "png", "gif"].includes(fileExtension)) {
        // If the file is an image, render the image
        return (
          <div style={{ position: "relative" }}>
            <img
              // src={profile}
              src={"https://vibecopilot.ai/api/media/" + message}
              // src={getVibeMedia + "/" + message}
              alt="Chat Image"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
              // onClick={() => downloadFile(Media + "/" + message)}
              onClick={() =>
                openLightbox("https://vibecopilot.ai/api/media/" + message)
              }
              className="cursor-pointer"
            />
            <span
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                padding: "8px",
                // backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
              className="flex gap-2 w-full justify-end bg-gray-100"
            >
              <span style={{ fontSize: "12px", color: "red" }}>
                {file_size}
              </span>
              <FaDownload
                style={{
                  fontSize: "14px",
                  color: "#28a745",
                  marginLeft: "10px",
                }}
                className="cursor-pointer"
                onClick={() => downloadFile(getVibeMedia + "/" + message)}
              />
            </span>
          </div>
        );
      } else {
        const fileExtension = message.split(".").pop().toLowerCase();
        // Define icons for specific file types
        const fileTypeIcons = {
          jpg: FaFileImage,
          jpeg: FaFileImage,
          png: FaFileImage,
          gif: FaFileImage,
          pdf: FaFilePdf,
          doc: FaFileWord,
          docx: FaFileWord,
          xls: FaFileExcel,
          xlsx: FaFileExcel,
          ppt: FaFilePowerpoint,
          pptx: FaFilePowerpoint,
        };
        // Choose the appropriate icon based on the file extension
        const FileIcon = fileTypeIcons[fileExtension] || FaFileAlt;
        // If the file is not an image, render a generic file message
        return (
          // <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
              border: "1px solid #ddd",
              color: "black",
              borderRadius: "8px",
              marginBottom: "8px",
              cursor: "pointer", // Add cursor style to indicate clickability
            }}
            onClick={() => downloadFile(getVibeMedia + "/" + message)}
          >
            <FileIcon style={{ marginRight: "15px", fontSize: "20px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginRight: "12px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  wordWrap: "break-word",
                  color: "black",
                }}
              >
                {message.split("/").pop()}
              </p>
              <span style={{ fontSize: "12px", color: "#c9caca" }}>
                {file_size}
              </span>
            </div>
            <FaDownload style={{ fontSize: "14px", color: "#28a745" }} />
          </div>
        );
      }
    } else {
      // Otherwise, render the text message
      return <div className="text-black ">{message}</div>;
    }
  };

  const to_show_status_on_details = async (status) => {
    console.log("-----------------------------");
    console.log(status);
    settaskMoreStatus(status.status_name);
    settaskMoreStatusId(status.id);
  };

  const GetComment = async (id) => {
    console.log(user_id);
    try {
      // const params = {
      //   task_id: id,
      //   user_id: localStorage.getItem("user_id"),
      // };

      const data = await getVibeComments(user_id, id);
      console.log(data);
      if (data.success) {
        console.log("success");
        console.log(data);
        setCommentsData(data.data);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openChatModal = (
    taskId,
    createdFirst,
    createdSecond,
    createdDate,
    due_dte,
    created_by_id
  ) => {
    const dateTimeString = due_dte ? due_dte.split("+")[0] : "";
    // Parse the date and time string into a Date object
    const targetDate = new Date(dateTimeString);

    // const formattedDate = targetDate.toLocaleString(); // Adjust the formatting as needed

    setCreatedFirstName(createdFirst);
    setCreatedSecondName(createdSecond);
    setCreatedDate(createdDate);
    // setdueDate(due_dte)
    // setdueDate(targetDate)
    // setDueDate(targetDate)
    setDueDate(due_dte ? targetDate : "");
    setcreatedBy_id(created_by_id);
    // setChatsData([])
    // fetchData(taskId.split('_')[1])
    fetchOrg_assignAlready(id, taskId.split("_")[1]);
    console.log("oko ok koo ");
    Get_Task_Attachment(taskId.split("_")[1]);
    Get_Checklist_Task(taskId.split("_")[1]);
    Get_SubChecklist_Task(taskId.split("_")[1]);
    Get_Chat_nd_Activities(taskId.split("_")[1]);
    setTaskIdForTaskCheckList(taskId.split("_")[1]);
    const task = taskList
      .flatMap((section) => section.tasks)
      .find((task) => task.id.toString() === taskId);
    if (task) {
      const section = taskList.find((section) =>
        section.tasks.some((t) => t.id.toString() === taskId)
      );
      if (section) {
        setSectionName(section.title);
      }
      setTaskTopicText(task.title);
      setTaskDescription(task.description);
      setTaskStatus(task.status);
      to_show_status_on_details(task.status);
      setAttachments(task.attachments || []);
      setAssignedDate(task.due_date || "");

      //   console.log(setAssignedDate)
      // Add your code to open the chat modal here
      console.log(taskId);
      // GetChats(taskId.split('_')[1])

      setTaskID(taskId.split("_")[1]);
      settaskidForSocket(taskId.split("_")[1]);
      GetComment(taskId.split("_")[1]);
      setIsModalChatOpen(true);
    }
  };

  const UpdateUserTask = async (taskid) => {
    // alert('update user task')

    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("task_id", taskid);
    formData.append("task_topic", taskTopicText);
    formData.append("task_description", taskDescription);
    // formData.append('due_date',dueDate);

    try {
      const response = await updateVibeUserTask(formData);
      console.log(response);
      if (response.success) {
        console.log("Success");
        // window.location.reload();
      } else {
        console.log("unable to update");
      }
    } catch (error) {}
  };

  const modalStyleChatName = {
    content: {
      // width: isMobile ? '270px' : '950px',
      // width: (isChatVisible ? '950px' : '600px'),

      height: "500px",
      margin: "auto",
      backgroundColor: "#133953",
      borderRadius: 10,
      padding: "20px", // Add padding to the content for spacing
    },
    overlay: {
      zIndex: 1000, // Adjust the overlay z-index to avoid conflicts with other elements
    },
  };

  const closeChatModal = () => {
    setIsModalChatOpen(false);
    GetBoardData();
    // window.location.reload();
  };
  const handleIconClickText = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleToggleComments = (type) => {
    console.log(type);
    if (type === "chat" && showComments) {
      if (!showChatsFinal) {
        setShowChatsFinal(true);
        setShowCommentsFinal(false);
        setShowComments(!showComments);
      } else {
        setShowChatsFinal(false);
      }
    } else if (type === "comments" && !showComments) {
      if (!showCommentsFinal) {
        setShowCommentsFinal(true);
        setShowChatsFinal(false);
        setShowComments(!showComments);
      } else {
        setShowCommentsFinal(false);
      }
    }
  };

  const openModalChatWeb = () => {
    // Get the desired timestamp, for example, the current time
    // const currentTime = new Date();

    // // Set the lastMessageTimestamp to the desired timestamp
    //   setLastMessageTimestamp(currentTime);
    setChatVisible(true);
  };

  const closeChatModalWeb = () => {
    setChatVisible(false);
  };

  const fetchOrg_assignData = async (taskid) => {
    // const user_id = localStorage.getItem("user_id");
    // const org_id = localStorage.getItem("organization_id");

    // const params = {
    //   user_id: user_id,
    //   // task_id: taskid,
    //   // org_id: org_id
    // };
    try {
      // GetUsers
      const jsonData = await getVibeUsers(user_id);
      if (jsonData.success) {
        console.log(jsonData.data);
        const usersData = jsonData.data;

        setUsersAssignBoard(usersData);
        // setShouldFetchUsers(true); // Reset the state to prevent repeated API calls
      } else {
        console.log("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleIconClick = () => {
    fetchOrg_assignAlready(id, taskid);
    fetchOrg_assignData(taskid); //list
    // setShouldFetchUsers(true);
    setIsModalOpen(true);
  };

  const modalAssign = usersAssignBoard.map((user) => ({
    value: user.user_id,
    label: user.email,
  }));

  const handleDropdownItemClick = (selectedOption) => {
    setSelectedEmail(selectedOption);
    const canceled = selectedEmail.filter(
      (email) => !selectedOption.includes(email)
    );
    if (canceled.length > 0) {
      const canceledEmailsData = canceled.map((email) => ({
        id: email.value,
        email: email.label,
      }));
      setUsersAssignBoard((prevUsersAssignBoard) => [
        ...prevUsersAssignBoard,
        ...canceledEmailsData,
      ]);
    }
  };

  const handleConfirmClick = () => {
    const idList = selectedEmail.map((email) => parseInt(email.value));
    console.log(idList);
    Update_Assigned_Task(idList);
    console.log(selectedEmail);
    const labelList = selectedEmail.map((email) => email.label).join(", ");

    // Logging the result
    console.log(labelList);

    // Setting the state or performing further actions if needed
    setShowStatusChecklist1(labelList);
    // setIsDropdownOpen(false);
    setIsModalOpen(false);
  };

  const Update_Assigned_Task = async (idList) => {
    console.log(idList);
    const formData = new FormData();
    formData.append("task_id", taskid);
    // idList.forEach((ids) => {
    //   formData.append('assign_to', ids);
    // });
    const assignToValues = idList.join(",");
    formData.append("assign_to", assignToValues);

    formData.append("user_id", user_id);
    try {
      const response = await updateVibeAssignedUser(formData);
      console.log(response);
      if (response.success) {
        console.log("Success");
        // Get_Checklist_Task(taskid)
        // GetBoardData();
        // setShowStatusChecklist1(assignToValues)
      } else {
        console.log("unable to update");
      }
    } catch (error) {
      // toast.error('Please Check Your Internet , Try again! ',{position: "top-center",autoClose: 2000})
    }
  };

  const closeModal = () => {
    setSelectedEmail(null);
    setIsModalOpen(false);
    // window.location.reload();
  };
  const datePickerRef = useRef(null);
  const [TempdueDate, setTempdueDate] = useState(null);
  const handleDueDateClick = () => {
    setIsModalOpennn(true);
  };
  const handleModalClose = () => {
    setTempdueDate(null);
    // GetBoardData();
    setIsModalOpennn(false);
    // window.location.reload();
  };
  const filterTime = (time) => {
    const selectedDate = new Date(time);
    const currentDate = new Date();

    // Compare selected date with current date
    if (selectedDate.getTime() > currentDate.getTime()) {
      return true; // Future date
    } else if (selectedDate.getTime() === currentDate.getTime()) {
      // If selected date is today, compare times
      const selectedTime =
        selectedDate.getHours() * 60 + selectedDate.getMinutes();
      const currentTime =
        currentDate.getHours() * 60 + currentDate.getMinutes();
      return selectedTime >= currentTime; // Future time
    } else {
      return false; // Past date
    }
  };

  const Get_Status = async () => {
    try {
      // const params = {
      //   user_id: localStorage.getItem("user_id"),
      // };

      const response = await getVibeStatus(user_id);

      if (response.success) {
        console.log("success");
        console.log(response.data);
        settaskMoreStatus(response.data[0].status_name);
        settaskMoreStatusId(response.data[0].id);
        // settaskMoreStatusList(response.data.status_name)
        // settaskMoreStatusIdList(response.data.id)

        const statusOptionsdata = response.data.map((status) => ({
          value: status.id,
          label: status.status_name,
        }));
        settaskMoreStatusList(statusOptionsdata.map((option) => option.label));
        settaskMoreStatusIdList(
          statusOptionsdata.map((option) => option.value)
        );
        console.log(response.data[0].status_name);
        console.log(response.data[0].id);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    Get_Status();
  }, []);

  const [isModalOpenn, setIsModalOpenn] = useState(false);
  const [editedTaskId, setEditedTaskId] = useState(null);
  const openStatusModall = (taskupdateid, currentTaskStatus) => {
    console.log(currentTaskStatus);
    console.log(taskupdateid);
    setIsModalOpenn(true);
    setEditedTaskId(taskupdateid);
    setNewStatus({ value: currentTaskStatus, label: currentTaskStatus });
  };

  const closeStatusModall = () => {
    setIsModalOpenn(false);
    setEditedTaskId(null);
    setNewStatus({ value: "", label: "" });
  };
  const handleStatusChange = (selectedOption) => {
    console.log(selectedOption);
    setNewStatus(selectedOption);
    // setshowStatusList((prevCheck) => ({
    //   ...prevCheck,
    //   status: selectedOption.value, // Assuming the status is stored in the 'value' property
    // }));
  };
  const statusOptions = taskMoreStatusList.map((status, index) => ({
    value: taskMoreStatusIdList[index],
    label: status,
  }));

  const truncateString = (inputString, maxLength) => {
    if (inputString.length > maxLength) {
      return inputString.substring(0, maxLength) + "...";
    }
    return inputString;
  };
  const handleDateChange1 = (date) => {
    console.log("==================================");
    console.log(date);
    setTempdueDate(date);
    // Update the selected date in the state
    // Update_Task_Duedate(user_id, taskid, date);
  };
  const Update_Task_Duedate = async (user_id, taskid, gdueDate) => {
    if (!dueDate) {
      return;
    }

    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("task_id", taskid);
    formData.append("due_date", SendDueDateFormat(gdueDate));

    try {
      const res = await updateVibeUserTask(formData);

      if (res.success) {
        console.log("Success");
        setDueDate(dueDate);
        //window.location.reload();
      }
    } catch (error) {
    } finally {
    }
  };
  const [subTaskIdForDueDateRequest, setSubTaskIdForDueDateRequest] =
    useState(null);
  const [subTaskDueDateRequest, setSubTaskDueDateRequest] = useState("");
  const [isModalOpenSubDateRequest, setIsModalOpenSubDateRequest] =
    useState(false);
  const handleDueDateClickSubDateRequest = (checksubtaskid, due_date) => {
    console.log(checksubtaskid);
    console.log(due_date);

    if (!dueDate) {
      toast.warning("Please add a due date before proceeding.", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }

    if (due_date) {
      // Split the due_date string to remove any timezone information
      const dateTimeString = due_date.split("+")[0];
      // Parse the date and time string into a Date object
      const targetDate = new Date(dateTimeString);
      // Set state variables
      setSubTaskIdForDueDateRequest(checksubtaskid);
      setSubTaskDueDateRequest(targetDate); // check this again
      setIsModalOpenSubDateRequest(true);
    } else {
      setSubTaskIdForDueDateRequest(checksubtaskid);
      setIsModalOpenSubDateRequest(true);
      // Handle case where due_date is null
      console.error("Due date is null");
    }
  };

  return (
    <section
      className="flex"
      style={{
        background: `url(${selectedImage})no-repeat center center / cover`,
      }}
    >
      <Navbar />

      <div className="p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        <div>
          <div className="flex justify-between md:flex-row flex-col">
            <div className="flex gap-4 items-center">
              <div
                className=" flex gap-2 items-center"
                //   style={{
                //     borderRadius: 50,
                //     color: "#fff",
                //     display: "flex",
                //     height: 40,
                //   }}
              >
                <div
                  className={`${
                    activeView !== "Kanban"
                      ? "border-2 text-black border-black font-medium"
                      : "text-white"
                  } p-1 px-4 rounded-md`}
                  title="Kanban View"
                  style={{
                    // color: activeView === "Kanban" ? "skyblue" : "#fff",
                    background: activeView === "Kanban" ? themeColor : "",
                    textAlign: "center",
                    // textDecoration:
                    //   activeView === "Kanban" ? "" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleViewChange("Kanban")}
                >
                  Kanban
                </div>
                {/*  */}
                <div
                  className={`${
                    activeView !== "List"
                      ? "border-2 text-vlack border-black font-medium"
                      : "text-white"
                  } p-1 px-4 rounded-md`}
                  title="List View"
                  style={{
                    // color: activeView === "List" ? "skyblue" : "#fff",
                    // background: themeColor,
                    background: activeView === "List" ? themeColor : "",
                    // textDecoration:
                    //   activeView === "List" ? "underline" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleViewChange("List")}
                >
                  List
                </div>
              </div>

              <div className="relative inline-block text-left">
                <button
                  style={{ background: themeColor }}
                  className="p-1   text-white rounded-md flex gap-2 items-center"
                  title="Filter Task"
                  type="button"
                  onClick={toggleDropdown}
                >
                  <span className="dropdown-text">
                    <FaFilter />
                  </span>
                  <span className="ml-2">&#9660;</span> {/* Down arrow */}
                </button>
                {filterIsOpen && (
                  <ul
                    style={{ background: themeColor }}
                    className="absolute left-0 mt-2 w-48  rounded-md shadow-lg z-10"
                  >
                    <li className="px-2 py-1 hover:bg-gray-300 rounded-t-md">
                      <label className="text-white">
                        <input
                          name="options[]"
                          type="checkbox"
                          className="mr-2"
                          value="Created by me"
                          checked={taskFilter.includes("Created by me")}
                          onChange={() => handleCheckboxChange("Created by me")}
                        />
                        Created by me
                      </label>
                    </li>
                    <li className="px-2 py-1 hover:bg-gray-300 rounded-b-md">
                      <label className="text-white">
                        <input
                          name="options[]"
                          type="checkbox"
                          className="mr-2"
                          value="Assigned to me"
                          checked={taskFilter.includes("Assigned to me")}
                          onChange={() =>
                            handleCheckboxChange("Assigned to me")
                          }
                        />
                        Assigned to me
                      </label>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div
              className=""
              style={{
                display: "flex",
                justifyItems: "center",
                alignItems: "flex-end",
                flexDirection: "column",
              }}
            >
              <input
                className="border border-gray-400 outline-none w-[20rem]"
                spellCheck="true"
                type="search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search Title ..."
                style={{
                  // border: "1px solid #838485",
                  borderRadius: 8,
                  paddingTop: 6,
                  paddingBottom: 5,
                  paddingLeft: 10,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              />
            </div>
          </div>
          {activeView === "Kanban" && (
            <section
              style={
                {
                  //   overflowX: 'auto', // Enable horizontal scrolling
                  //   // overflowY: 'hidden',
                  // scrollbarWidth: 'thin',
                  // scrollbarColor: '#888 #ddd',
                  //   overflowY:'scroll',
                  //   // minHeight: 530
                  //   // minHeight: 630
                  //   // minHeight: 730
                  //   // height:'auto'
                  //   // minHeight: '100%',
                }
              }
              // scrollable-content section-table-height
              className="h-full overflow-x-auto scroll  rounded-md "
            >
              <div className="">
                <DragDropContext onDragEnd={onDragEndTask}>
                  <div className="flex gap-4  justify-between">
                    {isLoading ? (
                      <div
                        className="flex justify-center w-full"
                        style={{ textAlign: "center" }}
                      >
                        <center className="m-4">
                          <div
                            className="spinner-border"
                            style={{ opacity: 0.3 }}
                            role="status"
                          >
                            <span className="sr-only"></span>
                          </div>
                          <br />
                          <span style={{ opacity: 0.6 }}>Please wait...</span>
                        </center>
                      </div>
                    ) : filteredItems.length > 0 ? (
                      filteredItems.map((section, index) => (
                        <Droppable
                          key={section.id.toString()}
                          droppableId={section.id.toString()}
                        >
                          {(provided) => (
                            <div
                              className=""
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                            >
                              <div
                                className="p-2 text-white rounded-md text-center my-2 w-72"
                                style={{
                                  background: themeColor,
                                }}
                              >
                                <b>{section.title}</b>
                              </div>

                              <div
                                className=""
                                style={{ maxHeight: 400, overflow: "auto" }}
                              >
                                {section.tasks.map((task, index) => (
                                  <Draggable
                                    key={task.id.toString()}
                                    draggableId={task.id.toString()}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      const isHighlighted =
                                        task.id.split("_")[1] == idFromURL;
                                      // const cardRef = useRef(null); // Create a ref for the card div

                                      // useEffect(() => {
                                      //   if (isHighlighted && cardRef.current) {
                                      //     cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                      //   }
                                      // }, [isHighlighted]);

                                      return (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            ...provided.draggableProps.style,
                                            opacity: snapshot.isDragging
                                              ? "0.7"
                                              : "1",
                                            color: "#000",
                                          }}
                                        >
                                          <div
                                            // ref={cardRef}
                                            className="rounded-xl bg-white shadow-custom-all-sides text-black p-2 m-2"
                                            style={{
                                              backgroundColor: "",
                                              animation: isHighlighted
                                                ? " color 15s"
                                                : null,

                                              // color: "#fff",
                                              // fontSize: "16",
                                              // minHeight: 30,
                                              // marginBottom: 8,
                                              // padding: 6,
                                              // marginTop: 2,
                                              // marginLeft: 3,
                                              // marginRight: 3,
                                            }}
                                            onClick={() =>
                                              openChatModal(
                                                task.id,
                                                task.created_by.firstname,
                                                task.created_by.lastname,
                                                task.created_at,
                                                task.due_date,
                                                task.created_by.id
                                              )
                                            }
                                          >
                                            <div
                                              className=""
                                              style={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                              }}
                                            >
                                              {task.urgent_status === true && (
                                                <span
                                                  style={{
                                                    backgroundColor: "#00b272",
                                                    color: "#fff",
                                                    borderRadius:
                                                      "0px 10px 0px 5px",
                                                    // fontSize: 12,
                                                    margin: "-6px",
                                                  }}
                                                  className="px-2 my-1"
                                                >
                                                  <b>Urgent</b>
                                                </span>
                                              )}
                                            </div>
                                            <div className="font-medium my-2">
                                              {task.title}
                                            </div>

                                            {showStatus ? (
                                              <div
                                                style={{ display: "flex" }}
                                                className="justify-end"
                                              >
                                                {" "}
                                                <div
                                                  onClick={(e) => {
                                                    e.stopPropagation();
                                                    setshowStatus(false);
                                                  }}
                                                  className="mx-2 px-4"
                                                  style={{
                                                    textAlign: "center",
                                                    cursor: "pointer",
                                                    fontSize: 12,
                                                    borderRadius: 20,
                                                    color: "white",
                                                    // padding: "1px",
                                                    // marginTop: "4px",
                                                    width: "auto",
                                                    backgroundColor: `${task.status.color}`,
                                                  }}
                                                >
                                                  {task.status.status_name}
                                                </div>
                                                {task.reopened_count > 0 ? (
                                                  <div
                                                    className=""
                                                    style={{
                                                      width: 90,
                                                      textAlign: "center",
                                                      marginLeft: 0,
                                                      fontSize: 12,
                                                      cursor: "default",
                                                      backgroundColor:
                                                        "#d33115",
                                                      borderRadius: 10,
                                                      color: "white",
                                                    }}
                                                  >
                                                    {" "}
                                                    Reopened :{" "}
                                                    {task.reopened_count}
                                                  </div>
                                                ) : (
                                                  <div></div>
                                                )}
                                              </div>
                                            ) : (
                                              <div style={{ display: "flex" }}>
                                                <div
                                                  onClick={(e) => {
                                                    e.stopPropagation();
                                                    setshowStatus(true);
                                                  }}
                                                  className="mr-1"
                                                  style={{
                                                    textAlign: "center",
                                                    cursor: "pointer",
                                                    fontSize: 5,
                                                    borderRadius: 10,
                                                    color: "white",
                                                    padding: "1px",
                                                    marginTop: "4px",
                                                    width: "36px",
                                                    height: "8px",
                                                    backgroundColor: `${task.status.color}`,
                                                    // backgroundColor: statusColors[task.status.status_name.toLowerCase()] || statusColors[task.status.color]
                                                  }}
                                                ></div>
                                                {task.reopened_count > 0 ? (
                                                  <div
                                                    className="mt-1"
                                                    style={{
                                                      width: 90,
                                                      textAlign: "center",
                                                      marginLeft: 0,
                                                      fontSize: 10,
                                                      cursor: "default",
                                                      backgroundColor:
                                                        "#d33115",
                                                      borderRadius: 10,
                                                      color: "white",
                                                    }}
                                                  >
                                                    {" "}
                                                    Reopened :{" "}
                                                    {task.reopened_count}
                                                  </div>
                                                ) : (
                                                  <div></div>
                                                )}
                                              </div>
                                            )}

                                            <div
                                              className="font-medium"
                                              style={{
                                                fontSize: 13,
                                                cursor: "default",
                                              }}
                                            >
                                              Created By :{" "}
                                              {task.created_by.firstname}{" "}
                                              {task.created_by.lastname}
                                            </div>
                                            {/* <div className=' row col-md-12' style={{fontSize:13}}>Assign By : {task.created_by.firstname} {task.created_by.lastname}</div> */}

                                            {/* <div className='row col-md-12'id="progress-bar">              
                                        
                                          <div id="progress" style={{ width: `${progressPercentage}%` }}>
                                          </div>
                                    
                                        </div> */}
                                            <div className=" row col-md-12 mt-1">
                                              {section.title !== "Done" &&
                                                section.title !==
                                                  "In Review" && (
                                                  <div
                                                    className="col-md-8 p-0"
                                                    style={{
                                                      fontSize: 13,
                                                      display: "flex",
                                                      justifyContent:
                                                        "flex-start",
                                                    }}
                                                  >
                                                    {/* {calculateRemainingTime(task.due_date)} */}
                                                    <RemainingTime
                                                      dueDate={task.due_date}
                                                    />
                                                  </div>
                                                )}
                                            </div>

                                            <div className="m-1 mt-2">
                                              {/* <LinearProgress
                                              style={{
                                                borderRadius: 4,
                                                height: 6,
                                              }}
                                              variant="determinate"
                                              value={task.progress_percentage}
                                            /> */}
                                              <LinearProgressBar
                                                progress={
                                                  task.progress_percentage
                                                }
                                              />
                                            </div>
                                            <div className="flex justify-between">
                                              <div
                                                className=""
                                                style={{ fontSize: 13 }}
                                              >
                                                {task.division}
                                              </div>
                                              {/* <div className='col-md-6'style={{fontSize:13,display:'flex', justifyContent:'flex-end'}}>{calculateRemainingTime(task.due_date)}</div> */}
                                              {/* {section.title !== 'Done' && section.title !== 'In Review' && (
                                            <div className='col-md-8' style={{ fontSize: 13, display: 'flex', justifyContent: 'flex-end' }}>
                                         
                                              <RemainingTime dueDate={task.due_date} />
                        
                                            </div>
                                          )} */}
                                              <div
                                                className="col-md-8 pr-0"
                                                style={{
                                                  fontSize: 13,
                                                  display: "flex",
                                                  justifyContent: "flex-end",
                                                }}
                                              >
                                                {`${task.progress_percentage}%`}{" "}
                                              </div>
                                            </div>
                                            <div className="w-full border border-dashed"></div>
                                            <div
                                              className="flex justify-between my-2 "
                                              // style={{ marginTop: "4px" }}
                                            >
                                              <div
                                                // className="col-md-10 "
                                                style={{
                                                  fontSize: 11,
                                                  // paddingTop: "6px",
                                                  color: "darkgray",
                                                }}
                                              >
                                                {ShowFormatedDueDateOnDateField(
                                                  task.due_date
                                                )}
                                              </div>
                                              {/* <div className='col-md-4' style={{ fontSize: 10, paddingTop: '6px', color: 'darkgray' }}>
                                            {task.progress_percentage}%
                                          </div> */}

                                              {task.created_by.id ===
                                              user_id ? (
                                                <>
                                                  <div
                                                    className="flex justify-end text-red-400"
                                                    onClick={(event) =>
                                                      openModalDeleteTask(
                                                        task.id,
                                                        event
                                                      )
                                                    }
                                                  >
                                                    <FaTrashAlt
                                                      style={{
                                                        // color: "red",
                                                        marginBottom: 4,
                                                        cursor: "pointer",
                                                      }}
                                                    ></FaTrashAlt>
                                                  </div>
                                                </>
                                              ) : null}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </div>
                              {/* {section.title == "Pending"  ? (
                            // <div className='col-md-12 mb-0 ' style={{ fontSize: '16', border: '2px solid #30678edc', padding: '4px 6px', borderRadius: 6, height: 40, color: '#dcdcdc' }} onClick={openTaskSelf}><i class="fa fa-plus ml-2 mr-2" style={{}}></i> Add Task</div>
                            <div className='col-12 col-md-12 mb-0 mt-1 add-task-btn' style={{ cursor:'pointer'}} onClick={openTaskSelf} >
                            <i class="fa fa-plus ml-2 mr-2"></i> Add Task
                            </div>


                          ) : (
                            null
                          )} */}

                              {section.fixed_state === "Pending" && (
                                <>
                                  {(() => {
                                    const pendingSections =
                                      filteredTaskData.filter(
                                        (sec) => sec.fixed_state === "Pending"
                                      );
                                    if (pendingSections.length > 0) {
                                      const leastOrderSection =
                                        pendingSections.reduce(
                                          (prev, current) => {
                                            if (prev.order === current.order) {
                                              // If order is the same, compare section indexes
                                              const prevIndex =
                                                filteredTaskData.findIndex(
                                                  (sec) => sec.id === prev.id
                                                );
                                              const currentIndex =
                                                filteredTaskData.findIndex(
                                                  (sec) => sec.id === current.id
                                                );
                                              return prevIndex < currentIndex
                                                ? prev
                                                : current;
                                            }
                                            return prev.order < current.order
                                              ? prev
                                              : current;
                                          }
                                        );

                                      // Check if the least order section matches the current section in iteration
                                      const showAddTaskButton =
                                        leastOrderSection.order ===
                                          section.order &&
                                        leastOrderSection.id === section.id;

                                      // Render the "Add Task" button only for the section with the least order or the minimum index
                                      if (showAddTaskButton) {
                                        return (
                                          <div
                                            // className=" text-center text-white p-2 rounded-md font-medium flex items-center gap-2 justify-center"
                                            // style={{
                                            //   cursor: "pointer",
                                            //   background: themeColor,
                                            // }}
                                            className="shadow-custom-all-sides flex cursor-pointer items-center justify-center gap-1 py-[10px]  opacity-90   rounded-lg bg-white  text-[#555] font-medium text-[15px]"
                                            onClick={openTaskSelf}
                                          >
                                            <FaPlus />
                                            Add Task
                                          </div>
                                        );
                                      }
                                    }
                                    return null;
                                  })()}
                                </>
                              )}
                            </div>
                          )}
                        </Droppable>
                      ))
                    ) : (
                      <div className="w-full" style={{ textAlign: "center" }}>
                        <div class="m-4 ">
                          <center>
                            No Tasks
                            <br />
                          </center>
                        </div>
                      </div>
                    )}
                  </div>
                </DragDropContext>
              </div>
            </section>
          )}

          {activeView === "List" && (
            <section
              style={
                {
                  // overflowX: 'auto',
                  // overflowY:'scroll',
                  // minHeight: 530
                }
              }
              className=" "
            >
              <div
                // className="bg-red-400"
                style={{
                  borderRadius: 8,
                  marginTop: 40,
                  maxHeight: 380,
                  overflow: "auto",
                }}
              >
                {/* <div
                  className="flex justify-between p-2 font-medium text-white  "
                  style={{ position: "sticky", top: 0, zIndex: 1, background:themeColor  }}
                >
                  <div
                    
                    // style={{ color: "#fff", fontSize: 14, paddingLeft: 20 }}
                  >
                    Title
                  </div>
                  <div
                  
                    style={{ color: "#fff", }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status
                  </div>
                  <div
                    
                    style={{ color: "#fff"}}
                  ></div>
                  <div
                    
                    style={{ color: "#fff"}}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Created by{" "}
                  </div>
                  <div
                   
                    style={{ color: "#fff" }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Due Date
                  </div>
                  <div
                    
                    style={{ color: "#fff" }}
                  ></div>
                </div> */}

                <hr className="m-0" />
                <DragDropContext onDragEnd={onDragEndTask}>
                  <div
                    className=" col-md-12 m-0 p-0 "
                    style={{
                      display: "block",
                      alignItems: " flex-start",
                      flexWrap: "nowrap",
                    }}
                  >
                    {filteredItems.map((section, index) => (
                      <Droppable
                        key={section.id.toString()}
                        droppableId={section.id.toString()}
                      >
                        {(provided) => (
                          <div
                            className=""
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              borderRadius: 15,
                              color: "#fff",
                              padding: "15px",
                              paddingTop: 0,
                              // ,height:'auto',maxHeight: 200
                            }}
                          >
                            <div
                              className="rounded-md"
                              style={{
                                background: themeColor,
                                // borderRadius: 1,
                                color: "#fff",
                                fontSize: "16",
                                minHeight: 30,
                                marginBottom: 2,
                                padding: 6,
                                marginTop: 2,
                                // marginLeft: 3,
                                // marginRight: 3,
                              }}
                            >
                              <b>{section.title}</b>
                            </div>

                            <div
                            // className=" section-height " style={{maxHeight: 400, overflow:'auto'}}
                            >
                              {section.tasks.map((task, index) => (
                                <Draggable
                                  key={task.id.toString()}
                                  draggableId={task.id.toString()}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    const isHighlighted =
                                      task.id.split("_")[1] == idFromURL;
                                    // const cardRef = useRef(null); // Create a ref for the card div

                                    // useEffect(() => {
                                    //   if (isHighlighted && cardRef.current) {
                                    //     cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    //   }
                                    // }, [isHighlighted]);

                                    return (
                                      <div
                                        // ref={
                                        //   isHighlighted
                                        //     ? highlightedTaskRef
                                        //     : null
                                        // }
                                        ref={provided.innerRef}
                                        // {...provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          ...provided.draggableProps.style,
                                          opacity: snapshot.isDragging
                                            ? "0.7"
                                            : "1",
                                          color: "#000",
                                          // backgroundColor: "",
                                          display: "block",
                                        }}
                                        // className="shadow-custom-all-sides"
                                      >
                                        <div
                                          // ref={cardRef}
                                          className="shadow-custom-all-sides bg-white grid grid-cols-10 text-black  rounded-md"
                                          style={{
                                            // display: "flex",
                                            // flexDirection: "row",
                                            // backgroundColor: "#30678edc",
                                            animation: isHighlighted
                                              ? " color 15s"
                                              : null,
                                            // borderRadius: 1,
                                            // color: "#fff",
                                            fontSize: "16",
                                            minHeight: 30,
                                            marginBottom: 2,
                                            padding: 6,
                                            marginTop: 2,
                                            marginLeft: 3,
                                            marginRight: 3,
                                          }}
                                          onClick={() =>
                                            openChatModal(
                                              task.id,
                                              task.created_by.firstname,
                                              task.created_by.lastname,
                                              task.created_at,
                                              task.due_date,
                                              task.created_by.id
                                            )
                                          }
                                        >
                                          <div className="col-span-3">
                                            {/* <div className="" style={{display:"flex" , justifyContent:"flex-start"}}>
                                            {task.urgent_status === true &&<span style={{ backgroundColor: '#00b272',color:'#fff', borderRadius: '6px 0px 10px 0px', fontSize: 12, margin:'6px' }} className="pr-2 pl-2">
                                              <b>Urgent</b>
                                            </span>}

                                        </div> */}
                                            {task.title}
                                          </div>
                                          <div className="col-span-1">
                                            {showStatus ? (
                                              <div
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  setshowStatus(false);
                                                }}
                                                style={{
                                                  textAlign: "center",
                                                  cursor: "pointer",
                                                  fontSize: 10,
                                                  borderRadius: 20,
                                                  color: "white",
                                                  padding: "1px",
                                                  marginTop: "4px",
                                                  width: "64px",
                                                  backgroundColor: `${task.status.color}`,
                                                }}
                                              >
                                                {task.status.status_name}
                                              </div>
                                            ) : (
                                              <div
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  setshowStatus(true);
                                                }}
                                                style={{
                                                  textAlign: "center",
                                                  cursor: "pointer",
                                                  fontSize: 5,
                                                  borderRadius: 10,
                                                  color: "white",
                                                  padding: "1px",
                                                  marginTop: "4px",
                                                  width: "36px",
                                                  height: "8px",
                                                  backgroundColor: `${task.status.color}`,
                                                }}
                                              ></div>
                                            )}
                                          </div>

                                          <div
                                            className="col-span-1"
                                            style={{ fontSize: 13 }}
                                          >
                                            {task.division}
                                          </div>
                                          <div
                                            className=" col-span-2"
                                            style={{
                                              fontSize: 13,
                                              cursor: "default",
                                            }}
                                          >
                                            {task.created_by.firstname}{" "}
                                            {task.created_by.lastname}
                                          </div>

                                          {/* <div className=' row col-md-12' style={{fontSize:13}}>Assign By : {task.created_by.firstname} {task.created_by.lastname}</div> */}

                                          {/* <div className='row col-md-12'id="progress-bar">              
                                        
                                          <div id="progress" style={{ width: `${progressPercentage}%` }}>
                                          </div>
                                    
                                        </div> */}

                                          {/* <div className='row col-md-12 '>
                                          <div className='col-md-6'style={{fontSize:13}}>{task.division}</div>
                                          {section.title !== 'Done' && section.title !== 'In Review' && (
                                            <div className='col-md-6' style={{ fontSize: 13, display: 'flex', justifyContent: 'flex-end' }}>
                                              {calculateRemainingTime(task.due_date)}
                                            </div>
                                          )}
                                        </div> */}

                                          <div
                                            className="col-span-2 "
                                            style={{ fontSize: 13 }}
                                          >
                                            {ShowFormatedDueDateOnDateField(
                                              task.due_date
                                            )}
                                          </div>
                                          {task.created_by.id === user_id ? (
                                            // <div className='col-md-1' onClick={(event) => handleDeleteTask(task.id, event)}>
                                            //   <FaTrashAlt style={{ fontSize: 14, color: 'whitesmoke', marginBottom: 4, cursor: 'pointer' }} ></FaTrashAlt>
                                            // </div>
                                            <div
                                              className="flex justify-end text-red-400"
                                              onClick={(event) =>
                                                openModalDeleteTask(
                                                  task.id,
                                                  event
                                                )
                                              }
                                            >
                                              <FaTrashAlt
                                                style={{
                                                  // fontSize: 14,
                                                  // color: "whitesmoke",
                                                  marginBottom: 4,
                                                  cursor: "pointer",
                                                }}
                                              ></FaTrashAlt>
                                            </div>
                                          ) : null}

                                          {/* <div className='row 'style={{marginTop:'4px'}}>
                                          <div className='col-md-10 ' style={{ fontSize: 10, paddingTop: '6px', color: 'darkgray' }}>
                                            {formatDate(task.due_date)}
                                          </div>
                                          
                                          {task.created_by.id.toString() === user_id ? (
                                            
                                              <div className='col-md-2' onClick={(event) => handleDeleteTask(task.id, event)}>
                                                <FaTrashAlt style={{ fontSize: 14, color: 'whitesmoke', marginBottom: 4, cursor: 'pointer' }} ></FaTrashAlt>
                                              </div>

                                            ) : null}
                                        </div> */}

                                          {/* <div className='' >
                                          <LinearProgress style={{borderRadius:4, height:6}} variant="determinate" value={task.progress_percentage} />
                                        </div> */}
                                        </div>
                                        <div className="">
                                          {/* <LinearProgress
                                          style={{ borderRadius: 4, height: 4 }}
                                          variant="determinate"
                                          value={task.progress_percentage}
                                        /> */}
                                          <LinearProgressBar
                                            progress={task.progress_percentage}
                                          />
                                        </div>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                            {/* {section.title == "Pending" ?  (
                            // <div className='col-md-12 mb-0 ' style={{ fontSize: '16', border: '2px solid #30678edc', padding: '4px 6px', borderRadius: 6, height: 40, color: '#dcdcdc' }} onClick={openTaskSelf}><i class="fa fa-plus ml-2 mr-2" style={{}}></i> Add Task</div>
                            <div className='col-12 col-md-12 mb-0 mt-1 add-task-btn' style={{ cursor:'pointer', borderRadius:1}} onClick={openTaskSelf} >
                            <i class="fa fa-plus ml-2 mr-2"></i> Add Task
                          </div>


                          ) : (
                            null
                          )} */}
                            {section.fixed_state === "Pending" && (
                              <>
                                {(() => {
                                  const pendingSections =
                                    filteredTaskData.filter(
                                      (sec) => sec.fixed_state === "Pending"
                                    );
                                  if (pendingSections.length > 0) {
                                    const leastOrderSection =
                                      pendingSections.reduce(
                                        (prev, current) => {
                                          if (prev.order === current.order) {
                                            // If order is the same, compare section indexes
                                            const prevIndex =
                                              filteredTaskData.findIndex(
                                                (sec) => sec.id === prev.id
                                              );
                                            const currentIndex =
                                              filteredTaskData.findIndex(
                                                (sec) => sec.id === current.id
                                              );
                                            return prevIndex < currentIndex
                                              ? prev
                                              : current;
                                          }
                                          return prev.order < current.order
                                            ? prev
                                            : current;
                                        }
                                      );

                                    // Check if the least order section matches the current section in iteration
                                    const showAddTaskButton =
                                      leastOrderSection.order ===
                                        section.order &&
                                      leastOrderSection.id === section.id;

                                    // Render the "Add Task" button only for the section with the least order or the minimum index
                                    if (showAddTaskButton) {
                                      return (
                                        <div
                                          className="shadow-custom-all-sides flex cursor-pointer items-center justify-center gap-1 py-[10px]  opacity-90   rounded-lg bg-white  text-[#555] font-medium text-[15px]"
                                          style={{ cursor: "pointer" }}
                                          onClick={openTaskSelf}
                                        >
                                          <FaPlus />
                                          Add Task
                                        </div>
                                      );
                                    }
                                  }
                                  return null;
                                })()}
                              </>
                            )}
                          </div>
                        )}
                      </Droppable>
                    ))}
                  </div>
                </DragDropContext>
              </div>
            </section>
          )}
        </div>
        {}
      </div>
      {modalTaskSelfIsOpen && (
        <TaskSelf onClose={closeTaskSelf} open={openEmployeeTaskOthers} />
      )}
      {isModalOpenDeleteTask && (
        <DeleteTaskModal
          onclose={() => setIsModalOpenDeleteTask(false)}
          handleDeleteTask={() => handleDeleteTask()}
        />
      )}

      {/* <Modal
        isOpen={isModalChatOpen}
        onRequestClose={closeChatModal}
        contentLabel="Add Project Name Popup Modal"
        style={modalStyleChatName}

      >
        <button
          type="button"
          className=" btn_clo close"
          onClick={closeChatModal}
          style={{ position: "sticky" }}
        >
          <span>&times;</span>
        </button> */}
      {isModalChatOpen && (
        // <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50 p-10 ">
        //   <div
        //     style={{ background: themeColor }}
        //     className=" md:w-auto w-full  p-4 md:px-10  flex flex-col rounded-md  overflow-auto max-h-[100%]"
        //   >
        //     <button
        //       className="place-self-end fixed p-1 rounded-full  bg-white"
        //       onClick={closeChatModal}
        //     >
        //       <AiOutlineClose size={20} />
        //     </button>
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50 p-10">
          <div
            style={{ background: themeColor }} // Replace with your theme color
            className="md:w-auto w-full p-4 md:px-10 flex flex-col rounded-md overflow-auto max-h-[100%]"
          >
            <button
              className="place-self-end p-1 rounded-full bg-white"
              onClick={closeChatModal}
            >
              <AiOutlineClose size={20} />
            </button>
            <div
              className=""
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className="mt-4"
                style={{
                  color: "#fff",
                  height: "80%",
                  width: 600,
                  marginRight: "1%",
                }}
              >
                {/* <button className="close" onClick={closeChatModal}>
                      &times;
                    </button>

                    <div style={{ display: 'flex', marginBottom: '6%' }}>&nbsp;</div> */}

                {/* <div className='col md-12 ' style={{ textAlign: 'start', fontSize: '25px', borderRadius: 8, transition: 'background-color 0.3s ease', padding: '2px' }} onMouseEnter={(e) => e.target.style.background = '#132A3A'} onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                      {isEditing ? (
                        <input
                          ref={inputRef}
                          value={taskTopicText}
                          onChange={(e) => setTaskTopicText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              setIsEditing(false);
                              UpdateUserTask(taskid);
                            }
                          }}
                          onBlur={() => setIsEditing(false)}
                          style={{ background: '#132A3A', border: 'none', width: '100%', color: 'white' }}
                        />
                      ) : (
                        <div onClick={() => setIsEditing(true)}>
                          {taskTopicText}
                          <span onClick={handleIconClickText} >
                            <FaPencilAlt style={{ marginLeft: 10, fontSize: 14, backgroundColor: 'none' }} />
                          </span>
                        </div>
                      )}

                    </div> */}

                <div
                  className=" "
                  style={{
                    // textAlign: "start",
                    fontSize: "25px",
                    borderRadius: 8,
                    transition: "background-color 0.3s ease",
                    padding: "2px",
                  }}
                  // onMouseEnter={(e) => e.target.style.background = '#132A3A'} onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  {isEditing ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        // width: "100%",
                      }}
                      className="mr-2"
                    >
                      <input
                        ref={inputRef}
                        spellcheck="true"
                        value={taskTopicText}
                        onChange={(e) => setTaskTopicText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            setIsEditing(false);
                            UpdateUserTask(taskid, taskTopicText);
                          }
                        }}
                        onBlur={() => {
                          setIsEditing(false);
                          UpdateUserTask(taskid, taskTopicText);
                        }}
                        style={{
                          // background: themeColor,
                          border: "none",
                          width: "100%",
                          // color: "white",
                          paddingLeft: 4,
                          paddingRight: 4,
                          borderRadius: 4,
                        }}
                        className="border border-white text-black outline-none"
                      />
                      <span
                        onClick={() => {
                          setIsEditing(false);
                          UpdateUserTask(taskid, taskTopicText);
                        }}
                      >
                        <FaCheck
                          style={{
                            marginLeft: 10,
                            marginRight: 10,
                            fontSize: 14,
                            color: "white",
                          }}
                          className="cursor-pointer"
                        />
                      </span>
                    </div>
                  ) : (
                    <div
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2"
                    >
                      {taskTopicText}
                      <span
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent click event from bubbling up to the parent div
                          handleIconClickText();
                        }}
                        // onClick={handleIconClickText}
                      >
                        <FaPencilAlt
                          style={{ marginLeft: 10, fontSize: 14 }}
                          title="Edit"
                          className="cursor-pointer"
                        />
                      </span>
                    </div>
                  )}
                </div>

                <div className=" gap-4 flex-wrap" style={{ display: "flex" }}>
                  <div className=" ">
                    {createdBy_id === user_id ? (
                      <div
                        className=" flex items-center gap-2 cursor-pointer"
                        style={{
                          height: "20",
                          width: "20",
                          color: "white",
                          borderRadius: 10,
                          // boxShadow: "0 2px 4px #0a283c",
                          // backgroundColor: "#132A3A",
                          padding: "5px",
                        }}
                        onClick={handleIconClick}
                      >
                        <FaUserCog />
                        Assign
                      </div>
                    ) : (
                      <div
                        className=" flex items-center gap-2 cursor-pointer"
                        style={{
                          height: "20",
                          width: "20",

                          borderRadius: 10,

                          padding: "5px",
                        }}
                      >
                        <FaUserCog />
                        Assign
                      </div>
                    )}

                    {/* Assign to Pop up on Details page */}
                    {isModalOpen && (
                      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50 p-10 ">
                        <div
                          style={{ background: themeColor }}
                          className=" md:w-auto w-full  p-4 md:px-10  flex flex-col rounded-md  overflow-auto max-h-[100%]"
                        >
                          <button
                            className="place-self-end fixed p-1 rounded-full  bg-white text-black"
                            onClick={closeModal}
                          >
                            <AiOutlineClose size={20} />
                          </button>

                          <div className="mt-5">
                            <div className="">
                              <h5 className="font-medium">Select Email </h5>
                            </div>
                            <div className="">
                              {/* Use react-select to display the user emails */}
                              <Select
                                isMulti
                                options={modalAssign}
                                value={selectedEmail}
                                onChange={handleDropdownItemClick}
                                isSearchable={true}
                                menuPortalTarget={document.body}
                                menuPosition="fixed"
                                styles={{
                                  menuPortal: (base) => ({
                                    ...base,
                                    zIndex: 9999,
                                  }),
                                  menu: (provided) => ({
                                    ...provided,
                                    zIndex: 9999,
                                  }),

                                  placeholder: (baseStyles, state) => ({
                                    ...baseStyles,
                                    color: "black",
                                  }),
                                  clearIndicator: (baseStyles) => ({
                                    ...baseStyles,
                                    color: "red",
                                  }),
                                  dropdownIndicator: (baseStyles) => ({
                                    ...baseStyles,
                                    color: "black",
                                  }),
                                  control: (baseStyles) => ({
                                    ...baseStyles,
                                    borderColor: "darkblue",
                                  }),
                                  option: (baseStyles) => ({
                                    ...baseStyles,
                                    color: "black",
                                  }),
                                  multiValueRemove: (baseStyles, state) => ({
                                    ...baseStyles,
                                    color: state.isFocused ? "red" : "gray",
                                    backgroundColor: state.isFocused
                                      ? "black"
                                      : "lightgreen",
                                  }),
                                }}
                              />
                            </div>
                            <div className="p-2 flex justify-end gap-3 items-center my-2">
                              <button
                                type="button"
                                className="bg-white p-1 px-4 text-black font-medium rounded-full shadow-custom-all-sides hover:bg-green-300 transition-all duration-300"
                                onClick={handleConfirmClick}
                                disabled={!selectedEmail}
                              >
                                Confirm
                              </button>
                              <button
                                type="button"
                                className="bg-red-400 p-1 px-4 rounded-full font-medium shadow-custom-all-sides hover:bg-red-500 transition-all duration-300"
                                onClick={closeModal}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="">
                    {createdBy_id === user_id ? (
                      <div
                        style={{
                          // display: "flow-root",
                          alignItems: "center",
                          cursor: "pointer",
                          // boxShadow: "0 2px 4px #0a283c",
                          // backgroundColor: "#132A3A",
                          borderRadius: 10,
                          padding: "5px",
                        }}
                        onClick={handleDueDateClick} // Attach onClick to the div
                        className="flex items-center gap-2"
                      >
                        <FaRegCalendarAlt />
                        {"Due Date"}{" "}
                        {/* Display the selected date or 'Due Date' */}
                      </div>
                    ) : (
                      <div
                        style={{
                          // display: "flow-root",
                          alignItems: "center",
                          // boxShadow: "0 2px 4px #0a283c",
                          // backgroundColor: "#132A3A",
                          // borderRadius: 10,
                          padding: "5px",
                          // color: "#767676", // Set the color for non-clickable version
                          // pointerEvents: "none", // Make it non-clickable
                        }}
                        className="flex items-center gap-2"
                      >
                        <FaRegCalendarAlt />
                        {"Due Date"}{" "}
                      </div>
                    )}

                    <br />
                    {/* Render the modal conditionally based on isModalOpen state */}
                    {isModalOpennn && (
                      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50 p-10 ">
                        <div
                          style={{ background: themeColor }}
                          className=" md:w-auto w-full  p-4 md:px-10  flex flex-col rounded-md  overflow-auto max-h-[100%]"
                        >
                          <button
                            className="place-self-end fixed p-1 rounded-full  bg-white text-black"
                            onClick={handleModalClose}
                          >
                            <AiOutlineClose size={20} />
                          </button>

                          <div>
                            <div className="mt-5">
                              <div>
                                <h5 className="font-medium">
                                  Select Due Date{" "}
                                </h5>
                              </div>
                              <div>
                                <ReactDatePicker
                                  selected={TempdueDate ? TempdueDate : dueDate}
                                  onChange={handleDateChange1}
                                  showTimeSelect
                                  dateFormat="dd/MM/yyyy h:mm aa"
                                  timeIntervals={5}
                                  ref={datePickerRef}
                                  minDate={new Date()}
                                  // minTime={currentTime}
                                  // maxTime={maxTime}
                                  filterTime={filterTime}
                                  placeholderText="Select Date and Time"
                                  className="text-black my-2 p-2 rounded-md w-96"
                                />
                              </div>
                              <div className="flex justify-end gap-4">
                                <button
                                  type="button"
                                  className="bg-white p-1 px-4 rounded-full text-black font-medium hover:bg-green-400 transition-all duration-300"
                                  onClick={() => {
                                    Update_Task_Duedate(
                                      user_id,
                                      taskid,
                                      TempdueDate
                                    );
                                    handleModalClose();
                                    datePickerRef.current.setOpen(false);
                                  }}
                                >
                                  Save
                                </button>
                                <button
                                  type="button"
                                  className="bg-red-400 p-1 px-4 rounded-full text-white font-medium hover:bg-red-500 transition-all duration-300"
                                  onClick={handleModalClose}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="">
                    {(() => {
                      const displayedStatus = truncateString(
                        newStatus.label || taskMoreStatus,
                        8
                      );
                      console.log("test");
                      return createdBy_id === user_id ||
                        (Array.isArray(selectedEmail) &&
                          selectedEmail.some(
                            (item) => item.value === user_id
                          )) ? (
                        <div
                          className="flex gap-2 items-center"
                          style={{
                            borderRadius: 10,
                            padding: "5px",
                            cursor: "pointer",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setshowStatusList(false);
                            openStatusModall(taskid, taskMoreStatus);
                            console.log("testing");
                          }}
                        >
                          <FaLongArrowAltRight />{" "}
                          {/* {newStatus.label ||taskMoreStatus} */}
                          {/* {displayedStatus} */}
                          {/* {taskMoreStatus} */}
                          {taskMoreStatus.length > 8
                            ? `${taskMoreStatus.slice(0, 8)}..`
                            : taskMoreStatus}
                        </div>
                      ) : (
                        <div
                          className="flex gap-2 items-center"
                          style={{
                            borderRadius: 10,
                            padding: "5px",
                            cursor: "pointer",
                          }}
                        >
                          <FaLongArrowAltRight
                            style={{ fontSize: 20, color: "#767676" }}
                          />{" "}
                          {/* {taskMoreStatus} */}
                          {displayedStatus}
                        </div>
                      );
                    })()}

                    {/* modal under modal for task status  */}
                    {isModalOpenn && (
                      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50 p-10 ">
                        <div
                          style={{ background: themeColor }}
                          className=" md:w-auto w-full  p-4 md:px-10  flex flex-col rounded-md  overflow-auto max-h-[100%]"
                        >
                          <button
                            className="place-self-end fixed p-1 rounded-full  bg-white text-black"
                            onClick={closeStatusModall}
                          >
                            <AiOutlineClose size={20} />
                          </button>
                          <div className=" mx-4">
                            <h4 className="font-medium text-white my-2 outline-none">
                              Update Task Status
                            </h4>
                            <Select
                              value={newStatus}
                              onChange={handleStatusChange}
                              options={statusOptions}
                              styles={{
                                menuPortal: (base) => ({
                                  ...base,
                                  zIndex: 9999,
                                }),
                                menu: (provided) => ({
                                  ...provided,
                                  zIndex: 9999,
                                }),

                                placeholder: (baseStyles, state) => ({
                                  ...baseStyles,
                                  color: "black",
                                }),
                                clearIndicator: (baseStyles) => ({
                                  ...baseStyles,
                                  color: "red",
                                }),
                                dropdownIndicator: (baseStyles) => ({
                                  ...baseStyles,
                                  color: "black",
                                }),
                                control: (baseStyles) => ({
                                  ...baseStyles,
                                  borderColor: "darkblue",
                                }),
                                option: (baseStyles) => ({
                                  ...baseStyles,
                                  color: "black",
                                }),
                              }}
                              menuPortalTarget={document.body}
                              className="w-72"
                            />
                            <div
                              style={{ display: "flex", justifyContent: "end" }}
                              className="my-2 gap-2"
                            >
                              <button
                                className="bg-white p-1 px-4 rounded-full text-black font-medium hover:bg-green-400 transition-all duration-300"
                                onClick={() =>
                                  UpdatetaskStatus(
                                    taskid,
                                    checklistid,
                                    "details"
                                  )
                                }
                              >
                                Save
                              </button>

                              <button
                                className="bg-red-400 p-1 px-4 rounded-full font-medium shadow-custom-all-sides hover:bg-red-500 transition-all duration-300"
                                onClick={closeStatusModall}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* chat */}
                  <div className="">
                    <div
                      style={{
                        height: "20",
                        width: "20",
                        color: "white",

                        padding: "5px",
                        cursor: "pointer",
                      }}
                      className="flex gap-2 items-center"
                      // onClick={openModalChat} //for tab and mbl
                      // onClick={openModalChatWeb}
                      // onClick={isWideScreen ? openModalChatWeb :  openModalChat}
                      onClick={() => {
                        handleToggleComments("chat");
                        // isWideScreen ?
                        openModalChatWeb();
                        //  : openModalChat();
                      }}
                    >
                      <FaComments
                        style={{
                          fontSize: 20,
                          color: "white",
                          marginRight: "6",
                          textAlign: "center",
                        }}
                      />
                      {"   "}Chat
                    </div>
                  </div>
                  <div className=" ">
                    <div
                      style={{
                        height: "20",
                        width: "20",
                        // color: "white",
                        borderRadius: 10,

                        padding: "5px",
                        cursor: "pointer",
                      }}
                      // onClick={openModalChat} //for tab and mbl
                      // onClick={openModalChatWeb}
                      // onClick={isWideScreen ? openModalChatWeb :  openModalChat
                      // }
                      onClick={() => {
                        handleToggleComments("comments");
                        // isWideScreen ?
                        openModalChatWeb();
                        //  : openModalChat();
                      }}
                      className=" flex gap-2 items-center hover:text-gray-300 transition-all duration-300"
                      // onClick={handleToggleComments}
                    >
                      <FaComment
                        style={{
                          fontSize: 20,
                          // color: "white",
                          marginRight: "4",
                          marginLeft: "2",
                          textAlign: "center",
                        }}
                      />
                      {"   "}Comments
                    </div>
                  </div>
                  {/*  */}
                </div>
                {taskDescription !== undefined ? (
                  <div
                    className="flex gap-2 w-full"
                    style={{
                      borderRadius: 5,
                      maxWidth: "100%",
                      wordWrap: "break-word",
                      wordBreak: "break-all",
                      padding: "3px",
                      paddingLeft: 6,
                    }}
                    // onMouseEnter={(e) => e.target.style.background = '#132A3A'} onMouseLeave={(e) => e.target.style.background = '#133953'}
                  >
                    {isEditingDesc ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <input
                          spellCheck="true"
                          ref={inputRef}
                          value={taskDescription}
                          onChange={(e) => setTaskDescription(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              setIsEditingDesc(false);
                              UpdateUserTask(taskid, taskDescription);
                            }
                          }}
                          onBlur={() => {
                            setIsEditingDesc(false);
                            UpdateUserTask(taskid, taskDescription);
                          }}
                          className="outline-none text-black"
                          style={{
                            border: "none",
                            width: "100%",

                            paddingLeft: 4,
                            paddingRight: 4,
                            borderRadius: 4,
                          }}
                        />
                        <span
                          onClick={() => {
                            setIsEditingDesc(false);
                            UpdateUserTask(taskid, taskDescription);
                          }}
                        >
                          <FaCheck
                            style={{
                              marginLeft: 10,
                              marginRight: 10,
                              fontSize: 14,
                              color: "white",
                            }}
                            className="cursor-pointer"
                          />
                        </span>
                      </div>
                    ) : (
                      <div
                        onClick={() => setIsEditingDesc(true)}
                        className="flex gap-2 items-center"
                      >
                        {taskDescription}
                        <FaPencilAlt
                          onClick={handleIconClickDesc}
                          style={{ marginLeft: 10, fontSize: 14 }}
                          title="Edit"
                          className="cursor-pointer"
                        />
                      </div>
                    )}
                  </div>
                ) : null}

                <div className=" " style={{ cursor: "default" }}>
                  <div
                    className="font-medium grid grid-cols-4"
                    style={{ cursor: "default" }}
                  >
                    {" "}
                    <p>Created By :</p>
                    <p className="col-span-3">
                      {createdFirstName} {createdSecondName}
                    </p>
                  </div>
                  <div
                    className="font-medium grid grid-cols-4"
                    style={{ cursor: "default" }}
                  >
                    {" "}
                    <p>Created Date :</p>
                    <p className="col-span-3">
                      {FormattedDateToShowProperly(createdDate)}
                    </p>
                  </div>
                  <div
                    className="font-medium grid grid-cols-4"
                    style={{ cursor: "default" }}
                  >
                    {" "}
                    <p>Due Date :</p>
                    {/* <p className="col-span-3"> */}
<p className="flex gap-2 col-span-3 items-center">

                    {dueDate && FormattedDateToShowProperly(dueDate)} 
                    {createdBy_id.toString() !== user_id && dueDate ? (
                      <BiSolidCalendarEdit
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDueDateClickSubDateRequest();
                      }}
                      size={18}
                      />
                    ) : (
                      
                      ""
                    )}
                    </p>
                    {/* </p> */}
                  </div>
                  <div className="font-medium grid grid-cols-4" style={{ cursor: "default" }}>
                    {" "}
                    <p>

                    Assign To :
                    </p>
                    <p className="cols-span-3">

                     {showStatusChecklist1}{" "}
                    </p>
                  </div>
                </div>

                {isChatVisible && (
                  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50 p-10 ">
                    <div
                      style={{ background: themeColor }}
                      className=" md:w-auto w-full  p-4 md:px-10  flex flex-col rounded-md  overflow-auto max-h-[100%]"
                    >
                      {/* <button
                        className="place-self-end fixed p-1 rounded-full  bg-white text-black"
                        onClick={closeChatModalWeb}
                      >
                        <AiOutlineClose size={20} />
                      </button> */}
                      {/* <div className=" bg-red-400 overflow-auto  h-96" style={{ width: 350, marginRight: "1%" }}> */}
                      <div className="p-2">
                        {!showComments ? (
                          <>
                            <div
                              className="flex gap-2 items-center"
                              style={{
                                borderRadius: 5,
                              }}
                            >
                              <span
                                className="cursor-pointer"
                                style={{ textAlign: "left" }}
                              >
                                <FaArrowLeft onClick={closeChatModalWeb} />
                              </span>
                              <span className=""></span>
                              <span
                                className="text-white"
                                style={
                                  {
                                    // textAlign: 'center',
                                  }
                                }
                              >
                                CHAT & ACTIVITY{" "}
                              </span>
                            </div>
                            <hr />

                            <div
                              className="h-96 overflow-auto  "
                              ref={chatContainerRef}
                            >
                              {chatsData.length === 0 ? (
                                <div
                                  style={{
                                    textAlign: "center",
                                    paddingTop: "20px",
                                  }}
                                >
                                  No chats available
                                </div>
                              ) : (
                                chatsData.map((chat) => (
                                  <div
                                    key={chat.id}
                                    className={
                                      chat.sender_id === user_id
                                        ? "ml-10 grid justify-end p-4"
                                        : "mr-10 grid justify-start p-4"
                                    }
                                  >
                                    <div
                                      className="bg-white max-w-60 "
                                      style={{
                                        borderRadius: 5,
                                        padding: "4px 10px",
                                      }}
                                    >
                                      <b className="text-black font-medium">
                                        {chat.sender_id === user_id
                                          ? "You"
                                          : `${chat.username}`}
                                      </b>
                                      <br />
                                      {renderMessageContent(
                                        chat.message,
                                        chat.file_size
                                      )}
                                    </div>
                                    <span
                                      className={
                                        chat.sender_id === user_id
                                          ? "text-right"
                                          : "text-left"
                                      }
                                      style={{ fontSize: 10, color: "#ededed" }}
                                    >
                                      {new Date(
                                        chat.created_at
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                ))
                              )}
                            </div>
                            <input
                              type="file"
                              accept="*"
                              // accept=".jpg, .jpeg, .png, .gif, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, py, js, jsx"
                              style={{ display: "none" }}
                              onChange={handleFileChangeForChatFile}
                              ref={fileInputRef}
                            />
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <div
                                style={{ position: "relative", width: "100%" }}
                              >
                                <input
                                  placeholder="Type your message here..."
                                  className="rounded-full px-4 placeholder:text-gray-500 text-black outline-none"
                                  spellCheck="true"
                                  style={{
                                    // color: "white",

                                    fontSize: 16,
                                    backgroundColor: "white",
                                    // paddingLeft: 40, // Adjust padding to accommodate the icon
                                    padding: 8,
                                    width: "100%",
                                    border: "none",
                                  }}
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      send_msg(message);
                                    }
                                  }}
                                  tabIndex="0"
                                />
                                <FaPaperclip
                                  onClick={() => fileInputRef.current.click()}
                                  style={{
                                    position: "absolute",
                                    top: "50%",
                                    right: 10,
                                    transform: "translateY(-50%)",
                                    fontSize: 20,
                                    // color: "white",
                                    cursor: "pointer",
                                  }}
                                  className="text-gray-400 bg-white"
                                />
                              </div>
                              <div
                                style={{
                                  background: themeColor,
                                }}
                                className="p-2 px-3 ml-1 rounded-full shadow-custom-all-sides flex items-center"
                              >
                                <IoSend
                                  onClick={() => {
                                    send_msg(message);
                                  }}
                                  style={{
                                    // marginTop: 10,
                                    // marginLeft: 8,
                                    fontSize: 20,
                                    color: "white",
                                    cursor: "pointer",
                                  }}
                                  // size={30}
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              className="flex items-center gap-2"
                              style={{
                                borderRadius: 5,
                              }}
                            >
                              <span
                                className="col-md-2"
                                style={{ textAlign: "left" }}
                              >
                                <FaArrowLeft onClick={closeChatModalWeb} />
                              </span>
                              <span className="col-md-1"></span>
                              <span
                                className="col-md-9"
                                style={
                                  {
                                    // textAlign: 'center',
                                  }
                                }
                              >
                                COMMENTS
                              </span>
                            </div>
                            <hr />

                            <div className="chat-container">
                              {commentsData.length === 0 ? (
                                <div
                                  style={{
                                    textAlign: "center",
                                    paddingTop: "20px",
                                  }}
                                >
                                  No comments available
                                </div>
                              ) : (
                                commentsData.map((coment) => (
                                  <div
                                    key={coment.id}
                                    className={
                                      coment.sender_id === user_id
                                        ? "ml-10 grid justify-end p-4"
                                        : "mr-10 grid justify-start p-4"
                                    }
                                  >
                                    <div
                                      className="bg-white max-w-60 "
                                      style={{
                                        borderRadius: 5,

                                        padding: "4px 10px",
                                      }}
                                    >
                                      <b className="text-black font-medium">
                                        {/* {chat.sender.firstname} {chat.sender.lastname} */}
                                        {coment.username}
                                      </b>
                                      <br />
                                      {coment.message}
                                    </div>
                                    <span
                                      className={
                                        coment.sender_id === user_id
                                          ? "text-right"
                                          : "text-left"
                                      }
                                      style={{ fontSize: 10, color: "#ededed" }}
                                    >
                                      {new Date(
                                        coment.created_at
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                ))
                              )}
                            </div>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <input
                                spellCheck="true"
                                placeholder="Type your message here..."
                                className="rounded-full px-4 placeholder:text-gray-500 text-black outline-none"
                                style={{
                                  // color: "white",
                                  // marginRight: 8,
                                  // borderRadius: 4,
                                  fontSize: 16,
                                  backgroundColor: "white",
                                  // paddingLeft: 40,
                                  padding: 8,
                                  width: "100%",
                                  border: "none",
                                }}
                                value={addComent}
                                onChange={(e) => setAddComent(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    send_Comment(addComent);
                                    // handleSubmitComment()
                                  }
                                }}
                                tabIndex="0"
                              />
                              <div
                                style={{
                                  background: themeColor,
                                }}
                                className="p-2 px-3 ml-1 rounded-full shadow-custom-all-sides flex items-center"
                              >
                                <IoSend
                                  onClick={() => {
                                    send_Comment(addComent);
                                    // handleSubmitComment();
                                  }}
                                  style={{
                                    // marginTop: 10,
                                    fontSize: 20,
                                    color: "white",
                                  }}
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      {lightboxImage && (
                        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50 p-10 ">
                          <div
                            style={{ background: themeColor }}
                            className=" md:w-auto w-full  p-4 md:px-10  flex flex-col rounded-md  overflow-auto max-h-[100%]"
                          >
                            <button
                              className="place-self-end fixed p-1 rounded-full  bg-white text-black"
                              onClick={closeLightbox}
                            >
                              <AiOutlineClose size={20} />
                            </button>
                            <div
                              className="lightbox-overlay"
                              onClick={closeLightbox}
                            >
                              <img
                                src={lightboxImage}
                                alt="Chat Image"
                                className="w-96"
                              />

                              {/* <div className="lightbox-content">
                                <img src={lightboxImage} alt="Chat Image" />
                                <div
                                  className="close-button"
                                  onClick={closeLightbox}
                                >
                                  X
                                </div> */}
                              {/* </div> */}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  // </div>
                )}
              </div>
            </div>
            {/* </Modal> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default TaskManagement;
