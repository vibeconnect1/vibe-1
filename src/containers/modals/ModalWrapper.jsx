import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const ModalWrapper = ({children, onclose}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm">
    <div className="bg-white mt-10  p-4 px-8 flex flex-col rounded-md gap-5">
      <button className="place-self-end" onClick={onclose}>
        <AiOutlineClose />
      </button>
      {children}
    </div>
  </div>
  )
}

export default ModalWrapper
