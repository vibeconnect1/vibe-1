import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import CategorySetup from './CategorySetup'
import SubCategorySetup from './SubCategorySetup'
import SubSubCategorysetup from './SubSubCategorysetup'
import SubSubSubCategorySetup from './SubSubSubCategorySetup'
import IncidenceStatusSetup from './IncidenceStatusSetup'
import IncidenceLevelSetup from './IncidenceLevelSetup'
import EscalationSetup from './EscalationSetup'
import ApprovalSetup from './ApprovalSetup'
import SecondaryCategorySetup from './SecondaryCategorySetup'
import SecondarySubCategorysetup from './SecondarySubCategorysetup'
import SecondarySubSubCategorySetup from './SecondarySubSubCategorySetup'
import SecondarySubSubSubCategorysetup from './SecondarySubSubSubCategorysetup'
import InjurySetup from './InjurySetup'
import PropertyDamageCategorySetup from './PropertyDamageCategorySetup'
import RCACategorySetup from './RCACategorySetup'
import IncidentDisclaimerSetup from './IncidentDisclaimerSetup'
const IncidentSetup = () => {
    const [page, setPage] = useState("category")
  return (
    <section className='flex'>
        <Navbar/>
        <div className='w-full flex mx-3 flex-col overflow-hidden'>
            <div className='grid grid-cols-12'>

           
            <div className=" flex col-span-2 gap-1 flex-col ">
                <h2
                  className={`p-1 ${
                  page === "category" &&
                  "bg-white font-medium  text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer  transition-all duration-300 ease-linear`}
                  onClick={() => setPage("category")}
                >
                    Category
                </h2>
                <h2
                  className={`p-1 ${
                  page === "subCategory1" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear w-full`}
                  onClick={() => setPage("subCategory1")}
                >
                    Sub Category
                </h2>
                <h2
                  className={`p-1 ${
                  page === "subCategory2" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("subCategory2")}
                >
                    Sub Sub Category
                </h2>
                <h2
                  className={`p-1 ${
                  page === "subCategory3" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("subCategory3")}
                >
                    Sub Sub Sub Category
                </h2>
                <h2
                  className={`p-1 ${
                  page === "incidenceStatus" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("incidenceStatus")}
                >
                    Incidence status
                </h2>
                <h2
                  className={`p-1 ${
                  page === "incidenceLevel" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("incidenceLevel")}
                >
                    Incidence level
                </h2>
                <h2
                  className={`p-1 ${
                  page === "escalations" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("escalations")}
                >
                    Escalations
                </h2>
                <h2
                  className={`p-1 ${
                  page === "approvalSetup" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("approvalSetup")}
                >
                    Approval Setup
                </h2>
                <h2
                  className={`p-1 ${
                  page === "secondaryCategory" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("secondaryCategory")}
                >
                    Secondary Category
                </h2>
                
                <h2
                  className={`p-1 ${
                  page === "secondarySubCategory" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("secondarySubCategory")}
                >
                    Secondary Sub Category
                </h2>
                <h2
                  className={`p-1 ${
                  page === "secondarySubSubCategory" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("secondarySubSubCategory")}
                >
                    Secondary Sub Sub Category
                </h2>
                <h2
                  className={`p-1 ${
                  page === "secondarySubSubSubCategory" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("secondarySubSubSubCategory")}
                >
                    Secondary Sub Sub Sub Category
                </h2>
              
                <h2
                  className={`p-1 ${
                  page === "injured" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("injured")}
                >
                    Who got injured
                </h2>
                <h2
                  className={`p-1 ${
                  page === "damageCategory" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("damageCategory")}
                >
                    Property Damage Category
                </h2>
                <h2
                  className={`p-1 ${
                  page === "rcaCategory" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("rcaCategory")}
                >
                    RCA Category
                </h2>
                <h2
                  className={`p-1 ${
                  page === "incidentDisclaimer" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-2 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("incidentDisclaimer")}
                >
                    Incident Disclaimer
                </h2>
            </div>
            <div className=' border-l border-gray-300 col-span-10 w-full'>

            {page === "category" && (
                <div>
                    <CategorySetup />
               </div>
            )}
            {page === "subCategory1" && (
                <div>
                    <SubCategorySetup />
               </div>
            )}
            {page === "subCategory2" && (
                <div>
                    <SubSubCategorysetup />
               </div>
            )}
            {page === "subCategory3" && (
                <div>
                    <SubSubSubCategorySetup />
               </div>
            )}
            {page === "incidenceStatus" && (
                <div>
                  <IncidenceStatusSetup />
               </div>
            )}
            {page === "incidenceLevel" && (
                <div>
                  <IncidenceLevelSetup />
               </div>
            )}
            {page === "escalations" && (
                <div>
                  <EscalationSetup />
               </div>
            )}
            {page === "approvalSetup" && (
                <div>
                  <ApprovalSetup />
               </div>
            )}
            {page === "secondaryCategory" && (
                <div>
                  <SecondaryCategorySetup />
               </div>
            )}
            {page === "secondarySubCategory" && (
                <div>
                  <SecondarySubCategorysetup />
               </div>
            )}
            {page === "secondarySubSubCategory" && (
                <div>
                  <SecondarySubSubCategorySetup />
               </div>
            )}
             {page === "secondarySubSubSubCategory" && (
                <div>
                  <SecondarySubSubSubCategorysetup />
               </div>
            )}
            {page === "injured" && (
                <div>
                  <InjurySetup />
               </div>
            )}
            {page === "damageCategory" && (
                <div>
                  <PropertyDamageCategorySetup />
               </div>
            )}
            {page === "rcaCategory" && (
                <div>
                  <RCACategorySetup />
               </div>
            )}
            {page === "incidentDisclaimer" && (
                <div>
                  <IncidentDisclaimerSetup />
               </div>
            )}
            </div>
            </div>
        </div>
    </section>
  )
}

export default IncidentSetup