import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import MyDateTable from "../../../../containers/MyDateTable";
import { useSelector } from "react-redux";

const getDateArray = (start, end) => {
  let arr = [];
  let dt = new Date(start);
  while (dt <= new Date(end)) {
    arr.push(new Date(dt).toISOString().split("T")[0]);
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
};
const tasks = [
  { name: "Consumption 1", start: "2024-06-01", end: "2024-06-05" },
  { name: "Consumption 2", start: "2024-06-03", end: "2024-06-08" },
  { name: "Consumption 3", start: "2024-06-07", end: "2024-06-15" },
];

const Readings = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const themeColor = useSelector((state) => state.theme.color);
  const [dates, setDates] = useState([]);
  // const dates =
  const handleDateRangeSubmit = () => {
    if (startDate && endDate) {
      const newDates = getDateArray(startDate, endDate);
      setDates(newDates);
    }
  };
  const handleReset = () => {
    setDates([]);
  };
const {id} = useParams()
  return (
    <div className="p-4">
      {/* <div className="flex md:flex-row flex-col gap-2 items-center my-2">
        <div>
          <label htmlFor="startDate" className="font-medium">
            From :{" "}
          </label>
          <input
            type="date"
            className="border border-gray-400 px-4 rounded-md"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <span>-</span>
        <div>
          <label htmlFor="endDate" className="font-medium">
            To :{" "}
          </label>
          <input
            type="date"
            className="border border-gray-400 px-4 rounded-md"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button
          className="px-4 border-2 border-black rounded-md"
          onClick={handleDateRangeSubmit}
        >
          Apply
        </button>
        <button
          className="px-4 border-2 border-black rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white ">
          <thead className="">
            <tr style={{ background: themeColor }} className="text-white ">
              <th className="px-4 py-2 border min-w-96">Consumption</th>
              {dates.map((date) => (
                <th key={date} className="px-4 py-2 border min-w-40">
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.name}>
                <td className="px-4 py-2 border">{task.name}</td>
                {dates.map((date) => {
                  const isActive = date >= task.start && date <= task.end;
                  return (
                    <td
                      key={date}
                      className={`px-4 py-2 border ${
                        isActive ? "bg-blue-500" : ""
                      }`}
                    ></td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <iframe src={`https://admin.vibecopilot.ai/show_readings?asset_id=${id}&wv=true&token=efe990d24b0379af8b5ba3d0a986ac802796bc2e0db15552`} width="100%" height="600px"></iframe>
    </div>
  );
};

export default Readings;