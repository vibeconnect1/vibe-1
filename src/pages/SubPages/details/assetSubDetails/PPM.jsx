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
    <div>
      PPM
    </div>
  )
}

export default PPM
