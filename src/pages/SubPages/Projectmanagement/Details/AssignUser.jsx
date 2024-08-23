import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import profileImage from "/prof.jpg";
import { useSelector } from "react-redux";

const AssignUser = ({ onclose, assignTo, users }) => {
  const themeColor = useSelector((state) => state.theme.color);
  const [assignedUsers, setAssignedUsers] = useState(assignTo);

  const handleCheckboxChange = (user) => {
    setAssignedUsers((prevAssigned) => {
      if (prevAssigned.some((assigned) => assigned.id === user.id)) {
        // If user is already assigned, remove them
        return prevAssigned.filter((assigned) => assigned.id !== user.id);
      } else {
        // If user is not assigned, add them
        return [...prevAssigned, user];
      }
    });
  };

  console.log("Assigned Users:", assignedUsers);

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white p-5 rounded-xl w-80">
          <button
            className="absolute top-2 right-2 text-gray-500"
            onClick={onclose}
          >
            <IoClose size={24} />
          </button>
          <h2 className="text-gray-600 font-semibold text-lg">
            Add Project Member
          </h2>
          <div className="flex gap-2 mt-2 overflow-auto">
            {assignTo.length > 0 &&
              assignTo.map((user, index) => (
                <img
                  key={index}
                  src={
                    user.profile_picture
                      ? "https://vibecopilot.ai/api/media/" +
                        user.profile_picture
                      : profileImage
                  }
                  className="w-9 h-9 mt-1 rounded-full"
                  alt="Profile"
                />
              ))}
          </div>
          <div>
            <input
              type="search"
              placeholder="Search user"
              className="border p-1 border-gray-300 rounded-md w-full my-5 placeholder:text-sm outline-none"
            />
          </div>
          <div className="overflow-y-scroll h-56">
            {users.map((user, index) => (
              <div className="flex justify-between my-2" key={index}>
                <div className="flex gap-2">
                  <img
                    src={
                      user.profile_picture
                        ? "https://vibecopilot.ai/api/media/" +
                          user.profile_picture
                        : profileImage
                    }
                    className="w-9 h-9 mt-1 rounded-full"
                    alt="Profile"
                  />
                  <h2 className="flex items-center">{`${user.firstname} ${user.lastname}`}</h2>
                </div>
                <p>{assignedUsers.some(
                    (assigned) => assigned.id === user.id
                  )}</p>
                <input
                  type="checkbox"
                  checked={assignedUsers.some(
                    (assigned) => assigned.id === user.id
                  )}
                // value={assignedUsers.some(
                //     (assigned) => assigned.id === user.id
                //   )}
                  onChange={() => handleCheckboxChange(user)}
                  className="mr-2"
                />
              </div>
            ))}
          </div>
          <div className="border-t border-inherit my-5"></div>
          <div className="flex justify-center w-full">
            <button
              style={{ background: themeColor }}
              className="border-2 rounded-md p-1 px-4 text-white w-full"
              //   onClick={handleAddUsers}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignUser;
