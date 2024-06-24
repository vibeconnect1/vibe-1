import React from 'react';
import AdminHRMS from './AdminHrms';

const InvestmentSetting = () => {
  return (
    <div className='flex'>
        <AdminHRMS/>
    <div className="container mx-auto p-4 ml-20">
      <h1 className="text-3xl font-bold mb-4">Investment Settings</h1>

      <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded p-4">
        <h1 className="text-2xl font-bold mb-4">Bodyprocoach Pvt Ltd</h1>
        <div className="mb-4">
          <p><strong>Location:</strong> 244/1952 Motilalnagar no.1, New Link Road; Near Vibgyor school, Goregaon West</p>
          <p><strong>No. Of Employees:</strong> 35</p>
          <p><strong>Authorized Signatory:</strong> Maahek Nair</p>
          <p><strong>No. Of Admins:</strong> 3</p>
          <p><strong>No. Of Payrolls run:</strong> 11</p>
          <p><strong>Part of Quikchex since:</strong> 08 August 2023</p>
        </div>
        <h2 className="text-xl font-semibold mb-2">Investment Settings</h2>
        <div className="mb-4">
          <label className="block mb-2">What level of access do your employees have on their Investment Declarations?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="invisible" name="access" value="Invisible" className="mr-2" />
            <label htmlFor="invisible">Invisible</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="viewOnly" name="access" value="View Only" className="mr-2" />
            <label htmlFor="viewOnly">View Only</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="manage" name="access" value="Manage" className="mr-2" />
            <label htmlFor="manage">Manage</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">For new joinee, do you want to set days limit upto how many days the Investment declaration page edit option should be available?</label>
          <input type="number" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">From what month onwards employees will submit their actual investment proof?</label>
          <select className="border p-2 w-full">
            <option value="December">December</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do you want to lock investment declaration option while running payroll?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="lockYes" name="lock" value="Yes" className="mr-2" />
            <label htmlFor="lockYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="lockNo" name="lock" value="No" className="mr-2" />
            <label htmlFor="lockNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Would you like to collect employee's Investment proof in soft copies through Employee's Self service portal?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="proofYes" name="proof" value="Yes" className="mr-2" />
            <label htmlFor="proofYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="proofNo" name="proof" value="No" className="mr-2" />
            <label htmlFor="proofNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do you want to send mailer to employee to submit investment proof?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="mailerYes" name="mailer" value="Yes" className="mr-2" />
            <label htmlFor="mailerYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="mailerNo" name="mailer" value="No" className="mr-2" />
            <label htmlFor="mailerNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do you want to enable 80G Donation option under Investment Declaration?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="donationYes" name="donation" value="Yes" className="mr-2" />
            <label htmlFor="donationYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="donationNo" name="donation" value="No" className="mr-2" />
            <label htmlFor="donationNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do employee receive email notification when Admin approves the proof?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="notificationYes" name="notification" value="Yes" className="mr-2" />
            <label htmlFor="notificationYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="notificationNo" name="notification" value="No" className="mr-2" />
            <label htmlFor="notificationNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Would you like to activate promissory declarations for employees?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="promissoryYes" name="promissory" value="Yes" className="mr-2" />
            <label htmlFor="promissoryYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="promissoryNo" name="promissory" value="No" className="mr-2" />
            <label htmlFor="promissoryNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Is House Rental Agreement Mandatory?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="rentalYes" name="rental" value="Yes" className="mr-2" />
            <label htmlFor="rentalYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="rentalNo" name="rental" value="No" className="mr-2" />
            <label htmlFor="rentalNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do you want to activate auto approval for tax declaration?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="autoApprovalYes" name="autoApproval" value="Yes" className="mr-2" />
            <label htmlFor="autoApprovalYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="autoApprovalNo" name="autoApproval" value="No" className="mr-2" />
            <label htmlFor="autoApprovalNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do you want to activate manage employee tax regime?</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="taxRegimeYes" name="taxRegime" value="Yes" className="mr-2" />
            <label htmlFor="taxRegimeYes">Yes</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="taxRegimeNo" name="taxRegime" value="No" className="mr-2" />
            <label htmlFor="taxRegimeNo">No</label>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default InvestmentSetting;