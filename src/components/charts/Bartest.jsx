// BarChart.jsx
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import salesData from '../../api/SalesData'; // assuming salesData is in the same directory

const BarChart = () => {
  const [dateRange, setDateRange] = useState('1 month');

  const formatDate = (dateStr) => {
    const options = { month: 'short', day: '2-digit' };
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', options);
  };

  const aggregateDataByDate = (filteredData) => {
    const aggregatedData = {};

    filteredData.forEach(item => {
      if (!aggregatedData[item.sale_date]) {
        aggregatedData[item.sale_date] = {
          sales: 0,
          profits: 0,
          purchases: 0
        };
      }
      aggregatedData[item.sale_date].sales += item.total;
      aggregatedData[item.sale_date].profits += item.profit;
      aggregatedData[item.sale_date].purchases += item.buying_price * item.quantity;
    });

    const dates = Object.keys(aggregatedData).sort((a, b) => new Date(a) - new Date(b));
    const sales = dates.map(date => aggregatedData[date].sales);
    const profits = dates.map(date => aggregatedData[date].profits);
    const purchases = dates.map(date => aggregatedData[date].purchases);

    const totalSales = sales.reduce((acc, value) => acc + value, 0);
    const totalProfits = profits.reduce((acc, value) => acc + value, 0);
    const totalPurchases = purchases.reduce((acc, value) => acc + value, 0);

    return {
      dates,
      sales,
      profits,
      purchases,
      totalSales,
      totalProfits,
      totalPurchases
    };
  };

  const getDateRangeData = (range) => {
    const currentDate = new Date('2023-06-17'); // Assuming the end date
    const dateRanges = {
      '1 week': 7,
      '2 weeks': 14,
      '1 month': 30
    };

    const filterDate = new Date(currentDate);
    filterDate.setDate(filterDate.getDate() - dateRanges[range]);

    const filteredData = salesData
      .filter(item => new Date(item.sale_date) > filterDate)
      .sort((a, b) => new Date(a.sale_date) - new Date(b.sale_date));

    return aggregateDataByDate(filteredData);
  };

  const chartData = getDateRangeData(dateRange);

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
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
      categories: chartData.dates.map(formatDate)
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
      data: chartData.sales
    },
    {
      name: 'Profits',
      data: chartData.profits
    },
    {
      name: 'Purchases',
      data: chartData.purchases
    }
  ];

  return (
    <div className='text-center shadow-md'>
      <h1>Sales, Profit and Purchases in the last {dateRange.replace('1', 'One ').replace('week', 'Week').replace('weeks', 'Weeks').replace('month', 'Month')}.</h1>
      <div>
        <label htmlFor="dateRange">Select Date Range: </label>
        <select id="dateRange" value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
          <option value="1 week">1 Week</option>
          <option value="2 weeks">2 Weeks</option>
          <option value="1 month">1 Month</option>
        </select>
      </div>
      <div className="additional-info">
        <p>Total Sales: Ksh {chartData.totalSales}</p>
        <p>Total Profits: Ksh {chartData.totalProfits}</p>
        <p>Total Purchases: Ksh {chartData.totalPurchases}</p>
      </div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
