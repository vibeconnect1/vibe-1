import React, { useEffect, useState } from "react";
import FileInputBox from "../../containers/Inputs/FileInputBox";
import { postGRN, getVendors, getInventory } from "../../api";
import { RiDeleteBin5Line } from "react-icons/ri";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const AddGrn = () => {
  const [vendors, setVendors] = useState([]);
  const themeColor = useSelector((state) => state.theme.color);
  const [stocks, setStocks] = useState([]);
  const [formData, setFormData] = useState({
    purchase_order: "",
    id: "",
    payment_mode: "",
    invoice_number: "",
    related_to: "",
    invoice_amount: "",
    invoice_date: "",
    posting_date: "",
    other_expenses: "",
    loading_expenses: "",
    adjustment_amount: "",
    notes: "",
  });

  const [inventoryForm, setInventoryForm] = useState([
    {
      inventoryType: "",
      expectedQuantity: "",
      receivedQuantity: "",
      approvedQuantity: "",
      rejectedQuantity: "",
      rate: "",
      cgstRate: "",
      cgstAmount: "",
      sgstRate: "",
      sgstAmount: "",
      igstRate: "",
      igstAmount: "",
      tcsRate: "",
      tcsAmount: "",
      totalTaxes: "",
      Amount: "",
      totalAmount: "",
    },
  ]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // get vendor data
  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const vendorRes = await getVendors();
        setVendors(vendorRes.data);
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
    fetchVendor();
    fetchInventory();
  }, []);

  //
  const handleChangeInventory = async (e, index) => {
    const { name, value } = e.target;
    const updatedInventory = [...inventoryForm];
    updatedInventory[index][name] = value;

    const inventory = updatedInventory[index];
    if (name === "approvedQuantity" || name === "rate") {
      const approvedQuantity =
        name === "approvedQuantity" ? value : inventory.approvedQuantity;

      const rate = name === "rate" ? value : inventory.rate;

      inventory.Amount = approvedQuantity * rate;
    }

    if (name === "cgstRate") {
      const rateValue = parseFloat(value);
      if (!isNaN(rateValue)) {
        inventory.cgstRate = rateValue;
        inventory.cgstAmount = (inventory.Amount * rateValue) / 100;
      }
    }

    if (name === "sgstRate") {
      const rateValue = parseFloat(value);
      if (!isNaN(rateValue)) {
        inventory.sgstRate = rateValue;
        inventory.sgstAmount = (inventory.Amount * rateValue) / 100;
      }
    }

    if (name === "igstRate") {
      const rateValue = parseFloat(value);
      if (!isNaN(rateValue)) {
        inventory.igstRate = rateValue;
        inventory.igstAmount = (inventory.Amount * rateValue) / 100;
      }
    }
    if (name === "tcsRate") {
      const rateValue = parseFloat(value);
      if (!isNaN(rateValue)) {
        inventory.tcsRate = rateValue;
        inventory.tcsAmount = (inventory.Amount * rateValue) / 100;
      }
    }

    inventory.approvedQuantity = inventory.receivedQuantity;
    inventory.approvedQuantity = Math.max(inventory.approvedQuantity - inventory.rejectedQuantity, 0);

    inventory.totalTaxes =
      inventory.cgstAmount +
      inventory.sgstAmount +
      inventory.igstAmount +
      inventory.tcsAmount;

    inventory.totalAmount =
      inventory.Amount +
      inventory.cgstAmount +
      inventory.sgstAmount +
      inventory.igstAmount +
      inventory.tcsAmount;

    setInventoryForm(updatedInventory);
  };

  const handleAddInventory = () => {
    setInventoryForm([...inventoryForm, {}]);
  };

  const handleDeleteInventory = (index) => {
    const removeInventories = [...inventoryForm];
    removeInventories.splice(index, 1);
    setInventoryForm(removeInventories);
  };

  // post grn
  const handleSubmit = async () => {
    const postForm = new FormData();
    postForm.append("grn_detail[loi_detail_id]", formData.purchase_order);
    postForm.append("grn_detail[vendor_id]", formData.id);
    postForm.append("grn_detail[payment_mode]", formData.payment_mode);
    postForm.append("grn_detail[invoice_number]", formData.invoice_number);
    postForm.append("grn_detail[related_to]", formData.related_to);
    postForm.append("grn_detail[invoice_amount]", formData.invoice_amount);
    postForm.append("grn_detail[invoice_date]", formData.invoice_date);
    postForm.append("grn_detail[posting_date]", formData.posting_date);
    postForm.append("grn_detail[other_expenses]", formData.other_expenses);
    postForm.append("grn_detail[loading_expenses]", formData.loading_expenses);
    postForm.append(
      "grn_detail[adjustment_amount]",
      formData.adjustment_amount
    );
    postForm.append("grn_detail[notes]", formData.notes);
    inventoryForm.forEach((inventoryItem, index) => {
      postForm.append(
        "grn_detail[inventory_details][][item_id]",
        inventoryItem.inventoryType
      );
      postForm.append(
        "grn_detail[inventory_details][][expected_quantity]",
        inventoryItem.expectedQuantity
      );
      postForm.append(
        "grn_detail[inventory_details][][received_quantity]",
        inventoryItem.receivedQuantity
      );
      postForm.append(
        "grn_detail[inventory_details][][approved_quantity]",
        inventoryItem.approvedQuantity
      );
      postForm.append(
        "grn_detail[inventory_details][][rejected_quantity]",
        inventoryItem.rejectedQuantity
      );
      postForm.append(
        "grn_detail[inventory_details][][rate]",
        inventoryItem.rate
      );
      postForm.append(
        "grn_detail[inventory_details][][csgt_rate]",
        inventoryItem.cgstRate
      );
      postForm.append(
        "grn_detail[inventory_details][][csgt_amt]",
        inventoryItem.cgstAmount
      );
      postForm.append(
        "grn_detail[inventory_details][][sgst_rate]",
        inventoryItem.sgstRate
      );
      postForm.append(
        "grn_detail[inventory_details][][sgst_amt]",
        inventoryItem.sgstAmount
      );
      postForm.append(
        "grn_detail[inventory_details][][igst_rate]",
        inventoryItem.igstRate
      );
      postForm.append(
        "grn_detail[inventory_details][][igst_amt]",
        inventoryItem.igstAmount
      );
      postForm.append(
        "grn_detail[inventory_details][][tcs_rate]",
        inventoryItem.tcsRate
      );
      postForm.append(
        "grn_detail[inventory_details][][tcs_amt]",
        inventoryItem.tcsAmount
      );
      postForm.append(
        "grn_detail[inventory_details][][tax_amt]",
        inventoryItem.totalTaxes
      );
      postForm.append(
        "grn_detail[inventory_details][][inventory_amount]",
        inventoryItem.Amount
      );
      postForm.append(
        "grn_detail[inventory_details][][total_amount]",
        inventoryItem.totalAmount
      );
    });
    console.log(postForm);
    try {
      const grnRes = await postGRN(postForm);
      toast.success("Grn Created Successfully");
      setFormData("");
      console.log(grnRes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <h2
          style={{ background: themeColor }}
          className="text-center text-xl font-bold p-2 bg-black rounded-md text-white"
        >
          Add GRN
        </h2>
        <div className="border flex flex-col my-5 mx-3 p-4 gap-4 rounded-md border-gray-400">
          <h2 className="text-lg border-black border-b font-semibold mx-5">
            GRN DETAILS
          </h2>
          <div className="flex  sm:flex-row flex-col justify-around mx-5 items-center">
            <div className="md:grid grid-cols-3 item-start gap-x-4 space-y-3 w-full">
              <div className="flex flex-col mt-3">
                <label htmlFor="" className="font-semibold mb-1 ">
                  Purchase Order :
                </label>
                <select
                  name="purchase_order"
                  value={formData.purchase_order}
                  id=""
                  onChange={handleChange}
                  className="border p-1 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Select Purchase Order</option>
                  <option value="grn10019">10019 - 4500000235</option>
                  <option value="grn10020">10020 - 4500000235</option>
                  <option value="grn10021">10021 - 4500000235</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold mb-1">
                  Supplier :
                </label>
                <select
                  name="id"
                  value={formData.id}
                  id=""
                  onChange={handleChange}
                  className="border p-1 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Select Supplier</option>
                  {vendors.map((vendor) => (
                    <option value={vendor.id} key={vendor.id}>
                      {vendor.vendor_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold mb-1">
                  Payment Mode
                </label>
                <select
                  name="payment_mode"
                  value={formData.payment_mode}
                  id=""
                  onChange={handleChange}
                  className="border p-1 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Select Payment Mode</option>
                  <option value="cheque">Cheque</option>
                  <option value="rtgs">RTGS</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold mb-1">
                  Invoice Number
                </label>
                <input
                  type="text"
                  name="invoice_number"
                  value={formData.invoice_number}
                  onChange={handleChange}
                  placeholder="Enter Invoice Number"
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold mb-1">
                  Related To
                </label>
                <input
                  type="text"
                  name="related_to"
                  value={formData.related_to}
                  onChange={handleChange}
                  placeholder="Enter Related To"
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold mb-1">
                  Invoice Amount
                </label>
                <input
                  type="text"
                  name="invoice_amount"
                  value={formData.invoice_amount}
                  onChange={handleChange}
                  placeholder="Enter Invoice Amount"
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold mb-1">
                  Invoice Date
                </label>
                <input
                  type="date"
                  name="invoice_date"
                  value={formData.invoice_date}
                  onChange={handleChange}
                  placeholder="Enter Date"
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold mb-1">
                  Posting Date
                </label>
                <input
                  type="date"
                  name="posting_date"
                  value={formData.posting_date}
                  onChange={handleChange}
                  placeholder="Enter Date"
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold mb-1">
                  Other Expense
                </label>
                <input
                  type="number"
                  name="other_expenses"
                  value={formData.other_expenses}
                  onChange={handleChange}
                  placeholder="Other Expense"
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold mb-1">
                  Loading Expense
                </label>
                <input
                  type="number"
                  name="loading_expenses"
                  value={formData.loading_expenses}
                  onChange={handleChange}
                  placeholder="Enter Loading Expense"
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold mb-1">
                  Adjustment Amount
                </label>
                <input
                  type="number"
                  name="adjustment_amount"
                  value={formData.adjustment_amount}
                  onChange={handleChange}
                  placeholder="Enter Adjustment Amount"
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col col-span-3">
                <label htmlFor="" className="font-semibold mb-1">
                  Notes
                </label>
                <textarea
                  name="notes"
                  id=""
                  cols="5"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Note"
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-5 p-4 gap-4">
            <h2 className=" text-lg border-b border-black font-semibold ">
              INVENTORY DETAILS
            </h2>
            <div>
              {inventoryForm.map((inventory, index) => (
                <div
                  key={index}
                  className="md:grid grid-cols-3 item-start gap-x-4 space-y-3  w-full border-b border-gray-500 my-3 pb-2"
                >
                  <div className="flex flex-col mt-3">
                    <label htmlFor="" className="font-semibold mb-1">
                      Inventory Type
                    </label>
                    <select
                      className="border p-1 px-4 border-gray-500 rounded-md"
                      id={`inventory-${index}`}
                      type="number"
                      placeholder="Select Inventory"
                      name="inventoryType"
                      value={inventory.inventoryType}
                      onChange={(e) => handleChangeInventory(e, index)}
                    >
                      <option value="">Select Inventory</option>
                      {stocks.map((stock) => (
                        <option value={stock.id} key={stock.id}>
                          {stock.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor={`risks-${index}`}
                      className="font-semibold mb-1"
                    >
                      Expected Quantity
                    </label>
                    <input
                      type="number"
                      id={`risks-${index}`}
                      name="expectedQuantity"
                      value={inventory.expectedQuantity}
                      onChange={(e) => handleChangeInventory(e, index)}
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
                      placeholder="Expected Quantity"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      Received Quantity
                    </label>
                    <input
                      type="number"
                      name="receivedQuantity"
                      value={inventory.receivedQuantity}
                      onChange={(e) => handleChangeInventory(e, index)}
                      placeholder="Received Quantity"
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
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      Approved Quantity
                    </label>
                    <input
                      type="number"
                      name="approvedQuantity"
                      value={inventory.approvedQuantity}
                      onChange={(e) => handleChangeInventory(e, index)}
                      placeholder="Approved Quantity"
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
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      Rejected Quantity
                    </label>
                    <input
                      type="number"
                      name="rejectedQuantity"
                      value={inventory.rejectedQuantity}
                      onChange={(e) => handleChangeInventory(e, index)}
                      placeholder="Rejected Quantity"
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
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor={`risks-${index}`}
                      className="font-semibold mb-1"
                    >
                      Rate
                    </label>
                    <input
                      type="number"
                      id={`risks-${index}`}
                      name="rate"
                      value={inventory.rate}
                      onChange={(e) => handleChangeInventory(e, index)}
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
                      placeholder="Enter Number"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      CGST Rate
                    </label>
                    <input
                      type="number"
                      name="cgstRate"
                      value={inventory.cgstRate}
                      onChange={(e) => handleChangeInventory(e, index)}
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
                      placeholder="Enter Number"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      CGST Amount
                    </label>
                    <input
                      type="number"
                      name="cgstAmount"
                      value={inventory.cgstAmount}
                      onChange={(e) => handleChangeInventory(e, index)}
                      placeholder="Enter Number"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      SGST Rate
                    </label>
                    <input
                      type="number"
                      name="sgstRate"
                      value={inventory.sgstRate}
                      onChange={(e) => handleChangeInventory(e, index)}
                      placeholder="Enter Number"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      SGST Amount
                    </label>
                    <input
                      type="number"
                      name="sgstAmount"
                      value={inventory.sgstAmount}
                      onChange={(e) => handleChangeInventory(e, index)}
                      placeholder="Enter Number"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      IGST Rate
                    </label>
                    <input
                      type="number"
                      name="igstRate"
                      value={inventory.igstRate}
                      onChange={(e) => handleChangeInventory(e, index)}
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
                      placeholder="Enter Number"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      IGST Amount
                    </label>
                    <input
                      type="number"
                      name="igstAmount"
                      value={inventory.igstAmount}
                      onChange={(e) => handleChangeInventory(e, index)}
                      placeholder="Enter Number"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      TCS Rate
                    </label>
                    <input
                      type="number"
                      name="tcsRate"
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
                      value={inventory.tcsRate}
                      onChange={(e) => handleChangeInventory(e, index)}
                      placeholder="Enter Number"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      TCS Amount
                    </label>
                    <input
                      type="number"
                      name="tcsAmount"
                      value={inventory.tcsAmount}
                      onChange={(e) => handleChangeInventory(e, index)}
                      placeholder="Enter Number"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      Total Taxes
                    </label>
                    <input
                      type="number"
                      name="totalTaxes"
                      value={inventory.totalTaxes}
                      onChange={(e) => handleChangeInventory(e, index)}
                      placeholder="Enter Number"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor={`risks-${index}`}
                      className="font-semibold mb-1"
                    >
                      Amount
                    </label>
                    <input
                      type="number"
                      id={`risks-${index}`}
                      name="Amount"
                      value={inventory.Amount}
                      onChange={(e) => handleChangeInventory(e, index)}
                      placeholder="Enter Number"
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
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold mb-1">
                      Total Amount
                    </label>
                    <input
                      type="number"
                      name="totalAmount"
                      value={inventory.totalAmount}
                      onChange={(e) => handleChangeInventory(e, index)}
                      placeholder="Enter Total Amount"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="col-span-3 flex justify-end mb-1">
                    <button
                      onClick={() => handleDeleteInventory(inventory.id)}
                      className="ml-2  text-black rounded"
                    >
                      <RiDeleteBin5Line size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <button
                className="bg-black text-white p-2 rounded-md text-base w-32"
                onClick={handleAddInventory}
              >
                Add Batch
              </button>
            </div>
          </div>
          <div className="my-3 mx-5">
            <h2 className=" text-lg border-black border-b font-semibold text-start my-5">
              ATTACHMENTS*
            </h2>
            <FileInputBox />
          </div>
        </div>
        <div>
          {/* <div className="my-3 mx-5 text-end">
          <button className="bg-black text-white p-2 text-small rounded-md ">
            Total Amount:- 0.00
          </button>
        </div> */}
          <div className="my-10 mx-5 text-center">
            <button
              className="bg-black text-white px-8  py-2 text-small rounded-md "
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddGrn;
