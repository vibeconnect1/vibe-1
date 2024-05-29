import React, { useEffect, useState } from "react";
import Switch from "../../Buttons/Switch";
import { getItemInLocalStorage } from "../../utils/localStorage";
import {
  EditSiteAsset,
  getAssetGroups,
  getFloors,
  getSiteAssetDetails,
  getUnits,
  getVendors,
  postSiteAsset,
} from "../../api";
import { BiCross, BiPlus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import AddSuppliers from "../../containers/modals/AddSuppliersModal";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Selector from "../../containers/Selector";
import FileInputBox from "../../containers/Inputs/FileInputBox";

const EditAsset = () => {
  const buildings = getItemInLocalStorage("Building");
  // const [meterApplicable, setMeterApplicable] = useState(false);
  const [meterType, setMeterType] = useState("");
  const [floors, setFloors] = useState([]);
  const [units, setUnits] = useState([]);
  const [addConsumptionFields, setAddConsumptionFields] = useState([{}]);
  const [addNonConsumptionFields, setAddNonConsumptionFields] = useState([{}]);
  const [addSupplierModal, showAddSupplierMOdal] = useState(false);
  const [vendors, setVendors] = useState([]);
  const [assetGroups, setAssetGroup] = useState([]);
  //
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  //
  const { id } = useParams();
  const [formData, setFormData] = useState({
    area: "",
    site_id: "",
    building_id: "",
    floor_id: "",
    unit_id: "",
    name: "",
    asset_number: "",
    serial_number: "",
    model_number: "",
    wing_id: "",
    purchase_cost: "",
    capacity: "",
    unit: "",
    group: "",
    sub_group: "",
    asset_type: "",
    purchased_on: formattedDate,
    breakdown: false,
    critical: false,
    installation: formattedDate,
    warranty: false,
    warranty_expiry: formattedDate,
    is_meter: false,
    meter_type: "",
    applicable_meter_category: "",
    parent_meter: "",
    meter_category: "",
    vendor_id: "",
    description: "",
    oem_name: "",
    //
    invoice: [],
    insurance: [],
    manuals: [],
    others: [],
  });
  console.log(formData);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const details = await getSiteAssetDetails(id);
        setFormData(details.data);
        fetchFloor(details.data.building_id);
        getUnit(details.data.floor_id);
      } catch (error) {
        console.error("Error fetching site asset details:", error);
      }
    };

    const fetchFloor = async (floorID) => {
      try {
        const build = await getFloors(floorID);
        setFloors(build.data.map((item) => ({ name: item.name, id: item.id })));
      } catch (e) {
        console.log(e);
      }
    };
    const getUnit = async (UnitID) => {
      try {
        const unit = await getUnits(UnitID);
        setUnits(unit.data.map((item) => ({ name: item.name, id: item.id })));
        console.log(unit);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchVendor = async () => {
      try {
        const vendorResp = await getVendors();
        setVendors(vendorResp.data);
        console.log(vendorResp.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchAssetGroups = async () => {
      try {
        const assetGroupResponse = await getAssetGroups();
        setAssetGroup(assetGroupResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    getDetails();
    fetchVendor();
    fetchAssetGroups();
  }, [id]);

  const handleChange = async (e) => {
    async function fetchFloor(floorID) {
      try {
        const build = await getFloors(floorID);
        setFloors(build.data.map((item) => ({ name: item.name, id: item.id })));
      } catch (e) {
        console.log(e);
      }
    }

    async function getUnit(UnitID) {
      try {
        const unit = await getUnits(UnitID);
        setUnits(unit.data.map((item) => ({ name: item.name, id: item.id })));
        console.log(unit);
      } catch (error) {
        console.log(error);
      }
    }

    if (e.target.type === "select-one" && e.target.name === "building_id") {
      const BuildID = Number(e.target.value);
      await fetchFloor(BuildID);

      setFormData({
        ...formData,
        building_id: BuildID,
      });
    } else if (
      e.target.type === "select-one" &&
      e.target.name === "floor_name"
    ) {
      const UnitID = Number(e.target.value);
      await getUnit(UnitID);
      setFormData({
        ...formData,
        floor_id: UnitID,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleConsumptionAddFields = () => {
    setAddConsumptionFields([...addConsumptionFields, {}]);
  };
  const handleRemoveConsumptionFields = (index) => {
    const newFields = [...addConsumptionFields];
    newFields.splice(index, 1);
    setAddConsumptionFields(newFields);
  };
  const handleNonConsumptionAddFields = () => {
    setAddNonConsumptionFields([...addNonConsumptionFields, {}]);
  };
  const handleRemoveNonConsumptionFields = (index) => {
    const newFields = [...addNonConsumptionFields];
    newFields.splice(index, 1);
    setAddNonConsumptionFields(newFields);
  };

  // const handleFileChange = (files, fieldName) => {
  //   // const files = Array.from(event.target.files);
  //   setFormData({
  //     ...formData,
  //     [fieldName]: files,
  //   });
  // };

  const handleFileChange = (files, fieldName) => {
    // Changed to receive 'files' directly
    setFormData({
      ...formData,
      [fieldName]: files,
    });
    console.log(fieldName);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Createing Asset Please wait!");
      const response = await EditSiteAsset(formData, id);
      console.log("Asset Created successfully:", response);
      // setFormData({});
      toast.dismiss();
      toast.success("Asset Created successfully");
      navigate("/assets");
    } catch (error) {
      console.error("Error submitting complaint:", error);
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault(); // Prevent default form submission behavior

  //   // Create a new FormData object
  //   const formDataToSend = new FormData();

  //   Object.entries(formData).forEach(([key, value]) => {
  //     console.log(`Appending ${key}: ${value}`); // Log each key-value pair being appended
  //     formDataToSend.append(key, value);
  //   });

  //   // formData.file1.forEach((file, index) => {
  //   //   formDataToSend.append(`file${index + 1}`, file);
  //   // });

  //   try {
  //     console.log("Form data to send:", formDataToSend);
  //     const resp = await EditSiteAsset(formDataToSend, id);
  //     console.log("resp:", resp);
  //     console.log("Form data to send:", formDataToSend);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Edit Asset
        </h2>
        <div className="md:mx-20 my-5 mb-10 sm:border border-gray-400 p-5 px-10 rounded-lg sm:shadow-xl">
          <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
            Location Details
          </h2>
          <div className="flex sm:flex-row flex-col justify-around items-center">
            <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-2 w-full">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Select Building :
                </label>
                <select
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  onChange={handleChange}
                  value={formData.building_id}
                  name="building_id"
                >
                  <option value="">Select Building</option>
                  {buildings?.map((building) => (
                    <option key={building.id} value={building.id}>
                      {building.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Select Wing :
                </label>
                <select
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  onChange={handleChange}
                  value={formData.wing_id}
                  name="wing"
                >
                  <option value="">Select wing</option>
                </select>
              </div> */}
              {/* <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Select Area :
                </label>
                <select
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  onChange={handleChange}
                  value={formData.area}
                  name="area"
                >
                  <option value="">Select Site</option>
                </select>
              </div> */}
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Select Floor :
                </label>
                <select
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  onChange={handleChange}
                  value={formData.floor_id}
                  name="floor_name"
                >
                  <option value="">Select Floor</option>
                  {floors?.map((floor) => (
                    <option value={floor.id} key={floor.id}>
                      {floor.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Select Unit :
                </label>
                <select
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  name="unit_id"
                  value={formData.unit_id}
                  onChange={handleChange}
                >
                  <option value="">Select Unit</option>
                  {units?.map((unit) => (
                    <option value={unit.id} key={unit.id}>
                      {unit.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
              Asset Info
            </h2>
            <div className="flex sm:flex-row flex-col justify-around items-center">
              <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-2 w-full">
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
                {/* <div className="flex flex-col">
                  <input
                    type="text"
                    name="asset_number"
                    id="asset_number"
                    onChange={handleChange}
                    value={formData.asset_number}
                    placeholder="Asset Number"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div> */}

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
                    placeholder="Unit"
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
                    name="sub_group"
                    value={formData.sub_group}
                    onChange={handleChange}
                  >
                    <option value="">Select Sub Group</option>
                    <option value="Sub Group 1">Sub Group 1</option>
                    <option value="Sub Group 2">Sub Group 2</option>
                    <option value="Sub Group 3">Sub Group 3</option>
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
                      <p className="font-semibold">Meter Type:</p>
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
                      <option value="">Select Asset Type </option>
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

            <div>
              <div className="flex flex-col justify-around">
                <label
                  htmlFor=""
                  className="font-semibold my-1 flex justify-start"
                >
                  Comment :
                </label>
                <textarea
                  name="heading"
                  placeholder="Enter Comment"
                  rows=""
                  cols={25}
                  // value={formData.comment}
                  // onChange={handleChange}
                  className="border px-2 rounded-md flex flex-auto border-black w-full"
                ></textarea>
              </div>
              <div className="flex flex-col justify-around">
                <label
                  htmlFor=""
                  className="font-semibold my-1 flex justify-start"
                >
                  Description :
                </label>
                <textarea
                  name="heading"
                  placeholder="Enter Description"
                  rows="3"
                  cols={25}
                  value={formData.description}
                  onChange={handleChange}
                  className="border px-2 rounded-md text-sm flex flex-auto border-black w-full"
                ></textarea>
              </div>
            </div>
            {/* {formData.is_meter && meterType === "parent" && (
              <>
                <p className="border-b border-black font-semibold my-2">
                  Consumption Asset Measure
                </p>
                {addConsumptionFields.map((data, i) => (
                  <div key={i}>
                    <div className="my-5">
                      <div className="grid md:grid-cols-4 my-5 gap-4">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Name"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                        <div className="flex flex-col">
                          <select className="border p-1 px-4 border-gray-500 rounded-md">
                            <option value="" className="text-gray-300">
                              Select Unit Type{" "}
                            </option>
                            <option value="unit1">Type 1</option>
                            <option value="unit2">Type 2</option>
                            <option value="unit2">Type 3</option>
                          </select>
                        </div>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Min"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Max"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Alert Below Value"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Alert Above Value"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder=" Multiplier Factor"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                        <div className="flex items-center gap-2">
                          <input type="checkbox" name="" id="" />
                          <label htmlFor="">Check Previous Reading</label>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button
                          className="p-1 border-2 border-red-500 text-white hover:bg-white hover:text-red-500 bg-red-500 px-4 transition-all duration-300 rounded-md "
                          onClick={() => handleRemoveConsumptionFields()}
                        >
                          <IoClose />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  className="p-1 border-2 border-black px-4 rounded-md my-2"
                  onClick={() => handleConsumptionAddFields()}
                >
                  <BiPlus />
                </button>
                <p className="border-b border-black font-semibold">
                  Non Consumption Asset Measure
                </p>
                {addNonConsumptionFields.map((data, i) => (
                  <div key={i}>
                    <div className="my-5">
                      <div className="grid md:grid-cols-4 my-5 gap-4">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Name"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                        <div className="flex flex-col">
                          <select className="border p-1 px-4 border-gray-500 rounded-md">
                            <option value="" className="text-gray-300">
                              Select Unit Type{" "}
                            </option>
                            <option value="unit1">Type 1</option>
                            <option value="unit2">Type 2</option>
                            <option value="unit2">Type 3</option>
                          </select>
                        </div>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Min"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Max"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Alert Below Value"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Alert Above Value"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder=" Multiplier Factor"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                        <div className="flex items-center gap-2">
                          <input type="checkbox" name="" id="" />
                          <label htmlFor=""> Check Previous Reading</label>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button
                          className="p-1 border-2 border-red-500 text-white hover:bg-white hover:text-red-500 bg-red-500 px-4 transition-all duration-300 rounded-md "
                          onClick={() => handleRemoveNonConsumptionFields()}
                        >
                          <IoClose />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  className="p-1 border-2 border-black px-4 rounded-md my-2"
                  onClick={() => handleNonConsumptionAddFields()}
                >
                  <BiPlus />
                </button>
              </>
            )} */}
            {/* {formData.is_meter && meterType === "sub" && (
              <div className="my-5">
                <p className="border-b border-black font-semibold">
                  Consumption Asset Measure
                </p>
                <div className="grid grid-cols-4 my-5 gap-4">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Name"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                  <div className="flex flex-col">
                    <select className="border p-1 px-4 border-gray-500 rounded-md">
                      <option value="" className="text-gray-300">
                        Select Unit Type{" "}
                      </option>
                      <option value="unit1">Type 1</option>
                      <option value="unit2">Type 2</option>
                      <option value="unit2">Type 3</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Min"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Max"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Alert Below Value"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Alert Above Value"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor=""> Check Previous Reading</label>
                  </div>
                </div>
              </div>
            )} */}
          </div>
          <div className="my-5">
            <p className="border-b border-black font-semibold">
              Warranty Details
            </p>
            <div className="flex sm:flex-row flex-col gap-4 my-2 items-center justify-between">
              <div className="flex gap-4 my-2">
                <p className="font-semibold">Under Warranty: </p>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="inWarranty"
                    checked={formData.warranty === true}
                    onChange={() =>
                      setFormData({ ...formData, warranty: true })
                    }
                    className="checked:accent-black"
                  />
                  <label htmlFor="inWarranty">Yes</label>
                </div>
                <div className="flex  gap-2">
                  <input
                    type="radio"
                    onChange={() =>
                      setFormData({ ...formData, warranty: false })
                    }
                    checked={formData.warranty === false}
                    id="notInWarranty"
                    className="checked:accent-black"
                  />
                  <label htmlFor="notInWarranty">No</label>
                </div>
              </div>

              {formData.warranty && (
                <div className="flex md:flex-row flex-col md:items-center my-2 gap-5">
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
                  <div className="flex items-center gap-2">
                    <label htmlFor="" className="font-semibold">
                      Commissioning Date:
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
                Supplier Details
              </p>
              <div className="flex md:items-center md:justify-between flex-col md:flex-row">
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
                {/* <button
                  className="p-1 border-2 border-black px-4 rounded-md hover:bg-black hover:text-white transition-all duration-300"
                  onClick={() => showAddSupplierMOdal(true)}
                >
                  Add Supplier
                </button> */}
                {addSupplierModal && (
                  <AddSuppliers onclose={() => showAddSupplierMOdal(false)} />
                )}
              </div>
            </div>
            {/* <div className="my-5">
              <p className="border-b border-black font-semibold">
                Meter Category Type
              </p>
              <div className="flex flex-col my-2">
                <label htmlFor="" className="font-semibold">
                  Select Meter Category:
                </label>
                <select
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  value={formData.meter_category}
                  onChange={handleChange}
                  name="meter_category"
                >
                  <option value="">Select Meter Category</option>
                  <option value="unit1">Category 1</option>
                  <option value="unit2">Category 2</option>
                  <option value="unit2">Category 3</option>
                </select>
              </div>
            </div> */}
          </div>
          <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
            Attachments
          </h2>
          <div className="flex flex-col gap-2">
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
                handleChange={(files) => handleFileChange(files, "insurance")}
                fieldName={"insurance"}
              />
            </div>
            <div>
              <p className="border-b border-black my-1 font-semibold">
                Manuals
              </p>
              <FileInputBox
                handleChange={(files) => handleFileChange(files, "manuals")}
                fieldName={"manuals"}
              />
            </div>
            <div>
              <p className="border-b border-black my-1 font-semibold">
                Other Files
              </p>
              <FileInputBox
                handleChange={(files) => handleFileChange(files, "others")}
                fieldName={"others"}
              />
            </div>
          </div>
          <div className="sm:flex grid gap-2 my-5 justify-center">
            <button
              className="bg-black text-white p-2 px-4 rounded-md font-medium"
              onClick={handleSubmit}
            >
              Save & Show Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditAsset;
