import React, { useState, useRef } from "react";
import EmployeeSections from './EmployeeSections'
import EditEmployeeDirectory from "./EditEmployeeDirectory";
import Collapsible from "react-collapsible";
import CustomTrigger from "../../containers/CustomTrigger";

const SectionStatutory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const formFields = [
    'PF Applicable',
    'ESIC Applicable',
    'PT Applicable',
    'LWF Applicable',
    'IT Applicable',
    'Gratuity Applicable',
    'NPS Applicable'
  ];
  return (
    <div className='flex flex-col ml-20'>
        <EditEmployeeDirectory/>
       
        <div className='flex'>
            <div className=''>
                <EmployeeSections/>
            </div>
            <div className=" w-full mt-10 p-5 border border-gray-300 shadow-lg rounded-md">
             <Collapsible
            readOnly
            trigger={
              <CustomTrigger isOpen={isOpen}>
                <h2 className="text-2xl font-bold mb-6">Statutory</h2></CustomTrigger>
            }
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            className="bg-gray-100 my-4 p-2 rounded-md font-bold "
          >
            <div className="flex justify-end ">
             <button
            type="submit"
            className="bg-black text-white mb-2 hover:bg-gray-700 font-semibold py-2 px-4 rounded"
            onClick={() => setIsEditing(!isEditing)} 
          >
            Edit
          </button></div>
           
            <h2 className="text-2xl font-bold mb-6">Statutory Setting Information</h2>
            <form>
        <div className="grid grid-cols-2 gap-4">
          {formFields.map((label, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 mb-2">{label}</label>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id={`${label}-yes`} 
                  name={label} 
                  value="Yes" 
                  className="mr-2" 
                  disabled={!isEditing}
                />
                <label htmlFor={`${label}-yes`} className="mr-4">Yes</label>
                <input 
                  type="radio" 
                  id={`${label}-no`} 
                  name={label} 
                  value="No" 
                  className="mr-2" 
                  disabled={!isEditing}
                />
                <label htmlFor={`${label}-no`}>No</label>
              </div>
            </div>
          ))}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Tax Regime</label>
            <div className="flex items-center">
              <select
                id="Tax Regime"
                name="Tax Regime"
                className={`mr-2 w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                disabled={!isEditing}
              >
                <option value="Old Regime">Old Regime</option>
                <option value="New Regime">New Regime</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Tax Regime Updated at</label>
            <input 
              type="text" 
              className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
              readOnly={!isEditing}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Tax Regime Updated by</label>
            <input 
              type="text" 
              className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
              readOnly={!isEditing}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Decimal Rates Allowed</label>
          <div className="flex items-center">
            <input 
              type="radio" 
              id="Decimal Rates Allowed-yes" 
              name="Decimal Rates Allowed" 
              value="Yes" 
              className="mr-2" 
              disabled={!isEditing}
            />
            <label htmlFor="Decimal Rates Allowed-yes" className="mr-4">Yes</label>
            <input 
              type="radio" 
              id="Decimal Rates Allowed-no" 
              name="Decimal Rates Allowed" 
              value="No" 
              className="mr-2" 
              disabled={!isEditing}
            />
            <label htmlFor="Decimal Rates Allowed-no">No</label>
          </div>
        </div>
      </form>
      </Collapsible></div>
    
        </div>
    </div>
  )
}

export default SectionStatutory