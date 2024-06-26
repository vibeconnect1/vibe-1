import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getTicketDashboard } from "../api";
import { useSelector } from "react-redux";
import { CirclesWithBar, DNA, ThreeDots } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const TicketHighCharts = () => {
  const [categoryData, setCategoryData] = useState({});
  const [statusData, setStatusData] = useState({});
  const [ticketTypes, setTicketTypes] = useState({});
  const [floorTickets, setFloorTickets] = useState({});
  const [unitTickets, setUnitTickets] = useState({});
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

  const sortData = (data, order = "ascending") => {
    const sortedEntries = Object.entries(data).sort(([, a], [, b]) => 
      order === "ascending" ? b - a : a - b 
    );
    return Object.fromEntries(sortedEntries);
  };

  

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

  // const generateBarChartOptions = (title, data,order) => {
  //   const sortedData = sortData(data, order);
  //   return {
  //     chart: {
  //       type: "bar",
  //       borderRadius: 30,
  //     },
  //     title: {
  //       text: title,
  //     },
  //     xAxis: {
  //       categories: Object.keys(sortedData),
  //       // categories: Object.keys(data),
  //       title: {
  //         text: null,
  //       },
  //     },
  //     yAxis: {
  //       min: 0,
  //       title: {
  //         text: "Tickets",
  //         // align: "high",
  //       },
  //       labels: {
  //         overflow: "justify",
  //       },
  //     },
  //     series: [
  //       {
  //         name: title,
  //         data: Object.values(sortedData),
  //         color: themeColor,
  //       },
  //     ],
  //   };
  // };

  const generateBarChartOptions = (title, data, order) => {
    const sortedData = sortData(data, order);
    
    return {
      chart: {
        type: "bar",
        borderRadius: 30,
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: Object.keys(sortedData),
        title: {
          text: null,
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Tickets",
        },
        labels: {
          overflow: "justify",
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
            formatter: function() {
              return this.y; // Display the y value (data value) on the bar
            },
            style: {
              textOutline: false // Remove text outline (optional)
            }
          }
        }
      },
      series: [
        {
          name: title,
          data: Object.values(sortedData),
          color: themeColor,
        },
      ],
    };
  };

  const generateColumnChartOptions = (title, data,order="ascending") => {
    const sortedData = sortData(data, order);
    const TicketsType = Object.keys(sortedData);
    const ticketValues = Object.values(sortedData);

    return {
      chart: {
        type: "column",
        borderRadius: 30,
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: TicketsType,
        title: {
          text: "Ticket Types",
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Tickets",
        },
      },
      series: [
        {
          name: "Tickets",
          data: ticketValues,
          color: themeColor,
        },
      ],
    };
  };
  const generateFloorColumnChartOptions = (title, data, order = "ascending") => {
    const sortedData = sortData(data, order);
    const floorTickets = Object.keys(sortedData);
    const ticketValues = Object.values(sortedData);
  
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
          text: "Floors",
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Tickets",
        },
      },
      series: [
        {
          name: "Tickets By Floor",
          data: ticketValues,
          color: themeColor,
        },
      ],
    };
  };
  const generateUnitColumnChartOptions = (title, data, order = "ascending") => {
    const sortedData = sortData(data, order);
    const unitTickets = Object.keys(sortedData);
    const ticketValues = Object.values(sortedData);

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
          text: "Tickets",
        },
      },
      series: [
        {
          name: "Tickets by Units",
          data: ticketValues,
          color: themeColor,
        },
      ],
    };
  };
  return (
    <div>
      <div className="grid md:grid-cols-2 mr-2  gap-2">
        <div className=" shadow-custom-all-sides rounded-md">
          {statusData ? (
            <HighchartsReact
              highcharts={Highcharts}
              options={generatePieChartOptions("Tickets by Status", statusData)}
            />
          ) : (
            <div className="flex justify-center items-center h-full">
              <DNA
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
          )}
        </div>

        <div className="bg-white shadow-custom-all-sides rounded-md">
          {categoryData ? (
            <HighchartsReact
              highcharts={Highcharts}
              options={generateBarChartOptions(
                "Tickets by Category",
                categoryData,
              )}
              order="descending"
            />
          ) : (
            <div className="flex justify-center items-center h-full">
              <DNA
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
          )}
        </div>
        <div className="bg-white shadow-custom-all-sides rounded-md">
          {ticketTypes ? <HighchartsReact
            highcharts={Highcharts}
            options={generateColumnChartOptions("Tickets by Type", ticketTypes)}
              order="ascending"

          /> : (
            <div className="flex justify-center items-center h-full">
              <DNA
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
          )}
        </div>
        <div className="bg-white shadow-custom-all-sides rounded-md">

          {floorTickets ? <HighchartsReact
            highcharts={Highcharts}
            options={generateFloorColumnChartOptions(
              "Tickets by Floor",
              floorTickets
            )}
          
          />: (
            <div className="flex justify-center items-center h-full">
              <DNA
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
          )}
        </div>
      </div>
      <div className="bg-white shadow-custom-all-sides rounded-md my-2 mr-2">
       {unitTickets ? <HighchartsReact
          highcharts={Highcharts}
          options={generateUnitColumnChartOptions(
            "Tickets by Unit",
            unitTickets
          )}
        />: (
          <div className="flex justify-center items-center h-full">
            <DNA
              visible={true}
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketHighCharts;
