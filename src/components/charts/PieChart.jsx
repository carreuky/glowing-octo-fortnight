// PieChart.jsx
import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const options = {
    chart: {
      type: "pie",
      height: 350,
    },
    labels: ["Oraimo", "KGas", "Mwanga", "Grill", "Burner"],
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

  const series = [44, 55, 13, 43, 22]; // Replace with actual data

  return (
    <div className="flex flex-col items-center align-center shadow-md">
      <h1 className="text-center">Top Selling Products.</h1>
      <Chart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default PieChart;
