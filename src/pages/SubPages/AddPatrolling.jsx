import React, { useState } from "react";
import { useSelector } from "react-redux";

const EditPatrolling = () => {
  const themeColor = useSelector((state) => state.theme.color);
  const [interval, setInterval] = useState("hrs");
  const hours = Array.from({ length: 24 }, (_, i) =>
    i < 10 ? `0${i}` : `${i}`
  );
  const [selectedHours, setSelectedHours] = useState([]);

  const toggleHourSelection = (hour) => {
    setSelectedHours((prevSelectedHours) =>
      prevSelectedHours.includes(hour)
        ? prevSelectedHours.filter((h) => h !== hour)
        : [...prevSelectedHours, hour]
    );
  };
  return (
    <div className="flex justify-center items-center my-5 w-full ">
      <div className="border border-gray-300 rounded-lg p-4 w-full mx-4">
        <h2
          style={{ background: themeColor }}
          className="text-center md:text-xl font-medium p-1 bg-black rounded-full text-white"
        >
          Edit Patrolling
        </h2>

        <div className="grid grid-cols-1 gap-2 my-3">
          <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col">
              <label htmlFor="building" className="font-semibold">
                Building :
              </label>
              <select
                name="building"
                placeholder="Enter Building Name"
                className="border p-1 rounded-md border-black"
              >
                <option value="">Select Building</option>
                <option value="">East Building</option>
                <option value="">West Building</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="wing" className="font-semibold">
                Wing :
              </label>
              <select
                name="wing"
                placeholder="Enter Wing"
                className="border p-1 rounded-md border-black"
              >
                <option value="">Select Wing</option>
                <option value="">Wing A</option>
                <option value="">Wing B</option>
              </select>
            </div>
            {/* <div className="grid grid-cols-2 gap-5"> */}
            <div className="flex flex-col">
              <label htmlFor="floor" className="font-medium">
                Floor :
              </label>
              <select
                name="floor"
                className="border p-1 rounded-md border-black"
              >
                <option value="">Select Floor</option>
                <option value="">Floor 1</option>
                <option value="">Floor 2</option>
                <option value="">Floor 3</option>
                <option value="">Floor 4</option>
                <option value="">Floor 5</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="room" className="font-medium">
                Room :
              </label>
              <select
                name="room"
                className="border p-1 rounded-md border-black"
              >
                <option value="">Select Room</option>
                <option value="">Room 101</option>
                <option value="">Room 102</option>
                <option value="">Room 103</option>
                <option value="">Room 104</option>
                <option value="">Room 104</option>
              </select>
            </div>
            {/* </div> */}
          </div>
          <h2 className="font-medium border-b border-black">Frequency</h2>
          <div className="grid grid-cols-4 gap-5">
            <div className="flex flex-col">
              <label htmlFor="startTime" className="font-medium">
                Start Date :
              </label>
              <input
                type="date"
                name="startTime"
                className="border p-1 rounded-md border-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="endTime" className="font-medium">
                End Date :
              </label>
              <input
                type="date"
                name="endTime"
                className="border p-1 rounded-md border-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="startTime" className="font-medium">
                Start Time :
              </label>
              <input
                type="time"
                name="startTime"
                className="border p-1 rounded-md border-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="endTime" className="font-medium">
                End Time :
              </label>
              <input
                type="time"
                name="endTime"
                className="border p-1 rounded-md border-black"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 my-2">
            <p
              onClick={() => setInterval("hrs")}
              className={`font-medium cursor-pointer transition-all duration-300 ${
                interval === "hrs" &&
                "bg-black text-white shadow-custom-all-sides rounded-full p-1 px-2"
              }`}
            >
              Time Interval(hrs)
            </p>
            <p
              onClick={() => setInterval("specific")}
              className={`font-medium cursor-pointer transition-all duration-300 ${
                interval === "specific" &&
                "bg-black text-white shadow-custom-all-sides rounded-full p-1 px-2"
              }`}
            >
              Specific Time
            </p>
          </div>
          {interval === "hrs" && (
            <div>
              <input
                type="text"
                name="endTime"
                className="border p-1 rounded-md border-black my-1"
                placeholder="Enter Interval Hour(s) "
              />
            </div>
          )}
          {interval === "specific" && (
            <div className="grid grid-cols-6 gap-2 bg-gray-100 p-4 rounded">
              {hours.map((hour) => (
                <p
                  key={hour}
                  className={`p-2 rounded cursor-pointer ${
                    selectedHours.includes(hour)
                      ? "bg-gray-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => toggleHourSelection(hour)}
                >
                  {hour}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-5 justify-center items-center mt-4">
          <button
            type="submit"
            // onClick={onC}
            className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-semibold py-1 px-4 rounded transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPatrolling;
