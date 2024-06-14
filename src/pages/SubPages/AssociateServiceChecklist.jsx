import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getAssignedTo, getSoftServices, postServiceAssociation } from "../../api";
import Select from "react-select";
import Table from "../../components/table/Table";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
const AssociateServiceChecklist = () => {
  const [services, setServices] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [assignedTo, setAssignedTo] = useState([]);
  const [formData, setFormData] = useState({
    assigned_to: "",
  });

  const column = [
    {
      name: "Service Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Assigned To",
      selector: (row) => row.assigned_to,
      sortable: true,
    },
  ];

  useEffect(() => {
    const fetchServicesList = async () => {
      // getting all the services
      const servicesListResp = await getSoftServices();
      const softServices = servicesListResp.data;
      const serviceList = softServices.map((service) => ({
        value: service.id,
        label: service.name,
      }));
      setServices(serviceList);
    };
    const fetchAssignedTo = async () => {
      const assignedToList = await getAssignedTo();
      console.log(assignedToList.data);
      setAssignedTo(assignedToList.data);
    };

    fetchServicesList();
    fetchAssignedTo();
  }, []);

  var handleChangeSelect = (selectedOption) => {
    console.log(selectedOption);
    setSelectedOption(selectedOption);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, assigned_to: e.target.value });
  };

  const { id } = useParams();
  const handleAddAssociate = async () => {
    const payload = {
      soft_service_ids: selectedOption.map((option) => option.value),
      activity: {
        checklist_id: id,
      },
      assigned_to: formData.assigned_to,
    };
    try {
      toast.loading("Associating Checklist");
      const resp = await postServiceAssociation(payload);
      console.log(resp);
      toast.dismiss();
      // window.location.reload();
      toast.success("Checklist Associated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex ">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="p-4 overflow-hidden w-full my-2 flex mx-3 flex-col">
        <h2 className="text-lg font-medium border-b-2 border-gray-400 mb-2">
          Associate Checklist
        </h2>
        <div className="grid md:grid-cols-3 items-center gap-4">
          <div className="w-full">
            {/* <label htmlFor="" className="font-medium my-2">
              Services
            </label> */}
            <Select
              isMulti
              onChange={handleChangeSelect}
              options={services}
              noOptionsMessage={() => "No Services Available"}
              //   maxMenuHeight={90}
              placeholder="Select Services"
            />
          </div>
          <div className="flex flex-col ">
            {/* <label className="font-medium my-2">Assign To</label> */}
            <select
              value={formData.assigned_to}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-sm"
            >
              <option value="">Select Assign To</option>
              {assignedTo.map((assign) => (
                <option key={assign.id} value={assign.id}>
                  {assign.firstname} {assign.lastname}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              className="border-2 border-black p-1 px-4 rounded-md"
              onClick={handleAddAssociate}
            >
              Create Activity
            </button>
          </div>
        </div>
        <div className="my-2">
          <Table />
        </div>
      </div>
    </section>
  );
};

export default AssociateServiceChecklist;
