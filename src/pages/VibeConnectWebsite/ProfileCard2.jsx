import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VibeConnectFooter from './VibeConnectFooter';
import purple from '../../../Website Image/Screenshot_purple.png';
import personal from '../../../Website Image/personalfinanceicon.png';
import insurance from '../../../Website Image/insuranceicon.png';
import health from '../../../Website Image/healthicon.png';
import wellness from '../../../Website Image/Employeeengagemnticon.png';
import work from '../../../Website Image/communicationicon.png';

const profiles = [
  {
    id: 1,
    name: '	Personal Finance',
    title: '',
    description: 'Personal Finance',
    text:"Finance & Personal Management tools helps individuals manage their finances, bills, insurance, healthcare, and wellness, offering comprehensive solutions for personal and financial well-being at one location.  These tools encompass a wide range of functionalities designed to simplify tasks such as budgeting, bill tracking, insurance management, healthcare coordination, and overall wellness. Offering comprehensive solutions for personal finance and wellness in one location, these tools empower individuals to take control of their financial futures, enhance their decision-making, and improve their overall quality of life.Includes budgeting tools, expense tracking, and savings goal setting to manage personal finances effectively.",
    image: personal,
  },
  {
    id: 2,
    name: '	Insurance Management ',
    title: '',
    text:" Helps track insurance policies, manage claims, and review coverage for optimal protection. ",
    description: 'Insurance Management',
    image: insurance,
  },
  {
    id: 3,
    name: '	Healthcare  Management',
    title: ' ',
    text:"Healthcare Management provides tools for managing doctor appointments, health records, and participation in wellness programs.",
    description: 'Healthcare Management',
    image: health,
  },
  {
    id: 4,
    name: '	Work-Life Balance ',
    title: 'Initiatives',
    text:"Flexible work schedules, remote work options, and wellness days allow employees to prioritize their personal lives alongside their professional responsibilities, reducing burnout. ",
    description: 'Work-Life Balance Initiatives',
    image: work,
  },
  {
    id: 5,
    name: '	Wellness Challenges ',
    title: 'and  Incentives',
    text:"Programs that gamify wellness, such as health challenges and rewards for participation, engage employees and foster a culture of health and fitness.Investing in fitness and wellness for employees not only improves their health and well-being but also enhances organizational performance. By fostering a culture that prioritizes wellness, companies can reduce absenteeism, boost morale, and create a more productive work environment.",
    description: 'Wellness Challenges and Incentives',
    image: wellness,
  },
 
];

const ProfileCard2 = () => {
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
    <div className='relative bottom-6'>
    <div className="min-h-screen  bg-cover bg-center" style={{ backgroundImage: `url(${purple})` }}>
      <div className="absolute top-0 right-0 w-full lg:w-1/3 
 text-white px-4 lg:px-8 py-2 rounded-bl-2xl shadow-lg" style={{ backgroundColor: '#800080' }}>
        <p className="font-bold text-lg tracking-wide uppercase">Finance & Personal Management </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 py-6 lg:py-10">
        {/* Sidebar with Profile Images */}
        <div className="flex flex-col items-start space-y-6 md:space-y-3 py-4 lg:py-8 lg:ml-20 xl:ml-52">
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
            <div className="w-16 h-16 md:w-28 md:h-28 rounded-full border-2  p-2 md:p-1 border-purple-800" style={{ backgroundColor: '#800080' }}>
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full p-2 filter invert"
              />
            </div>
            {/* Profile Name and Title */}
            <div className=" ">
              <h2 className="text-gray-900 text-xl  font-bold tracking-tight font-fantasy">
                {profile.name}
              </h2>
              <h3 className="text-gray-900 text-xl  font-bold tracking-tight font-fantasy">
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
              <h2 className="text-gray-900 text-xl  font-bold tracking-tight font-fantasy ">
                {profile.name}
              </h2>
              <h3 className="text-gray-900 text-xl  font-bold tracking-tight font-fantasy ">
                {profile.title}
              </h3>
            </div>
            {/* Profile Image */}
            <div className="w-16 h-16 md:w-28 md:h-28 rounded-full border-2  p-2 md:p-1 border-purple-800" style={{ backgroundColor: '#800080' }}>
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full p-2 filter invert"
              />
            </div>
            </div>
          </>
        )}
      </motion.div>
    ))}
  </div>
        {/* Profile Details Section */}
        <div ref={observerRef} className="lg:w-1/3 py-6 md:py-10 px-4 md:px-10 lg:mr-20 xl:mr-32">
          {profiles.map((profile) => (
            profile.id === activeProfile && (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-lg md:text-2xl font-bold text-black uppercase">{profile.description}</h3>
                <p className="mt-2 md:mt-2 text-sm md:text-xl text-justify font-serif text-gray-800 leading-relaxed" >
  {profile.text}
</p>




                <div className="my-4">
                 
                  <div className="w-full  h-0.5 bg-blue-500"></div>
                  <p className="text-center text-blue-500 mt-2 md:mt-2 font-semibold">
                  <a href="/KnowMore-page3">Know More...</a>
                  </p>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
      </div>
      <VibeConnectFooter/>
    </div>
  );
};

export default ProfileCard2

