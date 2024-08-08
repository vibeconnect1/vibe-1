import Navbar from "../../../components/Navbar";
import { useSelector } from "react-redux";
import { MdLowPriority, MdOutlineCurrencyRupee, MdOutlinePrivacyTip } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";
function EmployeeProjectRejectDetails() {
  const themeColor = useSelector((state) => state.theme.color);
  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex flex-col overflow-hidden mb-5">
        <h2
          style={{ background: themeColor }}
          className="text-center text-xl font-bold p-2 bg-black rounded-full text-white md:mx-20 mb-5"
        >
         Project Rejected
        </h2>
        <div className="shadow-custom-all-sides rounded-md py-5 md:mx-20">
          <div className="flex justify-center px-5">
            <p className="text-lg font-semibold text-slate-800">
              Project Summary
            </p>
          </div>
          <div className="border-t border-gray-400 my-2"></div>
          <p className="text-gray-800 font-semibold text-base mx-5 mb-3">
          Remote Work Proposal
              </p>
          <div className="px-5 pb-5">
            <p className="text-base text-gray-500">
            "Request for approval to work remotely either fulltime or part-time along with a plan outlining how productivity will be maintained",
            </p>
          </div>
          <div className="border-b border-thin mt-3 flex justify-between py-3 mx-5">
            <div className="flex gap-2">
              <CiCalendar className="mt-1 text-violet-800" size={20} />
              <p className="text-gray-500 font-semibold text-base">
                Start Date
              </p>
            </div>
            <p className="font-semibold text-sm text-gray-800">22 July 2024</p>
          </div>
          <div className="border-b border-thin flex justify-between py-3 mx-5">
            <div className="flex gap-2">
              <CiCalendar className="mt-1 text-violet-800" size={20} />
              <p className="text-gray-500 font-medium text-base">End Date</p>
            </div>
            <p className="font-semibold text-sm text-gray-800">22 Aug 2024</p>
          </div>
          <div className="border-b border-thin flex justify-between py-3 mx-5">
            <div className="flex gap-2">
              <IoTimeOutline className="mt-1 text-violet-800" size={20} />
              <p className="text-gray-500 font-medium text-base">
                Estimate Time
              </p>
            </div>
            <p className="font-semibold text-sm text-gray-800">30 Days</p>
          </div>
          <div className="border-b border-thin flex justify-between py-3 mx-5">
            <div className="flex gap-2">
              <MdOutlineCurrencyRupee
                className="mt-1 text-violet-800"
                size={20}
              />
              <p className="text-gray-500 font-medium text-base">Budget</p>
            </div>
            <p className="font-semibold text-base text-gray-800">₹ 18,000</p>
          </div>
          <div className="border-b border-thin flex justify-between py-3 mx-5">
            <div className="flex gap-2">
              <MdOutlinePrivacyTip
                className="mt-1 text-violet-800"
                size={20}
              />
              <p className="text-gray-500 font-medium text-base">Privacy</p>
            </div>
            <p className="font-semibold text-base text-gray-800">Public to you Team</p>
          </div>
          <div className="flex justify-between py-3 mx-5">
            <div className="flex gap-2">
              <MdLowPriority
                className="mt-1 text-violet-800"
                size={20}
              />
              <p className="text-gray-500 font-medium text-base">Priority</p>
            </div>
            <p className="font-semibold text-base text-gray-800">Low</p>
          </div>
          <div className="flex justify-between py-3 mx-5">
            <div className="flex gap-2">
              <RiTeamLine
                className="mt-1 text-violet-800"
                size={20}
              />
              <p className="text-gray-500 font-medium text-base">Team</p>
            </div>
            <p className="font-semibold text-base text-gray-800">Karan Gupta, Vinay Singh, Niharika Gupta</p>
          </div>
        </div>
        <div className="shadow-custom-all-sides rounded-md py-5 md:mx-20 my-5">
            <h2 className="text-lg font-semibold mx-5 mb-2">Project Reject</h2>
           <div className="flex gap-5 mx-5">
            <p className="text-gray-600 font-semibold">Insufficient Skill Level:</p>
            <span className="text-gray-600 ">The project was rejected due to the team or individual not meeting the required skill level for successful completion.</span>
           </div>
        </div>
      </div>
    </section>
  );
}
export default EmployeeProjectRejectDetails