import React, { useEffect, useState } from "react";
import Detail from "../../../containers/Detail";
import { editComplaintsDetails, getComplaintsDetails } from "../../../api";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";


const TicketDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ticketinfo, setTicketInfo] = useState([]);
  const [formData, setFormData] = useState({
    comment: "",
    of_phase: "pms",
    documents: [],
  });


  console.log(formData);


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
    { title: "Ticket No  :", description: ticketinfo.ticket_number },
    { title: "Title  :", description: ticketinfo.heading },
    { title: "Status  :", description: ticketinfo.issue_status },
    { title: "Site  :", description: ticketinfo.site_name },
    { title: "Issue Type  :", description: ticketinfo.issue_type },
    { title: "Assigned To  :", description: ticketinfo.assigned_to },
    { title: "Building Name  :", description: ticketinfo.building_name },
    // { title: "Customer Name:", description: ticketinfo.customer },
    { title: "Category  :", description: ticketinfo.category_type },
    { title: "Priority  :", description: ticketinfo.priority },
    { title: "Floor Name  :", description: ticketinfo.floor_name },
    { title: "Sub category  :", description: ticketinfo.sub_category },
    { title: "Related To  :", description: ticketinfo.issue_related_to },
    { title: "Unit  :", description: ticketinfo.unit },
    { title: "Total time  :", description: getTimeAgo(ticketinfo.created_at) },


    {
      title: "Response Breached  :",
      description: ticketinfo.response_breached ? "Yes" : "No",
    },
    {
      title: " Resolution Breached  :",
      description: ticketinfo.resolution_breached ? "Yes" : "No",
    },
    { title: "Created By  :", description: ticketinfo.created_by },
    { title: "Created On  :", description: dateFormat(ticketinfo.created_at) },
    { title: "Updated On  :", description: dateFormat(ticketinfo.updated_at) },
  ];
  const domainPrefix = "https://admin.vibecopilot.ai";
  return (
    <div className="">
      <div className="flex flex-col justify-around ">
        <div className="flex justify-end m-1">
          <Link
            to={`/edit/${id}`}
            className="border-2 border-black flex gap-2 p-1 rounded-md items-center px-4 "
          >
            <BiEdit size={20} />
            Edit
          </Link>
        </div>
        <div className="">
          <Detail details={ticketDetails} heading={"Ticket Details"} />
        </div>
        <div className="flex flex-col  flex-wrap gap-2">
          <h2 className="text-center w-screen bg-black text-white font-semibold mt-5 text-lg p-2 px-4 ">
            Additional Info
          </h2>
          <div className="px-4 flex flex-col gap-1 justify-center">
            <p className="font-medium">Description :</p>
            <p className="text-wrap bg-gray-200 p-2 rounded-md">
              {ticketinfo.text}
            </p>
          </div>
          <div className="px-4 flex flex-col gap-1 justify-center">
            <p className="font-medium">Impact :</p>
            <p className="text-wrap">{ticketinfo.impact}</p>
          </div>
          <div className="px-4 flex flex-col gap-1 justify-center">
            <p className="font-medium">Root Cause :</p>
            <p className="text-wrap">{ticketinfo.root_cause}</p>
          </div>
          <div className="px-4 flex flex-col gap-1 justify-center">
            <p className="font-medium">Corrective Action :</p>
            <p className="text-wrap">{ticketinfo.corrective_action}</p>
          </div>
          <div className="px-4 flex flex-col gap-1 justify-center">
            <p className="font-medium">Proactive/Reactive :</p>
            <p className="text-wrap">{ticketinfo.proactive_reactive}</p>
          </div>
          <div className="px-4 flex flex-col gap-1 justify-center">
            <p className="font-medium">Correction :</p>
            <p className="text-wrap">{ticketinfo.correction}</p>
          </div>
        </div>
        {/* <div className="border " /> */}
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



