import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { Switch } from "../../../../Buttons";
import { FaQrcode } from "react-icons/fa";
import AssetQrCode from "./AssetQrCode";

const Assetinfo = ({ assetData }) => {
  const {
    floor_name,
    building_name,
    name,
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
              <Switch checked={!breakdown} />
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
              <p>Site :</p>
              <p>Room : </p>
              <p>Floor : {floor_name} </p>
              <p>Area : </p>
              <p>Wing : </p>
              <p>Building : {building_name} </p>
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Asset Information
            </h2>
            <div className="my-5 px-10 items-center font-medium grid gap-4 grid-cols-3 text-sm">
              <p>Client Name :</p>
              <p>Asset Name : {name} </p>
              <p>Asset Number : </p>
              <p>Asset Code : </p>
              <p>Asset Type : </p>
              <p>Model Number : {model_number} </p>
              <p>Serial Number : {serial_number}</p>
              <p>Manufacturer: </p>
              <p>Purchased on : {purchased_on} </p>
              <p>Date Of Installation: </p>
              <p>Breakdown Date: </p>
              <p>Created On : {created_at}</p>
              <p>Capacity : {capacity} </p>
              <p>Purchase Cost : {purchase_cost} </p>
              <p>Group : </p>
              <p>Subgroup: </p>
              <p>Critical : {critical ? "Yes" : "No"} </p>
              <p>Meter Applicable : {is_meter} </p>
              <p>Meter Category: </p>
              <p>Meter Type Category: </p>
              <p>Updated On : {updated_at} </p>
              <p>Comments: </p>
              <p>Description : {description} </p>
            </div>

           
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Warranty Details
            </h2>
            <div className="my-5 px-10 text-sm items-center font-medium grid gap-4 grid-cols-3">
              <p>Under Warranty: </p>
              <p>Expiry Date : {warranty_expiry} </p>
              <p>Commissioning Date:{warranty_start} </p>
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
