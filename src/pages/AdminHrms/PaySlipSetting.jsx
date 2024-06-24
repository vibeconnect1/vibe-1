import React, { useState } from 'react';
import PayrollSettingDetailsList from './PayrollSettingDetailsList';

const PayslipSetting = () => {
  const [companyName, setCompanyName] = useState('Bodyprocoach Pvt Ltd');
  const [note, setNote] = useState('');

  return (
    <div className='flex gap-10 ml-20'><PayrollSettingDetailsList/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Payslip Setting</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="note">
          What note do you want to show in the FNF Payslip? *
          </label>
          <textarea
            id="note"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
        </div>
      </div>
    </div></div>
  );
};

export default PayslipSetting