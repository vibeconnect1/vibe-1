import React, { useState } from "react";
import AdminHRMS from './AdminHrms';
import { FaTrash } from "react-icons/fa";
import AddEmployeeDetailsList from "./AddEmployeeDetailsList";
import { GrHelpBook } from "react-icons/gr";

const Statutory = () => {
    const formFields = [
        'PF Applicable',
        'ESIC Applicable',
        'PT Applicable',
        'LWF Applicable',
        'IT Applicable',
        'Gratuity Applicable',
        'NPS Applicable'
      ];
  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleDegreeChange = (event) => {
    setShowOtherInput(event.target.value === 'Other');
  };
  const [fields, setFields] = useState([{ branchName: '', bankAccount: '' }]);

  const handleAddFields = () => {
    setFields([...fields, { branchName: '', bankAccount: '' }]);
  };

  const handleRemoveFields = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleInputChange = (index, event) => {
    const newFields = fields.map((field, i) => {
      if (i === index) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setFields(newFields);
  };

  return (
    <div className='flex ml-20'>
        <AddEmployeeDetailsList/>
    <div className= "w-full p-6 bg-white rounded-lg shadow-md">
      
     
     
    

     

       

      
            <h2 className="border-b text-center text-xl border-black mb-6 font-bold mt-2">
            Statutory
          </h2>
          <form>
        <div className="grid grid-cols-2 gap-4">
          {formFields.map((label, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 mb-2">{label}</label>
              <div className="flex items-center">
                <input type="radio" id={`${label}-yes`} name={label} value="Yes" className="mr-2"/>
                <label htmlFor={`${label}-yes`} className="mr-4">Yes</label>
                <input type="radio" id={`${label}-no`} name={label} value="No" className="mr-2"/>
                <label htmlFor={`${label}-no`}>No</label>
              </div>
            </div>
          ))}
           <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tax Regime</label>
          <div className="flex items-center">
            <select  id="New Regime" name="Tax Regime" value="New Regime" className="mr-2 w-full px-3 py-2 border border-gray-300 rounded-md"/>
            {/* <label htmlFor="New Regime" className="mr-4">New Regime</label> */}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tax Regime Updated at</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tax Regime Updated by</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Decimal Rates Allowed</label>
          <div className="flex items-center">
            <input type="radio" id="Decimal Rates Allowed-yes" name="Decimal Rates Allowed" value="Yes" className="mr-2"/>
            <label htmlFor="Decimal Rates Allowed-yes" className="mr-4">Yes</label>
            <input type="radio" id="Decimal Rates Allowed-no" name="Decimal Rates Allowed" value="No" className="mr-2"/>
            <label htmlFor="Decimal Rates Allowed-no">No</label>
          </div>
        </div>
      </form>

     

      
    </div>
    
    <div className='my-4 mx-2 w-fit'>
      <div className="flex flex-col  shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
        <GrHelpBook size={20} />
          <h2>Tool Tips</h2></div>
    <div className=' '>
             
            </div></div></div>
    </div>
  );
}

export default Statutory