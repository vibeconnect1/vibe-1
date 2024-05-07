import React, { useEffect, useState } from "react";
import Detail from "../../../containers/Detail";
import { getComplaintsDetails } from "../../../api";
import { useParams } from "react-router-dom";
import moment from "moment";


const TicketDetails = () => {
  const { id } = useParams();
  const [ticketinfo, setTicketInfo] = useState([]);


  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getComplaintsDetails(id);
      console.log(response.data);
      setTicketInfo(response.data);
    };
    fetchDetails();
  }, []);


  const getTimeAgo = (timestamp) => {
    const createdTime = moment(timestamp);
    const now = moment();
    const diff = now.diff(createdTime, "minutes");
    if (diff < 60) {
      return `${diff} minutes ago`;
    } else if (diff < 1440) {
      return `${Math.floor(diff / 60)} hours ago`;
    } else {
      return `${Math.floor(diff / 1440)} days ago`;
    }
  };


  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Adjust the format as needed
  };


  const ticketDetails = [
    { title: "Ticket No:", description: ticketinfo.ticket_number },
    { title: "Title :", description: ticketinfo.heading },
    { title: "Building Name:", description: ticketinfo.building_name },
    { title: "Floor Name:", description: ticketinfo.floor_name },
    { title: "Site:", description: ticketinfo.site_name },
    { title: "Unit :", description: ticketinfo.unit },
    // { title: "Customer Name:", description: ticketinfo.customer },
    { title: "Issue Type :", description: ticketinfo.issue_type },
    { title: "Assigned To :", description: ticketinfo.assigned_to },
    { title: "Status :", description: ticketinfo.issue_status },
    { title: "Priority :", description: ticketinfo.priority },
    { title: "Category :", description: ticketinfo.category_type },
    { title: "Sub category :", description: ticketinfo.sub_category },
    { title: "Related To:", description: ticketinfo.issue_related_to },
    { title: "Created On :", description: dateFormat(ticketinfo.created_at) },
    { title: "Updated On :", description: dateFormat(ticketinfo.updated_at) },
    { title: "Total time:", description: getTimeAgo(ticketinfo.created_at) },


    {
      title: "Response Breached:",
      description: ticketinfo.response_breached ? "Yes" : "No",
    },
    {
      title: "TAT Resolution Breached:",
      description: ticketinfo.resolution_breached ? "Yes" : "No",
    },
    { title: "Created By:", description: ticketinfo.created_by },
   
  ];
  const domainPrefix = "https://admin.vibecopilot.ai";
  return (
    <div className="p-4">
      <div className="flex flex-col justify-around ">
        <div className="">
          <Detail details={ticketDetails} heading={"Ticket Details"} />
        </div>
        <div className="py-4 px-2 flex items-center flex-wrap gap-5">
          <p className="font-medium">Description:</p>
          <p className="text-wrap">{ticketinfo.text}</p>
        </div>
        <div className="border m-10" />
        <h2 className="text-center w-screen bg-black text-white font-semibold my-5 text-lg p-2 px-4 ">
          Attachments
        </h2>
        <div className="flex ">
        {ticketinfo.documents &&
          ticketinfo.documents.map((doc, index) => (
            <div key={index} className="flex justify-start p-4">
              <a href={domainPrefix + doc.document} target="_blank">
              <img
                src={domainPrefix + doc.document}
                alt={`Attachment ${index}`}
                width={"25%"}
                />
                </a>
            </div>
          ))}
          </div>
        <div className="border m-10" />
      </div>
    </div>
  );
};


export default TicketDetails;



