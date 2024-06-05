import React, { useState } from 'react'
import Navbar from '../../components/Navbar'

// import EmployeeRVehicles from './EmployeeSubPages/EmployeeRVehicles';
// import EmployeeGVehicles from './EmployeeSubPages/EmployeeGVehicles';
// import EmployeeStaff from './EmployeeSubPages/EmployeeStaff';
// import EmployeeMaterial from './EmployeeSubPages/EmployeeMaterial';
// import EmployeePatrolling from './EmployeeSubPages/EmployeePatrolling';
// import EmployeeGoodsInOut from './EmployeeSubPages/EmployeeGoodsInOut';
import EmployeeVisitor from './EmployeeSubPages/EmployeeVisitor';
import EmployeeGVehicles from './EmployeeGVehicle';
import EmployeeRVehicles from './EmployeeSubPages/EmployeeRVehiicles';
import EmployeeStaff from './EmployeeStaff';
import EmployeeMaterials from './EmployeeMaterials';
import EmployeePatrolling from './EmployeePatrolling';
import EmployeeGoodsInOut from './EmployeeGoodsInOut';

// import VisitorPage from './EmployeeSubPages/VisitorPage';
// import EmployeeMaterial from './EmployeeSubPages/EmployeeMaterial';
// import RVehicles from './EmployeeSubPages/RVehicles';
// import GVehicles from './EmployeeSubPages/GVehicles';
// import EmployeeStaff from './EmployeeSubPages/EmployeeStaff';
// import Patrolling from './EmployeeSubPages/Patrolling';
// import GoodsInOut from './EmployeeSubPages/GoodsInOut';


const EmployeePasses = () => {
    const [page, setPage] = useState("Visitor")
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
          <EmployeeVisitor/>
          </div>
        )}
          {page === "G Vehicles" && (
            <div>
             <EmployeeGVehicles/>
            </div>
          )}
         {page === "R Vehicles" && (
           <div>
           <EmployeeRVehicles/>
          </div>
        )}
        {page === "Staff" && (
          <div>
        <EmployeeStaff/>
          </div>
        )}
         {page === "Materials" && (
          <div>
          <EmployeeMaterials/>
          </div>
        )}
         {page === "Patrolling" && (
          <div>
        <EmployeePatrolling/>
          </div>
        )}
        
         {page === "Goods In/Out" && (
          <div>
           <EmployeeGoodsInOut/>
          </div>
        )}
       
      </div>
      
    </section>
    </div>
  );
};

export default EmployeePasses;