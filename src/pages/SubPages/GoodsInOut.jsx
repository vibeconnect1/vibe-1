import React, { useState } from "react";
import InwardsTable from "./InwardTable";
import OutwardsTable from "./OurwardTable";
import Navbar from "../../components/Navbar";
import Passes from "../Passes";
// import InwardsTable from './InwardsTable';
// import OutwardsTable from './OutwardsTable';
//import Navbar from '../../components/Navbar'

const GoodsInOut = () => {
  const [page, setPage] = useState("Inwards");

  return (
    <div className="visitors-page">
      <section className="flex">
        <Navbar/>
        <div className=" w-full flex mx-3 flex-col overflow-hidden">
          <Passes/>
          <div className="flex md:justify-center  my-2">
            <div className="md:flex md:flex-row flex-col gap-5 text-lg font-semibold p-1 md:rounded-full md:w-auto w-full rounded-sm bg-gray-400">
              <div className="flex w-full space-x-4 justify-center">
                <h2
                  className={`p-2 ${
                    page === "Inwards" ? "text-red-500" : "text-black"
                  }  md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                  onClick={() => setPage("Inwards")}
                >
                  Inwards
                </h2>
                <h2
                  className={`p-2 ${
                    page === "Outwards" ? "text-pink-500" : "text-black"
                  }  md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                  onClick={() => setPage("Outwards")}
                >
                  Outwards
                </h2>
              </div>
            </div>
          </div>

          {page === "Inwards" && <InwardsTable />}

          {page === "Outwards" && (
            <div>
              
              <OutwardsTable />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GoodsInOut;
