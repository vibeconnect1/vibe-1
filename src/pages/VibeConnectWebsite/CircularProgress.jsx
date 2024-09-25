import React from "react";

const CircularProgress = ({ percentage }) => {
  const radius = 65; // Increased radius to make the circle larger
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <div className="relative flex flex-col items-center ">
      {/* Circular Progress Bar */}
      <div className="relative w-40 h-40 flex items-center justify-center mb-4">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="white"
            strokeWidth="15"
            fill="none"
            className="opacity-20"
          />
          {/* Progress circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="white"
            strokeWidth="15"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="stroke-current text-white transition-stroke-dashoffset duration-500"
          />
        </svg>
        {/* Percentage in the center */}
        <span className="absolute text-3xl font-bold text-white">
          {percentage}%
        </span>
      </div>
      {/* Description */}
      {/* <div>
        <p className="text-center text-lg md:text-base text-white">
          of companies believe they deliver
          <br />
          they deliver a superior
          <br />
          experience
          <br />
          8% of their customers agree.
        </p>
      </div> */}
    </div>
  );
};

export default CircularProgress;
