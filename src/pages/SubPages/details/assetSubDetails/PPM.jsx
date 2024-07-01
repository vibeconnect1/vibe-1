import React, { useEffect } from 'react'
import { getAssetPPMActivityDetails } from '../../../../api'
import { useParams } from 'react-router-dom'

const PPM = () => {
  const {id} = useParams()

  useEffect(()=>{
    const fetchPPMDetails = async()=>{
      const PPMDetailsResp = await getAssetPPMActivityDetails(id)
      console.log(PPMDetailsResp)
    }
    fetchPPMDetails()
  },[])
  return (
    <div className='flex justify-center items-center h-full my-10'>
      No Data Available
    </div>
  )
}

export default PPM
