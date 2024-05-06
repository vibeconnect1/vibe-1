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
    const diff = now.diff(createdTime, 'minutes');
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
    { title: "Building Name:", description: "" },
    { title: "Floor Name:", description: "" },
    { title: "Site:", description: ticketinfo.site_id },
    { title: "Unit :", description: ticketinfo.unit_name },
    { title: "Customer Name:", description: ticketinfo.customer },
    { title: "Issue Type :", description: ticketinfo.issue_type },
    { title: "Assigned To :", description: ticketinfo.assignedTo },
    { title: "Status :", description: ticketinfo.issue_status },
    { title: "Priority :", description: ticketinfo.priority },
    { title: "Title :", description: ticketinfo.heading },
    { title: "Category :", description: ticketinfo.category_type },
    { title: "Sub category :", description: "" },
    { title: "Related To:", description: ticketinfo.RelatedTo },
    { title: "Created On :", description: dateFormat(ticketinfo.created_at) },
    { title: "Total time:", description: getTimeAgo(ticketinfo.created_at) },


    { title: "TAT Resolution Breached:", description: ticketinfo.resolution },
    { title: "Created By:", description: ticketinfo.updated_by },
    { title: "Description :", description: ticketinfo.text },
  ];

  const Attachments = [{ title: "Attachments", description: " " }];
  return (
    <div className="">
      <div className="flex flex-col justify-around ">
        <div className="">
          <Detail details={ticketDetails} heading={"Ticket Details"} />
        </div>

        <div className="border m-10" />
        <Detail details={Attachments} heading={"Attachments"} />
        <div className="border m-10" />
      </div>
    </div>
  );
};

export default TicketDetails;
