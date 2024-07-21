import React, { useState } from 'react';
import UserDetailsList from './UserDetailsList';
import { GrHelpBook } from "react-icons/gr";

const NewsFeedPermission = () => {
  const [isEditing, setIsEditing] = useState(false);

  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  const [permissions, setPermissions] = useState({
    shareWithCompany: 'No',
    shareWithLocation: 'No',
    shareWithOtherLocation: 'No',
    shareWithSpecificPeople: 'No',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(permissions);
  };

  return (
    <div className='flex gap-5 ml-20'>
        <UserDetailsList/>
    <form onSubmit={handleSubmit} className="p-6 bg-white w-2/3 shadow-md rounded-md ">
      <div className="mb-4">
        {/* <h1 className='mt-1 mb-10 font-bold'>Employee News Feed Permission</h1> */}
        <div className='flex justify-between'>
       
       <h2 className="text-2xl font-bold mb-6">Employee News Feed Permission</h2>

     <button 
       onClick={() => setIsEditing(!isEditing)} 
       className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
     >
       {isEditing ? 'Save' : 'Edit'}
     </button></div>
        <label className="block text-gray-700">Can employees share updates with people in their Company?</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="shareWithCompany"
              value="Yes"
              checked={permissions.shareWithCompany === 'Yes'}
              onChange={handleChange}
              className="mr-1" disabled={!isEditing}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="shareWithCompany"
              value="No"
              checked={permissions.shareWithCompany === 'No'}
              onChange={handleChange}
              className="mr-1" disabled={!isEditing}
            />
            No
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Can employees share updates with people in their Location?</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="shareWithLocation"
              value="Yes"
              checked={permissions.shareWithLocation === 'Yes'}
              onChange={handleChange}
              className="mr-1" disabled={!isEditing}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="shareWithLocation"
              value="No"
              checked={permissions.shareWithLocation === 'No'}
              onChange={handleChange}
              className="mr-1" disabled={!isEditing}
            />
            No
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Can employees share updates with people in other Locations?</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="shareWithOtherLocation"
              value="Yes"
              checked={permissions.shareWithOtherLocation === 'Yes'}
              onChange={handleChange}
              className="mr-1" disabled={!isEditing}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="shareWithOtherLocation"
              value="No"
              checked={permissions.shareWithOtherLocation === 'No'}
              onChange={handleChange}
              className="mr-1" disabled={!isEditing}
            />
            No
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Can employees share updates with specific people in their Company?</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="shareWithSpecificPeople"
              value="Yes"
              checked={permissions.shareWithSpecificPeople === 'Yes'}
              onChange={handleChange}
              className="mr-1" disabled={!isEditing}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="shareWithSpecificPeople"
              value="No"
              checked={permissions.shareWithSpecificPeople === 'No'}
              onChange={handleChange}
              className="mr-1" disabled={!isEditing}
            />
            No
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

export default NewsFeedPermission