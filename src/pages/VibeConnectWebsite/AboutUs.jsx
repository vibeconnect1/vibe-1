import React from 'react';
import VibeConnectFooter from './VibeConnectFooter';
import VibeConnectNavbar1 from './VibeConnectNavbar1';
import contact2 from '../../../Website Image/AboutUsfinal.jpeg';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <VibeConnectNavbar1 /> */}

      {/* Gradient Background with Shadows and Layout */}
      <div className="flex flex-col justify-center">
        <main className="flex-grow">
          {/* Gradient background */}
          <section className="relative bg-gradient-to-r from-[#bae6e9] to-[#c7f0c4] text-center py-20 lg:py-40">
          </section>
          {/* Form section */}
        </main>

        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row px-4 lg:px-20 absolute top-10 left-0 lg:left-30 w-full">
          <div className="p-5 lg:p-10 w-full lg:w-1/2 my-8 bg-white transition-all duration-500 ease-in-out transform">
            <h2 className="text-3xl lg:text-4xl font-serif text-gray-800 mb-4 text-center leading-tight tracking-wider">About Us</h2>
            <p className="text-justify text-gray-600 text-base lg:text-xl font-serif mb-6">
              At VIBE CONNECT, we are dedicated to transforming and digitalizing the way businesses and property management function. Our unified tool is designed to streamline operations, enhance efficiency, and simplify the management of both business and property-related tasks.
            </p>
            <p className="text-justify text-gray-600 text-base lg:text-xl font-serif mb-6">
              We cater to a diverse range of users, including employees, business owners, property managers, and administrators, providing them with a comprehensive solution. Our all-in-one platform integrates essential functions such as project management, communication, scheduling, and property management into one intuitive interface.
            </p>
            <p className="text-justify text-gray-600 text-base lg:text-xl font-serif mb-6">
              We eliminate the complexities and inefficiencies associated with using multiple disconnected tools. This unified approach ensures that users can manage their tasks more effectively, reduce administrative overhead, and focus on what truly matters—driving their business and property management goals forward.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 py-8 ">
            <img src={contact2} alt="Illustration" className="w-full h-auto lg:h-full " />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative top-96 mt-auto">
        <VibeConnectFooter />
      </div>
    </div>
  );
};

export default AboutUs;
