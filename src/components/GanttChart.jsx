import React, { useState } from "react";

const tasks = [
  { name: "Task 1", start: "2024-06-01", end: "2024-06-05" },
  { name: "Task 2", start: "2024-06-03", end: "2024-06-08" },
  { name: "Task 3", start: "2024-06-07", end: "2024-06-15" },
];

const getDateArray = (start, end) => {
  let arr = [];
  let dt = new Date(start);
  while (dt <= new Date(end)) {
    arr.push(new Date(dt).toISOString().split("T")[0]);
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
};

const GanttChart = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  const dates = getDateArray(startDate, endDate);
  return (
    <div className="p-4">
      <input
        type="date"
        className="border- border-black"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        className="border- border-black"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Task</th>
              {dates.map((date) => (
                <th key={date} className="px-4 py-2 border">
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
      </div>
    </div>
  );
};

export default GanttChart;
