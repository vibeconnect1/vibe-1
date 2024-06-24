import React, { useState } from 'react';
import UserDetailsList from './UserDetailsList';

const NewsFeedPermission = () => {
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
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md ">
      <div className="mb-4">
        <label className="block text-gray-700">Can employees share updates with people in their Company?</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="shareWithCompany"
              value="Yes"
              checked={permissions.shareWithCompany === 'Yes'}
              onChange={handleChange}
              className="mr-1"
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
              className="mr-1"
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
              className="mr-1"
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
              className="mr-1"
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
              className="mr-1"
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
              className="mr-1"
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
              className="mr-1"
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
              className="mr-1"
            />
            No
          </label>
        </div>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
    </form></div>
  );
};

export default NewsFeedPermission