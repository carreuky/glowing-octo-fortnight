// PieChart.jsx
import React from "react";
import Chart from "react-apexcharts";
import salesData from "../../api/SalesData";


const PieChart = () => {

  const productCount = salesData.reduce((acc, item) => {
    acc[item.name] = (acc[item.name] || 0) + 1;
    return acc;
}, {});

// Sort products by their frequency and select top 5
const top5Recurring = Object.entries(productCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({ name, count }));

const names = top5Recurring.map((item)=>item.name)
const count = top5Recurring.map((item)=>item.count)
// console.log(names , count)
  const options = {
    chart: {
      type: "pie",
      height: 350,
    },
    labels: names,
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  // console.log(top5Recurring)


  return (
    <div className="flex flex-col items-center align-center shadow-md">
      <h1 className="text-center">Top Selling Products.</h1>
      <Chart options={options} series={count} type="pie" height={350} />
    </div>
  );
};

export default PieChart;
