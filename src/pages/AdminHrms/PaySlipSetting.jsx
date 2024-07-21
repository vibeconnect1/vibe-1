import React, { useState } from 'react';
import PayrollSettingDetailsList from './PayrollSettingDetailsList';
import { GrHelpBook } from "react-icons/gr";

const PayslipSetting = () => {
  const [companyName, setCompanyName] = useState('Bodyprocoach Pvt Ltd');
  const [note, setNote] = useState('');
  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  return (
    <div className='flex justify-between gap-10 ml-20'><PayrollSettingDetailsList/>
    <div className="  p-4">
      <div className="bg-white p-8 rounded shadow-md w-full ">
        <h2 className="text-2xl font-bold mb-4">Payslip Setting</h2>
        <div className="">
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
    </div>
    <div className='my-4 mx-2 w-fit'>
    <div className="flex flex-col shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
        <GrHelpBook size={20} />
        <h2>Help Center</h2></div>
    <div className=' mt-1'>
              {/* <p className="font-medium">Help Center</p> */}
              <ul style={listItemStyle} className="flex flex-col gap-2">
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    You have to drag and drop the required fields that you want to be displayed on the payslips and can preview it once done. </li>                </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    You also have an option to map the leave balances at the bottom of the payslips.           </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                  You have to drag and drop the required fields that you want to be displayed on the payslips and can preview it once done.
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

export default PayslipSetting