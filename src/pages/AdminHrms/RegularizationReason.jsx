import React, { useEffect, useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../components/table/Table";
import AttendanceDetailsList from "./AttendanceDetailsList";
import { GrHelpBook } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import AddRegularizationReason from "./Modals/AddRegularizationReason";
import { useSelector } from "react-redux";
import EditRegularizationReason from "./Modals/EditRegularizationReason";
import { getAttendanceRegularization } from "../../api";
import { getItemInLocalStorage } from "../../utils/localStorage";

const RegularizationReason = () => {
  const [showModal, setShowModal] = useState(false);
  const themeColor = useSelector((state) => state.theme.color);
  const [showModal1, setShowModal1] = useState(false);
  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  const columns = [
    {
      name: "Reason",
      selector: (row) => row.label,
      sortable: true,
    },
    {
      name: "Visible To",
      selector: (row) => row.specific_employees.length,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              handleEditModal(row.id);
            }}
          >
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];
  const [regReasonId, setRegReasonId] = useState("");
  const handleEditModal = async (id) => {
    setRegReasonId(id);
    setShowModal1(true);
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  const hrmsOrgId = getItemInLocalStorage("HRMSORGID");
  const [regReasons, setRegReasons] = useState([]);
  const fetchRegularizationReasons = async () => {
    try {
      const res = await getAttendanceRegularization(hrmsOrgId);
      setRegReasons(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRegularizationReasons();
  }, []);

  return (
    <section className="flex ml-20">
      <AttendanceDetailsList />
      <div className="w-2/3 flex m-3 flex-col overflow-hidden">
        <div className="flex justify-between my-2 gap-2">
          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-400 w-full placeholder:text-sm rounded-lg p-2"
          />
          <button
            onClick={handleAddClick}
            style={{ background: themeColor }}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all  p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add
          </button>
        </div>
        <Table columns={columns} data={regReasons} isPagination={true} />
      </div>
      <div className="my-4 mx-2 w-fit">
        <div className="flex flex-col bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
          <div className="flex  gap-4 font-medium">
            <GrHelpBook size={20} />
            <h2>Help Center</h2>
          </div>
          <div className="">
            <ul style={listItemStyle} className="flex flex-col gap-2">
              <li>
                <ul style={listItemStyle}>
                  <li>
                    Attendance settings allows you to configure attendance
                    policies in the form of templates based on different
                    departments, profiles, locations, etc.{" "}
                  </li>{" "}
                </ul>
              </li>
              <li>
                <ul style={listItemStyle}>
                  <li>
                    Within the attendance templates you can choose the mode of
                    capturing the attendance like web check-in, biometrics,
                    timesheet, mobile application.{" "}
                  </li>
                </ul>
              </li>

              <li>
                <p>
                  You can automate the attendance process by automatically
                  capturing late marks, half-days, overtime and leave deductions
                  based on the template settings. You can also configure
                  attendance regularization limit and reason.
                </p>
              </li>
              <li>
                <p>
                  In the web check-in you can restrict capturing attendance
                  through static IP. Similarly, in mobile applications you can
                  restrict capturing attendance through geo-fencing.{" "}
                </p>
              </li>
              <li>
                <p>
                  Attendance module is integrated with leave and payroll module
                  and hence will sync data from the attendance module and derive
                  data like LOP calculations for running payroll.{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showModal1 && (
        <EditRegularizationReason
          handleModalClose={() => setShowModal1(false)}
          regReasonId={regReasonId}
        fetchRegularizationReasons={fetchRegularizationReasons}
        />
      )}
      {showModal && (
        <AddRegularizationReason
          handleModalClose={handleModalClose}
          fetchRegularizationReasons={fetchRegularizationReasons}
        />
      )}
    </section>
  );
};

export default RegularizationReason;
