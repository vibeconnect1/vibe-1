import React from 'react'
import Table from '../../../components/table/Table';

import { MdFeed } from 'react-icons/md';
import { Link } from 'react-router-dom';

const OtherBillsDetails = () => {
  const column = [
    { name: "Total Amount", selector: (row) => row.TotalAmount, sortable: true },
    { name: "Total Bill Amount", selector: (row) => row.TotalBillAmount, sortable: true },
    { name: "Total Tax Amount", selector: (row) => row.TotalTaxAmount, sortable: true },
    { name: "Additional Expenses", selector: (row) => row.AdditionalExpenses, sortable: true },
    { name: "CGST Rate", selector: (row) => row.CGSTRate, sortable: true },
    { name: "CGST Amount", selector: (row) => row.CGSTAmount, sortable: true },
    { name: "SGST Rate", selector: (row) => row.SGSTRate, sortable: true },
    { name: "SGST Amount", selector: (row) => row.SGSTAmount, sortable: true },
    { name: "IGST Rate", selector: (row) => row.IGSTRate, sortable: true },
    { name: "IGST Amount", selector: (row) => row.IGSTAmount, sortable: true },
    { name: "TCS Rate", selector: (row) => row.TCSRate, sortable: true },
    { name: "TCS Amount", selector: (row) => row.TCSAmount, sortable: true },
  ];
  const data = [
    {
      id: 1,
      TotalAmount: "150000.0",
      TotalBillAmount: "149600.0",
      TotalTaxAmount : "400.0",
      AdditionalExpenses : "0.0",
      CGSTRate : "10.0",
      CGSTAmount : "100.0",
      SGSTRate : "10.0",
      SGSTAmount : "100.0",
      IGSTRate	 : "10.0",
      IGSTAmount : "100.0",
      TCSRate: "10.0",
      TCSAmount: "100.0",
    },

  ];
  const columnPaymentDetails = [
    { name: "Amount", selector: (row) => row.Amount, sortable: true },
    { name: "Payment Mode", selector: (row) => row.PaymentMode, sortable: true },
    { name: "Transaction Number	", selector: (row) => row.TransactionNumber	, sortable: true },
    { name: "Status", selector: (row) => row.Status, sortable: true },
    { name: "Payment Date	", selector: (row) => row.PaymentDate	, sortable: true },
    { name: "Note", selector: (row) => row.Note, sortable: true },
    { name: "Date Of Entery", selector: (row) => row.DateOfEntery, sortable: true },
    { name: "Actions", selector: (row) => row.Actions, sortable: true },
  ];
  const dataPaymentDetails = [
    {
      id: 1,
      Amount: "100.0",
      PaymentMode: "Online",
      TransactionNumber : "5678822828",
      Status : "Partially Paid	",
      PaymentDate: "",
      Note : "",
      DateOfEntery : "31/ 05/2024",
      Actions : <button className='bg-blue-500 py-2 px-2 rounded-md text-white'>
        Send Mail
      </button>,
    },

  ];
  const columnDebit = [
    { name: "ID", selector: (row) => row.ID, sortable: true },
    { name: "Amount", selector: (row) => row.Amount, sortable: true },
    { name: "Description", selector: (row) => row.Description, sortable: true },
    { name: "Approved	", selector: (row) => row.Approved	, sortable: true },
    { name: "Approved On	", selector: (row) => row.ApprovedOn	, sortable: true },
    { name: "Approved By", selector: (row) => row.ApprovedBy, sortable: true },
    { name: "Created On", selector: (row) => row.CreatedOn, sortable: true },
    { name: "Created By", selector: (row) => row.CreatedBy, sortable: true },
    { name: "Attachment", selector: (row) => row.QCOutstanding, sortable: true },
  ];
  const dataDebit = [
    {
      id: 1,
      ID: "312",
      Amount: "5000",
      Description : "Na",
      Approved : "abc",
      ApprovedOn : "",
      ApprovedBy : "",
      CreatedOn : "abc",
      CreatedBy : "No",
      Attachment : "File",
    },

  ];
  const columnRetention = [
    { name: "Amount", selector: (row) => row.Amount, sortable: true },
    { name: "Payment Mode	", selector: (row) => row.PaymentMode	, sortable: true },
    { name: "Transaction Number", selector: (row) => row.TransactionNumber, sortable: true },
    { name: "Status", selector: (row) => row.Status, sortable: true },
    { name: "Payment Date	", selector: (row) => row.PaymentDate	, sortable: true },
    { name: "Note", selector: (row) => row.Note, sortable: true },
    { name: "Date Of Entery	", selector: (row) => row.DateOfEntery	, sortable: true },
    { name: "Actions", selector: (row) => row.Actions, sortable: true },
  ];
  const dataRetention = [
    {
      id: 1,
      Amount: "7000",
      PaymentMode	: "NA",
      TransactionNumber : "10",
      Status : "",
      PaymentDate	 : "4-6-2023",
      Note : "",
      DateOfEntery	 : "1000.00",
      Actions: "",
    },

  ];
  return (
    <section>
      <div className="p-4 w-full my-2 flex  overflow-hidden flex-col">
        <div className="md:flex grid grid-cols-2 sm:flex-row  flex-col gap-2 justify-between">
          <h2 className="text-xl font-semibold mx-5 ">
            PMS BILL DETAIL
          </h2>
        </div>
        <div className='flex gap-3 my-3 mx-5 flex-wrap'>
          <p>L1 Approval:</p>
          <button className='bg-orange-400 px-2 py-1 rounded-md'>
            Pending
          </button>
        </div>
        <div className='flex gap-2 justify-end mb-5 mr-4'>
          <button className="font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md">
            Payment
          </button>
          <button className="font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md">
            <MdFeed/> Print
          </button>
          <Link to="/admin/-other-bills-feed" className=" font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md">
            <MdFeed/>Feeds
          </Link>
        </div>
        <div className='border-2 flex flex-col  mx-3 p-4 gap-4 rounded-md border-gray-400'>
          <h2 className="text-lg font-semibold mx-5 text-center">
            Business Bay
          </h2>
          <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
            <div className="grid grid-cols-2 items-center">
              <p>Phone :</p>
              <p className="text-sm font-normal ">5566884455</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Fax :</p>
              <p className="text-sm font-normal ">15656153</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Email :</p>
              <p className="text-sm font-normal ">business@gmail.com</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>GST :</p>
              <p className="text-sm font-normal "> 255651651213</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>PAN :</p>
              <p className="text-sm font-normal ">AKSPI5656L</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Address :</p>
              <p className="text-sm font-normal ">Pune, Maharashtra</p>
            </div>
          </div>
          <h2 className="border-t text-lg py-5 border-black font-semibold text-center">
            Other Bills
          </h2>
          <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
            <div className="grid grid-cols-2 items-center">
              <p>Bill Number :</p>
              <p className="text-sm font-normal ">55466322</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Bill Date  :</p>
              <p className="text-sm font-normal">28-05-24</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>ID :</p>
              <p className="text-sm font-normal">2471</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Total Amount :</p>
              <p className="text-sm font-normal">259999</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Supplier Name :</p>
              <p className="text-sm font-normal">Ghaffar Industries pvt.ltd.</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Deduction :</p>
              <p className="text-sm font-normal">1.0</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Invoice Number :</p>
              <p className="text-sm font-normal">55466322</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Deduction Remarks :</p>
              <p className="text-sm font-normal">0.0</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Related To :</p>
              <p className="text-sm font-normal">Bill customer testing</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>TDS(%) :</p>
              <p className="text-sm font-normal"> 2.0</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Payment Tenure :</p>
              <p className="text-sm font-normal"></p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>TDS Amount :</p>
              <p className="text-sm font-normal">
              2992.0</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Tatal Bill Amount :</p>
              <p className="text-sm font-normal">0.0</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Retention(%) :</p>
              <p className="text-sm font-normal">1.0</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Total Taxes Amount :</p>
              <p className="text-sm font-normal">400.0</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Retention Amount :</p>
              <p className="text-sm font-normal">1496.0</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Payable Amount :</p>
              <p className="text-sm font-normal">145511.0</p>
            </div>
          </div>
          <div className='border-t py-5 border-black'>
            <div>
              <Table
                columns={column}
                data={data}
                isPagination={true}
              />
            </div>
          </div>
          <div className='border-t py-5 border-black'>
            <p className="text-md font-semibold my-2">Attachments</p>
            <p className="text-sm font-normal">No attachments</p>
          </div>
          <div className='border-t py-5 border-black'>
            <h2 className="text-lg font-semibold  ">
              Payment Details
            </h2>
            <div className='my-3'>
              <Table
                columns={columnPaymentDetails}
                data={dataPaymentDetails}
                isPagination={true}
              />
            </div>
          </div>
          <div className='border-t py-5 border-black'>
            <h2 className="text-lg font-semibold  ">
              Debit Note Details
            </h2>
            <div className='my-3'>
              <Table
                columns={columnDebit}
                data={dataDebit}
                isPagination={true}
              />
            </div>
          </div>
          <div className='border-t py-5 border-black'>
            <h2 className="text-lg font-semibold  ">
              Retention Payment Details
            </h2>
            <div className='my-3'>
              <Table
                columns={columnRetention}
                data={dataRetention}
                isPagination={true}
              />
            </div>
          </div>
          <div className='border-t py-5 border-black'>
            <div className="md:px-2 text-sm items-center font-medium grid gap-1 ">
              <div className="flex justify-between items-center">
                <p>Prepared By :</p>
                <p className="text-sm font-bold "></p>
              </div>
              <div className="flex justify-between items-center">
                <p>Construction Engineer : </p>
                <p className="text-sm font-bold"></p>
              </div>
              <div className="flex justify-between items-center">
                <p>Project Manager : </p>
                <p className="text-sm font-bold"></p>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherBillsDetails