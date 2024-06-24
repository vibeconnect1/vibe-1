import React, { useState } from 'react'
import Navbar from '../../components/Navbar';

function CreateFieldSenseLeads() {
    const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <section className='flex'>
        <div className='hidden md:block'>
           <Navbar/>
        </div>
        <div className="w-full flex mx-3 flex-col overflow-hidden mb-5">
            <h2 className="text-center text-xl font-bold my-5 p-2 bg-black rounded-full text-white mx-10">
                Create Leads
            </h2>
            <div className='flex justify-center'>
            <div className='border-2 border-black rounded-md my-5 w-4/5'>
                <div className='md:grid grid-cols-3 mx-5 gap-5 my-5'>
                    <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            Lead Name
                       </label>
                       <input
                          type="text"
                          placeholder="Lead Name"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                       />
                   </div>
                   <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            Lead Source 
                       </label>
                       <input
                          type="text"
                          placeholder="Lead Source"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                       />
                   </div>
                   <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            Contact Phone
                       </label>
                       <input
                          type="number"
                          placeholder="Phone"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                       />
                   </div>
                   <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            Contact Email
                       </label>
                       <input
                          type="email"
                          placeholder="Email"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                       />
                   </div>
                   <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            Company Name
                       </label>
                       <input
                          type="text"
                          placeholder="Company Name"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                       />
                   </div>
                   <div className="flex flex-col ">
                      <label htmlFor="" className="font-semibold my-2">Lead Status  
                       </label>
                        <select
                          value={selectedOption}
                          onChange={handleSelectChange}
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        >
                            <option value="">Select status</option>
                            <option value="active">Active</option>
                            <option value="lost">Lost</option>
                            <option value="ongoing">Ongoing Discussion</option>
                            <option value="onHold">On Hold</option>
                            <option value="business">Business</option>
                        </select>
                   </div>
                   <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            Assigned Sales Representative
                       </label>
                       <input
                          type="text"
                          placeholder="Company Name"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                       />
                   </div>
                   <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            Last Contact Date
                       </label>
                       <input
                          type="date"
                          placeholder="Last Date"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                       />
                   </div>
                   <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold my-2">
                            Next Follow-up Date
                       </label>
                       <input
                          type="date"
                          placeholder="Next Follow-up Date"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                       />
                   </div>
               </div>
            </div>
            </div>
            <div className='flex justify-center mb-10 gap-2'>
                <button className='bg-black text-white p-2 px-4 rounded-md font-medium'>Create Leads</button>
            </div>
        </div>
    </section>
  )
}

export default CreateFieldSenseLeads