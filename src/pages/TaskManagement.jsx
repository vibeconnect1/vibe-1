import React, { useEffect, useState } from "react";
import { getItemInLocalStorage } from "../utils/localStorage";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { FaFilter, FaLaptop, FaTrashAlt } from "react-icons/fa";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { getVibeMyBoardTask } from "../api";
// import LinearProgress from "@material-ui/core/LinearProgress";

const TaskManagement = () => {
  const user_id = getItemInLocalStorage("VIBEUSERID");
  //   const defaultImage = { index: 0, src: f_image };
  //   let selectedImageSrc = defaultImage.src;
  //   let selectedImageIndex = defaultImage.index;
  //   const [selectedImage, setSelectedImage] = useState(defaultImage);
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
  }, [searchQuery, filteredTaskData]);

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
      const response = await putDataToAPI(Update_task_stetus, formData);
      console.log(response);
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
      console.log(response)

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
  useEffect(()=>{
    GetBoardData()
  },[])
  const [modalTaskSelfIsOpen, setTaskSelfModalIsOpen] = useState(false);

  const openTaskSelf = () => {
    // localStorage.setItem('board', board_id);
    closeTaskSelf();
    setTaskSelfModalIsOpen(true);
  };

  const closeTaskSelf = () => {
    setTaskSelfModalIsOpen(false);
  };

  return (
    <section className="flex">
      <Navbar />
      <div className="p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        <div

        // style={{ background: `url(${selectedImage})no-repeat center center / cover` }}
        >
          <div className="flex justify-between">
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
                  className=" p-1 px-4 rounded-md"
                  title="Kanban View"
                  style={{
                    color: activeView === "Kanban" ? "skyblue" : "#fff",
                    background: themeColor,
                    textAlign: "center",
                    textDecoration:
                      activeView === "Kanban" ? "underline" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleViewChange("Kanban")}
                >
                  Kanban
                </div>
                {/*  */}
                <div
                  className=" p-1 px-4 rounded-md"
                  title="List View"
                  style={{
                    color: activeView === "List" ? "skyblue" : "#fff",
                    background: themeColor,
                    textAlign: "center",
                    textDecoration:
                      activeView === "List" ? "underline" : "none",
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
                  className="p-1 mt-1  text-white rounded-md flex gap-2 items-center"
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
                className="border border-gray-400 outline-none w-full"
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
              // style={{
              //   overflowX: 'auto', // Enable horizontal scrolling
              //   // overflowY: 'hidden',
              //   // scrollbarWidth: 'thin', scrollbarColor: '#888 #ddd',
              //   overflowY:'scroll',
              //   // minHeight: 530
              //   // minHeight: 630
              //   // minHeight: 730
              //   // height:'auto'
              //   // minHeight: '100%',

              //   }}
              // scrollable-content section-table-height
              className="scrollable-content  section-table-height "
            >
              <div className="">
                <DragDropContext onDragEnd={onDragEndTask}>
                  <div
                    className="row "
                    style={{
                      display: "flex",
                      marginTop: "40px",
                      alignItems: " flex-start",
                      flexWrap: "nowrap",
                    }}
                  >
                    {isLoading ? (
                      <div
                        className="col-md-12 m-4"
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
                              className="col-xs-12 col-sm-6   col-md-3 mr-3 ml-2 primary-color-shade1"
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              style={{
                                borderRadius: 15,
                                color: "#fff",
                                padding: "15px",
                                // height:'auto',maxHeight: 500
                              }}
                            >
                              <div className="md-2 mb-2 ml-2 title text-black">
                                <b>{section.title}</b>
                              </div>

                              <div
                                className=" section-height "
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
                                            className="card  row"
                                            style={{
                                              backgroundColor: "#30678edc",
                                              animation: isHighlighted
                                                ? " color 15s"
                                                : null,
                                              borderRadius: 6,
                                              color: "#fff",
                                              fontSize: "16",
                                              minHeight: 30,
                                              marginBottom: 8,
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
                                                      "0px 6px 0px 10px",
                                                    fontSize: 12,
                                                    margin: "-6px",
                                                  }}
                                                  className="pr-2 pl-2"
                                                >
                                                  <b>Urgent</b>
                                                </span>
                                              )}
                                            </div>
                                            {task.title}

                                            {showStatus ? (
                                              <div style={{ display: "flex" }}>
                                                {" "}
                                                <div
                                                  onClick={(e) => {
                                                    e.stopPropagation();
                                                    setshowStatus(false);
                                                  }}
                                                  className="pl-3 pr-3 mr-1"
                                                  style={{
                                                    textAlign: "center",
                                                    cursor: "pointer",
                                                    fontSize: 10,
                                                    borderRadius: 20,
                                                    color: "white",
                                                    padding: "1px",
                                                    marginTop: "4px",
                                                    width: "auto",
                                                    backgroundColor: `${task.status.color}`,
                                                  }}
                                                >
                                                  {task.status.status_name}
                                                </div>
                                                {task.reopened_count > 0 ? (
                                                  <div
                                                    className="pt-1"
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
                                                    className=" mt-1"
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
                                              className=" row col-md-12 mt-1"
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
                                                    {/* <RemainingTime
                                                      dueDate={task.due_date}
                                                    /> */}
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
                                            </div>
                                            <div className="row col-md-12 ">
                                              <div
                                                className="col-md-4"
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

                                            <div
                                              className="row "
                                              style={{ marginTop: "4px" }}
                                            >
                                              <div
                                                className="col-md-10 "
                                                style={{
                                                  fontSize: 10,
                                                  paddingTop: "6px",
                                                  color: "darkgray",
                                                }}
                                              >
                                                {/* {ShowFormatedDueDateOnDateField(
                                                  task.due_date
                                                )} */}
                                              </div>
                                              {/* <div className='col-md-4' style={{ fontSize: 10, paddingTop: '6px', color: 'darkgray' }}>
                                            {task.progress_percentage}%
                                          </div> */}

                                              {task.created_by.id.toString() ===
                                              user_id ? (
                                                <>
                                                  <div
                                                    className="col-md-2"
                                                    onClick={(event) =>
                                                      openModalDeleteTask(
                                                        task.id,
                                                        event
                                                      )
                                                    }
                                                  >
                                                    <FaTrashAlt
                                                      style={{
                                                        fontSize: 14,
                                                        color: "whitesmoke",
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
                                            className="col-12 col-md-12 mb-0 mt-1 add-task-btn"
                                            style={{ cursor: "pointer" }}
                                            onClick={openTaskSelf}
                                          >
                                            <i className="fa fa-plus ml-2 mr-2"></i>{" "}
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
                      <div
                        className="col-md-12"
                        style={{ textAlign: "center" }}
                      >
                        <div class="m-4">
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
        </div>
      </div>
    </section>
  );
};

export default TaskManagement;
