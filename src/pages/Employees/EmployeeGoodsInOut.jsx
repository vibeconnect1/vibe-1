import React, { useState } from 'react'


import EmployeeOutwardsTable from './EmployeeSubPages/EmployeeOutwardTable';
import EmployeeInwardsTable from './EmployeeSubPages/EmployeeInwardTable';
//import Navbar from '../../components/Navbar'





const EmployeeGoodsInOut = () => {
  const [page, setPage] = useState("Inwards")


  return (
    <div className="visitors-page">
      <section className="flex">

        <div className=" w-full flex mx-3 flex-col overflow-hidden">
          <div className="flex md:justify-center  my-2">
            <div className="md:flex md:flex-row flex-col gap-5 text-lg font-semibold p-1 md:rounded-full md:w-auto w-full rounded-sm bg-gray-400">
              <div className="flex w-full space-x-4 justify-center">
                <h2
                  className={`p-2 ${page === "Inwards" ? "text-red-500" : "text-black"
                    }  md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}

                  onClick={() => setPage("Inwards")}
                >
                  Inwards
                </h2>
                <h2
                  className={`p-2 ${page === "Outwards" ? "text-pink-500" : "text-black"
                    }  md:rounded-full rounded-sm px-4 cursor-pointer text-center text-sm`}

                  onClick={() => setPage("Outwards")}
                >
                  Outwards
                </h2>



              </div>



            </div>

          </div>

          {page === "Inwards" && (
            <EmployeeInwardsTable/>
          )}

          {page === "Outwards" && (
            <div>
             <EmployeeOutwardsTable/>
            </div>
          )}

        </div>

      </section>

    </div>
  );
};

export default EmployeeGoodsInOut;