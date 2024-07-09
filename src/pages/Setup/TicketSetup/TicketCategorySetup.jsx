import React, { useState } from "react";
import TicketCategoryPage from "./TicketCategoryPage";
import TicketSubCategory from "./TicketSubCategory";
// import TicketSetupPage from "../SubPages/TicketSetupPage";
import { useSelector } from "react-redux";
import Table from "../../../components/table/Table";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import { BiEdit } from "react-icons/bi";
import { FaAddressBook, FaTrash } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';
import FileInputBox from "../../../containers/Inputs/FileInputBox";

const TicketCategorySetup = () => {
    const [page, setPage] = useState("Category");
    const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);

    const [showCategoryPage, setShowCategoryPage] = useState(false);
    const [showSubCategoryPage, setShowSubCategoryPage] = useState(false);
    const themeColor = useSelector((state) => state.theme.color);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    // Function to toggle the visibility of the TicketCategoryPage component
    const handleToggleCategoryPage = () => {
      setShowCategoryPage(prevState => !prevState);
    };
    const handleToggleCategoryPage1 = () => {
      setShowSubCategoryPage(prevState => !prevState);
    };
    const addFaq = () => {
      setFaqs([...faqs, { question: '', answer: '' }]);
    };

    const deleteFaq = (index) => {
      const newFaqs = faqs.filter((_, i) => i !== index);
      setFaqs(newFaqs);
    };

    const handleFaqChange = (index, type, value) => {
      const newFaqs = faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, [type]: value };
        }
        return faq;
      });
      setFaqs(newFaqs);
    };
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
      building: ['HDFC Ergo Bhandup', 'Test Building 111', 'Tower 101', 'Sarova Nirvana', 'Jeevandeep', 'Test Twin Tower', 'Decker Bldg', 'PMT Wing'],
      wing: ['Wing 1 - HDFC Ergo Bhandup', 'Test Building 1111 - Test Building 111', 'Wing 2 - HDFC Ergo Bhandup'],
      floor: ['Floor 1 - Area 1 - Wing 1 - HDFC Ergo Bhandup', 'Floor 2 - Area 1 - Wing 1 - HDFC Ergo Bhandup'],
      zone: ['Area 1 - Wing 1 - HDFC Ergo Bhandup', 'Area 1 - Wing 2 - HDFC Ergo Bhandup'],
      room: ['Room 1', 'Room 2', 'Room 3', 'Room 4'],
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
        name: "Category Type",
        selector: (row) => row.Category_Type,
        sortable: true,
      },
      {
        name: "Assignee",
        selector: (row) => row.Assignee,
        sortable: true,
      },
      {
        name: "Response Time (Min)",
        selector: (row) => row.Response_Time,
        sortable: true,
      },

      {
        name: "Vendor Email",
        selector: (row) => row.Vendor_Email,
        sortable: true,
      },

      {
        name: "Icon",
        selector: (row) => row.Icon,
        sortable: true,
      },
      {
        name: "Action",
        cell: (row) => (
          <div className="flex items-center gap-4">

            <button onClick={openModal}>
              <BiEdit size={15} />
            </button>
            <button >
              <FaTrash size={15} />
            </button>
         
          </div>
        ),
      },


    ];

    //custom style
  

    const data = [
      {
          id:1,
          Response_Time:"15",
          Category_Type:"Housekeeping",
          Assignee:"Rahul Nayak",
          Vendor_Email:"abc@gmail.com",
          Icon:<FaAddressBook size={25}/>,
      }
  ]
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const openModal1 = () => setIsModalOpen1(true);
  const closeModal1 = () => setIsModalOpen1(false);
  const columns1 = [
   
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
      selector: (row) => row.Building,
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
      {
        name: "Action",
        cell: (row) => (
          <div className="flex items-center gap-4">
  
           <button onClick={openModal1}>
              <BiEdit size={15} />
            </button>
            <button >
                <FaTrash size={15} />
              </button>
          </div>
        ),
      },


  ];
  const data1 = [
    {
        id:1,
        Category_Type:"Cafeteria/Pantry",
        Assignee:"Test",
        Building:<input type="checkbox"/>,
       
        Vendor_Email:<input type="checkbox"/>,
        Icon:<input type="checkbox"/>,

    }
]
  return (
    <div className=" w-full my-2 flex  overflow-hidden flex-col">
    <div className="flex w-full">
      <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full">
        <h2
          className={`p-1 ${
            page === "Category" &&
            `bg-white font-medium text-blue-500 shadow-custom-all-sides`
          } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
          onClick={() => setPage("Category")}
        >
           Category
        </h2>
        <h2
          className={`p-1 ${
            page === "Sub Category" &&
            "bg-white font-medium text-blue-500 shadow-custom-all-sides"
          } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
          onClick={() => setPage("Sub Category")}
        >
          Sub Category
        </h2>

        </div>
        </div>



    <div>
    {page === "Category" && 
        <div>
          <button style={{ background:themeColor }} onClick={handleToggleCategoryPage} className=" mt-4 ml-2 mb-4 px-4 py-2 bg-blue-500 text-white rounded-md">Add Category</button>
          {showCategoryPage && 
          <TicketCategoryPage
             handleToggleCategoryPage={handleToggleCategoryPage} />}&nbsp;
          <Table
          responsive
          //   selectableRows
          columns={columns}
          data={data}
          isPagination={true}
        />
            </div>}
            {page === "Sub Category" && 
        <div>
                    <button style={{ background:themeColor }} onClick={handleToggleCategoryPage1} className=" mt-4 mb-2 ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">Add SubCategory</button>

           {showSubCategoryPage && <TicketSubCategory
           handleToggleCategoryPage1={handleToggleCategoryPage1}/>}
           <div></div>&nbsp;
           <Table
          responsive
          //   selectableRows
          columns={columns1}
          data={data1}
          isPagination={true}
        />
            </div>}
            
          {isModalOpen1 && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeModal1}></div>
    <div className="bg-white h-96 overflow-y-auto rounded-lg shadow-lg p-4 relative z-10 w-2/3">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        onClick={closeModal1}
      >
        <FaTimes/>
      </button>
      <h2 className="text-xl font-semibold mb-4">Edit Sub Category</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="form-group">
        <label className="block mb-2">Select Category</label>
            <select type="text" className="border p-2 w-full" placeholder="Enter Category"
            >
              <option value="">HouseKeeping</option>
              <option value="">Washroom cleaning</option>
              </select>
        </div>
        <div className="form-group">
          <label className="block mb-2">Sub Category</label>
          <input className="border p-2 w-full">

          </input>
        </div>

        <form className="">
      {Object.keys(options).map((section) => (
        <div key={section} className="form-section">

          <div className="flex flex-col">
          <span>
            <div></div>
            <input type="checkbox" />&nbsp;
            &nbsp;<label htmlFor="">{section}</label>
            <br/></span>
            <span className='flex flex-col'>
            
            <div className="relative">
              <input
                type="text"
                readOnly
                value={selectedOptions[section].join(', ')}
                onClick={() => toggleSelect(section)}
                className="cursor-pointer p-2 border mt-2 border-gray-300 rounded-md w-full"
              />
                &nbsp;
              {isOpen[section] && (
                <div className="absolute top-full z-10 mt-2 w-full rounded-md shadow-lg bg-white border border-gray-300">
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
      <button type="submit" style={{ background:themeColor,height: "1cm" }} className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Submit
      </button>
    </form>

      </div>
      </div></div>
      )}
    {/* {page === "Setup" &&  <TicketSetupPage/>} */}
      {/* {page === "Permit Activity" &&  <PermitActivityTable/>}
      {page === "Permit Sub Activity" &&  <PermitSubActivityTable/>}
      {page === "Permit Hazard Category" &&  <PermitHazardCategoryTable/>}
      {page === "Permit Risk" &&  <PermitRiskTable/>} */}
         {isModalOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeModal}></div>
      <div className="bg-white w-2/3  h-96 overflow-y-auto rounded-lg shadow-lg p-4 relative z-10">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={closeModal}
        >
          <FaTimes size={20}/>
        </button>
        <h2 className=" font-semibold mb-4">Edit Category</h2>
        <form>

           <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="form-group">
            <label className="block mb-2">Enter Category</label>
            <input type="text" className="border p-2 w-full" placeholder="Enter Category"/>
          </div>
          <div className="form-group">
            <label className="block mb-2">Select Engineer</label>
            <select className="border p-2 w-full">
              <option value="engineer1">Mittu</option>
              <option value="engineer2">Panda</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label className="block mb-2">Response Time (min)</label>
            <input type="number" className="border p-2 w-full" placeholder="Response Time"/>
          </div>
          
          <div className="form-group">
            <label className="block mb-2">Selected Site</label>
            <select type="text" className="border p-2 w-full" placeholder="Enable Sites"
            >
              <option value="">vibe site 1</option>
              <option value="">vibe site 2</option>
            </select>
          </div>
        </div>
        <div className="form-group">
            {/* <label className="block mb-2">Response Time (min)</label> */}
            {/* <input type="file" className="border p-2 w-full" /> */}
            <FileInputBox/>
          </div>
        <h2 className="text-xl font-semibold mt-2 mb-4">FAQs</h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <label className="block mb-2">Question</label>
              <textarea
                rows="3"
                className="border p-2 w-full mb-2"
                value={faq.question}
                placeholder="Question"
                onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
              ></textarea>
              <label className="block mb-2">Answer</label>
              <textarea
                rows="3"
                className="border p-2 w-full mb-2"
                value={faq.answer}
                placeholder="Answer"
                onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
              ></textarea>
              <button
                className="bg-red-500 text-white px-4 py-2"
                onClick={() => deleteFaq(index)}
                style={{ background:themeColor,height: "1cm" }}
              >
                Delete
              </button>
            </div>
          ))}
          
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={addFaq}
          style={{ background:themeColor,height: "1cm" }}
        >
          Add Question/Answer
        </button>

        <div>
        <button  style={{ background:themeColor,height: "1cm" }} className="bg-green-500 text-white px-4 py-2 mt-1"> Submit</button>
        </div>
        </form>
      </div>
    </div>
  )}
    </div>
  </div>
  )
}

export default TicketCategorySetup