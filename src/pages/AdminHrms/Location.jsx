import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import Table from "../../components/table/Table";
import { useSelector } from "react-redux";

import { BiEdit } from "react-icons/bi";

import OrganisationSetting from "./OrganisationSetting";
import HRMSHelpCenter from "./HRMSHelpCenter";

const Location = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const themeColor = useSelector((state) => state.theme.color);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
    const columns = [
    
    {
      name: "Location",
      selector: (row) => row.Location,
      sortable: true,
    },
    
    {
      name: "City",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.State,
      sortable: true,
    },
    {
        name: "Country",
        selector: (row) => row.Country,
        sortable: true,
      },
      {
        name: "Action",
  
        cell: (row) => (
          <div className="flex items-center gap-4">
            <button onClick={openModal}
         
            >
              <BiEdit size={15} />
            </button>
          </div>
        ),
      },
  ];

  const data = [
    {
      Name: "person 1",
      Location: "Mumbai",
      City: "Mumbai",
      State: "Maharashtra",

      Country:"India",

    },

  ];

  return (
    <section className="flex ml-20">
     <OrganisationSetting/>
      <div className=" w-full flex m-3 flex-col overflow-hidden">
      
        <div className=" flex justify-end my-5">
          <input
            type="text"
            placeholder="Search by name "
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
            //   value={searchText}
            //   onChange={handleSearch}
          />
        
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      <HRMSHelpCenter help={"location"}/>
      {modalIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center overflow-y-auto justify-center bg-gray-500 bg-opacity-50">
         <div class="max-h-screen h-30 bg-white p-8 w-96 rounded-lg shadow-lg overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Edit Branch Location</h2>
            <div className="grid grid-cols-1 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="">Location</label>
                  <input type="text" className="border p-2 border-black rounded-md"/>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="">City</label>
                  <input type="text" className="border p-2 border-black rounded-md"/>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="">State</label>
                  <input type="text" className="border p-2 border-black rounded-md"/>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="">Country</label>
                  <input type="text" className="border p-2 border-black rounded-md"/>
                </div>
            </div>
            <div className="flex mt-2 justify-center gap-2">
              <button style={{background:themeColor}} className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded">Update</button>
              <button style={{background:themeColor}} className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded" onClick={closeModal}>Close</button>
            </div>
            </div>
            </div>)}
    </section>
  );
};

export default Location;