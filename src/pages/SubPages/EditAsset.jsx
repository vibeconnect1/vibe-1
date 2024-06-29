import React, { useEffect, useState } from "react";
import Switch from "../../Buttons/Switch";
import { getItemInLocalStorage } from "../../utils/localStorage";
import {
  EditSiteAsset,
  getAssetGroups,
  getAssetSubGroups,
  getFloors,
  getParentAsset,
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
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";

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
  const [assetSubGoups, setAssetSubGroups] = useState([]);
  const [parentAssets, setParentAssets] = useState([]);
  const { id } = useParams();
  const [formData, setFormData] = useState({
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
    sub_group_id: "",
    asset_type: "",
    purchased_on: "",
    breakdown: false,
    critical: false,
    installation: "",
    warranty: false,
    warranty_start: "",
    warranty_expiry: "",
    is_meter: false,
    meter_type: "",
    applicable_meter_category: "",
    parent_asset_id: "",
    meter_category: "",
    vendor_id: "",
    description: "",
    remarks: "",
    oem_name: "",
    uom: "",

    //
    invoice: [],
    insurance: [],
    manuals: [],
    others: [],
  });
  console.log(formData);
  const themeColor = useSelector((state) => state.theme.color);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const details = await getSiteAssetDetails(id);
        // setFormData(details.data);
        setFormData(prevFormData => ({
          ...prevFormData,
          ...details.data,
          invoice: details.data.invoice || [],
          insurance: details.data.insurance || [],
          manuals: details.data.manuals || [],
          others: details.data.others || []
        }));
        fetchFloor(details.data.building_id);
        getUnit(details.data.floor_id);
        fetchSubGroups(details.data.asset_group_id);
        fetchParentAsset(details.data.asset_group_id);
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
    const fetchSubGroups = async (groupId) => {
      try {
        const subGroupResponse = await getAssetSubGroups(groupId);
        console.log(subGroupResponse);
        setAssetSubGroups(
          subGroupResponse.map((item) => ({
            name: item.name,
            id: item.id,
          }))
        );
        console.log(subGroupResponse);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchParentAsset = async (groupId) => {
      try {
        const parentAssetResponse = await getParentAsset(groupId);
        console.log(parentAssetResponse);
        setParentAssets(
          parentAssetResponse.data.site_assets.map((item) => ({
            name: item.name,
            id: item.id,
          }))
        );
      
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
    const fetchSubGroups = async (groupId) => {
      try {
        const subGroupResponse = await getAssetSubGroups(groupId);
        console.log(subGroupResponse);
        setAssetSubGroups(
          subGroupResponse.map((item) => ({
            name: item.name,
            id: item.id,
          }))
        );
        console.log(subGroupResponse);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchParentAsset = async (grpID) => {
      const parentAssetResp = await getParentAsset(grpID);
      console.log(parentAssetResp.data.site_assets);
      setParentAssets(parentAssetResp.data.site_assets);
    };

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
    } else if (
      e.target.type === "select-one" &&
      e.target.name === "asset_group_id"
    ) {
      const groupId = Number(e.target.value);
      console.log("groupId:" + groupId);
      await fetchSubGroups(groupId);
      await fetchParentAsset(groupId);

      setFormData({
        ...formData,
        asset_group_id: groupId,
      });
    }  else {
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
    setFormData(prevFormData => ({
      ...prevFormData,
      [fieldName]: files || [], // Ensure it's always an array
    }));
    console.log(fieldName);
  };
  
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (formData.warranty_start >= formData.warranty_expiry) {
      toast.error("Warranty Start Date must be before Expiry Date.");
      return;
    }
  
    if (formData.warranty_start < formData.purchased_on || formData.installation < formData.purchased_on) {
      toast.error(
        "Warranty Start Date and Commissioning Date must be after or equal to Purchase Date."
      );
      return;
    }
    try {
      toast.loading("Creating Asset Please Wait!");
      const formDataSend = new FormData();

      formDataSend.append("site_asset[site_id]", formData.site_id);
      formDataSend.append("site_asset[building_id]", formData.building_id);
      formDataSend.append("site_asset[floor_id]", formData.floor_id);
      formDataSend.append("site_asset[unit_id]", formData.unit_id);
      formDataSend.append("site_asset[name]", formData.name);
      formDataSend.append("site_asset[oem_name]", formData.oem_name);
      formDataSend.append("site_asset[serial_number]", formData.serial_number);
      formDataSend.append("site_asset[model_number]", formData.model_number);
      formDataSend.append("site_asset[purchased_on]", formData.purchased_on);
      formDataSend.append("site_asset[purchase_cost]", formData.purchase_cost);
      formDataSend.append("site_asset[installation]", formData.installation);
      formDataSend.append(
        "site_asset[warranty_expiry]",
        formData.warranty_expiry
      );
      // formDataSend.append("site_asset[user_id]", 2);
      formDataSend.append("site_asset[critical]", formData.critical);
      formDataSend.append("site_asset[capacity]", formData.capacity);
      formDataSend.append("site_asset[breakdown]", formData.breakdown);
      formDataSend.append("site_asset[is_meter]", formData.is_meter);
      formDataSend.append(
        "site_asset[asset_group_id]",
        formData.asset_group_id
      );
      formDataSend.append("site_asset[vendor_id]", formData.vendor_id);
      formDataSend.append("site_asset[remarks]", formData.remarks);
      formDataSend.append("site_asset[description]", formData.description);
      formDataSend.append("site_asset[uom]", formData.uom);
      formDataSend.append("site_asset[asset_type]", formData.asset_type);
      (formData.invoice || []).forEach((file, index) => {
        formDataSend.append(`purchase_invoices[]`, file);
      });
  
      (formData.insurance || []).forEach((file, index) => {
        console.log("-----------------");
        console.log(index);
        console.log(file);
        formDataSend.append(`insurances[]`, file);
      });
  
      // (formData.manuals || []).forEach((file, index) => {
      //   formDataSend.append(`manuals[]`, file);
      // });
  
      (formData.others || []).forEach((file, index) => {
        formDataSend.append(`other_files[]`, file);
      });

      const response = await EditSiteAsset(formDataSend, id);
      toast.dismiss();
      toast.success("Asset Edited Successfully");
      console.log("Response:", response.data);
      navigate(`/assets/asset-details/${response.data.id}`);
    } catch (error) {
      toast.dismiss();
      console.error("Error:", error);
    }
  };

  return (
    // <section>
    //   <div className="m-2">
    <section className="flex">
      <div className="hidden md:block">

      <Navbar />
      </div>
      <div className="md:p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        <h2
          style={{ background: themeColor }}
          className="text-center text-xl font-bold p-2 rounded-full text-white"
        >
          Edit Asset
        </h2>
        <div className="md:mx-16 my-5 mb-10 sm:border border-gray-400 p-5 px-10 rounded-lg sm:shadow-xl">
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
                    name="uom"
                    id="unit"
                    value={formData.uom}
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
                    name="sub_group_id"
                    value={formData.sub_group_id}
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
                      <p className="font-semibold">Meter Type:</p>
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          name="asset_type"
                          checked={formData.asset_type === "parent"}
                          onChange={() =>
                            setFormData({ ...formData, asset_type: "parent" })
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
                          name="asset_type"
                          checked={formData.asset_type === "sub"}
                          onChange={() =>
                            setFormData({ ...formData, asset_type: "sub" })
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
                {/* {formData.is_meter && meterType === "parent" && (
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
                )} */}
                {formData.is_meter && formData.asset_type === "sub" && (
                  <select
                    className="border p-1 px-4 border-gray-500 rounded-md"
                    name="parent_asset_id"
                    onChange={handleChange}
                    value={formData.parent_asset_id}
                  >
                    <option value="">Select Parent Asset </option>
                    {parentAssets.map((parent)=>(
                      <option value={parent.id} key={parent.id}>{parent.name}</option>
                    ))}
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
                  name="remarks"
                  placeholder="Enter Comment"
                  rows=""
                  cols={25}
                  value={formData.remarks}
                  onChange={handleChange}
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
                  name="description"
                  placeholder="Enter Description"
                  rows="3"
                  cols={25}
                  value={formData.description}
                  onChange={handleChange}
                  className="border px-2 rounded-md text-sm flex flex-auto border-black w-full"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="my-5">
            <p className="border-b border-black font-semibold">
              Warranty Details
            </p>
            <div className="flex  flex-col gap-4 my-2 justify-between">
              <div className="flex gap-4 my-2">
                <p className="font-semibold">Under Warranty: </p>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="inWarranty"
                    checked={formData.warranty_start !== "" && true}
                    onChange={() =>
                      setFormData({ ...formData, warranty: true })
                    }
                    className="checked:accent-black"
                    name="warranty"
                  />
                  <label htmlFor="inWarranty">Yes</label>
                </div>
                <div className="flex  gap-2">
                  <input
                    type="radio"
                    onChange={() =>
                      setFormData({ ...formData, warranty: false })
                    }
                    checked={formData.warranty_start === "" &&  false}
                    id="notInWarranty"
                    className="checked:accent-black"
                    name="warranty"
                  />
                  <label htmlFor="notInWarranty">No</label>
                </div>
              </div>

              {formData.warranty_start !== "" && (
                <div className="flex md:flex-row flex-col md:items-center my-2 gap-5">
                  <div className="md:flex grid grid-cols-2 items-center gap-2 ">
                    <label htmlFor="" className="font-medium text-sm">
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
                    <label htmlFor="" className="font-medium text-sm">
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
                    <label htmlFor="" className="font-medium text-sm">
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
                isMulti={true}
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
