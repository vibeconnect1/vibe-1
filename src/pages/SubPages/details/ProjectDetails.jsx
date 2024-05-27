import React from "react";
import Detail from "../../../containers/Detail";
import { BiEdit, BiPlusCircle } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import Table from "../../../components/table/Table";

const ProjectDetails = () => {
  const { id } = useParams();
  const ticketDetails = [
    { title: "Title :", description: "" },
    { title: "Priority :", description: "" },
    { title: "Start Date :", description: "" },
    { title: "End Date :", description: "" },
    { title: "Budget :", description: "" },
    { title: "Dependencies :", description: "" },
    { title: "Dependencies :", description: "" },
  ];
  const themeColor = useSelector((state) => state.theme.color);

  const taskColumns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Task",
      selector: (row) => row.task,
      sortable: true,
    },
    {
      name: "Sub Task",
      selector: (row) => row.subTask,
      sortable: true,
    },
    {
      name: "Assigned To",
      selector: (row) => row.assignedTo,
      sortable: true,
    },
  ];

  const taskData = [
    {
      title: "IT",
      task: "Asset Module",
      subTask: "Add Asset",
      assignedTo: "Kunal",
    },
  ];

  return (
    <div className="flex flex-col justify-around ">
      <div className="flex justify-end m-1">
        <Link
          to={`/admin/project-edit/${id}`}
          className="border-2 border-black flex gap-2 p-1 rounded-md items-center px-4 "
        >
          <BiEdit size={20} />
          Edit
        </Link>
      </div>
      <div className="">
        <Detail details={ticketDetails} heading={"Project Details"} />
        {/* <h2
          style={{
            background: themeColor,
          }}
          className="text-center w-screen text-white font-semibold text-lg p-2 px-4 my-2"
        >
          Tasks
        </h2> */}
        {/* table for tasks, subtasks add task modal */}
        <div>
          <div className="flex justify-end m-1">
            <Link
              to={`/admin/add-task/${id}`}
              className="border-2 border-black flex gap-2 p-1 rounded-md items-center px-4 "
            >
              <BiPlusCircle size={20} />
              Add Task
            </Link>
          </div>
          <Table columns={taskColumns} data={taskData} title={"Task List"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
