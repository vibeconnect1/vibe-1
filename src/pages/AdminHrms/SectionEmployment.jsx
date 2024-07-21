import React, { useState, useRef } from "react";
import EmployeeSections from './EmployeeSections'
import EditEmployeeDirectory from "./EditEmployeeDirectory";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Collapsible from "react-collapsible";
import CustomTrigger from "../../containers/CustomTrigger";
const SectionsEmployment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing(!isEditing);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const openModal1 = () => setModalIsOpen1(true);
  const closeModal1 = () => setModalIsOpen1(false);
  const openModal2 = () => setModalIsOpen2(true);
  const closeModal2 = () => setModalIsOpen2(false);

  const column = [
    {
      name: "view",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={openModal2}>
            <BsEye size={15} />
          </button>
        </div>
      ),
    },

    { name: "Effective From", selector: (row) => row.from, sortable: true },
    { name: "Effective To", selector: (row) => row.to, sortable: true },
    { name: "Confirmation Due Date", selector: (row) => row.due_date, sortable: true },
  
    { name: "Confirmation Date", selector: (row) => row.date, sortable: true },
    { name: "Employment Status", selector: (row) => row.estatus, sortable: true },
    
  ];
  const column1 = [
    {
      name: "view",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <button  onClick={openModal1}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },

    { name: "Effective From", selector: (row) => row.from, sortable: true },
    { name: "Effective To", selector: (row) => row.to, sortable: true },
    { name: "Branch Location", selector: (row) => row.loc, sortable: true },
  
    { name: "Department", selector: (row) => row.dept, sortable: true },
    { name: "Designation", selector: (row) => row.desgn, sortable: true },
    { name: "Reporting Supervisor", selector: (row) => row.supervisior, sortable: true },
    
  ];

  const data = [
    {
      from:"2/2/2024",
      to:"4/4/2024",
      date:"2/2/2024",
      due_date:"4/4/2024",
     estatus:"confirmed"
    }
  ]
  const data1 = [
    {
      from:"2/2/2024",
      to:"4/4/2024",
      loc:"Mumbai; Maharashtra",
      dept:"Marketing",
      desgn:"Digital Marketer",
      supervisior:"Mittu"
    }
  ]
  return (
    <div className='flex flex-col ml-20'>
        <EditEmployeeDirectory/>
       
        <div className='flex'>
            <div className=''>
                <EmployeeSections/>
            </div>
        <div className= "w-full p-6 bg-white rounded-lg shadow-md">
        <Collapsible
            readOnly
            trigger={
              <CustomTrigger isOpen={isOpen}>
                <h2 className="text-2xl font-bold mb-6">Employment</h2></CustomTrigger>
            }
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            className="bg-gray-100 my-4 p-2 rounded-md font-bold "
          >
            <div className="flex justify-end ">
             <button
            type="submit"
            className="bg-black text-white mb-2 hover:bg-gray-700 font-semibold py-2 px-4 rounded" onClick={toggleEdit}
          >
            Edit
          </button></div>
          <h3 className="text-xl font-bold mt-6 mb-4">General Employment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Employee Code *</label>
            <input type="text"   value="101"    className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
 placeholder="Employee Code" required readOnly={!isEditing}/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Joining Date *</label>
            <input type="date" className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} placeholder="Last Name" required readOnly={!isEditing}/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Employment Type *</label>
            <input type="text" value="Full Time" className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} placeholder="Last Name" required readOnly={!isEditing}/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Skill Level</label>
            <select type="tel" className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} placeholder="Mobile Number" 
            ><option value="">Excellent</option></select>
          </div>
         
        </div>
          </Collapsible>
      
     
          <Collapsible
            readOnly
            trigger={
              <CustomTrigger isOpen={isOpen}>
                <h2 className="text-2xl font-bold mb-6">Employment Status</h2></CustomTrigger>
            }
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            className="bg-gray-100 my-4 p-2 rounded-md font-bold "
          >
       <div className="flex justify-end ">
             <button onClick={openModal}
            
            className="bg-black text-white mb-2 hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Update Employment Status
          </button></div>

       
        <Table columns={column} data={data} isPagination={true} />
