import React, { useEffect, useRef, useState } from "react";
import FileInput from "../../Buttons/FileInput";
import { useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import Select from "react-select";
import { getAssignedTo, postBroadCast } from "../../api";
import FileInputBox from "../../containers/Inputs/FileInputBox";
import { getItemInLocalStorage } from "../../utils/localStorage";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const CreateBroadcast = () => {
  const [share, setShare] = useState("all");
  const themeColor = useSelector((state) => state.theme.color);
  const siteId = getItemInLocalStorage("SITEID");
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    site_id: siteId,
    notice_title: "",
    notice_discription: "",
    expiry_date: "",
    user_ids: [],
    notice_image: [],
  });
  console.log(formData);
  const datePickerRef = useRef(null);
  const currentDate = new Date();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExpiryDateChange = (date) => {
    setFormData({ ...formData, expiry_date: date });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAssignedTo();
        const transformedUsers = response.data.map((user) => ({
          value: user.id,
          label: `${user.firstname} ${user.lastname}`,
        }));
        setUsers(transformedUsers);
        console.log(response);
      } catch (error) {
        console.error("Error fetching assigned users:", error);
      }
    };
    fetchUsers();
  }, []);

  const navigate = useNavigate()

  const handleSelectChange = (selectedOptions) => {
    const selectedIds = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setFormData({ ...formData, user_ids: selectedIds });
  };

  const handleCreateBroadCast = async () => {
    if(formData.notice_title === "" || formData.expiry_date === ""){
     return toast.error("Please Enter Title & Expiry Date")
    }
    try {
      toast.loading("Creating Broadcast Please Wait!");
      const formDataSend = new FormData();

      formDataSend.append("notice[site_id", formData.site_id);
      formDataSend.append("notice[notice_title]", formData.notice_title);
      formDataSend.append(
        "notice[notice_discription]",
        formData.notice_discription
      );
      formDataSend.append("notice[expiry_date]", formData.expiry_date);

      formData.user_ids.forEach((user_id) => {
        formDataSend.append("notice[user_ids][]", user_id);
      });
      formData.notice_image.forEach((file) => {
        formDataSend.append("notice[notice_image][]", file);
      });

      const response = await postBroadCast(formDataSend);
      toast.success("Broadcast Created Successfully");
      navigate("/communication")
      console.log("Response:", response.data);
      toast.dismiss();
    } catch (error) {
      console.log(error);

      toast.dismiss();
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, notice_image: Array.from(e.target.files) });
  };

  return (
    <section>
      <div className="m-2">
        <h2
          style={{ background: themeColor }}
          className="text-center text-xl font-bold p-2  rounded-full text-white"
        >
          Create Broadcast
        </h2>
        <div className="mx-20 my-5 mb-10 border  p-5 px-10 rounded-lg shadow-xl">
          <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
            Communication Info
          </h2>
          <div className="flex flex-col gap-4 mx-20">
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Title :
              </label>
              <input
                type="text"
                name="notice_title"
                value={formData.notice_title}
                onChange={handleChange}
                placeholder="Enter Title"
                id=""
                className="border px-2 p-1 rounded-md border-gray-400 placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Description :
              </label>
              <textarea
                name="notice_discription"
                value={formData.notice_discription}
                onChange={handleChange}
                id=""
                placeholder="Enter Description"
                rows="3"
                className="border px-2 p-1 rounded-md border-gray-400 placeholder:text-sm"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="" id="imp" />
                <label htmlFor="imp">Mark as Important</label>
              </div>
              <div className="flex flex-col">
                <p className="font-medium">Expire On</p>
                <ReactDatePicker
                  selected={formData.expiry_date}
                  onChange={handleExpiryDateChange}
                  showTimeSelect
                  dateFormat="dd/MM/yyyy h:mm aa"
                  placeholderText="Select Date & Time"
                  ref={datePickerRef}
                  minDate={currentDate}
                  className="border border-black p-1 rounded-md"
                />
              </div>
            </div>

            <div className="my-5">
              <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
                Attachments
              </h2>
              {/* <FileInputBox handleChange={handleFileChange}  /> */}
              {/* <input
                  id={`file-upload-${formData.notice_title}`}
                  type="file"
                  // className="hidden"
                  multiple
                  onChange={handleFileChange}
                /> */}
                <FileInputBox />
            </div>
            <div className="">
              <h2 className="border-b t border-black my-5 text-lg font-semibold">
                Share With
              </h2>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row gap-2 w-full font-semibold p-2 ">
                  <h2
                    className={`p-1 ${
                      share === "all" && "bg-black text-white"
                    } rounded-full px-6 cursor-pointer border-2 border-black`}
                    onClick={() => setShare("all")}
                  >
                    All
                  </h2>
                  <h2
                    className={`p-1 ${
                      share === "individual" && "bg-black text-white"
                    } rounded-full px-4 cursor-pointer border-2 border-black`}
                    onClick={() => setShare("individual")}
                  >
                    Individuals
                  </h2>
                  {/* <h2
                    className={`p-1 ${
                      share === "groups" && "bg-black text-white"
                    } rounded-full px-4 cursor-pointer border-2 border-black`}
                    onClick={() => setShare("groups")}
                  >
                    Groups
                  </h2> */}
                </div>
                <div className="my-5 flex w-full">
                  {share === "individual" && (
                    // <Select
                    //   options={users}
                    //   placeholder="Select User"
                    //   value={formData.user_ids}

                    //   onChange={(selectedOption) =>
                    //     setFormData({ ...formData, user_ids: selectedOption })
                    //   }
                    //   isMulti
                    //   className="w-full"
                    // />
                    <Select
                      options={users}
                      placeholder="Select User"
                      value={users.filter((user) =>
                        formData.user_ids.includes(user.value)
                      )}
                      onChange={handleSelectChange}
                      isMulti
                      className="w-full"
                    />
                  )}
                  {share === "groups" && <p>list of groups</p>}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10 my-5">
              <button
                onClick={handleCreateBroadCast}
                className="bg-black text-white p-2 rounded-md hover:bg-white hover:text-black hover:border-2 border-black"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBroadcast;
