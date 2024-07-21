import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../components/table/Table";
import PayrollSettingDetailsList from "./PayrollSettingDetailsList";
import { GrHelpBook } from "react-icons/gr";

const FixedAllowance = () => {
  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allowanceType, setAllowanceType] = useState("");
  const [customLabel, setCustomLabel] = useState("");
  const [attendanceEffect, setAttendanceEffect] = useState(false);
  const [affectPF, setAffectPF] = useState(false);
  const [affectESIC, setAffectESIC] = useState(false);
  const [affectLWF, setAffectLWF] = useState(false);
  const [affectPT, setAffectPT] = useState(false);
  const [affectIT, setAffectIT] = useState(false);
  const [taxRegimes, setTaxRegimes] = useState("");

  const columns = [
    { name: "view", cell: (row) => <div className="flex items-center gap-4"></div> },
    { name: "Custom Label", selector: (row) => row.Location, sortable: true },
    { name: "PF", selector: (row) => row.Label, sortable: true },
    { name: "ESIC", selector: (row) => row.City, sortable: true },
    { name: "LWF", selector: (row) => row.State, sortable: true },
    { name: "PT", selector: (row) => row.Country, sortable: true },
    { name: "IT", selector: (row) => row.Leave_Days, sortable: true },
    { name: "Monthly Tax Exemption Limit", selector: (row) => row.Comment, sortable: true },
  ];

  const data = [
    {  Location: "Basic",  },
  ];

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    closeModal();
  };

  return (
    <section className="flex ml-20">
      <PayrollSettingDetailsList />
      <div className="w-2/3 flex m-3 flex-col overflow-hidden">
        <div className="flex justify-between my-5">
          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
          />
          <button
            onClick={openModal}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add
          </button>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center overflow-y-auto justify-center bg-gray-500 bg-opacity-50">
         <div class="max-h-screen  bg-white p-8 w-2/3 rounded-lg shadow-lg overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Add New Allowance</h2>
            <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div className="grid gap-2 items-center w-full">
                <label className="block mb-2 font-semibold">Select Allowance Type</label>
                <input
                  type="text"
                  value={allowanceType}
                  onChange={(e) => setAllowanceType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <label className="block mb-2 font-semibold">Custom Label</label>
                <input
                  type="text"
                  value={customLabel}
                  onChange={(e) => setCustomLabel(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <label className="block font-semibold">Do you want attendance to affect the eligibility?</label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="attendanceEffect"
                    checked={attendanceEffect}
                    onChange={() => setAttendanceEffect(true)}
                    className="mr-2"
                  />
                  Yes
                  <input
                    type="radio"
                    name="attendanceEffect"
                    checked={!attendanceEffect}
                    onChange={() => setAttendanceEffect(false)}
                    className="ml-4 mr-2"
                  />
                  No
                </div>
              </div>
              <div className="grid gap-2 items-center w-full">
                <label className="block font-semibold">Does this allowance affect Provident Fund?</label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="affectPF"
                    checked={affectPF}
                    onChange={() => setAffectPF(true)}
                    className="mr-2"
                  />
                  Yes
                  <input
                    type="radio"
                    name="affectPF"
                    checked={!affectPF}
                    onChange={() => setAffectPF(false)}
                    className="ml-4 mr-2"
                  />
                  No
                </div>
              </div>
              <div className="grid gap-2 items-center w-full">
                <label className="block font-semibold">Does this allowance affect ESIC?</label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="affectESIC"
                    checked={affectESIC}
                    onChange={() => setAffectESIC(true)}
                    className="mr-2"
                  />
                  Yes
                  <input
                    type="radio"
                    name="affectESIC"
                    checked={!affectESIC}
                    onChange={() => setAffectESIC(false)}
                    className="ml-4 mr-2"
                  />
                  No
                </div>
              </div>
              <div className="grid gap-2 items-center w-full">
                <label className="block font-semibold">Does this allowance affect LWF?</label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="affectLWF"
                    checked={affectLWF}
                    onChange={() => setAffectLWF(true)}
                    className="mr-2"
                  />
                  Yes
                  <input
                    type="radio"
                    name="affectLWF"
                    checked={!affectLWF}
                    onChange={() => setAffectLWF(false)}
                    className="ml-4 mr-2"
                  />
                  No
                </div>
              </div>
              <div className="grid gap-2 items-center w-full">
                <label className="block font-semibold">Does this allowance affect Professional Tax?</label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="affectPT"
                    checked={affectPT}
                    onChange={() => setAffectPT(true)}
                    className="mr-2"
                  />
                  Yes
                  <input
                    type="radio"
                    name="affectPT"
                    checked={!affectPT}
                    onChange={() => setAffectPT(false)}
                    className="ml-4 mr-2"
                  />
                  No
                </div>
              </div>
              <div className="grid gap-2 items-center w-full">
                <label className="block font-semibold">Does this allowance affect Income Tax?</label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="affectIT"
                    checked={affectIT}
                    onChange={() => setAffectIT(true)}
                    className="mr-2"
                  />
                  Yes
                  <input
                    type="radio"
                    name="affectIT"
                    checked={!affectIT}
                    onChange={() => setAffectIT(false)}
                    className="ml-4 mr-2"
                  />
                  No
                </div>
              </div>
              <div className="grid gap-2 items-center w-full">
                <label className="block mb-2 font-semibold">For which Tax Regimes will the Income Tax be calculated?</label>
                <input
                  type="text"
                  value={taxRegimes}
                  onChange={(e) => setTaxRegimes(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              </div>
              <div className="flex mt-2 justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black mr-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold p-2 rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className='my-4 mx-2 w-fit'>
      <div className="flex flex-col mt-4 mr-2 shadow-custom-all-sides bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
        <div className="flex  gap-4 font-medium">
        <GrHelpBook size={20} />
          <h2>Help Center</h2></div>
    <div className=' '>
              {/* <p className="font-medium">Help Center</p> */}
              <ul style={listItemStyle} className="flex flex-col gap-2">
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    You can create fixed allowances like Basic, DA and HRA and so on and configure compliances as per your company requirements.           </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
                    There are some pre-configured allowances like Basic, HRA, LTA, Medical and Education and Hostel as per income tax and statutory rules.                </li>
                  </ul>
                </li>
                <li>
                  <ul style={listItemStyle}>
                    <li>
You can add and manage third party users and invite them to join login to the Vibe Connect software. For e.g., External auditor, external consultants, etc.                    </li>
                  </ul>
                </li>

                <li>
                  <p>
                    {/* <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a> */}
Created allowance can be mapped in Salary details and also configurable in CTC Template (CTC Calculator) available Payroll, which further eases your task by automatically creating a break up in salary details of the employees.               </p>
                </li>
                <li>
                  <p>
                    {/* <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a> */}
You can select applicable compliances as per norms and there is an option to choose the applicable tax regime also.          </p>
                </li>
                <li>
                  <p>
                    {/* <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a> */}
These allowance can be with or without linked with attendance or Payable days          </p>
                </li>
                <li>
                  <p>
                    {/* <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a> */}
You can change allowances setting anytime but once payroll is processed won’t be deleted.        </p>
                </li>
              </ul>
            </div></div></div>
    </section>
  );
};

export default FixedAllowance;