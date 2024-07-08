import React, { useState } from "react";
//import Navbar from '../../components/Navbar'
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import Passes from "../Passes";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";

const VisitorPage = () => {
  const [page, setPage] = useState("Visitor In");
  const themeColor = useSelector((state)=> state.theme.color)
  const [selectedVisitor, setSelectedVisitor] = useState(null);

  const handleClick = (visitorType) => {
    setSelectedVisitor(visitorType);
  };
  return (
    <div className="visitors-page">
      <section className="flex">
        <Navbar/>
        <div className=" w-full flex mx-3  flex-col overflow-hidden">
          <Passes/>
          <div className="flex md:justify-center  my-2">
            <div className="md:flex md:flex-row flex-col gap-5 text-lg font-semibold p-1 md:rounded-full md:w-auto w-full rounded-sm bg-gray-400">
              <div className="flex w-full space-x-4 justify-center">
                <h2
                  className={`p-2 ${
                    page === "Visitor In" ? "text-blue-500" : "text-black"
                  } md:rounded-lg rounded-sm cursor-pointer text-center text-sm flex items-center justify-center`}
                  onClick={() => setPage("Visitor In")}
                >
                  Visitor In
                </h2>
                <h2
                  className={`p-2 ${
                    page === "Visitor Out" ? "text-blue-500" : "text-black"
                  } md:rounded-lg rounded-sm cursor-pointer text-center text-sm flex items-center justify-center`}
                  onClick={() => setPage("Visitor Out")}
                >
                  Visitor Out
                </h2>
                <h2
                  className={`p-2 ${
                    page === "History" ? "text-blue-500" : "text-black"
                  } md:rounded-lg rounded-sm cursor-pointer text-center text-sm flex items-center justify-center`}
                  onClick={() => setPage("History")}
                >
                  History
                </h2>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Link
              to={"/admin/add-new-visitor"}
              style={{background: themeColor}}
              className=" font-semibold  hover:text-white duration-150 transition-all p-2 rounded-md text-white cursor-pointer text-center flex items-center gap-2 justify-center"

            >
              <PiPlusCircle size={20} />
              Add New Visitor
            </Link>
          </div>
          {page === "Visitor In" && (
            <div>
              <select
                className="border p-2 rounded-md border-black"
              
              >
                <option>Select Person to meet</option>
                <option>abc</option>
              </select>
              <br />
              <div className="text-center">
                <span
                  className={`cursor-pointer hover:underline ${
                    selectedVisitor === "expected"
                      ? "text-blue-600 underline"
                      : ""
                  } text-center`}
                  onClick={() => handleClick("expected")}
                >
                  <span>Expected visitor</span>
                </span>
                <span
                  className={`cursor-pointer hover:underline ${
                    selectedVisitor === "unexpected"
                      ? "text-blue-600 underline"
                      : ""
                  } text-center`}
                  onClick={() => handleClick("unexpected")}
                >
                  &nbsp; <span>Unexpected visitor</span>
                </span>
              </div>
            </div>
          )}
          {page === "Visitor Out" && (
            <div>
              <select
               
                className="border p-2 rounded-md border-black"
              >
                <option>Select Person to meet</option>
                <option>abc</option>
              </select>
              <br />
              <div className="text-center">
                <span
                  className={`cursor-pointer hover:underline ${
                    selectedVisitor === "expected"
                      ? "text-blue-600 underline"
                      : ""
                  } text-center`}
                  onClick={() => handleClick("expected")}
                >
                  <span>Expected visitor</span>
                </span>
                <span
                  className={`cursor-pointer hover:underline ${
                    selectedVisitor === "unexpected"
                      ? "text-blue-600 underline"
                      : ""
                  } text-center`}
                  onClick={() => handleClick("unexpected")}
                >
                  &nbsp; <span>Unexpected visitor</span>
                </span>
              </div>
            </div>
          )}
          {page === "History" && (
            <div>
              <input
                type="text"
                placeholder="Search Number"
                className="border p-2 rounded-md border-black"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default VisitorPage;
