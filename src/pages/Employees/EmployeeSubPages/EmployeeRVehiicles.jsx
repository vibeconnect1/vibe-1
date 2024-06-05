import React, { useState } from 'react'
//import Navbar from '../../components/Navbar'
import { PiPlusCircle } from "react-icons/pi";
import { Link } from 'react-router-dom';

import EmployeeRVehiclesHistory from './EmployeeRVehiclesHistory';
import EmployeeRVehiclesTable from './EmployeeRVehiclesTable';
// import RVehiclesTable from './RVehiclesTable';
// import RVehiclesHistory from './RvehiclesHistory';



const EmployeeRVehicles = () => {
  const [page, setPage] = useState("All")

  const [selectedVisitor, setSelectedVisitor] = useState(null);

  const handleClick = (visitorType) => {
    setSelectedVisitor(visitorType);
  };
  return (
    <div className="visitors-page">
      <section className="flex">

        <div className=" w-full flex mx-3 flex-col overflow-hidden">
          <div className="flex md:justify-center  my-2">
            <div className="md:flex md:flex-row flex-col gap-5 text-lg font-semibold p-1 md:rounded-full md:w-auto w-full rounded-sm bg-gray-400">
              <div className="flex w-full space-x-4 justify-center">
                <h2
                  className={`p-2 ${page === "All" ? "text-red-500" : "text-black"
                    }  md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}

                  onClick={() => setPage("All")}
                >
                  All
                </h2>
                <h2
                  className={`p-2 ${page === "History" ? "text-pink-500" : "text-black"
                    }  md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}

                  onClick={() => setPage("History")}
                >
                  History
                </h2>



              </div>



            </div>

          </div>

          {page === "All" && (

            <EmployeeRVehiclesTable/>
          )}

          {page === "History" && (
            <div>
                <EmployeeRVehiclesHistory/>
            </div>
          )}

        </div>

      </section>

    </div>
  );
};

export default EmployeeRVehicles;