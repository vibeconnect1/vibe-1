import React from 'react'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <section  className="flex">
      <Navbar/>
      <header className='bg-black w-full h-10 rounded-md mx-2 my-1 flex justify-center items-center '>
        <nav>
         <h1 className='text-white text-center text-xl'>Vibe Connect</h1>
        </nav>
      </header>
  
    </section>
  )
}

export default Dashboard
