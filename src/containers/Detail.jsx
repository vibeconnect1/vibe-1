import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = ({ heading, details }) => {
  
  

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-center w-screen bg-black text-white font-semibold text-lg p-2 px-4 ">
        {heading}
      </h2>
      <div className="grid grid-cols-3 gap-5 gap-x-40">
        {details.map((item, index) => (
          <dl className="flex gap-4" key={index}>
            <dt className="font-semibold">{item.title}</dt>
            <dd>{item.description}</dd>
          </dl>
        ))}
        {/* {detailData.details.map((item, index) => (
          <dl className="flex gap-4" key={index}>
            <dt className="font-semibold">{item.title}</dt>
            <dd>{item.description}</dd>
          </dl>
        ))} */}
      </div>
    </div>
  );
};

export default Detail;
