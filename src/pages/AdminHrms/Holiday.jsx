import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { BiEdit } from "react-icons/bi";
import Table from "../../components/table/Table";
import OrganisationSetting from "./OrganisationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";
import { useSelector } from "react-redux";

const Holiday = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const themeColor = useSelector((state) => state.theme.color);

  const data=[
    {
      Name: "Holi",
      Date: "23/10/2024",
      type: "Mandatory",
      apply: "all",
    },
  ];

  const columns = [
   
    {
      name: "Holiday Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.Date,
      sortable: true,
    },
    {
      name: "Type Of Holiday",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Applies To",
      selector: (row) => row.apply,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button  onClick={() => setIsModalOpen1(true)}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];

  const openModal = (row) => {
    // You can pre-fill the modal with row data here if editing is needed
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSave = (newHoliday) => {
    setData([...data, newHoliday]);
    closeModal();
  };

  return (
    <section className="flex ml-20">
      <OrganisationSetting />
      <div className="w-full flex m-3 flex-col overflow-hidden">
        <div className="flex gap-2 justify-end my-5">
          <select
            type="number"
            
            className="border border-gray-400 w-32 placeholder:text-sm rounded-lg p-2"
            >
              <option value="">2024</option>
              <option value="">2025</option>
            </select>
         <button style={{background:themeColor}} className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded">Download Report</button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add
          </button>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      <HRMSHelpCenter help={"holiday"} />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-xl font-bold mb-4">Add Holiday</h2>
            <HolidayModal onSave={handleSave} onClose={closeModal} />
          </div>
        </div>
      )}
       {isModalOpen1 && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Holiday</h2>
            <HolidayModal onSave={handleSave} onClose={() => setIsModalOpen1(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

const HolidayModal = ({ onSave, onClose }) => {
  const [holidayName, setHolidayName] = useState('');
  const [holidayDate, setHolidayDate] = useState('');
  const [holidayType, setHolidayType] = useState('Mandatory');
  const [applicableEmployees, setApplicableEmployees] = useState('All Employees');

  const handleSubmit = () => {
    const newHoliday = {
      Name: holidayName,
      Date: holidayDate,
      type: holidayType,
      apply: applicableEmployees
    };
    onSave(newHoliday);
  };

  return (
    <>
      <div className="mb-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Holiday Name *</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={holidayName}
          onChange={(e) => setHolidayName(e.target.value)}
          required
        />
       </div>
        <label className="block text-sm font-medium text-gray-700">Select Holiday Icon *</label>
        <input
          type="file"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={holidayName}
          onChange={(e) => setHolidayName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Date *</label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={holidayDate}
          onChange={(e) => setHolidayDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Type *</label>
        <select
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={holidayType}
          onChange={(e) => setHolidayType(e.target.value)}
          required
        >
          <option value="Mandatory">Mandatory</option>
          <option value="Flexi">Flexi</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Applies To *</label>
        <select
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={applicableEmployees}
          onChange={(e) => setApplicableEmployees(e.target.value)}
          required
        >
          <option value="All Employees">All Employees</option>
          <option value="Some Employees">Some Employees</option>
          <option value="Specific Employees">Specific Employees</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <button
          className="px-4 py-2 bg-gray-300 rounded-md"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Holiday;