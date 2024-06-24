import React, { useState } from 'react';
import PayrollSettingDetailsList from './PayrollSettingDetailsList';

const NoticeRecovery = () => {
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

  return (
    <div className='flex gap-4 ml-20'>
        <PayrollSettingDetailsList/>

    <div className="max-w-3xl  p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Notice Period Recovery</h2>
      {/* <div className="mb-4">
        <label className="block mb-2 font-semibold">What LIN number have you registered your Company with?</label>
        <input 
          type="text" 
          value={LIN} 
          onChange={(e) => setLIN(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded" 
        />
      </div> */}
      <div className="mb-4">
        <label className="block font-semibold">Is your company elgible for Gratuity?</label>
        <div className="flex items-center">
          <input 
            type="radio" 
            name="esic" 
            checked={isESIC} 
            onChange={() => setIsESIC(true)} 
            className="mr-2" 
          /> Yes
          <input 
            type="radio" 
            name="esic" 
            checked={!isESIC} 
            onChange={() => setIsESIC(false)} 
            className="ml-4 mr-2" 
          /> No
        </div>
      </div>
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
          /> Yes
          <input 
            type="radio" 
            name="lwf" 
            checked={!isLWF} 
            onChange={() => setIsLWF(false)} 
            className="ml-4 mr-2" 
          /> No

        </div></div>
        <div className="mb-4">
        <label className="block font-semibold">
        How would you like to calculate Notice Period Recovery?</label>
        <div className="flex items-center">
          <input 
            type="radio" 
            name="lwf" 
            checked={isLWF} 
            onChange={() => setIsLWF(true)} 
            className="mr-2" 
          /> Yes
          <input 
            type="radio" 
            name="lwf" 
            checked={!isLWF} 
            onChange={() => setIsLWF(false)} 
            className="ml-4 mr-2" 
          /> No

        </div></div>
        <div className="mb-4">
          <label className="block text-gray-700">Notice Recovery Denominator</label>
          <input
            type="number"
            // value={noticeRecoveryDenominator}
            // onChange={handleNoticeRecoveryDenominatorChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      {/* <div className="mb-4">
        <label className="block font-semibold">
Is Notice Period Recovery applicable? *?</label>
        <div className="flex items-center">
          <input 
            type="radio" 
            name="lwf" 
            checked={isLWF} 
            onChange={() => setIsLWF(true)} 
            className="mr-2" 
          /> Yes
          <input 
            type="radio" 
            name="lwf" 
            checked={!isLWF} 
            onChange={() => setIsLWF(false)} 
            className="ml-4 mr-2" 
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
          /> Yes
          <input 
            type="radio" 
            name="pt" 
            checked={!isPT} 
            onChange={() => setIsPT(false)} 
            className="ml-4 mr-2" 
          /> No
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">What day of the month do you run your payroll?</label>
        <input 
          type="number" 
          value={payrollDay} 
          onChange={(e) => setPayrollDay(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded" 
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
          /> Company Admin
          <input 
            type="radio" 
            name="approver" 
            checked={approver === 'Another Employee'} 
            onChange={() => setApprover('Another Employee')} 
            className="ml-4 mr-2" 
          /> Another Employee
        </div>
      </div>
      {approver === 'Another Employee' && (
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Select Payroll Approver</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded" 
          />
        </div>
      )}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">On what day of the month does your attendance cycle begin?</label>
        <input 
          type="number" 
          value={attendanceCycleStart} 
          onChange={(e) => setAttendanceCycleStart(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded" 
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
          /> Yes
          <input 
            type="radio" 
            name="payableDays" 
            checked={!isTotalPayableDaysSame} 
            onChange={() => setIsTotalPayableDaysSame(false)} 
            className="ml-4 mr-2" 
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
          /> Yes
          <input 
            type="radio" 
            name="passwordProtected" 
            checked={!isPasswordProtected} 
            onChange={() => setIsPasswordProtected(false)} 
            className="ml-4 mr-2" 
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
          className="w-full p-2 border border-gray-300 rounded" 
        />
      </div> */}
      {/* <div className="mb-4">
        <label className="block mb-2 font-semibold">What additional components do you want to show in the CTC structure?</label>
        <input 
          type="text" 
          value={ctcComponents} 
          onChange={(e) => setCtcComponents(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded" 
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Please select start month for YTD payslip</label>
        <input 
          type="text" 
          value={startMonth} 
          onChange={(e) => setStartMonth(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded" 
        />
      </div> */}
      <button className="w-full p-2 bg-blue-500 text-white font-semibold rounded">Submit</button>
    </div> </div>
  );
};

export default NoticeRecovery;