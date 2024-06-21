import React from "react";
import ModalWrapper from "../../../../containers/modals/ModalWrapper";
import { FaQrcode } from "react-icons/fa";
import jsPDF from "jspdf";

const AssetQrCode = ({ onClose, QR }) => {
  const handlePrintQRCode = async () => {
    const doc = new jsPDF();
    
    // Convert image URL to base64 data URL
    const qrCodeDataURL = await fetch(QR)
      .then(response => response.blob())
      .then(blob => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      });

    doc.addImage(qrCodeDataURL, "PNG", 10, 10, 50, 50);

    doc.save(`Asset.pdf`);
  };

  return (
    <ModalWrapper onclose={onClose}>
      <div className="mx-4 flex flex-col justify-between items-center gap-10">
        <img
          src={QR}
          alt="qr"
          width={200}
          className="border shadow-xl rounded-md"
        />
        <button className="px-4 w-full border-2 border-black rounded-md flex justify-center items-center gap-2 py-1" onClick={handlePrintQRCode}>
          <FaQrcode />
          Print QR Code
        </button>
      </div>
    </ModalWrapper>
  );
};

export default AssetQrCode;
