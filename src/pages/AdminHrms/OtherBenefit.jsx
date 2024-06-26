import React, { useEffect, useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../components/table/Table";
import PayrollSettingDetailsList from "./PayrollSettingDetailsList";

const OtherBenefit = () => {
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
  const [deductionLabel, setDeductionLabel] = useState('');
  const [showInCTC, setShowInCTC] = useState(false); // Boolean: true or false
  const [frequency, setFrequency] = useState('Monthly'); // Default to Monthly
  const [effectivePeriod, setEffectivePeriod] = useState('');
  const [hasEndingPeriod, setHasEndingPeriod] = useState(false); // Boolean: true or false
  const [amountEntryMethod, setAmountEntryMethod] = useState('Manually'); // Default to Manually
  const [applicableTo, setApplicableTo] = useState('All'); // Default to All Employees


  const columns = [
    { name: "view", cell: (row) => <div className="flex items-center gap-4"></div> },
    { name: "Custom Label", selector: (row) => row.Location, sortable: true },
    // { name: "Frequency", selector: (row) => row.Label, sortable: true },
    // { name: "Applies To", selector: (row) => row.City, sortable: true },
    // { name: "LWF", selector: (row) => row.State, sortable: true },
    // { name: "PT", selector: (row) => row.Country, sortable: true },
    // { name: "IT", selector: (row) => row.Leave_Days, sortable: true },
    // { name: "Applies To", selector: (row) => row.Comment, sortable: true },
  ];

  const data = [
    { Name: "person 1", Location: "Mumbai", City: "Mumbai", State: "Maharashtra", Country: "India" },
  ];

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    closeModal();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex ml-20">
      <PayrollSettingDetailsList />
      <div className="w-full flex m-3 flex-col overflow-hidden">
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
         <div class="max-h-screen h-80vh bg-white p-8 w-96 rounded-lg shadow-lg overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Add New Allowance</h2>
            <form onSubmit={handleSubmit}>
              {/* <div className="mb-4">
                <label className="block mb-2 font-semibold">Select Allowance Type</label>
                <input
                  type="text"
                  value={allowanceType}
                  onChange={(e) => setAllowanceType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div> */}
              {/* <div className="mb-4">
                <label className="block mb-2 font-semibold">Custom Label</label>
                <input
                  type="text"
                  value={customLabel}
                  onChange={(e) => setCustomLabel(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div> */}
              {/* <div className="mb-4">
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
              </div> */}
              {/* <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
                <label className="block mb-2 font-semibold">For which Tax Regimes will the Income Tax be calculated?</label>
                <input
                  type="text"
                  value={taxRegimes}
                  onChange={(e) => setTaxRegimes(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div> */}
              <div className="mb-4">
          <label htmlFor="deductionLabel" className="block text-gray-700 text-sm font-bold mb-2">
          What would you want to call this Benefit? *
          </label>
          <input
            type="text"
            id="deductionLabel"
            value={deductionLabel}
            onChange={(e) => setDeductionLabel(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter deduction label"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="showInCTC" className="block text-gray-700 text-sm font-bold mb-2">
          Do you want to include this in salary reports? *
          </label>
          <select
            id="showInCTC"
            value={showInCTC}
            onChange={(e) => setShowInCTC(e.target.value === 'true')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="frequency" className="block text-gray-700 text-sm font-bold mb-2">
          Do you want attendance to effect the eligibility? *
          </label>
          <select
            id="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Annually">Annually</option>
            {/* Add other options as needed */}
          </select>
        </div>
        {/* <div className="mb-4">
          <label htmlFor="effectivePeriod" className="block text-gray-700 text-sm font-bold mb-2">
            From what period is this deduction effective?
          </label>
          <input
            type="text"
            id="effectivePeriod"
            value={effectivePeriod}
            onChange={(e) => setEffectivePeriod(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter effective period"
            required
          />
        </div> */}
        {/* <div className="mb-4">
          <label htmlFor="hasEndingPeriod" className="block text-gray-700 text-sm font-bold mb-2">
            Does this deduction have an ending period?
          </label>
          <select
            id="hasEndingPeriod"
            value={hasEndingPeriod}
            onChange={(e) => setHasEndingPeriod(e.target.value === 'true')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="false">No, It is Continual</option>
            <option value="true">Yes, It has an End Period</option>
          </select>
        </div> */}
        {/* <div className="mb-4">
          <label htmlFor="amountEntryMethod" className="block text-gray-700 text-sm font-bold mb-2">
            How would you like to enter the amount for this deduction?
          </label>
          <select
            id="amountEntryMethod"
            value={amountEntryMethod}
            onChange={(e) => setAmountEntryMethod(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="Manually">Manually, at the time of running payroll</option>
            <option value="Automatically">Automatically, based on system rules</option>
           
          </select>
        </div> */}
        {/* <div className="mb-4">
          <label htmlFor="applicableTo" className="block text-gray-700 text-sm font-bold mb-2">
            Which employees does this deduction apply to?
          </label>
          <select
            id="applicableTo"
            value={applicableTo}
            onChange={(e) => setApplicableTo(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="All">All the Employees</option>
            <option value="Some">Some Employees</option>
            <option value="Specific">Specific Employees</option>
          </select>
        </div> */}
              <div className="flex justify-end">
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
    </section>
  );
};

export default OtherBenefit