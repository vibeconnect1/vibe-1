import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import Select from "react-select";
// import { FaRegCalendarAlt, } from "react-icons/fa";
// import { FormattedDateToShowProperly } from '../../../utils/employee/dateUtils';
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
const CustomBoardCreate = ({
  closeProjectModal,

  boardName,
  setBoardName,
  isSecondInputVisible,
  handleChangeSelect,
  emails,
  handleChangeSelectOutsider,
  emailsOutsider,
  handleFirstInputClick,
  isButtonDisabled,
  todayDate,
  dueDate,
  setDueDate,
  handleDueDateChange,
  createBoard,
}) => {
  const themeColor = useSelector((state) => state.theme.color);
  const modalStyleProjectName = {
    content: {
      background: themeColor,
      borderRadius: 10,
      overflowY: "auto",
      scrollbarWidth: "thin",
      scrollbarColor: "#888 #ddd",
      msOverflowStyle: "none",
      "&::-webkit-scrollbar": {
        width: "1px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#888",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#aaa",
      },
    },
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50 p-10">
      <div
        style={{ background: themeColor }}
        className="md:w-auto w-full p-4 md:px-10 flex flex-col rounded-md overflow-auto max-h-[100%] hide-scrollbar"
      >
        <button
          className="place-self-end p-1 rounded-full bg-white"
          onClick={closeProjectModal}
        >
          <AiOutlineClose size={20} />
        </button>
        <div style={{ color: "#fff" }} className="">
          <div style={{ display: "flex" }}>
            {" "}
            {boardName ? (
              <h4> {boardName}</h4>
            ) : (
              <h4 className="font-medium text-lg">New board name</h4>
            )}
          </div>
          <div className="">
            <input
              spellCheck="true"
              placeholder="Add Board Name"
              style={{
                color: "white",
                fontSize: 30,
                width: "100%",
                border: "none",
              }}
              className="bg-transparent  outline-none "
              onClick={handleFirstInputClick}
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
            />
            <div className="flex flex-col gap-1 my-2">
              <h2 className="font-medium">Set Project Timeline : </h2>
              <input
                min={todayDate}
                type="date"
                style={{ borderRadius: 4 }}
                value={dueDate}
                onChange={handleDueDateChange}
                className="text-black p-1 outline-none"
              />
            </div>
            {isSecondInputVisible && (
              <Select
                isMulti
                onChange={handleChangeSelect}
                options={emails}
                className="searchInput mt-4 mb-2"
                placeholder="Add people by email"
                noOptionsMessage={() => "Email not avaliable..."}
                maxMenuHeight={120}
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
                  option: (baseStyles) => ({
                    ...baseStyles,
                    color: "black",
                  }),
                  multiValueRemove: (baseStyles, state) => ({
                    ...baseStyles,
                    color: state.isFocused ? "red" : "gray",
                    backgroundColor: state.isFocused ? "black" : "lightgreen",
                  }),
                }}
              />
            )}
            {isSecondInputVisible && (
              <>
                <span className="">Outsider Access :</span>
                <Select
                  isMulti
                  onChange={handleChangeSelectOutsider}
                  options={emailsOutsider}
                  className="searchInput mt-2"
                  placeholder="Add Outsider people by email"
                  noOptionsMessage={() => "Email not avaliable..."}
                  maxMenuHeight={120}
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
                    option: (baseStyles) => ({
                      ...baseStyles,
                      color: "black",
                    }),
                    multiValueRemove: (baseStyles, state) => ({
                      ...baseStyles,
                      color: state.isFocused ? "red" : "gray",
                      backgroundColor: state.isFocused ? "black" : "lightgreen",
                    }),
                  }}
                />
              </>
            )}
          </div>

          <div className="flex justify-center w-full my-4">
            <button
              className="w-full p-1 shadow-custom-all-sides rounded-md font-medium bg-black bg-opacity-30"
              onClick={createBoard}
              disabled={isButtonDisabled}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBoardCreate;
