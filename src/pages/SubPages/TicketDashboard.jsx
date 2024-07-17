import React, { useEffect, useState } from "react";
import { getTicketDashboard } from "../../api";

const TicketDashboard = () => {
  const [totalTickets, setTotalTickets] = useState("");
  const [statusData, setStatusData] = useState({});
  //const [statusData, setStatusData] = useState({});
  useEffect(() => {
    const fetchTicketInfo = async () => {
      try {
        const ticketInfoResp = await getTicketDashboard();
        setTotalTickets(ticketInfoResp.data.total);
        setStatusData(ticketInfoResp.data.by_status);
        console.log(ticketInfoResp);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTicketInfo();
  }, []);
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div>
      <div className="flex items-center gap-6 overflow-auto p-2 ">
        <div className="bg-white min-w-44 shadow-custom-all-sides p-4 rounded-md flex flex-col items-center text-gray-500 text-sm w-fit font-medium">
          Tickets Created{" "}
          <span className="font-medium text-base text-black">
            {totalTickets}
          </span>{" "}
        </div>
        {Object.entries(statusData).map(([key, value]) => (
          <div
            key={key}
            className="bg-white min-w-44 shadow-custom-all-sides p-4 font-medium rounded-md flex flex-col items-center text-gray-500 text-sm w-fit"
          >
            {key}{" "}
            <span className="font-medium text-base text-black">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketDashboard;
