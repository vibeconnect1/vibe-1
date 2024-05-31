import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { Switch } from "../../../../Buttons";
import { FaQrcode } from "react-icons/fa";
import AssetQrCode from "./AssetQrCode";
import DataTable from "react-data-table-component";
import { Link, useParams } from "react-router-dom";
import { postAssetparams } from "../../../../api";
import toast from "react-hot-toast";
const initialFormData = {
  name: "",
  order: "",
  digit: "",
  below: "",
  above: "",
  dashboard_view: false,
  consumption_view: false,
};

const Assetinfo = ({ assetData }) => {
  const { id } = useParams();
  const [assetBreakdown, setAssetBreakdown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    order: "",
    digit: "",
    dashboard_view: false,
    consumption_view: false,
    asset_id: id,
    alert_below: "",
    alert_above: "",
    min_val: "",
    max_val: "",
    check_prev: false,
  });

  const {
    floor_name,
    building_name,
    name,
    unit_name,
    serial_number,
    model_number,
    purchased_on,
    purchase_cost,
    warranty_expiry,
    critical,
    breakdown,
    is_meter,
    active,
    remarks,
    created_at,
    updated_at,
    description,
    capacity,
    warranty_start,
    asset_params,
    installation,
  } = assetData;
  const [qrCode, setQrCode] = useState(false);
