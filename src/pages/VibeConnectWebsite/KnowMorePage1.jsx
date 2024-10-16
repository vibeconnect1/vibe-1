import React, { useEffect } from "react";
import audit from '../../../Website Image/Audit.jpeg'
import softservice from '../../../Website Image/softservice.jpeg';
import permit from '../../../Website Image/Permit.jpg';
import knowledgebase from '../../../Website Image/Knowledge base-1.jpg';
import purchase from '../../../Website Image/purchase.jpg';
import reporting from '../../../Website Image/Reporting-1.jpg';
import vendor from '../../../Website Image/vendor.jpeg';
import asset from '../../../Website Image/asset.jpeg';
import pass from '../../../Website Image/pass.jpeg';
import utility from '../../../Website Image/utility.jpeg';
import work from '../../../Website Image/workspaceimage.jpeg';
import facility from '../../../Website Image/Facilityimage.jpeg';
import main from '../../../Website Image/maintenanceimage.jpeg';
import logs from '../../../Website Image/logsimage.jpeg';
import VibeConnectFooter from "./VibeConnectFooter";
import VibeConnectNavbar1 from "./VibeConnectNavbar1";

function KnowMorePage1() {
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
        <section className="relative bg-gradient-to-r from-green-500 via-green-600 to-green-800 text-center py-40">
  <h1 className="text-5xl font-bold text-white mb-4">PROPERTY MANAGEMENT TOOLS</h1>
  
  {/* <div className='absolute mt-4 flex justify-center w-full h-full bg-cover bg-center'>
    <img src={compliance} alt="" className="z-20"/>
  </div> */}

  {/* Curved bottom using SVG similar to the screenshot */}
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
      <div className="relative top-8 font-serif text-gray-800 px-20">
      {/* First Section */}
      {/* <h1 className="text-4xl font-bold  mb-2">Property Management </h1> */}
<p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">Effortlessly manage your property with Vibe Connect’s Property Management. From tracking agreements and handling tenant requests to scheduling maintenance and managing payments, our tool centralizes all property-related tasks. Stay organized and efficient with our 15+ modules in Property Management system along with an intuitive dashboard that gives you complete control over your property management needs.  </p>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold  mb-2">	Asset Management</h3>

        <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
        Tools for tracking assets, scheduling maintenance, and managing asset inventory efficiently. Keep tabs on all your assets with ease using Vibe Connect’s Asset Management. Track the lifecycle of each asset, manage depreciation, and ensure optimal utilization with a streamlined system that integrates asset details into one central hub. Say goodbye to asset mismanagement and hello to organized, efficient tracking.    </p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={asset}
            alt="AI Automation"
            // className=" h-64 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between  mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-3xl font-bold   mb-2">	Workspace Management</h4>
    <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
    Supports internal and external audits with features for audit trails, training audits, and logs. Simplify your audit processes with Vibe Connect. Our Audit Management feature keeps all your records organized and accessible, tracks compliance, and helps you prepare for audits with ease. Be it a operational audit, technical audit , internal audit, vendor audit for Service or asset or training – our system allow to you give Weightage against each point and completely configurable. Stay ahead of potential issues and ensure a smooth audit process with a system designed to keep everything in check.
    </p>

        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={work}
            alt="Team Taskforce"
            // className=" h-80 w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold  mb-2">	Facility Management</h3>
    <p className="text-xl  mb-4 text-justify font-serif  leading-relaxed">
    Ensures smooth operations through facility maintenance, safety inspections, and facility upgrade tracking. Effortlessly manage your property with Vibe Connect’s Property Management . From tracking agreements and handling tenant requests to scheduling maintenance and managing payments, our tool centralizes all property-related tasks. Stay organized and efficient with our 15+ modules in Property Management system along with an intuitive dashboard that gives you complete control over your property management needs.
    </p>


        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={facility}
            alt="AI Automation"
            className=" h-full w-4/5"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-3xl font-bold   mb-2">		Soft Services Management</h4>
    {/* <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
    Tracks soft services, scheduling task, and track housekeeping activities Soft services management encompasses a range of non-core services that contribute to the overall functionality and experience of a property or company. These services include cleaning, maintenance, security, reception, and catering. Effective management of these services is crucial for several reasons:    </p> */}

<ul >
    {/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"> <span className="font-bold">Enhanced Employee Satisfaction:</span>	 A clean, well-maintained, and safe environment boosts morale and productivity among employees, fostering a positive workplace culture.</li>
<li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Brand Image:</span> Well-managed soft services reflect positively on a company’s brand. A welcoming and organized space enhances customer perceptions and can lead to increased client loyalty.

</li> */}
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold">Operational Efficiency:</span>	 Streamlined soft services processes reduce downtime and improve the efficiency of daily operations, allowing core business functions to thrive.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold">Cost Management:</span> Effective management can lead to cost savings through optimized resource allocation and improved vendor relationships, ultimately contributing to the bottom line.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold">Compliance and Safety:</span> Proper management ensures compliance with health and safety regulations, minimizing risks and liabilities.</li>

{/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	In summary, soft services management is essential for creating a conducive work environment, enhancing brand reputation, and driving operational success in properties and companies.</li> */}



</ul>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={softservice}
            alt="Team Taskforce"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
      {/* <h1 className="text-3xl font-bold  mb-4">	Facilities & Maintenance</h1> */}
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold  mb-2">	Maintenance Management </h3>
        {/* <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
        Provides tools for managing checklists, preventive and corrective maintenance processes. Maintenance management is critical for ensuring the longevity, safety, and functionality of facilities and equipment in properties and companies. Its importance can be highlighted through several key aspects:        </p>
        */}
        <ul >
    {/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Operational Efficiency:</span>	 Regular maintenance helps prevent equipment failures and downtime, ensuring smooth operations and minimizing disruptions to productivity.</li>
<li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Cost Savings:</span>	 Proactive maintenance can reduce long-term repair costs and extend the lifespan of assets, ultimately leading to significant savings for the organization.

</li> */}
{/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Safety and Compliance:</span> Proper maintenance ensures that facilities meet safety regulations and standards, protecting employees and visitors from potential hazards.</li> */}
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"> <span className="font-bold">Data Security:</span>	 Electronic logs can be encrypted and backed up, providing better protection against loss, theft, or unauthorized access compared to physical logs.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"> <span className="font-bold">Compliance and Audit Readiness:</span>	 Digital logs facilitate compliance with industry regulations by ensuring records are easily accessible and organized for audits.</li>
{/* <li className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold">Analytics and Insights:</span> Digital log management allows for easier data analysis, enabling companies to identify trends, improve processes, and make informed strategic decisions.</li> */}
{/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	In summary, digital log sheet management enhances operational efficiency, accuracy, and security while supporting compliance and data-driven decision-making in companies.</li> */}
</ul>


        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={main}
            alt="AI Automation"
            // className=" h-72 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-3xl font-bold   mb-2">Logs Management</h4>
    {/* <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
    Maintains logs of activities, maintenance, and incident reports for better transparency and record-keeping. Digital log sheet management refers to the electronic tracking and documentation of various operational activities, replacing traditional paper-based systems. Its significance in companies is multifaceted:</p>
     */}
    <ul >
    {/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">	Increased Efficiency: </span>Digital logs streamline data entry and retrieval processes, saving time and reducing administrative burdens for employees.</li>
<li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Real-Time Access:</span>	 With cloud-based systems, stakeholders can access logs anytime and anywhere, enhancing collaboration and decision-making.

</li> */}
{/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Improved Accuracy:</span> Digital systems minimize human error associated with manual entry, ensuring more reliable data for analysis and reporting.</li> */}
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold">Data Security:</span>	 Electronic logs can be encrypted and backed up, providing better protection against loss, theft, or unauthorized access compared to physical logs.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold">Operational Continuity:</span>	 Reliable vendor management ensures that essential services and supplies are consistently delivered, supporting uninterrupted business operations.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"> <span className="font-bold">Strategic Alignment:</span> By aligning vendor capabilities with company goals, businesses can better leverage external resources to achieve strategic objectives.</li>
</ul>
{/* <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	In summary, vendor management is vital for optimizing costs, ensuring quality, managing risks, and enhancing operational efficiency in both properties and companies.</p> */}
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={logs}
            alt="Team Taskforce"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold  mb-2">	Vendor Management </h3>
        {/* <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
        Handles vendor contracts, service level agreements (SLAs), and tracks vendor performance for optimized service delivery. Vendor management is a crucial aspect of business operations that involves the selection, evaluation, and oversight of external suppliers and service providers. Its importance can be summarized in several key areas:</p>       
         */}
        <ul >
    {/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Cost Efficiency:</span> Effective vendor management helps companies negotiate better contracts and pricing, leading to significant cost savings and improved budget management.</li>
<li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Quality Assurance:</span>	 By establishing clear performance metrics and regularly assessing vendor performance, companies can ensure the quality of goods and services, maintaining high standards in their operations.

</li> */}
{/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Risk Mitigation:</span> Managing vendors effectively allows companies to identify potential risks, such as supply chain disruptions or compliance issues, and develop strategies to mitigate them.</li> */}
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold">Improved Relationships:</span>	 Strong vendor relationships foster collaboration and communication, which can lead to enhanced service delivery and innovation.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold">Operational Continuity:</span>	 Reliable vendor management ensures that essential services and supplies are consistently delivered, supporting uninterrupted business operations.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed"><span className="font-bold">Strategic Alignment:</span>	 By aligning vendor capabilities with company goals, businesses can better leverage external resources to achieve strategic objectives.</li>
{/* <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	In summary, vendor management is vital for optimizing costs, ensuring quality, managing risks, and enhancing operational efficiency in both properties and companies.</p> */}
</ul>


        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={vendor}
            alt="AI Automation"
            className=" h-full w-4/5"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row-reverse justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-3xl font-bold   mb-2">	Utility & Logistics </h4>
    {/* <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
    Offers tools for meter readings, transportation scheduling, and. Utility and logistics management are essential components that ensure the smooth operation and efficiency of properties and companies. Their importance can be highlighted in several key areas:</p>
    */}
    <ul >
    {/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">	Operational Efficiency:</span> Effective utility management ensures that essential services like electricity, water, and HVAC are consistently available, directly impacting productivity and comfort.</li>
<li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold">Cost Control:</span>		 Optimizing utility usage and logistics operations can lead to significant cost savings, as companies can identify inefficiencies and reduce waste.

</li> */}
{/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold">Sustainability:</span>	 Proper management of utilities helps companies minimize their environmental impact by promoting energy efficiency and sustainable practices, aligning with corporate social responsibility goals.</li> */}
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold">Supply Chain Management:</span> Logistics plays a critical role in the timely delivery of goods and services, ensuring that operations run smoothly and customer demands are met without delays.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold">Safety and Compliance:</span> Effective utility management ensures compliance with regulations and standards, reducing risks associated with utility failures or hazardous situations.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold">Enhanced Customer Experience:</span> Reliable logistics and utilities improve service delivery, enhancing customer satisfaction and fostering loyalty.</li>
</ul>
{/* <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">		In summary, utility and logistics management are vital for operational efficiency, cost control, sustainability, and overall success in both properties and companies.</p> */}
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={utility}
            alt="Team Taskforce"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mb-12">
        {/* Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-bold  mb-2">	Pass Management </h3>
        {/* <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">
        Manages passes for visitors, vehicles, good in/out and delivery tracking. Pass management is a critical system that oversees the issuance and tracking of passes for visitors, vehicles, goods in/out, and delivery logistics within a company. Its significance can be summarized in several key areas:</p>       
         */}
        <ul >
    {/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Enhanced Security:</span>	 By controlling access to facilities, pass management helps ensure that only authorized individuals and vehicles enter the premises, reducing security risks.</li>
<li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	<span className="font-bold">Visitor Tracking:</span>	 Efficiently managing visitor passes allows companies to monitor who is on-site at any given time, enhancing accountability and emergency preparedness.

</li> */}
{/* <li className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed"><span className="font-bold">Streamlined Operations:</span>	 Effective pass management simplifies the process of receiving and dispatching goods, improving logistics and reducing wait times for deliveries.</li> */}
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold">Inventory Control:</span> By tracking goods in and out, companies can maintain better oversight of inventory levels, minimizing losses and ensuring timely restocking.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold">Data Collection:</span> A digital pass management system can gather valuable data on visitor and delivery patterns, aiding in operational planning and resource allocation.</li>
<li className="text-xl  mb-4 text-justify font-serif  leading-relaxed">	<span className="font-bold">Compliance and Reporting:</span> Maintaining records of access and deliveries can assist with compliance requirements and provide insights for audits and reporting.</li>
{/* <p className="text-xl  mb-4 text-justify font-serif text-gray-800 leading-relaxed">	In summary, pass management is essential for enhancing security, streamlining operations, and improving overall efficiency in companies.</p> */}
</ul>


        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center ">
          <img
            src={pass}
            alt="AI Automation"
            // className=" h-96 w-3/4"
            // style={{ transform: "rotate(5deg)" }}
          />
        </div>
      </div>
     
    </div>


   
     

      {/* Call to Action Section */}
      <div className=" flex flex-col justify-center items-center py-10 bg-gradient-to-r from-green-500 via-green-600 to-green-800  ">
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

export default KnowMorePage1;
