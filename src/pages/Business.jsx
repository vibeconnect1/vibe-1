import React from "react";
import Navbar from "../components/Navbar";
import { ImEye } from "react-icons/im";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import profile from "/profile.png";
import Switch from "../Buttons/Switch";

const Business = () => {
  const column = [
    {
      name: "Actions",
      cell: (row) => (
        <Link to={`/business/details/${row.id}`}>{row.action}</Link>
      ),
      sortable: true,
    },

    { name: "Company Logo", selector: (row) => row.logo, sortable: true },
    { name: "Company Name", selector: (row) => row.title, sortable: true },
    { name: "Category", selector: (row) => row.category, sortable: true },
    {
      name: "Sub Category",
      selector: (row) => row.SubCategory,
      sortable: true,
    },
    {
      name: "Contact Person",
      selector: (row) => row.contactPerson,
      sortable: true,
    },
    { name: "Mobile", selector: (row) => row.mobile, sortable: true },
    {
      name: "Key Offerings",
      selector: (row) => row.keyOffering,
      sortable: true,
    },
    { name: "Status", selector: (row) => row.status, sortable: true },
  ];
  const data = [
    {
      id: 1,
      title: "Test1",
      logo: <img src={profile} className="w-10" />,
      category: "A",
      SubCategory: "B",
      contactPerson: "C",
      mobile: "9383735232",
      keyOffering: "D",
      status: <Switch />,
      action: <ImEye />,
    },
  ];

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
    <section className="flex gap-10 mr-5 max-w-screen ">
      <Navbar />
      <div className="flex w-full mx-5 my-10 flex-col overflow-hidden">
        <div className="w-full flex mx-5 flex-col">
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search By Company Name"
              className="border-2 p-2 w-96 border-gray-300 rounded-lg"
            />
            <div className="flex gap-4 justify-end w-full overflow-hidden">
              <Link
                to={"/business/add-business"}
                className="bg-black w-20 rounded-lg flex items-center gap-2 text-white p-2 my-5"
              >
                <IoAddCircleOutline />
                Add
              </Link>
              <Link to={"/business/setup-category"} className="bg-black rounded-lg w-40 flex items-center gap-2 text-white p-2 my-5">
                <FiSettings />
                Setup Category
              </Link>
            </div>
          </div>
          <div>
            <div className="overflow-hidden ">
            <DataTable
              columns={column}
              data={data}
              customStyles={customStyle}
              responsive
              selectableRows
              fixedHeader
          fixedHeaderScrollHeight="500px"
          pagination
          selectableRowsHighlight
          highlightOnHover
          omitColumn={column}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
