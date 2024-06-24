import React, { useState } from 'react';
import UserDetailsList from './UserDetailsList';

const PermissionsField = () => {
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
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md ">
      <div className="mb-4">
        <label className="block text-gray-700">Is two-factor authentication applicable for employees?</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="twoFactorAuth"
              value="Yes"
              checked={twoFactorAuth === 'Yes'}
              onChange={(e) => setTwoFactorAuth(e.target.value)}
              className="mr-1"
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
            />
            No
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">What level of access do your employees have on their Basic Information?</label>
        <select
          value={basicInfoAccess}
          onChange={(e) => setBasicInfoAccess(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md"
        >
          <option value="Invisible">Invisible</option>
          <option value="View Only">View Only</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">What level of access do your employees have on their Address Information?</label>
        <select
          value={addressInfoAccess}
          onChange={(e) => setAddressInfoAccess(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md"
        >
          <option value="Invisible">Invisible</option>
          <option value="View Only">View Only</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">What level of access do your employees have on their Family Information?</label>
        <select
          value={familyInfoAccess}
          onChange={(e) => setFamilyInfoAccess(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md"
        >
          <option value="Invisible">Invisible</option>
          <option value="View Only">View Only</option>
        </select>
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
            />
            Phone
          </label>
          <label>
            <input
              type="checkbox"
              name="email"
              checked={visibleColumns.email}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Email
          </label>
          <label>
            <input
              type="checkbox"
              name="branchLocation"
              checked={visibleColumns.branchLocation}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Branch Location
          </label>
          <label>
            <input
              type="checkbox"
              name="designation"
              checked={visibleColumns.designation}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Designation
          </label>
        </div>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
    </form></div>
  );
};

export default PermissionsField;