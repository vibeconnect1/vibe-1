import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { fetchSubCategories, getComplaints, postComplaintsDetails } from "../../api";
import { getItemInLocalStorage } from "../../utils/localStorage";
// import axios from "axios";
import toast from "react-hot-toast";

const UserTicket = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [units, setUnits] = useState([]);
  const [selectedSiteId, setSelectedSiteId] = useState(15);
  const [disSubmit, setDisSubmit] = useState(false);

  const [formData, setFormData] = useState({
    category_type_id: "",
    sub_category_id: "",
    text: "",
    heading: "",
    of_phase: "pms",
    site_id: selectedSiteId,
    // documents : []
  });

  console.log(formData);
  console.log(attachments);

  const categories = getItemInLocalStorage("categories");
  console.log("categories-- ", categories);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSubCategories(14);
      console.log("subCategories:", response);
    };
    fetchData();
  }, []);

  const handleChange = async (e) => {
    async function fetchSubCategory(categoryId) {
      try {
        const cat = await fetchSubCategories(categoryId);
        setUnits(cat.data.sub_categories.map((item) => ({ name: item.name, id: item.id })));
        console.log(cat);
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

  //   const promises = fileList.map(file => {
  //     return new Promise((resolve, reject) => {
  //       const reader = new FileReader();

  //       reader.onload = (e) => {
  //         const base64Data = e.target.result;
  //         resolve(base64Data);
  //       };

  //       reader.onerror = (error) => {
  //         reject(error);
  //       };
  //       reader.readAsDataURL(file);
  //     });
  //   });
  //   Promise.all(promises)
  //     .then(base64Array => {
  //       setAttachments(base64Array);
  //     })
  //     .catch(error => {
  //       console.error('Error reading files:', error);
  //     });
  // };


  const handleFileChange = async (event) => {
    const files = event.target.files;
    const base64Array = [];

    for (const file of files) {
      const base64 = await convertFileToBase64(file);
      base64Array.push(base64);
    }
    console.log("Array base64-", base64Array);
    const formattedBase64Array = base64Array.map((base64) => {
      // Extract base64 string without the data URL prefix
      return base64.split(',')[1];
    });

    console.log("Fornat", formattedBase64Array);
    setFormData({
      ...formData,
      documents: formattedBase64Array
    })
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.heading || !formData.category_type_id || !formData.sub_category_id) {
        return toast.error("All Fields Required")
      }

      setDisSubmit(true)
      toast.loading("Submitting request Please Wait!")

      const response = await postComplaintsDetails(formData);
      console.log('Complaint submitted successfully:', response);
      setFormData({
        category_type_id: "",
        sub_category_id: "",
        text: "",
        heading: "",
        of_phase: "pms",
        site_id: selectedSiteId,
        documents: []
      });

      toast.dismiss();


      toast.success("Complaint sent successfully");
      navigate('/mytickets');
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
    <section className="min-h-screen flex flex-col md:flex-row">
      <div className="fixed left-0 top-0 h-full md:static md:h-auto md:flex-shrink-0">
        <Navbar />
      </div>
      <div className="flex justify-center items-center overflow-x-auto w-full max-w-screen-xl sm:w-full">
        <form
          className="border border-gray-300 rounded-lg md:p-8 w-full max-w-[60rem]"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
            New Ticket
          </h2>
          <div className="ml-5 flex flex-col items-start w-full gap-4">
            <div className="flex justify-around my-2 w-full">
              <p className="font-semibold">Related To:</p>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Appartment"
                  name="status"
                // checked={selectedStatus === "Appartment"}
                // onChange={() => handleStatusChange("Appartment")}
                />
                <label htmlFor="Appartment" className="text-sm">
                  Appartment
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Shop"
                  name="status"
                // checked={selectedStatus === "Appartment"}
                // onChange={() => handleStatusChange("Appartment")}
                />
                <label htmlFor="Shop" className="text-sm">
                  Shop
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Common Area"
                  name="status"
                // checked={selectedStatus === "Appartment"}
                // onChange={() => handleStatusChange("Appartment")}
                />
                <label htmlFor="Common Area" className="text-sm">
                  Common Area
                </label>
              </div>
            </div>
            <div className="flex justify-around my-2 w-full">
              <p className="font-semibold">Type:</p>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Complaint"
                  name="status"
                // checked={selectedStatus === "Appartment"}
                // onChange={() => handleStatusChange("Appartment")}
                />
                <label htmlFor="Complaint" className="text-sm">
                  Complaint
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Suggestion"
                  name="status"
                // checked={selectedStatus === "Appartment"}
                // onChange={() => handleStatusChange("Appartment")}
                />
                <label htmlFor="Suggestion" className="text-sm">
                  Suggestion
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Request"
                  name="status"
                // checked={selectedStatus === "Appartment"}
                // onChange={() => handleStatusChange("Appartment")}
                />
                <label htmlFor="Request" className="text-sm">
                  Request
                </label>
              </div>

            </div>
            
            <div className="flex justify-around w-full">
              <div className="flex gap-3 items-center">
                <label htmlFor="" className="font-semibold">
                  Tower Name :
                </label>
                <select
                  // value={formData.priority}
                  // onChange={handleChange}
                  id="towername"
                  name="towername"
                  className="w-fit p-2 rounded-md px-4"
                >
                  <option value="T1">Tower1</option>
                  <option value="T2">Tower2</option>
                  <option value="T3">Tower3</option>

                </select>
              </div>
            
              <div className="flex gap-3 items-center">
                <label htmlFor="" className="font-semibold">
                  Unit Name :
                </label>
                <select
                  // value={formData.priority}
                  // onChange={handleChange}
                  id="unitname"
                  name="unitname"
                  className="w-fit p-2 rounded-md px-4"
                >
                  <option value="U1">Unit-1</option>
                  <option value="U2">Unit-2</option>
                  <option value="U3">Unit-3</option>

                </select>
              </div>
            </div>
            <div className="flex justify-around w-full">
              <div className="flex gap-3 items-center">
              <label className="font-semibold">Categories:</label>
              <select
                id="two"
                value={formData.catogories}
                name="categories"
                onChange={handleChange}
                className="border p-1 px-4 border-gray-500 rounded-md"
              >
                <option value="">Select Category</option>
                {categories?.map(category => (
                  <option
                    key={category.id}
                    onClick={() => console.log("checking-category")}
                    value={category.id}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
              </div>

              <div className="flex gap-3 items-center">
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
                {units?.map(floor => (
                  <option key={floor.id} value={floor.id}>
                    {floor.name}
                  </option>
                ))}
              </select>
              </div>
            </div>
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
          <div className="flex flex-col my-5 gap-1 md:ml-5">
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

          <input
            type="file"
            name="documents"
            id="documents"
            onChange={handleFileChange}
            multiple
            className="ml-5"
          />
          <div>
            {attachments.map((file, index) => (
              <div key={index}>
                {/* <p className="text-green">File Name: {file.name}</p> */}
                {/* new added */}
                {/* <p className="text-green">File Size: {file.size}</p> */}
                {/* <p className="text-green">File Type: {file.type}</p> */}
                {/* <p className="text-green">File LastModified: {file.lastModified}</p> */}
              </div>
            ))}
          </div>
          <div className="flex gap-5 justify-center items-center my-4">
            <button
              type="submit"
              className={`text-white hover:bg-gray-700 font-semibold text-xl py-2 px-4 rounded ${disSubmit ? "bg-gray-600" : "bg-black"}`}
              disabled={disSubmit}
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


  );
};

export default UserTicket;
