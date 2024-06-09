import React, { useEffect, useState } from "react";
import { getBroadcastDetails } from "../../../api";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BroadcastDetails = () => {
  const [broadcastDetails, setBroadcastDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchBroadcastDetails = async () => {
      try {
        const broadcastDetailsResp = await getBroadcastDetails(id);
        console.log(broadcastDetailsResp);
        setBroadcastDetails(broadcastDetailsResp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBroadcastDetails();
  }, [id]);

  const dateFormat = (dateSting) => {
    const date = new Date(dateSting);
    return date.toLocaleString();
  };
  const themeColor = useSelector((state) => state.theme.color);
  return (
    <section>
      <div className="m-2">
        <h2
          style={{ background: themeColor }}
          className="text-center text-xl font-semibold p-2 rounded-full text-white"
        >
          Broadcast Details
        </h2>
        <div className="my-2 mb-10 md:border-2 p-2 rounded-md border-gray-400 md:mx-20">
          <div className="flex justify-center m-5">
            <h1
            style={{background: themeColor}}
            className="p-2 px-4 text-xl text-white rounded-md font-semibold">
              {broadcastDetails.notice_title}
            </h1>
          </div>
          <div className="flex flex-col bg-gray-100 p-2 rounded-md">
            <p className="font-medium ">Description:</p>
            <p className=" p-2">{broadcastDetails.notice_discription}</p>
          </div>
          <div className="grid gap-x-5 mx-5 sm:grid-cols-12">
            <div className="col-span-4">
              <p className="font-bold ">Created By :</p>
              <p className=" p-2"></p>
            </div>
          </div>
          <div className="grid gap-x-5  p-2 rounded-md md:gap-y-5 m-5 md:grid-cols-4">
            <div className="">
              <p className="font-bold ">Status Type:</p>
              <p className="rounded-md border border-blue-400 p-2"></p>
            </div>
            <div className="">
              <p className="font-bold ">Share With:</p>
              <p className="rounded-md border border-green-400 p-2"></p>
            </div>
            <div className="">
              <p className="font-bold ">Created On:</p>
              <p className=" p-2">{dateFormat(broadcastDetails.created_at)}</p>
            </div>
            <div className="">
              <p className="font-bold ">END DATE & TIME :</p>
              <p className=" p-2">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="">
              <p className="font-bold ">Important:</p>
              <p className=" p-2 rounded-md border border-red-400">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="m-5">
            <p className="font-bold">Attachments</p>
            <p className="border-dashed border border-gray-400 p-2">
              list of files
            </p>
          </div>
          <div className="m-5">
            <p className="font-bold">Shared Members List</p>
            <p className="border-dashed border border-gray-400 p-2">
              list of files
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadcastDetails;
