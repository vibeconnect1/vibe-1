// HighchartsComponent.jsx
import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Drilldown from "highcharts/modules/drilldown";
import { useSelector } from "react-redux";

// 'line','column','pie','area','scatter','spline',bar
Drilldown(Highcharts);
const HighchartsComponent = () => {
  const themeColor = useSelector((state)=> state.theme.color)
  const options = {
    chart: {
      type: "column", // Change this to 'pie'
    },
    title: {
      text: "Ticket Distribution by Month",
    },
    // xAxis: {
    //   categories: [
    //     'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    //   ],
    //   title: {
    //     text: 'Months'
    //   }
    // },
    series: [
      {
        name: "Tickets Raised",
        color: themeColor,
        data: [
          { name: "January", y: 1, drilldown: "january" },
          { name: "February", y: 20, drilldown: "february" },
          { name: "March", y: 30, drilldown: "march" },
          { name: "April", y: 4, drilldown: "april" },
          { name: "May", y: 5, drilldown: "may" },
          { name: "June", y: 6, drilldown: "june" },
          { name: "July", y: 7, drilldown: "july" },
          { name: "August", y: 8, drilldown: "august" },
          { name: "September", y: 9, drilldown: "september" },
          { name: "October", y: 2, drilldown: "october" },
          { name: "November", y: 15, drilldown: "november" },
          { name: "December", y: 25, drilldown: "december" },
        ],
      },
    ],
    drilldown: {
      series: [
        {
          id: "january",
          name: "January",
          data: [
            ["2024-01-01", 1],
            ["2024-01-02", 2],
            ["2024-01-03", 1],
            // Add more daily data for January
          ],
        },
        {
          id: "february",
          name: "February",
          data: [
            ["2024-02-01", 5],
            ["2024-02-02", 15],
            // Add more daily data for February
          ],
        },
        {
          id: "march",
          name: "March",
          data: [
            ["2024-03-01", 10],
            ["2024-03-02", 20],
            // Add more daily data for March
          ],
        },
        // Add more series for other months as needed
      ],
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartsComponent;
