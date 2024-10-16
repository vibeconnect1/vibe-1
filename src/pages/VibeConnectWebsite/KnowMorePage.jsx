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

function KnowMorePage() {
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
        <section className="relative  bg-gradient-to-r from-blue-500 to-purple-800 text-center py-40">
          <h1 className="text-5xl font-bold  text-white mb-4">MANAGEMENT & COMPLIANCE</h1>
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
      <div className=" relative top-2 text-gray-800 font-serif px-20 ">
      {/* First Section */}
      {/* <h1 className="text-4xl font-bold font-serif leading-relaxed text-gray-800 mb-2">Management & Compliance </h1> */}
{/* <p className="text-xl  mb-4 text-justify font-serif w-1/2 leading-relaxed ">Vibe Connect’s Compliance Tracker helps you stay ahead of regulatory requirements by continuously monitoring and updating compliance standards. The system automatically tracks updates in regulations, flags any potential risks, and keeps all your compliance documents organized and accessible.</p> */}
      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 font-serif leading-relaxed text-gray-800">Compliance & Tracking</h3>

        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
    Features tools for tracking regulatory compliance and generating compliance reports. Vibe Connect’s Compliance Tracker helps you stay ahead of regulatory requirements by continuously monitoring and updating compliance standards. The system automatically tracks updates in regulations, flags any potential risks, and keeps all your compliance documents organized and accessible.
    </p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={compliancenew}
            alt="AI Automation"
            // className=" h-64 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col gap-8 lg:flex-row-reverse items-center justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-3xl font-bold  mb-2 text-gray-800">Audit Management</h4>
    <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
    Supports internal and external audits with features for audit trails, training audits, and logs. Simplify your audit processes with Vibe Connect. Our Audit Management feature keeps all your records organized and accessible, tracks compliance, and helps you prepare for audits with ease. Be it a operational audit, technical audit , internal audit, vendor audit for Service or asset or training – our system allow to you give Weightage against each point and completely configurable. Stay ahead of potential issues and ensure a smooth audit process with a system designed to keep everything in check.
    </p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={auditnew}
            alt="Team Taskforce"
            // className=" h-80 w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 ">Permit Tracking</h3>
    <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
    
    The Permit Tracking feature enables the digitalization of permit management processes, allowing organizations to efficiently monitor permit statuses and ensure compliance. This tool facilitates the tracking of renewals by providing timely notifications for upcoming expirations, thus preventing lapses in compliance. By sending expiry alerts, it helps organizations proactively manage their permits, ensuring that all necessary documentation is up to date and in order. This streamlined approach not only enhances operational efficiency but also minimizes the risk of penalties associated with expired permits.
    </p>


        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={permitnew}
            alt="AI Automation"
            // className=" h-64 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
     
      <div className="flex flex-col gap-8 lg:flex-row-reverse items-center justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 ">Centralized Resource Hub</h3>
        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
        The knowledge base serves as a comprehensive repository for essential information, FAQs, and training materials, ensuring employees can easily access the resources they need.
        </p>
        <h3 className="text-3xl font-bold mb-2 ">Learning Management System (LMS)</h3>
        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
        The LMS defines clear learning paths, guiding employees through various courses and materials tailored to their development needs.
        </p>
        <h3 className="text-3xl font-bold mb-2 ">Progress Tracking</h3>
        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Both the knowledge base and LMS track learner progress, enabling managers to monitor employee growth and identify areas for improvement.
        </p>
        <h3 className="text-3xl font-bold mb-2 ">Knowledge Sharing Culture</h3>
        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
        By providing accessible training materials and resources, the system fosters a culture of knowledge sharing, encouraging collaboration and continuous learning among employees.
        </p>



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={knowledgenew}
            alt="AI Automation"
            // className=" h-64 w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
     
      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 ">Purchase Order Management </h3>
        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Manages purchase and work orders, goods received (GRN) and dispatched (GDN), and inventory. Streamline your procurement and operational processes with Vibe Connect. Easily create and track Purchase Orders and Work Orders from our system to onboarding vendor. Monitor payments and progress in real-time and manage every detail from a single, centralized dashboard. Simplify your operations and boost productivity with a unified solution that keeps procurement and work orders running smoothly.
        </p>
       



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={purchasenew}
            alt="AI Automation"
            className=" h-full w-4/5 "
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse items-center justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 ">	Cost Management </h3>
        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Includes systems for cost approvals, budget tracking, expense reporting, and bill payments. Our tool simplifies the entire cost approval process, From small maintenance tasks to larger, costlier repairs, our system routes approvals based on cost thresholds, ensuring the right level of authorization is met. With multiple layers of approval, Vibe Connect ensures that all approval flow are respected through system, while speeding up the approval process so nothing gets held up.
        </p>
       



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={cost}
            alt="AI Automation"
            className=" h-full w-4/5"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
      {/* <h1 className="text-4xl font-bold   mb-8">	Documentation & Reporting</h1> */}
    
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 ">	Document Management   </h3>
        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Facilitates document storage, version control, and access management. Simplify document management with Vibe Connect’s Documents Pro. Efficiently organize, access, and secure all your important documents in one centralized location. Vibe connect Implements robust document storage solutions, streamline retrieval processes, and enhance collaboration with seamless sharing features. Maintain control and security over your documents, ensuring they are always at your fingertips when you need them.
        </p>
       



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={reportingnew}
            alt="AI Automation"
            className=" h-full w-4/5"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 ">	Reporting  </h3>
        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Provides AI/BI dashboards, custom and scheduled reports for comprehensive insights. Vibe Connect’s AI Dashboard & Reports deliver real-time analytics and comprehensive insights to drive your business decisions. Monitor key metrics, visualize trends, and generate detailed reports with ease, all from a single, user-friendly interface. Our advanced system transforms complex data into clear, actionable insights, helping you stay informed and make smarter decisions effortlessly.
        </p>
       



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={reporting2}
            alt="AI Automation"
            className=" h-full w-4/5"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
    </div>

   
     

      {/* Call to Action Section */}
      <div className="py-10 flex flex-col justify-center items-center  bg-gradient-to-r from-blue-500 to-purple-800  ">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
        Vibe Connect: Your All-in-One Command Center 
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

export default KnowMorePage;
