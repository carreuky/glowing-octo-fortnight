// SparklineGraph.jsx
import React from 'react';
import Chart from 'react-apexcharts';

const Sparkline = ({ data, days, lineColor = "#09275e", markerColor = "#09275e", height = 200 ,fillColor='red' }) => {
  const options = {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'straight',
      // straight,stepline
      colors: [lineColor]
    },
    markers: {
      size: 5,
      colors: [markerColor],
      hover: {
        size: 7
      }
    },
   
    xaxis: {
      categories: days,
      labels: {
        show: true
      }
    },
    tooltip: {
      enabled: true
    }
  };

  const series = [
    {
      name: 'Sales',
      data: data
    }
  ];

  return (
    <div className="    space-y-1 border border-color2 p-2">
      Last 14 Days
      <Chart options={options} series={series} type="line" height={height} />
    </div>
  );
};

export default Sparkline;
