import React, { useEffect, useState } from "react";
//import Navbar from '../../components/Navbar'
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import Passes from "../Passes";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import Table from "../../components/table/Table";
import { getExpectedVisitor } from "../../api";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

const VisitorPage = () => {
  const [page, setPage] = useState("Visitor In");
  const themeColor = useSelector((state) => state.theme.color);
  const [selectedVisitor, setSelectedVisitor] = useState("expected");
  const [visitor, setVisitor] = useState([]);
  const handleClick = (visitorType) => {
    setSelectedVisitor(visitorType);
  };
  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString();
  };
  const dateTimeFormat = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };
  useEffect(() => {
    const fetchExpectedVisitor = async () => {
      const visitorResp = await getExpectedVisitor();
      const sortedVisitor = visitorResp.data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      setVisitor(sortedVisitor);
      console.log(visitorResp);
    };
    fetchExpectedVisitor();
  }, []);
  const VisitorColumns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/passes/visitors/visitor-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/admin/passes/visitors/edit-visitor/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Visitor Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Contact No.",
      selector: (row) => row.contact_no,
      sortable: true,
    },
    {
      name: "OTP",
      selector: (row) => row.otp,
      sortable: true,
    },
    {
      name: "Purpose",
      selector: (row) => row.purpose,
      sortable: true,
    },
    {
      name: "Pass Start",
      selector: (row) => (row.start_pass ? dateFormat(row.start_pass) : ""),
      sortable: true,
    },
    {
      name: "Pass End",
      selector: (row) => (row.end_pass ? dateFormat(row.end_pass) : ""),
      sortable: true,
    },
    {
      name: "Check In",
      selector: (row) => (row.check_in ? dateTimeFormat(row.check_in) : ""),
      sortable: true,
    },
    {
      name: "Check Out",
      selector: (row) => (row.check_out ? dateTimeFormat(row.check_out) : ""),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Created By",
      selector: (row) => row.created_by,
      sortable: true,
    },
  ];
  return (
    <div className="visitors-page">
      <section className="flex">
        <Navbar />
        <div className=" w-full flex mx-3  flex-col overflow-hidden">
          <Passes />
          <div className="flex w-full  m-2">
            <div className="flex w-full md:flex-row flex-col space-x-4  border-b border-gray-400">
              <h2
                className={`p-2 ${
                  page === "Visitor In"
                    ? "text-blue-500 font-medium  shadow-custom-all-sides"
                    : "text-black"
                } rounded-t-md  cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                onClick={() => setPage("Visitor In")}
              >
                Visitor In
              </h2>
              <h2
                className={`p-2 ${
                  page === "Visitor Out"
                    ? "text-blue-500 font-medium  shadow-custom-all-sides"
                    : "text-black"
                }  rounded-t-md  rounded-sm cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                onClick={() => setPage("Visitor Out")}
              >
                Visitor Out
              </h2>
              <h2
                className={`p-2 ${
                  page === "History"
                    ? "text-blue-500 font-medium  shadow-custom-all-sides"
                    : "text-black"
                }  rounded-t-md rounded-sm cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                onClick={() => setPage("History")}
              >
                History
              </h2>
            </div>
          </div>
          <div className="flex justify-end">
            <Link
              to={"/admin/add-new-visitor"}
              style={{ background: themeColor }}
              className=" font-semibold  hover:text-white duration-150 transition-all p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
            >
              <PiPlusCircle size={20} />
              Add New Visitor
            </Link>
          </div>
          {page === "Visitor In" && (
            <div className="grid md:grid-cols-3 gap-2 items-center">
              <select className="border p-2 rounded-md border-black">
                <option>Select Person to meet</option>
                <option>abc</option>
              </select>

              <div className="border md:flex-row flex-col flex p-2 rounded-md text-center border-black">
                <span
                  className={` md:border-r px-2 border-black cursor-pointer hover:underline ${
                    selectedVisitor === "expected"
                      ? "text-blue-600 underline"
                      : ""
                  } text-center`}
                  onClick={() => handleClick("expected")}
                >
                  <span>Expected visitor</span>
                </span>
                <span
                  className={`cursor-pointer hover:underline ${
                    selectedVisitor === "unexpected"
                      ? "text-blue-600 underline"
                      : ""
                  } text-center`}
                  onClick={() => handleClick("unexpected")}
                >
                  &nbsp; <span>Unexpected visitor</span>
                </span>
              </div>
            </div>
          )}
          {page === "Visitor Out" && (
            <div className="grid md:grid-cols-3 gap-2 items-center">
              <select className="border p-2 rounded-md border-black">
                <option>Select Person to meet</option>
                <option>abc</option>
              </select>

              <div className="border md:flex-row flex-col flex p-2 rounded-md text-center border-black">
                <span
                  className={` md:border-r px-2 border-black cursor-pointer hover:underline ${
                    selectedVisitor === "expected"
                      ? "text-blue-600 underline"
                      : ""
                  } text-center`}
                  onClick={() => handleClick("expected")}
                >
                  <span>Expected visitor</span>
                </span>
                <span
                  className={`cursor-pointer hover:underline ${
                    selectedVisitor === "unexpected"
                      ? "text-blue-600 underline"
                      : ""
                  } text-center`}
                  onClick={() => handleClick("unexpected")}
                >
                  &nbsp; <span>Unexpected visitor</span>
                </span>
              </div>
            </div>
          )}
          {page === "History" && (
            <div>
              <input
                type="text"
                placeholder="Search using Guest's Name or Pass Number"
                className="border p-2 rounded-md border-black w-96"
              />
            </div>
          )}
          <div className="my-4">
            {selectedVisitor === "expected" && page === "Visitor In" && (
              <Table columns={VisitorColumns} data={visitor} />
            )}
            {selectedVisitor === "unexpected" && (
              // <Table columns={VisitorColumns} data={visitor} />
              <p className="font-medium text-center">No Records</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitorPage;
