import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import softservice from '../../../Website Image/Softservice-green.png';
import vendor from '../../../Website Image/vendor-green.png';
import asset from '../../../Website Image/asset-green.png';
import utility from '../../../Website Image/utility-green.png';
import pass from '../../../Website Image/pass-green.png';

const profiles = [
  {
    id: 1,
    name: 'SOFT SERVICES MANAGEMENT',
    title: '',
    description: 'SOFT SERVICES MANAGEMENT',
    text:"Tracks soft services, scheduling task, and track housekeeping activities Soft services management encompasses a range of non-core services that contribute to the overall functionality and experience of a property or company. These services include cleaning, maintenance, security, reception, and catering. A clean, well-maintained, and safe environment boosts morale and productivity among employees, fostering a positive workplace culture.Well-managed soft services reflect positively on a company’s brand. A welcoming and organized space enhances customer perceptions and can lead to increased client loyalty .",
    image: softservice,
  },
  {
    id: 2,
    name: 'ASSET MANAGEMENT ',
    title: '',
    text:" Tools for tracking assets, scheduling maintenance, and managing asset inventory efficiently. Keep tabs on all your assets with ease using Vibe Connect’s Asset Management. Track the lifecycle of each asset, manage depreciation, and ensure optimal utilization with a streamlined system that integrates asset details into one central hub. Say goodbye to asset mismanagement and hello to organized, efficient tracking. Our solution enhances decision-making by providing real-time insights into asset performance and availability, enabling proactive maintenance scheduling. Furthermore, automated alerts and reminders ensure that critical tasks are never overlooked, maximizing operational efficiency. ",
    description: 'ASSET MANAGEMENT',
    image: asset,
  },
  {
    id: 3,
    name: 'VENDOR MANAGEMENT',
    title: ' ',
    text:"Handles vendor contracts, service level agreements (SLAs), and tracks vendor performance for optimized service delivery. Vendor management is a crucial aspect of business operations that involves the selection, evaluation, and oversight of external suppliers and service providers.Effective vendor management helps companies negotiate better contracts and pricing, leading to significant cost savings and improved budget management.By establishing clear performance metrics and regularly assessing vendor performance, companies can ensure the quality of goods and services, maintaining high standards in their operations.",
    description: 'VENDOR MANAGEMENT',
    image: vendor,
  },
  {
    id: 4,
    name: 'UTILITY & LOGISTICS',
    title: '',
    text:"Offers tools for meter readings, transportation scheduling, and Utility and logistics management are essential components that ensure the smooth operation and efficiency of properties and companies.Effective utility management ensures that essential services like electricity, water, and HVAC are consistently available, directly impacting productivity and comfort.Optimizing utility usage and logistics operations can lead to significant cost savings, as companies can identify inefficiencies and reduce waste.Logistics plays a critical role in the timely delivery of goods and services, ensuring that operations run smoothly and customer demands are met without delays. ",
    description: 'UTILITY & LOGISTICS',
    image: utility,
  },
  {
    id: 5,
    name: 'PASS MANAGEMENT',
    title: ' ',
    text:"Manages passes for visitors, vehicles, good in/out and delivery tracking.Pass management is a critical system that oversees the issuance and tracking of passes for visitors, vehicles, goods in/out, and delivery logistics within a company. By controlling access to facilities, pass management helps ensure that only authorized individuals and vehicles enter the premises, reducing security risks. Efficiently managing visitor passes allows companies to monitor who is on-site at any given time, enhancing accountability and emergency preparedness.Effective pass management simplifies the process of receiving and dispatching goods, improving logistics and reducing wait times for deliveries.",
    description: 'PASS MANAGEMENT',
    image: pass,
  },
 
];

const ProfileCard = () => {
  const [activeProfile, setActiveProfile] = useState(profiles[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  const handleProfileClick = (id) => {
    setActiveProfile(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen relative bottom-6 bg-cover bg-center" >
      <div className="absolute top-0 right-0 w-full lg:w-1/3  text-white px-4 lg:px-8 py-2 rounded-bl-2xl bg-gradient-to-r from-green-500  to-green-700 shadow-lg" >
        <p className="font-bold text-lg tracking-wide uppercase">PROPERTY MANAGEMENT TOOLS</p>
      </div>
      <div className="absolute top-0 left-0 bg-gradient-to-r from-green-500  to-green-700 h-full">
  <div className="w-20">
    {/* Content inside the left sidebar */}
  </div>
</div>
      <div className="flex flex-col lg:flex-row justify-between gap-1 lg:gap-10 py-14 lg:py-10">
        {/* Sidebar with Profile Images */}
        <div className="flex flex-col items-start space-y-2 md:space-y-2  lg:py-8 lg:ml-20 xl:ml-52">
    {profiles.map((profile, index) => (
      <motion.div
        key={profile.id}
        onClick={() => handleProfileClick(profile.id)}
        className={`flex items-center cursor-pointer transition-all duration-300 w-full ${activeProfile === profile.id ? 'opacity-100' : 'opacity-50'}`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: activeProfile === profile.id ? 1 : 0.5, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Alternate Layout: Image first or Name and Title first */}
        {index % 2 === 0 ? (
          <>
            {/* Profile Image First */}
            <div className='flex justify-between items-center w-96'>
            <div className="w-16 h-16 md:w-28 md:h-28 rounded-full border-2  p-2 md:p-1 bg-gradient-to-r from-green-500  to-green-700 border-green-800" >
              <img
                src={profile.image}
                alt={profile.name}
                className=" w-full h-full p-3 filter invert object-cover"
              />
            </div>
            {/* Profile Name and Title */}
            <div className=" ">
              <h2 className="text-gray-900 text-lg  font-bold tracking-tight font-fantasy">
                {profile.name}
              </h2>
              <h3 className="text-gray-900 text-base  font-bold tracking-tight font-fantasy">
                {profile.title}
              </h3>
            </div>
            </div>
          </>
        ) : (
          <>
            {/* Profile Name and Title First */}
            <div className='flex justify-between items-center w-96'>
            <div className="">
              <h2 className="text-gray-900 text-lg  font-bold tracking-tight font-fantasy ">
                {profile.name}
              </h2>
              <h3 className="text-gray-900 text-lg  font-bold tracking-tight font-fantasy ">
                {profile.title}
              </h3>
            </div>
            {/* Profile Image */}
            <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-green-500  to-green-700 border-2 p-1 border-green-800 " >
              <img
                src={profile.image}
                alt={profile.name}
                className=" w-full h-full p-2 md:p-2 filter invert object-cover"
              />
            </div>
            </div>
          </>
        )}
      </motion.div>
    ))}
  </div>
        {/* Profile Details Section */}
        <div ref={observerRef} className="lg:w-1/3 py-1 md:py-10 px-4 md:px-12 lg:mr-20 xl:mr-32">
          {profiles.map((profile) => (
            profile.id === activeProfile && (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-lg md:text-2xl font-bold text-black">{profile.description}</h3>
                <p className="mt-2 md:mt-4 text-sm md:text-xl text-justify font-serif text-gray-800 leading-relaxed" >
  {profile.text}
</p>




                <div className="my-4">
                 
                  <div className="w-full  h-0.5 bg-blue-500"></div>
                  <p className="text-center text-blue-500 mt-2 md:mt-4 font-semibold">
                  <a href="/KnowMore-page1">More Modules</a>
                  </p>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard

