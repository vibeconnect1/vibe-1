import React, { useState, useRef } from "react";
import AdminHRMS from './AdminHrms';
import image from "/profile.png";


const InvestmentSetting = () => {
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };
  return (
    <div className='flex'>
        <AdminHRMS/>
       
    <div className="container mx-auto p-4 ml-20">
<div className="flex justify-between">
      <h1 className="text-3xl font-bold mb-4">Investment Settings</h1>
      {/* <button 
        onClick={() => setIsEditing(!isEditing)} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button> */}
      </div>
          <div className="bg-white shadow-md rounded p-4">
          <div className="flex gap-20">
          <div onClick={handleImageClick} className="cursor-pointer   my-4">
            {imageFile ? (
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Uploaded"
                className="border-4 border-gray-300 rounded-full w-40 h-40 object-cover"
              />
            ) : (
              <img
                src={image}
                alt="Default"
                className="border-4 border-gray-300 rounded-full w-40 h-40 object-cover"
              />
            )}
            <input
              type="file"
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
          <div>
        <h1 className="text-2xl font-bold mb-4">VibeCopilot</h1>
        <div className="mb-4">
          <p><strong>Location:</strong> Mumbai</p>
          <p><strong>No. Of Employees:</strong> 10</p>
          <p><strong>Authorized Signatory:</strong> kunal sah</p>
          <p><strong>No. Of Admins:</strong> 3</p>
          <p><strong>No. Of Payrolls run:</strong> 11</p></div>
          {/* <p><strong>Part of Vibe Connect since:</strong> 08 August 2023</p> */}
        </div></div>
      <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-2">Investment Settings</h2>
        <button 
        onClick={() => setIsEditing(!isEditing)} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button></div>
        <div className="mb-4">
          <label className="block mb-2">What level of access do your employees have on their Investment Declarations?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="invisible" name="access" value="Invisible" className="mr-2"   disabled={!isEditing} />
            <label htmlFor="invisible">Invisible</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="viewOnly" name="access" value="View Only" className="mr-2"   disabled={!isEditing} />
            <label htmlFor="viewOnly">View Only</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="manage" name="access" value="Manage" className="mr-2"   disabled={!isEditing} />
            <label htmlFor="manage">Manage</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">For new joinee, do you want to set days limit upto how many days the Investment declaration page edit option should be available?</label>
          <input type="number"  className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
          readOnly={!isEditing} />
        </div>
        <div className="mb-4">
          <label className="block mb-2">From what month onwards employees will submit their actual investment proof?</label>
          <select className="border p-2 w-full"   disabled={!isEditing}>
            <option value="December">December</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do you want to lock investment declaration option while running payroll?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="lockYes" name="lock" value="Yes" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="lockYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="lockNo" name="lock" value="No" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="lockNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Would you like to collect employee's Investment proof in soft copies through Employee's Self service portal?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="proofYes" name="proof" value="Yes" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="proofYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="proofNo" name="proof" value="No" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="proofNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do you want to send mailer to employee to submit investment proof?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="mailerYes" name="mailer" value="Yes" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="mailerYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="mailerNo" name="mailer" value="No" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="mailerNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do you want to enable 80G Donation option under Investment Declaration?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="donationYes" name="donation" value="Yes" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="donationYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="donationNo" name="donation" value="No" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="donationNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do employee receive email notification when Admin approves the proof?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="notificationYes" name="notification" value="Yes" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="notificationYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="notificationNo" name="notification" value="No" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="notificationNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Would you like to activate promissory declarations for employees?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="promissoryYes" name="promissory" value="Yes" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="promissoryYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="promissoryNo" name="promissory" value="No" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="promissoryNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Is House Rental Agreement Mandatory?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="rentalYes" name="rental" value="Yes" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="rentalYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="rentalNo" name="rental" value="No" className="mr-2"   disabled={!isEditing} />
            <label htmlFor="rentalNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do you want to activate auto approval for tax declaration?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="autoApprovalYes" name="autoApproval" value="Yes" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="autoApprovalYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="autoApprovalNo" name="autoApproval" value="No" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="autoApprovalNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do you want to activate manage employee tax regime?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="taxRegimeYes" name="taxRegime" value="Yes" className="mr-2"   disabled={!isEditing} />
            <label htmlFor="taxRegimeYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="taxRegimeNo" name="taxRegime" value="No" className="mr-2"   disabled={!isEditing}/>
            <label htmlFor="taxRegimeNo">No</label>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-center items-center my-4">
      {/* <button 
        onClick={() => setIsEditing(!isEditing)} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button> */}
          {/* <button
            type="submit"
            className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Save
          </button> */}
        </div>
    </div>
    </div>
    </div>
  );
}

export default InvestmentSetting;