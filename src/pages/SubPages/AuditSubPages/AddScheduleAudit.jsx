import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddScheduleAudit = () => {
  const [scheduleFor, setScheduleFor] = useState("asset");
  const themeColor =useSelector((state)=> state.theme.color)
  return (
    <section>
      <div className="m-2">
        <h2
          style={{ background: themeColor }}
          className="text-center text-xl font-bold p-2 rounded-full text-white"
        >
          Schedule Audit
        </h2>
        <div className="md:mx-20 my-5 mb-10 sm:border border-gray-400 p-5 px-10 rounded-lg sm:shadow-xl">
          <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
            Basic Info
          </h2>
          <div className="flex sm:flex-row flex-col justify-around items-center">
            <div className="grid grid-cols-4 items-center">
              <p className="font-semibold">For :</p>
              <div className="flex gap-5">
                <p
                  className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                    scheduleFor === "self" && "bg-black text-white"
                  }`}
                  onClick={() => setScheduleFor("asset")}
                >
                  Asset
                </p>
                <p
                  className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                    scheduleFor === "self" && "bg-black text-white"
                  }`}
                  onClick={() => setScheduleFor("asset")}
                >
                  Services
                </p>
                <p
                  className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                    scheduleFor === "self" && "bg-black text-white"
                  }`}
                  onClick={() => setScheduleFor("asset")}
                >
                  Asset
                </p>
                <p
                  className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                    scheduleFor === "self" && "bg-black text-white"
                  }`}
                  onClick={() => setScheduleFor("asset")}
                >
                  Asset
                </p>
               
              </div>
            </div>
          </div>
          {/* <div className="my-5">
            <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
              Asset Info
            </h2>
            <div className="flex sm:flex-row flex-col justify-around items-center">
              <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-4 w-full">
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Asset Name"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="oem_name"
                    id="oem_name"
                    onChange={handleChange}
                    value={formData.oem_name}
                    placeholder="OEM Name"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    name="model_number"
                    id="model_number"
                    value={formData.model_number}
                    onChange={handleChange}
                    placeholder="Model Number "
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="serial_number"
                    id="serial_number"
                    value={formData.serial_number}
                    onChange={handleChange}
                    placeholder="Serial Number "
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="purchase_cost"
                    id="purchase_cost"
                    value={formData.purchase_cost}
                    onChange={handleChange}
                    placeholder="Purchase Cost "
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="capacity"
                    id="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder="Capacity"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="unit"
                    id="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    placeholder="Unit of measurement"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>

                <div className="flex flex-col">
                  <select
                    className="border p-1 px-4 border-gray-500 rounded-md"
                    value={formData.asset_group_id}
                    onChange={handleChange}
                    name="asset_group_id"
                  >
                    <option value="">Select Group</option>
                    {assetGroups.map((assetGroup) => (
                      <option value={assetGroup.id} key={assetGroup.id}>
                        {assetGroup.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    className="border p-1 px-4 border-gray-500 rounded-md"
                    name="asset_sub_group_id"
                    value={formData.asset_sub_group_id}
                    onChange={handleChange}
                  >
                    <option value="">Select Sub Group</option>
                    {assetSubGoups.map((subGroup) => (
                      <option value={subGroup.id} key={subGroup.id}>
                        {subGroup.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="" className="font-semibold ">
                    Purchased Date:
                  </label>
                  <input
                    type="date"
                    name="purchased_on"
                    id="purchased_on"
                    value={formData.purchased_on}
                    onChange={handleChange}
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <p>Breakdown</p>
                  <Switch
                    checked={!formData.breakdown}
                    onChange={() =>
                      setFormData((prevState) => ({
                        ...prevState,
                        breakdown: !prevState.breakdown,
                      }))
                    }
                  />
                  <p>In Use</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-semibold">Critical:</p>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="yes"
                      checked={formData.critical === true}
                      onChange={() =>
                        setFormData({ ...formData, critical: true })
                      }
                      className="checked:accent-black"
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="no"
                      checked={formData.critical === false}
                      onChange={() =>
                        setFormData({ ...formData, critical: false })
                      }
                      className="checked:accent-black"
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.is_meter}
                    // onClick={() => setMeterApplicable(!meterApplicable)}
                    onChange={() =>
                      setFormData((prevState) => ({
                        ...prevState,
                        is_meter: !prevState.is_meter,
                      }))
                    }
                    name="is_meter"
                    id="meterApplicable"
                  />
                  <label htmlFor="meterApplicable">Meter Applicable</label>
                </div>
                {formData.is_meter && (
                  <>
                    <div className="flex items-center gap-4">
                      <p className="font-semibold">Asset Type:</p>
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          checked={formData.meter_type === "parent"}
                          onChange={() =>
                            setFormData({ ...formData, meter_type: "parent" })
                          }
                          id="parent"
                          className="checked:accent-black"
                          onClick={() => setMeterType("parent")}
                        />
                        <label htmlFor="parent">Parent</label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          checked={formData.meter_type === "sub"}
                          onChange={() =>
                            setFormData({ ...formData, meter_type: "sub" })
                          }
                          id="sub"
                          onClick={() => setMeterType("sub")}
                          className="checked:accent-black"
                        />
                        <label
                          htmlFor="sub"
                          onClick={() => setMeterType("sub")}
                        >
                          Sub
                        </label>
                      </div>
                    </div>
                  </>
                )}
                {formData.is_meter && meterType === "parent" && (
                  <div className="flex flex-col">
                    <select
                      className="border p-1 px-4 border-gray-500 rounded-md"
                      name="applicable_meter_category"
                      value={formData.applicable_meter_category}
                      onChange={handleChange}
                    >
                      <option value="">Select Asset </option>
                      <option value="meter 1">Meter 1</option>
                      <option value="meter 2">Meter 2</option>
                      <option value="meter 2">meter 3</option>
                    </select>
                  </div>
                )}
                {formData.is_meter && meterType === "sub" && (
                  <select
                    className="border p-1 px-4 border-gray-500 rounded-md"
                    name="parent_meter"
                    onChange={handleChange}
                    value={formData.parent_meter}
                  >
                    <option value="">Select Parent Asset </option>
                    <option value="unit1">Parent 1</option>
                    <option value="unit2">Parent 2</option>
                    <option value="unit2">Parent 3</option>
                  </select>
                )}
              </div>
            </div>
          </div> */}
          {/* <div className="my-5">
            <p className="border-b border-black font-semibold">
              Warranty Details
            </p>
            <div className="flex  flex-col gap-4 my-2  justify-between">
              <div className="flex gap-4 my-2">
                <p className="font-semibold">Under Warranty: </p>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    onChange={() =>
                      setFormData({ ...formData, warranty: true })
                    }
                    checked={formData.warranty === true}
                    id="inWarranty"
                    // onClick={() => setWarranty(true)}
                    className="checked:accent-black"
                  />
                  <label htmlFor="inWarranty">Yes</label>
                </div>
                <div className="flex  gap-2">
                  <input
                    type="radio"
                    id="notInWarranty"
                    checked={formData.warranty === false}
                    onChange={() =>
                      setFormData({ ...formData, warranty: false })
                    }
                    // onClick={() => setWarranty(false)}
                    className="checked:accent-black"
                  />
                  <label htmlFor="notInWarranty">No</label>
                </div>
              </div>

              {formData.warranty && (
                <div className="flex md:flex-row flex-col md:items-center my-2 gap-5">
                  <div className="md:flex grid grid-cols-2 items-center gap-2 ">
                    <label htmlFor="" className="font-semibold">
                      Warranty Start Date :
                    </label>
                    <input
                      type="date"
                      name="warranty_start"
                      value={formData.warranty_start}
                      onChange={handleChange}
                      id="warranty_start"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="md:flex grid grid-cols-2 items-center gap-2 ">
                    <label htmlFor="" className="font-semibold">
                      Expiry Date :
                    </label>
                    <input
                      type="date"
                      name="warranty_expiry"
                      value={formData.warranty_expiry}
                      onChange={handleChange}
                      id="warranty_expiry"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                  <div className="md:flex grid grid-cols-2 items-center gap-2 ">
                    <label htmlFor="" className="font-semibold">
                      Commissioning Date :
                    </label>
                    <input
                      type="date"
                      value={formData.installation}
                      onChange={handleChange}
                      name="installation"
                      id=""
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="my-5">
              <p className="border-b border-black font-semibold">
                Supplier Contact Details
              </p>
              <div className=" flex md:items-center md:justify-between flex-col md:flex-row">
                <div className="flex flex-col my-2">
                  <label htmlFor="" className="font-semibold">
                    Select Supplier:
                  </label>
                  <select
                    className="border p-1 px-4 border-gray-500 rounded-md"
                    value={formData.vendor_id}
                    onChange={handleChange}
                    name="vendor_id"
                  >
                    <option value="">Select Supplier</option>
                    {vendors.map((vendor) => (
                      <option value={vendor.id} key={vendor.id}>
                        {vendor.vendor_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div> */}
          {/* <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
            Attachments
          </h2> */}
          {/* <div className="flex flex-col gap-2">
            <div>
              <p className="border-b border-black my-1 font-semibold">
                Purchase Invoice
              </p>
              <FileInputBox
                handleChange={(files) => handleFileChange(files, "invoice")}
                fieldName={"invoice"}
              />
            </div>
            <div>
              <p className="border-b border-black my-1 font-semibold">
                Insurance Details
              </p>
              <FileInputBox
                // handleChange={(files) => handleFileChange(files, "insurance")}
                fieldName={"insurance"}
              />
            </div>
            <div>
              <p className="border-b border-black my-1 font-semibold">
                Manuals
              </p>
              <FileInputBox
                // handleChange={(files) => handleFileChange(files, "manuals")}
                fieldName={"manuals"}
              />
            </div>
            <div>
              <p className="border-b border-black my-1 font-semibold">
                Other Files
              </p>
              <FileInputBox
                // handleChange={(files) => handleFileChange(files, "others")}
                fieldName={"others"}
              />
            </div>
          </div> */}
          <div className="sm:flex justify-center grid gap-2 my-5 ">
            <button
              className="bg-black text-white p-2 px-4 rounded-md font-medium"
            //   onClick={handleSubmit}
            >
              Save & Show Details
            </button>
            {/* <button className=" border-black border-2  p-2 px-4 rounded-md font-medium">
              Save & Add PPM
            </button>
            <button className="border-black border-2 p-2 px-4 rounded-md font-medium">
              Save & Add AMC
            </button>
            <button
              className=" border-black border-2  p-2 px-4 rounded-md font-medium"
              onClick={handleSaveAndCreate}
            >
              Save & Create New Asset
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddScheduleAudit;
