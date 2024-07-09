import React, { useState } from "react";
// import TicketCategorySetup from './TicketCategorySetup';
import { useSelector } from "react-redux";
// import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";

// import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
const TicketSubCategory = ({ handleToggleCategoryPage1 }) => {
  //   const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);
  const themeColor = useSelector((state) => state.theme.color);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const openModal1 = () => setIsModalOpen1(true);
  const closeModal1 = () => setIsModalOpen1(false);
  const [isOpen, setIsOpen] = useState({
    building: false,
    wing: false,
    zone: false,
    floor: false,
    room: false,
  });

  const [selectedOptions, setSelectedOptions] = useState({
    building: [],
    wing: [],
    zone: [],
    floor: [],
    room: [],
  });

  const options = {
    building: [
      "HDFC Ergo Bhandup",
      "Test Building 111",
      "Tower 101",
      "Sarova Nirvana",
      "Jeevandeep",
      "Test Twin Tower",
      "Decker Bldg",
      "PMT Wing",
    ],
    wing: [
      "Wing 1 - HDFC Ergo Bhandup",
      "Test Building 1111 - Test Building 111",
      "Wing 2 - HDFC Ergo Bhandup",
    ],
    floor: [
      "Floor 1 - Area 1 - Wing 1 - HDFC Ergo Bhandup",
      "Floor 2 - Area 1 - Wing 1 - HDFC Ergo Bhandup",
    ],
    zone: [
      "Area 1 - Wing 1 - HDFC Ergo Bhandup",
      "Area 1 - Wing 2 - HDFC Ergo Bhandup",
    ],
    room: ["Room 1", "Room 2", "Room 3", "Room 4"],
  };

  const toggleSelect = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleOptionChange = (section, value) => {
    if (selectedOptions[section].includes(value)) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [section]: prevState[section].filter((option) => option !== value),
      }));
    } else {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [section]: [...prevState[section], value],
      }));
    }
  };
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={openModal1}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
    {
      name: "Category Type",
      selector: (row) => row.Category_Type,
      sortable: true,
    },
    {
      name: "Sub Category Type",
      selector: (row) => row.Assignee,
      sortable: true,
    },
    {
      name: "Building",
      selector: (row) => row.Response_Time,
      sortable: true,
    },

    {
      name: "Wing",
      selector: (row) => row.Vendor_Email,
      sortable: true,
    },

    {
      name: "Zone",
      selector: (row) => row.Icon,
      sortable: true,
    },
    {
      name: "Floor",
      selector: (row) => row.Icon,
      sortable: true,
    },
    {
      name: "Room",
      selector: (row) => row.Icon,
      sortable: true,
    },
  ];

  //custom style
  const customStyle = {
    headRow: {
      style: {
        backgroundColor: themeColor,
        color: "white",

        fontSize: "10px",
      },
    },
    headCells: {
      style: {
        textTransform: "upperCase",
      },
    },
  };

  const data = [
    {
      id: 1,
      Category_Type: "b",
      Assignee: "j",
    },
  ];
  

  return (
    <div className="p-8 ">
      {/* <h1 className="text-2xl font-bold mb-4">Dynamic FAQ Form</h1> */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="form-group">
          <label className="block mb-2">Category</label>
          <select type="text" className="border p-2 w-full">
            <option value="">HouseKeeping</option>
          </select>
        </div>
        <div className="form-group">
          <label className="block mb-2">Sub Category</label>
          <input className="border p-2 w-full"></input>
        </div>
      </div>

      <form className="">
        {Object.keys(options).map((section) => (
          <div key={section} className="form-section">
            <div className="flex flex-col">
              <span>
                <input type="checkbox" />
                &nbsp; &nbsp;<label htmlFor="">{section}</label>
              </span>
              <span>
                {/* <div className="mr-2">Select {section}:</div> */}

                <div className="">
                  <input
                    type="text"
                    readOnly
                    value={selectedOptions[section].join(", ")}
                    onClick={() => toggleSelect(section)}
                    className="cursor-pointer mt-2 p-2 border border-gray-300 rounded-md w-full"
                  />
                  &nbsp;
                  {isOpen[section] && (
                    <div className="  z-10  w-full rounded-md shadow-lg bg-white border border-gray-300">
                      {options[section].map((option) => (
                        <label key={option} className="block p-2">
                          <input
                            type="checkbox"
                            value={option}
                            checked={selectedOptions[section].includes(option)}
                            onChange={() => handleOptionChange(section, option)}
                            className="mr-2"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </span>
            </div>
          </div>
        ))}
        <div className="flex justify-center gap-2">

        <button
          style={{ background: themeColor }}
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      <button
        style={{ background: themeColor }}
        onClick={handleToggleCategoryPage1}
        className="  px-4 py-2 bg-blue-500 text-white rounded-md"
        >
        Cancel
      </button>
        </div>
      </form>

      {isModalOpen1 && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal1}
          ></div>
          <div className="bg-white  rounded-lg shadow-lg p-4  z-10 w-2/3">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeModal1}
            >
              <FaTimes size={25} />
            </button>
            <h2 className="font-semibold mb-4">Edit Sub Category</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="">
                <label className=" mb-2">Category</label>
                <select type="text" className="border p-2 w-full" />
              </div>
              <div className="">
                <label className=" mb-2">Sub Category</label>
                <input className="border p-2 w-full"></input>
              </div>

              <form className="">
                {Object.keys(options).map((section) => (
                  <div key={section} className="">
                    <div className="flex flex-col">
                      <span>
                        <div></div>
                        <input type="checkbox" />
                        &nbsp; &nbsp;<label htmlFor="">{section}</label>
                        <br />
                      </span>
                      <span className="flex flex-col">
                        {/* <div className="mr-2">Select {section}:</div> */}
                        <br />
                        <div className="relative">
                          <input
                            type="text"
                            readOnly
                            value={selectedOptions[section].join(", ")}
                            onClick={() => toggleSelect(section)}
                            className="cursor-pointer mt-2 p-2 border border-gray-300 rounded-md w-full"
                          />
                          &nbsp;
                          {isOpen[section] && (
                            <div className="absolute top-full z-10 mt-1 w-full rounded-md shadow-lg bg-white border border-gray-300">
                              {options[section].map((option) => (
                                <label key={option} className="block p-2">
                                  <input
                                    type="checkbox"
                                    value={option}
                                    checked={selectedOptions[section].includes(
                                      option
                                    )}
                                    onChange={() =>
                                      handleOptionChange(section, option)
                                    }
                                    className="mr-2"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                ))}
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div>
        <span className="flex justify-center mb-2 gap-4">
          {/* <Link
              to={"/admin/add-rvehicles"}
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              <PiPlusCircle size={20} />
              Add
            </Link> */}
        </span>
      </div>
      {/* <Table
          responsive
          //   selectableRows
          columns={columns}
          data={data}
          isPagination={true}
        /> */}
    </div>
  );
};

export default TicketSubCategory;
