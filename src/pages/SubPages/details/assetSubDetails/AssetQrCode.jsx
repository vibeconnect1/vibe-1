import React from 'react'
import ModalWrapper from '../../../../containers/modals/ModalWrapper'
import QR from "/QR.png"
import { FaQrcode } from 'react-icons/fa'

const AssetQrCode = ({onClose}) => {
  return (
   <ModalWrapper onclose={onClose}>
<div className='m-10 flex flex-col justify-between items-center gap-10'>
<img src={QR} alt="qr" width={200} className='border shadow-xl rounded-md' />
<button className='px-4 w-full border-2 border-black rounded-md flex justify-center items-center gap-2 py-1'><FaQrcode/>Print QR Code</button>
</div>
   </ModalWrapper>
  )
}

export default AssetQrCode
