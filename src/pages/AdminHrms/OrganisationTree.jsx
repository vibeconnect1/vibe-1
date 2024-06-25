import React from "react";
import AdminHRMS from "./AdminHrms";

function OrganizationTree() {
  return (
    <div className="flex h-screen">
      <AdminHRMS />
      <OrgTreeSettings />
    </div>
  );
}

const Sidebar = () => {
  return (
    <div className="bg-orange-100 w-16 flex flex-col items-center py-4">
      <div className="mb-4">Icon1</div>
      <div className="mb-4">Icon2</div>
      <div className="mb-4">Icon3</div>
      {/* Add more icons as needed */}
    </div>
  );
};

const OrgTreeSettings = () => {
  return (
    <div className="flex-1 p-6 ml-20">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Organisation Tree Settings</h2>
        <p className="text-sm mb-6">
          Organisation splits among employees are presented under this section.
        </p>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Organisation Tree Activation
          </h3>
          <p className="text-sm mb-4">
            In order to activate your org tree, please fix the following
          </p>
          <div className="">
            <Step stepNumber="1" title="Assign Head of Company" />
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-16 w-0.5 border-2 border-black border-dotted rounded-full"></div>
                <div className="w-16 h-16 rounded-full flex items-center justify-center "></div>
              </div>
            </div>
            <Step stepNumber="2" title="Assign Department Heads" />
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-16 w-0.5 border-2 border-black border-dotted rounded-full"></div>
                <div className="w-16 h-16 rounded-full flex items-center justify-center "></div>
              </div>
            </div>
            <Step stepNumber="3" title="Assign Missing Reporting Supervisors" />
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Step 1</h3>
          <p className="text-sm mb-2">Assign Head of Company</p>
          <a href="#" className="text-blue-500">
            + Add Head of Company
          </a>
        </div>
      </div>
    </div>
  );
};

const Step = ({ stepNumber, title }) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
      <div className="flex items-center">
        <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center mr-4">
          {stepNumber}
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-xs text-gray-500">Pending</p>
        </div>
      </div>
      <button className="bg-orange-500 text-white py-1 px-4 rounded-lg">
        View
      </button>
    </div>
  );
};

export default OrganizationTree;
