// src/components/LoanForm.js
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import AdminHRMS from './AdminHrms';

const AddLoan = () => {
  const [allowanceRequired, setAllowanceRequired] = useState(false);
  const [perqsApplicable, setPerqsApplicable] = useState(false);
  const [employeeRestrictions, setEmployeeRestrictions] = useState([]);
  const [employeeCondition, setEmployeeCondition] = useState({ condition: '', value: '' });

  const handleAddCondition = () => {
    setEmployeeRestrictions([...employeeRestrictions, employeeCondition]);
    setEmployeeCondition({ condition: '', value: '' });
  };

  const handleRemoveCondition = (index) => {
    const newRestrictions = [...employeeRestrictions];
    newRestrictions.splice(index, 1);
    setEmployeeRestrictions(newRestrictions);
  };

  return (
    <div className=''>
      <AdminHRMS/>
    
    <div className="ml-24 mb-10">
      <h1 className="text-2xl text-center font-bold m-1">Add New Loan or Advance</h1>
      <p className='text-center'>You can give loans or advances for Company's Employees</p>
      <form className="space-y-4">
        <p className='font-bold'>General Information</p>
<div className='flex flex-col gap-5 w-4/5'>
        <div className='flex justify-between items-center'>
          <label className="  font-semibold">Category Label *</label>
          <input className="w-96 border p-2  border-black rounded-md" type="text" placeholder="Label Name" />
        </div>
        <div className='mt-1 flex justify-between items-center'>
          <div>
          <label className=" font-semibold">Term of Loan in months *</label>
          <p className="text-sm text-gray-500">Admin will be able to change the term of loan while approving the loan application</p>
          </div>
          <input className="w-96 border p-2  border-black rounded-md" type="number" placeholder="Term of Loan" /></div>
       
          <div className='flex justify-between items-center'>
            <div>
          <label className="font-semibold">Mode of Loan Disbursement</label>
          <p className="text-sm text-gray-500">This field can be edited by Admin while adding/approving Loan Application</p>
          </div>
          <select className="w-96 border p-2  border-black rounded-md">
            <option value="offline">Off Line</option>
            <option value="salary">Salary</option>
          </select> </div>
       
          <div className='flex justify-between items-center'>
            <div>
          <label className=" font-semibold">Variable Allowance this category is linked to *</label>
          <p className="text-sm text-gray-500">This is required if loan disbursement mode with Salary in Payroll. Make sure Tax deduction is disabled in Variable allowance</p>
          </div>
          <select className="w-96 border p-2  border-black rounded-md">
            <option>Select Allowance</option>
            {/* Add your options here */}
          </select> </div>
       
          <div className='flex justify-between items-center'>
            <div>
          <label className="font-semibold">Mode of EMI Recovery</label>
          <p className="text-sm text-gray-500">EMI for loans with mode of payment as Salary will be deducted automatically in Payroll and will show up in Payslip</p>
          </div>
          <select className="w-96 border p-2  border-black rounded-md">
            <option value="salary">Salary</option>
          </select> </div>
          </div>
         
        <div>
          <label className="block text-sm font-medium">Please define the Loan number series format for this category *</label>
          <div className="grid grid-cols-3 gap-4">
            <input className="border p-2  border-black rounded-md" type="text" placeholder="Prefix Text" />
            <input className="border p-2  border-black rounded-md" type="number" placeholder="Series Starting number" />
            <input className="border p-2  border-black rounded-md" type="text" placeholder="Suffix Text" />
          </div>
        </div>
        <div>
          <label className=" font-bold">Interest Calculation</label>
          <div className="mt-1">
            <label className="">Default Annual Interest Rate *</label>
            <input className="border p-2  border-black rounded-md" type="number" step="0.01" placeholder="Annual Interest Rate" />
          </div>
          <div className="mt-1">
            <label className="">How is the interest calculated?</label>
            <select className="border p-2  border-black rounded-md">
              <option value="simple">Simple Interest (only on Principal)</option>
            </select>
          </div>
          <div className="mt-1">
            <label className="">When does the interest calculation begin?</label>
            <select className="border p-2  border-black rounded-md">
              <option value="from_grant">From Loan Grant Date</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Perqs Information</label>
          <div className="flex gap-5 mt-1">
          <p>Is this category applicable for perquisites?</p>

            <label className="inline-flex items-center">
              <input type="radio" name="perqs" value="yes" onClick={() => setPerqsApplicable(true)} />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="perqs" value="no" onClick={() => setPerqsApplicable(false)} />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <div>
          <label className="font-semibold">Employee Restrictions</label>
          <p>What is the maximum amount that employee can apply?</p>
          {/* <div className="grid grid-cols-4 gap-4">
          <input
              className="border p-2  border-black rounded-md"
              type="number"
              placeholder="Max Amount"
             
            />
            <select name="" id=""  className="border p-2  border-black rounded-md">
              <option value="">CTC Monthly</option>
            </select>
            <select name="" id=""  className="border p-2  border-black rounded-md">
              <option >Greater than</option>
              <option >Less than</option>
              <option >Equal to</option>
            </select>
           
            <input
              className="border p-2  border-black rounded-md"
              type="text"
              placeholder="Value"
             
            /> </div> */}
            
         
          <div className="mt-2 space-y-2">
            {employeeRestrictions.map((restriction, index) => (
              <div key={index} className="flex justify-between items-center border p-2 rounded-md">
                  <div className="grid grid-cols-4 gap-4">
          <input
              className="border p-2  border-black rounded-md"
              type="number"
              placeholder="Max Amount"
             
            />
            <select name="" id=""  className="border p-2  border-black rounded-md">
              <option value="">CTC Monthly</option>
            </select>
            <select name="" id=""  className="border p-2  border-black rounded-md">
              <option >Greater than</option>
              <option >Less than</option>
              <option >Equal to</option>
            </select>
           
            <input
              className="border p-2  border-black rounded-md"
              type="text"
              placeholder="Value"
             
            /> </div>
                <button
                  type="button"
                  className=""
                  onClick={() => handleRemoveCondition(index)}
                >
                  <FaTrash/>
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
              type="button"
              className="mt-1 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={handleAddCondition}
            >
              Add Rule
            </button>
        <div className=' flex gap-5'>
          <label className="block text-sm font-medium">Can employees apply for this category?</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input type="radio" name="apply" value="yes" />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="apply" value="no" />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <div className='flex gap-5'>
          <label className="block text-sm font-medium">Which employees is this category applicable to?</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input type="radio" name="applicable" value="all" />
              <span className="ml-2">All Employees</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="applicable" value="some" />
              <span className="ml-2">Some Employees</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="applicable" value="specific" />
              <span className="ml-2">Specific Employees</span>
            </label>
          </div>
        </div>
      </form>
    </div></div>
  );
};

export default AddLoan
