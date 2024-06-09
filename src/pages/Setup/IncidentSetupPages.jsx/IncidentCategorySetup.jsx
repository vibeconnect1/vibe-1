import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Table from '../../../components/table/Table'
import { RiDeleteBinLine } from 'react-icons/ri'
import IncidentSetCategoryModal from '../../../containers/modals/IncidentSetupModal.jsx/IncidentSetupCatModal'


const IncidentCategorySetup = () => {
    const [modal, showModal] = useState(false);
    const column = [
        { name: "Name", selector: (row) => row.Name, sortable: true },
        {
            name: "action",

            cell: (row) => (
              <div className="flex items-center gap-4">
                <Link to="" onClick={() => showModal(true)}>
                  <BiEdit size={15} />
                </Link>
                {modal && <IncidentSetCategoryModal onclose={() => showModal(false)} />}
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
          Name: "Technology and Data Security",
          action: <BsEye />,
        },
      ];
  return (
    <section>
        <div className="w-full flex flex-col overflow-hidden">
            <div className="flex md:flex-row flex-col md: gap-3 mx-5 my-3">
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

export default IncidentCategorySetup