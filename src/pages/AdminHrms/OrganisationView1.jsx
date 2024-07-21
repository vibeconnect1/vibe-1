import React, { useState } from "react";
import OrganizationTree from "./OrganisationTree";
import { FaTrash } from "react-icons/fa";

const OrganisationView1 = () => {
  const [headsOfCompany, setHeadsOfCompany] = useState([1]);

  const addHeadOfCompany = () => {
    setHeadsOfCompany([...headsOfCompany, headsOfCompany.length + 1]);
  };

  const deleteHeadOfCompany = (indexToDelete) => {
    setHeadsOfCompany(headsOfCompany.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className="flex">
      <OrganizationTree />
      <div className="w-full flex m-3 flex-col overflow-hidden">
      <label htmlFor="" className="mt-5 font-semibold">Step-1</label>
        <p>
Assign Head of Company</p>
        {headsOfCompany.map((head, index) => (
          <div key={index} className="mb-3 mt-10 flex items-center">
            <label htmlFor={`headOfCompany${head}`}>Select Head of Company {head}</label>
            <select id={`headOfCompany${head}`} className="ml-5 border border-gray-400 p-2 rounded-md" >
              {/* Options go here */}
              <option value="1">Head of Company 1</option>
              <option value="2">Head of Company 2</option>
              <option value="3">Head of Company 3</option>
              {/* Add more options as needed */}
            </select>
            <button
              onClick={() => deleteHeadOfCompany(index)}
              className="ml-2 p-1 bg-gray-500 text-white"
            >
              <FaTrash/>
            </button>
          </div>
        ))}
        <button onClick={addHeadOfCompany} className="mt-3 p-2 w-64 bg-blue-500 text-white">
           Add Head of Company
        </button>
      </div>
    </section>
  );
};

export default OrganisationView1;
