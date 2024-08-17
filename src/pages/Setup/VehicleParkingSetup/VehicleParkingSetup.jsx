import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Table from "../../../components/table/Table";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Navbar from "../../../components/Navbar";
import { useSelector } from "react-redux";
import AddVehicleParkingModal from "./AddVehicleParkingModal";
import EditVehicleParkingModal from "./EditVehicleParkingModal";
import { getVisitorParking } from "../../../api";
function VehicleParkingSetup() {
  const themeColor = useSelector((state) => state.theme.color);
  const[addVehicleModal, setAddVehicleModal] = useState(false)
  const[editVehicleModal, setEditVehicleModal] = useState(false)
  const[vehicleParking, setVehicleParking] = useState([]);
  const column = [
    {
      name: "Sr. no.",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Building Name",
      selector: (row) => row.building_name,
      sortable: true,
    },
    {
      name: "Floor Name",
      selector: (row) => row.floor_name,
      sortable: true,
    },
    {
      name: "Parking Slot",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Vehicle Type",
      selector: (row) => row.vehicle_type,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="flex items-center gap-4">
          <button>
            <BiEdit size={15} />
          </button>
          <button>
            <RiDeleteBin5Line size={15} />
          </button>
        </div>
      ),
    },
  ];
  
  const getVehicle = async() =>{
    try{
      const vehicleRes = await getVisitorParking();
      setVehicleParking(vehicleRes.data)
      console.log(vehicleRes.data)
    }catch(error) {
      console.log(error);
    }
  } 
  useEffect(() => {
    getVehicle()
  }, []);

  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex flex-col sm:flex-row md:justify-between gap-3 my-3">
          <input
            type="text"
            placeholder="search"
            className="border-2 p-2 w-96 border-gray-300 rounded-lg"
          />
          <div className="flex gap-3 sm:flex-row flex-col">
            <button
              className="text-white font-semibold px-4 p-1 flex gap-2 items-center rounded-md"
              style={{ background: themeColor }}
              onClick={() => setAddVehicleModal(true)}
            >
              <IoAddCircleOutline size={22} /> Add
            </button>
          </div>
        </div>
        <div className="my-3">
          <Table columns={column} data={vehicleParking} isPagination={true} />
        </div>
        {addVehicleModal && (
        <AddVehicleParkingModal
          onclose={() => setAddVehicleModal(false)}
        />
      )}
      {editVehicleModal && (
        <EditVehicleParkingModal
          onclose={() => setEditVehicleModal(false)}
        />
      )}
      </div>
    </section>
  );
}

export default VehicleParkingSetup;
