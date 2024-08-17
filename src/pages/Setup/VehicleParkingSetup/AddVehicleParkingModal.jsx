import React, { useState } from "react";
import ModalWrapper from "../../../containers/modals/ModalWrapper";
import { useSelector } from "react-redux";
import { postVehicleParking } from "../../../api";
const AddVehicleParkingModal = ({ onclose }) => {
  const themeColor = useSelector((state) => state.theme.color);
  const [formData, setFormData] = useState({
    buildingName: "",
    floorName: "",
    parkingSlots: "",
    vehicleType: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAddVehicleParking = async () => {
    const postData = new FormData();
    postData.append("parking_configuration[building_name]", formData.buildingName);
    postData.append("parking_configuration[floor_name]", formData.floorName);
    postData.append("parking_configuration[name]", formData.parkingSlots);
    postData.append("parking_configuration[vehicle_type]", formData.vehicleType);
    console.log(formData);
    try {
      const resp = await postVehicleParking(postData);
      setFormData("")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col">
        <h2 className="border-b border-gray-400 pb-2 flex justify-center font-semibold text-xl w-full">
          Add Vehicle Parking
        </h2>
        <div className="grid md:grid-cols-2 gap-3 my-5">
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-600 font-medium">
              Building Name
            </label>
            <input
              type="text"
              name="buildingName"
              value={formData.buildingName}
              onChange={handleChange}
              placeholder="Enter Building Name"
              className="border rounded-md md:w-96 border-gray-500 p-2 px-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-600 font-medium">
              Floor Name
            </label>
            <input
              type="text"
              name="floorName"
              value={formData.floorName}
              onChange={handleChange}
              placeholder="Enter Floor Name"
              className="border rounded-md md:w-96 border-gray-500 p-2 px-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-600 font-medium">
              Parking Slot
            </label>
            <input
              type="text"
              name="parkingSlots"
              value={formData.parkingSlots}
              onChange={handleChange}
              placeholder="Enter Parking Slot"
              className="border rounded-md md:w-96 border-gray-500 p-2 px-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-600 font-medium">
              Vehicle Type
            </label>
            <input
              type="text"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              placeholder="Enter Vehicle Type"
              className="border rounded-md md:w-96 border-gray-500 p-2 px-2"
            />
          </div>
        </div>
        <div className="flex justify-center border-t border-gray-500 w-full">
          <div className="w-full my-3">
            <button
              className="border-2 border-gray-500 text-white rounded-md px-4 p-1 w-full"
              style={{ background: themeColor }}
              onClick={handleAddVehicleParking}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddVehicleParkingModal;
