import React, { useState, useRef, useEffect, useCallback } from "react";
import image from "/profile.png";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getItemInLocalStorage } from "../utils/localStorage";
import toast from "react-hot-toast";
import { getSetupUsers, postNewVisitor, postVisitorOTPApi } from "../api";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
const AddNewVisitor = () => {
  const siteId = getItemInLocalStorage("SITEID");
  const userId = getItemInLocalStorage("UserId");
  const [behalf, setbehalf] = useState("Visitor");
  const inputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [visitors, setVisitors] = useState([{ name: "", mobile: "" }]);
  const [selectedFrequency, setSelectedFrequency] = useState("Once");
  const [selectedVisitorType, setSelectedVisitorType] = useState("Guest");
  const [hosts, setHosts] = useState([]);
  const [passStartDate, setPassStartDate] = useState("");
  const [showWebcam, setShowWebcam] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const handleOpenCamera = () => {
    setShowWebcam(true);
  };

  const handleCloseCamera = () => {
    setShowWebcam(false);
  };
  const [passEndDate, setPassEndDate] = useState("");
  const [formData, setFormData] = useState({
    visitorName: "",
    mobile: "",
    purpose: "",
    comingFrom: "",
    vehicleNumber: "",
    expectedDate: "",
    expectedTime: "",
    hostApproval: false,
    goodsInward: false,
    host: "",
  });
  console.log(formData);
  const handleFrequencyChange = (e) => {
    setSelectedFrequency(e.target.value);
  };
  const handleVisitorTypeChange = (e) => {
    setSelectedVisitorType(e.target.value);
  };

  const currentDates = new Date();
  const year = currentDates.getFullYear();
  const month = String(currentDates.getMonth() + 1).padStart(2, "0");
  const day = String(currentDates.getDate()).padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;
  const [selectedWeekdays, setSelectedWeekdays] = useState([]);
  const [weekdaysMap, setWeekdaysMap] = useState([
    { day: "Mon", index: 0, isActive: false },
    { day: "Tue", index: 1, isActive: false },
    { day: "Wed", index: 2, isActive: false },
    { day: "Thu", index: 3, isActive: false },
    { day: "Fri", index: 4, isActive: false },
    { day: "Sat", index: 5, isActive: false },
    { day: "Sun", index: 6, isActive: false },
  ]);
  console.log(selectedWeekdays);

  const handleWeekdaySelection = (weekday) => {
    console.log(`Selected day: ${weekday}`);

    const index = weekdaysMap.find((dayObj) => dayObj.day === weekday)?.index;

    if (index !== undefined) {
      const updatedWeekdaysMap = weekdaysMap.map((dayObj) =>
        dayObj.index === index
          ? { ...dayObj, isActive: !dayObj.isActive }
          : dayObj
      );
      setWeekdaysMap(updatedWeekdaysMap);

      setSelectedWeekdays((prevSelectedWeekdays) =>
        prevSelectedWeekdays.includes(weekday)
          ? prevSelectedWeekdays.filter((day) => day !== weekday)
          : [...prevSelectedWeekdays, weekday]
      );
      // setSelectedWeekdays((prevSelectedWeekdays) =>
      //   prevSelectedWeekdays.includes(index)
      //     ? prevSelectedWeekdays.filter((day) => day !== index)
      //     : [...prevSelectedWeekdays, index]
      // );
    }
  };
  const handleAddVisitor = (event) => {
    event.preventDefault();
    setVisitors([...visitors, { name: "", mobile: "" }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newVisitors = [...visitors];
    newVisitors[index][name] = value;
    setVisitors(newVisitors);
  };

  const handleRemoveVisitor = (index) => {
    const newVisitors = [...visitors];
    newVisitors.splice(index, 1);
    setVisitors(newVisitors);
  };

  const getHeadingText = () => {
    switch (behalf) {
      case "Visitor":
        return "NEW VISITOR";
      case "Delivery":
        return "DELIVERY & SUPPORT STAFF";
      case "Cab":
        return "CAB";
      default:
        return "CREATE VISITOR";
    }
  };

  const themeColor = useSelector((state) => state.theme.color);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setShowWebcam(false);
    setCapturedImage(imageSrc);
  }, [webcamRef]);

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const otp = generateOtp();
  const navigate = useNavigate();
  const createNewVisitor = async () => {
    if (
      formData.visitorName === "" ||
      formData.purpose === "" ||
      formData.mobile === ""
    ) {
      return toast.error("All fields are Required");
    }

    const postData = new FormData();
    postData.append("visitor[site_id]", siteId);
    postData.append("visitor[created_by_id]", formData.host);
    postData.append("visitor[name]", formData.visitorName);
    postData.append("visitor[contact_no]", formData.mobile);
    postData.append("visitor[purpose]", formData.purpose);
    postData.append("visitor[start_pass]", passStartDate);
    postData.append("visitor[end_pass]", passEndDate);
    postData.append("visitor[coming_from]", formData.comingFrom);
    postData.append("visitor[vehicle_number]", formData.vehicleNumber);
    postData.append("visitor[expected_date]", formData.expectedDate);
    postData.append("visitor[expected_time]", formData.expectedTime);
    postData.append("visitor[skip_host_approval]", formData.hostApproval);
    postData.append("visitor[goods_inwards]", formData.goodsInward);
    postData.append("visitor[visit_type]", selectedVisitorType);
    postData.append("visitor[frequency]", selectedFrequency);
    if (capturedImage) {
      const response = await fetch(capturedImage);
      const blob = await response.blob();
      postData.append("visitor_files[]", blob, "visitor_image.jpg");
    }
    const blob = await fetch(capturedImage).then((res) => res.blob());
    selectedWeekdays.forEach((day) => {
      postData.append("visitor[working_days][]", day);
    });
    visitors.forEach((extraVisitor, index) => {
      postData.append(
        `visitor[extra_visitors_attributes][${index}][name]`,
        extraVisitor.name
      );
      postData.append(
        `visitor[extra_visitors_attributes][${index}][contact_no]`,
        extraVisitor.mobile
      );
    });
    const sendOTP = new FormData();
    sendOTP.append("mobile_number", formData.mobile);
    sendOTP.append("otp", otp);
    try {
      toast.loading("Creating new visitor Please wait!")
      const visitResp = await postNewVisitor(postData);
      const sendOtp = await postVisitorOTPApi(sendOTP);
      console.log(sendOtp);
      console.log(visitResp);
      navigate("/admin/passes/visitors");
      toast.dismiss()
      toast.success("Visitor Added Successfully");
    } catch (error) {
      console.log(error);
      toast.dismiss()
    }
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const usersResp = await getSetupUsers();
      setHosts(usersResp.data);
      console.log(usersResp);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center items-center  w-full p-4">
      <div className="md:border border-gray-300 rounded-lg md:p-4 w-full md:mx-4 ">
        <h2
          style={{ background: themeColor }}
          className="text-center md:text-xl font-bold p-2 bg-black rounded-full text-white"
        >
          {getHeadingText()}
        </h2>
        <br />
        <div className="flex justify-center">
          {!showWebcam ? (
            <button onClick={handleOpenCamera}>
              <img
                src={capturedImage || image}
                alt="Uploaded"
                className="border-4 border-gray-300 rounded-full w-40 h-40 object-cover"
              />
            </button>
          ) : (
            <div>
              <div className="rounded-full">
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="rounded-full w-60 h-60 object-cover"
                />
              </div>
              <div className="flex gap-2 justify-center my-2 items-center">
                <button
                  onClick={capture}
                  className="bg-green-400 rounded-md text-white p-1 px-4"
                >
                  Capture
                </button>
                <button
                  onClick={handleCloseCamera}
                  className="bg-red-400 rounded-md text-white p-1 px-4"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex md:flex-row flex-col  my-5 gap-10">
          <div className="flex gap-2 flex-col">
            <h2 className="font-semibold">Visitor Type :</h2>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Guest"
                  name="attendance"
                  value="Guest"
                  checked={selectedVisitorType === "Guest"}
                  onChange={handleVisitorTypeChange}
                />
                <label htmlFor="Guest" className="font-semibold ">
                  Guest
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Support Staff"
                  name="attendance"
                  value="Support Staff"
                  checked={selectedVisitorType === "Support Staff"}
                  onChange={handleVisitorTypeChange}
                />
                <label htmlFor="Support Staff" className="font-semibold ">
                  Support Staff
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="font-semibold">Visiting Frequency :</h2>
            <div className="flex items-center gap-4 ">
              <div className="flex items-center gap-2 ">
                <input
                  type="radio"
                  id="Once"
                  name="frequency"
                  value="Once"
                  checked={selectedFrequency === "Once"}
                  onChange={handleFrequencyChange}
                />
                <label htmlFor="Once" className="font-semibold">
                  Once
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Frequently"
                  name="frequency"
                  value="Frequently"
                  checked={selectedFrequency === "Frequently"}
                  onChange={handleFrequencyChange}
                />
                <label htmlFor="Frequently" className="font-semibold ">
                  Frequently
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {selectedVisitorType === "Support Staff" && (
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="" className="font-medium">
                Support Category :
              </label>
              <select className="border border-gray-400 p-2 rounded-md">
                <option value="">Select Support Staff Category</option>
                <option value="">Maintenance Workers</option>
                <option value="">Janitors</option>
                <option value="">Groundskeepers</option>
                <option value="">Security Personnel</option>
              </select>
            </div>
          )}
          {behalf !== "Cab" && (
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="visitorName" className="font-semibold">
                Visitor Name:
              </label>
              <input
                type="text"
                value={formData.visitorName}
                onChange={handleChange}
                name="visitorName"
                id="visitorName"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Enter Visitor Name"
              />
            </div>
          )}
          {behalf !== "Cab" && (
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="mobileNumber" className="font-semibold">
                Mobile Number :
              </label>
              <input
                type="number"
                value={formData.mobile}
                onChange={handleChange}
                name="mobile"
                id="mobileNumber"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Enter Mobile Number"
              />
            </div>
          )}

          <div className="grid gap-2 items-center w-full">
            <label htmlFor="" className="font-medium">
              Host :
            </label>
            <select
              className="border border-gray-400 p-2 rounded-md"
              value={formData.host}
              onChange={handleChange}
              name="host"
            >
              <option value="">Select Person to meet</option>
              {hosts.map((host) => (
                <option value={host.id} key={host.id}>
                  {host.firstname} {host.lastname}
                </option>
              ))}
            </select>
          </div>

          {behalf !== "Delivery" && behalf !== "Cab" && (
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="additionalVisitor" className="font-semibold">
                Pass Number
              </label>
              <input
                type="number"
                id="additionalVisitor"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Enter Pass number"
              />
            </div>
          )}

          {behalf !== "Delivery" && behalf !== "Cab" && (
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="comingFrom" className="font-semibold">
                Coming from:
              </label>
              <input
                type="text"
                id="comingFrom"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Enter Origin"
                value={formData.comingFrom}
                name="comingFrom"
                onChange={handleChange}
              />
            </div>
          )}

          <div className="grid gap-2 items-center w-full">
            <label htmlFor="vehicleNumber" className="font-semibold">
              Vehicle Number:
            </label>
            <input
              type="text"
              id="vehicleNumber"
              className="border border-gray-400 p-2 rounded-md"
              placeholder="Enter Vehicle Number"
              value={formData.vehicleNumber}
              name="vehicleNumber"
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2 items-center w-full">
            <label htmlFor="expectedDate" className="font-semibold">
              Expected Date:
            </label>
            <input
              type="date"
              id="expectedDate"
              className="border border-gray-400 p-2 rounded-md"
              value={formData.expectedDate}
              onChange={handleChange}
              name="expectedDate"
            />
          </div>

          <div className="grid gap-2 items-center w-full">
            <label htmlFor="expectedTime" className="font-semibold">
              Expected Time:
            </label>
            <input
              type="time"
              id="expectedTime"
              value={formData.expectedTime}
              onChange={handleChange}
              name="expectedTime"
              className="border border-gray-400 p-2 rounded-md"
            />
          </div>

          {behalf !== "Delivery" && behalf !== "Cab" && (
            <div className="grid gap-2 items-center w-full">
              <label htmlFor="purpose" className="font-semibold">
                Visit Purpose:
              </label>
              <select
                id="purpose"
                value={formData.purpose}
                onChange={handleChange}
                name="purpose"
                className="border border-gray-400 p-2 rounded-md"
              >
                <option value="">Select Purpose</option>
                <option value="Meeting">Meeting</option>
                <option value="Delivery">Delivery</option>
                <option value="Personal">Personal</option>
                <option value="Fitout Staff">Fitout Staff</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}

          <span>
            <input
              type="checkbox"
              value={formData.hostApproval}
              checked={formData.hostApproval}
              onChange={() =>
                setFormData((prevState) => ({
                  ...prevState,
                  hostApproval: !prevState.hostApproval,
                }))
              }
              id="hostApproval"
            />
            &nbsp;<label htmlFor="hostApproval">Skip Host Approval</label>
            &nbsp;&nbsp;&nbsp;
            <input
              type="checkbox"
              value={formData.goodsInward}
              onChange={() =>
                setFormData((prevState) => ({
                  ...prevState,
                  goodsInward: !prevState.goodsInward,
                }))
              }
            />
            &nbsp;&nbsp;<label htmlFor="">Goods Inwards</label>
          </span>
        </div>
        <h2 className="font-medium border-b-2 mt-5 border-black">
          Additional Visitor
        </h2>
        <div className="grid md:grid-cols-3 gap-3 mt-5">
          {visitors.map((visitor, index) => (
            <div key={index}>
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="" className="font-semibold">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="border border-gray-400 p-2 rounded-md"
                  value={visitor.name}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              &nbsp;&nbsp;
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="" className="font-semibold">
                  Mobile:
                </label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  name="mobile"
                  className="border border-gray-400 p-2 rounded-md"
                  value={visitor.mobile}
                  onChange={(event) => handleInputChange(index, event)}
                />
                <button onClick={() => handleRemoveVisitor(index)}>
                  <FaTrash />
                </button>
                &nbsp;
              </div>
            </div>
          ))}

          <div>
            <button
              onClick={handleAddVisitor}
              className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
            >
              Add Additional Visitor
            </button>
          </div>
        </div>
        {selectedFrequency === "Frequently" && (
          <div className="flex flex-col gap-2 my-2">
            <div className="grid md:grid-cols-3 gap-4 ">
              <div className="flex flex-col">
                <p className="font-medium"> Pass Valid From :</p>
                <input
                  type="date"
                  min={todayDate}
                  value={passStartDate}
                  onChange={(event) => setPassStartDate(event.target.value)}
                  className="border border-gray-400 p-2 rounded-md placeholder:text-sm w-full"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-medium">Pass Valid To :</p>
                <input
                  type="date"
                  min={todayDate}
                  value={passEndDate}
                  onChange={(event) => setPassEndDate(event.target.value)}
                  className="border border-gray-400 p-2 rounded-md placeholder:text-sm w-full"
                />
              </div>
            </div>
            <p className="font-medium">Select Permitted Days:</p>

            <div className="flex gap-4 flex-wrap ">
              {weekdaysMap.map((weekdayObj) => (
                <button
                  key={weekdayObj.day}
                  className={` rounded-md p-2 px-4 shadow-custom-all-sides font-medium ${
                    selectedWeekdays?.includes(weekdayObj.day)
                      ? // &&
                        // weekdayObj.isActive
                        "bg-green-400 text-white "
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleWeekdaySelection(weekdayObj.day);
                  }}
                >
                  <a>{weekdayObj.day}</a>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-5 justify-center items-center my-4 mb-10">
          <button
            onClick={createNewVisitor}
            className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewVisitor;
