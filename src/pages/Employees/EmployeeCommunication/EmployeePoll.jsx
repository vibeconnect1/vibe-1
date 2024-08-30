import React, { useEffect, useState } from 'react';
import { getPolls, postPollVote } from '../../../api'; // Ensure postPollVote is imported
import { getItemInLocalStorage } from "../../../utils/localStorage";
import EmployeeCommunication from "./EmployeeCommunication";
import Navbar from "../../../components/Navbar";
function EmployeePolls() {
  const [pollsData, setPollsData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({}); // Track selected options per poll
  const userId = getItemInLocalStorage("UserId");

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await getPolls();
        const poll = response.data.sort((a,b)=> {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        console.log("response employee from api", response);
        setPollsData(poll);
      } catch (err) {
        console.error("Failed to fetch polls data:", err);
      }
    };

    fetchPolls(); // Call the API
  }, []);

  const handleOptionSelect = async (pollId, optionId) => {
    // Check if the user has already voted for this poll
    if (selectedOptions[pollId]) {
      alert("You have already voted for this poll.");
      return;
    }
  
    // Update the local state with the selected option
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [pollId]: optionId, // Store the selected option for each poll
    }));
  
    // Submit the vote to the backend
    try {
      const voteData = {
        poll_vote: {
          poll_option_id: optionId, // The ID of the selected option
        },
      };
  
      const vote = await postPollVote(pollId, voteData); // Submit the vote
      console.log("vote resp", vote);
      console.log(`Vote submitted for poll ${pollId} with option ${optionId}`);
    } catch (err) {
      console.error("Failed to submit vote:", err);
      alert("Already voted in this poll")
    }
  };

  return (
    <div className="flex ">
    <Navbar/>
    <div className="p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
     <EmployeeCommunication/>
      <div className="flex justify-between md:flex-row flex-col mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border-2 p-2 w-96 border-black mx-2 rounded-md "
        />
      </div>
      <div className='md:grid grid-cols-2'>
        {pollsData.length > 0 ? (
          pollsData.map((poll) => {
            const totalVotes = poll.poll_options.reduce((sum, option) => sum + option.votes, 0);

            const startDate = new Date(poll.start_date);
            const endDate = new Date(poll.end_date);
            const currentDate = new Date();
            const timeDiff = endDate - currentDate; // Time difference in milliseconds
            const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days
            
            return (
              <div key={poll.id} className='flex justify-start w-full p-2 '>
                <div className="max-w-2xl w-full py-2 ">
                  <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-200 h-full">
                    <h2 className="text-xl font-semibold mb-4">{poll.title}</h2>
                    <div className='flex justify-between my-3'>
                <span className='text-gray-500 text-sm'>1/20 responded</span>
                <span className='text-gray-500 text-sm'>{poll.visibility}</span>
              </div>
                    <div className="space-y-4 border-t border-b border-gray-200 py-4">
                      {poll.poll_options.map((option) => (
                        <div
                          key={option.id}
                          className={`flex items-center p-2 rounded-md cursor-pointer ${selectedOptions[poll.id] === option.id ? 'bg-blue-100' : 'bg-gray-50'}`}
                          onClick={() => handleOptionSelect(poll.id, option.id)}
                        >
                          <input
                            type="radio"
                            name={`pollOption-${poll.id}`}
                            checked={selectedOptions[poll.id] === option.id}
                            onChange={() => handleOptionSelect(poll.id, option.id)}
                            className="mr-2 hidden"
                          />
                          <span>{option.content}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-gray-500 text-sm">
                      <p>{totalVotes} votes • {daysLeft} days left</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No polls available</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default EmployeePolls;
