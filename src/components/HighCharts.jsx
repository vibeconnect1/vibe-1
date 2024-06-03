// HighchartsComponent.jsx
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighchartsComponent = () => {
  const options = {
    title: {
      text: 'My chart'
    },
    series: [
      {
        name: 'My data',
        data: [1, 2, 3, 4, 8]
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options}  />;
};

export default HighchartsComponent;
