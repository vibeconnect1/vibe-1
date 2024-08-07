import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaQrcode } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import qr from "/QR.png";
import VisitorQRCode from "../../../containers/modals/VisitorQRCode";
import AssetQrCode from "./assetSubDetails/AssetQrCode";
import ModalWrapper from "../../../containers/modals/ModalWrapper";
import Navbar from "../../../components/Navbar";
import { getPatrollingDetails } from "../../../api";
import { convertToIST, SendDateFormat } from "../../../utils/dateUtils";
const PatrollingDetails = () => {
  const themeColor = useSelector((state) => state.theme.color);
  const [qrCode, setQrCode] = useState(false);
  const [details, setDetails] = useState({})
  const { id } = useParams();

  const handlePrintQRCode = async () => {
    console.log("qr");
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
    const locationY = margin + qrCodeSize + 10;

    doc.setFontSize(12);
    doc.text(locationText, pageWidth / 2, locationY, { align: "center" });

    doc.save("QRCode.pdf");
  };

  useEffect(()=>{
    const fetchDetails = async()=>{
      try {
        const res = await getPatrollingDetails(id)
        setDetails(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchDetails()
  },[id])
  return (
    <section className="flex">
      <Navbar />
      <div className=" w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex flex-col gap-2">
          <h2
            style={{
              background: themeColor,
            }}
            className="text-center w-full text-white font-semibold text-lg p-2 px-4 my-2 rounded-md"
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
          <div className="md:grid  px-4 flex flex-col grid-cols-3 gap-5 gap-x-4 bg-gray-100 p-2 rounded-md">
            <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">Building : </p>
              <p className="text-sm">{details.building_name}</p>
            </div>
            <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">Floor : </p>
              <p className="text-sm">{details.floor_name}</p>
            </div>
            <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">Unit : </p>
              <p className="text-sm">{details.unit_name}</p>
            </div>
            
            <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">Start Date: </p>
              <p className="text-sm">{SendDateFormat(details.start_date)}</p>
            </div>
            <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">End Date : </p>
              <p className="">{SendDateFormat(details.end_date)}</p>
            </div>
            <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">Time Interval : </p>
              <p className="">{details.time_intervals}hr</p>
            </div>
            <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">Start Time : </p>
              <p className="">{convertToIST(details.start_time)}</p>
            </div>
            <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">End Time : </p>
              <p className="">{convertToIST(details.end_time)}</p>
            </div>
            <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">Created on : </p>
              <p className="">{SendDateFormat(details.created_at)}</p>
            </div>
            <div className="grid grid-cols-2 ">
              <p className="font-semibold text-sm">Updated on : </p>
              <p className="">{SendDateFormat(details.updated_at)}</p>
            </div>
          </div>
        </div>
        {qrCode && (
          <ModalWrapper onclose={() => setQrCode(false)}>
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
          </ModalWrapper>
        )}
      </div>
    </section>
  );
};

export default PatrollingDetails;
