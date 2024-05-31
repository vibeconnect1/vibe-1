import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { PiPlusCircle } from "react-icons/pi";
import DataTable from "react-data-table-component";
import { Switch } from "../../Buttons";
import AssetGroupModal from "../../containers/modals/AssetGroupModal";
import AssetSubGroupModal from "../../containers/modals/AssetSubGroupModal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAssetGroups } from "../../api";
import Table from "../../components/table/Table";

const AssetGroup = () => {
  const [groupModal, setGroupModal] = useState(false);
  const [subGroupModal, setsubGroupModal] = useState(false);
  const [group, setGroup] = useState([]);
  const groups = useSelector((state) => state.group.groups);
  const subGroups = useSelector((state) => state.group.subGroups);
  // console.log("sub", subGroups);
  useEffect(() => {
    const fetchGroups = async () => {
      const groupResponse = await getAssetGroups();
      setGroup(groupResponse.data);
    
    };
    fetchGroups();
  }, [group]);
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

  const groupData = groups.map((group, index) => ({
    serial_number: index + 1,
    group_name: group,
  }));
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
      selector: (row) => row.sub_group_name,
      sortable: true,
    },
  ];

  const subGroupData = Object.keys(subGroups).reduce(
    (acc, groupName, index) => {
      const subGroupsWithSerial = subGroups[groupName].map(
        (subGroup, subIndex) => ({
          serial_number: index + 1,
          group_name: groupName,
          sub_group_name: subGroup,
        })
      );
      return [...acc, ...subGroupsWithSerial];
    },
    []
  );

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
      <div className="w-full flex mx-3 flex-col overflow-hidden">
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
        <div className=" my-2">
          <Table
            columns={groupColumns}
            data={group}
            isPagination={true}
            height={"300px"}
            title={"Groups"}
          />
          {/* <DataTable
            responsive
            // selectableRows
           
            customStyles={customStyle}
            pagination
            fixedHeader
            title="Groups"
            fixedHeaderScrollHeight="300px"
            selectableRowsHighlight
            highlightOnHover
          /> */}
          <DataTable
            responsive
            title={"Sub Groups"}
            // selectableRows
            columns={subGroupColumns}
            data={subGroupData}
            customStyles={customStyle}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="420px"
            selectableRowsHighlight
            highlightOnHover
          />
        </div>
      </div>
      {groupModal && <AssetGroupModal onclose={() => setGroupModal(false)} />}
      {subGroupModal && (
        <AssetSubGroupModal onclose={() => setsubGroupModal(false)} />
      )}
    </section>
  );
};

export default AssetGroup;
