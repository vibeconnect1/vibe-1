import React, { useRef, useState } from "react";
import FileInput from "../../Buttons/FileInput";
import TextFields from "../../containers/Inputs/TextFields";
import Selector from "../../containers/Selector";
import image from "/profile.png";
const AddBusiness = () => {
  const [imageFile, setImageFile] = useState(null);
  const inputRef = useRef(null);
 
  const options = {
    Category: ["Finance & Accounting", "IT Services", "HR", "Legal Services"],
    SubCategory: [],
  };
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };
  return (
    <section className="w-screen flex justify-center p-4 ">
      <div className="flex flex-col w-full gap-4 m-10">
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
        <div className="grid grid-cols-3 gap-8 mt-10">
          <TextFields type={"text"} title={"Company Name :"} />
          <TextFields type={"text"} title={"Contact Person Name :"} />
          <TextFields type={"number"} title={"Mobile Number :"} />
          <TextFields type={"number"} title={"Landline :"} />

          <TextFields type={"email"} title={"Primary Email :"} />
          <TextFields type={"email"} title={"Secondary Email :"} />
          <TextFields type={"url"} title={"Website :"} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-bold">
            Address :
          </label>
          <textarea
            name=""
            id=""
            cols="50"
            rows="3"
            className="border border-black rounded-md"
          />
        </div>
        <div className="grid grid-cols-3 gap-8">
          <Selector
            heading={"Category :"}
            subHeading={"Choose Category"}
            options={options.Category}
          />
          <Selector
            heading={"Sub Category :"}
            subHeading={"Choose Sub Category"}
            options={options.SubCategory}
          />
          <TextFields type={"text"} title={"Key Offering :"} />
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold">
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
            <label htmlFor="" className="font-bold">
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
          <FileInput />
        </div>
        <div className="my-10 flex justify-center">
          <button className="bg-black text-white p-2 text-lg rounded-md">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddBusiness;
