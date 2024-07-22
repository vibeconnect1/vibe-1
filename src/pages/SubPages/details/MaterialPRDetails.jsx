import React, { useEffect, useState } from "react";
import { IoMdPrint } from "react-icons/io";
import { MdFeed } from "react-icons/md";
import Table from "../../../components/table/Table";
import { getLOIDetails } from "../../../api";
import { useParams } from "react-router-dom";
import numberToWordsIndian from "../../../utils/NumbersToWords";

const MaterialPRDetails = () => {
  const { id } = useParams();
  const [details, seDetails] = useState({});
  const [loiItems, setLoiItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState("");
  const [taxAmount, setTaxAmount] = useState("");
  const [netAmt, setNetAmt] = useState("");
  const [netAmtInWords, setNetAmtInWords] = useState("");
  const formatAmount = (amount) => {
    return amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  useEffect(() => {
    const fetchLOIDetails = async () => {
      try {
        const loiResp = await getLOIDetails(id);
        console.log(loiResp.data);
        setLoiItems(loiResp.data.loi_items);
        seDetails(loiResp.data);

        const totalAmount = loiResp.data.loi_items
          ? loiResp.data.loi_items.reduce(
              (sum, item) => sum + (Number(item.amount) || 0),
              0
            )
          : " ";

        const taxAmt = loiResp.data.loi_items
          ? loiResp.data.loi_items.reduce(
              (sum, item) => sum + (Number(item.tax_amt) || 0),
              0
            )
          : " ";

        setTotalAmount(formatAmount(totalAmount));

        setTaxAmount(formatAmount(taxAmt));
        const netAmount = totalAmount + taxAmt;
        setNetAmt(formatAmount(netAmount));
        setNetAmtInWords(numberToWordsIndian(netAmount));
      } catch (error) {
        console.log(error);
      }
    };
    fetchLOIDetails();
  }, []);

  const column = [
    { name: "Sr.No", selector: (row, index) => index + 1, sortable: true },
    { name: "Item Details", selector: (row) => row.item_name, sortable: true },
    { name: "SAC/HSN Code", selector: (row) => row.sac_code, sortable: true },

    { name: "Quantity", selector: (row) => row.quantity, sortable: true },
    { name: "Unit", selector: (row) => row.standard_unit_name, sortable: true },
    { name: "Rate", selector: (row) => row.rate, sortable: true },
    { name: "CGST(%)", selector: (row) => row.csgt_rate, sortable: true },
    { name: "CGST AMT", selector: (row) => row.csgt_amt, sortable: true },
    {
      name: "SGST(%)",
      selector: (row) => row.sgst_rate,
      sortable: true,
    },
    {
      name: "SGST AMT",
      selector: (row) => row.sgst_amt,
      sortable: true,
    },
    { name: "IGST(%)", selector: (row) => row.igst_rate, sortable: true },
    { name: "IGST AMT", selector: (row) => row.igst_amt, sortable: true },
    { name: "TCS(%)", selector: (row) => row.tcs_rate, sortable: true },
    { name: "TCS AMT", selector: (row) => row.tcs_amt, sortable: true },

    { name: "Tax Amount", selector: (row) => row.tax_amt, sortable: true },
    {
      name: "Total Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
  ];
 
  const columnDebitNote = [
    { name: "ID", selector: (row) => row.ID, sortable: true },
    { name: "Amount", selector: (row) => row.Amount, sortable: true },
    { name: "Description", selector: (row) => row.Description, sortable: true },
    { name: "Approved", selector: (row) => row.Approved, sortable: true },
    { name: "Approved On", selector: (row) => row.ApprovedOn, sortable: true },
    { name: "Approved By", selector: (row) => row.ApprovedBy, sortable: true },
    { name: "Created On", selector: (row) => row.CreatedOn, sortable: true },
    { name: "Created By", selector: (row) => row.CreatedBy, sortable: true },
    { name: "Attachment", selector: (row) => row.QCAmount, sortable: true },
  ];
  const dataDebitNote = [
    {
      id: 1,
      ID: "",
      Amount: "",
      Description: "",
      Approved: "",
      ApprovedOn: "",
      ApprovedBy: "",
      CreatedOn: "",
      CreatedBy: "",
      Attachment: "",
    },
  ];
  const columnPayment = [
    { name: "Action", selector: (row) => row.Action, sortable: true },
    { name: "Amount", selector: (row) => row.Amount, sortable: true },
    {
      name: "Payment Mode",
      selector: (row) => row.PaymentMode,
      sortable: true,
    },
    {
      name: "Transaction Number",
      selector: (row) => row.TransactionNumber,
      sortable: true,
    },
    { name: "Status	", selector: (row) => row.Status, sortable: true },
    {
      name: "Payment Date",
      selector: (row) => row.PaymentDate,
      sortable: true,
    },
    { name: "Note", selector: (row) => row.Note, sortable: true },
    {
      name: "Date of Entry",
      selector: (row) => row.DateofEntry,
      sortable: true,
    },
    { name: "Actions", selector: (row) => row.Actions, sortable: true },
  ];
  const dataPayment = [
    {
      id: 1,
      Action: "",
      Amount: "",
      PaymentMode: "",
      TransactionNumber: "",
      Status: "",
      PaymentDate: "",
      Note: "",
      DateofEntry: "",
      Actions: "",
    },
  ];
  const columnRetentionPayment = [
    { name: "Action", selector: (row) => row.Action, sortable: true },
    { name: "Amount", selector: (row) => row.Amount, sortable: true },
    {
      name: "Payment Mode",
      selector: (row) => row.PaymentMode,
      sortable: true,
    },
    {
      name: "Transaction Number",
      selector: (row) => row.TransactionNumber,
      sortable: true,
    },
    { name: "Status	", selector: (row) => row.Status, sortable: true },
    {
      name: "Payment Date",
      selector: (row) => row.PaymentDate,
      sortable: true,
    },
    { name: "Note", selector: (row) => row.Note, sortable: true },
    {
      name: "Date of Entry",
      selector: (row) => row.DateofEntry,
      sortable: true,
    },
    { name: "Actions", selector: (row) => row.Actions, sortable: true },
  ];
  const dataRetentionPayment = [
    {
      id: 1,
      Action: "",
      Amount: "",
      PaymentMode: "",
      TransactionNumber: "",
      Status: "",
      PaymentDate: "",
      Note: "",
      DateofEntry: "",
      Actions: "",
    },
  ];
  const columnQCPayment = [
    { name: "Amount", selector: (row) => row.Amount, sortable: true },
    {
      name: "Payment Mode",
      selector: (row) => row.PaymentMode,
      sortable: true,
    },
    {
      name: "Transaction Number",
      selector: (row) => row.TransactionNumber,
      sortable: true,
    },
    { name: "Status	", selector: (row) => row.Status, sortable: true },
    {
      name: "Payment Date",
      selector: (row) => row.PaymentDate,
      sortable: true,
    },
    { name: "Note", selector: (row) => row.Note, sortable: true },
    {
      name: "Date of Entry",
      selector: (row) => row.DateofEntry,
      sortable: true,
    },
    { name: "Actions", selector: (row) => row.Actions, sortable: true },
  ];
  const dataQCPayment = [
    {
      id: 1,
      Amount: "",
      PaymentMode: "",
      TransactionNumber: "",
      Status: "",
      PaymentDate: "",
      Note: "",
      DateofEntry: "",
      Actions: "",
    },
  ];
  return (
    <section className="mb-10">
      <div className="flex flex-col  md:justify-between my-5 w-full">
        <h2 className="text-xl font-semibold mx-5 border-b text-center border-black">Material PR DETAILS</h2>
        <div className="flex my-2 justify-end">
          <button className="font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md">
            Clone
          </button>
          <button className="font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md mx-3">
            <MdFeed />
            feeds
          </button>
          <button className="font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md">
            <IoMdPrint />
            Print
          </button>
          &nbsp;
        </div>
      </div>
      <div className="flex gap-3 item-center justify-between my-3 mx-5 flex-wrap">
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-sm font-medium">Site Incharge Approval:</p>
          <p className="bg-orange-400 px-2 items-center py-1 rounded-md text-white text-sm">
            Pending
          </p>
          <p className="">
            Approval Authority
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-sm font-medium">FM Admin Head Approval:</p>
          <p className="bg-orange-400 px-2 items-center py-1 rounded-md text-white text-sm">
            Pending
          </p>
          <p className="">
            Approval Authority
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-sm font-medium">FM HOD Approval:</p>
          <p className="bg-orange-400 px-2 items-center py-1 rounded-md text-white text-sm">
            Pending
          </p>
          <p className="">
            Approval Authority
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-sm font-medium">Site Accounts Team Approval:</p>
          <p className="bg-orange-400 px-2 items-center py-1 rounded-md text-white text-sm">
            Pending
          </p>
          <p className="">
            Approval Authority
          </p>
        </div>
      </div>
    
      <div className="border-2 flex flex-col my-5 mx-3 p-4 gap-4 rounded-md border-gray-400">
        <h2 className=" text-lg border-black font-semibold text-center">
          {details.site_name}
        </h2>
        <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
          <div className="grid grid-cols-2 items-center">
            <p>Phone </p>
            <p className="text-sm font-normal ">: 5566884455</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Fax </p>
            <p className="text-sm font-normal ">: NA</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Email</p>
            <p className="text-sm font-normal ">: NA</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>GST</p>
            <p className="text-sm font-normal ">: NA</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>PAN</p>
            <p className="text-sm font-normal ">: NA</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Address</p>
            <p className="text-sm font-normal ">
              : Eon Kharadi Infrastructur, Near Zensar IT Park, Kharadi Pune -
              411014
            </p>
          </div>
        </div>
        <h2 className="border-t text-lg py-5 border-black font-semibold text-center">
          Letter of Indent
        </h2>
        <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
          {/* <div className="grid grid-cols-2 items-center">
                    <p>Invoice Number</p>
                    <p className="text-sm font-normal ">: 3299/24-25</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Reference No.</p>
                    <p className="text-sm font-normal ">:</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Invoice Date</p>
                    <p className="text-sm font-normal ">: : 22-05-24</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Posting Date</p>
                    <p className="text-sm font-normal ">: 29-05-24</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>ID</p>
                    <p className="text-sm font-normal ">: 3427</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Retention Amount</p>
                    <p className="text-sm font-normal ">: 0.0</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Supplier Name</p>
                    <p className="text-sm font-normal ">Supplier Name</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>TDS Amount</p>
                    <p className="text-sm font-normal ">: 0.0</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>PO Number</p>
                    <p className="text-sm font-normal ">: 12214</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>PO Reference Number</p>
                    <p className="text-sm font-normal ">: 4500002633</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>QC Amount</p>
                    <p className="text-sm font-normal ">: 0.0</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>GRN Amount</p>
                    <p className="text-sm font-normal ">: 8688.58</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Total Taxes</p>
                    <p className="text-sm font-normal ">: 1563.94</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>PO Amount</p>
                    <p className="text-sm font-normal ">:</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Payable Amount</p>
                    <p className="text-sm font-normal ">: 10252.52</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Invoice Amount</p>
                    <p className="text-sm font-normal ">: 10252.5</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Related To</p>
                    <p className="text-sm font-normal ">: Exhaust Fan</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>GRN Amount</p>
                    <p className="text-sm font-normal ">: 10252.5</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Physical Invoice sent to</p>
                    <p className="text-sm font-normal ">:</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Physical Invoice received On</p>
                    <p className="text-sm font-normal ">:</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Gross Amount</p>
                    <p className="text-sm font-normal ">: 10252.519999999999</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p>Notes</p>
                    <p className="text-sm font-normal ">: 10252.519999999999</p>
                </div> */}
          <div className="grid grid-cols-2 items-center">
            <p>LOI No.</p>
            <p className="text-sm font-normal">: 1000029281</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Reference No.</p>
            <p className="text-sm font-normal">: 12397</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>LOI Date</p>
            <p className="text-sm font-normal">: 05-06-24</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>ID</p>
            <p className="text-sm font-normal">: 6088</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Plant Detail</p>
            <p className="text-sm font-normal">: 1050-S150-S150</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Supplier</p>
            <p className="text-sm font-normal">: Classic Enterprises</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Address</p>
            <p className="text-sm font-normal">
              : Bollyhood Cinema,Near Nishant Wajan, Lane No. 4, Wadgaon Sheri,
              Pune
            </p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Phone</p>
            <p className="text-sm font-normal">: 9822390220</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Email</p>
            <p className="text-sm font-normal">: classicpune1@gmail.com</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>GST</p>
            <p className="text-sm font-normal">: NA</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>PAN</p>
            <p className="text-sm font-normal">: AJMPB4588K</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Delivery Address</p>
            <p className="text-sm font-normal">
              : Viman Nagar Business Park, Panchshil Business Park Sr. No 206,
              Hissa No-2, Viman Nagar, Pune
            </p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Phone</p>
            <p className="text-sm font-normal">: NA</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Email</p>
            <p className="text-sm font-normal">: NA</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Related To</p>
            <p className="text-sm font-normal">: HAND WASH</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Payment Tenure (In Days)</p>
            <p className="text-sm font-normal">:</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Retention (%)</p>
            <p className="text-sm font-normal">:</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>TDS (%)</p>
            <p className="text-sm font-normal">:</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>QC (%)</p>
            <p className="text-sm font-normal">:</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>Advance Amount</p>
            <p className="text-sm font-normal">:</p>
          </div>
        </div>
        <div className="border-black border-t mt-5"></div>
        <Table columns={column} data={loiItems} />
        <div className="my-2 md:px-2 text-sm items-center font-medium grid gap-1 ">
            <div className="flex justify-between items-center">
              <p>Net Amount(INR) :</p>
              <p className="text-sm font-medium ">{totalAmount}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Gross Amount :</p>
              <p className="text-sm font-medium">{totalAmount}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Taxes :</p>
              <p className="text-sm font-medium">{taxAmount}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Net Invoice Amount :</p>
              <p className="text-sm font-bold">{netAmt}</p>
            </div>
            <div className="md:flex  gap-2 items-center">
              <p>Amount In Words :</p>
              <p className="text-sm font-medium">{netAmtInWords}</p>
            </div>
        </div>
      </div>
      <div className="border-t py-5 mx-5 border-black">
        <p className="text-md font-semibold">Notes</p>
        <p className="text-sm">No Notes</p>
      </div>
      <div className="border-t my-2 mx-5 border-black">
        <p className="text-md font-semibold">Terms & Conditions:</p>
        <p className="text-sm p-2 bg-gray-100 rounded-md">{details.terms}</p>
      </div>
      
      <div className="border-t my-2 mx-5 border-black">
        <p className="text-md font-semibold">Attachments</p>
        <p className="text-sm">No attachments</p>
      </div>
      <div className=" flex flex-col gap-5 items-end mx-5 border-black">
        <p className="text-md font-semibold">
          For (company name) we Confirm & Accept,
        </p>
        <p className="text-sm">Authorised Signatory</p>
      </div>
      <div className=" py-2 mx-5 border-black">
        {/* <h3 className='text-md font-semibold my-3'>Debit Note Details</h3> */}
        {/* <Table
            columns={columnDebitNote}
            data={dataDebitNote}
            /> */}
      </div>
      {/* <div className='border-t py-2 mx-5 border-black'>
            <h3 className='text-md font-semibold my-3'>Payment Details</h3>
            <Table
            columns={columnPayment}
            data={dataPayment}
            />
        </div> */}
      {/* <div className='border-t py-2 mx-5 border-black'>
            <h3 className='text-md font-semibold my-3'>Retention Payment Details</h3>
            <Table
            columns={columnRetentionPayment}
            data={dataRetentionPayment}
            />
        </div> */}
      {/* <div className='border-t py-2 mx-5 border-black'>
            <h3 className='text-md font-semibold my-3'>QC Payment Details</h3>
            <Table
            columns={columnQCPayment}
            data={dataQCPayment}
            />
        </div> */}
    </section>
  );
};

export default MaterialPRDetails;
