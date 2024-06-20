import React, { useState } from 'react';

function EmployeePolls() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionMaths, setSelectedOptionMaths] = useState(null);
  console.log(selectedOption)

  const pollOptions = [
    'We have cybersecurity insurance coverage',
    'Our dedicated staff will protect us',
    'We give regular training for best practices',
    'Third-party vendor protection'
  ];
  const pollOptionMaths = [
    '23',
    '16',
    '17',
    '30'
  ];

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    // Update poll results accordingly, this is just a simulation
    // Here you might want to send the selected option to a backend server
  };
  const handleOptionSelectMath = (index) => {
    setSelectedOptionMaths(index);
    // Update poll results accordingly, this is just a simulation
    // Here you might want to send the selected option to a backend server
  };

  return (
    <div className='mt-10'>
      <div className="flex justify-between md:flex-row flex-col mb-4">
        <input
          type="text"
          placeholder="search"
          className="border-2 p-2 w-70 border-gray-300 rounded-lg  md:mb-0"
        />
        {/* <Link
          to="/admin/create-polls"
          className="font-semibold border-2 border-black px-4 py-2 flex gap-2 items-center rounded-md"
        >
          Create Polls
        </Link> */}
      </div>
      <div className='md:grid grid-cols-2'>
        <div className='flex justify-start w-full p-2 '>
          <div className="max-w-2xl w-full py-2">
            <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-200">
              <h2 className="text-xl font-semibold mb-4">How do you protect your business against cyber-crime?</h2>
              <div className="space-y-4 border-t border-b border-gray-200 py-4">
                {pollOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-2 rounded-md cursor-pointer ${selectedOption === index ? 'bg-blue-100' : 'bg-gray-50'}`}
                    onClick={() => handleOptionSelect(index)}
                  >
                    <input
                      type="radio"
                      name="pollOption"
                      checked={selectedOption === index}
                      onChange={() => handleOptionSelect(index)}
                      className="mr-2 hidden"
                    />
                    <span>{option}</span>
                  </div>
                ))}
                </div>
                <div className="mt-6 text-gray-500 text-sm">
                  <p>263 votes • 2d left</p>
                </div>
              </div>
            </div>
        </div>
        <div className='flex justify-start w-full p-2 mb-14'>
          <div className="max-w-2xl w-full py-2">
            <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-200">
              <h2 className="text-xl font-semibold mb-4"> 4+7+8-2</h2>
              <div className="space-y-4 border-t border-b border-gray-200 py-4">
                {pollOptionMaths.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-2 rounded-md cursor-pointer ${selectedOptionMaths === index ? 'bg-blue-100' : 'bg-gray-50'}`}
                    onClick={() => handleOptionSelectMath(index)}
                  >
                    <input
                      type="radio"
                      name="pollOption"
                      checked={selectedOptionMaths === index}
                      onChange={() => handleOptionSelectMath(index)}
                      className="mr-2 hidden"
                    />
                    <span>{option}</span>
                  </div>
                ))}
                </div>
                <div className="mt-6 text-gray-500 text-sm">
                  <p>263 votes • 2d left</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeePolls;