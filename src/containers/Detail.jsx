import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const Detail = ({ heading, details }) => {
 
 const themeColor = useSelector((state)=> state.theme.color)


  return (
    <div className="flex flex-col sm:items-center gap-8">
      <h2 style={{
        background: themeColor
      }} className="text-center w-full text-white font-semibold text-lg p-2 px-4 ">
        {heading}
      </h2>
      <div className="md:grid sm:px-2 px-4 flex flex-col grid-cols-3 gap-5 gap-x-32">
        {details.map((item, index) => (
          <dl className="grid grid-cols-2 " key={index}>
          <dt className="font-semibold text-sm">{item.title}</dt>
          <dd className="text-sm">{item.description}</dd>
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



