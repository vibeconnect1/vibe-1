import React, { useState } from "react";
import FileInput from "../../Buttons/FileInput";

const CreateBroadcst = () => {
  const [share, setShare] = useState("all");
  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Create Broadcast
        </h2>
        <div className="mx-20 my-5 mb-10 border  p-5 px-10 rounded-lg shadow-xl">
          <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
            Communication Info
          </h2>
          <div className="flex flex-col gap-4 mx-20">
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Title :
              </label>
              <input
                type="text"
                name=""
                placeholder="Enter Title"
                id=""
                className="border px-2 rounded-sm border-gray-400 placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Description :
              </label>
              <textarea
                name=""
                id=""
                placeholder="Enter Description"
                rows="3"
                className="border px-2 rounded-sm border-gray-400 placeholder:text-sm"
              />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="imp" />
              <label htmlFor="imp">Mark as Important</label>
            </div>
            <div className="flex sm:flex-row flex-col justify-between">
              <p className="font-bold">Expire On</p>
              <div className="flex gap-2">
                <label htmlFor="" className="font-semibold">
                  End Date:
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="border px-2 rounded-sm border-gray-400 "
                />
              </div>
              <div className="flex gap-2">
                <label htmlFor="" className="font-semibold">
                  End Time:
                </label>
                <input
                  type="time"
                  name=""
                  id=""
                  className="border px-2 rounded-sm border-gray-400 "
                />
              </div>
            </div>

            <div className="my-5">
              <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
                Attachments
              </h2>
              <FileInput />
            </div>
            <div>
              <h2 className="border-b text-center text-xl border-black m-5 font-bold">
                Share With
              </h2>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row gap-10 text-lg font-semibold p-2 rounded-full bg-gray-400">
                  <h2
                    className={`p-1 ${
                      share === "all" && "bg-white"
                    } rounded-full text-sm px-4 cursor-pointer`}
                    onClick={() => setShare("all")}
                  >
                    All
                  </h2>
                  <h2
                    className={`p-1 ${
                      share === "individual" && "bg-white"
                    } rounded-full text-sm px-4 cursor-pointer`}
                    onClick={() => setShare("individual")}
                  >
                    Individuals
                  </h2>
                  <h2
                    className={`p-1 ${
                      share === "groups" && "bg-white"
                    } rounded-full text-sm px-4 cursor-pointer`}
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
            <div className="flex justify-center mt-10 my-5">
            <button className="bg-black text-white p-2 rounded-md hover:bg-white hover:text-black hover:border-2 border-black">
              Submit
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBroadcst;
