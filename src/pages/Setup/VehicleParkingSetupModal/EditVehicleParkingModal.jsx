import React, { useEffect, useState } from "react";
import ModalWrapper from "../../../containers/modals/ModalWrapper";
import { useSelector } from "react-redux";
import { getVehicleParkingDetails, getFloors, editVehicleParking } from "../../../api";
import { getItemInLocalStorage } from "../../../utils/localStorage";
import toast from "react-hot-toast";
const EditVehicleParkingModal = ({ onclose, vehId, setAdded }) => {
  const themeColor = useSelector((state) => state.theme.color);
  const buildings = getItemInLocalStorage("Building");
  const [floors, setFloors] = useState([]);
  const [formData, setFormData] = useState({
    building_id: "",
    floor_id: "",
    name: "",
    vehicle_type: "",
  });

  useEffect(() => {
    const fetchVehicleParking = async () => {
      try {
        const vehicleRes = await getVehicleParkingDetails(vehId);
        setFormData(vehicleRes.data);
        fetchFloor(vehicleRes.data.building_id);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchFloor = async (floorID) => {
      try {
        const build = await getFloors(floorID);
        setFloors(build.data.map((item) => ({ name: item.name, id: item.id })));
      } catch (e) {
        console.log(e);
      }
    };
    fetchVehicleParking();
  }, [vehId]);

  const handleChange = async (e) => {
    async function fetchFloor(floorID) {
      console.log(floorID);
      try {
        const build = await getFloors(floorID);
        setFloors(build.data.map((item) => ({ name: item.name, id: item.id })));
      } catch (e) {
        console.log(e);
      }
    }
    if (e.target.type === "select-one" && e.target.name === "building_id") {
      const BuildID = Number(e.target.value);
      await fetchFloor(BuildID);

      setFormData({
        ...formData,
        building_id: BuildID,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  //edit vehicle parking
  const handleSubmit = async () => {
    if(formData.building_id === "" ||
      formData.floor_id === "" ||
      formData.name === "" ||
      formData.vehicle_type === "" 
    )
    {
      return toast.error("All fields are required");
    }
    const editForm = new FormData();
    editForm.append("parking_configuration[building_id]", formData.building_id);
    editForm.append("parking_configuration[floor_id]", formData.floor_id);
    editForm.append("parking_configuration[name]", formData.name);
    editForm.append(
      "parking_configuration[vehicle_type]",
      formData.vehicle_type
    );
    try {
      const editVeh = await editVehicleParking(editForm,vehId)
      toast.success("updated Successfully");
      setFormData("");
      setAdded(true);
      onclose();
    } catch (error) {
      console.log(error);
    }finally {
      setTimeout(() => {
        setAdded(false);
      }, 500);
    }
  };

  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col">
        <h2 className="border-b border-gray-400 pb-2 flex justify-center font-semibold text-xl w-full">
          Edit Vehicle Parking
        </h2>
        <div className="grid md:grid-cols-2 gap-3 my-5">
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-600 font-medium">
              Building Name
            </label>
            <select
              className="border p-2 px-4 border-gray-500 rounded-md"
              onChange={handleChange}
              value={formData.building_id}
              name="building_id"
            >
              <option value="">Select Building</option>
              {buildings?.map((building) => (
                <option key={building.id} value={building.id}>
                  {building.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-600 font-medium">
              Floor Name
            </label>
            <select
              className="border p-2 px-4 border-gray-500 rounded-md"
              onChange={handleChange}
              value={formData.floor_id}
              name="floor_id"
            >
              <option value="">Select Floor</option>
              {floors?.map((floor) => (
                <option value={floor.id} key={floor.id}>
                  {floor.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-600 font-medium">
              Parking Slot
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
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
              name="vehicle_type"
              id="vehicle_type"
              value={formData.vehicle_type}
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
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default EditVehicleParkingModal;