</Collapsible>
<Collapsible
            readOnly
            trigger={
              <CustomTrigger isOpen={isOpen}>
                <h2 className="text-2xl font-bold mb-6">Job Information</h2></CustomTrigger>
            }
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            className="bg-gray-100 my-4 p-2 rounded-md font-bold "
          >
       <div className="flex justify-end ">
             <button onClick={openModal1}
           
            className="bg-black text-white mb-2 hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Add Position
          </button></div>


       
        <Table columns={column1} data={data1} isPagination={true} />
       </Collapsible>
       {modalIsOpen && (
    <div className="fixed inset-0 z-50 flex items-center overflow-y-auto justify-center bg-gray-500 bg-opacity-50">
     <div class="max-h-screen  bg-white p-8 w-96 rounded-lg shadow-lg overflow-y-auto">
     <form >
        <h2 className="text-2xl font-bold mb-4">Update Employment Status</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Please select Employment Status you wish to update </label>
          <select className="mt-1 p-2 w-full border rounded-md" >
            <option value="cash">Probation</option>
            <option value="cash">Confirmed</option>
            
          </select>
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">What is the employee's confirmation due date? </label>
         <input type="date" className="mt-1 p-2 w-full border rounded-md"/>
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">Please enter comments, if any </label>
         <textarea type="date" className="mt-1 p-2 w-full border rounded-md"/>
        </div>

        <div className="flex mt-2 justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black mr-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold p-2 rounded-md"
                >
                  Save
                </button>
              </div>
        </form>
        </div>
        </div>
  )}

{modalIsOpen2 && (
    <div className="fixed inset-0 z-50 flex items-center overflow-y-auto justify-center bg-gray-500 bg-opacity-50">
     <div class="max-h-screen  bg-white p-8 w-96 rounded-lg shadow-lg overflow-y-auto">
     <form >
        <h2 className="text-2xl font-bold mb-4">Employment Status and Comment History</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Effective From </label>
         
          <input type="date" value={2/2/2024} className="mt-1 p-2 w-full border rounded-md"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirmation Date</label>
        
          <input type="date" value={2/2/2024} className="mt-1 p-2 w-full border rounded-md"/>
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">Employment Status </label>
         <select className="mt-1 p-2 w-full border rounded-md" >
            <option value="cash">Probation</option>
            <option value="cash">Confirmed</option>
            
          </select>
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">Comments and History </label>
         {/* <textarea type="date" className="mt-1 p-2 w-full border rounded-md"/> */}
        </div>

        <div className="flex mt-2 justify-end">
                <button
                  type="button"
                  onClick={closeModal2}
                  className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black mr-4"
                >
                  Cancel
                </button>
               
              </div>
        </form>
        </div>
        </div>
  )}

{modalIsOpen1 && (
    <div className="fixed inset-0 z-50 flex items-center overflow-y-auto justify-center bg-gray-500 bg-opacity-50">
     <div class="max-h-screen  bg-white p-8 w-96 rounded-lg shadow-lg overflow-y-auto">
     <form >
        <h2 className="text-2xl font-bold mb-4">Job Information</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Effective From * </label>
          <input type="date" className="mt-1 p-2 w-full border rounded-md"/>
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">Branch Location *</label>
         <select  className="mt-1 p-2 w-full border rounded-md"/>
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">Department * </label>
          <select  className="mt-1 p-2 w-full border rounded-md"
          >
          <option>HR</option>
          </select>
        
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">Designation * </label>
         <input type="text" className="mt-1 p-2 w-full border rounded-md"/>
        
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">Reporting supervisor </label>
         <input type="text" className="mt-1 p-2 w-full border rounded-md"/>
        
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">Comment </label>
         <input type="text" className="mt-1 p-2 w-full border rounded-md"/>
        
        </div>

        <div className="flex mt-2 justify-end">
                <button
                  type="button"
                  onClick={closeModal1}
                  className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black mr-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold p-2 rounded-md"
                >
                  Save
                </button>
              </div>
        </form>
        </div>
        </div>
  )}

        <div className="mt-6">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Submit</button>
        </div>
     
    </div>
        </div>
    </div>
  )
}

export default SectionsEmployment