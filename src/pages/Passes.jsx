import React, { useState } from "react";
import Navbar from "../components/Navbar";
import VisitorPage from "./SubPages/VisitorPage";
import RVehicles from "./SubPages/RVehicles";
import GVehicles from "./SubPages/GVehicles.jsx";
import Staff from "./SubPages/Staff.jsx";
import MaterialPass from "./MaterialsPass.jsx";
import Patrolling from "./SubPages/Patrolling.jsx";
import GoodsInOut from "./SubPages/GoodsInOut.jsx";
// import EmployeeStaff from './SubPages/EmployeeStaff.jsx';
// import EmployeeMaterial from './SubPages/EmployeeMaterial.jsx';
// import Patrolling from './SubPages/Patrolling.jsx';
// import GoodsInOut from './SubPages/GoodsInOut.jsx';

const Passes = () => {
  const [page, setPage] = useState("Visitor");
  return (
    <div className="visitors-page">
      <section className="flex">
        <Navbar />
        <div className=" w-full flex mx-3 flex-col overflow-hidden">
          <div className="flex md:justify-center  my-2">
            <div className="md:flex md:flex-row flex-col gap-5 text-lg font-semibold p-1 md:rounded-full md:w-auto w-full rounded-sm bg-gray-400">
              <h2
                className={`p-1 ${
                  page === "Visitor" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("Visitor")}
              >
                Visitor
              </h2>
              <h2
                className={`p-1 ${
                  page === "R Vehicles" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("R Vehicles")}
              >
                R Vehicles
              </h2>
              <h2
                className={`p-1 ${
                  page === "G Vehicles" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("G Vehicles")}
              >
                G Vehicles
              </h2>
              <h2
                className={`p-1 ${
                  page === "Staff" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("Staff")}
              >
                Staff
              </h2>
              <h2
                className={`p-1 ${
                  page === "Materials" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("Materials")}
              >
                Materials
              </h2>
              <h2
                className={`p-1 ${
                  page === "Patrolling" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("Patrolling")}
              >
                Patrolling
              </h2>
              <h2
                className={`p-1 ${
                  page === "Goods In/Out" && "bg-white text-blue-500"
                } md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}
                onClick={() => setPage("Goods In/Out")}
              >
                Goods In/Out
              </h2>
            </div>
          </div>
          {page === "Visitor" && (
            <div>
              <VisitorPage />
            </div>
          )}
          {page === "R Vehicles" && (
            <div>
              <RVehicles />
            </div>
          )}
          {page === "G Vehicles" && (
            <div>
              <GVehicles />
            </div>
          )}
          {page === "Staff" && (
            <div>
              <Staff />
            </div>
          )}
         {page === "Materials" && (
             <div>
          <MaterialPass/>
          </div>
        )}
         {page === "Patrolling" && (
             <div>
        <Patrolling/>
          </div>
        )}
        
         {page === "Goods In/Out" && (
          <div>
           <GoodsInOut/>
          </div>
        )}
        </div>
      </section>
    </div>
  );
};

export default Passes;
