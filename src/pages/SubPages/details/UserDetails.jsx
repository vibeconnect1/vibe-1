import React, { useEffect, useState } from "react";
import Detail from "../../../containers/Detail";
import { editComplaintsDetails, getComplaintsDetails } from "../../../api";
import { useParams } from "react-router-dom";
import moment from "moment";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";
import { comment } from "postcss";

const UserDetails = () => {
  // const navigate = useNavigate()
  const { id } = useParams();
  const [ticketinfo, setTicketInfo] = useState([]);
  const [formData, setFormData] = useState({
    comment: "",
    of_phase: "pms",
    documents: [],
  });
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const FileChange = async (event) => {
    const files = event.target.files;
    const base64Array = [];

    for (const file of files) {
      const base64 = await convertFileToBase64(file);
      base64Array.push(base64);
    }
    console.log("Array base64-", base64Array);
    const formattedBase64Array = base64Array.map((base64) => {
      return base64.split(",")[1];
    });
    console.log("Format", formattedBase64Array);
    setFormData({
      ...formData,
      documents: formattedBase64Array,
    });
  };
  const saveEditDetails = async () => {
    try {
      const updatedData = {
        complaint_log: {
          complaint_id: id,
          comment: formData.comment,
        },
        complaint_comment: {
          docs: formData.documents,
        },
      };
      await editComplaintsDetails(updatedData);
      setFormData({
        comment: "",
        documents: [],
      });

      console.log("Edited Ticket Details:", updatedData);
      toast.success("Updated Successfully");
      // navigate(`/tickets/user-details/${id}`)
    } catch (error) {
      console.error("Error Saving in details update: ", error);
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getComplaintsDetails(id);
      console.log(response.data);
      setTicketInfo(response.data);
    };
    fetchDetails();
  }, [formData.comment]);

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
    { title: "Status  :", description: ticketinfo.current_status },
    { title: "Site  :", description: ticketinfo.site_name },
    { title: "Issue Type  :", description: ticketinfo.issue_type },
    { title: "Assigned To  :", description: ticketinfo.assigned_to },
    { title: "Building Name  :", description: ticketinfo.building_name },
    // { title: "Customer Name:", description: ticketinfo.customer },
    { title: "Category  :", description: ticketinfo.category_type },

    { title: "Floor Name  :", description: ticketinfo.floor_name },
    { title: "Sub category  :", description: ticketinfo.sub_category },

    { title: "Unit  :", description: ticketinfo.unit },
    { title: "Total time  :", description: getTimeAgo(ticketinfo.created_at) },

    { title: "Created By  :", description: ticketinfo.created_by },
    { title: "Created On  :", description: dateFormat(ticketinfo.created_at) },
    { title: "Updated On  :", description: dateFormat(ticketinfo.updated_at) },
  ];
  const domainPrefix = "https://admin.vibecopilot.ai";
  return (
    <div className="">
      <div className="flex flex-col justify-around ">
        <div className="">
          <Detail details={ticketDetails} heading={"Ticket Details"} />
        </div>
        <div className="flex flex-col items-center sm:items-start flex-wrap gap-2">
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
            <label htmlFor="addComment" className="font-medium">
              Add Comment :
            </label>
            <div className="flex justify-between gap-4">
              <textarea
                name="text"
                value={formData.comment}
                className="border p-1 px-2 border-gray-400 rounded-md w-96"
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
              />
            </div>
          </div>
          <input
            type="file"
            name="documents"
            id="documents"
            onChange={FileChange}
            multiple
            className="ml-5 my-4"
          />
          <div className="flex mx-4">
            <button
              onClick={saveEditDetails}
              className="border-2 border-black p-2 rounded-md hover:bg-black hover:text-white font-medium transition-all duration-300"
            >
              Comment
            </button>
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
        <h2 className="text-center w-screen bg-black text-white font-semibold my-5 text-lg p-2 px-4 ">
          Logs
        </h2>
        {/* <div className="border m-10 " /> */}

        {ticketinfo.complaint_logs &&
          ticketinfo.complaint_logs.map((log) => (
            <div className="md:flex  justify-center " key={log.id}>
              <ol className="relative  border-gray-200 w-full">
                <li className="mb-6 sm:mb-10 md:ms-6">
                  <div className="items-center justify-between p-4  border border-gray-200 rounded-lg shadow-sm sm:flex  dark:border-gray-600">
                    <time className="mb-1 text-xs font-normal text-gray-900 sm:order-last sm:mb-0">
                      {dateFormat(log.created_at)}
                    </time>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                      {" "}
                      {log.priority && (
                        <div className="text-sm font-semibold text-gray-900 dark:text-gray mb-5">
                          Priority :{" "}
                          <a
                            href="#"
                            className="font-semibold text-gray-900 dark:text-gray hover:underline"
                          >
                            {" "}
                            {log.priority}{" "}
                          </a>
                        </div>
                      )}
                      {log.log_comment && (
                        <div className="text-sm font-semibold text-gray-900 dark:text-gray mb-5">
                          Comment :{" "}
                          <a
                            href="#"
                            className="font-semibold text-gray-900 dark:text-gray hover:underline"
                          >
                            {log.log_comment}
                          </a>
                        </div>
                      )}
                      {log.status && (
                        <div className="text-sm font-semibold text-gray-900 dark:text-gray mb-5">
                          Status:{" "}
                          <a
                            href="#"
                            className="font-semibold text-gray-900 dark:text-gray hover:underline"
                          >
                            {log.log_status}
                          </a>
                        </div>
                      )}
                      <div className="flex gap-4">
                        <p className="font-medium text-black">Log By:</p>
                        <p className="font-medium text-black">{log.log_by}</p>
                      </div>
                      <div className="flex w-fit justify-center flex-wrap">
                        {log.documents &&
                          log.documents.map((doc, index) => (
                            <div key={index} className="p-4 ">
                              <a
                                href={domainPrefix + doc.document}
                                target="_blank"
                              >
                                <img
                                  src={domainPrefix + doc.document}
                                  alt={`Attachment ${index}`}
                                  style={{
                                    width: "20%",
                                    height: "auto",
                                    maxWidth: "100%",
                                  }}
                                />
                              </a>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserDetails;
