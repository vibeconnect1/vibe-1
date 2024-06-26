import React from "react";
import ModalWrapper from "../../../../containers/modals/ModalWrapper";
import { FaQrcode } from "react-icons/fa";
import jsPDF from "jspdf";
import axios from "axios";

const AssetQrCode = ({ onClose, QR, assetName }) => {
  const handlePrintQRCode = async () => {
    const doc = new jsPDF();
    const logoText = "Vibeconnect";
    try {
      const response = await axios.get(QR, { responseType: "blob" });
      // const qrCodeDataURL = await axios(QR)
      const blob = response.data;
      const qrCodeDataURL = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });

      // doc.addImage(qrCodeDataURL, "PNG", 10, 10, 50, 50, );
      doc.addImage(qrCodeDataURL, "PNG",  15, 40, 180, 180 );
      doc.setFontSize(16);
      doc.setFont(assetName, "bold");
      doc.setTextColor(100);
      doc.text(assetName, 105, 10, null, null, "center");
      
      const pageHeight = doc.internal.pageSize.height;
      const pageWidth = doc.internal.pageSize.width;
      const textWidth = doc.getTextWidth(logoText);

      doc.text(logoText, pageWidth - textWidth - 10, pageHeight - 10);
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
