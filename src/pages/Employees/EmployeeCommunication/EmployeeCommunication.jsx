import React, { useState } from 'react'
import Navbar from '../../../components/Navbar';
import { Link } from 'react-router-dom';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import EmployeeBroadcast from './EmployeeBroadcast';
import EmployeePolls from './EmployeePoll';
import EmployeeForum from './EmployeeForum';
import EmployeeNotification from './EmployeeNotification';
import image from "/profile.png";
import EmployeeGroup from './EmployeeGroup';
import EmployeeEvents from './EmployeeEvents';

const EmployeeCommunication = () => {
  const themeColor = useSelector((state) => state.theme.color);
  const [page, setPage] = useState("empolyeeEvent");
  return (
    <section className='flex'>
      <Navbar/>
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex justify-center my-2">
          <div className="sm:flex grid grid-cols-2 sm:flex-row gap-5 font-medium p-2 sm:rounded-full rounded-md opacity-90 bg-gray-200 ">
            <h2
              className={`p-1 ${
                page === "empolyeeEvent" && "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
              onClick={() => setPage("empolyeeEvent")}
            >
              Events
            </h2>
            <h2
              className={`p-1 ${
                page === "empolyeeBroadcast" && "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
              onClick={() => setPage("empolyeeBroadcast")}
            >
              Broadcast
            </h2>
            <h2
              className={`p-1 ${
                page === "empolyeePolls" && "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
              onClick={() => setPage("empolyeePolls")}
            >
              Polls
            </h2>
            <h2
              className={`p-1 ${
                page === "employeeForum" && "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
              onClick={() => setPage("employeeForum")}
            >
              Forum
            </h2>
            <h2
              className={`p-1 ${
                page ==="employeeGroup" && "bg-white text-blue-500 shadow-custom-all-sides"
              } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
              onClick={() => setPage("employeeGroup")}
            >
              Group
            </h2>
          </div>
          <Link to={`/employee/employee-communication-chatbot`}>
          <div  className="fixed bottom-10 right-5 ">
            <BsFillChatRightTextFill size={36} color={themeColor}/>
          </div>
        </Link>
        
        </div>
        {page === "empolyeeEvent" && (
          <div>
           <EmployeeEvents/>
          </div>
        )}
        {page === "empolyeeBroadcast" && (
          <div>
           <EmployeeBroadcast/>
          </div>
        )}
        {page === "empolyeePolls" && (
          <div>
           <EmployeePolls/>
          </div>
        )}
        {page === "employeeForum" && (
          <div>
           <EmployeeForum/>
          </div>
        )}
        {page === "employeeGroup" && (
          <div>
           <EmployeeGroup/>
          </div>
        )}
      </div>
    </section>
  )
}

export default EmployeeCommunication