import React from "react";

const BroadcastDetails = () => {
  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Broadcast Details
        </h2>
        <div className="my-2 mb-10 border-2 p-2 rounded-md border-gray-400 mx-20">
          <div className="flex justify-center m-5">
            <h1 className="p-2 border-2 border-black px-28 text-xl rounded-md font-semibold">
              Title
            </h1>
          </div>
          <div className="grid gap-x-5 mx-5 sm:grid-cols-12">
            <div className="col-span-8">
              <p className="font-bold ">Description:</p>
              <p className="border-dashed border border-gray-400 p-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos sit magnam vel est ducimus voluptas possimus tenetur
                beatae veniam obcaecati?
              </p>
            </div>
            <div className="col-span-4">
              <p className="font-bold ">Created By :</p>
              <p className=" p-2">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="grid gap-x-5 bg-gray-200 p-2 rounded-md gap-y-5 m-5 grid-cols-4">
            <div className="">
              <p className="font-bold ">Status Type:</p>
              <p className="rounded-md border border-blue-400 p-2">Published</p>
            </div>
            <div className="">
              <p className="font-bold ">Share With:</p>
              <p className="rounded-md border border-green-400 p-2">Personal</p>
            </div>
            <div className="">
              <p className="font-bold ">Created On:</p>
              <p className=" p-2">date</p>
            </div>
            <div className="">
              <p className="font-bold ">END DATE & TIME :</p>
              <p className=" p-2">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="">
              <p className="font-bold ">Important:</p>
              <p className=" p-2 rounded-md border border-red-400">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="m-5">
            <p className="font-bold">Attachments</p>
            <p className="border-dashed border border-gray-400 p-2">list of files</p>
          </div>
          <div className="m-5">
            <p className="font-bold">Shared Members List</p>
            <p className="border-dashed border border-gray-400 p-2">list of files</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadcastDetails;
