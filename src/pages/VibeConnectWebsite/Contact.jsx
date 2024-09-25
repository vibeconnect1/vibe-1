// src/components/ContactForm.jsx
import React from 'react';
import VibeConnectFooter from './VibeConnectFooter';
const ContactForm = () => {
  return (
    <div>
     
      <div className="flex flex-col lg:flex-row justify-center gap-4 bg-gray-100 p-4 lg:p-8">
        <div className="bg-gray-100 p-8 w-full lg:w-2/4 my-10 ">
          <h2 className="text-2xl font-bold mb-6 text-center">Looking for something?</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name *
              </label>
              <input
                id="name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                Company
              </label>
              <input
                id="company"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company-size">
                Your company size
              </label>
              <select
                id="company-size"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Less than 5</option>
                <option value="">5-20 employees</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">
                Question *
              </label>
              <textarea
                id="question"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mt-10 lg:mt-20 w-full lg:w-1/4">
          <h3 className="text-lg font-bold mb-2">Direct Contacts</h3>
          <ul className="space-y-2">
            <li>Call or Schedule a video conference</li>
            <li>📞 +91 79 4050 0100</li>
            <li>📱 <a href="https://wa.me/916357077743" className="text-blue-600 hover:underline">https://wa.me/916357077743</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Meet an expert</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Become a partner</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Request Custom Developments</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Support Requests</a></li>
          </ul>
        </div>
      </div>
      <VibeConnectFooter/>
    </div>
  );
};

export default ContactForm;
