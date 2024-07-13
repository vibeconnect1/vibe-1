
import React from 'react'
import Navbar from '../components/Navbar'

const DashboardBeta = () => {
      const url = "https://reports.lockated.com/FM/custom.html?token=74805184912721105b2b2c64a3dd62d50a16931e6f08edab&pms_site_id=1010&site_name=Multiple%20Sites%20Selected&society_id=3632"
  return (
    <section
    className="flex"
   
    //   style={{
    //   background: `url(${wave})`,
    //   // backgroundSize: "100% 100% ",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center",
    // }}
  >
    <Navbar />
    {/* <div className=" w-full flex lg:mx-3 flex-col overflow-hidden"> */}
       <iframe
        src={url}
        title="Report"
        // style={{ width: '100%', height: '100%', border: 'none' }}
        className='h-screen w-screen'
      />
    {/* </div> */}
    </section>
  )
}

export default DashboardBeta
