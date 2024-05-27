import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import MyDateTable from "../../../../containers/MyDateTable";

function getDatesInRange(startDate, endDate) {
  const dates = [];
  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}

const Readings = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [columns, setColumns] = useState([]);

  // const handleDateRangeSubmit = () => {
 


  // };


  return (
    <div>
      {/* <div>
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* <button onClick={handleDateRangeSubmit}>Submit</button> */}
      {/* DataTable component with dynamic columns */}
      {/* <MyDateTable startDate={startDate} endDate={endDate} /> */} 
      <iframe src="https://admin.vibecopilot.ai/show_readings?asset_id=4&" width="100%" height="600px"></iframe>

    </div>
  );
};

export default Readings;
