import React from "react";
import Detail from "../../../containers/Detail";
import image from "/profile.png"
const EmployeeVisitorDetails = () => {
  const visitorDetails = [
    { title: "Image  :", description: <img src={image} alt="" /> },
    { title: "Mobile Number  :", description: "1234567890" },
    { title: "Visitor Name  :", description: "ABC" },
    { title: "Additional Visitor  :", description: "Doc" },
    { title: "Coming from  :", description: "abc" },
    { title: "Vehicle Number  :", description: "76" },
    { title: "Expected Date  :", description: "27/10/2024" },
    { title: "Expected Time  :", description: "5:30 PM" },
    { title: "Purpose  :", description: "Meeting" },
  ];
  return (
    <div className="w-screen">
      <Detail heading={"Visitor Details"} details={visitorDetails} />
    </div>
  );
};


export default EmployeeVisitorDetails;



