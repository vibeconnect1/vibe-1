import React, { useState } from 'react';
import PayrollSettingDetailsList from './PayrollSettingDetailsList';
import { GrHelpBook } from "react-icons/gr";
const options = [
  { value: 'basic', label: 'Basic' },
  { value: 'hra', label: 'HRA' },
  { value: 'other', label: 'Other' },
  { value: 'special', label: 'Special' },
  { value: 'monthly-retainer-fee', label: 'Monthly Retainer Fee' },
];
const NoticeRecovery = () => {
  const [LIN, setLIN] = useState('');
  const [isESIC, setIsESIC] = useState(false);
  const [isLWF, setIsLWF] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownVisible1, setIsDropdownVisible1] = useState(false);

  const handleSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
 
  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options.map(option => option.value));
    }
  };
  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className='flex gap-4 ml-20'>
        <PayrollSettingDetailsList/>

    <div className="w-2/3  p-8 bg-white shadow-md rounded-lg">
      {/* <h2 className="text-2xl font-bold mb-6">Notice Period Recovery</h2> */}
      <div className='flex justify-between'>
      <h2 className="text-2xl font-bold mb-6">Notice Period Recovery</h2>
      <button 
        onClick={() => setIsEditing(!isEditing)} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button></div>
     
      <div className="mb-4">
        <label className="block font-semibold">
Is Notice Period Recovery applicable? *?</label>
        <div className="flex items-center">
          <input 
            type="radio" 
            name="lwf" 
            checked={isLWF} 
            onChange={() => setIsLWF(true)} 
            className="mr-2" 
            disabled={!isEditing}
          /> Yes
          <input 
            type="radio" 
            name="lwf" 
            checked={!isLWF} 
            onChange={() => setIsLWF(false)} 
            className="ml-4 mr-2" 
            disabled={!isEditing}
          /> No

        </div></div>
        <div className="mb-4">
        <label className="block font-semibold">
        How would you like to calculate Notice Period Recovery?</label>
        <div className="mb-4 w-64 relative">
      <button 
        className="p-2 border rounded w-full text-left bg-gray-200 hover:bg-gray-300"
        onClick={toggleDropdown}
      >
        Click Here to Select Component
      </button>
      {isDropdownVisible && (
        <div className="absolute z-10 w-full border rounded shadow p-2 mt-2 bg-white">
          <div className="mb-2">
            <button 
              className={`p-2 w-full text-left ${selectedOptions.length === options.length ? 'bg-blue-500 text-white' : ''}`}
              onClick={handleSelectAll}
            >
              Select all
            </button>
          </div>
          {options.map(option => (
            <div key={option.value} className="mb-2">
              <label className="inline-flex items-center">
                <input 
                  type="checkbox" 
                  className="form-checkbox h-5 w-5" 
                  checked={selectedOptions.includes(option.value)} 
                  onChange={() => handleSelect(option.value)} 
                />
                <span className="ml-2">{option.label}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
        <div className="mb-4">
          <label className="block text-gray-700">What is the denominator for calculating the Notice Recovery? *</label>
          <input
            type="number"
            value="30"
            // onChange={handleNoticeRecoveryDenominatorChange}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
            />
        </div>
    
    </div> 
    <div className="my-4 mx-2 w-fit">
      <div className="flex flex-col shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
        <GrHelpBook size={20} />
        <h2>Help Center</h2>
        </div>
    <div className=' '>
              
              <ul style={listItemStyle} className="flex flex-col gap-2">
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    If your company has a Notice Period policy where short fall in notice period need to be recovery from F&F salary then same can be configure here. </li>                </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    You can also set how the notice period recovery has to be calculated along with the denominator for calculating this.               </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    While running Payroll you can view the calculated value in Settlement and Recovery step and confirm to considered the same in salary
                    </li>
                  </ul>
                </li>

                {/* <li>
                  <p>
                    <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a>
                    You can also set password for your salary register and the password will be suffix (@MMYYYY) with your entered password. E.g. If you enter password as abcd in Payroll Setting then password for salary register for month of April 2022 would be abcd@042022
                  </p>
                </li> */}
              </ul>
            </div></div></div>
    </div>
  );
};

export default NoticeRecovery;