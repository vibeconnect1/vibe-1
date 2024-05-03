import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { fetchSubCategories, getComplaints } from "../../api";
import { getItemInLocalStorage } from "../../utils/localStorage";
import axios from "axios";
import toast from "react-hot-toast";

const UserTicket = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [units, setUnits] = useState([]);
  const [selectedSiteId, setSelectedSiteId] = useState(15);

  const [formData, setFormData] = useState({
    category_type_id: "",
    sub_category_id: "",
    text: "",
    heading: "",
    of_phase: "pms",
    site_id: selectedSiteId,
    documents: [],
  });

  console.log(formData);
  console.log(attachments);

  const categories = getItemInLocalStorage("categories");
  console.log("categories-- ", categories);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSubCategories(14);
      // console.log("subCategories:", response);
    };
    fetchData();
  }, []);

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

  // const handleFileChange = (event) => {
  //   const files = event.target.files;
  //   const fileList = Array.from(files);
  //   setAttachments(fileList);
  // };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
      toast.success("Complaint sent successfully")
      navigate('/mytickets/userticket');
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };

  const handleReset = () => {
    setDescription("");
    setAttachments([]);
    setSelectedCategory("");
    setSelectedSubCategory("");
  };

  return (
    <div>
      <section className="justify-center items-center min-h-screen my-15 md:flex">
        <div className="fixed left-0 top-0 h-full">
          <Navbar />
        </div>
        <div className="overflow-x-auto w-full max-w-screen-xl">
          <form
            className="border border-gray-300 rounded-lg sm:w-full md:w-[60rem] p-8"
            onSubmit={handleSubmit}
          >
            <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
              New Ticket
            </h2>
            <div className="ml-5 flex flex-col items-start w-full gap-4">
              <div className="flex flex-col">
                <label className="font-semibold">
                  Categories:
                </label>
                <select
                  id="two"
                  value={formData.catogories}
                  name="categories"
                  onChange={handleChange}
                  className="border p-1 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Select Category</option>
                  {categories?.map(
                    category => (
                      <option onClick={() => console.log("checking-category")} value={category.id}>{category.name}</option>
                    )
                  )}
                </select>

                <label htmlFor="" className="font-semibold">
                  Sub Category:
                </label>
                <select
                  id="five"
                  value={formData.subCategories}
                  name="sub_category_id"
                  onChange={handleChange}
                  className="border p-2 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Sub Category</option>
                  {units?.map(
                    floor => (
                      <option value={floor.id}>{floor.name}</option>
                    )
                  )}
                </select>
                  <label htmlFor="" className="font-semibold">
                    Heading:
                  </label>
                  <textarea
                    name="heading"
                    placeholder="heading"
                    cols="15"
                    rows="1"
                    value={formData.heading}
                    onChange={handleChange}
                    className="border border-black"
                  ></textarea>
              </div>
            </div>
            <div className="flex ml-5 flex-col my-5 gap-1">
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



            <input type="file" name="documents" id="documents" onChange={handleFileChange} multiple className="ml-5"/>
            <div>
              {attachments.map((file, index) => (
                <div key={index}>
                  <p className="text-green">File Name: {file.name}</p>
                  {/* new added */}
                  <p className="text-green">File Size: {file.size}</p>
                  <p className="text-green">File Type: {file.type}</p>
                  <p className="text-green">File LastModified: {file.lastModified}</p>
                </div>
              ))}
            </div>
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
                Clear
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UserTicket;
