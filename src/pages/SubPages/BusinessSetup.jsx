import React, { useState } from "react";
import Selector from "../../containers/Selector";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from "react-hot-toast";

const BusinessSetup = () => {
  const [selectedFiled, setSelectedField] = useState("category");
  const [showData, setShowData] = useState(false);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [categorySelected, setCategorySelected]= useState("")
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const HandleAddCategory = () => {
    if (!category) {
      return toast.error("Please Enter a Category");
    }
    setCategory(category);
    setShowData(true);
  };
  const HandleAddSubCategory = () => {
    if (!subCategory) {
      return toast.error("Please Enter a SubCategory");
    }
    setCategorySelected(categorySelected)
    setShowData(true);
  };
  const handleSelectedCategory = ()=>{
    setCategorySelected(categorySelected)
  }

  const options = {
    Category: ["Finance & Accounting", "IT Services", "HR", "Legal Services"],
  };
  return (
    <section className="w-screen p-4">
      <div className="flex justify-center gap-5 flex-col w-full">
        <h2 className="bg-black p-2 text-white text-center rounded-md font-semibold text-lg">
          Setup Categories
        </h2>
        <div className="flex justify-center">
          <div className=" gap-5 bg-gray-400 flex p-2 px-4 text-white text-lg rounded-full">
            <h2
              className={`${
                selectedFiled === "category" ? "bg-black" : ""
              } px-3 rounded-full cursor-pointer`}
              onClick={() => setSelectedField("category")}
            >
              Category
            </h2>
            <h2
              className={`${
                selectedFiled === "subCategory" ? "bg-black" : ""
              } px-3 rounded-full cursor-pointer`}
              onClick={() => setSelectedField("subCategory")}
            >
              Sub Category
            </h2>
          </div>
        </div>
        {selectedFiled === "category" && (
          <div className="flex flex-col justify-centermx-10 gap-2">
            <div className="flex justify-center gap-2">
              <input
                type="text"
                name=""
                id=""
                value={category}
                onChange={handleCategoryChange}
                placeholder="Enter Category"
                className="border border-black rounded-md p-1"
              />
              <button
                className="bg-black text-white px-2 rounded-md"
                onClick={HandleAddCategory}
              >
                Add Category
              </button>
            </div>
            <div className="mt-4 w-full">
              <table className="border-collapse w-full ">
                <thead>
                  <tr>
                    <th className=" border-md p-2 bg-black border-r-2 text-white rounded-l-xl">
                      Sr no.
                    </th>
                    <th className="p-2 bg-black border-md border-r-2 text-white">
                      Category
                    </th>
                    <th className="rounded-r-xl p-2 bg-black text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                {showData && (
                  <tbody>
                    <tr className="border-md border-black border-b-2">
                      <td className="text-center  p-2 border-r-2 border-black">
                        1
                      </td>
                      <td className="text-center p-2 border-r-2 border-black">
                        {category}
                      </td>
                      <td className="text-center p-2 flex justify-center gap-4 ">
                        <BiEdit color="gray" size={20} />
                        <RiDeleteBin6Line color="red" size={20} />
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        )}
        {selectedFiled === "subCategory" && (
          <div className="flex flex-col justify-center gap-2">
            <div className="flex justify-center gap-2">
              <Selector subHeading={"Category"} options={options.Category} handleOptionChange={handleSelectedCategory} selectedOption={categorySelected} />
              <input
                type="text"
                name=""
                id=""
                value={subCategory}
                onChange={(e)=>setSubCategory(e.target.value)}
                placeholder="Enter Sub Category"
                className="border border-black rounded-md p-1"
              />
              <button className="bg-black text-white px-2 rounded-md" onClick={HandleAddSubCategory}>
                Add Sub Category
              </button>
            </div>
            <div className="mt-4 w-full">
              <table className="border-collapse w-full ">
                <thead>
                  <tr>
                    <th className=" border-md p-2 bg-black border-r-2 text-white rounded-l-xl">
                      Sr no.
                    </th>
                    <th className="p-2 bg-black border-md border-r-2 text-white">
                      Category
                    </th>
                    <th className="p-2 bg-black border-md border-r-2 text-white">
                      Sub Category
                    </th>
                    <th className="rounded-r-xl p-2 bg-black text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                {showData && (
                  <tbody>
                    <tr className="border-md border-black border-b-2">
                      <td className="text-center  p-2 border-r-2 border-black">
                        1
                      </td>
                      <td className="text-center p-2 border-r-2 border-black">
                        {categorySelected}
                      </td>
                      <td className="text-center p-2 border-r-2 border-black">
                        {subCategory}
                      </td>
                      <td className="text-center p-2 flex justify-center gap-4 ">
                        <BiEdit color="gray" size={20} />
                        <RiDeleteBin6Line color="red" size={20} />
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessSetup;
