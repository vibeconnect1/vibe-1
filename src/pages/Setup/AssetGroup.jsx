import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { PiPlusCircle } from "react-icons/pi";
import DataTable from "react-data-table-component";
import { Switch } from "../../Buttons";
import AssetGroupModal from "../../containers/modals/AssetGroupModal";
import AssetSubGroupModal from "../../containers/modals/AssetSubGroupModal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAssetGroups, getAssetSubGroups, getSubGroupsList } from "../../api";
import Table from "../../components/table/Table";

const AssetGroup = () => {
  const [groupModal, setGroupModal] = useState(false);
  const [subGroupModal, setsubGroupModal] = useState(false);
  const [group, setGroup] = useState([]);
  const [subGroup, setSubGroup] = useState([]);
  const [page,setPage] = useState("asset")
  // const groups = useSelector((state) => state.group.groups);
  // const subGroups = useSelector((state) => state.group.subGroups);
  // console.log("sub", subGroups);
  useEffect(() => {
    const fetchGroups = async () => {
      const groupResponse = await getAssetGroups();
      console.log(groupResponse);
      setGroup(groupResponse.data);
    };
    fetchGroups();
    const fetchSubGroups = async () => {
      const subGroupResponse = await getSubGroupsList();
      setSubGroup(subGroupResponse.data);
      console.log(subGroupResponse);
    };
    fetchSubGroups();
  }, []);
  const groupColumns = [
    {
      name: "Sr. No",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Group Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
  ];

  // const groupData = groups.map((group, index) => ({
  //   serial_number: index + 1,
  //   group_name: group,
  // }));
  const subGroupColumns = [
    {
      name: "Sr. No",
      selector: (row) => row.serial_number,
      sortable: true,
    },
    {
      name: "Group Name",
      selector: (row) => row.group_name,
      sortable: true,
    },
    {
      name: "Sub Group Name",
      selector: (row) => row.name,
      sortable: true,
    },
  ];

  // const subGroupData = Object.keys(subGroups).reduce(
  //   (acc, groupName, index) => {
  //     const subGroupsWithSerial = subGroups[groupName].map(
  //       (subGroup, subIndex) => ({
  //         serial_number: index + 1,
  //         group_name: groupName,
  //         sub_group_name: subGroup,
  //       })
  //     );
  //     return [...acc, ...subGroupsWithSerial];
  //   },
  //   []
  // );

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",

        fontSize: "10px",
      },
    },
    headCells: {
      style: {
        textTransform: "upperCase",
      },
    },
  };
  return (
    <section className="flex">
      <Navbar />
      <div className="w-full flex mx-3 mb-5 flex-col overflow-hidden">

      <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-200 w-full">
          <h2
            className={`p-1 ${
              page === "asset" &&
              `bg-white font-medium text-blue-500 shadow-custom-all-sides`
            } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
            onClick={() => setPage("asset")}
          >
            Asset
          </h2>
          <h2
            className={`p-1 ${
              page === "stock" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("stock")}
          >
            Stock
          </h2>
         
        </div>
        <div className="mt-5 flex justify-end items-center gap-4">
          <button
            onClick={() => setGroupModal(true)}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-300 ease-in-out transition-all border-black p-1 px-4 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add Group
          </button>
          <button
            onClick={() => setsubGroupModal(true)}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-300 ease-in-out transition-all border-black p-1 px-4 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add Sub Group
          </button>
        </div>
        {page === "asset" && <div className=" my-2">
          <Table
            columns={groupColumns}
            data={group}
            isPagination={true}
            height={"300px"}
            title={"Groups"}
          />
          <Table
            columns={subGroupColumns}
            data={subGroup}
            isPagination={true}
            height={"300px"}
            title={"Sub Groups"}
          />
        </div>}
        {page === "stock" && <div className=" my-2">
          <Table
            columns={groupColumns}
            data={group}
            isPagination={true}
            height={"300px"}
            title={"Groups"}
          />
          <Table
            columns={subGroupColumns}
            data={subGroup}
            isPagination={true}
            height={"300px"}
            title={"Sub Groups"}
          />
        </div>}
      </div>
      {groupModal && <AssetGroupModal onclose={() => setGroupModal(false)} />}
      {subGroupModal && (
        <AssetSubGroupModal onclose={() => setsubGroupModal(false)} />
      )}
    </section>
  );
};

export default AssetGroup;
