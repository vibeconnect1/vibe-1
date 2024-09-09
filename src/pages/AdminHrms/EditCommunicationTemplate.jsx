import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrHelpBook } from "react-icons/gr";
import WorkflowDetailsList from "./WorkFlowDetailsList";

const EditCommunicationTemplate = () => {
  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  const [formData, setFormData] = useState({
    tempName: "",
    modes: "",
    subject: "",
    from: "",
    to: "",
    subject: "",
    cc: "",
    content: "",
    attachmentUrl: "",
    mobileNo: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  return (
    <section className="flex ml-20">
      <WorkflowDetailsList />
      <div className=" w-2/3 flex m-3 flex-col overflow-hidden">
        <h1 className="font-bold mb-4 text-lg">Add Communication Template</h1>
        <div className="grid md:grid-cols-2 gap-2">
          <div className="grid gap-2 items-center w-full">
            <label htmlFor="" className="font-semibold">
              Template Name:
            </label>
            <input
              type="text"
              className="border border-gray-400 p-2 rounded-md"
              placeholder="Happy Birthday Email"
              value={formData.tempName}
              name="tempName"
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2 items-center w-full">
            <label htmlFor="" className="font-semibold">
              Medium of Communication:
            </label>
            <select
              value={formData.modes}
              name="modes"
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded-md"
            >
              <option value="">Select Mode</option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
            </select>
          </div>
          {formData.modes === "email" ? (
            <>
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="" className="font-semibold">
                  From:
                </label>
                <input
                  type="email"
                  className="border border-gray-400 p-2 rounded-md"
                  placeholder="From email"
                  value={formData.from}
                  name="from"
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="" className="font-semibold">
                  To:
                </label>
                <input
                  type="email"
                  className="border border-gray-400 p-2 rounded-md"
                  placeholder="To email"
                  value={formData.to}
                  name="to"
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="" className="font-semibold">
                  Subject:
                </label>
                <input
                  type="text"
                  className="border border-gray-400 p-2 rounded-md"
                  placeholder="Enter subject"
                  value={formData.subject}
                  name="subject"
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="" className="font-semibold">
                  CC:
                </label>
                <input
                  type="email"
                  className="border border-gray-400 p-2 rounded-md"
                  placeholder="Enter CC"
                  value={formData.cc}
                  name="cc"
                  onChange={handleChange}
                />
              </div>
            </>
          ) : formData.modes === "sms" ? (
            <div className="grid">
              <label htmlFor="" className="font-semibold">
                Mobile No.:
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Enter Mobile no."
                value={formData.mobileNo}
                pattern="[0-9]*"
                onKeyDown={(e) => {
                  if (
                    !/[0-9]/.test(e.key) &&
                    e.key !== "Backspace" &&
                    e.key !== "ArrowLeft" &&
                    e.key !== "ArrowRight"
                  ) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="grid gap-2 items-center w-full my-2">
          <label htmlFor="" className="font-semibold">
            Content:
          </label>
          <textarea
            type="number"
            id=""
            className="border border-gray-400 p-2 rounded-md"
            placeholder="Enter content"
          />
        </div>
        <div className="grid gap-2 items-center w-full">
          <label htmlFor="" className="font-semibold">
            Add Attachment::
          </label>
          <input
            type="file"
            id=""
            className="border border-gray-400 p-2 rounded-md"
            placeholder="Happy Birthday Email"
          />
        </div>
        <div className="flex gap-5 justify-center items-center my-4">
          <Link
            to={"/admin/communication-template"}
            className="bg-red-400 text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-green-400 text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
      <div className="my-4 mx-2 w-fit">
        <div className="flex flex-col mt-4 mr-2 bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
          <div className="flex  gap-4 font-medium">
            <GrHelpBook size={20} />
            <h2>Help Center</h2>
          </div>
          <div className=" ">
            <ul style={listItemStyle} className="flex flex-col gap-2">
              <li>
                <ul style={listItemStyle}>
                  <li>
                    Communication triggers can be used to send occasional emails
                    automatically on employee-specific events like Birthdays,
                    anniversaries, etc. and date-specific events like festivals,
                    holidays, annual meet-up notice, etc.{" "}
                  </li>
                </ul>
              </li>
              <li>
                <ul style={listItemStyle}>
                  <li>
                    The workflow will consist of a step-by-step process that
                    involves creating email templates, mapping custom 'from'
                    email ID, creating a workflow as to when the email will
                    trigger and to which recipients.{" "}
                  </li>
                </ul>
              </li>
              <li>
                <ul style={listItemStyle}>
                  <li>
                    You can configure from "email ID" (@companydomain.com) to
                    send the email communications. For e.g., your HR email or
                    your admin email.{" "}
                  </li>
                </ul>
              </li>

              <li>
                <p>
                  You can create custom communication templates along with
                  custom content, insert image of your choice and add dynamic
                  fields. This template will further be mapped to the Workflow
                  Trigger to send emails to recipients automatically on the date
                  of the event.{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditCommunicationTemplate;
