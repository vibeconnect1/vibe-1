import React, { useState } from "react";
import { useSelector } from "react-redux";
import FileInputBox from "../../containers/Inputs/FileInputBox";

const AddLoi = () => {
  const [scheduleFor, setScheduleFor] = useState("PO");
  const themeColor = useSelector((state) => state.theme.color);
  const [showEntityList, setShowEntityList] = useState(false);
  const [activities, setActivities] = useState([
    { id: 1, activity: "", subActivity: "", hazardCategory: "", risks: "" },
  ]);
  const [nextId, setNextId] = useState(2);
  const [orderType, setOrderType] = useState("PO");
  const [formData, setFormData] = useState({
    date: "",
    type: "",
    relatedTo: "",
    retentionPercentage: "",
    TDS: "",
    QC: "",
    paymentTenure: "",
    advanceAmount: "",
    billingAddress: "",
    deliveryAddress: "",
    terms: "",
    inventory: "",
    SACCode: "",
    quantity: "",
    unit: "",
    rate: "",
    cgstRate: "",
    cgstAmount: "",
    sgstRate: "",
    sgstAmount: "",
    igstRate: "",
    igstAmount: "",
    TCSRate: "",
    TCSAmount: "",
    TaxAmount: "",
    Amount: "",
    Total: "",
  });
  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      if (name === "quantity" || name === "rate") {
        const quantity = name === "quantity" ? value : updatedData.quantity;
        const rate = name === "rate" ? value : updatedData.rate;
        updatedData.Amount = quantity * rate;
      }

      return updatedData;
    });
  };

  const handleAddActivity = () => {
    setActivities([
      ...activities,
      {
        id: nextId,
        activity: "",
        subActivity: "",
        hazardCategory: "",
        risks: "",
      },
    ]);
    setNextId(nextId + 1);
  };

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  return (
    <section>
      <div className="m-2">
        <h2
          style={{ background: themeColor }}
          className="text-center text-xl font-bold p-2 rounded-full text-white"
        >
          New LOI
        </h2>

        <div className="flex sm:flex-row flex-col justify-around my-2 items-center">
          <div className="grid grid-cols-4 items-center">
            <p className="font-semibold">For :</p>
            <div className="flex gap-5">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <label
                  htmlFor="po"
                  className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                    scheduleFor === "PO" && "bg-black text-white"
                  }`}
                  onClick={() => setScheduleFor("PO")}
                >
                  <input
                    type="radio"
                    name="type"
                    id="po"
                    className="hidden"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: "PO" })}
                  />
                  PO
                </label>
                <label
                  className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                    scheduleFor === "WO" && "bg-black text-white"
                  }`}
                  onClick={() => setScheduleFor("WO")}
                >
                  <input
                    type="radio"
                    name="type"
                    id="wo"
                    className="hidden"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: "WO" })}
                  />
                  WO
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mx-20 my-5 mb-10 sm:border border-gray-400 p-5 px-10 rounded-lg sm:shadow-xl">
          <div className="w-full mx-3 my-5 p-5 shadow-lg rounded-lg border border-gray-300">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Select LOI Date{" "}
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-span-1">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="department"
                  >
                    Related To
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="department"
                    type="text"
                    name="relatedTo"
                    value={formData.relatedTo}
                    onChange={handleInputChange}
                    placeholder="Related To"
                  />
                </div>
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="unit"
                  >
                    Retention(%)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="unit"
                    type="text"
                    name="retentionPercentage"
                    value={formData.retentionPercentage}
                    onChange={handleInputChange}
                    placeholder="Retention(%)"
                  />
                </div>
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="unit"
                  >
                    TDS(%)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="unit"
                    type="text"
                    value={formData.TDS}
                    name="TDS"
                    onChange={handleInputChange}
                    placeholder="TDS(%)"
                  />
                </div>
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="unit"
                  >
                    QC(%)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="unit"
                    type="text"
                    name="QC"
                    value={formData.QC}
                    onChange={handleInputChange}
                    placeholder="QC(%)"
                  />
                </div>
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="unit"
                  >
                    Payment Tenure(In Days)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="unit"
                    type="text"
                    name="paymentTenure"
                    value={formData.paymentTenure}
                    onChange={handleInputChange}
                    placeholder="Payment Tenure"
                  />
                </div>
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="unit"
                  >
                    Advance Amount
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="unit"
                    type="text"
                    name="advanceAmount"
                    value={formData.advanceAmount}
                    onChange={handleInputChange}
                    placeholder="Advance Amount"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="contact-number"
                >
                  Select Billing Address
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="contact-number"
                  type="text"
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleInputChange}
                  placeholder="Select Billing Address"
                />
              </div>
              {scheduleFor === "PO" && (
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="site"
                  >
                    Select Delivery Address
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="site"
                    type="Select Delivery Address"
                    placeholder="Business Bay"
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              <div className="w-full ">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="unit"
                >
                  Terms & Conditions
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="unit"
                  type="text"
                  rows={4}
                  value={formData.terms}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </div>
            </div>
            <h3 className="border-b text-center text-xl border-black mb-6 font-bold">
              ATTACHMENTS
            </h3>
            {/* <input type="file" /> */}
            <FileInputBox />
          </div>

          <div className="w-full mx-3 my-5 p-5 shadow-lg rounded-lg border border-gray-300">
            {activities.map((activity, index) => (
              <div key={activity.id} className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`activity-${index}`}
                    >
                      Item Details*
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`activity-${index}`}
                      type="text"
                      placeholder="Select Inventory"
                      name="inventory"
                      value={formData.inventory}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>
                        Select Inventory
                      </option>
                      <option value="activity1">Inventory</option>
                      <option value="activity2">test inventory</option>
                      <option value="activity3">test inventory</option>
                      <option value="activity4">Inventory</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      SAC/HSN Code*
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="Select SAC/HSN Code"
                      name="subActivity"
                    
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      Quantity*
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      value={formData.quantity}
                      placeholder="Quantity"
                      name="quantity"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      Select Unit*
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      value={formData.unit}
                      placeholder="Quantity"
                      name="unit"
                      onChange={handleInputChange}
                    >
                      <option value="">Select Unit</option>
                      <option value="Ea">Ea</option>
                      <option value="Piece">Piece</option>
                      <option value="Kg">KG</option>
                      <option value="Litre">Litre</option>
                      <option value="Box">Box</option>
                      <option value="Bottle">Bottle</option>
                      <option value="Packet">Packet</option>
                      <option value="Bag">Bag</option>
                      <option value="Qty">Qty</option>
                      <option value="Meter">Meter</option>
                      <option value="Sq.Mtr">Sq.Mtr</option>
                      <option value="Cu.Mtr">Cu.Mtr</option>
                      <option value="Feet">Feet</option>
                      <option value="Sq.Ft">Sq.Ft</option>
                      <option value="Cu.Ft">Cu.Ft</option>
                      <option value="Inches">Inches</option>
                      <option value="Sq.Inches">Sq.Inches</option>
                      <option value="Nos">Nos</option>
                      <option value="Pcs">Pcs</option>
                      <option value="Mm">Mm</option>
                      <option value="Size">Size</option>
                      <option value="Yards">Yards</option>
                      <option value="Sq.Yards">Sq.Yards</option>
                      <option value="Rs">Rs</option>
                      <option value="Acre">Acre</option>
                      <option value="Kilometer">Kilometer</option>
                      <option value="Miles">Miles</option>
                      <option value="Grams">Grams</option>
                      <option value="Brass">Brass</option>
                      <option value="Tonnes">Tonnes</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      Rate*
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="Rate"
                      value={formData.rate}
                      name="rate"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      CGST *
                    </label>
                    <div className="flex items-center gap-2">

                    
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="CGST Rate"
                      name="subActivity"
                      onChange={handleInputChange}
                    />
                     <input
                      className="shadow appearance-none border rounded bg-gray-100 w-full cursor-not-allowed py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="CGST Amt"
                      name="subActivity"
                      readOnly
                      onChange={handleInputChange}
                    />
                  </div>
                  </div>
                 
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      SGST *
                    </label>
                    <div className="flex items-center gap-2">

                    
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="SGST Rate"
                      name="subActivity"
                      onChange={handleInputChange}
                    />
                      <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="SGST Amt"
                      name="subActivity"
                      onChange={handleInputChange}
                    />
                  </div>
                  </div>
                 
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      IGST Amt*
                    </label>
                    <div className="flex items-center gap-2">

                    
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="SGST Amt"
                      name="subActivity"
                      onChange={handleInputChange}
                    />
                     <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="SGST Amt"
                      name="subActivity"
                      onChange={handleInputChange}
                    />
                  </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      IGST Amt*
                    </label>
                   
                  </div>
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      TCS Rate*
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="SGST Amt"
                      name="subActivity"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      TCS Amt*
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="SGST Amt"
                      name="subActivity"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      Tax Amt*
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="SGST Amt"
                      name="subActivity"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      Amount*
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="SGST Amt"
                      value={formData.Amount}
                      name="Amount"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`sub-activity-${index}`}
                    >
                      Total Amount*
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`sub-activity-${index}`}
                      type="text"
                      placeholder="SGST Amt"
                      name="subActivity"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => handleDeleteActivity(activity.id)}
                >
                  Delete
                </button>
              </div>
            ))}
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleAddActivity}
              >
                Add Inventory
              </button>
            </div>
          </div>

          <div className="sm:flex justify-center grid gap-2 my-5 ">
            <button
              className="bg-black text-white p-2 px-4 rounded-md font-medium"
              //   onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddLoi;
