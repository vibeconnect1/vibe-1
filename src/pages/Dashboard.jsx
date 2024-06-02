import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { getVibeCalendar } from "../api";
import { getItemInLocalStorage } from "../utils/localStorage";

const Dashboard = () => {
  const themeColor = useSelector((state) => state.theme.color);
  const vibeUserId = getItemInLocalStorage("VIBEUSERID")
  console.log(vibeUserId)
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const calendarResponse = await getVibeCalendar(vibeUserId);
        console.log(calendarResponse);
      } catch (error) {
        console.log(error)
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
        console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    }
  };

  return (
    <section className="flex" ref={contentRef}>
      <Navbar />
      <header
        style={{ background: themeColor }}
        className="w-full h-10 rounded-md mx-2 my-1 flex justify-center items-center "
      >
        <nav>
          <h1 className="text-white text-center text-xl">Vibe Connect</h1>
        </nav>
        {/* <div  className="flex-grow bg-red-200">
       
        <button onClick={toggleFullScreen}>Toggle Full Screen</button>
      </div> */}
      </header>
    </section>
  );
};

export default Dashboard;
