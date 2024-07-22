import React, { useEffect, useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
//import Navbar from "../../../components/Navbar";
import DataTable from "react-data-table-component";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import Table from "../../components/table/Table";
import { getLOI } from "../../api";
import { Switch } from "antd";

const LOIPOTable = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const themeColor = useSelector((state) => state.theme.color);
  const [loi, setLoi] = useState([]);
  

  useEffect(() => {
    const fetchLoi = async () => {
      try {
        const loiResp = await getLOI();
        const sortedLoi = loiResp.data.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        setLoi(sortedLoi);
       
      } catch (error) {
        console.log(error);
      }
    };
    fetchLoi();
  }, []);
  const dateString = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/loi-po-detail/${row.id}`}>
            <BsEye size={15} />
          </Link>
          {/* <Link to={`/admin/edit-Loi-po/${row.id}`}>
            <BiEdit size={15} />
          </Link> */}
        </div>
      ),
    },
    {
      name: "LOI No.",
      selector: (row) => row.id,
      sortable: true,
    },

    {
      name: "Active/Inactive",
      selector: (row) => <Switch/>,
      sortable: true,
    },

    {
      name: "Created By",
      selector: (row) =>
        `${row.created_by_name.firstname} ${row.created_by_name.lastname}`,
      sortable: true,
    },

    {
      name: "Created On",
      selector: (row) => dateString(row.created_at),
      sortable: true,
    },
    // {
    //   name: "LOI Amount",
    //   selector: (row) => row.loi_items.reduce((sum, item) => sum + item.total_amount, 0),
    //   sortable: true,
    // },
    {
      name: "LOI Amount",
      selector: (row) => {
        
        const totalAmount = row.loi_items
          ? row.loi_items.reduce((sum, item) => sum + (Number(item.total_amount) || 0), 0)
          : " ";
          return totalAmount === 0 ? " " : totalAmount;
      },
      sortable: true,
    },
  ];

  document.title=`Purchase - Vibe Connect` 

  return (
    <section className="flex">
      <div className=" w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex md:flex-row flex-col gap-5 justify-between my-2">
          <input
            type="text"
            placeholder="Search  "
            className="border border-gray-400 w-96 placeholder:text-xs rounded-lg p-2"
            //   value={searchText}
            //   onChange={handleSearch}
          />
          <div className="flex items-center gap-2">
            <Link
              style={{ background: themeColor }}
              to={"/admin/purchase/add-loi"}
              className=" font-semibold text-white  transition-all  p-2 px-4 rounded-md  cursor-pointer text-center flex items-center gap-2 justify-center"
            >
              <PiPlusCircle size={20} />
              Add
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style={{ background: themeColor }}
              // onClick={exportToExcel}
            >
              Export
            </button>
          </div>
        </div>
        <Table
          responsive
          //   selectableRows
          columns={columns}
          data={loi}
          isPagination={true}
        />
      </div>
    </section>
  );
};

export default LOIPOTable;
