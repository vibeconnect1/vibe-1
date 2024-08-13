import React, { useEffect, useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
//import Navbar from "../../../components/Navbar";
import DataTable from "react-data-table-component";
import { BsEye } from "react-icons/bs";
import { useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Table from "../../components/table/Table";
import Navbar from "../../components/Navbar";
import Passes from "../Passes";
import { domainPrefix, getStaff } from "../../api";
import { dateFormat, SendDueDateFormat } from "../../utils/dateUtils";
import image from "/profile.png"
const Staff = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const themeColor = useSelector((state) => state.theme.color);
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const staffRes = await getStaff();
        const sortedData = staffRes.data.sort((a,b)=>(
          new Date(b.created_at) - new Date(a.created_at)
        ))
        setStaffs(sortedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStaff();
  }, []);

 

  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/passes/staff-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/admin/edit-staff/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Profile",
      selector: (row) => {
        return row.profile_picture && row.profile_picture.url ? (
          <img
            src={domainPrefix + row.profile_picture.url}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() =>
              window.open(domainPrefix + row.profile_picture.url, "_blank")
            }
          />
        ) : (
          <img
            src={image} // Placeholder image
            alt="Default"
            className="w-10 h-10 rounded-full"
          />
        );
      },
      sortable: true,
    },
    
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => `${row.firstname} ${row.lastname}`,
      sortable: true,
    },
    {
      name: "Unit",
      selector: (row) => row.unit_name,
      sortable: true,
    },
    // {
    //   name: "Department",
    //   selector: (row) => row.department,
    //   sortable: true,
    // },

    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile_no,
      sortable: true,
    },

    // {
    //   name: "Staff Id",
    //   selector: (row) => row.Staff_Id,
    //   sortable: true,
    // },
    {
      name: "Work Type",
      selector: (row) => row.work_type,
      sortable: true,
    },

    {
      name: "Vendor name",
      selector: (row) => row.vendor_name,
      sortable: true,
    },
    {
      name: "From ",
      selector: (row) => dateFormat(row.valid_from),
      sortable: true,
    },
    {
      name: "Till",
      selector: (row) => dateFormat(row.valid_till),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (row.status ? "Active" : "Inactive"),
      sortable: true,
    },
  ];

  return (
    <section className="flex">
      <Navbar />
      <div className=" w-full flex mx-3 flex-col overflow-hidden mb-10">
        <Passes />
        <div className="flex md:flex-row flex-col gap-5 justify-between  my-2">
          <input
            type="search"
            name=""
            id=""
            className="border border-gray-300 rounded-md w-full px-2 placeholder:text-sm"
            placeholder="Search by name, unit, mobile"
          />

          <span className="flex gap-4">
            <Link
              to={"/admin/passes/add-staff"}
              style={{background: themeColor}}
              className="border-2 font-semibold transition-all  p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
            >
              <PiPlusCircle size={20} />
              Add
            </Link>
           
          </span>
        </div>
        <Table columns={columns} data={staffs} isPagination={true} />
      </div>
    </section>
  );
};

export default Staff;
