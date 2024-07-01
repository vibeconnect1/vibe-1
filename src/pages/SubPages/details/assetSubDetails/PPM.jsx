import React, { useEffect, useState } from 'react'
import { getAssetPPMActivityDetails } from '../../../../api'
import { useParams } from 'react-router-dom'

const PPM = () => {
  const {id} = useParams()
const [ppmDetails, setPPMDetails] = useState([])
  useEffect(()=>{
    const fetchPPMDetails = async()=>{
      const PPMDetailsResp = await getAssetPPMActivityDetails(id)
      console.log(PPMDetailsResp)
      setPPMDetails(PPMDetailsResp.data)
    }
    fetchPPMDetails()
  },[])
  return (
    <div className='flex justify-center items-center  my-10 '>
      <div className="w-full my-2">
       <h2  className='font-medium  border-b-2 border-b-black'>PPM Logs</h2>
       {ppmDetails.map((task, index) => (
         <div key={task.id}>
           {/* {index === 0 ? null : ( */}
             <>
             <div className="my-4 flex flex-col bg-gray-100 shadow-custom-all-sides p-2 rounded-md gap-2">

               <div className="flex gap-4 items-center">
                 <p className="font-medium">Question :</p>
                 <p>{task.question_name}</p>
               </div>
               <div className="flex gap-4 items-center bg-green-200 p-2 rounded-md">
                 <p className="font-medium">Answer :</p>
                 <p>{task.value}</p>
             </div>
               </div>
             </>
           {/* )} */}
         </div>
       ))}
     </div>
    </div>
  )
}

export default PPM
