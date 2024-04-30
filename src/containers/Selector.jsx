import React from "react";

const Selector = ({
  selectedOption,
  handleOptionChange,
  heading,
  subHeading,
  options,
}) => {
  return (
    <div>
      <label
        htmlFor="options"
        className="block text-sm font-medium text-gray-700"
      >
        {heading}
      </label>
      <select
        id="options"
        className="mt-1 border w-48 block  pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">{subHeading}</option>
        {options.map((item, index) => {
          return <option key={index} value={item}>{item}</option>;
        })}
        {/* <option value="option2">Option 2</option>
        <option value="option3">Option 3</option> */}
      </select>
      {/* {selectedOption && (
        <p className="mt-2 text-sm text-gray-500">
          Selected option: {selectedOption}
        </p>
      )} */}
    </div>
  );
};

export default Selector;
