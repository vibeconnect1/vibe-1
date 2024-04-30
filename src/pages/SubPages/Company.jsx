import React, { useState } from 'react'
import Account from './Account'
import profile from "/profile.png"

const Company = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [companyName, setCompanyName] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
const handleCompanyNameChange =(e)=>{
    setCompanyName(e.target.value)
  
}
const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile && companyName) {
      
      console.log('Selected File:', selectedFile);
      console.log('Company Name:', companyName);
    } else {
      console.log('Please select a file and enter a company name.');
    }
  };
  return (
    <div className='w-full mt-1'>
    <Account/>
    <div className="flex flex-col items-center justify-center my-10">
      
      <form  className="flex flex-col  h-fit gap-4 " onSubmit={handleSubmit}>
        <div className='flex gap-4 '>

      <label htmlFor="file-upload" className="relative cursor-pointer border-2 border-black  bg-transparent rounded-md font-medium py-2 px-4 transition duration-300 ease-in-out hover:bg-black hover:border-white hover:text-white ">
          <span>Upload Logo</span>
          <input id="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
        </label>
        {selectedFile && <p className="text-sm w-32">Selected file: {selectedFile.name}</p>}
        </div>
        <div>
        <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            id="company-name"
            type="text"
            value={companyName}
            onChange={handleCompanyNameChange}
            className=" p-2 border-b-[1px]  focus:outline-none  w-64"
            placeholder="Enter company name"
            required
          />
          </div>
          <div className='flex gap-2 items-center '>
          <input type="checkbox" name="removeLogo" id="logo" />
          <label htmlFor="logo">Remove Company Logo</label>
          </div>
          <div className='flex gap-2 items-center '>
          <input type="checkbox" name="dailyHelpDesk" id="helpDesk" />
          <label htmlFor="helpDesk">Daily Help Desk Report Email</label>
          </div>
        <button type="submit" className="mt-4 bg-green-500 text-white rounded-md py-2 px-4 transition duration-300 ease-in-out hover:bg-green-600">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Company
