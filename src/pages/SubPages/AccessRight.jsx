import React, { useState } from "react";
// import List from "../../containers/List";
import Table from "../../components/table/Table";

const AccessRight = () => {
  const [tab, setTab] = useState("all");

  const handleAllTab = () => {
    setTab("all");
  };
  const handleInvTab = () => {
    setTab("inv");
  };
  const handlesetupTab = () => {
    setTab("setup");
  };
  const handlesQuickgateTab = () => {
    setTab("quick");
  };
  const columns = [
   
    {
      name: "",
      selector: (row) => row.empty,
      sortable: true,
    },
    {
      name: "All",
      selector: (row) => row.All,
      sortable: true,
    },
    {
      name: "Add",
      selector: (row) => row.Add,
      sortable: true,
    },
    {
      name: "view",
      selector: (row) => row.view,
      sortable: true,
    },
    {
      name: "Edit",
      selector: (row) => row.Edit,
      sortable: true,
    },
    {
      name: "Disable",
      selector: (row) => row.Disable,
      sortable: true,
    },
  ]
  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "14px",
      },
    },
  };
  const data = [
    {
      id:1,
      empty:"Broadcast",
      All:<input type="checkbox"/>,
      Add:<input type="checkbox"/>,
      view:<input type="checkbox"/>,
      Edit:<input type="checkbox"/>,
      Disable:<input type="checkbox"/>,
    },
    {
      id:2,
      empty:"Tickets",
      All:<input type="checkbox"/>,
      Add:<input type="checkbox"/>,
      view:<input type="checkbox"/>,
      Edit:<input type="checkbox"/>,
      Disable:<input type="checkbox"/>,
    },
    {
      id:3,
      empty:"Documents",
      All:<input type="checkbox"/>,
      Add:<input type="checkbox"/>,
      view:<input type="checkbox"/>,
      Edit:<input type="checkbox"/>,
      Disable:<input type="checkbox"/>,
    },
    {
      id:4,
      empty:"Supplier",
      All:<input type="checkbox"/>,
      Add:<input type="checkbox"/>,
      view:<input type="checkbox"/>,
      Edit:<input type="checkbox"/>,
      Disable:<input type="checkbox"/>,
    },
    {
      id:5,
      empty:"Tasks",
      All:<input type="checkbox"/>,
      Add:<input type="checkbox"/>,
      view:<input type="checkbox"/>,
      Edit:<input type="checkbox"/>,
      Disable:<input type="checkbox"/>,
    }
    ]
    const dataquickgate = [
      {
        id:1,
        empty:"Visitors",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:2,
        empty:"R Vehicles",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:3,
        empty:"G Vehicles",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:4,
        empty:"Staffs",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:5,
        empty:"Goods In Out",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:6,
        empty:"Patrolling",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      }
      ]
    const dataSetup = [
      {
        id:1,
        empty:"Account",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:2,
        empty:"User & Roles",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:3,
        empty:"Meter Types",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:4,
        empty:"Asset Groups",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:5,
        empty:"Ticket",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      }
      ]
    const columnsall = [
   
      {
        name: "",
        selector: (row) => row.empty,
        sortable: true,
      },
      {
        name: "All",
        selector: (row) => row.All,
        sortable: true,
      },
      {
        name: "Add",
        selector: (row) => row.Add,
        sortable: true,
      },
      {
        name: "view",
        selector: (row) => row.view,
        sortable: true,
      },
      {
        name: "Edit",
        selector: (row) => row.Edit,
        sortable: true,
      },
      {
        name: "Disable",
        selector: (row) => row.Disable,
        sortable: true,
      },
    ]
    const customStyleall = {
      headRow: {
        style: {
          backgroundColor: "black",
          color: "white",
          fontSize: "14px",
        },
      },
    };
    const dataall = [
      {
        id:1,
        empty:"Masters",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:2,
        empty:"GRN",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:3,
        empty:"SRNS",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:4,
        empty:"Accounts",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      },
      {
        id:5,
        empty:"Consumption",
        All:<input type="checkbox"/>,
        Add:<input type="checkbox"/>,
        view:<input type="checkbox"/>,
        Edit:<input type="checkbox"/>,
        Disable:<input type="checkbox"/>,
      }
      ]
  return (
    <div>
      <div>
        <ul className="flex justify-around border-b p-2">
          <li
            className={`${
              tab === "all" && "bg-black text-white"
            } p-2 rounded-full px-4 cursor-pointer`}
            onClick={handleAllTab}
          >
            All Function
          </li>
          <li
            className={`${
              tab === "inv" && "bg-black text-white"
            } p-2 rounded-full px-4 cursor-pointer`}
            onClick={handleInvTab}
          >
            Inventory
          </li>
          <li
            className={`${
              tab === "setup" && "bg-black text-white"
            } p-2 rounded-full px-4 cursor-pointer`}
            onClick={handlesetupTab}
          >
            Setup
          </li>
          <li
            className={`${
              tab === "quick" && "bg-black text-white"
            } p-2 rounded-full px-4 cursor-pointer`}
            onClick={handlesQuickgateTab}
          >
            Quickgate
          </li>
        </ul>
        {tab === "all" &&  <Table
          columns={columns}
          data={data}
          customStyles={customStyle}
          fixedHeader
          fixedHeaderScrollHeight="500px"
          pagination
          selectableRowsHighlight
          highlightOnHover
          omitColumn={columns}
        />
      }
        {tab === "inv" && <Table
          columns={columnsall}
          data={dataall}
          customStyles={customStyle}
          />
          }
        {tab === "setup" && <Table
          columns={columnsall}
          data={dataSetup}
          customStyles={customStyle}
          />}
        {tab === "quick" && <Table
          columns={columnsall}
          data={dataquickgate}
          customStyles={customStyle}
          />}
      </div>
    </div>
  );
};

export default AccessRight;
