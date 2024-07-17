import React from "react";
import ModalWrapper from "../../../../containers/modals/ModalWrapper";
import { FaQrcode } from "react-icons/fa";
import jsPDF from "jspdf";
import axios from "axios";

const AssetQrCode = ({ onClose, QR, assetName, building, floor, unit }) => {
  const handlePrintQRCode = async () => {
    const doc = new jsPDF();
    const logoText = "Vibeconnect";
    try {
      const response = await axios.get(QR, { responseType: "blob" });
      const blob = response.data;
      const qrCodeDataURL = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });

      doc.addImage(qrCodeDataURL, "PNG", 15, 40, 180, 180);
      doc.setFontSize(16);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(100);
      doc.text(assetName, 105, 10, null, null, "center");

      // Adding heading and border at the bottom
      const heading = "Location";
      const pageWidth = doc.internal.pageSize.width;
      const headingY = 230;

      doc.setFontSize(14);
      doc.text(heading, 105, headingY, null, null, "center");
      doc.line(10, headingY + 5, pageWidth - 10, headingY + 5);  // Draw border line

      // Adding building, floor, and unit name in a single row below the heading
      const locationInfoY = headingY + 20;
      doc.setFontSize(12);
      doc.setTextColor(50);

      // Calculating positions for equal spacing
      const textWidth = pageWidth - 20;  // 10 units padding on each side
      const textSectionWidth = textWidth / 3;
      const buildingX = 10;
      const floorX = buildingX + textSectionWidth;
      const unitX = floorX + textSectionWidth;

      doc.text(`Building: ${building}`, buildingX, locationInfoY);
      doc.text(`Floor: ${floor}`, floorX, locationInfoY);
      doc.text(`Unit: ${unit}`, unitX, locationInfoY);

      const pageHeight = doc.internal.pageSize.height;
      const logoTextWidth = doc.getTextWidth(logoText);

      doc.text(logoText, pageWidth - logoTextWidth - 10, pageHeight - 10);
      doc.save(`${assetName}.pdf`);
    } catch (error) {
      console.log(error);
    }
  };


  const downloadFile = async (imagePath) => {
    console.log(imagePath);
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      //asset name
      const fileName = imagePath.split("/").pop();
      link.download = fileName;
      link.click();
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };
  console.log(QR);
  return (
    <ModalWrapper onclose={onClose}>
      <div className="mx-4 flex flex-col justify-between items-center gap-10">
        <img
          src={QR}
          alt="qr"
          width={200}
          className="border shadow-xl rounded-md"
        />
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
  );
};

export default AssetQrCode;
