import React from 'react'
import CTCDetailsList from './CTCDetailsList'
import { useSelector } from "react-redux";

const Restrictions = () => {
    const themeColor = useSelector((state) => state.theme.color);

  return (
    <div className='flex ml-20'>
        <CTCDetailsList/>
    
    <div className='m-10'>
        <p className='font-bold mb-4'>Restrictions on CTC Basket and Amount Allocation</p>
       
    </div></div>
  )
}

export default Restrictions