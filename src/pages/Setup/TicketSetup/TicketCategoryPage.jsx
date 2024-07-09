import React, { useState } from 'react';
// import TicketCategorySetup from './TicketCategorySetup';
import { useSelector } from "react-redux";
// import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";


// import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import FileInputBox from '../../../containers/Inputs/FileInputBox';
import { FaTrash } from 'react-icons/fa';
const TicketCategoryPage = ({handleToggleCategoryPage}) =>{
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);
  const themeColor = useSelector((state) => state.theme.color);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">

          <button onClick={openModal}>
            <BiEdit size={15} />
          </button>
          <button onClick={openModal}>
            <FaTrash size={15} />
          </button>

          {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeModal}></div>
    <div className="bg-white w-192 h-auto rounded-lg shadow-lg p-4 relative z-10">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        onClick={closeModal}
      >
        &times;
      </button>
      <h2 className="text-xl font-semibold mb-4">Edit Category</h2>
      <form>

         <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="form-group">
          <label className="block mb-2">Enter Category</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div className="form-group">
          <label className="block mb-2">Select Engineer</label>
          <select className="border p-2 w-full">
            <option value="engineer1">Engineer 1</option>
            <option value="engineer2">Engineer 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label className="block mb-2">Response Time (min)</label>
          <input type="number" className="border p-2 w-full" />
        </div>
        <div className="form-group">
          {/* <label className="block mb-2">Response Time (min)</label> */}
          <input type="file" className="border p-2 w-full" />
        </div>
        <div className="form-group">
          <label className="block mb-2">Enable Sites</label>
          <input type="text" className="border p-2 w-full" />
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">FAQs</h2>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">Question</label>
            <textarea
              rows="3"
              className="border p-2 w-full mb-2"
              value={faq.question}
              onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
            ></textarea>
            <label className="block mb-2">Answer</label>
            <textarea
              rows="3"
              className="border p-2 w-full mb-2"
              value={faq.answer}
              onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
            ></textarea>
            <button
              className="bg-red-500 text-white px-4 py-2"
              onClick={() => deleteFaq(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={addFaq}
      >
        Add Question/Answer
      </button>

      <div>
      <button  className="bg-green-500 text-white px-4 py-2 mt-1"> Submit</button>
      </div>
      </form>
    </div>
  </div>
)}
        </div>
      ),
    },
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
        id:1,
        Category_Type:"b",
        Assignee:"j",
    }
]
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

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-bold mb-4">Dynamic FAQ Form</h1> */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="form-group">
          <label className="block mb-2">Enter Category</label>
          <input type="text" className="border p-2 w-full" placeholder='Enter Category'/>
        </div>
        <div className="form-group">
          <label className="block mb-2">Select Engineer</label>
          <select className="border p-2 w-full">
            <option value="engineer1">Ashish</option>
            <option value="engineer2">Akhil</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label className="block mb-2">Response Time (min)</label>
          <input type="number" className="border p-2 w-full" placeholder='Response Time'/>
        </div>
       
        <div className="form-group">
          <label className="block mb-2">Enable Sites</label>
          <select type="text" className="border p-2 w-full" placeholder='Enable Sites' 
          >
            <option value="">vibe site 1</option>
            <option value="">vibe site 2</option>
          </select>
        </div>
        {isChecked && (
           <div className="form-group">
            <label className="block mb-2">Enter  Vendor Email</label>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter some text"
        /></div>
      )}
      </div>
      <div className="flex items-center mb-4">
        <input
          id="toggleInput"
          type="checkbox"
          className="mr-2"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="toggleInput" className="text-gray-700">
          Vendor Email
        </label>
      </div>
     
      <div className="form-group  ">
          {/* <label className="block mb-2">Response Time (min)</label> */}
          {/* <input type="file" className="border p-2 w-full" /> */}
        <FileInputBox/>
        </div>
      <h2 className="text-xl mt-2 font-semibold mb-4">FAQs</h2>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">Question</label>
            <textarea
              rows="3"
              className="border p-2 w-full mb-2"
              value={faq.question}
              placeholder='Question'
              onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
            ></textarea>
            <label className="block mb-2">Answer</label>
            <textarea
              rows="3"
              className="border p-2 w-full mb-2"
              value={faq.answer}
              placeholder='Answer'
              onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
            ></textarea>
            <button
              className="bg-red-500 text-white px-4 py-2"
              onClick={() => deleteFaq(index)}
              
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2"
        style={{background:themeColor}}
        onClick={addFaq}
      >
        Add Question/Answer
      </button>
     
      <div className="flex justify-center mb-2 gap-4">
           <button                   className=" font-semibold hover:bg-black hover:text-white transition-all  p-2 px-4 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
 style={{background:themeColor}}>Add</button>
  <button style={{ background:themeColor }} onClick={handleToggleCategoryPage} className="  px-4 py-2 bg-blue-500 text-white rounded-md">Cancel</button>
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
}

export default TicketCategoryPage;