import React, { useEffect } from "react";
import audit from '../../../Website Image/Audit.jpeg'
import compliance from '../../../Website Image/bg-compliance2.jpg';
import permit from '../../../Website Image/Permit.jpg';
import knowledgebase from '../../../Website Image/Knowledge base-1.jpg';
import purchase from '../../../Website Image/purchase.jpg';
import reporting from '../../../Website Image/Reporting-1.jpg';

const KnowMorePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" bg-gradient-to-r from-blue-600 to-blue-700 text-black p-8">
      {/* First Section */}
      <h1 className="text-4xl font-bold text-white px-20 mb-2">Management & Compliance </h1>
<p className="text-xl  mb-4 text-justify font-serif text-white leading-relaxed px-20">Vibe Connect’s Compliance Tracker helps you stay ahead of regulatory requirements by continuously monitoring and updating compliance standards. The system automatically tracks updates in regulations, flags any potential risks, and keeps all your compliance documents organized and accessible.</p>
      <div className="flex flex-col gap-8 lg:flex-row justify-between px-20 mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 text-white">Compliance & Tracking</h3>

        <p className="text-xl  mb-4 text-justify font-serif text-white leading-relaxed">
    Features tools for tracking regulatory compliance and generating compliance reports. Vibe Connect’s Compliance Tracker helps you stay ahead of regulatory requirements by continuously monitoring and updating compliance standards. The system automatically tracks updates in regulations, flags any potential risks, and keeps all your compliance documents organized and accessible.
    </p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={compliance}
            alt="AI Automation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between px-20 mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-3xl font-bold  mb-2 text-white">Audit Management</h4>
    <p className="text-xl  mb-4 text-justify font-serif text-white leading-relaxed">
    Supports internal and external audits with features for audit trails, training audits, and logs. Simplify your audit processes with Vibe Connect. Our Audit Management feature keeps all your records organized and accessible, tracks compliance, and helps you prepare for audits with ease. Be it a operational audit, technical audit , internal audit, vendor audit for Service or asset or training – our system allow to you give Weightage against each point and completely configurable. Stay ahead of potential issues and ensure a smooth audit process with a system designed to keep everything in check.
    </p>

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

      <div className="flex flex-col gap-8 lg:flex-row justify-between px-20 mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 text-white">Permit Tracking</h3>
    <p className="text-xl  mb-4 text-justify font-serif text-white leading-relaxed">
    Enables digitalization of permits, monitors renewals, and sends expiry alerts.
    </p>


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
      <h1 className="text-4xl font-bold text-white px-20 mb-8">Knowledge Management</h1>
      <div className="flex flex-col gap-8 lg:flex-row justify-between px-20 mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 text-white">Knowledge Base</h3>
        <p className="text-xl  mb-4 text-justify font-serif text-white leading-relaxed">
        	 Provides a repository of information, FAQs, and training materials to support knowledge sharing and learning.
        </p>
        <h3 className="text-3xl font-bold mb-2 text-white">Learning Management System (LMS)</h3>
        <p className="text-xl  mb-4 text-justify font-serif text-white leading-relaxed">
         Manages courses, defines learning paths, and tracks learner progress for employee development.
        </p>



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={knowledgebase}
            alt="AI Automation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-white px-20 mb-8">Operational  Management</h1>
      <div className="flex flex-col gap-8 lg:flex-row justify-between px-20 mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 text-white">Purchase Order Management </h3>
        <p className="text-xl  mb-4 text-justify font-serif text-white leading-relaxed">
        Manages purchase and work orders, goods received (GRN) and dispatched (GDN), and inventory. Streamline your procurement and operational processes with Vibe Connect. Easily create and track Purchase Orders and Work Orders from our system to onboarding vendor. Monitor payments and progress in real-time and manage every detail from a single, centralized dashboard. Simplify your operations and boost productivity with a unified solution that keeps procurement and work orders running smoothly.
        </p>
       



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={purchase}
            alt="AI Automation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between px-20 mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 text-white">	Cost Management </h3>
        <p className="text-xl  mb-4 text-justify font-serif text-white leading-relaxed">
        Includes systems for cost approvals, budget tracking, expense reporting, and bill payments. Our tool simplifies the entire cost approval process, From small maintenance tasks to larger, costlier repairs, our system routes approvals based on cost thresholds, ensuring the right level of authorization is met. With multiple layers of approval, Vibe Connect ensures that all approval flow are respected through system, while speeding up the approval process so nothing gets held up.
        </p>
       



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={purchase}
            alt="AI Automation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-white  px-20 mb-8">	Documentation & Reporting</h1>
      <div className="flex flex-col gap-8 lg:flex-row justify-between px-20 mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 text-white">	Reporting  </h3>
        <p className="text-xl  mb-4 text-justify font-serif text-white leading-relaxed">
        Provides AI/BI dashboards, custom and scheduled reports for comprehensive insights. Vibe Connect’s AI Dashboard & Reports deliver real-time analytics and comprehensive insights to drive your business decisions. Monitor key metrics, visualize trends, and generate detailed reports with ease, all from a single, user-friendly interface. Our advanced system transforms complex data into clear, actionable insights, helping you stay informed and make smarter decisions effortlessly.
        </p>
       



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={reporting}
            alt="AI Automation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between px-20 mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold mb-2 text-white">	Document Management   </h3>
        <p className="text-xl  mb-4 text-justify font-serif text-white leading-relaxed">
        Facilitates document storage, version control, and access management. Simplify document management with Vibe Connect’s Documents Pro. Efficiently organize, access, and secure all your important documents in one centralized location. Vibe connect Implements robust document storage solutions, streamline retrieval processes, and enhance collaboration with seamless sharing features. Maintain control and security over your documents, ensuring they are always at your fingertips when you need them.
        </p>
       



        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={reporting}
            alt="AI Automation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default KnowMorePage;
