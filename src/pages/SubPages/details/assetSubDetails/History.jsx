import React from "react";
import DataTable from "react-data-table-component";

const History = () => {
  const column = [
    {
      name: "Date",

      selector: (row) => row.date,

      sortable: true,
    },
    { name: "Type Of Activity", selector: (row) => row.activity, sortable: true },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    { name: "Performed By", selector: (row) => row.performed, sortable: true },
  ];
  const data = [
    {
      id: 2,
      date: "26/04/24",
      activity: "Activity 1",
      description: "Desc A",
     performed: "you"
    },
  ];
  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "12px",
      },
    },
  };

  return (
    <section>
      <div className="m-2">
        <div className="border-2 flex flex-col my-5 p-4 gap-4 rounded-md border-gray-400 ">
          <div className=" grid grid-cols-3 gap-4 font-medium justify-between p-4">
            <p>Equipment Name:</p>
            <p>Supplier:</p>
            <p>Capacity:</p>
            <p>Date of Commisioning:</p>
            <p>Searial Number:</p>
            <p>Location of Asset:</p>
            <p>Manufacturer:</p>
            <p>Date of Purchase:</p>
            <p>Date of installation:</p>
            <p>Model Number:</p>
            <p>Asset Code:</p>
          </div>
        </div>
        <DataTable columns={column} data={data} customStyles={customStyle} />
      </div>
    </section>
  );
};

export default History;
