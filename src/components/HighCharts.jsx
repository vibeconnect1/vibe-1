// HighchartsComponent.jsx
import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Drilldown from "highcharts/modules/drilldown";
import { useSelector } from "react-redux";
import HighchartsAccessibility from 'highcharts/modules/accessibility';
HighchartsAccessibility(Highcharts);

// 'line','column','pie','area','scatter','spline',bar
// Drilldown(Highcharts);
const HighchartsComponent = () => {
  const themeColor = useSelector((state)=> state.theme.color)
  const options = {
    chart: {
      type: "column", 
    },
    title: {
      text: "Ticket Distribution by Month",
    },
    xAxis: {
      categories: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ],
      title: {
        text: 'Months'
      }
    },
    series: [
      {
        name: "Tickets Raised",
        color: themeColor,
        data: [
          { name: "January", y: 1 },
          { name: "February", y: 20,  },
          { name: "March", y: 30,  },
          { name: "April", y: 4, },
          { name: "May", y: 5, },
          { name: "June", y: 6, },
          { name: "July", y: 7,  },
          { name: "August", y: 8,  },
          { name: "September", y: 9, },
          { name: "October", y: 2,  },
          { name: "November", y: 15,  },
          { name: "December", y: 25,  },
        ],
      },
    ],
   
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartsComponent;
