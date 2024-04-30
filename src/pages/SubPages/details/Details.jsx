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
    { title: "Title :", description: ticketinfo.heading },
    { title: "Created On :", description: ticketinfo.created_at },
    { title: "Status :", description: ticketinfo.issue_status },
    { title: "Admin Priority :", description: ticketinfo.priority },
    { title: "Ticket No:", description: ticketinfo.ticket_number },
    { title: "Category", description: ticketinfo.category_type },
    { title: "Subcategory", description: "" },
    { title: "Reference No:", description: "" },
  ];
  const Creators = [
    { title: "Created By:", description: ticketinfo.created_by },
    { title: "Site:", description: "" },
    { title: "Department:", description: " " },
    { title: "Unit", description: ticketinfo.unit_name },
  ];
  const Location = [
    { title: "Room:", description: " " },
    { title: "Floor:", description: " " },
    { title: "Building", description: " " },
    { title: "Region", description: " " },
    { title: "Destrict", description: " " },
    { title: "Zone", description: " " },
    { title: "City", description: " " },
    { title: "State", description: " " },
  ];
  const AdditionalInfo = [
    { title: "Assigned To:", description: " " },
    { title: "Proactive/Reactive:", description: " " },
    { title: "Service Type:", description: " " },
    { title: "Complaint Mode:", description: " " },
    { title: "Responsible Person:", description: " " },
    { title: "Correction:", description: " " },
    { title: "Asset/Service:", description: " " },
    { title: "Asset/Service Location", description: " " },
  ];
  const Attachments = [{ title: "Attachment 1", description: " " }];
  return (
    <div className="">
      <div className="flex flex-col justify-around my-10 ">
        <div className="">
          <Detail details={ticketDetails} heading={"Ticket Details"} />
        </div>
        <div className="border m-10" />
        <div>
          <Detail details={Creators} heading={"Creator's Info"} />
        </div>
        <div className="border m-10" />
        <div className="">
          <Detail details={Location} heading={"Location Info"} />
        </div>
        <div className="border m-10" />
        <div className="">
          <Detail details={AdditionalInfo} heading={"Additional Info"} />
        </div>
        <div className="border m-10" />
        <Detail details={Attachments} heading={"Attachments"} />
        <div className="border m-10" />
      </div>
    </div>
  );
};

export default TicketDetails;
