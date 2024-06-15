import React, { useEffect, useState } from "react";
import { editInventory, getInventoryDetails, postInventory } from "../../api";
import { useParams } from "react-router-dom";
import { getItemInLocalStorage } from "../../utils/localStorage";
import toast from "react-hot-toast";

const EditStocks = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    rate: "",
    available_quantity: "",
  });

  useEffect(() => {
    const fetchStockDetails = async () => {
      const stockDetails = await getInventoryDetails(id);
      setFormData(stockDetails.data);
    };
    fetchStockDetails();
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const siteId = getItemInLocalStorage("SITEID");
  const userId = getItemInLocalStorage("UserId");
  const handleAddInventory = async () => {
    const dataToSend = new FormData();
    dataToSend.append("item[site_id]", siteId);
    dataToSend.append("item[name]", formData.name);
    dataToSend.append("item[description]", formData.description);
    dataToSend.append("item[rate]", formData.rate);
    dataToSend.append("item[available_quantity]", formData.availableQuantity);
    dataToSend.append("item[group_name]", formData.groupName);
    dataToSend.append("item[sub_group_name]", formData.subGroupName);
    dataToSend.append("item[created_by_id]", userId);

    try {
      const editInvResp = await editInventory(dataToSend, id);
      console.log(editInvResp);
      toast.success("Inventory Edited Successfully");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Edit Stock
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
                  value={formData.name}
                  onChange={handleChange}
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
                  name="available_quantity"
                  value={formData.available_quantity}
                  onChange={handleChange}
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
                  name=""
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
                  name=""
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
              <button
                className="bg-black text-white p-2 px-4 rounded-md font-medium"
                onClick={handleAddInventory}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditStocks;
