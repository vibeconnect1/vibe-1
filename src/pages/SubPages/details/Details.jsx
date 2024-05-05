import React, { useEffect, useState } from "react";
import Detail from "../../../containers/Detail";
import { getComplaintsDetails } from "../../../api";
import { useParams } from "react-router-dom";

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

  const ticketDetails = [
    { title: "Ticket No:", description: ticketinfo.ticket_number },
    { title: "Customer Name:", description: ticketinfo.customer },
    { title: "Title :", description: ticketinfo.heading },
    { title: "Status :", description: ticketinfo.issue_status },
    { title: "Priority :", description: ticketinfo.priority },
    { title: "Assigned To :", description: ticketinfo.assignedTo },
    { title: "Category :", description: ticketinfo.category_type },
    { title: "Sub category :", description: "" },
    { title: "Building Name:", description: "" },
    { title: "Floor Name:", description: "" },
    { title: "Ticket Type:", description: ticketinfo.issue_type },
    { title: "Related To:", description: ticketinfo.RelatedTo },
    { title: "Total Days:", description: ticketinfo.RelatedTo },
    { title: "TAT Resolution Breached:", description: ticketinfo.resolution },
    { title: "Created On :", description: ticketinfo.created_at },
    { title: "Description :", description: ticketinfo.description },
  ];
  const Creators = [
    { title: "Created By:", description: ticketinfo.updated_by },
    { title: "Site:", description: "" },
    { title: "Unit :", description: ticketinfo.unit_name },
  ];

  const Attachments = [{ title: "Attachments", description: " " }];
  return (
    <div className="">
      <div className="flex flex-col justify-around ">
        <div className="">
          <Detail details={ticketDetails} heading={"Ticket Details"} />
        </div>
        <div className="border m-10" />
        <div>
          <Detail details={Creators} heading={"Creator's Info"} />
        </div>
        <div className="border m-10" />
        <Detail details={Attachments} heading={"Attachments"} />
        <div className="border m-10" />
      </div>
    </div>
  );
};

export default TicketDetails;
