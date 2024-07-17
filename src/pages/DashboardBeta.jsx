
import React from 'react'
import Navbar from '../components/Navbar'
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import HighchartsComponent from "../components/HighCharts"; 
import profile from "/vibe.jpeg"
const DashboardBeta = () => {
  const token = import.meta.env.VITE_TOKEN
      const url = `https://reports.lockated.com/FM/custom.html?token=${token}&pms_site_id=1010&site_name=Multiple%20Sites%20Selected&society_id=3632`

      const layout = [
        { i: '1', x: 0, y: 0, w: 2, h: 2 },
        { i: '2', x: 2, y: 0, w: 2, h: 2 },
        { i: '3', x: 4, y: 0, w: 2, h: 2 },
        // Add more items as needed
      ];
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
       {/* <iframe
        src={url}
        title="Report"
       
        className='h-screen w-screen'
      /> */}
    {/* </div> */}
    <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        isResizable={true}
        isDraggable={true}
      >
        <div key="1" className="bg-red-300 border  flex rounded-md items-center justify-center">Item 1</div>
        <div key="2" className="bg-red-300 border  flex rounded-md items-center justify-center">Item 2</div>
        <div key="3" className="bg-red-300 border  flex rounded-md items-center justify-center">Item 3</div>
        <div key="4" className="bg-yellow-300 border flex items-center rounded-md justify-center">{profile}</div>
       
        
      </GridLayout>
    </section>
  )
}

export default DashboardBeta
