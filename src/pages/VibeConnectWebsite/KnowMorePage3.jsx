import React, { useEffect } from "react";
import audit from '../../../Website Image/Audit.jpeg'
import compliance from '../../../Website Image/bg-compliance2.jpg';
import permit from '../../../Website Image/Permit.jpg';
import knowledgebase from '../../../Website Image/Knowledge base-1.jpg';
import purchase from '../../../Website Image/purchase.jpg';
import reporting from '../../../Website Image/Reporting-1.jpg';

const KnowMorePage3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gradient-to-br from-[#662B96] to-[#0B205B] text-white p-8">
     
      
     

    
      <h1 className="text-3xl font-bold  mb-4">	Finance & Personal Management </h1>
      <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">Finance & Personal Management tools helps individuals manage their finances, bills, insurance, healthcare, and wellness, offering comprehensive solutions for personal and financial well-being at one location. Finance and personal management tools provide individuals with a centralized platform to effectively manage various aspects of their financial lives. These tools encompass a wide range of functionalities designed to simplify tasks such as budgeting, bill tracking, insurance management, healthcare coordination, and overall wellness. Offering comprehensive solutions for personal finance and wellness in one location, these tools empower individuals to take control of their financial futures, enhance their decision-making, and improve their overall quality of life.</p>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold  mb-2">		Financial Management</h3>
    <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
    <span className="font-bold ">	Personal Finance: </span>Includes budgeting tools, expense tracking, and savings goal setting to manage personal finances effectively.    </p>

<p className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">	Bill Management:</span> Facilitates bill payments, offers reminders, and generates expense reports for better financial oversight.</p>
<p className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">	Insurance Management:</span> Helps track insurance policies, manage claims, and review coverage for optimal protection.</p>
<p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold ">Healthcare Management:</span> Provides tools for managing doctor appointments, health records, and participation in wellness programs.</p>
<p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold ">Advance Salary Management:</span> Supports salary advances, loan management, and payroll integration for financial flexibility.</p>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={permit}
            alt="AI Automation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-3xl font-bold  mb-2">		Fitness & Wellness </h4>
    <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
   <span className="font-bold ">Fitness Management:</span> Offers fitness tracking through App, online wellness programs, and health challenges to promote physical well-being and encourage a healthy lifestyle. Fitness and wellness programs for employees are essential components of a healthy workplace. These initiatives focus on promoting physical health, mental well-being, and overall life balance, ultimately enhancing employee satisfaction and productivity.   </p>
<ul >
    <li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Nutrition and Healthy Eating:</span>	 Wellness programs often include nutrition workshops, healthy eating challenges, and access to healthy snacks in the workplace, encouraging employees to make informed dietary choices.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Work-Life Balance Initiatives:</span>	 Flexible work schedules, remote work options, and wellness days allow employees to prioritize their personal lives alongside their professional responsibilities, reducing burnout.

</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Wellness Challenges and Incentives:</span>	 Programs that gamify wellness, such as health challenges and rewards for participation, engage employees and foster a culture of health and fitness.</li>



</ul>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={audit}
            alt="Team Taskforce"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      
    
    
    </div>
  );
};

export default KnowMorePage3;
