import React from 'react'
import FileInputBox from '../../containers/Inputs/FileInputBox'

const AddBills = () => {
  return (
    <section>
        <div className='className="w-full flex flex-col overflow-hidden'>
            <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white mx-10 my-5">
                NEW BILL
            </h2>
            <div className='md:mx-20 my-2 mb-10 sm:border border-gray-400 p-5 px-10 rounded-lg '>
                <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
                    BASIC DETAILS
                </h2>
                <div className="flex sm:flex-row flex-col justify-around items-center">
                    <div className="grid md:grid-cols-3 item-start gap-x-4 gap-2 w-full">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Supplier
                            </label>
                            <select
                                name=""
                                id=""
                                className="border p-1 px-4 border-gray-500 rounded-md"
                            >
                                <option value=""> Selcet Supplier</option>
                                <option value="">a</option>
                                <option value="">b</option>
                            </select>
                        </div> 
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Bill Date
                            </label>
                            <input
                              type="date"
                              placeholder="Enter Location"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Invoice Number
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Invoice"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Related To
                            </label>
                            <input
                              type="text"
                              placeholder="Related To"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                TDS(%)
                            </label>
                            <input
                              type="text"
                              placeholder="TDS"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Retention(%)
                            </label>
                            <input
                              type="text"
                              placeholder="Retention"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Deduction
                            </label>
                            <input
                              type="text"
                              placeholder="Deduction"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Deduction Remarks
                            </label>
                            <input
                              type="text"
                              placeholder="Deduction Remarks"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Amount
                            </label>
                            <input
                              type="text"
                              placeholder="Amount"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Additional Expenses
                            </label>
                            <input
                              type="text"
                              placeholder="Additional Expenses"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Payment Tenure(In Days)
                            </label>
                            <input
                              type="text"
                              placeholder="Payment Tenure"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                CGST Rate
                            </label>
                            <input
                              type="text"
                              placeholder="CGST Rate"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                CGST Amount
                            </label>
                            <input
                              type="text"
                              placeholder="CGST Amount"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                SGST Rate
                            </label>
                            <input
                              type="text"
                              placeholder="SGST Rate"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                SGST Amount
                            </label>
                            <input
                              type="text"
                              placeholder="SGST Amount"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                IGST Rate
                            </label>
                            <input
                              type="text"
                              placeholder="IGST Rate"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                IGST Amount
                            </label>
                            <input
                              type="text"
                              placeholder="IGST Amount"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                TCS Rate
                            </label>
                            <input
                              type="text"
                              placeholder="TCS Rate"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                TCS Amount
                            </label>
                            <input
                              type="text"
                              placeholder="TCS Amount"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Tax Amount
                            </label>
                            <input
                              type="text"
                              placeholder="Tax Amount"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Total Amount
                            </label>
                            <input
                              type="text"
                              placeholder="Total Amount"
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold my-1">
                                Description
                            </label>
                            <textarea
                              name=""
                              id=""
                              cols="1"
                              rows="3"
                              placeholder='Description'
                              className="border p-1 px-4 border-gray-500 rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:mx-20 my-2  sm:border border-gray-400 p-5 px-10 rounded-lg '>
                <h2 className="text-xl font-semibold mx-5 my-2">
                    ATTACHMENTS
                </h2>
                <FileInputBox/>
            </div>
            <div className='flex gap-2 justify-center mb-10'>
                <button className="font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md">
                    submit
                </button>
            </div>
        </div>
    </section>
  )
}

export default AddBills