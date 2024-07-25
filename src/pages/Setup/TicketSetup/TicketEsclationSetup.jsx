import React, { useState } from "react";
// import TicketSetupPage from "../SubPages/TicketSetupPage";
import { BiEdit } from "react-icons/bi";
import Select from "react-select";
import { useSelector } from "react-redux";
import Table from "../../../components/table/Table";
import { FaTrash } from "react-icons/fa";

import { RiContactsBook2Line } from "react-icons/ri";
const options = [
  { value: "air-conditioning", label: "Air Conditioning" },
  { value: "cafeteria-pantry", label: "Cafeteria/Pantry" },
  { value: "elevator", label: "Elevator" },
  { value: "housekeeping", label: "Housekeeping" },
  { value: "others", label: "Others" },
  { value: "pantry", label: "Pantry" },
  { value: "repair-maintenance", label: "Repair & Maintenance" },
  { value: "sanitization", label: "Sanitization" },
];
const TicketEscalationSetup = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [catAdded, setAdded] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const openModal1 = () => setShowModal1(true);
  const closeModal1 = () => setShowModal1(false);
  const openModal3 = () => setShowModal3(true);
  const closeModal3 = () => setShowModal3(false);
  const [page, setPage] = useState("Response");
  const themeColor = useSelector((state) => state.theme.color);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };
  const columns = [
    {
      name: "Category Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Levels",
      selector: (row) => row.Levels,
      sortable: true,
    },
    {
      name: "Escalation To",
      selector: (row) => row.to,
      sortable: true,
    },
  ];
  const columns1 = [
    {
      name: "Category Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Levels",
      selector: (row) => row.Levels,
      sortable: true,
    },
    {
      name: "Escalation To",
      selector: (row) => row.to,
      sortable: true,
    },
    {
      name: "P1",
      selector: (row) => row.P1,
      sortable: true,
    },
    {
      name: "P2",
      selector: (row) => row.P2,
      sortable: true,
    },
    {
      name: "P3",
      selector: (row) => row.P3,
      sortable: true,
    },
    {
      name: "P4",
      selector: (row) => row.P4,
      sortable: true,
    },
    {
      name: "P5",
      selector: (row) => row.P5,
      sortable: true,
    },
  ];
  const data1 = [
    {
      type: "plumbing",
      Levels: "E1",
      to: "Deepak Gupta",
      P1: "0 day, 0 hour, 2 minute",
      P2: "0 day, 0 hour, 2 minute",
      P3: "0 day, 0 hour, 2 minute",
      P4: "0 day, 0 hour, 2 minute",
      P5: "0 day, 0 hour, 2 minute",
    },
    {
      type: "plumbing",
      Levels: "E2",
      to: "Deepak Gupta",
      P1: "0 day, 0 hour, 2 minute",
      P2: "0 day, 0 hour, 2 minute",
      P3: "0 day, 0 hour, 2 minute",
      P4: "0 day, 0 hour, 2 minute",
      P5: "0 day, 0 hour, 2 minute",
    },
    {
      type: "plumbing",
      Levels: "E3",
      to: "Deepak Gupta",
      P1: "0 day, 0 hour, 2 minute",
      P2: "0 day, 0 hour, 2 minute",
      P3: "0 day, 0 hour, 2 minute",
      P4: "0 day, 0 hour, 2 minute",
      P5: "0 day, 0 hour, 2 minute",
    },
    {
      type: "plumbing",
      Levels: "E4",
      to: "Deepak Gupta",
      P1: "0 day, 0 hour, 2 minute",
      P2: "0 day, 0 hour, 2 minute",
      P3: "0 day, 0 hour, 2 minute",
      P4: "0 day, 0 hour, 2 minute",
      P5: "0 day, 0 hour, 2 minute",
    },
    {
      type: "plumbing",
      Levels: "E5",
      to: "Deepak Gupta",
      P1: "0 day, 0 hour, 2 minute",
      P2: "0 day, 0 hour, 2 minute",
      P3: "0 day, 0 hour, 2 minute",
      P4: "0 day, 0 hour, 2 minute",
      P5: "0 day, 0 hour, 2 minute",
    },
  ];
  const data = [
    {
      type: "plumbing",
      Levels: "E1",
      to: "Deepak Gupta",
    },
    {
      type: "plumbing",
      Levels: "E2",
      to: "Deepak Gupta",
    },
    {
      type: "plumbing",
      Levels: "E3",
      to: "Deepak Gupta",
    },
    {
      type: "plumbing",
      Levels: "E4",
      to: "Deepak Gupta",
    },
    {
      type: "plumbing",
      Levels: "E5",
      to: "Deepak Gupta",
    },
  ];
  return (
    <div className=" w-full my-2 flex  overflow-hidden flex-col">
      <div className="flex w-full">
        <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full">
          <h2
            className={`p-1 ${
              page === "Response" &&
              `bg-white font-medium text-blue-500 shadow-custom-all-sides`
            } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
            onClick={() => setPage("Response")}
          >
            Response Escalation
          </h2>
          <h2
            className={`p-1 ${
              page === "Resolution" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("Resolution")}
          >
            Resolution Escalation
          </h2>
          {/* <h2
          className={`p-1 ${
            page === "Cost Approval" &&
            "bg-white font-medium text-blue-500 shadow-custom-all-sides"
          } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
          onClick={() => setPage("Cost Approval")}
        >
          Cost Approval
        </h2> */}
        </div>
      </div>
      <div>
        {page === "Response" && (
          <div className="ml-2 mt-4">
            <div className="flex  ">
              <div>
                <Select
                  id="categories"
                  isMulti
                  value={selectedOptions}
                  onChange={handleChange}
                  options={options}
                  className="basic-multi-select w-64"
                  classNamePrefix="select"
                />
              </div>

              {/* <select name="" id=""  className="border p-2 rounded-md border-black w-60 absolute right-0 "></select> */}

              <div className="   w-2/3 ml-10 mb-5">
                <table class="w-2/3 border-collapse">
                  <thead>
                    <tr>
                      <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                        Levels
                      </th>
                      <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                        Escalation To
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        E1
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        <select
                          name=""
                          id=""
                          className="border p-2 rounded-md border-black w-full"
                        >
                          <option value="">Rohit</option>{" "}
                          <option value="">Ramesh</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        E2
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        <select
                          name=""
                          id=""
                          className="border p-2 rounded-md border-black w-full"
                        >
                          <option value="">Rohit</option>{" "}
                          <option value="">Ramesh</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        E3
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        <select
                          name=""
                          id=""
                          className="border p-2 rounded-md border-black w-full"
                        >
                          <option value="">Rohit</option>{" "}
                          <option value="">Ramesh</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        E4
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        <select
                          name=""
                          id=""
                          className="border p-2 rounded-md border-black w-full"
                        >
                          <option value="">Rohit</option>{" "}
                          <option value="">Ramesh</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        E5
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        <select
                          name=""
                          id=""
                          className="border p-2 rounded-md border-black w-full"
                        >
                          <option value="">Rohit</option>{" "}
                          <option value="">Ramesh</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                &nbsp;
                <div className="flex justify-center">
                  <button
                    className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
                    style={{ background: themeColor }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-3 ml-10">
              <div className="text-center mt-1">
                <label
                  htmlFor=""
                  className="font-semibold"
                  style={{ fontSize: "20px" }}
                >
                  Filter
                </label>
              </div>

              <select
                name=""
                id=""
                className="border p-2 rounded-md border-black w-64"
              >
                <option value="">Housekeeping</option>
                <option value="">Technical</option>
              </select>
              <button
                className="border-2 font-semibold hover:bg-green-500 hover:text-white transition-all border-green-500 p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
                style={{ background: themeColor }}
              >
                Apply
              </button>
              <button
                className="border-2 font-semibold hover:bg-blue-500 hover:text-white transition-all border-blue-500 p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
                style={{ background: themeColor }}
              >
                Reset
              </button>
            </div>
            <div className="ml-10 mt-3 mb-8 mr-12">
              <p className="font-semibold">Rule 1</p>
              <div className="flex gap-2 justify-end  mb-1">
                <button onClick={openModal}>
                  <BiEdit />
                </button>
                <FaTrash />
                <button onClick={openModal1}>
                  <RiContactsBook2Line />
                </button>
                {/* <MdHelp/> */}
              </div>

              <Table
                responsive
                //   selectableRows
                columns={columns}
                data={data}
                isPagination={true}
              />
            </div>
          </div>
        )}
        {showModal1 && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded-lg w-96">
              {/* <h1>Clone Data</h1> */}
              <h2 className="text-xl text-center font-semibold mb-4">
                Clone Data
              </h2>
              <div className="grid grid-cols-1">
                <div className="grid gap-2 w-full">
                  <label htmlFor="">Regions</label>
                  <select name="" id="" className="border p-2 ">
                    <option value="">Pune</option>
                    <option value="">kolkata</option>
                  </select>
                </div>
                <div className="grid gap-2 mt-2 w-full">
                  <label htmlFor="">Zones</label>
                  <select name="" id="" className="border p-2 ">
                    <option value="">west zone</option>
                    <option value="">East</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-2">
                <button
                  className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
                  style={{ background: themeColor }}
                >
                  Clone
                </button>
                <button
                  onClick={closeModal1}
                  className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
                  style={{ background: themeColor }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded-lg w-2/3">
              <div className="flex  flex-col gap-2">
                <div>
                  <h1 className="font-semibold mb-2 text-center">Edit</h1>
                  <Select
                    id="categories"
                    isMulti
                    value={selectedOptions}
                    onChange={handleChange}
                    options={options}
                    className="basic-multi-select w-64"
                    classNamePrefix="select"
                  />
                </div>

                {/* <select name="" id=""  className="border p-2 rounded-md border-black w-60 absolute right-0 "></select> */}

                <div className="   w-full  mb-2">
                  <table class="w-full border-collapse">
                    <thead>
                      <tr>
                        <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                          Levels
                        </th>
                        <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                          Escalation To
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border border-gray-300 px-4 py-2 text-center">
                          E1
                        </td>
                        <td class="border border-gray-300 px-4 py-2 text-center">
                          <select
                            name=""
                            id=""
                            className="border p-2 rounded-md border-black w-full"
                          >
                            <option value="">Rohit</option>{" "}
                            <option value="">Ramesh</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td class="border border-gray-300 px-4 py-2 text-center">
                          E2
                        </td>
                        <td class="border border-gray-300 px-4 py-2 text-center">
                          <select
                            name=""
                            id=""
                            className="border p-2 rounded-md border-black w-full"
                          >
                            <option value="">Rohit</option>{" "}
                            <option value="">Ramesh</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td class="border border-gray-300 px-4 py-2 text-center">
                          E3
                        </td>
                        <td class="border border-gray-300 px-4 py-2 text-center">
                          <select
                            name=""
                            id=""
                            className="border p-2 rounded-md border-black w-full"
                          >
                            <option value="">Rohit</option>{" "}
                            <option value="">Ramesh</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td class="border border-gray-300 px-4 py-2 text-center">
                          E4
                        </td>
                        <td class="border border-gray-300 px-4 py-2 text-center">
                          <select
                            name=""
                            id=""
                            className="border p-2 rounded-md border-black w-full"
                          >
                            <option value="">Rohit</option>{" "}
                            <option value="">Ramesh</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td class="border border-gray-300 px-4 py-2 text-center">
                          E5
                        </td>
                        <td class="border border-gray-300 px-4 py-2 text-center">
                          <select
                            name=""
                            id=""
                            className="border p-2 rounded-md border-black w-full"
                          >
                            <option value="">Rohit</option>{" "}
                            <option value="">Ramesh</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  &nbsp;
                  <div className="flex gap-2 justify-center">
                    <button
                      className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
                      style={{ background: themeColor, height: "1cm" }}
                    >
                      Update
                    </button>
                    <button
                      onClick={closeModal}
                      className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
                      style={{ background: themeColor, height: "1cm" }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {page === "Resolution" && (
          <div className="ml-2 mt-2">
            <div className=" flex flex-col gap-5 mt-5 ml-5">
              <Select
                id="categories"
                isMulti
                value={selectedOptions}
                onChange={handleChange}
                options={options}
                className="basic-multi-select w-64"
                classNamePrefix="select"
              />

              <div className=" w-full mb-5 mr-5">
                <table class="border-collapse">
                  <thead>
                    <tr>
                      <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                        Levels
                      </th>
                      <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                        Escalation To
                      </th>
                      <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                        P1
                      </th>
                      <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                        P2
                      </th>
                      <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                        P3
                      </th>
                      <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                        P4
                      </th>
                      <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                        P5
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2">E1</td>
                      <td class="border border-gray-300 px-4 py-2">
                        <select
                          name=""
                          id=""
                          className="border p-2 rounded-md border-black w-48"
                        >
                          <option value="">Mittu</option>
                          <option value="">Panda</option>
                        </select>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2">E2</td>
                      <td class="border border-gray-300 px-4 py-2">
                        <select
                          name=""
                          id=""
                          className="border p-2 rounded-md border-black w-48"
                        >
                          <option value="">Mittu</option>
                          <option value="">Panda</option>
                        </select>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>

                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2">E3</td>
                      <td class="border border-gray-300 px-4 py-2">
                        <select
                          name=""
                          id=""
                          className="border p-2 rounded-md border-black w-48"
                        >
                          <option value="">Mittu</option>
                          <option value="">Panda</option>
                        </select>
                      </td>

                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2">E4</td>
                      <td class="border border-gray-300 px-4 py-2">
                        <select
                          name=""
                          id=""
                          className="border p-2 rounded-md border-black w-48"
                        >
                          <option value="">Mittu</option>
                          <option value="">Panda</option>
                        </select>
                      </td>

                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2">E5</td>
                      <td class="border border-gray-300 px-4 py-2">
                        <select
                          name=""
                          id=""
                          className="border p-2 rounded-md border-black w-48"
                        >
                          {" "}
                          <option value="">Mittu</option>
                          <option value="">Panda</option>
                        </select>
                      </td>

                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-4 py-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Days"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                            placeholder="Hrs"
                          />
                          <input
                            type="number"
                            class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1"
                            placeholder="Min"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                &nbsp;
                <div className="flex justify-center">
                  <button
                    className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
                    style={{ background: themeColor }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="flex gap-7 ml-10">
         <label htmlFor="" className="font-semibold">Filter</label>
         <select name="" id="" className="border p-2 rounded-md border-black w-48"></select>
         <button
className="border-2 font-semibold hover:bg-green-500 hover:text-white transition-all border-green-500 p-2 rounded-md text-green-500 cursor-pointer text-center flex items-center gap-2 justify-center"
style={{ height: "1cm" }}
     >
       Apply
     </button>
     <button
className="border-2 font-semibold hover:bg-blue-500 hover:text-white transition-all border-blue-500 p-2 rounded-md text-blue-500 cursor-pointer text-center flex items-center gap-2 justify-center"
style={{ height: "1cm" }}
     >
       Reset
     </button>
     </div> */}
            {showModal3 && (
              <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-5 rounded-lg w-2/4">
                  <h2 className="text-xl text-center font-semibold mb-4">
                    Edit
                  </h2>
                  <div className=" flex flex-col gap-2">
                    <div>
                      <select
                        name=""
                        id=""
                        className="border p-2 rounded-md border-black w-64 h-10 "
                      >
                        <option value="">Select</option>
                        <option value="">pantry</option>
                        <option value="">Housekeeping</option>
                        <option value="">others</option>
                      </select>
                    </div>
                    <div>
                      <table class="border-collapse">
                        <thead>
                          <tr>
                            <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                              Levels
                            </th>
                            <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                              Escalation To
                            </th>
                            <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                              P1
                            </th>
                            <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                              P2
                            </th>
                            <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                              P3
                            </th>
                            <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                              P4
                            </th>
                            <th class="border border-gray-300 bg-gray-100 px-4 py-2">
                              P5
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="border border-gray-300 px-4 py-2">E1</td>
                            <td class="border border-gray-300 px-4 py-2">
                              <select
                                name=""
                                id=""
                                className="border p-2 rounded-md border-black w-48"
                              >
                                <option value="">Mittu</option>
                                <option value="">Panda</option>
                              </select>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="border border-gray-300 px-4 py-2">E2</td>
                            <td class="border border-gray-300 px-4 py-2">
                              <select
                                name=""
                                id=""
                                className="border p-2 rounded-md border-black w-48"
                              >
                                <option value="">Mittu</option>
                                <option value="">Panda</option>
                              </select>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>

                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="border border-gray-300 px-4 py-2">E3</td>
                            <td class="border border-gray-300 px-4 py-2">
                              <select
                                name=""
                                id=""
                                className="border p-2 rounded-md border-black w-48"
                              >
                                <option value="">Mittu</option>
                                <option value="">Panda</option>
                              </select>
                            </td>

                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="border border-gray-300 px-4 py-2">E4</td>
                            <td class="border border-gray-300 px-4 py-2">
                              <select
                                name=""
                                id=""
                                className="border p-2 rounded-md border-black w-48"
                              >
                                <option value="">Mittu</option>
                                <option value="">Panda</option>
                              </select>
                            </td>

                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="border border-gray-300 px-4 py-2">E5</td>
                            <td class="border border-gray-300 px-4 py-2">
                              <select
                                name=""
                                id=""
                                className="border p-2 rounded-md border-black w-48"
                              >
                                {" "}
                                <option value="">Mittu</option>
                                <option value="">Panda</option>
                              </select>
                            </td>

                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  class="w-12 h-30 border border-gray-300 rounded-md px-2 py-1 "
                                  placeholder="Days"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <button
                        className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
                        style={{ background: themeColor }}
                      >
                        Update
                      </button>
                      <button
                        onClick={closeModal3}
                        className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
                        style={{ background: themeColor }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex gap-3 ml-10">
              <div className="text-center mt-1">
                <label
                  htmlFor=""
                  className="font-semibold"
                  style={{ fontSize: "20px" }}
                >
                  Filter
                </label>
              </div>

              <select
                name=""
                id=""
                className="border p-2 rounded-md border-black w-64"
              >
                <option value="">Housekeeping</option>
                <option value="">Technical</option>
              </select>
              <button
                className="border-2 font-semibold hover:bg-green-500 hover:text-white transition-all border-green-500 p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
                style={{ background: themeColor }}
              >
                Apply
              </button>
              <button
                className="border-2 font-semibold hover:bg-blue-500 hover:text-white transition-all border-blue-500 p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
                style={{ background: themeColor }}
              >
                Reset
              </button>
            </div>
            <div className="ml-10 mt-3 mb-8 mr-12">
              <p className="font-semibold">Rule 1</p>
              <div className="flex gap-2 justify-end  mb-1">
                <button onClick={openModal3}>
                  <BiEdit />
                </button>
                <FaTrash />
                <button onClick={openModal1}>
                  <RiContactsBook2Line />
                </button>
                {/* <MdHelp/> */}
              </div>

              <Table
                responsive
                //   selectableRows
                columns={columns1}
                data={data1}
                isPagination={true}
              />
            </div>
          </div>
        )}
        {/* {page === "Setup" &&  <TicketSetupPage/>} */}
        {/* {page === "Permit Activity" &&  <PermitActivityTable/>}
      {page === "Permit Sub Activity" &&  <PermitSubActivityTable/>}
      {page === "Permit Hazard Category" &&  <PermitHazardCategoryTable/>}
      {page === "Permit Risk" &&  <PermitRiskTable/>} */}
      </div>
    </div>
  );
};

export default TicketEscalationSetup;
