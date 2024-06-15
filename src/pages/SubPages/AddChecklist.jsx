import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const AddChecklist = () => {
  const [addNewQuestion, setAddNewQuestion] = useState([{}]);
  const [answerType, setAnswerType] = useState("");
  const handleAddQuestionFields = () => {
    setAddNewQuestion([...addNewQuestion, {}]);
  };
  const handleRemoveQuestionFields = (index) => {
    const newFields = [...addNewQuestion];
    newFields.splice(index, 1);
    setAddNewQuestion(newFields);
  };
  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
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
                  name=""
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                  placeholder="Enter Checklist Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Frequency :
                </label>
                <select
                  name=""
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
                >
                  <option value="">Select Frequency</option>
                  <option value="">One Time</option>
                  <option value="">Hourly</option>
                  <option value="">Daily</option>
                  <option value="">Weekely</option>
                  <option value="">Monthly</option>
                  <option value="">Quarterly</option>
                  <option value="">Half yearly</option>
                  <option value="">Yearly</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Start Date :
                </label>
                <input
                  type="date"
                  name=""
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
                  name=""
                  id=""
                  className="border p-1 px-4 border-gray-500 rounded-md"
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
                        name=""
                        id=""
                        className="border p-1 px-4 border-gray-500 rounded-md"
                        placeholder="Add New Question"
                      />
                    </div>
                    <div className="my-2">
                      <select
                        name=""
                        id=""
                        value={answerType}
                        onChange={(e) => setAnswerType(e.target.value)}
                        className="border p-1 px-4 border-gray-500 rounded-md"
                      >
                        <option value="">Select Answer Type</option>
                        <option value="multiple">
                          Multiple Choice Question
                        </option>
                        <option value="inbox">Inbox</option>
                        <option value="description">Description box</option>
                      </select>
                      {answerType === "multiple" && (
                        <div className="grid grid-cols-4 gap-4 my-2">
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
                    <div className="flex justify-end gap-2">
                      <button
                        className="p-1 border-2 border-red-500 text-white hover:bg-white hover:text-red-500 bg-red-500 px-4 transition-all duration-300 rounded-md "
                          onClick={() => handleRemoveQuestionFields()}
                      >
                        <IoClose />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                className="p-1 border-2 border-black px-4 rounded-md my-2 flex gap-2 items-center"
                onClick={() => handleAddQuestionFields()}
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

export default AddChecklist;
