import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { useDispatch, useSelector } from "react-redux";
import { addSubGroup } from "../../features/group/groupSlice";

const AssetSubGroupModal = ({ onclose }) => {
  const [subGroupName, setSubGroupName] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.group.groups);
  console.log(groups);

  const CreateSubGroup = () => {
    if (selectedGroup && subGroupName.trim()) {
      dispatch(addSubGroup({ groupName: selectedGroup, subGroupName }));
      setSubGroupName("");
      onclose();
    }
  };

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
              name=""
              id=""
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="border rounded-md border-gray-500 p-1 px-2"
            >
                <option value="">Select Group</option>
                {groups.map((group, index)=>
                <option value={group} key={index}>{group}</option>
                )}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm font-bold">
              Sub Group Name:
            </label>
            <input
              type="text"
              name=""
              id=""
              value={subGroupName}
              onChange={(e)=> setSubGroupName(e.target.value)}
              placeholder="Enter Sub Group Name"
              className="border placeholder:text-sm rounded-md border-gray-500 p-1 px-2"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-black p-1 px-4 text-white rounded-md my-5 hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
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
