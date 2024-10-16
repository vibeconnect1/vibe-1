// src/components/ContactForm.jsx
import React from 'react';
import VibeConnectFooter from './VibeConnectFooter';
import VibeConnectNavbar1 from './VibeConnectNavbar1';
import contact from '../../../Website Image/contact-form.png';
import contact2 from '../../../Website Image/contact3.jpeg';

const ContactForm = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <VibeConnectNavbar1 /> */}

      {/* Gradient Background with Shadows and Layout */}
      <div className="flex flex-col lg:flex-row justify-center px-20 py-8  " style={{ backgroundColor: '#e7f3ff' }}>
        
        {/* Form Section */}
        <div className=" p-10 w-full text-white lg:w-2/4 my-8  shadow-2xl transition-all duration-500 ease-in-out transform " style={{ backgroundColor: '#223a7a' }}>
          <h2 className="text-4xl font-serif text-gray-800 mb-4 text-center text-white leading-tight tracking-wider">Contact Us</h2>
          {/* <p className="text-center text-gray-600 mb-6">We’d love to hear from you! Reach out with any questions or ideas.</p> */}

          <form>
            {/* Full Name */}
            <div className="mb-6 relative">
              <label className="block text-gray-700 text-white text-medium font-semibold mb-2" htmlFor="name">
                  Name *
              </label>
              <input
                id="name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=" Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-medium text-white text-white font-semibold mb-2" htmlFor="phone">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder='Phone Number'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              /></div>

            {/* Email Address */}
            <div className="mb-6 relative">
              <label className="block text-gray-700 text-medium text-white font-semibold mb-2" htmlFor="email">
                 Email Address *
              </label>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-gray-700 text-medium text-white font-semibold mb-2" htmlFor="company">
                Company *
              </label>
              <input
                id="company"
                type="text"
                placeholder='company'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-medium text-white font-semibold mb-2" htmlFor="subject">
                Subject *
              </label>
              <select
                id="subject"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option>Use it in my company</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-medium text-white font-semibold mb-2" htmlFor="company-size">
                Your company size
              </label>
              <select
                id="company-size"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Less than 5</option>
                <option value="">5-20 employees</option>
                <option value="">20-50 employees</option>
                <option value="">50-250 employees</option>
                <option value="">more than 250</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-medium text-white font-semibold mb-2" htmlFor="question">
                Question *
              </label>
              <textarea
                id="question"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                required
              ></textarea>
            </div>


            {/* Submit Button */}
            <div className="flex items-center justify-center mt-8">
              <button
                type="submit"
                className="text-white font-semibold py-2 px-4 rounded-md shadow-lg transform  bg-blue-500" 
                style={{ backgroundColor: '#e93842' }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Optional Illustration or Text Side */}
        <div className="hidden lg:block w-full lg:w-2/4 py-8">
          {/* Add illustration or additional description here */}
          <img src={contact2} alt="Illustration" className="w-full h-full  " />
        </div>
      </div>

      <VibeConnectFooter />
    </div>
  );
};

export default ContactForm;
