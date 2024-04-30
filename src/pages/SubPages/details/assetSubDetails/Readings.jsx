import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

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

  const handleDateRangeSubmit = () => {
    const dates = getDatesInRange(new Date(startDate), new Date(endDate));

    const columnTitles = dates.map((date) => ({
      name: date.toDateString(),
      selector: date.toISOString(),
    }));

    setColumns(columnTitles);
  };

  const data = [
    {
      id: 1,
      action: (
        <div className="flex items-center gap-7">
          <Link to={`/assets/asset-details`}>
            <BsEye />
          </Link>
          <Link to={`/edit`}>
            <BiEdit />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div>
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

      <button onClick={handleDateRangeSubmit}>Submit</button>
      {/* DataTable component with dynamic columns */}
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Readings;
