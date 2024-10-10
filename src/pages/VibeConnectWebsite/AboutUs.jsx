import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-center font-serif text-gray-800 mb-6">
          About <span className="text-indigo-600">Vibe Connect</span>
        </h2>
        
        {/* Intro Paragraph */}
        <p className="text-xl text-justify font-serif text-gray-700 mb-8  mx-auto ">
          <span className="font-medium text-gray-800">Vibe Connect</span> is your go-to office management platform designed to simplify and optimize workplace operations.
          Whether it's finance, employee management, or operations, Vibe Connect provides an all-in-one solution to help
          businesses enhance productivity and efficiency across departments.
        </p>

        {/* Mission and What We Offer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* Mission Section */}
          <div>
            <h3 className="text-2xl font-semibold font-serif text-gray-800 mb-4">
              <span className="border-b-2 border-black ">Our Mission</span>
            </h3>
            <p className="text-gray-600  font-serif leading-relaxed text-xl">
              At Vibe Connect, our mission is to empower businesses with seamless and intuitive tools that improve everyday
              office management. We focus on delivering solutions that help businesses manage their operations smoothly so they
              can grow faster and focus on their core goals.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed font-serif text-xl">
              We believe that when companies have better control over finance, HR, and operations, they can dedicate more
              time to strategy and innovation. Our platform is designed to help businesses of all sizes achieve that balance.
            </p>
          </div>

          {/* What We Offer Section */}
          <div>
            <h3 className="text-2xl font-semibold font-serif text-gray-800 mb-4">
              <span className="border-b-2 border-black ">What We Offer</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-xl">
              Vibe Connect offers a wide range of applications that streamline your day-to-day office tasks:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 text-xl">
              <li className="mb-2"><strong className="text-indigo-600">Finance Management:</strong> From bill pay to audit tracking, we make financial management simple and efficient.</li>
              <li className="mb-2"><strong className="text-indigo-600">Human Resources:</strong> Manage payroll, attendance, onboarding, and employee performance with ease.</li>
              <li className="mb-2"><strong className="text-indigo-600">Operations:</strong> Handle assets, suppliers, service requests, and transportation in one place.</li>
              <li><strong className="text-indigo-600">Employee Tools:</strong> Streamline communication, task management, and employee wellness with built-in apps.</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
            <span className="border-b-2 border-black ">Why Choose Vibe Connect?</span>
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed font-serif text-center text-xl max-w-3xl mx-auto">
            Vibe Connect is built with simplicity, efficiency, and scalability in mind. We provide everything your business
            needs to manage its day-to-day operations in one integrated platform, tailored for businesses of all sizes.
            With our user-friendly design and powerful tools, managing finance, HR, and operations becomes a seamless process.
          </p>
        </div>

        {/* Core Features Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
            <span className="border-b-2 border-black ">Our Core Features</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-serif font-semibold text-indigo-600 mb-3">Finance Management</h4>
              <p className="text-gray-600 font-serif text-xl leading-relaxed">
                Manage personal financials, audit reports, bill payments, insurance, and advance salary requests in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-serif font-semibold text-indigo-600 mb-3">Employee Management</h4>
              <p className="text-gray-600 font-serif text-xl leading-relaxed">
                Simplify project management, task scheduling, and communication. Ensure employee well-being with fitness
                and health apps.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-serif font-semibold text-indigo-600 mb-3">Operations</h4>
              <p className="text-gray-600 font-serif text-xl leading-relaxed">
                Keep track of assets, suppliers, soft services, and transportation. Integrate your operational needs into one system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
