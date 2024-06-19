import React, { useState } from 'react'
import image from "/profile.png";
import Select from "react-select";
function CreateGroup() {
    const [formData, setFormData] = useState({

        group: [],
        groupAddMember: [],
        groupRemoveMember: [],
        repeat: false,

      });
      const options = [
        {
          value: "Akshat",
          label: "Akshat",
          email: "akshat.shrawat@vibecopilot.ai",
        },
        { value: "Kunal", label: "Kunal", email: "kunal.sah@vibecopilot.ai" },
        { value: "Anurag", label: "Anurag", email: "anurag.sharma@vibecopilot.ai" },
      ];
      const addMember = [
        {
          value: "karan",
          label: "karan",
          email: "karan.abc@vibecopilot.ai",
        },
        { value: "virat", label: "virat", email: "virat.vit@vibecopilot.ai" },
        { value: "sameer", label: "sameer", email: "sameer.sharma@vibecopilot.ai" },
      ];
      const removeMember = [
        {
          value: "vijay",
          label: "vijay",
          email: "vijay.abc@vibecopilot.ai",
        },
        { value: "vinay", label: "vinay", email: "vinay.vinay@vibecopilot.ai" },
        { value: "sachin", label: "sachin", email: "sachin.sharma@vibecopilot.ai" },
      ];
  return (
    <div className="flex flex-col justify-center">
        <h2 className="text-center text-xl font-bold my-5 p-2 bg-black rounded-full text-white mx-10">
          Create Group
        </h2>
        <div className='flex justify-center'>
        <div className="border-2 border-black rounded-md w-4/5">
            <div className="flex justify-center my-5">
                <img
                  src={image} // Default placeholder image
                  className="w-40 h-40 rounded-full object-cover border-2 border-gray-300"
                  alt="profile-preview"
               />  
            </div>
            <div className="md:grid grid-cols-3 gap-5 mx-10">
                <div className="flex flex-col my-2">
                    <label className=' font-semibold my-2'>Group Name</label>
                    <input
                      type="text"
                      placeholder="Add Group Name"
                      className="border p-1 py-2 border-gray-500 rounded-md "
                    />
                </div>
                <div className="flex flex-col items-center">
                    <label className="mb-1 text-lg font-semibold my-5 ">Select Type</label>
                    <div className="flex items-center">
                        <input
                          type="radio"
                          id="option1"
                          name="option"
                          value="Option 1"
                          className="mr-2"
                        />
                        <label htmlFor="option1" className="mr-4">Public Type</label>
                        <input
                          type="radio"
                          id="option2"
                          name="option"
                          value="Option 2"
                          className="mr-2"
                        />
                        <label htmlFor="option2">Private Type</label>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className=' font-semibold my-2'>Group Description</label>
                    <textarea
                      placeholder="Description"
                      className="border p-1 py-2 border-gray-500 rounded-md "
                      rows="3"
                    >
                    </textarea>
                </div>
            </div>
            <div>
            <div className='md:grid grid-cols-3 gap-2 mx-10 my-5'>
                <div className='flex flex-col'>
                    <label className='font-semibold my-2'>Group Type </label>
                    <select className="border p-1 py-2 border-gray-500 rounded-md w-full">
                        <option value="">Group Type </option>
                        <option value="">Public  </option>
                        <option value="">Private </option>
                        {/* Populate with user data */}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-semibold my-2'>Group Owner/Administrator</label>
                    <Select
                      className=' p-1 px-4  rounded-md z-20'
                      options={options}
                      isMulti
                      value={formData.group}
                      onChange={(selectedOption) =>
                      setFormData({ ...formData, group: selectedOption })
                      }
                    />
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-semibold my-2'>Group Roles/Permissions</h3>
                    <table className="border-collapse w-full">
                        <thead>
                            <tr>
                                <th className="border py-2 px-4">Role</th>
                                <th className="border py-2 px-4">Permissions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Populate with roles and permissions data */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='md:grid grid-cols-3 gap-2 mx-10'>
                <div className='flex flex-col'>
                    <h3 className='font-semibold text-lg my-2'>Group Activities</h3>
                    <ul className="border p-2 rounded-md w-full">
                        {/* Populate with recent activity data */}
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <div>
                        <label className='my-2 font-semibold'>Add Member</label>
                        <Select
                          className=' p-1 px-4  rounded-md z-20'
                          options={addMember}
                          isMulti
                          value={formData.groupAddMember}
                          onChange={(selectedOption) =>
                          setFormData({ ...formData, groupAddMember: selectedOption })
                          }
                       />
                        <button className="bg-blue-500 text-white p-1 px-3 rounded-md my-2 mx-3">Add</button>
                    </div>
                </div>
               
            </div>
        </div>
        </div>
        </div>
        <div className="flex justify-center my-5 mb-10">
        <button className="bg-black p-1 px-4 py-2 border-2 rounded-md text-white font-medium border-black">
            Create
        </button>
       </div>
    </div>
  )
}

export default CreateGroup