import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaQrcode } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import qr from "/QR.png"
import VisitorQRCode from "../../../containers/modals/VisitorQRCode";
import AssetQrCode from "./assetSubDetails/AssetQrCode";
import ModalWrapper from "../../../containers/modals/ModalWrapper";
const PatrollingDetails = () => {
  const themeColor = useSelector((state) => state.theme.color);
 const [qrCode, setQrCode] = useState(false)
 const {id} = useParams()


 const handlePrintQRCode = async () => {
  console.log("qr")
  const qrCodeElement = document.getElementById("qrCodeElement");

  if (!qrCodeElement) {
    return;
  }

  // Use html2canvas to capture the QR code as an image
  const canvas = await html2canvas(qrCodeElement);
  const qrImage = canvas.toDataURL("image/png");

  const doc = new jsPDF();
  const margin = 10;
  const pageWidth = doc.internal.pageSize.getWidth();

  // Add the QR code image to the PDF
  const qrCodeSize = 200;
  const qrCodeX = (pageWidth - qrCodeSize) / 2;
  doc.addImage(qrImage, "PNG", qrCodeX, margin, qrCodeSize, qrCodeSize);

  // Add the location details below the QR code
  const locationDetails = {
    room: "Room 101",
    building: "Building A",
    floor: "Floor 1",
  };
  const locationText = `${locationDetails.room}, ${locationDetails.floor}, ${locationDetails.building} `;
  const locationY = margin + qrCodeSize + 10; // Adjust the Y position

  doc.setFontSize(12);
  doc.text(locationText, pageWidth / 2, locationY, { align: "center" });

  // Save the PDF
  doc.save("QRCode.pdf");
};
  return (
    <div className="w-screen p-4">
      <div className="flex flex-col gap-2">
        <h2
          style={{
            background: themeColor,
          }}
          className="text-center w-full text-white font-semibold text-lg p-2 px-4 "
        >
          Patrolling Details
        </h2>
        <div className="flex gap-2 justify-end">
            <button
              className="flex gap-2 items-center justify-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white transition-all duration-500"
              onClick={() => setQrCode(true)}
            >
              <FaQrcode /> QR Code
            </button>
            <Link
              to={`/admin/edit-patrolling/${id}`}
              className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black transition-all duration-300 hover:text-white"
            >
              <BiEditAlt />
              Edit Details
            </Link>
          </div>
        <div className="md:grid  px-4 flex flex-col grid-cols-3 gap-5 gap-x-4">
          <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">Location : </p>
            <p className="">Mumbai</p>
          </div>
          <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">Scheduled Time : </p>
            <p className="">2:00PM</p>
          </div>
          <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">Created On : </p>
            <p className="">2/2/2024</p>
          </div>
          {/* <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">Vehicle Type : </p>
            <p className="">Hatchback</p>
          </div> */}
          <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">Start Date: </p>
            <p className="">2/2/2024</p>
          </div>
          {/* <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">OTP : </p>
            <p className="">{details.otp}</p>
          </div> */}
          <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">End Date : </p>
            <p className="">10/3/2024</p>
          </div>
          <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">Active/Inactive : </p>
            <p className="">Yes</p>
          </div>
          <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">Qr Code : </p>
            <p className="">178</p>
          </div>

          {/* <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">Status : </p>
            <p className="">Active</p>
          </div>
          
            <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">Qr Code : </p>
              <p className="">
               123
              </p>
            </div> */}

          {/* <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">Pass End Date : </p>
              <p className="">
                4/3/2024
              </p>
            </div>
         
          <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">Check In : </p>
            <p className="">
             2:00
            </p>
          </div>
          <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">Check Out : </p>
            <p className="">
             3:00
            </p>
          </div>
          <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">Created By : </p>
            <p className="">Ramesh</p>
          </div>
          <div className="grid grid-cols-2 ">
            <p className="font-semibold text-sm">Created On : </p>
            <p className="">3/5/2024</p>
          </div>
        
            <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">Permitted Days : </p>
              <p className="">10</p>
            </div> */}
        </div>
        {/* <div className="my-4 ">
          <h2 className="font-medium border-b-2 text-lg border-black px-4 ">
            Additional Visitors Info
          </h2>
          <div className="m-4 mx-20 ">
            <Table columns={columns} data={data} />
            </div>
            </div> */}
      </div>
      {qrCode && <ModalWrapper onclose={()=> setQrCode(false)}>
      <div className="mx-4 flex flex-col justify-between items-center gap-10">
       <div id="qrCodeElement">

        <img
          src={qr}
          alt="qr"
          width={200}
          className="border shadow-xl rounded-md"
          />
          </div>
        <button
          className="px-4 w-full border-2 border-black rounded-md flex justify-center items-center gap-2 py-1"
          onClick={handlePrintQRCode}
          // onClick={() => downloadFile(QR)}
        >
          <FaQrcode />
          Print QR Code
        </button>
      </div>
    </ModalWrapper>}
    </div>
  );
};

export default PatrollingDetails;
