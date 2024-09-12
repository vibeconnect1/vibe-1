import React, { useEffect, useState } from "react";
import FileInputBox from "../../containers/Inputs/FileInputBox";
import { editGRN, getVendors, getGRNDetails } from "../../api";
import { RiDeleteBin5Line } from "react-icons/ri";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
const EditGrn = () => {
  const [vendors, setVendors] = useState([]);
  const { id } = useParams();
  const [batch, setBatch] = useState([{ id: 1, value: "" }]);
  const themeColor = useSelector((state) => state.theme.color);
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
  // get grn data
  useEffect(() => {
    const fetchGRN = async () => {
      try {
        const resp = await getGRNDetails(id);
        setFormData(resp.data);
        fetchVendor();
      } catch (error) {
        console.log(error);
      }
    };
    // get vendor data
    const fetchVendor = async () => {
        try {
          const vendorRes = await getVendors();
          setVendors(vendorRes.data);
        } catch (error) {
          console.log(error);
        }
      };
    fetchGRN();
  }, []);

  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // edit grn
  const handleSubmit = async () => {
    const editForm = new FormData();
    editForm.append("grn_detail[loi_detail_id]", formData.purchase_order);
    editForm.append("grn_detail[vendor_id]", formData.id);
    editForm.append("grn_detail[payment_mode]", formData.payment_mode);
    editForm.append("grn_detail[invoice_number]", formData.invoice_number);
    editForm.append("grn_detail[related_to]", formData.related_to);
    editForm.append("grn_detail[invoice_amount]", formData.invoice_amount);
    editForm.append("grn_detail[invoice_date]", formData.invoice_date);
    editForm.append("grn_detail[posting_date]", formData.posting_date);
    editForm.append("grn_detail[other_expenses]", formData.other_expenses);
    editForm.append("grn_detail[loading_expenses]", formData.loading_expenses);
    editForm.append(
      "grn_detail[adjustment_amount]",
      formData.adjustment_amount
    );
    editForm.append("grn_detail[notes]", formData.notes);

    try {
      const grnRes = await editGRN(editForm, id);
      toast.success("Grn Edited Successfully");
      setFormData("");
      console.log(grnRes);
    } catch (error) {
      console.log(error);
    }
  };

  // add batch section
  const addBatch = () => {
    setBatch([...batch, { id: batch.length + 1, value: "" }]);
  };

  const removeBatch = (id) => {
    setBatch(batch.filter((section) => section.id !== id));
  };
  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <h2
          style={{ background: themeColor }}
          className="text-center text-xl font-bold p-2 bg-black rounded-full text-white"
        >
          Edit GRN
        </h2>
        <div className="border-2 flex flex-col my-5 mx-3 p-4 gap-4 rounded-md border-gray-400">
          <h2 className="text-lg border-black font-semibold text-center">
            GRN DETAILS
          </h2>
          <div className="flex sm:flex-row flex-col justify-around items-center">
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
        </div>
        <div className="border-2 flex flex-col my-5 mx-3 p-4 gap-4 rounded-md border-gray-400">
          <h2 className=" text-lg border-black font-semibold text-center">
            INVENTORY DETAILS
          </h2>
          <div>
            {batch.map((section, index) => (
              <div
                key={section.id}
                className="md:grid grid-cols-3 item-start gap-x-4 space-y-3  w-full border-b border-gray-500 my-3 pb-2"
              >
                <div className="flex flex-col mt-3">
                  <label htmlFor="" className="font-semibold mb-1">
                    Inventory Type
                  </label>
                  <select
                    name=""
                    id=""
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  >
                    <option value="">Inventory Type</option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="" className="font-semibold mb-1">
                    Expected Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="4"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    Received Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="Received Quantity"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    Approved Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="Approved Quantity"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    Rejected Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="Rejected Quantity"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    Rate
                  </label>
                  <input
                    type="text"
                    placeholder="9300.0"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    CGST Rate
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    CGST Amount
                  </label>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    SGST Rate
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    SGST Amount
                  </label>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    IGST Rate
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    IGST Amount
                  </label>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    IGST Amount
                  </label>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    TCS Rate
                  </label>
                  <input
                    type="text"
                    placeholder="0"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    TCS Amount
                  </label>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    Total Taxes
                  </label>
                  <input
                    type="text"
                    placeholder="0"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    Amount
                  </label>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold mb-1">
                    Total Amount
                  </label>
                  <input
                    type="text"
                    placeholder="0"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="col-span-3 flex justify-end mb-1">
                  <button
                    onClick={() => removeBatch(section.id)}
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
              onClick={addBatch}
            >
              Add Batch
            </button>
          </div>
        </div>
        <div className="my-3 mx-5">
          <h2 className=" text-lg border-black font-semibold text-start my-5">
            ATTACHMENTS*
          </h2>
          <FileInputBox />
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

export default EditGrn