import React, { useEffect } from "react";
import audit from '../../../Website Image/Audit.jpeg'
import worklifebalance from '../../../Website Image/worklifebalance.jpeg';
import permit from '../../../Website Image/financeimage.jpeg';
import insurane from '../../../Website Image/insurance.jpeg';
import fitnessandwell from '../../../Website Image/fitnessandwell.jpeg';
import reporting from '../../../Website Image/healthimage.jpeg';
import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";

function PersonalFinancialWebsite() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <VibeConnectNavbar1/>
      <header className="flex justify-between p-4 bg-transparent absolute top-0 w-full z-10">
        <div></div> {/* Placeholder for logo */}
        {/* <nav className="space-x-6 text-white">
          <a href="#integrations" className="hover:underline">Integrations</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#login" className="hover:underline">Log in</a>
          <a href="#login" className="hover:underline">Get Demo</a>
          <a href="#demo" className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500">Contact Us</a>
        </nav> */}
      </header>

      {/* Main section */}
      <main className="flex-grow">
        {/* Gradient background */}
        <section className="relative  bg-gradient-to-r from-[#e98972] to-[#db5354] text-center py-40">
          <h1 className="text-5xl font-bold  text-white mb-4">Finance & Personal Management</h1>
          {/* <div className="flex justify-center">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full">Learn More</button>
            
          </div> */}
          {/* <div className='absolute mt-4 flex justify-center w-full h-full bg-cover bg-center'>
          <img  src={compliance} alt="" className="z-20"/>
          </div> */}
          <div className="absolute bottom-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" d="M0,320L80,316C160,312,320,304,480,292C640,280,800,264,960,250.7C1120,237,1280,227,1360,223.3L1440,220L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  </div>
        </section>
        {/* Form section */}
      
      </main>
      {/* <div className="flex justify-center text-base font-semibold relative top-44">
      <p className="text-gray-800">The Most Employee Centric and Customer Teams are using our tool VIBE to drive experience.</p>
      </div> */}
      <div className="relative top-18 font-serif text-gray-800 p-8">
     
      
     

    
      {/* <h1 className="text-3xl font-bold  mb-4">	Finance & Personal Management </h1> */}
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
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={permit}
            alt="AI Automation"
            className=" h-full w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold  mb-2">		Insurance management</h3>
    <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
    <span className="font-bold ">	Comprehensive Policy Management: </span>Easily monitor and manage multiple insurance policies in one place, ensuring clear visibility of coverage and protection against unforeseen risks.    </p>

<p className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">	Claims Tracking and Review:</span> Simplify the claims process with seamless tracking, while reviewing existing policies to identify any gaps or opportunities for enhanced coverage.</p>
<p className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">	Automated Reminders and Alerts:</span> Stay on top of critical dates with integrated reminders for policy renewals and claim submission deadlines, minimizing the risk of missed opportunities.</p>
<p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold ">Optimized Coverage Review:</span> Gain insights into your insurance portfolio, allowing for quick adjustments and improvements to ensure optimal protection tailored to individual needs.</p>
{/* <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold ">Advance Salary Management:</span> Supports salary advances, loan management, and payroll integration for financial flexibility.</p> */}
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={insurane}
            alt="AI Automation"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-3xl font-bold  mb-2">		Healthcare management </h4>
    {/* <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
   <span className="font-bold ">Fitness Management:</span> Offers fitness tracking through App, online wellness programs, and health challenges to promote physical well-being and encourage a healthy lifestyle. Fitness and wellness programs for employees are essential components of a healthy workplace. These initiatives focus on promoting physical health, mental well-being, and overall life balance, ultimately enhancing employee satisfaction and productivity.   </p> */}

<ul >
    <li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Doctor Appointment Scheduling:</span>	 Simplify the process of booking and managing doctor appointments by providing a centralized platform where users can schedule, modify, and track all their healthcare appointments with ease.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Health Records Management:</span>	Keep all your medical records, prescriptions, and test results in one secure location, ensuring easy access and organized storage for both immediate reference and long-term management.

</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Wellness Program Participation:</span>	 Encourage proactive healthcare by enabling participation in wellness programs and tracking progress, helping users stay engaged with preventive care and lifestyle improvement initiatives.</li>

<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Personalized Health Reminders:</span>	 Stay informed with personalized reminders for upcoming appointments, medication schedules, and wellness activities, ensuring that critical healthcare commitments are never missed.</li>


</ul>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={reporting}
            alt="Team Taskforce"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold  mb-2">		Work-Life Balance Initiatives</h3>
    <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
    <span className="font-bold ">		Flexible Work Schedules: </span>Offering employees the choice to adjust their working hours helps them balance personal obligations with professional demands, leading to increased job satisfaction and reduced stress levels.    </p>

<p className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">		Remote Work Options:</span> Allowing employees to work remotely fosters autonomy and flexibility, enabling them to create a work environment that enhances focus and productivity while accommodating personal needs.</p>
<p className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">		Wellness Days:</span> Implementing designated wellness days encourages employees to take time off specifically for self-care and mental health, which helps prevent burnout and maintains a sustainable work pace.</p>
<p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold ">	Increased Engagement and Retention:</span> By promoting a healthy work-life balance, organizations not only enhance employee morale but also improve retention rates, as individuals feel valued and supported in both their personal and professional lives.</p>
{/* <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold ">Advance Salary Management:</span> Supports salary advances, loan management, and payroll integration for financial flexibility.</p> */}
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={worklifebalance}
            alt="AI Automation"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-3xl font-bold  mb-2">		Fitness & Wellness </h4>
    {/* <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
   <span className="font-bold ">Fitness Management:</span> Offers fitness tracking through App, online wellness programs, and health challenges to promote physical well-being and encourage a healthy lifestyle. Fitness and wellness programs for employees are essential components of a healthy workplace. These initiatives focus on promoting physical health, mental well-being, and overall life balance, ultimately enhancing employee satisfaction and productivity.   </p> */}

<ul >
    <li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Nutrition and Healthy Eating:</span>	 Wellness programs often include nutrition workshops, healthy eating challenges, and access to healthy snacks in the workplace, encouraging employees to make informed dietary choices.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Work-Life Balance Initiatives:</span>	 Flexible work schedules, remote work options, and wellness days allow employees to prioritize their personal lives alongside their professional responsibilities, reducing burnout.

</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold ">Wellness Challenges and Incentives:</span>	 Programs that gamify wellness, such as health challenges and rewards for participation, engage employees and foster a culture of health and fitness.</li>



</ul>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={fitnessandwell}
            alt="Team Taskforce"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
    </div>

   
     

      {/* Call to Action Section */}
      {/* <div className="relative top-10 flex flex-col justify-center items-center py-20 bg-gradient-to-r from-[#e98972] to-[#db5354] p-8 ">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Ready to reach product management mastery?
        </h1>
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
          Get a demo
        </button>
        
        
        <div className="mt-4 flex gap-4 text-sm text-white ">
          <span>Free 14-day trial</span>
          <span>Easy setup</span>
          <span>Cancel anytime</span>
        </div>
      </div> */}

   
   <VibeConnectFooter/>
    </div>
  );
}

export default PersonalFinancialWebsite;
