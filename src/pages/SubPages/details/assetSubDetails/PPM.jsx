import React, { useEffect } from 'react'
import { getPPMActivityDetails } from '../../../../api'
import { useParams } from 'react-router-dom'

const PPM = () => {
  const {assetId} = useParams()
  useEffect(()=>{
    const fetchPPMDetails = async()=>{
      const PPMDetailsResp = await getPPMActivityDetails(assetId)
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
