import React from "react";
import ModalWrapper from "../../../containers/modals/ModalWrapper";
import { useSelector } from "react-redux";
const EditVehicleParkingModal = ({ onclose}) => {
    const themeColor = useSelector((state) => state.theme.color);
  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col">
        <h2 className="border-b border-gray-400  pb-2 flex justify-center font-semibold text-xl w-full">
          Add Category Name
        </h2>
        <div className="grid grid-cols-1 my-5">
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-600 font-medium">Category Name</label>
            <input
              type="text"
              placeholder="Enter Visitor Category"
              className="border rounded-md md:w-96 border-gray-500 p-2 px-2"
            />
          </div>
        </div>
        <div className="flex justify-center border-t border-gray-500 w-full">
          <div className="w-96 my-3">
            <button
              className="border-2 border-gray-500 text-white rounded-md px-4 p-1 w-full"
              style={{ background: themeColor }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default EditVehicleParkingModal