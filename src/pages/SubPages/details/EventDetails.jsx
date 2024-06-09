import React, { useEffect, useState } from "react";
import { BiCalendarExclamation, BiLike } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import wave from "/wave.png";
import { HiLocationMarker } from "react-icons/hi";
import { getEventsDetails } from "../../../api";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventDetailsResp = await getEventsDetails(id);
        console.log(eventDetailsResp);
        setEventDetails(eventDetailsResp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEventDetails();
  }, [id]);

  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Event Details
        </h2>
        <div className="my-2 mb-10 border-2 p-2 rounded-md border-gray-400">
          <div className="my-5 flex flex-col sm:grid gap-2 grid-cols-12  border-2 sm:mx-5 p-2 rounded-md border-gray-400">
            <img
              src={wave}
              alt="wave"
              className="rounded-md col-span-6 sm:max-h-[25rem] w-full "
            />
            <div className="col-span-6 py-2 px-4 rounded-md bg-gray-100">
              <h1 className="text-2xl font-semibold text-center">
                {eventDetails.event_name}
              </h1>
              <div className="flex flex-col gap-5 w-full justify-around my-2">
                <p className="text-lg font-medium">Created By:</p>
                <div className="flex flex-col gap-5">
                  <p className="flex gap-1 items-center font-medium">
                    <HiLocationMarker /> Location:
                  </p>
                  <div className="grid grid-cols-2">
                    <p className="flex gap-1 items-center font-medium">
                      <BiCalendarExclamation /> Start Date & Time:
                    </p>
                    <p>{eventDetails.start_date_time}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p className="flex gap-1 items-center font-medium">
                      <BiCalendarExclamation /> End Date & Time:
                    </p>
                    <p>{eventDetails.end_date_time}</p>
                  </div>
                 
                  <p className="flex gap-1 items-center font-medium">
                    <BiLike /> Coming :
                  </p>
                  <div className="flex gap-2">
                    <p className="font-bold">RSVP :</p>
                    {/* <p className="text-green-500 font-semibold">Yes</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mx-10 m-5">
            <div className="flex flex-col gap-2">
              <p className="font-medium">Description:</p>
              <p className="border-dotted border-2 rounded-md border-gray-400 p-2">
                {eventDetails.discription}
              </p>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Attachments</h1>
              <div className="border-dotted border-2 rounded-md border-gray-400 p-2">
                
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-xl font-semibold">Shared With (Member)</h1>
                <div className="border-dotted border-2 rounded-md border-gray-400 p-2">
                  
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Shared With (Group)</h1>
                <div className="border-dotted border-2 rounded-md border-gray-400 p-2">
                  
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Feedback</h1>
              <div className="border-dotted border-2 rounded-md border-gray-400 p-2">
                
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
