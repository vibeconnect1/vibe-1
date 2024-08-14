import React, { useState } from "react";
import Collapsible from "react-collapsible";
import CustomTrigger from "../../containers/CustomTrigger";

const EmployeeFacilityBooking = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isTermOpen, setIsTermOpen] = useState(false);

  const generateTimeSlots = () => {
    const startTime = "10:00"; // Start time
    const endTime = "17:00"; // End time
    const interval = 30; // Interval in minutes

    const slots = [];
    let currentTime = startTime;

    while (currentTime <= endTime) {
      slots.push(currentTime);
      const [hours, minutes] = currentTime.split(":").map(Number);
      const newTime = new Date();
      newTime.setHours(hours);
      newTime.setMinutes(minutes + interval);
      currentTime = `${newTime.getHours()}:${
        newTime.getMinutes() < 10 ? "0" : ""
      }${newTime.getMinutes()}`;
    }

    return slots;
  };

  // Example time slots (9:00 AM to 5:00 PM with 30-minute interval)
  const timeSlots = generateTimeSlots();
  return (
    <section className="w-screen">
      <div className="flex flex-col mb-10">
        <div className="flex justify-center bg-black m-5  p-2 rounded-md">
          <h2 className="text-xl font-semibold text-center text-white ">
            Book Facility
          </h2>
        </div>
        <div className="border border-gray-400 rounded-md mx-20 p-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-bold">Select Facility :</p>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Choose Facility</option>
                <option value="user1">Facility 1</option>
                <option value="User2">Facility 2</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-bold">
                Select Date :
              </label>
              <input
                type="date"
                name=""
                id=""
                className="border p-[2px] px-4 border-gray-500 rounded-md"
              />
            </div>
          </div>

          <div className="my-5">
            <h2 className="border-b text-xl border-black font-semibold">
              Select Slot
            </h2>
            <ul className="grid grid-cols-4 items-center">
              {timeSlots.map((slot, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedSlot(slot)}
                  style={{ cursor: "pointer" }}
                >
                  {slot}
                </li>
              ))}
            </ul>
            <p>{selectedSlot}</p>
          </div>
          <div>
            <h2 className="border-b text-xl border-black font-semibold">
              Payment Mode
            </h2>
            <div>
              "based on payment mode defined in setup will get that in api"
            </div>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="" className="font-semibold">
              Comment :
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              className="border p-1 px-4 border-gray-500 rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <button className="p-2 px-4 bg-black text-white hover:bg-white hover:text-black rounded-md border-2 border-black font-medium transition-all duration-300">
              Submit
            </button>
          </div>
          <Collapsible
            readOnly
            trigger={
              <CustomTrigger isOpen={isOpen}>
                Cancellation Policy:
              </CustomTrigger>
            }
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            className="bg-gray-300 my-4 p-2 rounded-md font-bold "
          >
            <div className="grid grid-cols-2 bg-gray-300 p-2 rounded-md gap-5 pb-4">
              <li className="font-medium"> Cancellations made between 48 and 168 hours (2 to 7 days) before the booking time will incur a 50% cancellation fee.</li>
              <li className="font-medium"> Cancellations made between 48 and 168 hours (2 to 7 days) before the booking time will incur a 50% cancellation fee.</li>
            </div>
          </Collapsible>
          <Collapsible
            readOnly
            trigger={
              <CustomTrigger isOpen={isTermOpen}>
                Terms & Conditions:
              </CustomTrigger>
            }
            onOpen={() => setIsTermOpen(true)}
            onClose={() => setIsTermOpen(false)}
            className="bg-gray-300 my-4 p-2 rounded-md font-bold "
          >
            <div className="grid grid-cols-2 bg-gray-300 p-2 rounded-md gap-5 pb-4">
              <p className="font-medium"> will get terms from api</p>
            </div>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default EmployeeFacilityBooking;
