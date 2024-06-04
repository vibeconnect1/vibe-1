import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getVibeCalendar } from "../api";
import { getItemInLocalStorage } from "../utils/localStorage";
import "./style/Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const localizer = momentLocalizer(moment);
const Calender = () => {
  const vibeUserId = getItemInLocalStorage("VIBEUSERID");
  const [popupDate, setPopupDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [areCheckboxesChecked, setAreCheckboxesChecked] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('task');
  function incrementDate(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1); // Increment the day by 1
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  function decrementDate(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() - 1); // Increment the day by 1
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const fetchCalenderData = async () => {
      const calendarDataResponse = await getVibeCalendar(vibeUserId);
      const validCategories = ["Task", "Event", "Meeting"];
      const formattedEvents = calendarDataResponse.data
        .filter((event) => validCategories.includes(event.category))
        .map((event) => {
          const start =
            event.category === "Task" ? event.due_date : event.from_date;
          const end = incrementDate(event.to_date);
          const category = event.category;
          const start_time = event.from_time;
          const end_time = event.to_time;
          const description = event.description;
          const meeting_link = event.meet_link;
          const id = event.id;
          const sub_category = event.sub_category;

          const assign_to_emails = Array.isArray(event.assign_to_data)
            ? event.assign_to_data.map((assignee) => ({
                label: assignee.email,
                value: assignee.id,
              }))
            : [];

          const guest_to_emails = Array.isArray(event.guest_data)
            ? event.guest_data.map((guest) => ({
                label: guest.email,
                value: guest.id,
              }))
            : [];

          const participant_to_emails = Array.isArray(event.participant_data)
            ? event.participant_data.map((participant) => ({
                label: participant.email,
                value: participant.id,
              }))
            : [];

          return {
            title: event.title,
            start,
            end,
            category,
            sub_category,
            id,
            start_time,
            end_time,
            description,
            assign_to_emails,
            guest_to_emails,
            participant_to_emails,
            meeting_link,
          };
        });

      setEvents(formattedEvents);
      console.log(formattedEvents);
    };
    fetchCalenderData();
  }, []);

  const calendarRef = useRef();
  const handleDateClick = (arg, date) => {
    setPopupDate(arg.dateStr);
    setSelectedDate(new Date(arg.dateStr));

    if (date instanceof Date && !isNaN(date)) {
      setSelectedDate(date);

      const selectedMonth = date.getMonth() + 1;
      const selectedYear = date.getFullYear();

      console.log(
        `Selected Date: ${date.getDate()}, Month: ${selectedMonth}, Year: ${selectedYear}`
      );
    }
  };
  const handleViewChange = (info) => {
    const currentView = info.view;
    if (currentView) {
      const currentStartDate = currentView.currentStart;
      const currentMonth = currentView.currentStart.getMonth();
      const currentYear = currentView.currentStart.getFullYear();
      const currentDate = currentStartDate.getDate();
      console.log(
        `Current Date: ${currentDate}, Month: ${
          currentMonth + 1
        }, Year: ${currentYear}`
      );
    }
  };
  const [filteredEvents, setFilteredEvents] = useState([]);

  const filterEvents = () => {
    console.log(selectedCategories);
    const filtered = events.filter(
      (event) => selectedCategories[event.category]
    );
    setFilteredEvents(filtered);
  };

  const handleEventClick = (eventInfo) => {
    const pattern = /@gmail\.com$/;
    const clickedItem = eventInfo.event.toPlainObject();
    console.log(clickedItem);
    if (clickedItem.extendedProps.category === "Task") {
      setActiveButton("task");
    } else if (clickedItem.extendedProps.category === "Event") {
      setActiveButton("event");
    } else if (clickedItem.extendedProps.category === "Meeting") {
      setActiveButton("meeting");
    } else if (pattern.test(clickedItem.extendedProps.organizer)) {
      setActiveButton("gmail");
    } else {
      setActiveButton("outlook");
    }

    if (clickedItem.extendedProps.category === "Task") {
      setSubcategory(clickedItem.extendedProps.sub_category);
      setDueDate(new Date(formatDateTimedif(clickedItem.start)));

      setSelectedItem({
        ...clickedItem,
        isEditing: true,
        start_time: formatDateTimedif(clickedItem.start),
        end_time: clickedItem.extendedProps.end_time,
        // title:clickedItem.extendedProps.title,
        description: clickedItem.extendedProps.description,
        assign_to_emails: clickedItem.extendedProps.assign_to_emails,
        guest_to_emails: clickedItem.extendedProps.guest_to_emails,
        participant_to_emails: clickedItem.extendedProps.participant_to_emails,
        category: clickedItem.extendedProps.category,
        subcategory: clickedItem.extendedProps.sub_category,
        meeting_link: clickedItem.extendedProps.meeting_link,
      });
    } else {
      setSelectedItem({
        ...clickedItem,
        isEditing: true,
        start_time: clickedItem.extendedProps.start_time,
        end_time: clickedItem.extendedProps.end_time,
        description: clickedItem.extendedProps.description,
        assign_to_emails: clickedItem.extendedProps.assign_to_emails,
        guest_to_emails: clickedItem.extendedProps.guest_to_emails,
        participant_to_emails: clickedItem.extendedProps.participant_to_emails,
        category: clickedItem.extendedProps.category,
        subcategory: clickedItem.extendedProps.sub_category,
        meeting_link: clickedItem.extendedProps.meeting_link,
      });
    }
  };

  return (
    <section className="flex">
      <Navbar />
      <div className="p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "customDropdown",
            center: "prev,title,next",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
            customButtons={{
              customDropdown: {
                text: `My Calendar`,
                click: function (event) {
                  console.log("Button clicked!");
                  console.log("Dropdown state:", isListOpen);
                  const rect = event.currentTarget.getBoundingClientRect();
                  setDropdownPosition({
                    top: rect.bottom - 70,
                    left: rect.left - 260,
                  });
                  // handleTextClick(event);
                  setIsListOpen((prevState) => !prevState);
                  // buttonRef.current = event.currentTarget;
                },

                // click:function(event) {
                //     console.log("Button clicked!");
                //     console.log("Dropdown state:", isListOpen);

                //     handleTextClick(event);
                // }
              },
            }}
          dateClick={handleDateClick}
          initialDate={selectedDate}
          datesSet={handleViewChange}
          events={areCheckboxesChecked ? filteredEvents : events}
          eventBackgroundColor={(events) =>
            events.extendedProps.category === "Task" ? "blue" : "green"
          }
          eventTextColor="white"
            eventClick={handleEventClick}
          height={"82vh"}
          //   eventMouseEnter={handleEventMouseEnter}
          //   eventMouseLeave={handleEventMouseLeave}
          allDayText="All Day"
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }}
          slotLabelFormat={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }}
          style={{ zIndex: 1 }}
        />
      </div>
    </section>
  );
};

export default Calender;
