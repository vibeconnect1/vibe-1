import React, { useState } from "react";
import EmployeeSections from './EmployeeSections';
import EditEmployeeDirectory from "./EditEmployeeDirectory";
import Table from "../../components/table/Table";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Collapsible from "react-collapsible";
import CustomTrigger from "../../containers/CustomTrigger";

const SectionsPersonal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const toggleEdit = () => setIsEditing(!isEditing);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    closeModal();
  };

  const column = [
    {
      name: "view",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={openModal}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
    { name: "Payment Type", selector: (row) => row.Payment_Type, sortable: true },
    { name: "Payment Mode", selector: (row) => row.mode, sortable: true },
    { name: "Bank Name", selector: (row) => row.name, sortable: true },
    { name: "Bank Account Number", selector: (row) => row.account, sortable: true },
    { name: "Bank IFSC Code", selector: (row) => row.ifsc, sortable: true },
  ];

  const data = [
    {
      Payment_Type: "Salary",
      mode: "Cash",
      name: "State Bank of India",
      account: "12356",
      ifsc: "BK4568",
    },
  ];

  return (
    <div className='flex flex-col ml-20'>
      <EditEmployeeDirectory />
      <div className='flex'>
        <div className=''>
          <EmployeeSections />
        </div>
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
          <Collapsible
            trigger={
              <CustomTrigger isOpen={isOpen}>
                <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
              </CustomTrigger>
            }
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            className="bg-gray-100 my-4 p-2 rounded-md font-bold"
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-black text-white mb-2 hover:bg-gray-700 font-semibold py-2 px-4 rounded"
                onClick={toggleEdit}
              >
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name *</label>
                <input
                  type="text"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="First Name"
                  value="Ajay"
                  required
                  readOnly={!isEditing}
                />

              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                <input
                  type="text"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  value="Baniya"
                  placeholder="Last Name"
                  required
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email ID *</label>
                <input
                  type="email"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="Email"
                  value="ajaybaniya@gmail.com"
                  required
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile</label>
                <input
                  type="tel"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="Mobile Number"
                  value="7867293898"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender *</label>
                <select
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  required
                  disabled={!isEditing}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
                <input
                  type="date"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  required
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">PAN</label>
                <input
                  type="text"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="PAN NUMBER"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Aadhar No</label>
                <input
                  type="text"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="Aadhar Number"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                <select
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  disabled={!isEditing}
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>
            </div>
          </Collapsible>

          <Collapsible
            trigger={
              <CustomTrigger isOpen={isOpen}>
                <h2 className="text-2xl font-bold mt-6 mb-4">Family Information</h2>
              </CustomTrigger>
            }
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            className="bg-gray-100 my-4 p-2 rounded-md font-bold"
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-black text-white mb-2 hover:bg-gray-700 font-semibold py-2 px-4 rounded"
                onClick={toggleEdit}
              >
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Father's Name</label>
                <input
                  type="text"
                  value="Nikhil Baniya"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="Father's Name"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
                <input
                  type="text"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="Mother's Name"
                  value="Shreya Baniya"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Spouse's Name</label>
                <input
                  type="text"
                  value="Ramesh Baniya"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="Spouse's Name"
                  readOnly={!isEditing}
                />
              </div>
            </div>
          </Collapsible>

          <Collapsible
            trigger={
              <CustomTrigger isOpen={isOpen}>
                <h2 className="text-2xl font-bold mt-6">Address Information</h2>
              </CustomTrigger>
            }
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            className="bg-gray-100 my-4 p-2 rounded-md font-bold"
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-black text-white mb-2 hover:bg-gray-700 font-semibold py-2 px-4 rounded"
                onClick={toggleEdit}
              >
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
                <input
                  type="text"
                  value="Pallur Hills"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="Address Line 1"
                  maxLength="150"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
                <input
                  type="text"
                  value="Pallur Hills"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="Address Line 2"
                  maxLength="150"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  value="Berhampur"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="City"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">State/Province</label>
                <input
                  type="text"
                  value="Odisha"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="State/Province"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Zip / Pin Code</label>
                <input
                  type="text"
                  value="768965"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="Zip / Pin Code"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  value="India"
                  className={`mt-1 p-2 w-full border rounded-md ${!isEditing ? 'bg-gray-200' : ''}`}
                  placeholder="Country"
                  readOnly={!isEditing}
                />
              </div>
            </div>
          </Collapsible>

          <Collapsible
            trigger={
              <CustomTrigger isOpen={isOpen}>
                <h2 className="text-2xl font-bold mt-6 mb-4">Payment Information</h2>
              </CustomTrigger>
            }
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            className="bg-gray-100 my-4 p-2 rounded-md font-bold"
          >
            <Table columns={column} data={data} isPagination={true} />
          </Collapsible>

          {modalIsOpen && (
            <div className="fixed inset-0 z-50 flex items-center overflow-y-auto justify-center bg-gray-500 bg-opacity-50">
              <div className="max-h-screen bg-white p-8 w-96 rounded-lg shadow-lg overflow-y-auto">
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold mb-4">Edit Payment Type</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Payment Type *</label>
                    <select className="mt-1 p-2 w-full border rounded-md">
                      <option value="cash">Salary</option>
                      <option value="cash">Expense</option>
                      <option value="cash">Offcycle</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700">Payment Mode *</label>
                    <select className="mt-1 p-2 w-full border rounded-md">
                      <option value="cash">Cash</option>
                    </select>
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

          <div className="mt-6">
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionsPersonal;
