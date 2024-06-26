import React, { useState } from "react";
import { getItemInLocalStorage } from "../../utils/localStorage";
import { getFloors, getUnits, postSoftServices } from "../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FileInputBox from "../../containers/Inputs/FileInputBox";

const AddService = () => {
  const [floors, setFloors] = useState([]);
  const [units, setUnits] = useState([]);
  const siteId = getItemInLocalStorage("SITEID");
  const userId = getItemInLocalStorage("UserId");
  const [formData, setFormData] = useState({
    site_id: siteId,
    building_id: "",
    floor_id: "",
    unit_id: "",
    user_id: userId,
    name: "",
    // wing_id: "",
    // area_id: "",
    attachments: [],
  });
  console.log(formData);
  const buildings = getItemInLocalStorage("Building");

  const handleChange = async (e) => {
    async function fetchFloor(floorID) {
      try {
        const build = await getFloors(floorID);
        setFloors(build.data.map((item) => ({ name: item.name, id: item.id })));
      } catch (e) {
        console.log(e);
      }
    }

    async function getUnit(UnitID) {
      try {
        const unit = await getUnits(UnitID);
        setUnits(unit.data.map((item) => ({ name: item.name, id: item.id })));
        console.log(unit);
      } catch (error) {
        console.log(error);
      }
    }

    if (e.target.type === "select-one" && e.target.name === "building_id") {
      const BuildID = Number(e.target.value);
      await fetchFloor(BuildID);

      setFormData({
        ...formData,
        building_id: BuildID,
      });
    } else if (
      e.target.type === "select-one" &&
      e.target.name === "floor_name"
    ) {
      const UnitID = Number(e.target.value);
      await getUnit(UnitID);
      setFormData({
        ...formData,
        floor_id: UnitID,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleFileChange = (files, fieldName) => {
    // Changed to receive 'files' directly
    setFormData({
      ...formData,
      [fieldName]: files,
    });
    console.log(fieldName);
  };
  const navigate = useNavigate();
  const handleAddService = async () => {
    if (
      !formData.name ||
      !formData.building_id ||
      !formData.floor_id ||
      !formData.unit_id
    ) {
      return toast.error("All fields are required.");
    }

    try {
      toast.loading("Creating Service Please Wait!");
      const dataToSend = new FormData();
      dataToSend.append("soft_service[site_id]", formData.site_id);
      dataToSend.append("soft_service[name]", formData.name);
      dataToSend.append("soft_service[building_id]", formData.building_id);
      dataToSend.append("soft_service[floor_id]", formData.floor_id);
      dataToSend.append("soft_service[unit_id]", formData.unit_id);
      dataToSend.append("soft_service[user_id]", formData.user_id);
      (formData.attachments || []).forEach((file, index) => {
        dataToSend.append(`attachfiles[]`, file);
      });
      const serviceResponse = await postSoftServices(dataToSend);
      console.log(serviceResponse);
      navigate("/services/soft-service");
      toast.dismiss();
      toast.success("Service Created Successfully");
    } catch (error) {
      toast.error("Error Creating Service");
      console.log(error);
    }
  };

  const themeColor = useSelector((state) => state.theme.color);

  return (
    <section>
      <div className="m-2">
        <h2
          style={{ background: themeColor }}
          className="text-center text-xl font-bold p-2  rounded-full text-white"
        >
          Create Service
        </h2>
        <div className="md:mx-20 my-5 md:mb-10 sm:border border-gray-400 p-5 px-10 rounded-lg ">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold">
                Service Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Service Name"
                className="border p-1 px-4 border-gray-500 rounded-md placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold">
                Select Building:
              </label>
              <select
                className="border p-1 px-4 border-gray-500 rounded-md"
                value={formData.building_id}
                onChange={handleChange}
                name="building_id"
              >
                <option value="">Select Building</option>
                {buildings?.map((building) => (
                  <option value={building.id} key={building.id}>
                    {building.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Select Floor:
              </label>
              <select
                className="border p-1 px-4 border-gray-500 rounded-md"
                value={formData.floor_id}
                onChange={handleChange}
                name="floor_name"
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
              <label htmlFor="" className="font-semibold">
                Select Room:
              </label>
              <select
                className="border p-1 px-4 border-gray-500 rounded-md"
                value={formData.unit_id}
                onChange={handleChange}
                name="unit_id"
              >
                <option value="">Select Room</option>
                {units?.map((unit) => (
                  <option value={unit.id} key={unit.id}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
            Attachments
          </h2>
          <FileInputBox
            handleChange={(files) => handleFileChange(files, "attachments")}
            fieldName={"attachments"}
            isMulti={true}
          />
          <div className="md:flex grid md:grid-cols-2 gap-2 my-5 justify-center">
            <button
              className="bg-black text-white p-1 px-4 rounded-md font-medium"
              onClick={handleAddService}
            >
              Save & Show Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
