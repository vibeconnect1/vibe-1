import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getTicketDashboard } from "../api";
import { useSelector } from "react-redux";

const TicketHighCharts = () => {
  const [categoryData, setCategoryData] = useState({});
  const [statusData, setStatusData] = useState({});
  const [ticketTypes, setTicketTypes] = useState({});
  const[floorTickets, setFloorTickets] = useState({})
  const[unitTickets, setUnitTickets] = useState({})
  const themeColor = useSelector((state) => state.theme.color);
  useEffect(() => {
    const fetchTicketInfo = async () => {
      try {
        const ticketInfoResp = await getTicketDashboard();
        setStatusData(ticketInfoResp.data.by_status);
        setCategoryData(ticketInfoResp.data.by_category);
       
        setTicketTypes(ticketInfoResp.data.by_type);
        setFloorTickets(ticketInfoResp.data.by_floor);
        setUnitTickets(ticketInfoResp.data.by_unit);
      } catch (error) {
        console.log("Error fetching ticket info:", error);
      }
    };

    fetchTicketInfo();
  }, []);

  const generatePieChartOptions = (title, data) => {
    return {
      chart: {
        type: "pie",
        borderRadius: 30,
      },
      title: {
        text: title,
      },
      series: [
        {
          name: title,
          colorByPoint: true,
          data: Object.keys(data).map((key) => ({
            name: key,
            y: data[key],
          })),
        },
      ],
    };
  };

  const generateBarChartOptions = (title, data) => {
    return {
      chart: {
        type: "bar",
        borderRadius: 30,
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: Object.keys(data),
        title: {
          text: null,
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Count",
          align: "high",
        },
        labels: {
          overflow: "justify",
        },
      },
      series: [
        {
          name: title,
          data: Object.values(data),
          color: themeColor,
        },
      ],
    };
  };

  const generateColumnChartOptions = (title, data) => {
    const ticketTypes = Object.keys(data);

    return {
      chart: {
        type: "column",
        borderRadius: 30,
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: ticketTypes,
        title: {
          text: "Ticket Types",
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Count",
        },
      },
      series: [
        {
          name: "Tickets",
          data: ticketTypes.map((type) => data[type]),
          color: themeColor,
        },
      ],
    };
  };
  const generateFloorColumnChartOptions = (title, data) => {
    const floorTickets = Object.keys(data);

    return {
      chart: {
        type: "column",
        borderRadius: 30,
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: floorTickets,
        title: {
          text: " Floors",
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Count",
        },
      },
      series: [
        {
          name: "Tickets By Floor",
          data: floorTickets.map((type) => data[type]),
          color: themeColor,
        },
      ],
    };
  };
  const generateUnitColumnChartOptions = (title, data) => {
    const unitTickets = Object.keys(data);

    return {
      chart: {
        type: "column",
        borderRadius: 30,
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: unitTickets,
        title: {
          text: " Units",
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Count",
        },
      },
      series: [
        {
          name: "Tickets by Units",
          data: unitTickets.map((type) => data[type]),
          color: themeColor,
        },
      ],
    };
  };
  return (
    <div>

    <div className="grid grid-cols-2 mr-2 gap-2">
      <div className=" shadow-custom-all-sides rounded-md">
        <HighchartsReact
          highcharts={Highcharts}
          options={generatePieChartOptions("Tickets by Status", statusData)}
          />
      </div>

      <div className="bg-white shadow-custom-all-sides rounded-md">
        <HighchartsReact
          highcharts={Highcharts}
          options={generateBarChartOptions("Tickets by Category", categoryData)}
        />
      </div>
      <div className="bg-white shadow-custom-all-sides rounded-md">
        <HighchartsReact
          highcharts={Highcharts}
          options={generateColumnChartOptions("Tickets by Type", ticketTypes)}
          />
      </div>
      <div className="bg-white shadow-custom-all-sides rounded-md">
        <HighchartsReact
          highcharts={Highcharts}
          options={generateFloorColumnChartOptions("Tickets by Floor", floorTickets)}
          />
      </div>
    </div>
      <div className="bg-white shadow-custom-all-sides rounded-md my-2 mr-2">
        <HighchartsReact
          highcharts={Highcharts}
          options={generateUnitColumnChartOptions("Tickets by Unit", unitTickets)}
        />
      </div>
          </div>
  );
};

export default TicketHighCharts;
