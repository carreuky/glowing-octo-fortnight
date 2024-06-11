// BarChart.jsx
import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '100%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: [
        '1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug', '10 Aug',
        '11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug',
        '21 Aug', '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug', '29 Aug', '30 Aug', '31 Aug'
      ]
    },
    yaxis: {
      title: {
        text: 'Amount'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `Ksh ${val}`;
        }
      }
    }
  };

  const series = [
    {
      name: 'Sales',
      data: [
      
        125, 45, 240, 60, 210, 320, 50, 165, 290, 140, 310, 260, 49, 180, 70, 91, 230, 330, 30, 370, 220, 50, 195, 250, 40, 270, 280, 360, 350, 300, 155
            ]
    },
    {
      name: 'Profits',
      data: [
        95, 135, 45, 105, 24, 80, 195, 10, 165, 175, 150, 115, 200, 60, 15, 140, 35, 25, 205, 170, 20, 185, 145, 90, 180, 120, 130, 55, 110, 190, 155
    ]
    },
    {
      name: 'Purchases',
      data: [
        125, 85, 40, 190, 195, 145, 35, 165, 135, 170, 20, 155, 25, 75, 50, 180, 200, 95, 65, 30, 140, 130, 120, 105, 110, 160, 55, 185, 175, 150, 180
         ]
    }
  ];

  return (
    <div className='text-center shadow-md'>
        <h1>Sales, Profit and Purchases last 31 days.</h1>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
