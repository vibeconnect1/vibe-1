import React from 'react';
import { NavLink } from 'react-router-dom';

const modules = [
  { name: 'Employee Onboarding', path: '/hrms-onboarding' },
  { name: 'Attendance', path: '/hrms-attendance' },
  { name: 'Salary Slip', path: '/hrms-salary-slip' },
  { name: 'Auto Salary Breakup Creation', path: '/auto-salary-breakup' },
  { name: 'Leaves', path: '/leaves' },
  { name: 'Roaster Planning', path: '/roaster-planning' },
  { name: 'Employee Advance Claim', path: '/employee-advance-claim' },
  { name: 'Employee Performance', path: '/employee-performance' },
  { name: 'Employee Expenses', path: '/employee-expenses' },
  { name: 'Time Sheet Tracker', path: '/time-sheet-tracker' },
  { name: 'IJP/Recruitment', path: '/ijp-recruitment' },
  { name: 'Employee Induction', path: '/employee-induction' },
  { name: 'Employee IT Declaration', path: '/employee-it-declaration' },
  { name: 'Offer Letter / Acceptance', path: '/offer-letter' },
  { name: 'Employee Talent Programs', path: '/employee-talent-programs' },
  { name: 'Memos', path: '/memos' },
  { name: 'Employee Loans & Advance', path: '/employee-loans-advance' },
  { name: 'Recruitment', path: '/recruitment' },
  { name: 'Roaster', path: '/roaster' },
  { name: 'Provident Fund, ESIC, Legal Compliance', path: '/provident-fund' },
];

const EmployeeHRMS = () => {
  return (
    <div className="flex flex-col border-r border-gray-400 h-screen overflow-auto text-xs font-medium pb-4  p-2">
      {modules.map((module, index) => (
        <CustomNavLink key={index} to={module.path}>
          {module.name}
        </CustomNavLink>
      ))}
    </div>
  );
};

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `p-2 px-4 cursor-pointer transition-all duration-300 ease-linear ${
          isActive ? 'text-blue-500 border border-blue-500 rounded-full' : 'hover:text-blue-700'
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default EmployeeHRMS;