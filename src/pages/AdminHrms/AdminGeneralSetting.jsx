import React, { useState } from 'react';
import ToggleSwitch from '../../Buttons/ToggleSwitch';
import AttendanceDetailsList from './AttendanceDetailsList';

const AttendanceGeneralSetting = () => {
  const [regularizationReason, setRegularizationReason] = useState(false);
  const [rosterApplicable, setRosterApplicable] = useState(false);
  const [showApproveRejectButton, setShowApproveRejectButton] = useState(false);

  const handleRegularizationChange = (event) => {
    setRegularizationReason(event.target.checked);
  };

  const handleRosterChange = (event) => {
    setRosterApplicable(event.target.checked);
  };

  const handleApproveRejectChange = (event) => {
    setShowApproveRejectButton(event.target.checked);
  };

  return (
    <div className='flex gap-5 ml-20'>
        <AttendanceDetailsList/>
    <form>
      <div className='mt-5'>
        <h1>General Setting</h1>
        <br/>
        <label>
          Can Employees select Regularization Reason?
          &nbsp;<ToggleSwitch/>
        </label>
      </div>
      <div>
        <label>
          Is Roster Applicable?
          &nbsp;<ToggleSwitch/>
        </label>
      </div>
      <div>
        <label>
          Would you like to show Approve/Reject button in mail?
          &nbsp;<ToggleSwitch/>
        </label>
      </div>
    </form></div>
  );
};

export default AttendanceGeneralSetting