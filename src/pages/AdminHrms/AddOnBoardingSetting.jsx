import React, { useState } from 'react';
import WorkflowDetailsList from './WorkFlowDetailsList';
import { GrHelpBook } from "react-icons/gr";


const AddOnboardingSetting = () => {
  const [isEditing, setIsEditing] = useState(false);

  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  const [canAccessBeforeJoining, setCanAccessBeforeJoining] = useState(false);
  const [onboardingTabDisplayDays, setOnboardingTabDisplayDays] = useState(90);
  const [selfOnboarding, setSelfOnboarding] = useState(false);
  const [onboardingChecklists, setOnboardingChecklists] = useState(false);
  const [resources, setResources] = useState(false);
  const [firstDayInfo, setFirstDayInfo] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState(false);
  const [letterGeneration, setLetterGeneration] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      canAccessBeforeJoining,
      onboardingTabDisplayDays,
      selfOnboarding,
      onboardingChecklists,
      resources,
      firstDayInfo,
      welcomeMessage,
      letterGeneration,
    });
  };

  return (
   
    <div className='flex  ml-20'>
        <WorkflowDetailsList/>

    <div className="mt-5 w-2/3 p-6 bg-white rounded-lg shadow-md">
      {/* <h2 className="text-2xl font-bold mb-6">General Settings</h2> */}
      <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">General Settings</h1>
          <button 
        onClick={() => setIsEditing(!isEditing)} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button></div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Until Approved, can employee access Employee Portal before the joining date?
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="accessYes"
              name="canAccessBeforeJoining"
              value="Yes"
              checked={canAccessBeforeJoining === true}
              onChange={() => setCanAccessBeforeJoining(true)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="accessYes" className="mr-4">Yes</label>
            <input
              type="radio"
              id="accessNo"
              name="canAccessBeforeJoining"
              value="No"
              checked={canAccessBeforeJoining === false}
              onChange={() => setCanAccessBeforeJoining(false)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="accessNo">No</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="onboardingTabDisplayDays">
            For how long would you like to display the onboarding tab for the employee after the date of joining upon successful onboarding completion (upto 180 days)
          </label>
          <input
            id="onboardingTabDisplayDays"
            type="number"
            value={onboardingTabDisplayDays}
            onChange={(e) => setOnboardingTabDisplayDays(e.target.value)}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md ${!isEditing ? 'bg-gray-200' : ''}`} 
            readOnly={!isEditing}>
           
          </input>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Do you want to activate Self-Onboarding?
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="selfOnboardingYes"
              name="selfOnboarding"
              value="Yes"
              checked={selfOnboarding === true}
              onChange={() => setSelfOnboarding(true)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="selfOnboardingYes" className="mr-4">Yes</label>
            <input
              type="radio"
              id="selfOnboardingNo"
              name="selfOnboarding"
              value="No"
              checked={selfOnboarding === false}
              onChange={() => setSelfOnboarding(false)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="selfOnboardingNo">No</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Activate Onboarding Checklists?
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="onboardingChecklistsYes"
              name="onboardingChecklists"
              value="Yes"
              checked={onboardingChecklists === true}
              onChange={() => setOnboardingChecklists(true)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="onboardingChecklistsYes" className="mr-4">Yes</label>
            <input
              type="radio"
              id="onboardingChecklistsNo"
              name="onboardingChecklists"
              value="No"
              checked={onboardingChecklists === false}
              onChange={() => setOnboardingChecklists(false)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="onboardingChecklistsNo">No</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Activate Resources?
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="resourcesYes"
              name="resources"
              value="Yes"
              checked={resources === true}
              onChange={() => setResources(true)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="resourcesYes" className="mr-4">Yes</label>
            <input
              type="radio"
              id="resourcesNo"
              name="resources"
              value="No"
              checked={resources === false}
              onChange={() => setResources(false)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="resourcesNo">No</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Activate First Day Information
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="firstDayInfoYes"
              name="firstDayInfo"
              value="Yes"
              checked={firstDayInfo === true}
              onChange={() => setFirstDayInfo(true)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="firstDayInfoYes" className="mr-4">Yes</label>
            <input
              type="radio"
              id="firstDayInfoNo"
              name="firstDayInfo"
              value="No"
              checked={firstDayInfo === false}
              onChange={() => setFirstDayInfo(false)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="firstDayInfoNo">No</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Activate Welcome Message
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="welcomeMessageYes"
              name="welcomeMessage"
              value="Yes"
              checked={welcomeMessage === true}
              onChange={() => setWelcomeMessage(true)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="welcomeMessageYes" className="mr-4">Yes</label>
            <input
              type="radio"
              id="welcomeMessageNo"
              name="welcomeMessage"
              value="No"
              checked={welcomeMessage === false}
              onChange={() => setWelcomeMessage(false)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="welcomeMessageNo">No</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Do you want to activate letter generation at time of onboarding
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="letterGenerationYes"
              name="letterGeneration"
              value="Yes"
              checked={letterGeneration === true}
              onChange={() => setLetterGeneration(true)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="letterGenerationYes" className="mr-4">Yes</label>
            <input
              type="radio"
              id="letterGenerationNo"
              name="letterGeneration"
              value="No"
              checked={letterGeneration === false}
              onChange={() => setLetterGeneration(false)}
              className="mr-2"  disabled={!isEditing}
            />
            <label htmlFor="letterGenerationNo">No</label>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
    <div className='my-4 mx-2 w-fit'>
    <div className="flex flex-col mt-4 mr-2 shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
        <GrHelpBook size={20} />
          <h2>Help Center</h2></div>
    <div className=' '>
              {/* <p className="font-medium">Help Center</p> */}
              <ul style={listItemStyle} className="flex flex-col gap-2">
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    Onboarding settings allow you to configure your new employee self-onboarding process, customize the welcome email and allocate onboarding tasks to respective stakeholders. For e.g., allocating tasks to new joinee like submission of documents to the HR, etc, allocating tasks to stakeholders (IT/HR/Admin) like issuing laptop, ID cards, employee induction, etc.           </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    You can edit the tasks and categories as and when needed. You can delete tasks and categories only if not assigned.             </li>
                  </ul>
                </li>
                {/* <li>
                  <ul style={listItemStyle}>
                    <li>
You can add and manage third party users and invite them to join login to the Vibe Connect software. For e.g., External auditor, external consultants, etc.                    </li>
                  </ul>
                </li> */}

                <li>
                  <p>
                    <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a>
                    for detailed information.                </p>
                </li>
              </ul>
            </div></div></div>
     </div> 
  );
};

export default AddOnboardingSetting;