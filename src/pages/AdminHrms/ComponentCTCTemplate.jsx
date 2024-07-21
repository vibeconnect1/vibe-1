import React from 'react'
import CTCDetailsList from './CTCDetailsList'
import { useSelector } from "react-redux";

const ComponentCTCTemplate = () => {
    const themeColor = useSelector((state) => state.theme.color);

  return (
    <div className='flex ml-20'>
        <CTCDetailsList/>
    
    <div className='m-10'>
        <p className='font-bold mb-4'>Component & Hierarchy Selection</p>
        <div className='flex flex-col gap-2'>
        <label htmlFor="">Fixed Salary Allowances</label>
        {/* <input type="text" className='border p-2 border-black w-52 rounded-md'/> */}
        <select name="" id="" className='border p-2 border-black w-52 rounded-md'><option value="">Basic</option>
        <option value="">HRA</option></select>
        <label htmlFor="">Employer Contributions</label>
        {/* <input type="text" className='border p-2 border-black w-52 rounded-md'/> */}
        <select name="" id="" className='border p-2 border-black w-52 rounded-md'><option value="">Gratuity</option>
        <option value="">HRA</option></select>
        <label htmlFor="">Fixed Salary Deductions</label>
        {/* <input type="text" className='border p-2 border-black w-52 rounded-md'/> */}
        <select name="" id="" className='border p-2 border-black w-52 rounded-md'><option value="">Tax</option>
        <option value="">HRA</option></select></div>
        {/* <div className='flex justify-center m-4 gap-6'>
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
          </button></div> */}
    </div></div>
  )
}

export default ComponentCTCTemplate