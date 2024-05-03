import React from "react";

const AddSupplier = () => {
  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Add Supplier
        </h2>
        <div className="mx-20 my-5 mb-10 border border-gray-400 p-5 px-10 rounded-lg shadow-xl">
          <h2 className="border-b text-center text-xl border-black mb-6 font-semibold">
            Company Details
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Company Name :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Company Name"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Primary Phone :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Phone"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Secondary Phone :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Secondary Email"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Primary Email :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Primary Email"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Secondary Email :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Secondary Email"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                PAN :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="PAN"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Select Supplier Type:
              </label>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Supplier Type</option>
                <option value="unit1">Type 1</option>
                <option value="unit2">Type 2</option>
                <option value="unit2">Type 3</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Select Category:
              </label>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Category</option>
                <option value="unit1">Category 1</option>
                <option value="unit2">Category 2</option>
                <option value="unit2">Category 3</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Date :
              </label>
              <input
                type="date"
                name=""
                id=""
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
          </div>
          <h2 className="border-b text-center text-xl my-5 border-black mb-6 font-semibold">
            Address
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Address Line 1 :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Address"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Address Line 2 :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Address"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                City :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder=" Enter City"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                State :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter State"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Pincode :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Pincode"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Enter Country :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="PAN"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
          </div>
          <h2 className="border-b text-center text-xl my-5 border-black mb-6 font-semibold">
            Bank Details
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Account Name :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Account Name"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Account Number :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Account Number"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Bank & Branch Name :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder=" Enter Bank & Branch"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                IFSC Code :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="IFSC"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
          </div>
          <h2 className="border-b text-center text-xl my-5 border-black mb-6 font-semibold">
            Attachments
          </h2>
          <input type="file" name="" id="" multiple />
          <div className="flex gap-5 justify-center items-center my-4">
          <button
            type="submit"
            className="bg-black text-white hover:bg-gray-700 font-semibold text-xl py-2 px-4 rounded"
          >
            Submit
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddSupplier;
