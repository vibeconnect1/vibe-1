import React, { useState } from "react";
import FileInput from "../../Buttons/FileInput";
import Switch from "../../Buttons/Switch";

const CreateEvent = () => {
  const [share, setShare] = useState("all");
  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Create Event
        </h2>
        <div className="mx-20 my-5 mb-10 border border-gray-400 p-5 px-10 rounded-lg shadow-xl">
          <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
            Event Info
          </h2>
          <div className="flex sm:flex-row flex-col justify-around items-center">
            <div className="flex flex-col">
              <label htmlFor="" className="font-bold">
                Title :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Title"
                className="border-gray-400 border px-2 p-1 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-bold">
                Venue :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Venue"
                className="border-gray-400 border px-2 p-1 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:mx-48 my-5">
            <label htmlFor="" className="font-bold">
              Description:
            </label>
            <textarea
              name=""
              id=""
              rows="3"
              placeholder="Enter Description"
              className="border-gray-400 border px-2 p-1 rounded-md"
            />
          </div>
          <div className="flex justify-around mx-12">
            <div>
              <p className="font-bold mb-2">Start Time:</p>
              <div className="flex gap-4">
                <input
                  type="date"
                  name=""
                  id=""
                  className="border-gray-400 border px-2 p-1 rounded-md"
                />
                <input
                  type="time"
                  name=""
                  id=""
                  className="border-gray-400 border px-2 p-1 rounded-md"
                />
              </div>
            </div>
            <div>
              <p className="font-bold mb-2">End Time :</p>
              <div className="flex gap-4">
                <input
                  type="date"
                  name=""
                  id=""
                  className="border-gray-400 border px-2 p-1 rounded-md"
                />
                <input
                  type="time"
                  name=""
                  id=""
                  className="border-gray-400 border px-2 p-1 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center my-5">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="imp" />
              <label htmlFor="imp" className="font-semibold">
                Important
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="email" />
              <label htmlFor="email" className="font-semibold">
                Send Email
              </label>
            </div>
          </div>
          <div className=" my-10">
            <h2 className="border-b text-center text-xl border-black m-5 font-bold">
              Upload Attachments
            </h2>
            <div className="flex justify-center">
              <FileInput multiple />
            </div>
          </div>
          <div className=" my-10">
            <h2 className="border-b text-center text-xl border-black m-5 font-bold">
              Share With
            </h2>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-row gap-10 text-lg font-semibold p-2 rounded-full bg-gray-400">
                <h2
                  className={`p-1 ${
                    share === "all" && "bg-white"
                  } rounded-full px-4 cursor-pointer`}
                  onClick={() => setShare("all")}
                >
                  All
                </h2>
                <h2
                  className={`p-1 ${
                    share === "individual" && "bg-white"
                  } rounded-full px-4 cursor-pointer`}
                  onClick={() => setShare("individual")}
                >
                  Individuals
                </h2>
                <h2
                  className={`p-1 ${
                    share === "groups" && "bg-white"
                  } rounded-full px-4 cursor-pointer`}
                  onClick={() => setShare("groups")}
                >
                  Groups
                </h2>
              </div>
              <div className="my-5">
                {share === "individual" && <p>list of individual</p>}
                {share === "groups" && <p>list of groups</p>}
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-b text-center text-xl border-black m-5 font-bold">
              RSVP
            </h2>
            <div className="flex gap-10 justify-center">
              <div className="flex gap-2">
                <input type="radio" name="RSVP" id="yes" />
                <label htmlFor="yes" className="text-lg">
                  Yes
                </label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="RSVP" id="no" />
                <label htmlFor="no" className="text-lg">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 my-5">
            <button className="bg-black text-white p-2 rounded-md hover:bg-white hover:text-black hover:border-2 border-black">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateEvent;
