import React, { useEffect, useState } from "react";
import Detail from "../../../containers/Detail";
import { getComplaintsDetails, updateComplaintsDetails } from "../../../api";
import { useParams } from "react-router-dom";
import { input } from "@material-tailwind/react";

const DetailsEdit = () => {
    const { id } = useParams();
    const [ticketinfo, setTicketInfo] = useState([]);
    const [editTicketInfo, setEditTicketInfo] = useState({});
  
    useEffect(() => {
      const fetchDetails = async () => {
        const response = await getComplaintsDetails(id);
        console.log(response.data);
        setTicketInfo(response.data);
        //

        setEditTicketInfo(response.data)
      };
      fetchDetails();
    }, [id]);

    const handleTicketDetails = (e, key) => {
        setEditTicketInfo({
            ...editTicketInfo,
            [key]: e.target.value
        });
    };

    const saveEditDetails = async () => {
        try{
        await updateComplaintsDetails(editTicketInfo)
        console.log("Edited Ticket Details:", editTicketInfo);
        }catch (error){
            console.error("Error Saving in details update: ", error);
        }
    };

  const ticketDetails = [
    { title: "Title :", description: (
        <input 
        text= "text"
        value={editTicketInfo.heading}
        onChange={(e) => handleTicketDetails(e, 'heading')}
        />
    )},
    { title: "Created On :", description: ticketinfo.created_at },
    { title: "Status :", description : (
        <input type="status"
        value = {editTicketInfo.issue_status} 
        />
    )},
    { title: "Admin :", description: ticketinfo.priority },
    { title: "Ticket No:", description: ticketinfo.ticket_number },
    { title: "Category", description: ticketinfo.category_type },
    { title: "Subcategory", description: "" },
    { title: "Reference No:", description: "" },
  ];
  const Creators = [
    { title: "Created By:", description: ticketinfo.created_by },
    { title: "Site:", description: "" },
    { title: "Unit", description: ticketinfo.unit_name },
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
        <Detail details={Attachments} heading={"Attachments"} />
        <div className="border m-10" />
        <button onClick={saveEditDetails}>Save</button>
      </div>
    </div>
  )
}

export default DetailsEdit;