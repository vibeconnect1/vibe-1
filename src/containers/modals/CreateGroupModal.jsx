import React, { useState } from 'react';
import ModalWrapper from '../modals/ModalWrapper';
import image from "/profile.png";
const CreateGroupModal = ({ onclose }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {
    // Handle image save logic here, e.g., upload to server
    console.log('Image saved:', profileImage);
  };

  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col justify-center">
        <h2 className="flex gap-4 items-center justify-center font-bold text-lg my-2">
          Create Group
        </h2>
        <div className="border-t-2 border-black">
          <div className="md:grid grid-cols gap-2  md:w-96">
            <div className="flex flex-col my-2">
              <label className=' font-semibold my-2'>Group Name</label>
              <input
                type="text"
                placeholder="Add Group Name"
                className="border p-1 py-2 border-gray-500 rounded-md "
              />
            </div>
            <div
              className="flex flex-col  cursor-pointer"
              onClick={() => document.getElementById('profileImage').click()}
            >
              <img
                src={image} // Default placeholder image
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                alt="profile-preview"
              />
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            <div className="flex flex-col ">
              <label className="mb-1 text-lg font-semibold">Select Type</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="option1"
                  name="option"
                  value="Option 1"
                  checked={selectedOption === 'Option 1'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="option1" className="mr-4">Public Type</label>
                <input
                  type="radio"
                  id="option2"
                  name="option"
                  value="Option 2"
                  checked={selectedOption === 'Option 2'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="option2">Private Type</label>
              </div>
            </div>
            <div className='md:grid grid-cols gap-2 md:w-96'>
                <div className='flex flex-col'>
                    <label className=' font-semibold my-2'>Group Description</label>
                    <textarea
                      placeholder="Description"
                      className="border p-1 py-2 border-gray-500 rounded-md "
                      rows="3"
                    >
              </textarea>
                </div>
            </div>
            <div className='md:grid grid-cols gap-2 md:w-96'>
                <div className='flex flex-col'>
                    <label className=' font-semibold my-2'>Select Owner/Administrator</label>
                    <select className="border p-1 py-2 border-gray-500 rounded-md w-full">
                        <option value=""></option>
                    </select>
                </div>
            </div>
            <div className='md:grid grid-cols gap-2 md:w-96'>
                <div className='flex flex-col'>
                    <label className=' font-semibold my-2'>Group Members</label>
                    <select className="border p-1 py-2 border-gray-500 rounded-md w-full">
                        <option value=""></option>
                    </select>
                </div>
            </div>
            <div className='md:grid grid-cols gap-2 md:w-96'>
                <div className='flex flex-col'>
                    <h3 className='font-semibold '>Group Roles/Permissions</h3>
                    <table className="border-collapse w-full">
                        <thead>
                            <tr>
                                <th className="border py-2 px-4">Role</th>
                                <th className="border py-2 px-4">Permissions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Populate with roles and permissions data */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='md:grid grid-cols gap-2 md:w-96'>
                <div>
                    <h3 className='font-semibold text-lg'>Group Activities</h3>
                    <ul className="border p-2 rounded-md w-full">
                    <input
                      type="text"
                      placeholder="activity"
                      className="border p-1 py-2 border-gray-500 rounded-md "
                    />
                        {/* Populate with recent activity data */}
                    </ul>
                </div>
            </div>
            <div className='md:grid grid-cols gap-2 md:w-96'>
                <h3 className='font-semibold text-lg'>Membership Management</h3>
                <div>
                    <label className='my-2 font-semibold'>Add Member</label>
                    <select className="border p-1 py-2 border-gray-500 rounded-md w-full">
                        <option value="">Select Employee</option>
                        {/* Populate with employee data */}
                    </select>
                    <button className="bg-blue-500 text-white p-1 px-3 rounded-md my-2">Add</button>
                </div>
                <div className='my-1'>
                    <label className='my-2 font-semibold'>Remove Member</label>
                    <select className="border p-1 py-2 border-gray-500 rounded-md w-full">
                        <option value="">Select Member</option>
                        {/* Populate with current group members */}
                    </select>
                    <button className="bg-red-500 text-white p-1 px-3 rounded-md my-2">Remove</button>
                </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-black my-3"></div>
        <div className="flex justify-center">
          <button className="bg-black p-1 px-4 py-2 border-2 rounded-md text-white font-medium border-black">
            Create
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default CreateGroupModal;
