import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline } from "react-icons/io5";
import MaterialsModal from "../containers/modals/MaterialsModal";
import Navbar from "../components/Navbar";

const Materials = () => {
  const [searchText, setSearchText] = useState("");
  const [modal, showModal] = useState(false);

  const column = [
    { name: "Person Name", selector: (row) => row.name, sortable: true },
    { name: "Type", selector: (row) => row.type, sortable: true },
    { name: "No. Of Items", selector: (row) => row.itemCount, sortable: true },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Vehicle Number",
      selector: (row) => row.vehicleNumber,
      sortable: true,
    },
    { name: "Created By", selector: (row) => row.createdBy, sortable: true },
    {
      name: "Created On",
      selector: (row) => row.createdOn,
      sortable: true,
    },
    { name: "Attachments", selector: (row) => row.attachments, sortable: true },
  ];
  const data = [
    {
      id: 1,
      name: "Test1",
      type: "Type1",
      itemCount: "A",
      description: "B",
      vehicleNumber: "C",
      createdBy: "9383735232",
      createdOn: "D",
      attachments: "",
    },
    {
      id: 2,
      name: "Test2",
      type: "Type2",
      itemCount: "A",
      description: "B",
      vehicleNumber: "C",
      createdBy: "9383735232",
      createdOn: "D",
      attachments: "",
    },
  ];
  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "14px",
      },
    },
  };
  return (
    <section className="flex gap-20 mr-5">
       <Navbar />
      <div className="p-4 w-full overflow-hidden flex mx-5 flex-col">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search By Person Name"
            className="border-2 p-2 w-96 border-gray-300 rounded-lg"
            value={searchText}
            onChange={handleSearch}
          />
          <div className="flex gap-4 justify-end w-full">
            <button
              
              className="bg-black w-20 rounded-lg flex font-semibold items-center gap-2 text-white p-2 my-5"
              onClick={()=>showModal(true)}
            >
              <IoAddCircleOutline size={20} />
              Add
            </button>
          </div>
        </div>
        <DataTable
          columns={column}
          data={filteredData}
          customStyles={customStyle}
          fixedHeader
          fixedHeaderScrollHeight="500px"
          pagination
          selectableRowsHighlight
          highlightOnHover
          omitColumn={column}
        />
      </div>
      {modal && <MaterialsModal onclose={()=> showModal(false)} />}
    </section>
  );
};

export default Materials;
