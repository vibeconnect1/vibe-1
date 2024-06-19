import React from 'react';
import { Link } from 'react-router-dom';

function Polls() {
  return (
    <div className='mt-10'>
      <div className="flex justify-between md:flex-row flex-col mb-4">
        <input
          type="text"
          placeholder="search"
          className="border-2 p-2 w-70 border-gray-300 rounded-lg mb-4 md:mb-0"
        />
        <Link
          to={`/admin/create-polls`}
          className="font-semibold border-2 border-black px-4 py-2 flex gap-2 items-center rounded-md"
        >
          Create Polls
        </Link>
      </div>
      <div className='flex justify-center w-full p-2 mb-14'>
        <div className="max-w-2xl w-full py-10">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">How do you protect your business against cyber-crime?</h2>
            <div className='flex justify-between my-3'>
              <span className='text-gray-500 text-sm'>16/20 responded</span>
              <span className='text-gray-500 text-sm'>Results not visible to participants</span>
            </div>
            <div className="space-y-4 border-t border-b border-gray-200 py-4">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                <span>We have cybersecurity insurance coverage</span>
                <span className="text-blue-600 font-semibold">25%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                <span>Our dedicated staff will protect us</span>
                <span className="text-blue-600 font-semibold">15%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                <span>We give regular training for best practices</span>
                <span className="text-blue-600 font-semibold">10%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                <span>Third-party vendor protection</span>
                <span className="text-blue-600 font-semibold">55%</span>
              </div>
            </div>
            <div className="mt-6 text-gray-500 text-sm">
              <p>263 votes • 2d left</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Polls;