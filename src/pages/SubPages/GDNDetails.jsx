import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Table from '../../components/table/Table'
import { BsEye } from 'react-icons/bs'

const GdnDetails = () => {
    const column = [
        {
          name: "view",

          cell: (row) => (
            <div className="flex items-center gap-4">
              <Link to={`/admin/gnd-detail/${row.id}`}>
                <BsEye size={15} />
              </Link>
            </div>
          ),
        },
        { name: "Id", selector: (row) => row.Id, sortable: true },
        { name: "GDN Date", selector: (row) => row.GDNDate, sortable: true },
        { name: "Inventory Count", selector: (row) => row.InventoryCount, sortable: true },
        { name: "Status", selector: (row) => row.Status, sortable: true },
        { name: "Created On", selector: (row) => row.CreatedOn, sortable: true },
        { name: "Created By", selector: (row) => row.CreatedBy, sortable: true },
        { name: "Handed Over To", selector: (row) => row.HandedOverTo, sortable: true },
      ];

      const data = [
        {
          id: 1,
          Id: 112083,
          GDNDate: "31/05/2024",
          InventoryCount : "1",
          Status : "Pending",
          CreatedOn : "31/05/2024",
          CreatedBy : "Aniruddha Mane",
          HandedOverTo : "",
          action: <BsEye />,
        },
        {
            id: 2,
            Id: 112060,
            GDNDate: "31/05/2024",
            InventoryCount : "1",
            Status : "Pending",
            CreatedOn : "31/05/2024",
            CreatedBy : "Aniruddha Mane",
            HandedOverTo : "",
            action: <BsEye />,
        },
        {
            id: 3,
            Id: 109074,
            GDNDate: "28/05/2024",
            InventoryCount : "1",
            Status : "Dispatched",
            CreatedOn : "28/05/2024",
            CreatedBy : "Awishkar Borkar",
            HandedOverTo : "Awishkar Borkar",
            action: <BsEye />,
        },
        {
            id: 4,
            Id: 108433	,
            GDNDate: "27/05/2024",
            InventoryCount : "1",
            Status : "Dispatched",
            CreatedOn : "27/05/2024",
            CreatedBy : "Awishkar Borkar",
            HandedOverTo : "Awishkar Borkar",
            action: <BsEye />,
        },
      ];
  return (
    <section>
        <div className="w-full flex mx-3 flex-col overflow-hidden">
            <div className='flex justify-between'>
                <div>
                    <input
                      type="text"
                      placeholder="search"
                      className="border-2 p-2  border-gray-300 rounded-lg mx-2"
                    />
                </div>
                <div className='mr-8'>
                    <button 
                       className=" font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md"
                    >
                        <Link to="/admin/add-gdn/" className="flex items-center gap-2">
                            <IoMdAdd /> Add
                        </Link>
                    </button>
                </div>
            </div>
            <div className='my-5'>
                <Table
                  columns={column}
                  data={data}
                  isPagination={true}
                />
            </div>
        </div>
    </section>
  )
}

export default GdnDetails