import React, { useState } from "react";
import AdminHRMS from './AdminHrms';
import { FaTrash } from "react-icons/fa";
import AddEmployeeDetailsList from "./AddEmployeeDetailsList";
import { GrHelpBook } from "react-icons/gr";

const Employment = () => {
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
              Employment Information
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mt-5">

        <div className="grid gap-2 items-center w-full">
          <label htmlFor="companyName" className="font-semibold">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            className="border border-gray-400 p-2 rounded-md"
            placeholder="Enter Company Name"
          />
        </div>

        <div className="grid gap-2 items-center w-full">
          <label htmlFor="jobTitle" className="font-semibold">
            Job Title:
          </label>
          <input
            type="text"
            id="jobTitle"
            className="border border-gray-400 p-2 rounded-md"
            placeholder="Enter Job Title"
          />
        </div>

        <div className="grid gap-2 items-center w-full">
          <label htmlFor="employmentStartDate" className="font-semibold">
            Employment Start Date:
          </label>
          <input
            type="date"
            id="employmentStartDate"
            className="border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="grid gap-2 items-center w-full">
          <label htmlFor="employmentEndDate" className="font-semibold">
            Employment End Date:
          </label>
          <input
            type="date"
            id="employmentEndDate"
            className="border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="grid gap-2 items-center w-full">
          <label htmlFor="responsibilities" className="font-semibold">
            Responsibilities:
          </label>
          <textarea
            id="responsibilities"
            className="border border-gray-400 p-2 rounded-md"
            placeholder="Enter Responsibilities"
          ></textarea>
        </div>

        <div className="grid gap-2 items-center w-full">
          <label htmlFor="reasonForLeaving" className="font-semibold">
            Reason for Leaving:
          </label>
          <input
            type="text"
            id="reasonForLeaving"
            className="border border-gray-400 p-2 rounded-md"
            placeholder="Enter Reason for Leaving"
          />
        </div>
        
      </div>
     
    </div>
    
    <div className='my-4 mx-2 w-fit'>
      <div className="flex flex-col  shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
        <GrHelpBook size={20} />
          <h2>Tool Tips</h2></div>
    <div className=' '>
              {/* <p className="font-medium">Help Center</p> */}
              <ul style={listItemStyle} className="flex flex-col gap-2">
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    Add  employment  details such as company name,employment start and end date.         </li>
                  </ul>
                </li>
                {/* <li>
                  <ul style={listItemStyle}>
                    <li>
                    Add Family Information such as Father's Name, Senior Citizen applicable, Disability Level etc              </li>
                  </ul>
                </li> */}
                {/* <li>
                  <ul style={listItemStyle}>
                    <li>
                    Add employee's Payment Information                   </li>
                  </ul>
                </li> */}

                <li>
                  <p>
                    {/* <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a> */}
Any custom fields added in Organisation {">"} Organisation Settings {">"} Employee Fields {">"} Employment Details will be reflected on the page               </p>
                </li>
               
               
              </ul>
            </div></div></div>
    </div>
  );
}

export default Employment