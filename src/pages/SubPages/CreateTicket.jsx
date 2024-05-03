import Collapsible from "react-collapsible";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import CustomTrigger from "../../containers/CustomTrigger";
import Selector from "../../containers/Selector";
import { useNavigate } from "react-router-dom";
import FileInput from "../../Buttons/FileInput";
import { getItemInLocalStorage } from "../../utils/localStorage";
import { fetchSubCategories } from "../../api";

const CreateTicket = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [behalf, setBehalf] = useState("self");
  const [ticketType, setTicketType] = useState("");
  //   const [selectedOption, setSelectedOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedCustomerPriority, setSelectedCustomerPriority] = useState("");
  const [selectedAdminPriority, setSelectedAdminPriority] = useState("");
  const [units, setUnits] = useState([])
  const [user, setUser] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [selectedSiteId, setSelectedSiteId] = useState(15);
  const [formData, setFormData] = useState({
    category_type_id: "",
    sub_category_id: "",
    assigned_to: null,
    priority: "",
    of_phase: "pms",
    site_id: selectedSiteId,
    documents: [],
  })


  console.log(formData);
  console.log(attachments);

  const categories = getItemInLocalStorage("categories");
  console.log("Categories", categories)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSubCategories(14);
      // console.log("subCategories:", response);
    };
    fetchData();
  }, []);

  const handleOptionChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files).map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      data: file,
      lastModified: file.lastModified // Store the file object directly
      // Add more properties as needed
    }));
    setAttachments(fileList);

    setFormData({
      ...formData,
      documents: fileList
    });
  };

  // const handleFileChange = (event) => {
  //   const files = event.target.files;
  //   const fileList = Array.from(files);
  //   setAttachments(fileList);
  // };

  // const handleUpload = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('file', selectedFile);
  //     // Send the file to the server
  //     await axios.post('/upload', formData);
  //     alert('File uploaded successfully!');
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //     alert('An error occurred while uploading the file.');
  //   }
  // };

  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setAttachments(event.target.files[0]);
  // };

  // const handleFileChange = (event) => {
  //   // Append the selected file to the attachments array
  //   setAttachments([...attachments, event.target.files[0]]);
  // };

  const handleChange = async (e) => {
    async function fetchSubCategory(categoryId) {
      try {
        const cat = await fetchSubCategories(categoryId);
        setUnits(cat.data.sub_categories.map((item) => ({ name: item.name, id: item.id })));
        // console.log(cat);
      } catch (e) {
        console.log(e);
      }
    }

    if (e.target.type === "select-one" && e.target.name === "categories") {
      const categoryId = Number(e.target.value);
      await fetchSubCategory(categoryId);
      setFormData({
        ...formData,
        category_type_id: categoryId,
        sub_category_id: "",
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      // const fileData = new FormData();
      // fileData.append('file', attachments);

      const response = await axios.post(
        'http://3.6.98.113/pms/complaints.json?token=775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6',
        formData
      );
      console.log('Complaint submitted successfully:', response.data);
      setFormData({
        category_type_id: "",
        sub_category_id: "",
        text: "",
        heading: "",
        of_phase: "pms",
        site_id: selectedSiteId,
        documents: []
      });
      navigate('/mytickets/userticket');
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     formData.append('file', attachments[0]); // Assuming only one file is allowed

  //     // Append other form data fields to the FormData object
  //     formData.append('category_type_id', selectedCategory);
  //     formData.append('sub_category_id', selectedSubCategory);
  //     // Add more fields as needed

  //     const response = await axios.post(
  //       'http://3.6.98.113/pms/complaints.json?token=775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6',
  //       formData
  //     );

  //     console.log('Complaint submitted successfully:', response.data);
  //     // Reset form data and navigate
  //   } catch (error) {
  //     console.error('Error submitting complaint:', error);
  //   }
  // };

  const handleReset = () => {
    setAttachments([]);
    setSelectedSubCategory("");
    setSelectedCategory("");
    setSelectedCustomerPriority("");
    setSelectedCategory("");
  };
  return (
    <section className="justify-center items-center flex min-h-screen my-15 md:flex">
  <div className="fixed left-0 top-0 h-full">
    <Navbar />
    </div>
  <form
    className="border border-gray-300 rounded-lg sm:w-[60rem] p-8 flex flex-col gap-5"
    onSubmit={handleSubmit}
  >
    <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
      Create Ticket
    </h2>

    {/* Requestor Details or Requestor Deatils (typo?) */}
    {behalf === "self" ? (
      <Collapsible
        readOnly
        trigger={
          <CustomTrigger isOpen={isOpen}>Requestor Details</CustomTrigger>
        }
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        className="bg-gray-300 p-2 rounded-md font-bold "
      >
        <div className="grid grid-cols-3 bg-gray-300 p-2 rounded-md gap-5 pb-4">
          <p>Name:</p>
          <p>Contact No:</p>
          <p>Site:</p>
          <p>Department:</p>
          <p>Unit:</p>
        </div>
      </Collapsible>
    ) : (
      <div className="flex items-center gap-4 my-5">
        <h2 className="font-bold">Requestor Details :</h2>
        <Selector
          selectedOption={user}
          handleOptionChange={(e) => handleOptionChange(e, setUser)}
          subHeading={"Choose User"}
          options={options.user}
        />
      </div>
    )}

    {/* Category, Sub Category, Assigned To, Priority */}
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="" className="font-semibold">
          Category:
        </label>
        <select
          id="two"
          value={formData.catogories}
          name="categories"
          onChange={handleChange}
          className="border p-1 px-4 grid border-gray-500 rounded-md"
        >
          <option value="">Select Category</option>
          {categories?.map((category) => (
            <option
              onClick={() => console.log("checking-category")}
              value={category.id}
              key={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
        {/* Add more fields as needed */}
          <label htmlFor="" className="font-semibold">
             Priority :
           </label>
           <select
            id="five"
            value={formData.assigned_to}
            name="assigned_to"
            onChange={handleChange}
            className="border p-1 px-4 grid border-gray-500 rounded-md"
          >
            <option value="">Priority</option>
            {units?.map(
              floor => (
                <option value={floor.id}>{floor.name}</option>
              )
            )}
          </select>
      </div>
      <div>
        <label htmlFor="" className="font-semibold">
          Sub Category:
        </label>
        <select
          id="five"
          value={formData.subCategories}
          name="sub_category_id"
          onChange={handleChange}
          className="border p-1 px-4 grid border-gray-500 rounded-md"
        >
          <option value="">Sub Category</option>
          {units?.map((floor) => (
            <option value={floor.id} key={floor.id}>
              {floor.name}
            </option>
          ))}
        </select>
        <label htmlFor="" className="font-semibold">
          Assigned To:
         </label>
           <select
            id="five"
            value={formData.assigned_to}
            name="assigned_to"
            onChange={handleChange}
            className="border p-1 px-4 grid border-gray-500 rounded-md"
          >
            <option value="">Assigned to</option>
            {units?.map(
              floor => (
                <option value={floor.id}>{floor.name}</option>
              )
            )}
          </select>
      </div>
      {/* Add more columns as needed */}
    </div>

    {/* Description */}
    <div className="flex flex-col my-5 gap-1">
      <label htmlFor="" className="font-bold">
        Description:
      </label>
      <textarea
        name="text"
        placeholder=" Describe your concern!"
        id=""
        cols="80"
        rows="5"
        className="border border-black rounded-md"
        value={formData.text}
        onChange={handleChange}
      />
    </div>

    {/* File Input */}
    <FileInput handleFileChange={handleFileChange} />
    <div>
      {attachments.map((file, index) => (
        <div key={index}>
          <p className="text-green">File Name: {file.name}</p>
        </div>
      ))}
    </div>

    {/* Submit and Reset Buttons */}
    <div className="flex gap-5 justify-center items-center my-4">
      <button
        type="submit"
        className="bg-black text-white hover:bg-gray-700 font-semibold text-xl py-2 px-4 rounded"
      >
        Submit
      </button>
      <button
        type="reset"
        className="bg-gray-400 text-black hover:bg-black hover:text-white font-semibold text-xl py-2 px-4 rounded"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  </form>
</section>

  );
};

export default CreateTicket;
