import React from "react";
import AdminHRMS from "./AdminHrms";
import LeaveSetting from "./LeaveSetting";

const GeneralSettings = () => {
  return (
    <section className="flex gap-10 ml-20">
      <LeaveSetting />
      <div className="w-full h-full my-10">
        <div className="w-3/4 p-6 bg-white shadow-custom-all-sides rounded-md ">
          <h1 className="text-2xl font-bold mb-4">Leave Settings</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                What month of the year does your leave cycle start from?
              </label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                {/* Add other months */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Are Admins Having Manage Access to Leave Module Allowed To
                Approve/Reject Leave Applications?
              </label>
              <div className="space-x-4">
                <label>
                  <input type="radio" name="adminAccess" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="adminAccess" value="no" /> No
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Can Supervisors add Leave Adjustments for subordinates?
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="supervisorAdjustments"
                    value="yes"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input type="radio" name="supervisorAdjustments" value="no" />{" "}
                  No
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Would you like to run daily leave accruals?
              </label>
              <div className="space-x-4">
                <label>
                  <input type="radio" name="dailyAccruals" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="dailyAccruals" value="no" /> No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralSettings;
