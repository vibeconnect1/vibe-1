import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { getItemInLocalStorage } from "../../utils/localStorage";
import { postChecklist } from "../../api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AddChecklist = () => {
  const today = new Date().toISOString().split("T")[0];
  const toDay = new Date();
  const year = toDay.getFullYear();
  const month = String(toDay.getMonth() + 1).padStart(2, "0");
  const day = String(toDay.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("");
  const [startDate, setStartDate] = useState(formattedDate);
  const [endDate, setEndDate] = useState(formattedDate);
  const [addNewQuestion, setAddNewQuestion] = useState([
    { name: "", type: "", options: ["", "", "", ""] },
  ]);
  const handleAddQuestionFields = () => {
    setAddNewQuestion([
      ...addNewQuestion,
      { name: "", type: "", options: ["", "", "", ""] },
    ]);
  };

  const handleRemoveQuestionFields = (index) => {
    const newFields = [...addNewQuestion];
    newFields.splice(index, 1);
    setAddNewQuestion(newFields);
  };
  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...addNewQuestion];
    if (field === "name" || field === "type") {
      newQuestions[index][field] = value;
    } else {
      newQuestions[index].options[field] = value;
    }
    setAddNewQuestion(newQuestions);
  };

  const siteId = getItemInLocalStorage("SITEID");
  const userId = getItemInLocalStorage("UserId");
const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      checklist: {
        site_id: siteId,
        occurs: "",
        name: name,
        start_date: startDate,
        end_date: endDate,
        user_id: userId,
        ctype: "routine",
        },
      frequency: frequency,
      question: addNewQuestion.map((q) => ({
        name: q.name,
        type: q.type,
        option1: q.options[0],
        option2: q.options[1],
        option3: q.options[2],
        option4: q.options[3],
      })),
    };
    console.log(data);

    try {
      const response = await postChecklist(data);
      console.log(response);
      //   if (response.ok) {
      //     console.log("Checklist saved successfully!");
      //   } else {
      //     console.error("Error saving checklist");
      //   }
      navigate("/assets/checklist")
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const themeColor = useSelector((state)=> state.theme.color)
  return (
    <section>
      <div className="m-2">
        <h2 style={{background: themeColor}} className="text-center text-xl font-bold p-2  rounded-full text-white">
          Add Checklist
        </h2>
        <div className="md:mx-20 my-5 mb-10 sm:border border-gray-400 p-5 px-10 rounded-lg sm:shadow-xl">
          <div className="flex  flex-col justify-around">
            <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-2 w-full">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Name :
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                    placeholder="Enter Checklist Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Frequency :
                </label>
                <select
                    name="frequency"
                    id="frequency"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                  >
                    <option value="">Select Frequency</option>
                    <option value="One time">One Time</option>
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="half yearly">Half yearly</option>
                    <option value="yearly">Yearly</option>
                  </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Start Date :
                </label>
                <input
                    type="date"
                    name="start_date"
                    id="start_date"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    min={today}
                  />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  End Date :
                </label>
                <input
                    type="date"
                    name="end_date"
                    id="end_date"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={today}
                  />
              </div>
            </div>
            <div>
              {addNewQuestion.map((data, i) => (
                <div key={i}>
                  <div className="my-5">
                    <h2 className="border-b-2 border-black text font-medium">
                      Add New Question
                    </h2>
                    <div className="my-2 grid gap-4">
                    <input
                          type="text"
                          name={`question_${i}`}
                          id={`question_${i}`}
                          className="border p-1 px-4 border-gray-500 rounded-md"
                          placeholder="Add New Question"
                          value={data.name}
                          onChange={(e) =>
                            handleQuestionChange(i, "name", e.target.value)
                          }
                        />
                    </div>
                    <div className="my-2">
                    <select
                          name={`type_${i}`}
                          id={`type_${i}`}
                          value={data.type}
                          onChange={(e) =>
                            handleQuestionChange(i, "type", e.target.value)
                          }
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        >
                          <option value="">Select Answer Type</option>
                          <option value="multiple">
                            Multiple Choice Question
                          </option>
                          <option value="inbox">Input box</option>
                          <option value="description">Description box</option>
                        </select>
                        {data.type === "multiple" && (
                          <div className="grid grid-cols-4 gap-4 my-2">
                            <input
                              type="text"
                              name={`option1_${i}`}
                              id={`option1_${i}`}
                              className="border p-1 px-4 border-gray-500 rounded-md"
                              placeholder="option 1"
                              value={data.options[0]}
                              onChange={(e) =>
                                handleQuestionChange(i, 0, e.target.value)
                              }
                            />
                            <input
                              type="text"
                              name={`option2_${i}`}
                              id={`option2_${i}`}
                              className="border p-1 px-4 border-gray-500 rounded-md"
                              placeholder="option 2"
                              value={data.options[1]}
                              onChange={(e) =>
                                handleQuestionChange(i, 1, e.target.value)
                              }
                            />
                            <input
                              type="text"
                              name={`option3_${i}`}
                              id={`option3_${i}`}
                              className="border p-1 px-4 border-gray-500 rounded-md"
                              placeholder="option 3"
                              value={data.options[2]}
                              onChange={(e) =>
                                handleQuestionChange(i, 2, e.target.value)
                              }
                            />
                            <input
                              type="text"
                              name={`option4_${i}`}
                              id={`option4_${i}`}
                              className="border p-1 px-4 border-gray-500 rounded-md"
                              placeholder="option 4"
                              value={data.options[3]}
                              onChange={(e) =>
                                handleQuestionChange(i, 3, e.target.value)
                              }
                            />
                          </div>
                        )}
                    </div>
                    <div className="flex justify-end gap-2">
                    <button
                          className="p-1 border-2 border-red-500 text-white hover:bg-white hover:text-red-500 bg-red-500 px-4 transition-all duration-300 rounded-md "
                          onClick={() => handleRemoveQuestionFields(i)}
                        >
                          <IoClose />
                        </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                  type="button"
                  className="p-1 border-2 border-black px-4 rounded-md my-2 flex gap-2 items-center"
                  onClick={() => handleAddQuestionFields()}
                >
                  <BiPlus />
                  Add Question
                </button>
            </div>
            <div className="flex justify-center">
              <button onClick={handleSubmit} className="bg-black text-white p-2 px-4 rounded-md font-medium">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddChecklist;
