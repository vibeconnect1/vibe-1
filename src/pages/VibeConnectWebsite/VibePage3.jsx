import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import LoginOTP from './LoginOTP';
const dropdownVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
  exit: { opacity: 0, y: 20 },
};

const VibePage3 = () => {
  const sections = [
    {
      title: "FINANCE",
      links: [
        { name: "Personal Financial", url: "/Personal-Financial-website" },
        { name: "Purchase", url: "/Purchase-website" },
        { name: "Bill Pay", url: "/billpay-website" },
        { name: "Audit", url: "/audit-website" },
        { name: "Insurance", url: "/insurance-website" },
        { name: "Advance Salary", url: "/advance-salary-website" },
        { name: "Other Bills", url: "/other-bills-website" },
      ],
    },
    {
      title: "Employee",
      links: [
        { name: "Project & Task Management", url: "/project-management-website" },
        // { name: "Task Management", url: "/task-management-website" },
        { name: "Calendar", url: "/calendar-website" },
        { name: "Communication", url: "/Communication-website" },
        { name: "Birthday", url: "/birthday-website" },
        { name: "Fitness", url: "/fitness-website" },
        { name: "Doctor Appointment", url: "/doctor-appointment-website" },
        { name: "Skill Grow", url: "/Skill-Grow-website" },
        { name: "Document Pro", url: "/Document Pro-website" },

      ],
    },
    {
      title: "Operations",
      links: [
        { name: "Suppliers", url: "/suppliers-website" },
        { name: "Service PR/WO", url: "/Servicepr-wo-website" },
        { name: "Asset", url: "/Asset-website" },
        { name: "Soft Services", url: "/SoftServices-website" },
        { name: "Service Desk", url: "/Service-desk-website" },
        { name: "Transportation", url: "/Transportation-website" },
        { name: "F&B", url: "/fb-website" },
        { name: "Integration", url: "/Integration-website" },
        { name: "Passes", url: "/Passes-website" },
        { name: "Permit", url: "/Permit-website" },
        { name: "Attendance", url: "/Attendance-website" },
        { name: "Incident", url: "/Incident-website" },
        { name: "Meeting", url: "/Meeting-website" },
      ],
    },
    {
      title: "HUMAN RESOURCES",
      links: [
        // { name: "HRMS", url: "/HRMS-website" },
        { name: "Employee Onboarding", url: "/HRMS-website" },
        { name: "Payroll Management", url: "/HRMS-website" },
        { name: "Attendance Tracking", url: "/HRMS-website" },
        { name: "Roster Management", url: "/HRMS-website" },
        { name: "Reports and Analytics", url: "/HRMS-website" },
        { name: "Leave Management", url: "/HRMS-website" },
       
  
      ],
    },
  ];
  const [modalType, setModalType] = useState(null);
  const openSignInModal = () => setModalType("signin");
  const openSignUpModal = () => setModalType("signup");
  const openForgotPasswordModal = () => setModalType("forgotPassword");
  const openLoginOTPModal = () => setModalType("LoginOTP");
  const closeModal = () => setModalType(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.9,
  });

  const rings = [
    { top: '75%', delay: 0 },
    { top: '70%', delay: 0.5 },
    { top: '65%', delay: 1 },
    { top: '60%', delay: 1.5 },
  ];

  return (
    <div className=" flex justify-center items-center min-h-screen bg-gray-100 bg-cover bg-center">
      {/* Background image */}
     
      <img
        src="https://reshapecxm.com/adobe-reshaping-cxm/media/05347bf55b7a8506366b34e4168ce643/top-background-full.png"
        alt="Customer Experience Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Adobe Logo */}
      <div className="absolute top-5 right-4 md:right-10">
        <div className="flex items-center space-x-6">
          <button onClick={toggleDropdown} className="text-white font-semibold">Solutions</button>
          <Link to="" className="text-white font-semibold hidden md:inline">Career</Link>
          <Link 
          to="/AboutUs-website" 
          className="text-white font-semibold hidden md:inline">About us</Link>
          
          <Link to="/FAQ" className="text-white font-semibold hidden md:inline">FAQ</Link>
          <Link to="" className="text-white font-semibold hidden md:inline">Media</Link>
          <Link to="" className="text-white font-semibold hidden md:inline">Case studies</Link>
          <Link to="" className="text-white font-semibold hidden md:inline">Testimonial</Link>
          <button onClick={openSignInModal} className="text-white font-semibold rounded">Login</button>
          {/* <Link to="/Contact-website" className="text-white font-semibold hidden md:inline">Contact</Link> */}
          
        </div>
      </div>
      
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-14 w-full px-4 sm:px-8 lg:px-20 py-6 lg:py-6  bg-white/85 z-40 border border-gray-200 shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                >
                  <h3 className="font-bold text-base text-black sm:text-lg mb-2 border-b-2 w-64  border-gray-400">{section.title}</h3>
                 
                  <ul>
                    {section.links.map((link) => (
                      <li key={link.url} className="py-1   font-serif  hover:text-gray-800  leading-relaxed">
                        <Link to={link.url}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text content */}
      <div
        ref={ref}
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10 text-center text-white px-4 md:px-0"
      >
        <motion.h1
          className="text-3xl md:text-7xl leading-tight lg:mr-80"
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: inView ? 1 : 0, translateY: inView ? 0 : 10 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          YOUR ULTIMATE
        </motion.h1>

        <motion.h1
          // style={{ fontFamily: 'Montserrat, sans-serif' }}
          className="text-4xl md:text-8xl w-full lg:ml-20 font-bold leading-tight"
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: inView ? 1 : 0, translateY: inView ? 0 : 10 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          WORKSPACE
        </motion.h1>

        <motion.h1
          // style={{ fontFamily: 'Montserrat, sans-serif' }}
          className="text-5xl md:text-9xl w-full lg:ml-20 font-bold leading-tight"
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: inView ? 1 : 0, translateY: inView ? 0 : 10 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          COMPANION
        </motion.h1>

        <motion.p
          className="mt-4 md:mt-2 text-xl md:text-3xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          TRY VIBE CONNECT NOW !
        </motion.p>
      </div>

      {/* Animated Rings */}
      {rings.map((ring, index) => (
        <div
          key={index}
          className="absolute left-[35%] transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: ring.top }}
        >
          <motion.img
            src="https://reshapecxm.com/adobe-reshaping-cxm/media/efe83ea39d6803671e6e82178fef7c55/ring-4-full.png"
            alt="Ring Animation"
            className="w-[120px] md:w-[320px] h-[30px]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: [0.9, 1],
            }}
            transition={{
              duration: 4,
              ease: 'easeInOut',
              delay: ring.delay,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </div>
      ))}
      <div className="absolute bottom-10 right-10 flex space-x-6">
<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-7 transition-transform duration-300 hover:scale-110" />
</a>
<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" alt="LinkedIn" className="h-8 transition-transform duration-300 hover:scale-110" />
</a>
<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
  <img src="data:image/png;base64,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" alt="Twitter"
   className="h-6 mt-1 transition-transform duration-300 hover:scale-110" />
</a>
</div>
{modalType === "signin" && (
        <SignInModal onSignUpClick={openSignUpModal} onForgotPasswordClick={openForgotPasswordModal} onLoginOTPClick={openLoginOTPModal} onClose={closeModal} />
      )}
      {modalType === "signup" && (
        <SignUpModal onSignInClick={openSignInModal} onClose={closeModal} />
      )}
       {modalType === "forgotPassword" && (
        <ForgotPasswordModal onClose={closeModal} />
      )}
      {modalType === "LoginOTP" && (
        <LoginOTP onClose={closeModal}/>
      )}
    </div>
  );
};

export default VibePage3;



