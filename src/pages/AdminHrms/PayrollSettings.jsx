import React, { useState } from 'react';
import PayrollSettingDetailsList from './PayrollSettingDetailsList';
import { GrHelpBook } from "react-icons/gr";

const PayrollSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [LIN, setLIN] = useState('');
  const [isESIC, setIsESIC] = useState(false);
  const [isLWF, setIsLWF] = useState(false);
  const [isPT, setIsPT] = useState(false);
  const [payrollDay, setPayrollDay] = useState(30);
  const [approver, setApprover] = useState('Company Admin');
  const [attendanceCycleStart, setAttendanceCycleStart] = useState(1);
  const [isTotalPayableDaysSame, setIsTotalPayableDaysSame] = useState(true);
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [password, setPassword] = useState('');
  const [lopDays, setLopDays] = useState('');
  const [ctcComponents, setCtcComponents] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  return (
    <div className='flex justify-between ml-20'>
        <PayrollSettingDetailsList/>

    <div className=" ml-10 p-8 bg-white shadow-md rounded-lg">
      <div className='flex justify-between'>
      <h2 className="text-2xl font-bold mb-6">Payroll General Settings</h2>
      <button 
        onClick={() => setIsEditing(!isEditing)} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button></div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">What LIN number have you registered your Company with?</label>
        <input 
          type="text" 
          value="LIN Number"
          onChange={(e) => setLIN(e.target.value)} 
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Is your company registered under ESIC?</label>
        <div className="flex items-center">
          <input 
            type="radio" 
            name="esic" 
            checked={isESIC} 
            onChange={() => setIsESIC(true)} 
            className="mr-2" 
            disabled={!isEditing}
          /> Yes
          <input 
            type="radio" 
            name="esic" 
            checked={!isESIC} 
            onChange={() => setIsESIC(false)} 
            className="ml-4 mr-2" 
            disabled={!isEditing}
          /> No
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Is your company registered under LWF?</label>
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
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Is your company registered under Professional Tax?</label>
        <div className="flex items-center">
          <input 
            type="radio" 
            name="pt" 
            checked={isPT} 
            onChange={() => setIsPT(true)} 
            className="mr-2" 
            disabled={!isEditing}
          /> Yes
          <input 
            type="radio" 
            name="pt" 
            checked={!isPT} 
            onChange={() => setIsPT(false)} 
            className="ml-4 mr-2"
            disabled={!isEditing} 
          /> No
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">What day of the month do you run your payroll?</label>
        <input 
          type="number" 
          value={payrollDay} 
          onChange={(e) => setPayrollDay(e.target.value)} 
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Which employee will approve each payroll run?</label>
        <div className="flex items-center">
          <input 
            type="radio" 
            name="approver" 
            checked={approver === 'Company Admin'} 
            onChange={() => setApprover('Company Admin')} 
            className="mr-2" 
            disabled={!isEditing}
          /> Company Admin
          <input 
            type="radio" 
            name="approver" 
            checked={approver === 'Another Employee'} 
            onChange={() => setApprover('Another Employee')} 
            className="ml-4 mr-2" 
            disabled={!isEditing}
          /> Another Employee
        </div>
      </div>
      {approver === 'Another Employee' && (
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Select Payroll Approver</label>
          <input 
            type="text" 
            className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing}
          />
        </div>
      )}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">On what day of the month does your attendance cycle begin?</label>
        <input 
          type="number" 
          value={attendanceCycleStart} 
          onChange={(e) => setAttendanceCycleStart(e.target.value)} 
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Are the total payable days in the month the same as the number of days in the attendance cycle?</label>
        <div className="flex items-center">
          <input 
            type="radio" 
            name="payableDays" 
            checked={isTotalPayableDaysSame} 
            onChange={() => setIsTotalPayableDaysSame(true)} 
            className="mr-2" 
            disabled={!isEditing}
          /> Yes
          <input 
            type="radio" 
            name="payableDays" 
            checked={!isTotalPayableDaysSame} 
            onChange={() => setIsTotalPayableDaysSame(false)} 
            className="ml-4 mr-2" 
            disabled={!isEditing}
          /> No
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Do you want to keep password for salary register or not?</label>
        <div className="flex items-center">
          <input 
            type="radio" 
            name="passwordProtected" 
            checked={isPasswordProtected} 
            onChange={() => setIsPasswordProtected(true)} 
            className="mr-2" 
            disabled={!isEditing}
          /> Yes
          <input 
            type="radio" 
            name="passwordProtected" 
            checked={!isPasswordProtected} 
            onChange={() => setIsPasswordProtected(false)} 
            className="ml-4 mr-2" 
            disabled={!isEditing}
          /> No
        </div>
      </div>
      {isPasswordProtected && (
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Please enter password for salary register</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded" 
          />
        </div>
      )}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">How would you like to add LOPs days while running the Payroll?</label>
        <input 
          type="text" 
          value={lopDays} 
          onChange={(e) => setLopDays(e.target.value)} 
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">What additional components do you want to show in the CTC structure?</label>
        <input 
          type="text" 
          value={ctcComponents} 
          onChange={(e) => setCtcComponents(e.target.value)} 
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Please select start month for YTD payslip</label>
        <input 
          type="text" 
          value={startMonth} 
          onChange={(e) => setStartMonth(e.target.value)} 
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing}
        />
      </div>
      {/* <button className="w-full p-2 bg-blue-500 text-white font-semibold rounded">Submit</button> */}
    </div> 
    <div className="my-4 mx-2 w-fit">
      <div className="flex flex-col shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
        <GrHelpBook size={20} />
        <h2>Help Center</h2>
        </div>
    <div className=''>
            
              <ul style={listItemStyle} className="flex flex-col gap-2">
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    Here in General Settings you can configure how payable days are calculated and can also set who will be the approving authority for the same.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    You can also set how the LOP days can be entered manually by selecting date or entered LOP days in LOP in Loss of Pay Days steps while running the payroll.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    You also get to select what components to additionally incorporate to the CTC structure.
                    </li>
                  </ul>
                </li>

                <li>
                  <p>
                    {/* <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a> */}
                    You can also set password for your salary register and the password will be suffix (@MMYYYY) with your entered password. E.g. If you enter password as abcd in Payroll Setting then password for salary register for month of April 2022 would be abcd@042022
                  </p>
                </li>
              </ul>
            </div></div></div>
    </div>
  );
};

export default PayrollSettings;