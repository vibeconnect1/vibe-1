import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { Switch } from "../../../../Buttons";
import { FaQrcode } from "react-icons/fa";
import AssetQrCode from "./AssetQrCode";

const Assetinfo = ({ assetData }) => {
  const [assetBreakdown, setAssetBreakdown] = useState(false);
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
    created_at,
    updated_at,
    description,
    capacity,
    warranty_start,
  } = assetData;
  const [qrCode, setQrCode] = useState(false);

  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Adjust the format as needed
  };

  const handleToggle = () => {
    setAssetBreakdown(!breakdown);
  }
  return (
    <section>
      <div className="m-2">
        <div className="border-2 flex flex-col my-5 p-4 gap-4 rounded-md border-gray-400">
          <div className=" flex justify-between ">
            <button className="border-2 px-4 p-1 rounded-full text-blue-500 flex gap-2 items-center hover:bg-blue-500 hover:text-white border-blue-500">
              <CgAdd />
              Add PPM
            </button>
            <div className="flex items-center gap-2 ">
              {/* modify switch */}
              <p>Breakdown</p>
              <Switch checked={!breakdown} onChange={handleToggle}  />
              <p>In use</p>
            </div>
            <div className="flex gap-2">
              <button
                className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white"
                onClick={() => setQrCode(true)}
              >
                <FaQrcode /> QR Code
              </button>
              <button className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white">
                <BiEditAlt />
                Edit Details
              </button>
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Location Details
            </h2>
            <div className="my-5 px-10 text-sm items-center font-medium grid gap-4 grid-cols-2">
              <div className="grid grid-cols-2">
                <p>Site :</p>
                <p className="text-xs">NA</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Unit : </p>
                <p className="text-xs">{unit_name}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Floor : </p>
                <p className="text-xs">{floor_name}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Area : </p>
                <p className="text-xs">NA</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Wing : </p>
                <p className="text-xs">NA </p>
              </div>
              <div className="grid grid-cols-2">
                <p>Building : </p>
                <p className="text-xs">{building_name}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Asset Information
            </h2>
            <div className="my-5 px-10 items-center font-medium grid gap-4 grid-cols-3 text-sm">
              <div className="grid grid-cols-2">
                <p>Client Name :</p>
                <p className="text-xs"></p>
              </div>
              <div className="grid grid-cols-2">
                <p>Asset Name : </p>
                <p className="text-xs">{name}</p>
              </div>
              <div>
                <p>Asset Number : </p>
                <p className="text-xs"></p>
              </div>
              <div className="grid grid-cols-2">
                <p>Asset Code : </p>
              </div>
              <div className="grid grid-cols-2">
                <p>Asset Type : </p>
              </div>
              <div className="grid grid-cols-2">
                <p>Model Number : </p>
                <p className="text-xs"> {model_number}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Serial Number :</p>
                <p className="text-xs"> {serial_number}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Manufacturer: </p>
              </div>
              <div className="grid grid-cols-2">
                <p>Purchased on : </p>
                <p className="text-xs">{purchased_on}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Date Of Installation: </p>
                <p className="text-xs"></p>
              </div>
              <div className="grid grid-cols-2">
                <p>Breakdown Date: </p>
              </div>
              <div className="grid grid-cols-2">
                <p>Created On : </p>
                <p className="text-xs">{dateFormat(created_at)}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Capacity : </p>
                <p className="text-xs">{capacity}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Purchase Cost : </p>
                <p className="text-xs">{purchase_cost}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Group : </p>
                <p className="text-xs"></p>
              </div>
              <div className="grid grid-cols-2">
                <p>Subgroup: </p>
              </div>
              <div className="grid grid-cols-2">
                <p>Critical : </p>
                <p className="text-xs">{critical ? "Yes" : "No"}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Meter Applicable : </p>
                <p className="text-xs">{is_meter}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Meter Category: </p>
                <p className="text-xs"></p>
              </div>
              <div className="grid grid-cols-2">
                <p>Meter Type Category: </p>
              </div>
              <div className="grid grid-cols-2">
                <p>Updated On : </p>
                <p className="text-xs">{dateFormat(updated_at)}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Comments: </p>
              </div>
              <div className="grid grid-cols-2">
                <p>Description : </p>
                <p className="text-xs">{description}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Warranty Details
            </h2>
            <div className="my-5 px-10 text-sm items-center font-medium grid gap-4 grid-cols-3 w-full">
              <div className="grid grid-cols-2">
                <p>Under Warranty: </p>
              </div>
              <div className="grid grid-cols-2">
                <p>Expiry Date : </p>
                <p className="text-xs">{warranty_expiry}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Commissioning Date:</p>
                <p className="text-xs">{warranty_start} </p>
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
          </div>
        </div>
        {qrCode && <AssetQrCode onClose={() => setQrCode(false)} />}
      </div>
    </section>
  );
};

export default Assetinfo;
