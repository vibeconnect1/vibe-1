import React from 'react'
import Navbar from '../../../components/Navbar';
import { IoMdAdd } from 'react-icons/io';
import Table from '../../../components/table/Table';
import { BiEdit } from 'react-icons/bi'
import { Link } from 'react-router-dom';
function AddressesSetup() {
  const column = [
    {
      name: "Actions",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/edit-addresses-setup/${row.id}`} >
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    { name: "Title", selector: (row) => row.title, sortable: true },
    { name: "Building Name", selector: (row) => row.buildingName, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "State", selector: (row) => row.state, sortable: true },
    { name: "Phone Number", selector: (row) => row.phoneNumber, sortable: true },
    { name: "Fax", selector: (row) => row.fax, sortable: true },
    { name: "GST No.", selector: (row) => row.gstNo, sortable: true },
    { name: "Created On", selector: (row) => row.createdOn, sortable: true },
    { name: "Updated On", selector: (row) => row.updatedOn, sortable: true },,
];

const data = [
    {
      id: 1,
      title: "asa",
      buildingName: "sa",
      email: "",
      state: "ANDHRA PRADESH (NEW)",
      phoneNumber: "",
      fax: "",
      gstNo: "",
      createdOn: "29/02/2024",
      updatedOn: "29/02/2024",
    },
];
  return (
    <section className='flex'>
      <Navbar/>
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex flex-col sm:flex-row md:justify-between gap-3 my-3">
          <input
            type="text"
            placeholder="search"
            className="border-2 p-2 w-70 border-gray-300 rounded-lg"
          />
          <div className='flex gap-3 sm:flex-row flex-col'>
            <Link to={`/admin/add-addresses-setup`} className=" font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md" >
              <IoMdAdd /> Add 
            </Link>
          </div>
        </div>
        <div className='my-3'>
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

export default AddressesSetup