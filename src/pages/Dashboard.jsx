import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { getVibeCalendar } from "../api";
import { getItemInLocalStorage } from "../utils/localStorage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import wave from "/wave.png"
import HighchartsComponent from "../components/HighCharts";
const Dashboard = () => {
  const themeColor = useSelector((state) => state.theme.color);
  const vibeUserId = getItemInLocalStorage("VIBEUSERID");
  console.log(vibeUserId);
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const calendarResponse = await getVibeCalendar(vibeUserId);
        console.log(calendarResponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCalendar();
  }, []);

  const toggleFullScreen = () => {
    const element = contentRef.current;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen().catch((err) => {
        console.log(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    }
  };
  // const currentDate = new Date();
  // const datePickerRef = useRef(null);
  // const [dueDate, setDueDate] = useState(null);
  // const handleDateChange1 = async (date) => {
  //   setDueDate(date); // Update the selected date in the state
  //   Update_Task_Duedate(user_id, taskid, date);
  // };

  

  return (
    <section className="flex" ref={contentRef}
    //   style={{
    //   background: `url(${wave})`,
    //   // backgroundSize: "100% 100% ",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center",
    // }}
    >
      <Navbar />
      {/* <div className="flex flex-col w-full"> */}
        <header
          style={{ background: themeColor }}
          className="w-full h-10 rounded-md mx-5 my-1 flex justify-center items-center "
        >
          <nav>
            <h1 className="text-white text-center text-xl">Vibe Connect</h1>
          </nav>
          {/* <div  className="flex-grow bg-red-200">
       
        <button onClick={toggleFullScreen}>Toggle Full Screen</button>
      </div> */}
        </header>
          {/* <DatePicker
            selected={dueDate}
            onChange={handleDateChange1}
            showTimeSelect
            dateFormat="dd/MM/yyyy h:mm aa"
            placeholderText="Select Date & Time"
            ref={datePickerRef}
            minDate={currentDate}
            className="border-2 bordeer-black"

          /> */}
          {/* <div className="w-full flex mx-3 flex-col p-2 mb-10 ">

          <HighchartsComponent/> */}
          {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default Dashboard;
