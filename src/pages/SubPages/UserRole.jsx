import React, { useState } from "react";


import { PiPlusCircle } from "react-icons/pi";
import toast from "react-hot-toast";
import BackButton from "../../Buttons/BackButton";
import AccessRight from "./AccessRight";
import Switch from "../../Buttons/Switch";

const UserRole = () => {
  const [tab, setTab] = useState("user");
  const [department, setDepartment] = useState("");

  const handleUserTab = () => {
    setTab("user");
  };
  const handleDepartmentTab = () => {
    setTab("department");
  };

  const [showFields, setShowFields] = useState(false);
  const [showRows, setShowRows] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!department) {
      return toast.error("Please Enter Department Name");
    }

    const newData = {
      department: department,
    };
    setSubmittedData((prevData) => [...prevData, newData]);

    setShowRows(true);
    setShowFields(false);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  return (
    <div className="flex justify-center w-full my-1 ">
      <div className="w-full mx-2 ">
        <BackButton to={"/setup"}/>
        <span className="flex justify-center ">
          <div className=" w-72 flex justify-around bg-gray-400 py-1  rounded-full border-2">
            <h1
              className={`text-lg font-semibold cursor-pointer ${
                tab === "user" && "bg-black"
              }  text-white p-1 px-6 text-center rounded-full`}
              onClick={handleUserTab}
            >
              User Role
            </h1>
            <h1
              className={`text-lg font-semibold ${
                tab === "department" && "bg-black"
              } text-white p-1 px-5 text-center cursor-pointer rounded-full`}
              onClick={handleDepartmentTab}
            >
              Department
            </h1>
          </div>
        </span>
        {tab === "department" && (
          <div className="flex flex-col mx-10 my-10 gap-2">
            <h2
              className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center w-44 gap-2"
              onClick={() => setShowFields(!showFields)}
            >
              <PiPlusCircle size={20} />
              Add Department
            </h2>
            {showFields && (
              <div>
                <div className="grid grid-cols-4 gap-3">
                  <input
                    type="text"
                    placeholder="Enter Department Name"
                    className="border border-gray-500 rounded-md mt-5 p-2"
                    value={department}
                    onChange={handleDepartmentChange}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            )}

            <div className="flex justify-center items-center">
              <div className="mt-4 w-screen">
                <table className="border-collapse w-full">
                  <thead>
                    <tr>
                      <th className="border-md p-2 bg-black border-r-2 text-white rounded-l-xl">
                        Departments
                      </th>
                      <th className="p-2 bg-black  text-white border-r-2 ">
                        Status
                      </th>
                      <th className="p-2 bg-black  text-white rounded-r-xl ">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {showRows && (
                    <tbody>
                      {submittedData.map((data, index) => (
                        <tr
                          key={index}
                          className="border-md border-black border-b-2"
                        >
                          <td className="text-center p-2 border-r-2 border-black">
                            {data.department}
                          </td>
                          <td className="text-center p-2 border-r-2 border-black">
                            <Switch/>
                          </td>
                          
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
        )}
        {tab === "user" && (
          <div>
            <div className="flex flex-col mx-10 mt-10 gap-2">
              <h2 className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex justify-center items-center w-44 gap-2">
                <PiPlusCircle size={20} />
                Add role
              </h2>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className=" col-span-4 p-4  ">
                <h1 className="text-white text-center rounded-md bg-black p-2 px-20">Roles</h1>
                <div className="flex flex-col  mt-1 bg-gray-200 p-2 rounded-md">
                <p className="cursor-pointer hover:bg-black hover:text-white rounded-md p-1 font-medium">Account Manager</p>
                <p className="cursor-pointer hover:bg-black hover:text-white rounded-md p-1 font-medium">Executive</p>
                <p className="cursor-pointer hover:bg-black hover:text-white rounded-md p-1 
                font-medium">Process Manager</p>
                <p className="cursor-pointer hover:bg-black hover:text-white rounded-md p-1 font-medium">Manager</p>
                <p className="cursor-pointer hover:bg-black hover:text-white rounded-md p-1 
                font-medium">Admin</p>
                <p className="cursor-pointer hover:bg-black hover:text-white rounded-md p-1 
                 font-medium">Test</p>
                </div>
              </div>
              <div className="col-span-8 p-4 ">
                <h1 className="text-white text-center bg-black p-2 px-20 rounded-md">Access Rights</h1>
                <AccessRight/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserRole;
