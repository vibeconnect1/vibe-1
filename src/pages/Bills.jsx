import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { IoMdAdd } from 'react-icons/io'
import Table from '../components/table/Table'
import { BsEye } from 'react-icons/bs'
import { MdOutlineEdit } from 'react-icons/md'

function Bills() {
    const column = [
        {
          name: "view",

          cell: (row) => (
            <div className="flex items-center gap-4">
              <Link to={`/admin/-other-bills-details/${row.id}`}>
                <BsEye size={15} />
              </Link>
              {/* <Link to={`/admin/edit-design-insight/${row.id}`}>
                <MdOutlineEdit size={15} />
              </Link> */}
            </div>
          ),
        },
        { name: "Id", selector: (row) => row.Id, sortable: true },
        { name: "Description", selector: (row) => row.Description, sortable: true },
        { name: "Supplier", selector: (row) => row.Supplier, sortable: true },
        { name: "Amount", selector: (row) => row.Amount, sortable: true },
        { name: "Deduction", selector: (row) => row.Deduction, sortable: true },
        { name: "TDS(%)", selector: (row) => row.TDS, sortable: true },
        { name: "TDS Amount", selector: (row) => row.TDSAmount, sortable: true },
        { name: "Retention(%)", selector: (row) => row.Retention, sortable: true },
        { name: "RetentionAmount", selector: (row) => row.RetentionAmount, sortable: true },
        { name: "Payable Amount", selector: (row) => row.PayableAmount, sortable: true },
        { name: "Bill Date", selector: (row) => row.BillDate, sortable: true },
        { name: "Invoice Number", selector: (row) => row.InvoiceNumber, sortable: true },
        { name: "Payment Tenure In Days", selector: (row) => row.PaymentTenureInDays, sortable: true },
        { name: "Last Approved By", selector: (row) => row.LastApprovedBy, sortable: true },
        { name: "Amount Paid", selector: (row) => row.AmountPaid, sortable: true },
        { name: "Balance Amount", selector: (row) => row.BalanceAmount, sortable: true },
        { name: "Payment Status", selector: (row) => row.PaymentStatus, sortable: true },
        { name: "Created On", selector: (row) => row.CreatedOn, sortable: true },
        { name: "Created By", selector: (row) => row.CreatedBy, sortable: true },
      ];

      const data = [
        {
          id: 1,
          Id: 2471,
          Description: "This is demo bills",
          Supplier : "Ghaffar Industries pvt.ltd.",
          Amount : "150000.0",
          Deduction : "1.0",
          TDS : "2.0",
          TDSAmount : " 2992.0",
          Retention : "1.0",
          RetentionAmount : "1496.0",
          PayableAmount : "145511.0",
          BillDate :  "28/05/24",
          InvoiceNumber : "55466322",
          PaymentTenureInDays : "",
          LastApprovedBy : "",
          AmountPaid	 : "0.0",
          BalanceAmount : "147008.0",
          PaymentStatus : "Unpaid",
          CreatedOn : "29/ 05/2024",
          CreatedBy : "Tech Support 1",
          action: <BsEye />,
          edit: <MdOutlineEdit />,
        },
        {
            id: 2,
            Id: 2470,
            Description: "This is demo bills",
            Supplier : "Ghaffar Industries pvt.ltd.",
            Amount : "150000.0",
            Deduction : "1.0",
            TDS : "2.0",
            TDSAmount : " 2992.0",
            Retention : "1.0",
            RetentionAmount : "1496.0",
            PayableAmount : "145511.0",
            BillDate :  "",
            InvoiceNumber : "55466322",
            PaymentTenureInDays : "",
            LastApprovedBy : "",
            AmountPaid	 : "0.0",
            BalanceAmount : "147008.0",
            PaymentStatus : "Unpaid",
            CreatedOn : "29/ 05/2024",
            CreatedBy : "Tech Support 1",
            action: <BsEye />,
            edit: <MdOutlineEdit />,
        },
        {
            id: 3,
            Id: 2469,
            Description: "This is demo bills",
            Supplier : "Ghaffar Industries pvt.ltd.",
            Amount : "1400.0",
            Deduction : "",
            TDS : "2.0",
            TDSAmount : " 20.0",
            Retention : "",
            RetentionAmount : "0.0",
            PayableAmount : "1380.0",
            BillDate :  "29/05/24",
            InvoiceNumber : "55466322",
            PaymentTenureInDays : "",
            LastApprovedBy : "",
            AmountPaid	 : "0.0",
            BalanceAmount : "1380.0",
            PaymentStatus : "Unpaid",
            CreatedOn : "29/ 05/2024",
            CreatedBy : "Tech Support 1",
            action: <BsEye />,
            edit: <MdOutlineEdit />,
          },
      ];
  return (
    <section className='flex'>
        <Navbar/>
        <div className="p-4 w-full my-2 flex  overflow-hidden flex-col">
            <div className="flex   justify-start w-fit md:gap-5 gap-2 sm:flex-row flex-col flex-shrink flex-wrap  ">
                <div className="shadow-xl rounded-full border-4 border-gray-400 md:w-60  px-6 flex flex-col items-center">
                    <p className="font-semibold text-lg">Total Bills</p>
                    <p className="text-center font-semibold text-lg ">5</p>
                </div>
                <div className="shadow-xl rounded-full border-4 border-green-400  md:w-60  px-6 flex flex-col items-center">
                    <p className="font-semibold text-lg">Total Amount</p>
                    <p className="text-center font-semibold text-lg ">₹ 3,04,200</p>
                </div>
                <div className="shadow-xl rounded-full border-4 border-red-400 md:w-60   px-6 flex flex-col items-center">
                    <p className="font-semibold text-lg">Total Paid Amount</p>
                    <p className="text-center font-semibold text-lg ">₹ 100</p>
                </div>
                <div className="shadow-xl rounded-full border-4 border-orange-400 md:w-60   px-6 flex flex-col items-center">
                    <p className="font-semibold text-lg">Total Pending Amount</p>
                    <p className="text-center font-semibold text-lg ">₹ 2,98,056</p>
                </div>
            </div>
            <div className="md:flex  sm:flex-row my-2 flex-col gap-2 justify-between">
                <input
                  type="text"
                  placeholder="search"
                  className="border-2 p-2 w-70 border-gray-300 rounded-lg mx-2"
                />

                <Link to="/admin/add-other-bills" className=" font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md">
                    <IoMdAdd /> Add
                </Link>

            </div>
            <Table
              columns={column}
              data={data}
              isPagination={true}
            />
        </div>
    </section>
  )
}

export default Bills