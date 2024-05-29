import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { getChecklistDetails } from "../../api";
import { useParams } from "react-router-dom";

const EditChecklist = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    frequency: "",
    start_date: "",
    end_date: "",
    questions: [],
  });
  console.log(formData)

  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        const checklistDetails = await getChecklistDetails(id);
        setFormData(checklistDetails.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChecklist();
  }, [id]);

  const handleAddQuestionFields = () => {
    setFormData({
      ...formData,
      questions: [...formData.questions, { name: "", qtype: "" }],
    });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index][name] = value;
    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };

  const handleChecklistChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Edit Checklist
        </h2>
        <div className="md:mx-20 my-5 mb-10 sm:border border-gray-400 p-5 px-10 rounded-lg sm:shadow-xl">
          <div className="flex flex-col justify-around">
            <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-2 w-full">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Name :
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChecklistChange}
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  placeholder="Enter Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Frequency :
                </label>
                <select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChecklistChange}
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Select Frequency</option>
                  <option value="one time">One Time</option>
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
                  value={formData.start_date}
                  onChange={handleChecklistChange}
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  End Date :
                </label>
                <input
                  type="date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleChecklistChange}
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                {/* try id once */}
              {formData.questions.map((question, index) => (
                <div key={index}>
                  <div className="my-5">
                    <h2 className="border-b-2 border-black text font-medium">
                      Question {index + 1}
                    </h2>
                    <div className="my-2 grid gap-4">
                      <input
                        type="text"
                        name="name"
                        value={question.name}
                        onChange={(e) => handleChange(e, index)}
                        id=""
                        className="border p-1 px-4 border-gray-500 rounded-md"
                        placeholder="Add New Question"
                      />
                    </div>
                    <div className="my-2">
                      <select
                        name="qtype"
                        id=""
                        value={question.qtype}
                        onChange={(e) => handleChange(e, index)}
                        className="border p-1 px-4 border-gray-500 rounded-md"
                      >
                        <option value="">Select Answer Type</option>
                        <option value="multiple">
                          Multiple Choice Question
                        </option>
                        <option value="inputbox">Input box</option>
                        <option value="description">Description box</option>
                      </select>
                      {question.qtype === "multiple" && (
                        <div className="grid md:grid-cols-4 gap-4 my-2">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="border p-1 px-4 border-gray-500 rounded-md"
                            placeholder="option 1"
                          />
                          <input
                            type="text"
                            name=""
                            id=""
                            className="border p-1 px-4 border-gray-500 rounded-md"
                            placeholder="option 2"
                          />
                          <input
                            type="text"
                            name=""
                            id=""
                            className="border p-1 px-4 border-gray-500 rounded-md"
                            placeholder="option 3"
                          />
                          <input
                            type="text"
                            name=""
                            id=""
                            className="border p-1 px-4 border-gray-500 rounded-md"
                            placeholder="option 4"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                className="p-1 border-2 border-black px-4 rounded-md my-2 flex gap-2 items-center"
                onClick={handleAddQuestionFields}
              >
                <BiPlus />
                Add Question
              </button>
            </div>
            <div className="flex justify-center">
              <button className="bg-black text-white p-2 px-4 rounded-md font-medium">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditChecklist;
