import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
import { getVibeCalendar } from "../api";
import { getItemInLocalStorage } from "../utils/localStorage";
import "./style/Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import Select from "react-select";
import DatePicker from "react-datepicker";

const localizer = momentLocalizer(moment);
import profile from "/profile.png";

import "react-datepicker/dist/react-datepicker.css";
import ReactSwitch from "react-switch";
import { AiOutlineClose } from "react-icons/ai";
import { PiPlusBold } from "react-icons/pi";
const Calender = () => {
  const vibeUserId = getItemInLocalStorage("VIBEUSERID");
  const [popupDate, setPopupDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [areCheckboxesChecked, setAreCheckboxesChecked] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("task");
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [selectedCategories, setSelectedCategories] = useState({
    Task: true,
    Meeting: true,
    Event: true,
    Outlook: true,
    Gmail: true,
  });
  const [taskTitle, setTaskTitle] = useState("");
  const [due_date, setDueDate] = useState(new Date());
  const [task_description, setTaskDescription] = useState("");
  const [attachments, setAttachment] = useState([]);
  const [eventAttachment, setEventAttachment] = useState([]);
  const [emails, setEmails] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [loadingEvent, setLoadingEvent] = useState(false);
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");
  const [meetingStartTime, setMeetingStartTime] = useState("");
  const [meetingEndTime, setMeetingEndTime] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [otherEmails, setOtherEmails] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailOtherList, setEmailOtherList] = useState([]);
  const [loadingMeet, setLoadingMeet] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [fileUpload, setFileUpload] = useState(false);
  // refs
  const dropdownRef = useRef();
  const fileInputRef = useRef(null);

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
  console.log(vibeUserId);
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
    console.log("date clicked");
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
  const handleButtonToggle = (buttonType) => {
    setActiveButton(buttonType);
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

  const handleCheckboxChange = (event) => {
    const updatedSelectedCategories = {
      ...selectedCategories,
      [event.target.name]: event.target.checked,
    };

    // Check if any checkbox is checked
    const anyCheckboxChecked = Object.values(updatedSelectedCategories).some(
      (isChecked) => isChecked
    );

    setAreCheckboxesChecked(anyCheckboxChecked);
    setSelectedCategories(updatedSelectedCategories);
  };
  const themeColor = useSelector((state) => state.theme.color);

  const currentDate = new Date();
  const currentTime = `${currentDate.getHours()}:${String(
    currentDate.getMinutes()
  ).padStart(2, "0")}`;
  const maxTime = `23:59`;
  const filterTime = (time) => {
    const selectedDate = new Date(time);
    const currentDate = new Date();

    // Compare selected date with current date
    if (selectedDate.getTime() > currentDate.getTime()) {
      return true; // Future date
    } else if (selectedDate.getTime() === currentDate.getTime()) {
      // If selected date is today, compare times
      const selectedTime =
        selectedDate.getHours() * 60 + selectedDate.getMinutes();
      const currentTime =
        currentDate.getHours() * 60 + currentDate.getMinutes();
      return selectedTime >= currentTime; // Future time
    } else {
      return false; // Past date
    }
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <input
      className="datepickers"
      onClick={onClick}
      value={value}
      ref={ref}
      style={{
        backgroundColor: "white",
        color: "#000000",
        borderRadius: 4,
        border: "#747272 solid 1px",
        height: 40,
        fontSize: 14,
        paddingLeft: 10,
        // width: windowWidth <= 768 ? "100%" : "%",
      }}
    />
  ));
  const handleFileAttachment = (event) => {
    const selectedFiles = event.target.files;
    const newAttachments = Array.from(selectedFiles);
    setAttachment(newAttachments);
    setFileUpload(true)
  };

  const handleEventFileAttachment = (event) => {
    const selectedFiles = event.target.files;
    const newAttachments = Array.from(selectedFiles);
    setEventAttachment(newAttachments);
  };

  var handleChangeSelect = (selectedOption) => {
    console.log(selectedOption);
    setSelectedOption(selectedOption);
  };

  var handleChangeSelectEvent = (selectedOption) => {
    console.log(selectedOption);
    setSelectedOption(selectedOption);
  };

  var handleChangeSelectMeeting = (selectedOption) => {
    console.log(selectedOption);
    setSelectedOption(selectedOption);
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  const handleSaveTask = () => {
    console.log(due_date);

    if (!taskTitle) {
      //alert('Please fill in all the fields before creating the task.');
      return;
    }
    const user_id = localStorage.getItem("user_id");
    setLoading(true);

    const formData = new FormData();
    formData.append("task_topic", taskTitle);
    formData.append("due_date", formatDate(due_date));
    formData.append("created_by", user_id);
    formData.append("user_id", user_id);
    formData.append("task_description", task_description);

    attachments.forEach((file, index) => {
      //formData.append(attachments${index}, file); // Append each file individually with a unique key
      formData.append("attachments", file);
    });
    const idList = selectedOption.map((email) => parseInt(email.value));
    idList.forEach((id) => {
      formData.append("assign_to", id);
    });

    setIsCreatingTask(true);
    postDataToAPI(AddBoardChecklistTask, formData)
      .then((response) => {
        if (response.success) {
          //alert("Task Created !")

          //   onClose();
          // window.location.reload();
          setPopupDate(null);
          // window.location.reload();
          fetchData();
        } else {
          console.log("unsuccess");
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        //alert('Please check your internet and try again!');
      })
      .finally(() => {
        setLoading(false);
        setIsCreatingTask(false);
      });
  };
  const handleSaveEvent = () => {
    const idList = selectedOption.map((email) => parseInt(email.value));

    // if (!eventTitle) {
    //     //alert('Please fill in all the fields before creating the task.');
    //     return;
    // };
    if (eventEndDate < eventStartDate) {
      toast.error(
        "Selected event end date should be greater than the start date.",
        {
          position: "top-center",
          autoClose: 2000,
        }
      );
      return;
    }
    if (eventEndTime <= eventStartTime) {
      toast.error(
        "Selected event end time should be greater than the start time.",
        {
          position: "top-center",
          autoClose: 2000,
        }
      );
      return;
    }

    const user_id = localStorage.getItem("user_id");
    setLoadingEvent(true);
    const formData = new FormData();
    formData.append("title", eventTitle);
    formData.append("from_date", eventStartDate);
    formData.append("to_date", eventEndDate);
    formData.append("from_time", eventStartTime);
    formData.append("to_time", eventEndTime);
    formData.append("user_id", user_id);
    formData.append("description", eventDescription);
    //formData.append('attachment', eventAttachment);
    eventAttachment.forEach((file, index) => {
      formData.append("attachment", file); // Append each file individually with a unique key
    });
    const id = idList.join(",");

    formData.append("guest_ids", id);

    // setIsCreatingEvent(true);
    postDataToAPI(CreateEvent, formData)
      .then((response) => {
        if (response.success) {
          console.log(user_id);
          // alert("Event created !")

          // onClose();
          // window.location.reload();
          // fetchData();
          // setPopupDate(null);
        } else {
          console.log("unsuccess");
        }
        setLoadingEvent(true);
      })
      .catch((error) => {
        //alert('Please check your internet and try again!');
        setLoadingEvent(true);
      })
      .finally(() => {
        setLoadingEvent(true);
        setIsCreatingEvent(false);
      });

    console.log(formData);
  };
  const today = new Date().toISOString().split("T")[0];
  const handleStartDateChange = (e) => {
    const selectedStartDate = new Date(e.target.value);
    const minDate = new Date();

    if (selectedStartDate < minDate) {
      setEventStartDate(getFormattedDate(minDate));
      setEventEndDate("");
    } else {
      setEventStartDate(e.target.value);
    }

    const selectedEndDate = new Date(eventEndDate);
    setIsSingleDayRange(
      selectedStartDate.toDateString() === selectedEndDate.toDateString()
    );
  };

  // Handle end date change
  const handleEndDateChange = (e) => {
    const selectedEndDate = new Date(e.target.value);
    const selectedStartDate = new Date(eventStartDate);

    if (selectedEndDate < selectedStartDate) {
      setEventEndDate(eventStartDate);
    } else {
      setEventEndDate(e.target.value);
    }

    setIsSingleDayRange(
      selectedStartDate.toDateString() === selectedEndDate.toDateString()
    );
  };
  const ZoomCreateMeeting = async () => {
    if (!meetingTitle || !meetingDate) {
      alert("Please fill in Title and Date before creating the Meeting Link.");
      return;
    }

    const formData = new FormData();
    formData.append("agenda", meetingTitle);
    formData.append("date", meetingDate);
    setIsLoading(true);
    // const id = idList.join(',');

    // formData.append('participent_ids', id);
    postDataToAPI(CreateZoomMeet, formData)
      .then((response) => {
        if (response.success) {
          console.log(response.data[0].meet_link);
          setMeetingLink(response.data[0].meet_link);
          setuuid(response.data[0].uuid);
          setMeet_id(response.data[0].meet_id);

          setIsLoading(false);
          setLinkGenerated(true);
        } else {
          console.log("unsuccess");
        }
      })
      .catch((error) => {
        console.log("error: " + error);
        //alert('Please check your internet and try again!');
      })
      .finally(() => {
        // setIsCreatingMeeting(false);
        setIsLoading(false);
      });
  };

  const GenerateMeet = () => {
    ZoomCreateMeeting();
  };

  const TeamCreateMeeting = async () => {
    if (!meetingTitle || !meetingDate) {
      alert("Please fill in Title and Date before creating the Meeting Link.");
      return;
    }

    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("agenda", meetingTitle);
    formData.append("start_time", meetingStartTime);
    setIsLoading(true);
    // const id = idList.join(',');

    // formData.append('participent_ids', id);
    postDataToAPI(CreateTeamMeet, formData)
      .then((response) => {
        if (response.success) {
          console.log(response.data[0].meet_link);
          setMeetingLink(response.data[0].meet_link);
          setuuid(response.data[0].uuid);
          setMeet_id(response.data[0].meet_id);

          setIsLoading(false);
          setLinkGenerated(true);
        } else {
          console.log("unsuccess");
        }
      })
      .catch((error) => {
        console.log("error: " + error);
        //alert('Please check your internet and try again!');
      })
      .finally(() => {
        // setIsCreatingMeeting(false);
        setIsLoading(false);
      });
  };

  const TeamGenerateMeet = () => {
    TeamCreateMeeting();
  };

  const handleAddEmail = () => {
    // Validate the email before adding it to the list
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(otherEmails)) {
      setEmailOtherList([...emailOtherList, otherEmails]);
      setOtherEmails("");
    }
  };

  const handleRemoveEmail = (emailToRemove) => {
    const updatedEmailList = emailOtherList.filter(
      (email) => email !== emailToRemove
    );
    setEmailOtherList(updatedEmailList);
    console.log("emailList");
    console.log(emailOtherList);
  };

  const [checkedRepeat, setCheckedRepeat] = useState(0);
  const [repeatMeet, setRepeatMeet] = useState(false);
  function ToggleRepeatSwitch() {
    const handleChange = (val) => {
      setCheckedRepeat(val ? 1 : 0);
    };

    console.log(checkedRepeat);
    if (checkedRepeat === 1) {
      console.log("asdfghjk");
      setRepeatMeet(true);
    }
    if (checkedRepeat === 0) {
      console.log("cancel");
      setRepeatMeet(false);
    }

    return (
      <>
        <label
          style={{
            color: "#000",
            // fontWeight: "bold",
            marginBottom: "0rem",
            marginTop: "20px",
            fontWeight: 700,
          }}
        >
          Repeat
        </label>
        <div
          className="app"
          //  style={{ marginTop: '25px', marginLeft: '10px' }}
        >
          {/* <p style={{ color: '#000', fontWeight: 'bold', marginBottom: '0rem' }}>Urgent</p> */}
          <ReactSwitch checked={checkedRepeat === 1} onChange={handleChange} />
        </div>
      </>
    );
  }

  const handleSaveMeeting = () => {
    const idList = selectedOption.map((email) => parseInt(email.value));

    if (!meetingTitle) {
      //alert('Please fill in all the fields before creating the task.');
      return;
    }
    if (meetingEndTime < meetingStartTime) {
      toast.error(
        "Selected meeting end time should be greater than start time.",
        { position: "top-center", autoClose: 2000 }
      );
      return;
    }
    const user_id = localStorage.getItem("user_id");
    setLoadingMeet(true);
    const formData = new FormData();
    formData.append("title", meetingTitle);
    formData.append("from_date", meetingDate);
    formData.append("from_time ", meetingStartTime);
    formData.append("to_time", meetingEndTime);
    formData.append("user_id", user_id);
    formData.append("purpose", meetingDescription);
    formData.append("meet_link", meetingLink);
    formData.append("uuid", uuid);
    formData.append("meet_id", meet_id);

    const otheremails = emailOtherList.join(",");
    formData.append("other_emails", otheremails);

    const id = idList.join(",");

    formData.append("participent_ids", id);

    formData.append("to__date", selectedToDate);

    const mainWeek = selectedWeekdays.join(",");
    formData.append("included_weekdays", mainWeek);
    formData.append("repeat_meeting", repeatMeet);

    setIsCreatingMeeting(true);
    postDataToAPI(CreateMeeting, formData)
      .then((response) => {
        if (response.success) {
          // alert("Meeting created !")

          // onClose();
          // window.location.reload();
          // fetchData();

          setMeetingTitle("");
          setMeetingDate("");
          setMeetingStartTime("");
          setMeetingEndTime("");
          setMeetingDescription("");
          setMeetingLink("");
          setuuid("");
          setMeet_id("");
          setEmailOtherList("");
          // setSelectedToDate('');
          setSelectedWeekdays("");
          // setRepeatMeet('');

          setPopupDate(null);
          setLoadingMeet(false);
        } else {
          console.log("unsuccess");
        }
        setLoadingMeet(false);
      })
      .catch((error) => {
        //alert('Please check your internet and try again!');
        setLoadingMeet(false);
      })
      .finally(() => {
        setLoadingMeet(false);
        setIsCreatingMeeting(false);
      });
  };

  return (
    <section className="flex">
      <Navbar />
      <div className="p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        <button
          className="z-50 p-4 rounded-full shadow-custom-all-sides"
          style={{
            position: "absolute",
            right: "60px",
            bottom: "70px",
            background: themeColor,

            color: "white",
          }}
          onClick={() => setPopupDate(new Date())}
        >
          <FaPlus size={20} />
        </button>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next dayGridMonth,timeGridWeek,timeGridDay customDropdown",
          }}
          customButtons={{
            customDropdown: {
              text: `My Calendar`,
              click: function (event) {
                const rect = event.currentTarget.getBoundingClientRect();
                setDropdownPosition({
                  top: rect.bottom - 0,
                  left: rect.left - 0,
                });
                setIsListOpen((prevState) => !prevState);
              },
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
        {isListOpen && (
          <div
            ref={dropdownRef}
            style={{
              position: "absolute",
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
              zIndex: 1000,
              // width: 150,
              // padding: "5px",
              borderRadius: 4,
              background: "white",
            }}
            className="shadow-custom-all-sides w-auto px-4 my-1"
            aria-labelledby="dropdownMenu2"
          >
            {Object.keys(selectedCategories).map((category) => (
              <div className="dropdown-item" key={category}>
                <input
                  type="checkbox"
                  name={category}
                  checked={selectedCategories[category]}
                  onChange={handleCheckboxChange}
                  id={category}
                  style={{ marginRight: "10px" }}
                />
                <label style={{ fontWeight: "normal" }} htmlFor={category}>
                  {category}
                </label>
              </div>
            ))}
          </div>
        )}
        {/* modal */}

        {popupDate && (
          <div className=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-20 p-10 ">
            <div className="bg-white md:w-auto  p-4 px-5  flex flex-col rounded-md  overflow-auto">
              <button
                className="place-self-end fixed"
                onClick={() => setPopupDate(null)}
              >
                <AiOutlineClose size={20} />
              </button>
              <div className="flex justify-center">
                <div className="flex justify-between gap-5 p-1 items-center bg-gray-200 mx-10 w-fit rounded-full">
                  <button
                    className={` ${
                      activeButton === "task" &&
                      " bg-white text-blue-400 shadow-custom-all-sides"
                    } font-medium px-4 rounded-full`}
                    onClick={() => handleButtonToggle("task")}
                  >
                    Task
                  </button>
                  <button
                    className={` ${
                      activeButton === "event" &&
                      " bg-white text-blue-400 shadow-custom-all-sides"
                    } font-medium  px-4 rounded-full`}
                    onClick={() => handleButtonToggle("event")}
                  >
                    Event
                  </button>
                  <button
                    className={`${
                      activeButton === "meeting" &&
                      " bg-white text-blue-400 shadow-custom-all-sides"
                    } font-medium px-4 rounded-full`}
                    onClick={() => handleButtonToggle("meeting")}
                  >
                    Meeting
                  </button>
                </div>
              </div>
              &nbsp;&nbsp;
              {activeButton === "task" && (
                <div>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className=" ">
                        <label className="font-medium ">Task Topic</label>
                        <br />
                        <input
                          value={taskTitle}
                          onChange={(e) => setTaskTitle(e.target.value)}
                          className="rounded-sm p-2 outline-none w-full border border-gray-400 "
                          type="text"
                          spellcheck="true"
                        />
                      </div>

                      <div className="">
                        <label className="font-medium"> Date</label>
                        <br />
                        <DatePicker
                          selected={due_date}
                          onChange={(date) => setDueDate(date)}
                          showTimeSelect
                          dateFormat="dd/MM/yyyy h:mm aa"
                          timeIntervals={5}
                          minDate={new Date()}
                          // minTime={currentTime}
                          // maxTime={maxTime}
                          filterTime={filterTime}
                          className="rounded-sm p-2 outline-none w-full border border-gray-400"

                          // customInput={<CustomInput />}
                        />
                      </div>
                    </div>

                    <div className="w-full ">
                      <label className="font-medium">Task Description</label>
                      <br />
                      <textarea
                        className="w-full border border-gray-400 rounded-sm"
                        type="text"
                        rows={3}
                        spellcheck="true"
                        value={task_description}
                        onChange={(e) => setTaskDescription(e.target.value)}
                      />
                    </div>
                    {/* { subcategory?(<></>):( */}
                    <div className="flex gap-2 w-full justify-between">
                      {/* <label className="font-medium">Attachment</label> */}
                      <br />
                      {/* <input
                          ref={fileInputRef}
                          type="file"
                          onChange={handleFileAttachment}
                        /> */}
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer flex items-center border-2 border-black  bg-transparent rounded-md font-medium  px-4 transition duration-300 ease-in-out hover:bg-black hover:border-white hover:text-white "
                      >
                       {!fileUpload ? <span className="flex items-center gap-2">
                          <PiPlusBold /> Attachment
                        </span>:<span>{attachments.map(file => `${file.name.slice(0, 10)}...`).join(', ')}</span>}
                        <input
                          id="file-upload"
                          type="file"
                          className="sr-only"
                          ref={fileInputRef}
                          onChange={handleFileAttachment}
                        />
                      
                      </label>

                      <div className="w-full">
                        {/* <label
                          className="font-medium"
                        >
                          Assign
                        </label> */}
                        {/* <br /> */}
                        <Select
                          isMulti
                          onChange={handleChangeSelect}
                          options={emails}
                          noOptionsMessage={() => "Email not available..."}
                          maxMenuHeight={90}
                          placeholder="Assign To"
                          styles={{
                            placeholder: (baseStyles, state) => ({
                              ...baseStyles,
                              color: "black",
                            }),
                            clearIndicator: (baseStyles) => ({
                              ...baseStyles,
                              color: "red",
                            }),
                            dropdownIndicator: (baseStyles) => ({
                              ...baseStyles,
                              color: "black",
                            }),
                            control: (baseStyles) => ({
                              ...baseStyles,
                              borderColor: "darkblue",
                            }),
                            multiValueRemove: (baseStyles, state) => ({
                              ...baseStyles,
                              color: state.isFocused ? "red" : "gray",
                              backgroundColor: state.isFocused
                                ? "black"
                                : "lightgreen",
                            }),
                          }}
                          menuPosition={"fixed"}
                        />
                      </div>
                    </div>

                    <div className=" flex justify-center ">
                      <button
                        className="text-white font-medium rounded-md w-full p-2 "
                        style={{
                          background: themeColor,
                        }}
                        onClick={handleSaveTask}
                      >
                        {loading ? (
                          <div
                          // style={{
                          //   display: "flex",
                          //   justifyContent: "center",
                          //   alignItems: "center",
                          //   height: "100%",
                          // }}
                          >
                            <ThreeDots color="#fff" height={25} width={50} />
                          </div>
                        ) : (
                          "Create Task"
                        )}
                        {/* Save */}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {activeButton === "event" && (
                <div
                  className={`content ${
                    activeButton === "event" ? "active" : ""
                  }`}
                >
                  <div id="eventDiv">
                    <div
                      class="pdEmplyself-main col-md-12 row"
                      style={{ color: "black" }}
                    >
                      <div class="col-md-6 " style={{ marginBottom: "0rem" }}>
                        <label
                          style={{ marginTop: "10px", marginBottom: "0rem" }}
                        >
                          Event Topic
                        </label>
                        <br />
                        <input
                          value={eventTitle}
                          onChange={(e) => setEventTitle(e.target.value)}
                          style={{
                            borderRadius: 4,
                            border: "#747272 solid 1px",
                            height: 40,
                            fontSize: 14,
                            paddingLeft: 10,
                            color: "#000",
                            width: "100%",
                          }}
                          type="text"
                          spellcheck="true"
                        />
                      </div>
                      {/* <div class="col-md-6"  >
                                            <label style={{marginTop:'20px',  marginBottom: '0rem' }}>Due</label><br/>
                                            <input type="datetime-local" class="datepickers" value={due_date} onChange={(e) => setDueDate(e.target.value)} style={{backgroundColor:'white'}}/>
                                        </div> */}
                      <div className="col-md">
                        <label
                          style={{ marginTop: "10px", marginBottom: "0rem" }}
                        >
                          {" "}
                          Date
                        </label>
                        <br />
                        <div style={{ display: "flex" }}>
                          <input
                            type="date"
                            style={{ width: "50%" }}
                            value={eventStartDate}
                            //  onChange={(e) => setEventStartDate(e.target.value)}
                            onChange={handleStartDateChange}
                            min={today}
                          ></input>
                          <input
                            type="date"
                            style={{ width: "50%", marginLeft: "10px" }}
                            value={eventEndDate}
                            // onChange={(e) => setEventEndDate(e.target.value)}
                            onChange={handleEndDateChange}
                            min={today}
                          ></input>
                        </div>
                      </div>

                      <div
                        className="col-md-6"
                        style={{ marginBottom: "0rem" }}
                      >
                        <label
                          style={{ marginTop: "10px", marginBottom: "0rem" }}
                        >
                          Event Description
                        </label>
                        <br />
                        <textarea
                          style={{
                            resize: "none",
                            height: "40px",
                            paddingTop: "8px",
                          }}
                          type="text"
                          value={eventDescription}
                          onChange={(e) => setEventDescription(e.target.value)}
                          spellcheck="true"
                        />
                      </div>

                      <div className="col-md">
                        <label
                          style={{ marginTop: "10px", marginBottom: "0rem" }}
                        >
                          {" "}
                          Time
                        </label>
                        <br />
                        <div style={{ display: "flex" }}>
                          <input
                            type="time"
                            style={{ width: "50%" }}
                            value={eventStartTime}
                            onChange={(e) => setEventStartTime(e.target.value)}
                          ></input>

                          <input
                            type="time"
                            style={{ width: "50%", marginLeft: "10px" }}
                            value={eventEndTime}
                            onChange={(e) => setEventEndTime(e.target.value)}
                          ></input>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label
                          style={{ marginTop: "10px", marginBottom: "0rem" }}
                        >
                          Attachment
                        </label>
                        <br />
                        <input
                          style={{
                            border: "#929090 dotted 2px",
                            height: "55px",
                            color: "black",
                            padding: "10px",
                          }}
                          //value={eventAttachment}
                          //onChange={(e) => setEventAttachment(e.target.value)}
                          onChange={handleEventFileAttachment}
                          ref={fileInputRef}
                          type="file"
                          multiple
                        />
                      </div>
                      <div class="col-md-6">
                        <label
                          style={{ marginTop: "10px", marginBottom: "0rem" }}
                        >
                          Guests
                        </label>
                        <br />
                        <Select
                          isMulti
                          onChange={handleChangeSelectEvent}
                          options={emails}
                          noOptionsMessage={() => "Email not available..."}
                          maxMenuHeight={90}
                          styles={{
                            placeholder: (baseStyles, state) => ({
                              ...baseStyles,
                              color: "black",
                            }),
                            clearIndicator: (baseStyles) => ({
                              ...baseStyles,
                              color: "red",
                            }),
                            dropdownIndicator: (baseStyles) => ({
                              ...baseStyles,
                              color: "black",
                            }),
                            control: (baseStyles) => ({
                              ...baseStyles,
                              borderColor: "darkblue",
                            }),
                            multiValueRemove: (baseStyles, state) => ({
                              ...baseStyles,
                              color: state.isFocused ? "red" : "gray",
                              backgroundColor: state.isFocused
                                ? "black"
                                : "lightgreen",
                            }),
                          }}
                          menuPosition={"fixed"}
                        />
                      </div>
                      <div
                        class="col-md-12"
                        style={{
                          display: "flex",
                          alignSelf: "flex-end",
                          justifyContent: "flex-end",
                        }}
                      >
                        <button
                          style={{
                            marginTop: "10px",
                            marginBottom: "0rem",
                            padding: "5px 10px",
                            width: "30%",
                          }}
                          onClick={handleSaveEvent}
                        >
                          {loadingEvent ? (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                              }}
                            >
                              <ThreeDots color="#fff" height={25} width={50} />
                            </div>
                          ) : (
                            "Save"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeButton === "meeting" && (
                <div
                  className={`content ${
                    activeButton === "meeting" ? "active" : ""
                  }`}
                >
                  <div className="meeting-div" style={{ display: "block" }}>
                    <div class=" col-md-12 row" style={{ color: "black" }}>
                      <div class="col-md-6 " style={{ marginBottom: "0rem" }}>
                        <label
                          style={{ marginTop: "10px", marginBottom: "0rem" }}
                        >
                          Meeting Topic
                        </label>
                        <br />
                        <input
                          value={meetingTitle}
                          onChange={(e) => setMeetingTitle(e.target.value)}
                          style={{
                            borderRadius: 4,
                            border: "#747272 solid 1px",
                            height: 40,
                            fontSize: 14,
                            paddingLeft: 10,
                            color: "#000",
                            width: "100%",
                          }}
                          type="text"
                        />
                      </div>
                      <div className="col-md datepickerinput">
                        <label
                          style={{ marginTop: "10px", marginBottom: "0rem" }}
                        >
                          {" "}
                          Date
                        </label>
                        <br />
                        <input
                          type="date"
                          value={meetingDate}
                          min={today}
                          onChange={(e) => setMeetingDate(e.target.value)}
                          style={{
                            borderRadius: 4,
                            border: "#747272 solid 1px",
                            height: 40,
                            fontSize: 16,
                            paddingLeft: 10,
                            color: "#000",
                            width: "100%",
                            resize: "none",
                          }}
                        ></input>
                        {/* <DatePicker 
                                                    dateFormat="dd/MM/yyyy h:mm aa"
                                                    // className="datepickers_date"
                                                    customInput={<CustomInput />}
                                                /> */}
                      </div>

                      <div class="col-md-6 " style={{ marginBottom: "0rem" }}>
                        <label
                          style={{ marginTop: "10px", marginBottom: "0rem" }}
                        >
                          Meeting Description
                        </label>
                        <br />
                        <textarea
                          value={meetingDescription}
                          onChange={(e) =>
                            setMeetingDescription(e.target.value)
                          }
                          style={{
                            borderRadius: 4,
                            border: "#747272 solid 1px",
                            height: 40,
                            fontSize: 14,
                            paddingLeft: 10,
                            color: "#000",
                            width: "100%",
                            resize: "none",
                            paddingTop: "8px",
                          }}
                          type="text"
                          spellcheck="true"
                        />
                      </div>
                      <div
                        class="col-md-6  "
                        style={{ marginBottom: "0rem", maxWidth: "100%" }}
                      >
                        <label
                          style={{ marginTop: "10px", marginBottom: "0rem" }}
                        >
                          Time
                        </label>
                        <br />
                        <div style={{ display: "flex" }}>
                          <input
                            type="time"
                            value={meetingStartTime}
                            onChange={(e) =>
                              setMeetingStartTime(e.target.value)
                            }
                            style={{
                              borderRadius: 4,
                              border: "#747272 solid 1px",
                              height: 40,
                              fontSize: 16,
                              paddingLeft: 10,
                              color: "#000",
                              width: "50%",
                              resize: "none",
                            }}
                          ></input>
                          <input
                            type="time"
                            value={meetingEndTime}
                            onChange={(e) => setMeetingEndTime(e.target.value)}
                            style={{
                              borderRadius: 4,
                              border: "#747272 solid 1px",
                              height: 40,
                              fontSize: 16,
                              paddingLeft: 10,
                              color: "#000",
                              width: "50%",
                              resize: "none",
                              marginLeft: "10px",
                            }}
                          ></input>
                        </div>
                      </div>
                      {/* Meeting Link */}
                      <div
                        className="col-md-12 p-0"
                        style={{ marginTop: "10px" }}
                      >
                        <div className="col-md-12">
                          <label>Meeting Link</label>
                          <div style={{ position: "relative" }}>
                            {" "}
                            {/* Parent div with relative positioning */}
                            <input
                              readOnly
                              value={
                                isLoading
                                  ? "Generating Meeting Link..."
                                  : meetingLink
                              }
                              onChange={(e) => setMeetingLink(e.target.value)}
                              style={{
                                borderRadius: 4,
                                border: "#747272 solid 1px",
                                height: 40,
                                fontSize: 14,
                                paddingLeft: 10,
                                paddingRight: 110, // Adjust padding to make space for the button
                                color: "#000",
                                width: "100%",
                              }}
                              type="text"
                            />
                            {/* <button className='upload-audio '
                                                                    onClick={GenerateMeet} 
                                                                    disabled={isLoading} 
                                                                    style={{
                                                                        position: 'absolute',    // Absolute positioning
                                                                        right: 10,               // Positioned to the right
                                                                        top: '50%',              // Centered vertically
                                                                        transform: 'translateY(-50%)', // Centering correction
                                                                        padding: '5px 10px',
                                                                    }}>
                                                                    <b>Generate Link</b>
                                                                </button> */}
                            <div class="dropdown">
                              <button
                                className="upload-audio dropdown-toggle"
                                type="button"
                                id="dropdownMenu2"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                disabled={isLoading}
                                style={{
                                  position: "absolute", // Absolute positioning
                                  right: 10, // Positioned to the right
                                  top: "50%", // Centered vertically
                                  transform: "translateY(-105%)", // Centering correction
                                  padding: "5px 10px",
                                  backgroundColor: isLoading ? "#d3d3d3" : "", // Gray out the button when disabled
                                  cursor: isLoading ? "not-allowed" : "pointer",
                                }}
                              >
                                <b>Generate Link</b>
                              </button>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenu2"
                              >
                                <button
                                  class="dropdown-item"
                                  type="button"
                                  onClick={GenerateMeet}
                                >
                                  Zoom Meet
                                </button>
                                <button
                                  class="dropdown-item"
                                  type="button"
                                  onClick={TeamGenerateMeet}
                                >
                                  Teams Meet
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Invites */}
                      <div class="col-md-12">
                        <label
                          style={{ marginTop: "10px", marginBottom: "0rem" }}
                        >
                          Invites
                        </label>
                        <br />
                        <Select
                          isMulti
                          onChange={handleChangeSelectMeeting}
                          options={emails}
                          noOptionsMessage={() => "Email not available..."}
                          maxMenuHeight={90}
                          styles={{
                            placeholder: (baseStyles, state) => ({
                              ...baseStyles,
                              color: "black",
                            }),
                            clearIndicator: (baseStyles) => ({
                              ...baseStyles,
                              color: "red",
                            }),
                            dropdownIndicator: (baseStyles) => ({
                              ...baseStyles,
                              color: "black",
                            }),
                            control: (baseStyles) => ({
                              ...baseStyles,
                              borderColor: "darkblue",
                            }),
                            multiValueRemove: (baseStyles, state) => ({
                              ...baseStyles,
                              color: state.isFocused ? "red" : "gray",
                              backgroundColor: state.isFocused
                                ? "black"
                                : "lightgreen",
                            }),
                          }}
                          menuPosition={"fixed"}
                        />
                      </div>
                      {/* other email */}
                      <div className="col-md-7">
                        <label
                          style={{ marginTop: "20px", marginBottom: "0rem" }}
                        >
                          Add Other Emails
                        </label>
                        <div className="input-group">
                          <input
                            className="col-md-5"
                            value={otherEmails}
                            onChange={(e) => setOtherEmails(e.target.value)}
                            style={{
                              borderRadius: 4,
                              border: "#747272 solid 1px",
                              height: 40,
                              fontSize: 14,
                              paddingLeft: 10,
                              color: "#000",
                              width: "calc(100% - 50px)", // Adjust the width to leave space for the remove icon
                            }}
                            type="text"
                          />
                          <div className="col-md-1">
                            <button
                              className="btn btn-outline-secondary ml-1 "
                              type="button"
                              onClick={handleAddEmail}
                            >
                              <FaArrowRight />
                            </button>
                          </div>

                          {emailOtherList.length > 0 && (
                            <div
                              className="email-list mt-1 col-md-12"
                              style={{
                                backgroundColor: "#fff",
                                borderRadius: 4,
                                border: "1px solid #ccc",
                                padding: 6,
                              }}
                            >
                              {emailOtherList.map((email, index) => (
                                <span key={index} className="email-tag mr-1">
                                  {email}
                                  <button
                                    className="btn btn-outline-secondary ml-1"
                                    style={{ padding: "0px 4px" }}
                                    type="button"
                                    onClick={() => handleRemoveEmail(email)}
                                  >
                                    <FaTimes />
                                  </button>
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-5">
                        <ToggleRepeatSwitch />
                      </div>
                      {repeatMeet ? (
                        <div
                          className="col-md mt-2"
                          style={{
                            backgroundColor: "rgb(76 98 113 / 9%)",
                            borderRadius: 4,
                          }}
                        >
                          <label className="ml-2">Repeat</label>
                          <hr className="mb-0 mt-0"></hr>

                          <div className="col-md-12 row">
                            <div className="col-md-6 mt-3">
                              <label className="mr-1">
                                <span>FROM DATE</span>
                              </label>
                              <br></br>
                              <input
                                type="date"
                                class="datepickerinput"
                                min={todayDate}
                                value={meetingDate}
                                onChange={(event) =>
                                  setMeetingDate(event.target.value)
                                }
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label className="mr-1">
                                <span>TO DATE</span>
                              </label>
                              <br></br>
                              <input
                                type="date"
                                class="datepickerinput"
                                min={todayDate}
                                value={selectedToDate}
                                onChange={(event) =>
                                  setSelectedToDate(event.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="col-md-12 ml-1 mt-4">
                            <div class="row mt-2 mb-1 ml-4">
                              <span>SELECT WORKING DAYS</span>
                              <div
                                class="row mt-0 mb-0 ml-4"
                                style={{ color: "#000" }}
                              >
                                <span
                                  style={{
                                    display: "flex",
                                    color: "#000",
                                    marginRight: 14,
                                    fontFamily:
                                      "SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,Courier New, monospace",
                                  }}
                                >
                                  [{" "}
                                  <i
                                    className="fas fa-info-circle"
                                    title="Detail"
                                    style={{
                                      fontSize: 14,
                                      marginTop: 5,
                                      color: "#000",
                                    }}
                                  ></i>
                                  &nbsp;
                                  <p
                                    className="mr-2 mb-2 "
                                    style={{
                                      width: 10,
                                      height: 10,
                                      paddingBottom: 4,
                                      marginTop: 7,
                                      backgroundColor: "#0A9F6A",
                                    }}
                                  ></p>
                                  Selected
                                </span>
                                <span
                                  style={{
                                    display: "flex",
                                    color: "#000",
                                    fontFamily:
                                      "SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,Courier New, monospace",
                                  }}
                                >
                                  <p
                                    className="mr-2 mb-2 "
                                    style={{
                                      width: 10,
                                      height: 10,
                                      paddingBottom: 4,
                                      marginTop: 7,
                                      backgroundColor: "#fff",
                                      border: "1px solid #cdcdcd",
                                    }}
                                  ></p>
                                  Deselected]
                                </span>
                              </div>
                            </div>

                            <div className="row ml-4 m-3 mt-2 ">
                              {weekdaysMap.map((weekdayObj) => (
                                <div
                                  style={{
                                    width:
                                      screenWidth >= 1200 && screenWidth <= 1440
                                        ? "10%"
                                        : "",
                                    marginBottom: 4,
                                  }}
                                  key={weekdayObj.day}
                                  className={`btn mr-2 ${
                                    selectedWeekdays?.includes(weekdayObj.index)
                                      ? // &&
                                        // weekdayObj.isActive
                                        "btn btn-selected"
                                      : "btn btn-unselectedc"
                                  }`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleWeekdaySelection(weekdayObj.day);
                                  }}
                                >
                                  <a>{weekdayObj.day}</a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}

                      <div
                        class="col-md-12"
                        style={{
                          display: "flex",
                          alignSelf: "flex-end",
                          justifyContent: "flex-end",
                        }}
                      >
                        <button
                          style={{
                            marginTop: "10px",
                            marginBottom: "0rem",
                            padding: "5px 10px",
                            width: "30%",
                          }}
                          onClick={handleSaveMeeting}
                        >
                          {loadingMeet ? (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                              }}
                            >
                              <ThreeDots color="#fff" height={25} width={50} />
                            </div>
                          ) : (
                            "Save"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Calender;
