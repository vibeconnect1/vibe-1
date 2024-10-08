import React, { useEffect } from "react";
import audit from '../../../Website Image/Audit.jpeg'
import compliance from '../../../Website Image/bg-compliance2.jpg';
import permit from '../../../Website Image/Permit.jpg';
import knowledgebase from '../../../Website Image/Knowledge base-1.jpg';
import purchase from '../../../Website Image/purchase.jpg';
import reporting2 from '../../../Website Image/reporting2.jpeg';
import permitnew from '../../../Website Image/permit2.jpeg';

import cost from '../../../Website Image/cost2.jpeg';

import compliancenew from '../../../Website Image/COMPLIANCE.jpeg';
import auditnew from '../../../Website Image/AUDIT100.jpeg';
import reportingnew from '../../../Website Image/document2.jpeg';
import knowledgenew from '../../../Website Image/Knowledge2.jpeg';
import purchasenew from '../../../Website Image/purchase2.jpeg';
import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";

function ProjectManagementWebsite() {
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
        <section className="relative bg-gradient-to-r from-[#e98972] to-[#db5354] text-center py-32">
        <h1 className="text-5xl font-bold  text-white mb-4">Project Management</h1>
        <div className="flex justify-center">
  <p className="text-xl mb-4 text-justify text-white font-serif leading-relaxed">
    Effectively plan, execute, and monitor your projects with our comprehensive Project Management module.<br/>
     Manage tasks, collaborate with your team, monitor timelines, and allocate resources efficiently.
  </p>
</div>

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
      {/* <div className="flex justify-center text-base font-semibold relative top-64">
      <p className="text-gray-800">The Most Employee Centric and Customer Teams are using our tool VIBE to drive experience.</p>
      </div> */}
      <div className=" relative top-10 text-gray-800 font-serif px-20 ">
     
     

      {/* Second Section */}
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 font-serif leading-relaxed text-gray-800">Task Tracking</h3>

        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Track your tasks efficiently with our project management system.<br/>
             Organize your tasks by priority, due dates, and assign them to team members for clear accountability.
        </p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src="https://vibecopilot.ai/static/media/calendar.33da70f9954996af5bec.png"
            alt="AI Automation"
            className=" h-64 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 font-serif leading-relaxed text-gray-800">Team Collaboration</h3>

        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Collaborate with your team seamlessly. Share updates, comments, and files to keep everyone on the same page.

        </p>
        <ul className="list-disc list-inside text-gray-600">
            <li>Real-time updates and file sharing</li>
            <li>Discussion threads and comments</li>
            <li>Team member assignment and accountability</li>
          </ul>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src="https://vibecopilot.ai/static/media/meeting_scroll.af708095804587992010.png"
            alt="AI Automation"
            className=" h-64 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 font-serif leading-relaxed text-gray-800">Resource Management</h3>

        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Allocate and manage your resources efficiently. Ensure your team has what they need to deliver projects on time.

        </p>
        <ul className="list-disc list-inside text-gray-600">
            <li>Monitor resource availability</li>
            <li>Allocate tasks and resources effectively</li>
            <li>Track resource usage and prevent overloading</li>
          </ul>


        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src="https://vibecopilot.ai/static/media/project_management.4b5c92e37781bed14c08.png"
            alt="AI Automation"
            className=" h-64 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
     
     
     
     
     
    
     
      
    </div>

   
     

      {/* Call to Action Section */}
      <div className=" flex flex-col justify-center items-center py-8  bg-gradient-to-r from-[#e98972] to-[#db5354] p-8 ">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Ready to reach product management mastery?
        </h1>
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
          Get a demo
        </button>
        
        {/* Features List */}
        <div className="mt-4 flex gap-4 text-sm text-white">
          <span>Free 14-day trial</span>
          <span>Easy setup</span>
          <span>Cancel anytime</span>
        </div>
      </div>

   <div className="mt-4">
   <VibeConnectFooter/></div>
    </div>
  );
}

export default ProjectManagementWebsite;