console.log(assetData)
  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Adjust the format as needed
  };

  const handleToggle = () => {
    setAssetBreakdown(!breakdown);
  };

  // Charactor Limit		Consumption view	Edit	Delete

  const assetParmsColumn = [
    { name: "Name", selector: (row) => row.name },
    { name: "Order", selector: (row) => row.order },
    { name: "Charactor Limit", selector: (row) => row.digit },
    {
      name: "Dashboard view",
      selector: (row) => (row.dashboard_view ? "Yes" : "No"),
    },
    {
      name: "Consumption view",
      selector: (row) => (row.consumption_view ? "Yes" : "No"),
    },
  ];

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "10px",
      },
    },
    headCells: {
      style: {
        textTransform: "upperCase",
      },
    },
    cells: {
      style: {
        fontWeight: "bold",
        fontSize: "10px",
        textAlign: "center",
      },
    },
  };

  const handleAssetParamsChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddConsumptionMeasure = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Adding Asset params Please wait!");
      const response = await postAssetparams(formData);
      console.log("Asset Created successfully:", response);
      // setFormData({});
      toast.dismiss();
      toast.success("Asset Params added successfully");
      // setFormData(initialAddAssetFormData);
      // window.location.reload();
    } catch (error) {
      console.error("Error submitting complaint:", error);
      toast.error("Error Creating Asset!");
    }
  };

  return (
    <section>
      <div className="m-2">
        <div className="border-2 flex flex-col my-5 p-4 gap-4 rounded-md border-gray-400">
          <div className=" flex sm:flex-row flex-col gap-5 justify-between ">
            {/* <button className="border-2 px-4 p-1 rounded-full text-blue-500 flex gap-2 items-center hover:bg-blue-500 hover:text-white border-blue-500 justify-center transition-all duration-500">
              <CgAdd />
              Add PPM
            </button> */}
            <div className="flex items-center gap-2 ">
              {/* modify switch */}
              {/* <p>Breakdown</p>
              <Switch checked={!breakdown} onChange={handleToggle} />
              <p>In use</p> */}
            </div>
            <div className="flex gap-2">
              <button
                className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white transition-all duration-500"
                onClick={() => setQrCode(true)}
              >
                <FaQrcode /> QR Code
              </button>
              <Link
                to={`/assets/edit-asset/${id}`}
                className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full  hover:bg-black hover:text-white transition-all duration-500"
              >
                <BiEditAlt />
                Edit Details
              </Link>
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Location Details
            </h2>
            <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              {/* <div className="grid grid-cols-2 items-center">
                <p>Site :</p>
                <p className="text-sm font-normal "></p>
              </div> */}
              <div className="grid grid-cols-2">
                <p>Building : </p>
                <p className="text-sm font-normal">{building_name}</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Floor : </p>
                <p className="text-sm font-normal">{floor_name}</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Unit : </p>
                <p className="text-sm font-normal">{unit_name}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-b text-xl border-black font-semibold">
              Asset Information
            </h2>
            <div className="my-5 md:px-10 items-center font-medium grid gap-5 md:grid-cols-3 text-sm">
              {/* <div className="grid grid-cols-2 items-center">
                <p>Client Name :</p>
                <p className="text-sm font-normal"></p>
              </div> */}
              <div className="grid grid-cols-2 items-center">
                <p>Asset Name : </p>
                <p className="text-sm font-normal">{name}</p>
              </div>

              <div className="grid grid-cols-2">
                <p>Model Number : </p>
                <p className="text-sm font-normal"> {model_number}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Serial Number :</p>
                <p className="text-sm font-normal"> {serial_number}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Purchased on : </p>
                <p className="text-sm font-normal">{purchased_on}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Date Of Installation: </p>
                <p className="text-sm font-normal">{installation}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Breakdown : </p>
                <p className="text-sm font-normal">{breakdown ? "Yes": "No"}</p>
              </div >
              <div className="grid grid-cols-2">
                <p>Created On : </p>
                <p className="text-sm font-normal">{dateFormat(created_at)}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Capacity : </p>
                <p className="text-sm">{capacity}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Purchase Cost : </p>
                <p className="text-sm font-normal">{purchase_cost}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Group : </p>
                <p className="text-sm font-normal"></p>
              </div>
              <div className="grid grid-cols-2">
                <p>Subgroup : </p>
              </div>
              <div className="grid grid-cols-2">
                <p>Critical : </p>
                <p className="text-sm font-normal">{critical ? "Yes" : "No"}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Meter Applicable : </p>
                <p className="text-sm font-normal">{is_meter}</p>
              </div>

              <div className="grid grid-cols-2">
                <p>Updated On : </p>
                <p className="text-sm font-normal">{dateFormat(updated_at)}</p>
              </div>
              
              
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Additional Info
            </h2>
            <div className="flex flex-col gap-2">
                <p className="font-medium">Comments: </p>
                <p className="">{remarks}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Description : </p>
                <p className="text-sm">{description}</p>
              </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Warranty Details
            </h2>
            <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-3 w-full">
              <div className="grid grid-cols-2 items-center">
                <p>Warranty Start Date:</p>
                <p className="text-sm">{warranty_start} </p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Expiry Date : </p>
                <p className="text-sm">{warranty_expiry}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Attachments
            </h2>
            <div className="my-5 px-10 text-sm items-center font-medium grid gap-4 grid-cols-3">
              No attachments
            </div>
            <div className="">
              <h2 className="border-b  text-xl border-black font-semibold">
                Consumption Asset Measure
              </h2>
              <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-2 w-full py-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-medium">
                    Name :
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name || ""}
                    onChange={handleAssetParamsChange}
                    placeholder="Name"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="order" className="font-medium">
                    Order :
                  </label>
                  <input
                    type="text"
                    name="order"
                    id="order"
                    value={formData.order || ""}
                    onChange={handleAssetParamsChange}
                    placeholder="Enter Order"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="charactorLimt" className="font-medium">
                    Input Charactor Limit :
                  </label>
                  <input
                    type="text"
                    name="digit"
                    value={formData.digit || ""}
                    onChange={handleAssetParamsChange}
                    id="charactorLimt"
                    placeholder="charactor Limt"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="bleow" className="font-medium">
                    Alert Below :
                  </label>
                  <input
                    type="text"
                    name="alert_below"
                    id="below"
                    value={formData.alert_below}
                    onChange={handleAssetParamsChange}
                    placeholder="Alert Below Value"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="above" className="font-medium">
                    Alert Above :
                  </label>
                  <input
                    type="text"
                    name="alert_above"
                    id="above"
                    value={formData.alert_above}
                    onChange={handleAssetParamsChange}
                    placeholder="Alert Above Value"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="min" className="font-medium">
                    Min :
                  </label>
                  <input
                    type="text"
                    name="min_val"
                    id="min"
                    value={formData.min_val}
                    onChange={handleAssetParamsChange}
                    placeholder="Min Value"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-medium">
                    Max :
                  </label>
                  <input
                    type="text"
                    name="max_val"
                    id="above"
                    value={formData.max_val}
                    onChange={handleAssetParamsChange}
                    placeholder="Max Value"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                {/* <div className="grid grid-cols-3 gap-4 my-4"> */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="dashboard_view"
                    id="dashboard_view"
                    checked={formData.dashboard_view || false}
                    onChange={() =>
                      setFormData((prevState) => ({
                        ...prevState,
                        dashboard_view: !prevState.dashboard_view,
                      }))
                    }
                  />
                  <label htmlFor="dashboard_view">Dashboard View</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="consumption_view"
                    id="consumption_view"
                    checked={formData.consumption_view || false}
                    // onClick={() => setMeterApplicable(!meterApplicable)}
                    onChange={() =>
                      setFormData((prevState) => ({
                        ...prevState,
                        consumption_view: !prevState.consumption_view,
                      }))
                    }
                  />
                  <label htmlFor="consumption_view">Consumption View</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="check_prev"
                    id="check_prev"
                    checked={formData.check_prev || false}
                    // onClick={() => setMeterApplicable(!meterApplicable)}
                    onChange={() =>
                      setFormData((prevState) => ({
                        ...prevState,
                        check_prev: !prevState.check_prev,
                      }))
                    }
                  />
                  <label htmlFor="check_prev">Check previous Reading</label>
                </div>
                {/* </div> */}
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-black p-1 px-4 font-medium text-white rounded-md"
                  onClick={handleAddConsumptionMeasure}
                >
                  Add
                </button>
              </div>
              <div className="border-b-2 my-2 border-gray-400" />
            </div>
          </div>
          <DataTable
            columns={assetParmsColumn}
            data={asset_params}
            customStyles={customStyle}
            pagination
            responsive
            fixedHeader
            highlightOnHover
          />
        </div>
        {qrCode && <AssetQrCode onClose={() => setQrCode(false)} />}
      </div>
    </section>
  );
};

export default Assetinfo;
