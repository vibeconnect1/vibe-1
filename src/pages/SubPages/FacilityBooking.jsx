import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import CustomTrigger from "../../containers/CustomTrigger";
import SeatTimeSlot, { initialSelectedTimes } from "./SeatTimeSlot";
import Select from "react-select";
import { getAssignedTo } from "../../api";
import { useSelector } from "react-redux";
const FacilityBooking = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [behalf, setBehalf] = useState("self");
  const [isOpen, setIsOpen] = useState(false);
  const [isTermOpen, setIsTermOpen] = useState(false);
  const [selectedTimes, setSelectedTimes] = useState(initialSelectedTimes);
  const [timeSelected, setTimeSelected] = useState(false);
  const [time, setTime] = useState("")
  const [users, setUsers] = useState([]);
  const [date, setDate] = useState(formattedDate)
  const [facility, setFacility] = useState("")
  const [paymentMode, setPaymentMode] = useState("post")
  const [formData, setFormData] = useState({
    building_id: "",
    floor_id: "",
    seat_date: formattedDate,
    user_id: "",
  });
  const handleButtonClick = (selectedTime) => {
    setSelectedTimes((prevState) => {
      const newState = { ...prevState, [selectedTime]: !prevState[selectedTime] };

      // Determine if any time slot is selected
      const anyTimeSelected = Object.values(newState).some((isSelected) => isSelected);

      // Update the state for timeSelected and time
      setTimeSelected(anyTimeSelected);
      setTime(anyTimeSelected ? selectedTime : '');

      return newState;
    });
  };

  useEffect(() => {
    const fetchAssignedTo = async () => {
      try {
        const response = await getAssignedTo();
        const transformedUsers = response.data.map((user) => ({
          value: user.id,
          label: `${user.firstname} ${user.lastname}`,
        }));
        setUsers(transformedUsers);
        // setUsers(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching assigned users:", error);
      }
    };
    fetchAssignedTo();
    console.log(users);
  }, []);
  const themeColor = useSelector((state)=> state.theme.color)
  return (
    <section className="w-screen">
      <div className="flex flex-col mb-10">
        <div style={{background: themeColor}} className="flex justify-center  m-5  p-2 rounded-md">
          <h2 className="text-xl font-semibold text-center text-white ">
            Book Facility
          </h2>
        </div>
        <div className="md:border border-gray-400 rounded-md md:mx-20 p-4">
          <div className="md:grid flex flex-col grid-cols-4 items-center">
            <p className="font-semibold">For :</p>
            <div className="flex gap-5">
              <p
                className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                  behalf === "self" && "bg-black text-white"
                }`}
                onClick={() => setBehalf("self")}
              >
                Self
              </p>
              <p
                className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                  behalf === "others" && "bg-black text-white"
                }`}
                onClick={() => setBehalf("others")}
              >
                Others
              </p>
            </div>
            {behalf === "others" && (
              <Select
                options={users}
                placeholder="Select User"
                value={formData.on_behalf}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, on_behalf: selectedOption })
                }
                className="w-full my-2"
                isMulti
              />
            )}
          </div>
          <div className="flex md:flex-row flex-col md:gap-8 gap-2 my-5">
          <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-semibold">
                Select Date :
              </label>
              <input
                type="date"
                name=""
                value={date}
                onChange={(e)=> setDate(e.target.value)}
                id=""
                className="border p-[2px] px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Select Facility :</p>
              <select className="border p-1 px-4 border-gray-500 rounded-md" value={facility} onChange={(e)=> setFacility(e.target.value)}>
                <option value="">Choose Facility</option>
                <option value="user1">Conference Room</option>
                <option value="User2">Cabin</option>
              </select>
            </div>
            
          </div>

        {facility !== "" &&  <div className="my-5">
            <h2 className="border-b text-xl border-black font-semibold">
              Select Slot
            </h2>
            <SeatTimeSlot handleButtonClick={handleButtonClick} selectedTimes={selectedTimes} />
          </div>}
          <div className="my-2">
            <h2 className="border-b text-xl border-black font-semibold">
              Payment Mode
            </h2>
            <div>
            <div className="md:grid flex flex-col grid-cols-4 items-center my-2">
            {/* <p className="font-semibold">For :</p> */}
            <div className="flex gap-5">
              <p
                className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                  paymentMode === "post" && "bg-black text-white"
                }`}
                onClick={() => setPaymentMode("post")}
              >
                Post Paid
              </p>
              <p
                className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                  paymentMode === "pre" && "bg-black text-white"
                }`}
                onClick={() => setPaymentMode("pre")}
              >
                Prepaid
              </p>
            </div>
            {paymentMode === "pre" && (
             <div>
              <input type="text" placeholder="Enter upi" className="border border-gray-400 p-1 px-4" />
             </div>
            )}
          </div>
            </div>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="" className="font-semibold">
              Comment :
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              className="border p-1 px-4 border-gray-500 rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <button className="p-2 px-4 bg-black text-white hover:bg-white hover:text-black rounded-md border-2 border-black font-medium transition-all duration-300">
              Submit
            </button>
          </div>
          <Collapsible
            readOnly
            trigger={
              <CustomTrigger isOpen={isOpen}>Cancellation Policy:</CustomTrigger>
            }
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            className="bg-gray-100 my-4 p-2 rounded-md font-bold "
          >
            <div className="grid grid-cols-2 bg-gray-300 p-2 rounded-md gap-5 pb-4">
              <p className="font-medium"> will get policy from api</p>
              
            </div>
          </Collapsible>
          <Collapsible
            readOnly
            trigger={
              <CustomTrigger isOpen={isTermOpen}>Terms & Conditions:</CustomTrigger>
            }
            onOpen={() => setIsTermOpen(true)}
            onClose={() => setIsTermOpen(false)}
            className="bg-gray-100 my-4 p-2 rounded-md font-bold "
          >
            <div className="grid grid-cols-2 bg-gray-300 p-2 rounded-md gap-5 pb-4">
              <p className="font-medium"> will get terms from api</p>
              
            </div>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default FacilityBooking;
