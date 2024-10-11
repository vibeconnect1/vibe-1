import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import compliance from '../../../Website Image/Compliance-blue.png';
import audit from '../../../Website Image/Audit-blue.png';
import document from '../../../Website Image/Document-blue.png';
import knowledge from '../../../Website Image/Knowledge-blue.png';
import purchase from '../../../Website Image/Purchase-blue.png';


const profiles = [
  {
    id: 1,
    name: 'COMPLIANCE & TRACKING',
    title: '',
    description: 'COMPLIANCE & TRACKING',
    
    text:"Vibe Connect’s Compliance Tracker helps you stay ahead of regulatory requirements by continuously monitoring and updating compliance standards. The system automatically tracks updates in regulations, flags any potential risks, and keeps all your compliance documents organized and accessible. Features tools for tracking regulatory compliance and generating compliance reports. Vibe Connect’s Compliance Tracker helps you stay ahead of regulatory requirements by continuously monitoring and updating compliance standards. The system automatically tracks updates in regulations, flags any potential risks, and keeps all your compliance documents organized and accessible. ",
    image: compliance,
  },
  {
    id: 2,
    name: 'AUDIT MANAGEMENT ',
    title: '',
    text:" Supports internal and external audits with features for audit trails, training audits, and logs. Simplify your audit processes with Vibe Connect. Our Audit Management feature keeps all your records organized and accessible, tracks compliance, and helps you prepare for audits with ease. Be it a operational audit, technical audit , internal audit, vendor audit for Service or asset or training – our system allow to you give Weightage against each point and completely configurable. Stay ahead of potential issues and ensure a smooth audit process with a system designed to keep everything in check. ",
    description: 'AUDIT MANAGEMENT',
    image: audit,
  },
  {
    id: 3,
    name: 'DOCUMENT & REPORTING',
    title: ' ',
    text:"AI/BI dashboards, custom and scheduled reports for comprehensive insights. Vibe Connect’s AI Dashboard & Reports deliver real-time analytics and comprehensive insights to drive your business decisions.Monitor key metrics, visualize trends, and generate detailed reports with ease, all from a single, user-friendly interface. Our advanced system transforms complex data into clear, actionable insights, helping you stay informed and make smarter decisions effortlessly. Simplify document management with Vibe Connect’s Documents Pro. Efficiently organize, access, and secure all your important documents in one centralized location.",
    description: 'DOCUMENT & REPORTING',
    image: document,
  },
  {
    id: 4,
    name: 'KNOWLEDGE BASE ',
    title: '',
    text:"	A knowledge base centralizes essential resources, enabling employees to quickly access information and resolve queries. It supports ongoing learning by offering structured training materials and answers to frequently asked questions. It also helps define clear learning paths, making it easier to track employee progress and development. With a user-friendly interface, employees can efficiently manage their learning journey and enhance their skills. The knowledge base ultimately fosters a culture of continuous improvement and knowledge sharing across the organization. ",
    description: 'KNOWLEDGE BASE',
    image: knowledge,
  },
  {
    id: 5,
    name: 'PURCHASE ORDER ',
    title: 'MANAGEMENT ',
    text:"Manages purchase and work orders, goods received (GRN) and dispatched (GDN), and inventory. Streamline your procurement and operational processes with Vibe Connect. Easily create and track Purchase Orders and Work Orders from our system to onboarding vendor. Monitor payments and progress in real-time and manage every detail from a single, centralized dashboard. Simplify your operations and boost productivity with a unified solution that keeps procurement and work orders running smoothly.  ",
    description: 'PURCHASE ORDER MANAGEMENT',
    image: purchase,
  },
 
];

const ProfilePage = () => {
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
    <div className="min-h-screen relative bottom-6 bg-cover bg-center" 
    >
    {/* Gradient on top right section */}
    <div className="absolute top-0 right-0 w-full mt-2 lg:w-1/3 text-white px-4 py-2 md:px-8 md:py-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-bl-2xl shadow-lg">
      <p className="font-bold text-sm md:text-lg tracking-wide uppercase">Management and compliance tools</p>
    </div>
    <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-blue-700 h-full w-20">
 
</div>


    {/* Left sidebar with gradient */}
    <div className="flex flex-col lg:flex-row justify-between  gap-6 lg:gap-10 py-6 lg:py-10">
      {/* Sidebar with blue gradient */}
      <div className="flex flex-col items-start space-y-6 md:space-y-2 py-4 lg:py-6 lg:ml-20 xl:ml-52  p-6 rounded-r-lg">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.id}
            onClick={() => handleProfileClick(profile.id)}
            className={`flex items-center cursor-pointer transition-all duration-300 w-full ${activeProfile === profile.id ? 'opacity-100' : 'opacity-50'}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: activeProfile === profile.id ? 1 : 0.5, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {index % 2 === 0 ? (
              <>
                {/* Profile Image First */}
                <div className='flex justify-between items-center w-96'>
                  <div className="w-16 h-16 md:w-28 md:h-28 rounded-full border-2 p-2 md:p-1 border-blue-800 bg-gradient-to-r from-blue-500 to-blue-700">
                    <img src={profile.image} alt={profile.name} className="w-full h-full p-2 filter invert" />
                  </div>
  
                  {/* Profile Name and Title */}
                  <div className="">
                    <h2 className="text-gray-900 text-lg font-bold tracking-tight font-fantasy">
                      {profile.name}
                    </h2>
                    <h3 className="text-gray-900 text-lg font-bold tracking-tight font-fantasy">
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
                    <h2 className="text-gray-900 text-lg font-bold tracking-tight font-fantasy">
                      {profile.name}
                    </h2>
                    <h3 className="text-gray-900 text-base font-bold tracking-tight font-fantasy">
                      {profile.title}
                    </h3>
                  </div>
  
                  {/* Profile Image */}
                  <div className="w-16 h-16 md:w-28 md:h-28 rounded-full border-2 bg-gradient-to-r from-blue-500 to-blue-700 p-2 md:p-1 border-blue-800">
                    <img src={profile.image} alt={profile.name} className="w-full h-full p-2 filter invert" />
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
  
      {/* Profile Details Section */}
      <div ref={observerRef} className="lg:w-1/3 py-6 md:py-10 px-4 md:px-10 lg:mr-10 xl:mr-36">
        {profiles.map((profile) => (
          profile.id === activeProfile && (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-lg md:text-2xl font-bold text-black">{profile.description}</h3>
              <p className="mt-2 md:mt-4 text-sm md:text-xl text-justify font-serif text-gray-800 leading-relaxed">
                {profile.text}
              </p>
              <div className="my-4">
                <div className="w-full mx-auto h-0.5 bg-blue-500"></div>
                <p className="text-center text-blue-500 mt-2 md:mt-4 font-semibold">
                  <a href="/KnowMore-page">More Modules</a>
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

export default ProfilePage;

