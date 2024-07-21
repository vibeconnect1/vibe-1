import React, { useState } from 'react';
import UserDetailsList from './UserDetailsList';
import { GrHelpBook } from "react-icons/gr";

const PermissionsField = () => {
  const [isEditing, setIsEditing] = useState(false);

  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  const [twoFactorAuth, setTwoFactorAuth] = useState('No');
  const [basicInfoAccess, setBasicInfoAccess] = useState('Invisible');
  const [addressInfoAccess, setAddressInfoAccess] = useState('Invisible');
  const [familyInfoAccess, setFamilyInfoAccess] = useState('Invisible');
  const [canSeeDirectory, setCanSeeDirectory] = useState('No');
  const [visibleColumns, setVisibleColumns] = useState({
    phone: false,
    email: false,
    branchLocation: false,
    designation: false,
  });

  const handleCheckboxChange = (e) => {
    setVisibleColumns({
      ...visibleColumns,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      twoFactorAuth,
      basicInfoAccess,
      addressInfoAccess,
      familyInfoAccess,
      canSeeDirectory,
      visibleColumns,
    };
    console.log(formData);
  };

  return (
    <div className='flex ml-20'>
        <UserDetailsList/>
    <form onSubmit={handleSubmit} className="p-6 w-2/3 bg-white shadow-md rounded-md ">
      <div className="mb-4">
       
        <div className='flex justify-between'>
       
        <h2 className="text-2xl font-bold mb-6">Employee Permission</h2>

      <button 
        onClick={() => setIsEditing(!isEditing)} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button></div>
        <label className="block text-gray-700">Is two-factor authentication applicable for employees?</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="twoFactorAuth"
              value="Yes"
              checked="true"
              onChange={(e) => setTwoFactorAuth(e.target.value)}
              className="mr-1"
              disabled={!isEditing}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="twoFactorAuth"
              value="No"
              checked={twoFactorAuth === 'No'}
              onChange={(e) => setTwoFactorAuth(e.target.value)}
              className="mr-1"
              disabled={!isEditing}
            />
            No
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">What level of access do your employees have on their Basic Information?</label>
        <input
              type="radio"
              name="Basic"
              value="Yes"
              checked={true}
              // onChange={(e) => setTwoFactorAuth(e.target.value)}
              className="mr-1" disabled={!isEditing}
            />
            {/* Yes */}
         &nbsp;
          Invisible&nbsp;&nbsp;
            <input
              type="radio"
              name="Basic"
              value="No"
              // checked={twoFactorAuth === 'No'}
              // onChange={(e) => setTwoFactorAuth(e.target.value)}
              className="mr-1" disabled={!isEditing}
            /> &nbsp;
            <label htmlFor="">View Only</label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">What level of access do your employees have on their Address Information?</label>
        <input
              type="radio"
              name="Address"
              value="Yes"
              checked={true}
              // onChange={(e) => setTwoFactorAuth(e.target.value)}
              className="mr-1" disabled={!isEditing}
            /> &nbsp;
            Invisible
         
            &nbsp;&nbsp;
            <input
              type="radio"
              name="Address"
              value="No"
              // checked={twoFactorAuth === 'No'}
              // onChange={(e) => setTwoFactorAuth(e.target.value)}
              className="mr-1" disabled={!isEditing}
            /> &nbsp;
            View Only
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">What level of access do your employees have on their Family Information?</label>
        <input
              type="radio"
              name="Family"
              // value="Yes"
              // checked={true}
              // onChange={(e) => setTwoFactorAuth(e.target.value)}
              className="mr-1"
              disabled={!isEditing}
            />&nbsp;
            Invisible
         
            &nbsp;&nbsp;
            <input
              type="radio"
              name="Family"
              value="No"
              // checked={twoFactorAuth === 'No'}
              // onChange={(e) => setTwoFactorAuth(e.target.value)}
              className="mr-1"
              disabled={!isEditing}
            /> &nbsp;
            View Only
            
         
          
         
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Can employees see the Employee Directory in the employee web portal?</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="canSeeDirectory"
              value="Yes"
              checked={canSeeDirectory === 'Yes'}
              onChange={(e) => setCanSeeDirectory(e.target.value)}
              className="mr-1"
              disabled={!isEditing}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="canSeeDirectory"
              value="No"
              checked={canSeeDirectory === 'No'}
              onChange={(e) => setCanSeeDirectory(e.target.value)}
              className="mr-1"
              disabled={!isEditing}
            />
            No
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Which columns should be visible in the employee directory in the employee web portal?</label>
        <div className="flex flex-col">
          <label>
            <input
              type="checkbox"
              name="phone"
              checked={visibleColumns.phone}
              onChange={handleCheckboxChange}
              className="mr-2"
              disabled={!isEditing}
            />
            Phone
          </label>
          <label>
            <input
              type="checkbox"
              name="email"
              checked={visibleColumns.email}
              onChange={handleCheckboxChange}
              className="mr-2" disabled={!isEditing}
            />
            Email
          </label>
          <label>
            <input
              type="checkbox"
              name="branchLocation"
              checked={visibleColumns.branchLocation}
              onChange={handleCheckboxChange}
              className="mr-2" disabled={!isEditing}
            />
            Branch Location
          </label>
          <label>
            <input
              type="checkbox"
              name="designation"
              checked={visibleColumns.designation}
              onChange={handleCheckboxChange}
              className="mr-2" disabled={!isEditing}
            />
            Designation
          </label>
        </div>
      </div>

      {/* <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button> */}
    </form>
    <div className='my-4 mx-2 w-fit'>
    <div className="flex flex-col mt-4 mr-2 shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
        <GrHelpBook size={20} />
          <h2>Help Center</h2></div>
    <div className=' '>
              {/* <p className="font-medium">Help Center</p> */}
              <ul style={listItemStyle} className="flex flex-col gap-2">
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    You can add administrators and manage admin access rights like IP restrictions, 2-factor authentication, etc             </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    You can also restrict access permission based on departments, locations, etc.                 </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
You can add and manage third party users and invite them to join login to the Vibe Connect software. For e.g., External auditor, external consultants, etc.                    </li>
                  </ul>
                </li>

                <li>
                  <p>
                    {/* <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a> */}
You can view/edit/delete admin permissions at any time.                  </p>
                </li>
              </ul>
            </div></div></div>
    </div>
  );
};

export default PermissionsField;