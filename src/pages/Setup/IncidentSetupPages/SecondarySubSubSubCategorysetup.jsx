import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Table from '../../../components/table/Table';
import SecondarySubSubSubCategorySetupModal from '../../../containers/modals/IncidentSetupModal/SecondarySubSubSubCategorySetupModal';

const SecondarySubSubSubCategorysetup = () => {
    const [modal, showModal] = useState(false);
    const column = [
        { name: "Secondary Category", selector: (row) => row.SecondaryCategory, sortable: true },
        { name: "Secondary Sub Category", selector: (row) => row.SecondarySubCategory, sortable: true },
        { name: "Secondary Sub Sub Category", selector: (row) => row.SecondarySubSubCategory, sortable: true },
        { name: "Secondary Sub Sub Sub Category", selector: (row) => row.SecondarySubSubSubCategory, sortable: true },
        {
            name: "action",
      
            cell: (row) => (
              <div className="flex items-center gap-4">
                <Link to="" onClick={() => showModal(true)}>
                  <BiEdit size={15} />
                </Link>
                {modal && <SecondarySubSubSubCategorySetupModal onclose={() => showModal(false)} />}
                <Link to="">
                  <RiDeleteBinLine size={15} />
                </Link>
              </div>
            ),
          },
      ];
      const data = [
        {
          id: 1,
          SecondaryCategory:"Near Miss / Good Catch",
          SecondarySubCategory: "Near Miss / Good Catch",
          SecondarySubSubCategory:"Unsafe act",
          SecondarySubSubSubCategory:"Na",
          action: <BsEye />,
        },
      ];
  return (
    <section>
        <div className="w-full flex flex-col overflow-hidden">
            <div className="flex xl:flex-row flex-col md: gap-3 mx-5 my-3">
                <select
                    name=""
                    id=""
                    className="border p-1 px-4 border-gray-500 rounded-md"
                >
                    <option value="">Select Secondary Category</option>
                    <option value="">Health and Safety</option>
                    <option value="">Fire</option>
                    <option value="">Near Miss/Good Catch</option> 
                </select>
                <select
                    name=""
                    id=""
                    className="border p-1 px-4 border-gray-500 rounded-md"
                >
                    <option value="">Select Secondary Sub Category</option>
                </select>
                <select
                    name=""
                    id=""
                    className="border p-1 px-4 border-gray-500 rounded-md"
                >
                    <option value="">Select Secondary Sub Sub Category</option>
                </select>
                <input
                  type="text"
                  placeholder="name"
                  className="border-2 p-2 w-70 border-gray-300 rounded-lg"
                />
                <button className='font-semibold border-2 border-black px-4 p-1 flex  items-center rounded-md'>
                    Submit
                </button>
            </div>
            <div className=' mx-5 my-3'>
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

export default SecondarySubSubSubCategorysetup