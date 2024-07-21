import React from 'react'
import CTCDetailsList from './CTCDetailsList'
import { useSelector } from "react-redux";

const CTCGeneralSetting = () => {
    const themeColor = useSelector((state) => state.theme.color);

  return (
    <div className='flex ml-20'>
        <CTCDetailsList/>
    
    <div className='m-10'>
        <p className='font-bold mb-4'>General Settings</p>
        <label htmlFor="">Please enter the label for the CTC Template *</label>
        <input type="text" className='m-2 border p-2 border-black w-52 rounded-md'/>
        <div className='flex justify-center m-4 gap-6'>
        <button
        //    onClick={() => setIsModalOpen(true)}
           style={{ background: themeColor }}
            className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
        //    onClick={() => setIsModalOpen(true)}
           style={{ background: themeColor }}
            className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Proceed
          </button></div>
    </div></div>
  )
}

export default CTCGeneralSetting