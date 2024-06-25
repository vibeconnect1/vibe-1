import React from 'react';
import AdminHRMS from './AdminHrms';

const AddEmployee = () => {
  return (
    <div className='flex ml-20'>
        <AdminHRMS/>
    <div className= "w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Employee Basic Information</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name *</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="First Name" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name *</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Last Name" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email ID *</label>
            <input type="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Email" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile</label>
            <input type="tel" className="mt-1 p-2 w-full border rounded-md" placeholder="Mobile Number" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender *</label>
            <select className="mt-1 p-2 w-full border rounded-md" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
            <input type="date" className="mt-1 p-2 w-full border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">PAN</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="PAN NUMBER" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Aadhar No</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Aadhar Number" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Marital Status</label>
            <select className="mt-1 p-2 w-full border rounded-md">
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">Family Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Father's Name</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Father's Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Mother's Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Spouse's Name</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Spouse's Name" />
          </div>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">Address Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Address Line 1" maxLength="150" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Address Line 2" maxLength="150" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Country" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">State/Province</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="State/Province" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="City" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Zip / Pin Code</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Zip / Pin Code" />
          </div>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">Payment Information</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">Payment Mode *</label>
          <select className="mt-1 p-2 w-full border rounded-md" required>
            <option value="cash">Cash</option>
          </select>
        </div>

        <div className="mt-6">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Submit</button>
        </div>
      </form>
    </div></div>
  );
}

export default AddEmployee