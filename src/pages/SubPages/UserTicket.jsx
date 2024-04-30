import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
// import Selector from "../../containers/Selector";
import { useNavigate } from "react-router-dom";
// import FileInput from "../../Buttons/FileInput";
// import toast from "react-hot-toast";
import { fetchSubCategories } from "../../api";
import { getItemInLocalStorage } from "../../utils/localStorage";


const UserTicket = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [units , setUnits] = useState([]);
  const [categoryType, setCategoryType] = useState("");
  
  const [formData, setFormData] = useState({ 
    category_type_id : "",
    sub_category_id : "",
    text : "",
  })

  console.log(formData);
  console.log(attachments);

  const catogories = getItemInLocalStorage("categories")
  console.log("categories-- ",catogories);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSubCategories(14)
      console.log("subCategories:",response)
    }
    fetchData();
  })

  // const handleChange = async (e) => {
  //   async function fetchSubCategory(categoryId) {
  //     try{
  //     const cat = await fetchSubCategories(categoryId);
  //     setUnits(cat.data.sub_categories.map((item)=>{return{name:item.name , id:item.id }}));
  //     console.log(cat)
  //     }
  //     catch(e){
  //      console.log(e)
  //     }
  //    }
     

  //   // console.log("This is the handlechangr" ,e.target.type);
  //   // console.log("This is the handlechangr" ,e.target.name);
  //   // console.log("This is the value" , e.target.value);

  //   if(e.target.type==="select-one" && e.target.name==="categories") {
  //     await fetchSubCategory(Number(e.target.value));
  //     setFormData({
  //       ...formData,
  //       categories: categoryId, 
  //       subCategories: ""
  //     });
  //   }

  //   else{
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });

  //   }

  // };

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
        sub_category_id: ""
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleOptionChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    setAttachments(fileList);
  };
  

  //Post API
   const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/mytickets")
   };


  //  handle reset
  const handleReset = () => {
    setDescription("");
    setAttachments([]);
    setTicketType("");
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
            <ul className="flex sm:flex-row flex-col justify-around my-5 items-center">
            </ul>
            <div className="ml-5 flex flex-col items-start w-full gap-4">
            <div className="flex flex-col">
            <label className="font-semibold">
              Categories:
            <select 
                  id="two"
                  value={formData.catogories}
                  name="categories"
                  onChange={handleChange}
                  className="border  p-1 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Select Category</option>
                  {catogories?.map(
                    category => (
                      <option onClick={()=>console.log("checking-category")} value={category.id}>{category.name}</option>
                    )
                  )}
                  <p>{formData.categories}</p>
                </select>             
                </label>
             
                
                <label htmlFor="" className="font-semibold">
                  Sub Category:
                </label>
                <select
                  id="five"
                  value={formData.subCategories}
                  name="sub_category_id"
                  onChange={handleChange}
                  className="border p-1 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Sub Category</option>
                  {units?.map(
                    floor => (
                      <option value={floor.id}>{floor.name}</option>
                    )
                  )}
                </select>
              </div>
            </div>

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

            <input type="file" name="attchments" id="attachments" onChange={handleFileChange}  multiple/>
            <div>
              {attachments.map((file, index) => (
                <div key={index}>
                  <p className="text-green">File Name: {file.name}</p>
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
  )
}

export default UserTicket;