import React, { useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import { useSelector } from "react-redux";
import { ImImage } from "react-icons/im";

function EditEmployeeRequest() {
  const themeColor = useSelector((state) => state.theme.color);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFile(e.dataTransfer.files[0]);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex flex-col overflow-hidden">
        <h2
          style={{ background: themeColor }}
          className="text-center text-xl font-bold p-2 bg-black rounded-full text-white md:mx-20 mb-5"
        >
          Edit Project Request
        </h2>
        <div className="flex justify-center mt-4">
          <div className="border-2 border-gray-300 rounded-md w-4/5 p-4 mb-8">
            <div className="md:grid grid-cols-3 gap-4 md:mx-10">
              <div className="flex flex-col">
                <label
                  className="block text-lg font-medium text-gray-700 mb-2"
                  htmlFor="title"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter Project Name"
                  className="border p-1 py-2 border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="block text-lg font-medium text-gray-700 mb-2"
                  htmlFor="start_date"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  name="start_date"
                  id="start_date"
                  className="border p-1 py-2 border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="block text-lg font-medium text-gray-700 mb-2"
                  htmlFor="end_date"
                >
                  End Date
                </label>
                <input
                  type="date"
                  name="end_date"
                  id="end_date"
                  className="border p-1 py-2 border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col ">
                <label
                  className="block text-lg font-medium text-gray-700 mb-2"
                  htmlFor="budget"
                >
                  Budget
                </label>
                <input
                  type="text"
                  name="budget"
                  id="budget"
                  placeholder="Budget"
                  className="border p-1 py-2 border-gray-500 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col ">
                <label
                  className="block text-lg font-medium text-gray-700 mb-2"
                  htmlFor="privacy"
                >
                  Privacy
                </label>
                <select
                  name="privacy"
                  id="privacy"
                  className="border p-1 py-2 border-gray-500 rounded-md w-full"
                >
                  <option value="public">Select Privacy</option>
                  <option value="public">Public to your team</option>
                  <option value="project-member">
                    Private to project member
                  </option>
                  <option value="private">Private to you</option>
                </select>
              </div>
              <div className="flex flex-col ">
                <label
                  className="block text-lg font-medium text-gray-700 mb-2"
                  htmlFor="teamMember"
                >
                  Team Member
                </label>
                <select
                  name="teamMember"
                  id="teamMember"
                  className="border p-1 py-2 border-gray-500 rounded-md w-full"
                >
                  <option value="">Assign To Admin</option>
                  <option value="">Karan</option>
                  <option value="">Naharika</option>
                  <option value="">Vinay</option>
                </select>
              </div>
              <div className="flex flex-col ">
                <label
                  className="block text-lg font-medium text-gray-700 mb-2"
                  htmlFor="priority"
                >
                  Priority
                </label>
                <select
                  name="priority"
                  id="priority"
                  className="border p-1 py-2 border-gray-500 rounded-md w-full"
                >
                  <option value="">Select Priority</option>
                  <option value="">High</option>
                  <option value="">Medium</option>
                  <option value="">Low</option>
                </select>
              </div>
              <div className="col-span-3">
                <label
                  className="block text-lg font-medium text-gray-700 mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="3"
                  placeholder="Description"
                  className="border p-1 py-2 border-gray-500 rounded-md w-full"
                />
              </div>
            </div>
            <div className="md:mx-10 my-2">
              <h2 className="text-lg font-semibold text-gray-600 my-2">
                Profile Logo
              </h2>
              <div
                className="flex justify-center border-2 border-gray-400 rounded-md p-5 items-center w-20 cursor-pointer"
                onClick={handleIconClick}
              >
                <ImImage size={20} />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => {
                  // handle file selection
                  const file = e.target.files[0];
                  console.log(file);
                }}
              />
            </div>
            <div className="md:mx-10 my-5">
              <label
                onDrop={handleFileDrop}
                onDragOver={(e) => e.preventDefault()}
                htmlFor="file-upload"
                className="border-2 border-dashed p-4 mb-4 border-gray-300 rounded-lg w-full flex items-center justify-center cursor-pointer"
              >
                {file ? <p>{file.name}</p> : <p>Upload Project Picture</p>}
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
            </div>
            <div className="flex justify-center border-t border-gray-300 py-5 mt-5">
              <button
                type="submit"
                className="border-2 border-gray-400 rounded-md p-2 px-5"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default EditEmployeeRequest