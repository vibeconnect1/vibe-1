import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import Select from "react-select";
import { FaTrash } from 'react-icons/fa';
function CreatePolls() {
    const [pollsOption, setPollsOption] = useState([]);
    const handleAddPolls = (event) => {
        event.preventDefault();
        setPollsOption([...pollsOption, { pollOption: '', }]);
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newPollsOption = [...pollsOption];
        newPollsOption[index][name] = value;
        setPollsOption(newPollsOption);
    };

    const handleRemovePolls = (index) => {
        const newPollsOption = [...pollsOption];
        newPollsOption.splice(index, 1);
        setPollsOption(newPollsOption);
    };
    const [formData, setFormData] = useState({

        polls: [],

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
  return (
    <section className='flex'>
        <div className='hidden md:block'>
           <Navbar/>
        </div>
        <div className="w-full flex mx-3 flex-col overflow-hidden">
            <h2 className="text-center text-xl font-bold my-5 p-2 bg-black rounded-full text-white mx-10">
                Create Polls
            </h2>
            <div className='flex justify-center'>
            <div className='border-2 border-black rounded-md my-5 w-4/5'>
                <div className='md:grid grid-cols-3 mx-5 gap-5 my-5'>
                    <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            Poll Title 
                       </label>
                       <input
                          type="text"
                          placeholder="Enter Poll Title "
                          className="border p-1 px-4 border-gray-500 rounded-md"
                       />
                   </div>
                   <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            Poll Options 
                       </label>
                       <div className='flex xl:flex-row flex-col gap-3 w-full'>
                        <input
                          type="text"
                          placeholder="Poll Options"
                          className="border p-1  px-4 border-gray-500 rounded-md"
                        />
                       <button className='border-2 border-black rounded-md p-1 px-4' onClick={handleAddPolls}>add</button>
                       </div>
                   </div>
                   {pollsOption.map((pollsOption1, index) => (
                    <div key={index}>
                        <div className='grid md:grid-cols-3 item-start gap-x-4 gap-y-4 mb-3 w-full'>
                            <div className="flex flex-col ">
                                <label htmlFor="" className="font-semibold my-2">
                                    Poll Options 
                                </label>
                                <div className='flex xl:flex-row flex-col gap-3 w-full'>
                                    <input
                                      type="text"
                                      placeholder="Poll Options"
                                      className="border p-1  px-4 border-gray-500 rounded-md"
                                    />
                                    <button onClick={() => handleRemovePolls(index)}><FaTrash /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                   <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            Start Date/Time 
                       </label>
                       <input
                          type="date"
                          placeholder="Poll Options"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                       />
                   </div>
                   <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            End Date/Time 
                       </label>
                       <input
                          type="date"
                          placeholder="Poll Options"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                       />
                   </div>
                   <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                        Visibility
                       </label>
                       <select className="border p-1 px-4 border-gray-500 rounded-md">
                        <option value="">Select Visibility</option>
                        <option value="">Public</option>
                        <option value="">Restricted</option>
                       </select>
                   </div>
                   <div className="flex flex-col ">
                      <label htmlFor="" className="font-semibold my-2">
                        Target Groups/Roles
                       </label>
                       <Select
                         className=' p-1 px-4  rounded-md z-20'
                         options={options}
                         isMulti
                         value={formData.polls}
                         onChange={(selectedOption) =>
                         setFormData({ ...formData, polls: selectedOption })
                         }
                        />
                   </div>
                   <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            Poll Creator 
                       </label>
                       <input
                          type="text"
                          placeholder="Poll Creator"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                       />
                   </div>
                   <div className="flex flex-col">
                        <label htmlFor="" className="font-semibold my-2">
                            Poll Description
                        </label>
                        <textarea
                          name=""
                          id=""
                          cols="5"
                          rows="3"
                          placeholder="Description"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                    </div>
               </div>
            </div>
            </div>
            <div className='flex justify-center my-5 gap-2'>
                <button className='bg-black text-white p-2 px-4 rounded-md font-medium'>Create Polls</button>
            </div>
        </div>
    </section>
  )
}

export default CreatePolls