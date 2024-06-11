import React, { useState } from "react";
import { postInventory } from "../../api";
import { getItemInLocalStorage } from "../../utils/localStorage";

const AddInventory = () => {
  const siteId = getItemInLocalStorage("SITEID")
  const userId = getItemInLocalStorage("UserId")
  const [formData, setFormData] = useState({
    site_Id: siteId,
    name: "",
    rate: "",
    availableQuantity: "",
    groupName: "",
    subGroupName: "",
    description:"",
    createdBy:userId
  });
console.log(formData)
  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleAddInventory = async()=>{
  const dataToSend = new FormData()
  dataToSend.append("item[site_id]", formData.site_Id)
  dataToSend.append("item[name]", formData.name)
  dataToSend.append("item[description]", formData.description)
  dataToSend.append("item[rate]", formData.rate)
  dataToSend.append("item[available_quantity]", formData.availableQuantity)
  dataToSend.append("item[group_name]", formData.groupName)
  dataToSend.append("item[sub_group_name]", formData.subGroupName)
  dataToSend.append("item[created_by_id]", formData.createdBy)

  

  const AddInvResp = await postInventory(dataToSend)
  console.log(AddInvResp)
}

  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Add Stock
        </h2>
        <div className="md:mx-20 my-5 mb-10 sm:border border-gray-400 p-5 px-10 rounded-lg sm:shadow-xl">
          <div className="flex  flex-col justify-around">
            <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-2 w-full">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Name :
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  placeholder="Enter Stock Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Rate :
                </label>
                <input
                  type="text"
                  name="rate"
                  value={formData.rate}
                  onChange={handleChange}
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  placeholder="Enter Rate"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Available Quantity :
                </label>
                <input
                  type="text"
                  name="availableQuantity"
                  onChange={handleChange}
                  value={formData.availableQuantity}
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  placeholder="Enter Quantity"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Group :
                </label>
                <input
                  type="text"
                  name="groupName"
                  value={formData.groupName}
                  onChange={handleChange}
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  placeholder="Enter Group"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Sub Group :
                </label>
                <input
                  type="text"
                  name="subGroupName"
                  value={formData.subGroupName}
                  onChange={handleChange}
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  placeholder="Enter Sub Group"
                />
              </div>
            </div>

            <div className="flex flex-col my-2">
              <label htmlFor="" className="font-semibold">
                Description :
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                id=""
                cols="30"
                rows="3"
                className="border p-1 px-4 border-gray-500 rounded-md"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="bg-black text-white p-2 px-4 rounded-md font-medium" onClick={handleAddInventory}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddInventory;
