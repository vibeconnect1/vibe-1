import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { useDispatch, useSelector } from "react-redux";
import { addSubGroup } from "../../features/group/groupSlice";
import { getAssetGroups, postAssetSubGroups } from "../../api";

const AssetSubGroupModal = ({ onclose }) => {
  const [subGroupName, setSubGroupName] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [assetGroups, setAssetGroups] = useState([]);
  const [formData, setFormData] = useState({
    group_id: "",
    name: "",
  });
  // console.log(formData);
  const dispatch = useDispatch();
  // const groups = useSelector((state) => state.group.groups);
  // console.log(groups);

  const CreateSubGroup = async () => {
    const addSubGroup = await postAssetSubGroups({
      group_id: formData.group_id,
      name: formData.name,
    });
    console.log(addSubGroup)
    onclose()

    // if (selectedGroup && subGroupName.trim()) {
    //   dispatch(addSubGroup({ groupName: selectedGroup, subGroupName }));
    //   setSubGroupName("");
    //   onclose();
    // }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const groupResponse = await getAssetGroups();
        setAssetGroups(groupResponse.data);
        console.log(groupResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGroup();
  }, []);

  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold text-center text-xl">Create Sub Group</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm font-bold">
              Group Name:
            </label>
            <select
              name="group_id"
              id=""
              value={formData.group_id}
              onChange={handleChange}
              className="border rounded-md border-gray-500 p-1 px-2"
            >
              <option value="">Select Group</option>
              {assetGroups.map((group) => (
                <option value={group.id} key={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm font-bold">
              Sub Group Name:
            </label>
            <input
              type="text"
              name="name"
              id=""
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Sub Group Name"
              className="border placeholder:text-sm rounded-md border-gray-500 p-1 px-2"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-black p-1 px-4 text-white rounded-md my-5 hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
            onClick={CreateSubGroup}
          >
            Create
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AssetSubGroupModal;
