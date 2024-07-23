import React, { useEffect, useRef, useState } from "react";
import image from "/profile.png";
import Navbar from "../../components/Navbar";
import FileInputBox from "../../containers/Inputs/FileInputBox";
import { useSelector } from "react-redux";
import { getGenericCategory } from "../../api";
const AddBusiness = () => {
  const [imageFile, setImageFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };
  const themeColor = useSelector((state) => state.theme.color);

  useEffect(() => {
    const fetchContactCategory = async () => {
      try {
        const contactResp = await getGenericCategory();
        const filteredCategory = contactResp.data.filter(
          (cate) => cate.info_type === "contact"
        );
        console.log(filteredCategory);
        setCategories(filteredCategory);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContactCategory();
  }, []);

  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex flex-col w-full gap-4 p-4">
          <h2
            style={{ background: themeColor }}
            className="text-center text-white font-semibold p-2 rounded-full text-lg "
          >
            Add Business Contact
          </h2>
          <div className="flex w-full justify-center">
            <div
              onClick={handleImageClick}
              className="cursor-pointer flex justify-center flex-col items-center my-4"
            >
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Uploaded"
                  className="border-4 border-gray-300 rounded-full w-40 h-40 object-cover"
                />
              ) : (
                <img
                  src={image}
                  alt="Default"
                  className="border-4 border-gray-300 rounded-full w-40 h-40 object-cover"
                />
              )}
              <input
                type="file"
                ref={inputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <h2 className="font-medium">Company Logo</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 item-start gap-4 w-full">
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold my-1">
                Company Name :
              </label>
              <input
                type="text"
                placeholder="Enter Company Name"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold my-1">
                Contact Person Name :
              </label>
              <input
                type="text"
                placeholder="Enter Contact Person "
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold my-1">
                Mobile Number :
              </label>
              <input
                type="text"
                placeholder="Enter Mobile No. "
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold my-1">
                Landline :
              </label>
              <input
                type="text"
                placeholder="Enter Landline No. "
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold my-1">
                Primary Email :
              </label>
              <input
                type="text"
                placeholder="Enter Primary Email. "
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold my-1">
                Secondary Email :
              </label>
              <input
                type="email"
                placeholder="Enter Secondary Email. "
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold my-1">
                Website :
              </label>
              <input
                type="url"
                placeholder="Enter Website url "
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold my-1">
                Category :
              </label>
              <select
                name=""
                id=""
                className="border p-1 px-4 border-gray-500 rounded-md"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold my-1">
                Sub Category :
              </label>
              <select
                name=""
                id=""
                className="border p-1 px-4 border-gray-500 rounded-md"
              >
                <option>Select Sub Category</option>
                <option>Finance & Accounting</option>
                <option>IT Services</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold my-1">
                Key Offering :
              </label>
              <input
                type="text"
                placeholder="Enter key Offering "
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 ">
            <label htmlFor="" className="font-medium">
              Address :
            </label>
            <textarea
              name=""
              id=""
              // cols="45"
              rows="3"
              className="border border-black rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Description :
              </label>
              <textarea
                name=""
                id=""
                cols="10"
                rows="3"
                className="border border-black rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Profile :
              </label>
              <textarea
                name=""
                id=""
                cols="10"
                rows="3"
                className="border border-black rounded-md"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-col items-start justify-start">
            <label htmlFor="" className="font-semibold ">
              Attachments :
            </label>
            <FileInputBox />
          </div>
          <div className="my-10 flex justify-center">
            <button className="bg-black text-white p-2 text-lg rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBusiness;
