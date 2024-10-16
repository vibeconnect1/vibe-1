import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import VibeConnectNavbar1 from "./VibeConnectNavbar1";
import VibeConnectFooter from "./VibeConnectFooter";

function FAQ() {
  // Initial state for FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "What is Vibe Connect?",
      answer: "Vibe Connect is an integrated business management platform designed to streamline operations by centralizing communication, collaboration, and task management.",
      isVisible: false,
    },
    {
      question: "Which industries can benefit from Vibe Connect?",
      answer: "Vibe Connect is highly adaptable and serves a wide range of industries, including real estate, hospitality, manufacturing, corporate offices, and facility management.",
      isVisible: false,
    },
    {
      question: "How does Vibe Connect enhance team collaboration?",
      answer: "Vibe Connect facilitates seamless collaboration by offering tools for real-time communication, task assignment, progress tracking, and centralized document management.",
      isVisible: false,
    },
    {
      question: "Does Vibe Connect integrate with other software?",
      answer: "Yes, Vibe Connect integrates with various third-party tools, including HRMS, project management, inventory systems, and email platforms, to ensure a smooth workflow.",
      isVisible: false,
    },
    {
      question: "What document management features are available?",
      answer: "Vibe Connect provides secure cloud-based document storage, allowing teams to easily upload, organize, and share documents while maintaining version control and access permissions.",
      isVisible: false,
    },
    {
        question: "What communication features are included?",
        answer: "Vibe Connect offers unified communication capabilities such as messaging, email synchronization, and notification systems to keep teams informed and connected.",
        isVisible: false,
      },
      {
        question: "How does Vibe Connect support project management?",
        answer: "Vibe Connect includes project management tools such as task tracking, project timelines, automated reminders, and progress monitoring to ensure projects stay on schedule.",
        isVisible: false,
      },
      {
        question: "Is Vibe Connect customizable?",
        answer: "Yes, Vibe Connect is customizable to fit specific business needs. Modules can be tailored to manage tasks, inventory, client communication, and other operational requirements.",
        isVisible: false,
      },
      {
        question: "Is Vibe Connect accessible via mobile devices?",
        answer: "Yes, Vibe Connect is available on mobile devices, enabling users to manage workflows and stay connected from anywhere.",
        isVisible: false,
      },
      {
        question: "What security measures are in place for data protection?",
        answer: "Vibe Connect uses advanced encryption and data protection protocols to safeguard business information and ensure compliance with industry standards.",
        isVisible: false,
      },
      {
        question: "Can Vibe Connect assist with compliance and audits?",
        answer: "Yes, Vibe Connect features compliance tracking tools to help organizations monitor and meet audit requirements, ensuring adherence to industry regulations.",
        isVisible: false,
      },
      {
        question: "How is user onboarding managed?",
        answer: "Vibe Connect offers a user-friendly interface and provides comprehensive onboarding support through tutorials and customer service to ensure a smooth transition for new users.",
        isVisible: false,
      },
      {
        question: "What is the pricing structure for Vibe Connect?",
        answer: "Vibe Connect offers a flexible pricing model based on organizational size and the required features. For a personalized pricing plan, please contact our sales team.",
        isVisible: false,
      },
      {
        question: "What support services does Vibe Connect provide?",
        answer: "Vibe Connect offers 24/7 customer support through various channels, including email, phone, and live chat, to address any technical issues or inquiries.",
        isVisible: false,
      },
  ]);

  // Toggle visibility of answers
  const toggleAnswer = (index) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, isVisible: !faq.isVisible } : faq
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* <VibeConnectNavbar1/> */}
      {/* <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Glide</h1>
          <div>
            <button className="mr-4 text-gray-600">Log In</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Sign Up</button>
          </div>
        </div>
      </header> */}
<main className="flex-grow">
        {/* Gradient background */}
        <section className="relative  bg-blue-200 text-center py-28">
          <h1 className="text-5xl font-bold  text-black mb-4">Get Help</h1>
         
          <div className="flex justify-center">
             <input
              type="text"
              placeholder="Search FAQs"
              className="w-1/2 p-2 border border-gray-300 rounded-md"
            />
            
          </div>
          {/* <div className='absolute mt-4 flex justify-center w-full h-full bg-cover bg-center'>
          <img  src={compliance} alt="" className="z-20"/>
          </div> */}
          {/* <div className="absolute bottom-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" d="M0,320L80,316C160,312,320,304,480,292C640,280,800,264,960,250.7C1120,237,1280,227,1360,223.3L1440,220L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  </div> */}
        </section>
        {/* Form section */}
      
      </main>
      {/* Main Content */}
      <main className="container mx-auto mt-8 px-20 my-8">
        {/* Get Help Section */}
       

        <div className="flex gap-8">
          {/* General Section */}
          <section className="w-2/3">
            <h3 className="text-2xl font-semibold mb-4">General</h3>
            <ul className="space-y-2">
              {faqs.map((faq, index) => (
                <li key={index} className="border-b py-2">
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-500 font-serif text-xl">
                      {faq.question}
                    </a>
                    <button
                      className="text-blue-600 "
                      onClick={() => toggleAnswer(index)}
                    >
                      {faq.isVisible ? <FaChevronUp/> : <FaChevronDown/>}
                    </button>
                  </div>
                  {faq.isVisible && (
                    <p className="text-gray-600 font-serif text-xl mt-2">{faq.answer}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Quick Links Section */}
          {/* <aside className="w-1/3 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="bg-gray-100 p-4 rounded-md">
                <a href="#" className="text-blue-600">
                  Join the Community
                </a>
                <p className="text-gray-500 text-sm">Post in our lively forum for quick help.</p>
              </li>
              <li className="bg-gray-100 p-4 rounded-md">
                <a href="#" className="text-blue-600">
                  Read Documentation & Guides
                </a>
                <p className="text-gray-500 text-sm">Learn at your own pace.</p>
              </li>
              <li className="bg-gray-100 p-4 rounded-md">
                <a href="#" className="text-blue-600">
                  Hire an Expert
                </a>
                <p className="text-gray-500 text-sm">
                  Need a professional app fast and willing to pay?
                </p>
              </li>
            </ul>
          </aside> */}
        </div>
      </main>
      <VibeConnectFooter/>
    </div>
  );
}

export default FAQ;
