import React, { useEffect, useState } from "react";
import { getAssetPPMActivityDetails, getAssetPPMs } from "../../../../api";
import { Link, useParams } from "react-router-dom";
import Table from "../../../../components/table/Table";
import { BsEye } from "react-icons/bs";
import { dateTimeFormat } from "../../../../utils/dateUtils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PPM = () => {
  const { id } = useParams();
  const [ppmDetails, setPPMDetails] = useState([]);
  const [ppmFor, setPPMFor] = useState("schedule");
  const [ppmData, setPPMData] = useState([]);
  const [filteredPPMData, setFilteredPPMData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const fetchPPMData = async () => {
      try {
        const ppmRes = await getAssetPPMs(id);
        setFilteredPPMData(ppmRes.data.activities);
        setPPMData(ppmRes.data.activities);
        console.log(ppmRes.data.activities);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPPMDetails = async () => {
      const PPMDetailsResp = await getAssetPPMActivityDetails(id);
      console.log(PPMDetailsResp);
      setPPMDetails(PPMDetailsResp.data);
    };

    fetchPPMData();
    fetchPPMDetails();
  }, [id]);

  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  const filterByDateRange = (data) => {
    if (startDate && endDate) {
      console.log(data);
      return data.filter((item) => {
        console.log(item.start_time)
        const itemDate = new Date(item.start_time).setHours(0, 0, 0, 0);
        const start = startDate.setHours(0, 0, 0, 0);
        const end = endDate.setHours(23, 59, 59, 999);
        // Check if the itemDate falls within the start and end date range
        return itemDate >= start && itemDate <= end;
      });
    }
    return data;
  };

  const PPMColumn = [
    {
      name: "View",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/assets/routine-task-details/${id}/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
      maxWidth: "2rem",
    },
    {
      name: "Checklist",
      selector: (row) => row.checklist?.name,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => dateFormat(row.start_time),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Assigned To",
      selector: (row) => row.assigned_name,
      sortable: true,
    },
  ];
  const [searchText, setSearchText] = useState("")
const handleSearch = (e)=>{
  const searchValue = e.target.value
  setSearchText(searchValue)
  if (searchText.trim() === "") {
    setFilteredPPMData(ppmData)
  }else{
    const filteredResult = ppmData.filter((item)=>(
      item.assigned_name.toLowerCase().includes(searchValue.toLowerCase())
    ))
    setFilteredPPMData(filteredResult)
  }
}
  return (
    <div className="flex justify-center items-center my-10 md:p-0 p-2">
      <div className="w-full my-2">
        <div className="flex items-center gap-4 border-b border-gray-200">
          <button
            className={`font-medium ${
              ppmFor === "schedule"
                ? "text-black border-b border-black"
                : "text-gray-400"
            }`}
            onClick={() => setPPMFor("schedule")}
          >
            Schedule
          </button>
          <button
            className={`font-medium ${
              ppmFor === "logs"
                ? "border-b border-black text-black"
                : "text-gray-400"
            }`}
            onClick={() => setPPMFor("logs")}
          >
            Logs
          </button>
        </div>

        {ppmFor === "schedule" && (
          <div className="flex flex-col w-full">
            <div className="z-20 w-full flex gap-2 justify-between md:flex-row flex-col">
              <input
                type="text"
                name=""
                value={searchText}
                onChange={handleSearch}
                id=""
                placeholder="Search by assigned to"
                className="p-2 border-gray-300 rounded-md w-full  my-2 outline-none border"
              />
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setStartDate(update[0]);
                  setEndDate(update[1]);
                  setFilteredPPMData(filterByDateRange(ppmData));
                }}
                isClearable={true}
                placeholderText="Search by Date range"
                className="p-2 border-gray-300 rounded-md w-64  my-2 outline-none border"
              />
            </div>
            <Table columns={PPMColumn} data={filteredPPMData} />
          </div>
        )}

        {ppmFor === "logs" && (
          <div className="">
            {ppmDetails.map((task, index) => (
              <div key={task.id}>
                <div className="my-4 flex flex-col bg-gray-50 shadow-custom-all-sides p-2 rounded-md gap-2">
                  <div className="grid grid-cols-3">
                    <div className="flex gap-4 items-center">
                      <p className="font-medium">Question :</p>
                      <p>{task.question_name}</p>
                    </div>
                    <p className="text-center">{task.user_name}</p>
                    <p className="text-right">
                      {dateTimeFormat(task.created_at)}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center bg-green-100 p-2 rounded-md">
                    <p className="font-medium">Answer :</p>
                    <p>{task.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PPM;
