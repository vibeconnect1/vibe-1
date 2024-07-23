import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FileInputBox from "../../containers/Inputs/FileInputBox";
import {
  getAllAddress,
  getInventory,
  getStandardUnits,
  getVendors,
  postLOI,
  postLOIItems,
} from "../../api";
import { getItemInLocalStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AddMatertialPR = () => {
  const themeColor = useSelector((state) => state.theme.color);
  const [showEntityList, setShowEntityList] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [units, setUnits] = useState([]);
  const [activities, setActivities] = useState([
    {
      inventory: "",
      SACCode: "",
      quantity: "",
      unit: "",
      expectedDate: "",
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
    },
  ]);
  const [formData, setFormData] = useState({
    vendorId: "",
    type: "PR",
    date: "",
    billingAddress: "",
    deliveryAddress: "",
    transportation: "",
    retention: "",
    tds: "",
    qc: "",
    paymentTenure: "",
    terms: "",
    advanceAmount: "",
    relatedTo: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const fetchStandardUnits = async () => {
      const unitResp = await getStandardUnits();
      setUnits(unitResp.data);
    };
    fetchStandardUnits();
  }, []);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedActivities = [...activities];
    updatedActivities[index][name] = value;

    const activity = updatedActivities[index];
    if (name === "quantity" || name === "rate") {
      const quantity = name === "quantity" ? value : activity.quantity;
      const rate = name === "rate" ? value : activity.rate;
      activity.Amount = quantity * rate;

      const cgstRate = parseFloat(activity.cgstRate);
      const sgstRate = parseFloat(activity.sgstRate);
      if (!isNaN(cgstRate)) {
        activity.cgstAmount = (activity.Amount * cgstRate) / 100;
      }
      if (!isNaN(sgstRate)) {
        activity.sgstAmount = (activity.Amount * sgstRate) / 100;
      }
    }

    if (name === "cgstRate" || name === "sgstRate") {
      const rateValue = parseFloat(value);
      if (!isNaN(rateValue)) {
        activity.cgstRate = rateValue;
        activity.sgstRate = rateValue;
        activity.cgstAmount = (activity.Amount * rateValue) / 100;
        activity.sgstAmount = (activity.Amount * rateValue) / 100;
      }
    }
    if (name === "igstRate") {
      const rateValue = parseFloat(value);
      if (!isNaN(rateValue)) {
        activity.igstRate = rateValue;
        activity.igstAmount = (activity.Amount * rateValue) / 100;
      }
    }
    if (name === "TCSRate") {
      const rateValue = parseFloat(value);
      if (!isNaN(rateValue)) {
        activity.TCSRate = rateValue;
        activity.TCSAmount = (activity.Amount * rateValue) / 100;
      }
    }

    activity.TaxAmount =
      activity.cgstAmount +
      activity.sgstAmount +
      activity.igstAmount +
      activity.TCSAmount;
    // activity.TaxAmount =
    //   parseFloat(activity.cgstAmount) +
    //   parseFloat(activity.sgstAmount) +
    //   parseFloat(activity.igstAmount) +
    //   parseFloat(activity.TCSAmount);
    activity.Total =
      activity.Amount +
      activity.cgstAmount +
      activity.sgstAmount +
      activity.igstAmount +
      activity.TCSAmount;

    setActivities(updatedActivities);
  };
  const handleAddActivity = () => {
    setActivities([
      ...activities,
      {
        inventory: "",
        SACCode: "",
        productDescription: "",
        quantity: "",
        expectedDate: "",
        rate: "",
        Amount: "",
      },
    ]);
  };
  console.log("activities", activities);
  console.log("formData", formData);
  const handleDeleteActivity = (index) => {
    const removeActivities = [...activities];
    removeActivities.splice(index, 1);
    setActivities(removeActivities);
  };

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const supplierResp = await getVendors();
        setSuppliers(supplierResp.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchAddress = async () => {
      try {
        const addressResp = await getAllAddress();
        setAddresses(addressResp.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchInventory = async () => {
      try {
        const inventoryResp = await getInventory();
        console.log(inventoryResp);
        setStocks(inventoryResp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAddress();
    fetchSuppliers();
    fetchInventory();
  }, []);
  const siteId = getItemInLocalStorage("SITEID");
  const userId = getItemInLocalStorage("UserId");
  const navigate = useNavigate();
  const handleMaterialSubmit = async () => {
    if (
      formData.date === "" ||
      formData.deliveryAddress === "" ||
      formData.billingAddress === ""
    ) {
      return toast.error("Please provide the required details");
    }

    const sendData = new FormData();
    sendData.append("loi_detail[site_id]", siteId);
    sendData.append("loi_detail[created_by_id]", userId);
    sendData.append("loi_detail[loi_type]", formData.type);
    sendData.append("loi_detail[loi_date]", formData.date);
    sendData.append("loi_detail[retention]", formData.retentionPercentage);
    sendData.append("loi_detail[related_to]", formData.relatedTo);
    sendData.append(
      "loi_detail[transportation_amount]",
      formData.transportation
    );
    sendData.append("loi_detail[tds]", formData.tds);
    sendData.append("loi_detail[qc]", formData.qc);
    sendData.append("loi_detail[payment_tenure]", formData.paymentTenure);
    sendData.append("loi_detail[vendor_id]", formData.vendorId);
    sendData.append("loi_detail[billing_address_id]", formData.billingAddress);
    sendData.append(
      "loi_detail[delivery_address_id]",
      formData.deliveryAddress
    );
    sendData.append("loi_detail[terms]", formData.terms);
    activities.forEach((item, index) => {
      sendData.append(
        `loi_detail[loi_items][${index}][item_id]`,
        item.inventory
      );
      sendData.append(
        `loi_detail[loi_items][${index}][sac_code]`,
        item.SACCode
      );
      sendData.append(
        `loi_detail[loi_items][${index}][quantity]`,
        item.quantity
      );
      sendData.append(
        `loi_detail[loi_items][${index}][expected_date]`,
        item.expectedDate
      );
      sendData.append(
        `loi_detail[loi_items][${index}][standard_unit_id]`,
        item.unit
      );
      sendData.append(`loi_detail[loi_items][${index}][rate]`, item.rate);
      sendData.append(
        `loi_detail[loi_items][${index}][csgt_rate]`,
        item.cgstRate
      );
      sendData.append(
        `loi_detail[loi_items][${index}][csgt_amt]`,
        item.cgstAmount
      );
      sendData.append(
        `loi_detail[loi_items][${index}][sgst_rate]`,
        item.sgstRate
      );
      sendData.append(
        `loi_detail[loi_items][${index}][sgst_amt]`,
        item.sgstAmount
      );
      sendData.append(
        `loi_detail[loi_items][${index}][igst_rate]`,
        item.igstRate
      );
      sendData.append(
        `loi_detail[loi_items][${index}][igst_amt]`,
        item.igstAmount
      );
      sendData.append(
        `loi_detail[loi_items][${index}][tcs_rate]`,
        item.TCSRate
      );
      sendData.append(
        `loi_detail[loi_items][${index}][tcs_amt]`,
        item.TCSAmount
      );
      sendData.append(
        `loi_detail[loi_items][${index}][tax_amt]`,
        item.TaxAmount
      );
      sendData.append(`loi_detail[loi_items][${index}][amount]`, item.Amount);
      sendData.append(
        `loi_detail[loi_items][${index}][total_amount]`,
        item.Total
      );
    });

    try {
      const resp = await postLOI(sendData);
      // const loiDetailId = resp.data.id;
      toast.success("Purchase Requisition Created Successfully");
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
    //   for (const item of activities) {
    //     const LOIData = new FormData();
    //     LOIData.append("loi_item[loi_detail_id]", loiDetailId);
    //     LOIData.append("loi_item[item_id]", item.inventory);
    //     LOIData.append("loi_item[sac_code]", item.SACCode);
    //     LOIData.append("loi_item[quantity]", item.quantity);
    //     LOIData.append("loi_item[expected_date]", item.expectedDate);
    //     LOIData.append("loi_item[standard_unit_id]", item.unit);
    //     LOIData.append("loi_item[rate]", item.rate);
    //     LOIData.append("loi_item[csgt_rate]", item.cgstRate);
    //     LOIData.append("loi_item[csgt_amt]", item.cgstAmount);
    //     LOIData.append("loi_item[sgst_rate]", item.sgstRate);
    //     LOIData.append("loi_item[sgst_amt]", item.sgstAmount);
    //     LOIData.append("loi_item[igst_rate]", item.igstRate);
    //     LOIData.append("loi_item[igst_amt]", item.igstAmount);
    //     LOIData.append("loi_item[tcs_rate]", item.TCSRate);
    //     LOIData.append("loi_item[tcs_amt]", item.TCSAmount);
    //     LOIData.append("loi_item[tax_amt]", item.TaxAmount);
    //     LOIData.append("loi_item[amount]", item.Amount);
    //     LOIData.append("loi_item[total_amount]", item.Total);

    //     const loiItemResp = await postLOIItems(LOIData);
    //     console.log(loiItemResp);
    //   }
    //   navigate("/admin/purchase");
  };

  return (
    <section className="flex">
      <Navbar />

      <div className="p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        <div className="">
          <h2
            style={{ background: themeColor }}
            className="text-center text-xl font-bold p-2 rounded-full text-white"
          >
            New Material PR
          </h2>
          <div className="md:mx-20 my-5 mb-10 md:border border-gray-400 md:p-5 md:px-10 rounded-lg sm:shadow-xl">
            <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
              SUPPLIER DETAILS
            </h2>
            {/* <h1 className="font-semibold">Requestor Details :</h1> */}

            <div className="w-full md:mx-3 my-5 p-5 md:shadow-lg rounded-lg md:border border-gray-300">
              {/* Requestor details input fields */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="supplier"
                    >
                      Supplier<span className="text-red-500">*</span>
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="supplier"
                      value={formData.vendorId}
                      name="vendorId"
                      onChange={handleChange}
                    >
                      <option value="">Select Supplier</option>
                      {suppliers.map((supplier) => (
                        <option value={supplier.id} key={supplier.id}>
                          {supplier.company_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* <div className="col-span-1">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="plant-detail"
                  >
                    Plant Detail*
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="plant-detail"
                  >
                    <option>Select Plant Detail</option>
                  
                  </select>
                </div> */}

                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="pr-date"
                    >
                      PR Date<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="pr-date"
                      type="date"
                      value={formData.date}
                      name="date"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="billing-address"
                    >
                      Billing Address <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="billing-address"
                      value={formData.billingAddress}
                      onChange={handleChange}
                      name="billingAddress"
                    >
                      <option value="">Select Billing Address</option>
                      {addresses.map((address) => (
                        <option value={address.id} key={address.id}>
                          {address.address_title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="delivery-address"
                    >
                      Delivery Address <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="delivery-address"
                      value={formData.deliveryAddress}
                      name="deliveryAddress"
                      onChange={handleChange}
                    >
                      <option value={""}>Select Delivery Address</option>
                      {addresses.map((address) => (
                        <option value={address.id} key={address.id}>
                          {address.address_title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="transportation"
                    >
                      Transportation Amount
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="transportation"
                      type="text"
                      value={formData.transportation}
                      name="transportation"
                      onChange={handleChange}
                      placeholder="Enter Amount"
                      pattern="[0-9]*"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== "Backspace" &&
                          e.key !== "ArrowLeft" &&
                          e.key !== "ArrowRight"
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="retention"
                    >
                      Retention(%)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="retention"
                      type="text"
                      placeholder="Enter Retention Percentage"
                      value={formData.retention}
                      name="retention"
                      onChange={handleChange}
                      pattern="[0-9]*"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== "Backspace" &&
                          e.key !== "ArrowLeft" &&
                          e.key !== "ArrowRight"
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="tds"
                    >
                      TDS(%)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="tds"
                      type="text"
                      placeholder="Enter TDS Percentage"
                      value={formData.tds}
                      name="tds"
                      onChange={handleChange}
                      pattern="[0-9]*"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== "Backspace" &&
                          e.key !== "ArrowLeft" &&
                          e.key !== "ArrowRight"
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="qc"
                    >
                      QC(%)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="qc"
                      type="text"
                      placeholder="Enter QC %"
                      value={formData.qc}
                      onChange={handleChange}
                      name="qc"
                      pattern="[0-9]*"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== "Backspace" &&
                          e.key !== "ArrowLeft" &&
                          e.key !== "ArrowRight"
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="payment-tenure"
                    >
                      Payment Tenure(In Days)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="payment-tenure"
                      type="text"
                      placeholder="Enter Payment Tenure"
                      value={formData.paymentTenure}
                      name="paymentTenure"
                      onChange={handleChange}
                      pattern="[0-9]*"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== "Backspace" &&
                          e.key !== "ArrowLeft" &&
                          e.key !== "ArrowRight"
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="advance-amount"
                    >
                      Advance Amount
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="advance-amount"
                      type="text"
                      placeholder="Enter Amount"
                      value={formData.advanceAmount}
                      name="advanceAmount"
                      onChange={handleChange}
                      pattern="[0-9]*"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== "Backspace" &&
                          e.key !== "ArrowLeft" &&
                          e.key !== "ArrowRight"
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="related-to"
                    >
                      Related To <span className="text-red-500">*</span>
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="related-to"
                      type="text"
                      placeholder="Related To"
                      value={formData.relatedTo}
                      name="relatedTo"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="terms-conditions"
                  >
                    Terms & Conditions <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="terms-conditions"
                    placeholder="Enter Terms & Conditions"
                    value={formData.terms}
                    name="terms"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>

            <div></div>

            <div className="w-full mx-3 my-5 md:p-5 md:shadow-lg rounded-lg md:border border-gray-300">
              {/* Permit details input fields */}
              <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
                ITEM DETAILS
              </h2>

              <div className="w-full mx-3 my-5 p-5 md:shadow-lg rounded-lg md:border border-gray-300">
                {activities.map((activity, index) => (
                  <div key={index} className="mb-4">
                    <div className="grid  md:grid-cols-3 gap-4 mb-4">
                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`activity-${index}`}
                        >
                          Item Details<span className="text-red-500">*</span>
                        </label>
                        <select
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`activity-${index}`}
                          type="text"
                          placeholder="Select Inventory"
                          name="inventory"
                          value={activity.inventory}
                          onChange={(e) => handleInputChange(e, index)}
                        >
                          <option value="">Select Inventory</option>
                          {stocks.map((stock) => (
                            <option value={stock.id} key={stock.id}>
                              {stock.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`sub-activity-${index}`}
                        >
                          SAC/HSN Code
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`sub-activity-${index}`}
                          type="text"
                          placeholder="SAC/HSN Code"
                          name="SACCode"
                          value={activity.SACCode}
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      </div>

                      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> */}
                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`hazard-category-${index}`}
                        >
                          Product Description
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`hazard-category-${index}`}
                          type="text"
                          placeholder="Product Description"
                          name="productDescription"
                          value={activity.productDescription}
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      </div>
                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`risks-${index}`}
                        >
                          Quantity<span className="text-red-500">*</span>
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`risks-${index}`}
                          type="text"
                          placeholder="Enter Quantity"
                          name="quantity"
                          value={activity.quantity}
                          onChange={(e) => handleInputChange(e, index)}
                          pattern="[0-9]*"
                          onKeyDown={(e) => {
                            if (
                              !/[0-9]/.test(e.key) &&
                              e.key !== "Backspace" &&
                              e.key !== "ArrowLeft" &&
                              e.key !== "ArrowRight"
                            ) {
                              e.preventDefault();
                            }
                          }}
                        />
                      </div>
                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`sub-activity-${index}`}
                        >
                          Select Unit
                        </label>
                        <select
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`sub-activity-${index}`}
                          type="text"
                          value={activity.unit}
                          placeholder="Quantity"
                          name="unit"
                          onChange={(e) => handleInputChange(e, index)}
                        >
                          <option value="">Select Unit</option>
                          {units.map((unit) => (
                            <option value={unit.id} key={unit.id}>
                              {unit.unit_name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`risks-${index}`}
                        >
                          Expected Date<span className="text-red-500">*</span>
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`risks-${index}`}
                          type="date"
                          placeholder="Enter date"
                          name="expectedDate"
                          // min={}
                          value={activity.expectedDate}
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      </div>
                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`risks-${index}`}
                        >
                          Rate<span className="text-red-500">*</span>
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`risks-${index}`}
                          type="text"
                          placeholder="Enter Rate"
                          name="rate"
                          value={activity.rate}
                          onChange={(e) => handleInputChange(e, index)}
                          pattern="[0-9]*"
                          onKeyDown={(e) => {
                            if (
                              !/[0-9]/.test(e.key) &&
                              e.key !== "Backspace" &&
                              e.key !== "ArrowLeft" &&
                              e.key !== "ArrowRight"
                            ) {
                              e.preventDefault();
                            }
                          }}
                        />
                      </div>
                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`sub-activity-${index}`}
                        >
                          CGST
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={`sub-activity-${index}`}
                            type="text"
                            placeholder="CGST Rate(%)"
                            value={activity.cgstRate}
                            name="cgstRate"
                            onChange={(e) => handleInputChange(e, index)}
                            pattern="[0-9]*"
                            onKeyDown={(e) => {
                              if (
                                !/[0-9]/.test(e.key) &&
                                e.key !== "Backspace" &&
                                e.key !== "ArrowLeft" &&
                                e.key !== "ArrowRight"
                              ) {
                                e.preventDefault();
                              }
                            }}
                          />
                          <input
                            className="shadow appearance-none border rounded bg-gray-100 w-full cursor-not-allowed py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={`sub-activity-${index}`}
                            type="text"
                            placeholder="CGST Amt"
                            name="cgstAmount"
                            value={activity.cgstAmount}
                            readOnly
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </div>
                      </div>

                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`sub-activity-${index}`}
                        >
                          SGST
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={`sub-activity-${index}`}
                            type="text"
                            placeholder="SGST Rate"
                            value={activity.sgstRate}
                            name="sgstRate"
                            onChange={(e) => handleInputChange(e, index)}
                            pattern="[0-9]*"
                            onKeyDown={(e) => {
                              if (
                                !/[0-9]/.test(e.key) &&
                                e.key !== "Backspace" &&
                                e.key !== "ArrowLeft" &&
                                e.key !== "ArrowRight"
                              ) {
                                e.preventDefault();
                              }
                            }}
                          />
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 cursor-not-allowed text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={`sub-activity-${index}`}
                            type="text"
                            placeholder="SGST Amt"
                            value={activity.sgstAmount}
                            name="sgstAmount"
                            readOnly
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </div>
                      </div>
                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`sub-activity-${index}`}
                        >
                          IGST
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                            id={`sub-activity-${index}`}
                            type="text"
                            placeholder="IGST rate(%)"
                            value={activity.igstRate}
                            name="igstRate"
                            onChange={(e) => handleInputChange(e, index)}
                            pattern="[0-9]*"
                            onKeyDown={(e) => {
                              if (
                                !/[0-9]/.test(e.key) &&
                                e.key !== "Backspace" &&
                                e.key !== "ArrowLeft" &&
                                e.key !== "ArrowRight"
                              ) {
                                e.preventDefault();
                              }
                            }}
                          />
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 cursor-not-allowed text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={`sub-activity-${index}`}
                            type="text"
                            placeholder="IGST Amt"
                            value={activity.igstAmount}
                            name="igstAmount"
                            readOnly
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </div>
                      </div>
                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`sub-activity-${index}`}
                        >
                          TCS Rate
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={`sub-activity-${index}`}
                            type="text"
                            placeholder="TCS rate(%)"
                            name="TCSRate"
                            value={activity.TCSRate}
                            onChange={(e) => handleInputChange(e, index)}
                            pattern="[0-9]*"
                            onKeyDown={(e) => {
                              if (
                                !/[0-9]/.test(e.key) &&
                                e.key !== "Backspace" &&
                                e.key !== "ArrowLeft" &&
                                e.key !== "ArrowRight"
                              ) {
                                e.preventDefault();
                              }
                            }}
                          />
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 cursor-not-allowed text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={`sub-activity-${index}`}
                            type="text"
                            placeholder="TCS Amt"
                            name="TCSAmount"
                            value={activity.TCSAmount}
                            readOnly
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </div>
                      </div>

                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`sub-activity-${index}`}
                        >
                          Tax Amount
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`sub-activity-${index}`}
                          type="text"
                          placeholder="Tax Amount"
                          name="TaxAmount"
                          value={activity.TaxAmount}
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      </div>
                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`risks-${index}`}
                        >
                          Amount
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`risks-${index}`}
                          type="text"
                          placeholder="Enter Amount"
                          name="Amount"
                          value={activity.Amount}
                          onChange={(e) => handleInputChange(e, index)}
                          pattern="[0-9]*"
                          onKeyDown={(e) => {
                            if (
                              !/[0-9]/.test(e.key) &&
                              e.key !== "Backspace" &&
                              e.key !== "ArrowLeft" &&
                              e.key !== "ArrowRight"
                            ) {
                              e.preventDefault();
                            }
                          }}
                        />
                      </div>
                      <div className="col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`sub-activity-${index}`}
                        >
                          Total Amount
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`sub-activity-${index}`}
                          type="text"
                          placeholder="Total"
                          name="Total"
                          value={activity.Total}
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      </div>
                      {/* </div> */}
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
            </div>
            {/* <div className="flex justify-end">
            <button className="bg-black text-white p-2 px-4 rounded-md font-medium">
              Total Amount : {activitie}
            </button>
          </div> */}
            <h3 className="border-b text-center text-xl border-black mb-6 font-bold">
              ATTACHMENTS
            </h3>

            <FileInputBox />

            {/* Submit button */}
            <div className="sm:flex justify-center grid gap-2 my-5 ">
              <button
                className="bg-black text-white p-2 px-4 rounded-md font-medium"
                onClick={handleMaterialSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddMatertialPR;
