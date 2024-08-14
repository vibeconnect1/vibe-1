import { useEffect, useState } from "react";
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
import { getGoods } from "../../api";
import { dateFormat, formatTime } from "../../utils/dateUtils";
const InwardsTable = ({ goodsIn }) => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const themeColor = useSelector((state) => state.theme.color);
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/inwards-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },

    {
      name: "Type",
      selector: (row) => (row.ward_type === "in" ? "Inward" : "Outward"),
      sortable: true,
    },

    {
      name: "Person Name",
      selector: (row) => row.visitor_name,
      sortable: true,
    },

    {
      name: "Vehicle Number",
      selector: (row) => row.vehicle_no,
      sortable: true,
    },
    {
      name: "Goods In Time",
      selector: (row) => formatTime(row.goods_in_time),
      sortable: true,
    },

    {
      name: "Goods out Time",
      selector: (row) => formatTime(row.goods_out_time),
      sortable: true,
    },
    {
      name: "Created on",
      selector: (row) => dateFormat(row.created_at),
      sortable: true,
    },
  ];
  console.log(goodsIn);

  return (
    <section className="flex">
      <div className=" w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex md:flex-row flex-col gap-5 justify-between my-2">
          <input
            type="text"
            name=""
            id=""
            className="border-gray-300 border rounded-md p-2 w-full placeholder:text-sm"
            placeholder="Search by name, vehicle number"
          />
        </div>
        <Table
          columns={columns}
          data={goodsIn}
          // customStyles={customStyle}
          isPagination={true}
        />
      </div>
    </section>
  );
};

export default InwardsTable;
