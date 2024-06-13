import React from 'react'
import Navbar from '../../../components/Navbar'

function EditAddressesSetup() {
  return (
    <section className='flex'>
        <div className='hidden md:block'>
           <Navbar/>
        </div>
        <div className="w-full flex mx-3 flex-col overflow-hidden">
            <h2 className="text-center text-xl font-bold my-5 p-2 bg-black rounded-full text-white mx-10">
                Edit Address Setup
            </h2>
            <div className='flex justify-center'>
                <div className='sm:border border-gray-400 p-1 sm:px-10 rounded-lg w-4/5 mb-14'>
                   <h2 className='border-b border-black my-5 font-semibold text-xl'>
                       Address Setup
                   </h2>
                   <div className='md:grid grid-cols-3 gap-5 my-3'>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="font-semibold my-2">
                                Address Title 
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Address Title"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="font-semibold my-2">
                                Building Name 
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Building Name "
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="font-semibold my-2">
                                Email 
                            </label>
                            <input
                              type="Email"
                              placeholder="Enter Email"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="font-semibold my-2">
                                State 
                            </label>
                            <select className="border p-1 px-4 border-gray-500 rounded-md">
                                <option value="">Select State  </option>
                            </select>
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="font-semibold my-2">
                                Phone Number 
                            </label>
                            <input
                              type="number"
                              placeholder="Enter Phone Number"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="font-semibold my-2">
                                Fax Number 
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Fax Number"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="font-semibold my-2">
                                PAN Number 
                            </label>
                            <input
                              type="text"
                              placeholder="Enter PAN Number"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="font-semibold my-2">
                                GST Number 
                            </label>
                            <input
                              type="text"
                              placeholder="Enter GST Number"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                   </div>
                   <div className='md:grid grid-cols-2 gap-5 my-3'>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-2">
                                Address
                           </label>
                           <textarea
                              name=""
                              id=""
                              cols="5"
                              rows="3"
                              placeholder="Enter Address"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-2">
                                Notes 
                           </label>
                           <textarea
                              name=""
                              id=""
                              cols="5"
                              rows="3"
                              placeholder="Notes "
                              className="border p-1 px-4 border-gray-500 rounded-md"
                          />
                        </div>
                   </div>
                   <div className="flex justify-center my-5 gap-2 ">
                        <button className="bg-black text-white p-2 px-4 rounded-md font-medium">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EditAddressesSetup