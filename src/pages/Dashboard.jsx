import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const themeColor = useSelector((state)=> state.theme.color)
  return (
    <section  className="flex">
      <Navbar/>
      <header
      style={{background : themeColor}}
      className='w-full h-10 rounded-md mx-2 my-1 flex justify-center items-center '>
        <nav>
         <h1 className='text-white text-center text-xl'>Vibe Connect</h1>
        </nav>
      </header>
  
    </section>
  )
}

export default Dashboard
